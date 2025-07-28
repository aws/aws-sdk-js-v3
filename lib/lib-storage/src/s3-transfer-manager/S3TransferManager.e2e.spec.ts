import {
  GetObjectCommandOutput,
  ListBucketInventoryConfigurationsOutputFilterSensitiveLog,
  PutObjectCommand,
  S3,
} from "@aws-sdk/client-s3";
import internal from "stream";
import { getHeapSnapshot } from "v8";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";
import { Upload } from "../Upload";
import { internalEventHandler, S3TransferManager } from "./S3TransferManager";
import type { IS3TransferManager, S3TransferManagerConfig } from "./types";

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

  // TODO: eventListener callback tests - transferInitiated, bytesTransferred, transferComplete
  // TODO: Integration test for transferFailed
  // TODO: Write README, think in customer perspective, then based on that write e2e tests

  describe("multi part download", () => {
    const modes = ["PART", "RANGE"] as S3TransferManagerConfig["multipartDownloadType"][];
    // 6 = 1 part, 11 = 2 part, 19 = 3 part
    const sizes = [6, 11, 19, 0] as number[];

    for (const mode of modes) {
      for (const size of sizes) {
        it(`should download an object of size ${size} with mode ${mode}`, async () => {
          const totalSizeMB = size * 1024 * 1024;
          const Body = data(totalSizeMB);
          const Key = `${mode}-size`;

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

  /**
   * TODO: RANGE multipartdownloadtype specific tests
   * - Download object uploaded using multipart upload
   *  - Download with custom range
   *    - bytes=0-5242880
   *    - bytes=0-10485760
   * - Download object uploaded using single part upload
   *  - Download with custom range
   *    - bytes=0-5242880
   *    - bytes=0-10485760
   */
  describe.skip("RANGE tests", () => {
    const sizes = [0] as number[];
    for (const size of sizes) {
      it(`should download an object of size ${size} with mode RANGE`, async () => {
        const totalSizeMB = size * 1024 * 1024;
        const Body = data(totalSizeMB);
        const Key = `RANGE-${size}`;

        await new Upload({
          client,
          params: { Bucket, Key, Body },
        }).done();

        const tm: S3TransferManager = tmRange;

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
        expect(bytesTransferred).toEqual(Body.length);
        expect(handleEventCalled).toEqual(true);
      }, 60_000);
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

          await tm.download(
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

  describe("(SEP) download single object tests", () => {
    async function sepTests(
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
      await sepTests("single", "PART", `bytes=0-${12 * 1024 * 1024}`, undefined);
    }, 60_000);
    it("multipart object: multipartDownloadType = RANGE, range = 0-12MB, partNumber = null", async () => {
      await sepTests("multipart", "RANGE", `bytes=0-${12 * 1024 * 1024}`, undefined);
    }, 60_000);
    // skipped because TM no longer supports partNumber
    it.skip("single object: multipartDownloadType = PART, range = null, partNumber = 2", async () => {
      await sepTests("single", "PART", undefined, 2);
    }, 60_000);
    it.skip("single object: multipartDownloadType = RANGE, range = null, partNumber = 2", async () => {
      await sepTests("single", "RANGE", undefined, 2);
    }, 60_000);
    it("single object: multipartDownloadType = PART, range = null, partNumber = null", async () => {
      await sepTests("single", "PART", undefined, undefined);
    }, 60_000);
    it("single object: multipartDownloadType = RANGE, range = null, partNumber = null", async () => {
      await sepTests("single", "RANGE", undefined, undefined);
    }, 60_000);
  });
});
