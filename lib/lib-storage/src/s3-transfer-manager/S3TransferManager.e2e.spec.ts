import type { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { S3 } from "@aws-sdk/client-s3";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";
import { Upload } from "../Upload";
import { internalEventHandler, S3TransferManager } from "./S3TransferManager";
import type { S3TransferManagerConfig } from "./types";

describe(S3TransferManager.name, () => {
  const chunk = "01234567";

  function data(bytes: number) {
    let buffer = "";
    while (buffer.length < bytes) {
      buffer += chunk;
    }
    return buffer.slice(0, bytes);
  }

  function check(str = "") {
    while (str.length > 0) {
      expect(str.slice(0, 8)).toEqual(chunk);
      str = str.slice(8);
    }
  }

  let client: S3;
  let tmPart: S3TransferManager;
  let tmRange: S3TransferManager;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    void getIntegTestResources;

    client = new S3({
      region,
    });
    tmPart = new S3TransferManager({
      s3ClientInstance: client,
      multipartDownloadType: "PART",
    });
    tmRange = new S3TransferManager({
      s3ClientInstance: client,
      multipartDownloadType: "RANGE",
    });
  }, 120_000);

  describe("multi part download", () => {
    const modes = ["PART", "RANGE"] as S3TransferManagerConfig["multipartDownloadType"][];
    // 6 = 1 part, 11 = 2 part, 19 = 3 part
    const sizes = [6, 11, 19, 0] as number[];

    for (const mode of modes) {
      for (const size of sizes) {
        it(`should download an object of size ${size} with mode ${mode}`, async () => {
          const totalSizeMB = size * 1024 * 1024;
          const Body = data(totalSizeMB);
          const Key = `${mode}-${size}`;

          await new Upload({
            client,
            params: { Bucket, Key, Body },
          }).done();

          const tm: S3TransferManager = mode === "PART" ? tmPart : tmRange;

          const expectBasicTransfer = (request: any, snapshot: any) => {
            expect(request.Bucket).toEqual(Bucket);
            expect(request.Key).toEqual(Key);
            expect(snapshot.totalBytes).toEqual(totalSizeMB);
          };

          let bytesTransferred = 0;
          let handleEventCalled = false;
          const download = await tm.download(
            { Bucket, Key },
            {
              eventListeners: {
                transferInitiated: [
                  ({ request, snapshot }) => {
                    expectBasicTransfer(request, snapshot);
                    expect(snapshot.transferredBytes).toEqual(0);
                  },
                ],
                bytesTransferred: [
                  ({ request, snapshot }) => {
                    expectBasicTransfer(request, snapshot);
                    bytesTransferred = snapshot.transferredBytes;
                    expect(snapshot.transferredBytes).toEqual(bytesTransferred);
                  },
                ],
                transferComplete: [
                  ({ request, snapshot, response }) => {
                    expectBasicTransfer(request, snapshot);
                    expect(snapshot.transferredBytes).toEqual(totalSizeMB);
                    expect(response.ETag).toBeDefined();
                    expect((response as GetObjectCommandOutput).ContentLength).toEqual(totalSizeMB);
                  },
                  {
                    handleEvent: (event: any) => {
                      handleEventCalled = true;
                      expect(event.request.Bucket).toEqual(Bucket);
                      expect(event.response).toBeDefined();
                    },
                  },
                ],
              },
            }
          );
          const serialized = await download.Body?.transformToString();
          check(serialized);

          expect(download.ContentLength).toEqual(totalSizeMB);
          expect(download.ContentRange).toEqual(`bytes 0-${totalSizeMB - 1}/${totalSizeMB}`);
          expect(bytesTransferred).toEqual(Body.length);
          expect(handleEventCalled).toEqual(true);
        }, 60_000);
      }
    }
  });

  describe("RANGE tests", () => {
    const uploadTypes = ["multipart", "single"] as const;
    const ranges = ["bytes=0-5242879", "bytes=0-10485759"];

    for (const uploadType of uploadTypes) {
      for (const range of ranges) {
        it(`should download ${uploadType} uploaded object with range ${range}`, async () => {
          const totalSizeMB = 12 * 1024 * 1024; // 12MB
          const Body = data(totalSizeMB);
          const Key = `RANGE-${uploadType}-${range.replace(/[^0-9]/g, "")}`;

          // Upload based on type
          if (uploadType === "multipart") {
            await new Upload({
              client,
              params: { Bucket, Key, Body },
            }).done();
          } else {
            await client.putObject({ Bucket, Key, Body });
          }

          const tm: S3TransferManager = tmRange;
          const rangeEnd = parseInt(range.split("-")[1]);
          const expectedBytes = rangeEnd + 1;

          const download = await tm.download({ Bucket, Key, Range: range });
          const serialized = await download.Body?.transformToString();
          check(serialized);

          expect(download.ContentLength).toEqual(expectedBytes);
          expect(download.ContentRange).toEqual(`bytes 0-${rangeEnd}/${rangeEnd + 1}`);
        }, 60_000);
      }
    }
  });

  describe("error handling", () => {
    const modes = ["PART", "RANGE"] as S3TransferManagerConfig["multipartDownloadType"][];

    for (const mode of modes) {
      it(`should fail when ETag changes during a ${mode} download`, async () => {
        const totalSizeMB = 20 * 1024 * 1024;
        const Body = data(totalSizeMB);
        const Key = `${mode}-etag-test`;

        if (mode === "PART") {
          await new Upload({
            client,
            params: { Bucket, Key, Body },
          }).done();
        } else {
          await client.putObject({ Bucket, Key, Body });
        }

        let transferFailed = false;
        const tm: S3TransferManager = mode === "PART" ? tmPart : tmRange;

        try {
          internalEventHandler.afterInitialGetObject = async () => {
            try {
              if (mode === "PART") {
                await new Upload({
                  client,
                  params: { Bucket, Key, Body: data(20 * 1024 * 1024 - 8) },
                }).done();
              } else {
                await client.putObject({ Bucket, Key, Body: data(20 * 1024 * 1024 - 8) });
              }
            } catch (err) {
              // ignore errors
            }
            internalEventHandler.afterInitialGetObject = async () => {};
          };

          const downloadResponse = await tm.download(
            { Bucket, Key },
            {
              eventListeners: {
                transferInitiated: [],
                bytesTransferred: [],
                transferFailed: [
                  () => {
                    transferFailed = true;
                  },
                ],
              },
            }
          );
          await downloadResponse.Body?.transformToByteArray();
          expect.fail("Download should have failed due to ETag mismatch");
        } catch (error) {
          expect(transferFailed).toBe(true);
          expect(error.name).toEqual("PreconditionFailed");
        } finally {
          internalEventHandler.afterInitialGetObject = async () => {};
        }
      }, 60_000);
    }
  });

  describe("download with abortController ", () => {
    const modes = ["PART"] as S3TransferManagerConfig["multipartDownloadType"][];
    for (const mode of modes) {
      it(`should cancel ${mode} download on abort()`, async () => {
        const totalSizeMB = 10 * 1024 * 1024;
        const Body = data(totalSizeMB);
        const Key = `${mode}-size`;
        await new Upload({
          client,
          params: { Bucket, Key, Body },
        }).done();
        const tm: S3TransferManager = mode === "PART" ? tmPart : tmRange;
        const controller = new AbortController();
        try {
          await tm.download(
            { Bucket, Key },
            {
              abortSignal: controller.signal,
              eventListeners: {
                transferInitiated: [
                  () => {
                    controller.abort();
                  },
                ],
              },
            }
          );
          expect.fail("Download should have been aborted");
        } catch (error) {
          expect(error.name).toEqual("AbortError");
        }
      }, 60_000);
    }
  });

  describe("Required compliance download single object tests", () => {
    async function complianceTests(
      objectType: "single" | "multipart",
      multipartType: "PART" | "RANGE",
      range: string | undefined,
      partNumber: 2 | undefined
    ) {
      const Body = data(12 * 1024 * 1024);
      const Key = `${objectType}${multipartType}${range}${partNumber}`;
      const DEFAULT_PART_SIZE = 8 * 1024 * 1024;

      if (multipartType === "PART") {
        await new Upload({
          client,
          partSize: DEFAULT_PART_SIZE,
          params: {
            Bucket,
            Key,
            Body,
          },
        }).done();
      } else {
        await client.putObject({
          Bucket,
          Key,
          Body,
        });
      }

      const tm: S3TransferManager = multipartType === "PART" ? tmPart : tmRange;

      const download = await tm.download({
        Bucket,
        Key,
        Range: range,
        PartNumber: partNumber,
      });
      const serialized = await download.Body?.transformToString();
      check(serialized);
      if (partNumber) {
        expect(serialized?.length).toEqual(4 * 1024 * 1024); // Part 1 is 8MB Part 2 is 4MB
      } else {
        expect(serialized?.length).toEqual(Body.length);
      }
    }

    it("single object: multipartDownloadType = PART, range = 0-12MB, partNumber = null", async () => {
      await complianceTests("single", "PART", `bytes=0-${12 * 1024 * 1024}`, undefined);
    }, 60_000);
    it("multipart object: multipartDownloadType = RANGE, range = 0-12MB, partNumber = null", async () => {
      await complianceTests("multipart", "RANGE", `bytes=0-${12 * 1024 * 1024}`, undefined);
    }, 60_000);
    it("single object: multipartDownloadType = PART, range = null, partNumber = null", async () => {
      await complianceTests("single", "PART", undefined, undefined);
    }, 60_000);
    it("single object: multipartDownloadType = RANGE, range = null, partNumber = null", async () => {
      await complianceTests("single", "RANGE", undefined, undefined);
    }, 60_000);
  });

  describe("upload tests", () => {
    it("should upload object below multipart threshold using single PutObject", async () => {
      const Body = data(10 * 1024 * 1024); // 10MB - below 16MB threshold
      const Key = `upload-single-${Date.now()}`;

      let transferInitiated = false;
      let bytesTransferred = 0;
      let transferComplete = false;

      const response = await tmPart.upload(
        { Bucket, Key, Body, ChecksumAlgorithm: "CRC32" },
        {
          eventListeners: {
            transferInitiated: [
              ({ request, snapshot }) => {
                transferInitiated = true;
                expect(request.Bucket).toEqual(Bucket);
                expect(request.Key).toEqual(Key);
                expect(snapshot.transferredBytes).toEqual(0);
                expect(snapshot.totalBytes).toEqual(Body.length);
              },
            ],
            bytesTransferred: [
              ({ snapshot }) => {
                bytesTransferred = snapshot.transferredBytes;
              },
            ],
            transferComplete: [
              ({ snapshot, response }) => {
                transferComplete = true;
                expect(snapshot.transferredBytes).toEqual(Body.length);
                expect(response.ETag).toBeDefined();
              },
            ],
          },
        }
      );

      expect(transferInitiated).toBe(true);
      expect(bytesTransferred).toEqual(Body.length);
      expect(transferComplete).toBe(true);
      expect(response.ETag).toBeDefined();

      // Verify upload
      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload object above multipart threshold using multipart upload", async () => {
      const Body = data(24 * 1024 * 1024); // 24MB - above 16MB threshold, 3 parts
      const Key = `upload-multipart-${Date.now()}`;

      let transferInitiated = false;
      let bytesTransferredEvents = 0;
      let transferComplete = false;

      const response = await tmPart.upload(
        { Bucket, Key, Body, ChecksumAlgorithm: "CRC32" },
        {
          eventListeners: {
            transferInitiated: [
              ({ request, snapshot }) => {
                transferInitiated = true;
                expect(request.Bucket).toEqual(Bucket);
                expect(request.Key).toEqual(Key);
                expect(snapshot.transferredBytes).toEqual(0);
                expect(snapshot.totalBytes).toEqual(Body.length);
              },
            ],
            bytesTransferred: [
              ({ snapshot }) => {
                bytesTransferredEvents++;
                expect(snapshot.transferredBytes).toBeGreaterThan(0);
                expect(snapshot.transferredBytes).toBeLessThanOrEqual(Body.length);
              },
            ],
            transferComplete: [
              ({ snapshot, response }) => {
                transferComplete = true;
                expect(snapshot.transferredBytes).toEqual(Body.length);
                expect(response.ETag).toBeDefined();
              },
            ],
          },
        }
      );

      expect(transferInitiated).toBe(true);
      expect(bytesTransferredEvents).toBeGreaterThan(0);
      expect(transferComplete).toBe(true);
      expect(response.ETag).toBeDefined();

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload multipart with uneven last part", async () => {
      const Body = data(10 * 1024 * 1024); // 10MB - 2 parts with uneven last part
      const Key = `upload-uneven-${Date.now()}`;
      const customPartSize = 8 * 1024 * 1024; // 8MB parts
      const expectedPartCount = 2;

      const tmCustom = new S3TransferManager({
        s3ClientInstance: client,
        targetPartSizeBytes: customPartSize,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      let partCount = 0;
      const response = await tmCustom.upload(
        { Bucket, Key, Body, ChecksumAlgorithm: "CRC32" },
        {
          eventListeners: {
            bytesTransferred: [
              () => {
                partCount++;
              },
            ],
          },
        }
      );

      expect(response.ETag).toBeDefined();
      expect(partCount).toEqual(expectedPartCount);

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload single object with full object checksum", async () => {
      const Body = data(10 * 1024 * 1024); // 10MB
      const Key = `upload-checksum-calc-${Date.now()}`;

      const response = await tmPart.upload({ Bucket, Key, Body, ChecksumAlgorithm: "CRC32" });

      expect(response.ETag).toBeDefined();
      expect(response.ChecksumCRC32).toBeDefined();
      expect(response.ChecksumType).toBe("FULL_OBJECT");

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should abort multipart upload on error", async () => {
      const Body = data(24 * 1024 * 1024); // 24MB
      const Key = `upload-abort-${Date.now()}`;
      const controller = new AbortController();

      let transferFailed = false;

      try {
        await tmPart.upload(
          { Bucket, Key, Body, ChecksumAlgorithm: "CRC32" },
          {
            abortSignal: controller.signal,
            eventListeners: {
              transferInitiated: [
                () => {
                  controller.abort();
                },
              ],
              transferFailed: [
                () => {
                  transferFailed = true;
                },
              ],
            },
          }
        );
        expect.fail("Upload should have been aborted");
      } catch (error) {
        expect(error.name).toEqual("AbortError");
        expect(transferFailed).toBe(true);
      }
    }, 60_000);

    it("should upload empty file", async () => {
      const Body = "";
      const Key = `upload-empty-${Date.now()}`;

      const response = await tmPart.upload({ Bucket, Key, Body });

      expect(response.ETag).toBeDefined();

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(0);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload multipart with composite checksum", async () => {
      const Body = data(20 * 1024 * 1024); // 20MB
      const Key = `upload-checksum-${Date.now()}`;

      const clientWithChecksumCalc = new S3({
        region,
        requestChecksumCalculation: "WHEN_SUPPORTED",
      });

      const tmCustom = new S3TransferManager({
        s3ClientInstance: clientWithChecksumCalc,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 16 * 1024 * 1024,
      });

      const response = await tmCustom.upload({
        Bucket,
        Key,
        Body,
        ChecksumAlgorithm: "CRC32",
      });

      expect(response.ETag).toBeDefined();
      expect(response.ChecksumCRC32).toBeDefined();
      expect(response.ChecksumType).toBe("COMPOSITE");

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToString();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);
  });
});
