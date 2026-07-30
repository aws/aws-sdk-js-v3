import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import type { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeAll, describe, expect, test as it } from "vitest";

import { internalEventHandler, S3TransferManager } from "./S3TransferManager";
import type { CannedFailurePolicy, DirectoryProgressSnapshot, S3TransferManagerConfig } from "./types";

describe(S3TransferManager.name, () => {
  const PATTERN = new Uint8Array([0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37]); // "01234567" as bytes

  function data(bytes: number): Uint8Array {
    const buf = new Uint8Array(bytes);
    if (bytes === 0) return buf;
    const seedLen = Math.min(PATTERN.length, bytes);
    buf.set(PATTERN.subarray(0, seedLen));
    let filled = seedLen;
    while (filled < bytes) {
      const copyLen = Math.min(filled, bytes - filled);
      buf.copyWithin(filled, 0, filled + copyLen);
      filled += copyLen;
    }
    return buf;
  }

  function check(buf: Uint8Array) {
    const expected = data(buf.length);
    expect(Buffer.from(buf).equals(Buffer.from(expected))).toBe(true);
  }

  let client: S3;
  let tmPart: S3TransferManager;
  let tmRange: S3TransferManager;
  let Bucket: string;
  let region: string;

  // Fixture sizes in bytes
  const SIZE_5MB = 5 * 1024 * 1024;
  const SIZE_6MB = 6 * 1024 * 1024;
  const SIZE_11MB = 11 * 1024 * 1024;
  const SIZE_12MB = 12 * 1024 * 1024;
  const SIZE_19MB = 19 * 1024 * 1024;

  // Fixture keys — uploaded once in beforeAll, reused by all download tests
  const FIXTURES = {
    multipart_11mb: "fixture-multipart-11mb",
    multipart_19mb: "fixture-multipart-19mb",
    multipart_12mb_8mbParts: "fixture-multipart-12mb-8mbparts",
    single_6mb: "fixture-single-6mb",
    single_5mb: "fixture-single-5mb",
    empty: "fixture-empty",
  };

  beforeAll(async () => {
    const e2eEnv = await getE2eTestResources();
    Object.assign(process.env, e2eEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;

    client = new S3({
      region,
    });
    tmPart = new S3TransferManager({
      s3: client,
      multipartDownloadType: "PART",
    });
    tmRange = new S3TransferManager({
      s3: client,
      multipartDownloadType: "RANGE",
    });

    // Upload all fixtures in parallel
    await Promise.all([
      new Upload({ client, params: { Bucket, Key: FIXTURES.multipart_11mb, Body: data(SIZE_11MB) } }).done(),
      new Upload({ client, params: { Bucket, Key: FIXTURES.multipart_19mb, Body: data(SIZE_19MB) } }).done(),
      new Upload({
        client,
        partSize: 8 * 1024 * 1024,
        params: { Bucket, Key: FIXTURES.multipart_12mb_8mbParts, Body: data(SIZE_12MB) },
      }).done(),
      client.putObject({ Bucket, Key: FIXTURES.single_6mb, Body: data(SIZE_6MB) }),
      client.putObject({ Bucket, Key: FIXTURES.single_5mb, Body: data(SIZE_5MB) }),
      client.putObject({ Bucket, Key: FIXTURES.empty, Body: data(0) }),
    ]);
  }, 120_000);

  describe("multi part download", () => {
    const testCases: { mode: S3TransferManagerConfig["multipartDownloadType"]; key: string; size: number }[] = [
      { mode: "PART", key: FIXTURES.multipart_11mb, size: SIZE_11MB },
      { mode: "PART", key: FIXTURES.multipart_19mb, size: SIZE_19MB },
      { mode: "PART", key: FIXTURES.empty, size: 0 },
      { mode: "RANGE", key: FIXTURES.single_5mb, size: SIZE_5MB },
      { mode: "RANGE", key: FIXTURES.multipart_11mb, size: SIZE_11MB },
      { mode: "RANGE", key: FIXTURES.empty, size: 0 },
    ];

    for (const { mode, key: Key, size: totalBytes } of testCases) {
      it(`should download ${Key} (${totalBytes} bytes) with mode ${mode}`, async () => {
        const tm: S3TransferManager = mode === "PART" ? tmPart : tmRange;

        const expectBasicTransfer = (request: any, snapshot: any) => {
          expect(request.Bucket).toEqual(Bucket);
          expect(request.Key).toEqual(Key);
          expect(snapshot.totalBytes).toEqual(totalBytes);
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
                  expect(snapshot.transferredBytes).toEqual(totalBytes);
                  expect(response.ETag).toBeDefined();
                  expect((response as GetObjectCommandOutput).ContentLength).toEqual(totalBytes);
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
        const downloaded = await download.Body?.transformToByteArray();
        check(downloaded!);

        expect(download.ContentLength).toEqual(totalBytes);
        expect(download.ContentRange).toEqual(`bytes 0-${totalBytes - 1}/${totalBytes}`);
        expect(bytesTransferred).toEqual(totalBytes);
        expect(handleEventCalled).toEqual(true);
      }, 60_000);
    }
  });

  describe("RANGE tests", () => {
    const testCases = [
      { key: FIXTURES.multipart_11mb, range: `bytes=0-${SIZE_5MB - 1}`, expectedBytes: SIZE_5MB },
      { key: FIXTURES.multipart_11mb, range: `bytes=0-${SIZE_11MB - 1}`, expectedBytes: SIZE_11MB },
      { key: FIXTURES.single_6mb, range: `bytes=0-${SIZE_5MB - 1}`, expectedBytes: SIZE_5MB },
      { key: FIXTURES.single_6mb, range: `bytes=0-${SIZE_6MB - 1}`, expectedBytes: SIZE_6MB },
    ];

    for (const { key: Key, range, expectedBytes } of testCases) {
      it(`should download ${Key} with range ${range}`, async () => {
        const rangeEnd = parseInt(range.split("-")[1]);

        const download = await tmRange.download({ Bucket, Key, Range: range });
        const downloaded = await download.Body?.transformToByteArray();
        check(downloaded!);

        expect(download.ContentLength).toEqual(expectedBytes);
        expect(download.ContentRange).toEqual(`bytes 0-${rangeEnd}/${rangeEnd + 1}`);
      }, 60_000);
    }
  });

  describe("error handling", () => {
    const modes = ["PART", "RANGE"] as S3TransferManagerConfig["multipartDownloadType"][];

    for (const mode of modes) {
      it(`should fail when ETag changes during a ${mode} download`, async () => {
        const objectSize = SIZE_11MB;
        const Body = data(objectSize);
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
              const replacement = data(objectSize - 8);
              if (mode === "PART") {
                await new Upload({
                  client,
                  params: { Bucket, Key, Body: replacement },
                }).done();
              } else {
                await client.putObject({ Bucket, Key, Body: replacement });
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
    it(`should cancel PART download on abort()`, async () => {
      const Key = FIXTURES.multipart_11mb;
      const controller = new AbortController();
      try {
        await tmPart.download(
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
  });

  describe("Required compliance download single object tests", () => {
    it("multipart object: multipartDownloadType = PART, range = full, partNumber = null", async () => {
      const download = await tmPart.download({
        Bucket,
        Key: FIXTURES.multipart_12mb_8mbParts,
        Range: `bytes=0-${SIZE_12MB}`,
      });
      const downloaded = await download.Body?.transformToByteArray();
      check(downloaded!);
      expect(downloaded!.length).toEqual(SIZE_12MB);
    }, 60_000);

    it("multipart object: multipartDownloadType = RANGE, range = full, partNumber = null", async () => {
      const download = await tmRange.download({
        Bucket,
        Key: FIXTURES.multipart_12mb_8mbParts,
        Range: `bytes=0-${SIZE_12MB}`,
      });
      const downloaded = await download.Body?.transformToByteArray();
      check(downloaded!);
      expect(downloaded!.length).toEqual(SIZE_12MB);
    }, 60_000);

    it("single object: multipartDownloadType = PART, range = null, partNumber = null", async () => {
      const download = await tmPart.download({ Bucket, Key: FIXTURES.single_6mb });
      const downloaded = await download.Body?.transformToByteArray();
      check(downloaded!);
      expect(downloaded!.length).toEqual(SIZE_6MB);
    }, 60_000);

    it("single object: multipartDownloadType = RANGE, range = null, partNumber = null", async () => {
      const download = await tmRange.download({ Bucket, Key: FIXTURES.single_6mb });
      const downloaded = await download.Body?.transformToByteArray();
      check(downloaded!);
      expect(downloaded!.length).toEqual(SIZE_6MB);
    }, 60_000);
  });

  describe("upload tests", () => {
    let uploadTm: S3TransferManager;

    afterEach(() => {
      // Create a fresh instance for each test to prevent listener leakage
      // when tests timeout and cleanup code doesn't execute.
      uploadTm = new S3TransferManager({
        s3: client,
        multipartDownloadType: "PART",
      });
    });

    it("should upload object below multipart threshold using single PutObject", async () => {
      uploadTm = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
      const Body = data(SIZE_6MB); // 6MB - below 16MB threshold
      const Key = `upload-single-${Date.now()}`;

      let transferInitiated = false;
      let bytesTransferred = 0;
      let transferComplete = false;

      const response = await uploadTm.upload(
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
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload object above multipart threshold using multipart upload", async () => {
      uploadTm = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
      const Body = data(16 * 1024 * 1024); // 16MB - above threshold, 3 parts at 5MB min
      const Key = `upload-multipart-${Date.now()}`;

      let transferInitiated = false;
      let bytesTransferredEvents = 0;
      let transferComplete = false;

      const response = await uploadTm.upload(
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
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload multipart with uneven last part", async () => {
      const Body = data(10 * 1024 * 1024); // 10MB - 2 parts with uneven last part
      const Key = `upload-uneven-${Date.now()}`;
      const customPartSize = 8 * 1024 * 1024; // 8MB parts
      const expectedPartCount = 2;

      const tmCustom = new S3TransferManager({
        s3: client,
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
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload single object with full object checksum", async () => {
      uploadTm = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
      const Body = data(SIZE_6MB); // 6MB
      const Key = `upload-checksum-calc-${Date.now()}`;

      const response = await uploadTm.upload({ Bucket, Key, Body, ChecksumAlgorithm: "CRC32" });

      expect(response.ETag).toBeDefined();
      expect(response.ChecksumCRC32).toBeDefined();
      expect(response.ChecksumType).toBe("FULL_OBJECT");

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should abort multipart upload on error", async () => {
      uploadTm = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
      const Body = data(16 * 1024 * 1024); // 16MB
      const Key = `upload-abort-${Date.now()}`;
      const controller = new AbortController();

      let transferFailed = false;

      try {
        await uploadTm.upload(
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
      uploadTm = new S3TransferManager({ s3: client, multipartDownloadType: "PART" });
      const Body = new Uint8Array(0);
      const Key = `upload-empty-${Date.now()}`;

      const response = await uploadTm.upload({ Bucket, Key, Body });

      expect(response.ETag).toBeDefined();

      const download = await client.getObject({ Bucket, Key });
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(0);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);

    it("should upload multipart with composite checksum", async () => {
      const Body = data(SIZE_11MB); // 11MB
      const Key = `upload-checksum-${Date.now()}`;

      const clientWithChecksumCalc = new S3({
        region,
        requestChecksumCalculation: "WHEN_SUPPORTED",
      });

      const tmCustom = new S3TransferManager({
        s3: clientWithChecksumCalc,
        targetPartSizeBytes: 5 * 1024 * 1024,
        multipartUploadThresholdBytes: 5 * 1024 * 1024,
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
      const downloadedData = await download.Body?.transformToByteArray();
      expect(downloadedData?.length).toEqual(Body.length);

      await client.deleteObject({ Bucket, Key });
    }, 60_000);
  });

  describe("uploadDirectory tests", () => {
    const prefix = `upload-dir-e2e-${Date.now()}`;

    async function cleanupS3Objects(s3Prefix: string) {
      const listed = await client.listObjectsV2({ Bucket, Prefix: s3Prefix });
      if (listed.Contents?.length) {
        await Promise.all(listed.Contents.map((obj) => client.deleteObject({ Bucket, Key: obj.Key! })));
      }
    }

    it("should upload directory recursively", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "photo1.jpg"), data(2048576));
      await mkdir(join(tmpDir, "2023", "jan"), { recursive: true });
      await writeFile(join(tmpDir, "2023", "jan", "photo2.jpg"), data(1048576));
      await writeFile(join(tmpDir, "readme.txt"), data(1024));

      const s3Prefix = `${prefix}/recursive`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: true,
          s3Prefix,
        });

        expect(result.objectsUploaded).toBe(3);
        expect(result.objectsFailed).toBe(0);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });

    it("should upload directory with s3Prefix", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "file1.txt"), data(1024));
      await mkdir(join(tmpDir, "sub"));
      await writeFile(join(tmpDir, "sub", "file2.txt"), data(1024));

      const s3Prefix = `${prefix}/backup`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: true,
          s3Prefix,
        });

        expect(result.objectsUploaded).toBe(2);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });

    it("should upload only root-level files when non-recursive", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "file1.txt"), data(1048576));
      await mkdir(join(tmpDir, "subdir"));
      await writeFile(join(tmpDir, "subdir", "file2.txt"), data(2048576));

      const s3Prefix = `${prefix}/nonrecursive`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: false,
          s3Prefix,
        });

        expect(result.objectsUploaded).toBe(1);
        expect(result.objectsFailed).toBe(0);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });

    it("should apply filter to only upload the files that match.", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "image.jpg"), data(2048576));
      await writeFile(join(tmpDir, "document.txt"), data(2048576));

      const s3Prefix = `${prefix}/filtered`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: true,
          s3Prefix,
          filter: (filePath) => filePath.endsWith(".jpg"),
        });

        expect(result.objectsUploaded).toBe(1);
        expect(result.objectsFailed).toBe(0);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });

    it("test upload directory - failure handling with continue policy", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "good.txt"), data(1024));
      await writeFile(join(tmpDir, "bad.txt"), data(1024));

      const s3Prefix = `${prefix}/continue-policy`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: true,
          s3Prefix,
          failurePolicy: "continue" as CannedFailurePolicy,
          uploadObjectRequestModifier: (req) => {
            if (req.Key?.endsWith("bad.txt")) {
              return { ...req, Bucket: "nonexistent-bucket-xyz-12345" };
            }
            return req;
          },
        });

        expect(result.objectsUploaded).toBe(1);
        expect(result.objectsFailed).toBe(1);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });

    it("should terminate on first failure with default policy", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "file1.txt"), data(1024));
      await writeFile(join(tmpDir, "file2.txt"), data(1024));

      const s3Prefix = `${prefix}/terminate-policy`;
      const tm = new S3TransferManager({ s3: client });

      try {
        await expect(
          tm.uploadDirectory({
            bucket: "nonexistent-bucket-xyz-12345",
            source: tmpDir,
            recursive: true,
            s3Prefix,
          })
        ).rejects.toThrow();
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should handle empty directory", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));

      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: true,
        });

        expect(result.objectsUploaded).toBe(0);
        expect(result.objectsFailed).toBe(0);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should report directory upload transfer progress via event listeners", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "file1.txt"), data(1024));
      await writeFile(join(tmpDir, "file2.txt"), data(2048));
      await mkdir(join(tmpDir, "sub"));
      await writeFile(join(tmpDir, "sub", "file3.txt"), data(4096));

      const s3Prefix = `${prefix}/progress`;
      const tm = new S3TransferManager({ s3: client });

      let initiated = false;
      let completed = false;
      const progressSnapshots: DirectoryProgressSnapshot[] = [];

      try {
        const result = await tm.uploadDirectory(
          {
            bucket: Bucket,
            source: tmpDir,
            recursive: true,
            s3Prefix,
          },
          {
            eventListeners: {
              transferInitiated: [
                (event) => {
                  const snapshot = event.snapshot as DirectoryProgressSnapshot;
                  if ("transferredFiles" in event.snapshot) {
                    initiated = true;
                    expect(snapshot.transferredBytes).toBe(0);
                    expect(snapshot.transferredFiles).toBe(0);
                    expect(snapshot.totalFiles).toBeUndefined();
                  }
                },
              ],
              bytesTransferred: [
                (event) => {
                  if ("transferredFiles" in event.snapshot) {
                    progressSnapshots.push({ ...(event.snapshot as DirectoryProgressSnapshot) });
                  }
                },
              ],
              transferComplete: [
                (event) => {
                  if ("transferredFiles" in event.snapshot) {
                    completed = true;
                    const snapshot = event.snapshot as DirectoryProgressSnapshot;
                    expect(snapshot.transferredFiles).toBe(3);
                    expect(snapshot.totalFiles).toBe(3);
                    expect(snapshot.transferredBytes).toBe(1024 + 2048 + 4096);
                  }
                },
              ],
            },
          }
        );

        expect(initiated).toBe(true);
        expect(completed).toBe(true);
        expect(progressSnapshots.length).toBe(3);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    }, 60_000);

    it("should report transferFailed event on terminate policy", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "file1.txt"), data(1024));

      const s3Prefix = `${prefix}/progress-fail`;
      const tm = new S3TransferManager({ s3: client });

      let failedEvent = false;

      try {
        await tm.uploadDirectory(
          {
            bucket: "nonexistent-bucket-xyz-12345",
            source: tmpDir,
            recursive: true,
            s3Prefix,
          },
          {
            eventListeners: {
              transferFailed: [
                (event) => {
                  if ("transferredFiles" in event.snapshot) {
                    failedEvent = true;
                    const snapshot = event.snapshot as DirectoryProgressSnapshot;
                    expect(snapshot.transferredFiles).toBe(0);
                    expect(snapshot.totalFiles).toBe(1);
                  }
                },
              ],
            },
          }
        );
        expect.fail("Should have thrown");
      } catch (error) {
        expect(failedEvent).toBe(true);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    }, 60_000);

    it("should throw when source directory does not exist", async () => {
      const tm = new S3TransferManager({ s3: client });

      await expect(
        tm.uploadDirectory({
          bucket: Bucket,
          source: "/nonexistent/path/e2e-test",
          recursive: true,
        })
      ).rejects.toThrow("Cannot access directory at");
    });

    it("should use multipart upload for large files in directory", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-e2e-uploaddir-"));
      await writeFile(join(tmpDir, "large-video.mp4"), data(SIZE_6MB));
      await writeFile(join(tmpDir, "metadata.txt"), data(2048));

      const s3Prefix = `${prefix}/multipart`;
      const tm = new S3TransferManager({ s3: client });

      try {
        const result = await tm.uploadDirectory({
          bucket: Bucket,
          source: tmpDir,
          recursive: false,
          s3Prefix,
        });

        expect(result.objectsUploaded).toBe(2);
        expect(result.objectsFailed).toBe(0);
      } finally {
        await rm(tmpDir, { recursive: true });
        await cleanupS3Objects(s3Prefix);
      }
    });
  });
});
