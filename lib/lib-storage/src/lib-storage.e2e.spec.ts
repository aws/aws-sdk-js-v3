import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { type ChecksumAlgorithm, type S3ClientConfig, S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import { Readable } from "node:stream";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../tests/e2e/get-integ-test-resources";

describe("@aws-sdk/lib-storage", () => {
  describe.each([undefined, "WHEN_REQUIRED", "WHEN_SUPPORTED"])(
    "requestChecksumCalculation: %s",
    (requestChecksumCalculation) => {
      describe.each([undefined, "SHA1", "SHA256", "CRC32", "CRC32C"])("ChecksumAlgorithm: %s", (ChecksumAlgorithm) => {
        let Key: string;
        let client: S3;
        let data: Uint8Array;
        let dataString: string;
        let Bucket: string;
        let region: string;

        beforeAll(async () => {
          const e2eTestResourcesEnv = await getE2eTestResources();
          Object.assign(process.env, e2eTestResourcesEnv);
          region = process.env.AWS_SMOKE_TEST_REGION as string;
          Bucket = process.env.AWS_SMOKE_TEST_BUCKET as string;
          data = randomBytes(20_240_000);
          dataString = data.toString();
        }, 45_000);

        // Test body types with a single checksum config (CRC32).
        // Body serialization is independent of checksum algorithm.
        describe("body types", () => {
          let client: S3;
          let Key: string;

          beforeAll(() => {
            client = new S3({ region });
            Key = `multi-part-body-types-${Date.now()}`;
          });

          afterAll(async () => {
            if (client && Bucket && Key) {
              try {
                await client.deleteObject({ Bucket, Key });
              } catch (error) {
                console.warn("Failed to clean up test object:", error);
              }
            }
          }, 10_000);

          it("should upload in parts for input type bytes", async () => {
            const s3Upload = new Upload({
              client,
              params: { Bucket, Key, Body: data },
            });
            await s3Upload.done();

            const object = await client.getObject({ Bucket, Key });
            expect(await object.Body?.transformToString()).toEqual(dataString);
          });

          it("should upload in parts for input type string", async () => {
            const s3Upload = new Upload({
              client,
              params: { Bucket, Key, Body: dataString },
            });
            await s3Upload.done();

            const object = await client.getObject({ Bucket, Key });
            expect(await object.Body?.transformToString()).toEqual(dataString);
          });

          it("should upload in parts for input type Readable", async () => {
            const s3Upload = new Upload({
              client,
              params: { Bucket, Key, Body: Readable.from(data) },
            });
            await s3Upload.done();

            const object = await client.getObject({ Bucket, Key });
            expect(await object.Body?.transformToString()).toEqual(dataString);
          });
        });

        // Test checksum algorithm variations with a single body type (bytes).
        // Each meaningful combination of requestChecksumCalculation × ChecksumAlgorithm.
        describe.each([
          { requestChecksumCalculation: undefined, checksumAlgorithm: undefined },
          { requestChecksumCalculation: undefined, checksumAlgorithm: "SHA1" as ChecksumAlgorithm },
          { requestChecksumCalculation: undefined, checksumAlgorithm: "SHA256" as ChecksumAlgorithm },
          { requestChecksumCalculation: undefined, checksumAlgorithm: "CRC32C" as ChecksumAlgorithm },
          { requestChecksumCalculation: "WHEN_REQUIRED", checksumAlgorithm: undefined },
          { requestChecksumCalculation: "WHEN_SUPPORTED", checksumAlgorithm: "CRC32" as ChecksumAlgorithm },
        ] as Array<{
          requestChecksumCalculation?: S3ClientConfig["requestChecksumCalculation"];
          checksumAlgorithm?: ChecksumAlgorithm;
        }>)(
          "checksum: requestChecksumCalculation=$requestChecksumCalculation, algorithm=$checksumAlgorithm",
          ({ requestChecksumCalculation, checksumAlgorithm }) => {
            let client: S3;
            let Key: string;

            beforeAll(() => {
              client = new S3({ region, requestChecksumCalculation });
              Key = `multi-part-checksum-${requestChecksumCalculation}-${checksumAlgorithm}-${Date.now()}`;
            });

            afterAll(async () => {
              if (client && Bucket && Key) {
                try {
                  await client.deleteObject({ Bucket, Key });
                } catch (error) {
                  console.warn("Failed to clean up test object:", error);
                }
              }
            }, 10_000);

            it("should upload in parts", async () => {
              const s3Upload = new Upload({
                client,
                params: { Bucket, Key, Body: data, ChecksumAlgorithm: checksumAlgorithm },
              });
              await s3Upload.done();

              const object = await client.getObject({ Bucket, Key });
              expect(await object.Body?.transformToString()).toEqual(dataString);
            });
          }
        );

        // Abort test — independent of checksum config, run once.
        describe("abort handling", () => {
          it("should call AbortMultipartUpload if unable to complete a multipart upload.", async () => {
            const Key = `multi-part-abort-${Date.now()}`;

            class MockFailureS3 extends S3 {
              public counter = 0;
              async send(command: any, ...rest: any[]) {
                if (command?.constructor?.name === "UploadPartCommand" && this.counter++ % 3 === 0) {
                  throw new Error("simulated upload part error");
                }
                return super.send(command, ...rest);
              }
            }

            const mockClient = new MockFailureS3({ region });

            const requestLog = [] as string[];

            mockClient.middlewareStack.add(
              (next, context) => async (args) => {
                const result = await next(args);
                requestLog.push(
                  [context.clientName, context.commandName, result.output.$metadata.httpStatusCode].join(" ")
                );
                return result;
              },
              {
                name: "E2eRequestLog",
                step: "build",
                override: true,
              }
            );

            const s3Upload = new Upload({
              client: mockClient,
              params: { Bucket, Key, Body: data },
            });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            await s3Upload.done().catch((ignored) => {});

            const uploadStatus = await mockClient
              .listParts({ Bucket, Key, UploadId: s3Upload.uploadId })
              .then((listParts) => listParts.$metadata.httpStatusCode)
              .catch((err) => err.toString());

            expect(uploadStatus).toMatch(/NoSuchUpload:(.*?)aborted or completed\./);
            expect(requestLog).toEqual([
              "S3Client CreateMultipartUploadCommand 200",
              "S3Client UploadPartCommand 200",
              "S3Client UploadPartCommand 200",
              "S3Client AbortMultipartUploadCommand 204",
            ]);
          });
        });

        // Validation tests — run once, independent of checksum/body-type permutations.
        describe("validation", () => {
          let client: S3;

          beforeAll(() => {
            client = new S3({ region });
          });

          it("should validate part size constraints", () => {
            const upload = new Upload({
              client,
              params: {
                Bucket,
                Key: `validation-test-${Date.now()}`,
                Body: Buffer.alloc(1024 * 1024 * 10),
              },
            });

            const invalidPart = {
              partNumber: 2,
              data: Buffer.alloc(1024 * 1024 * 3), // 3MB - too small for non-final part
              lastPart: false,
            };

            expect(() => {
              (upload as any).__validateUploadPart(invalidPart);
            }).toThrow(/The byte size for part number 2, size \d+ does not match expected size \d+/);
          });

          it("should validate part count constraints", async () => {
            const upload = new Upload({
              client,
              params: {
                Bucket,
                Key: `validation-test-${Date.now()}`,
                Body: Buffer.alloc(1024 * 1024 * 10),
              },
            });

            (upload as any).uploadedParts = [{ PartNumber: 1, ETag: "etag1" }];
            (upload as any).isMultiPart = true;

            await expect(upload.done()).rejects.toThrow(/Expected \d+ part\(s\) but uploaded \d+ part\(s\)\./);
          });
        });

        describe("inferring the byte length of the input", () => {
          it("should throw an informative error about the correct override if the SDK infers the byte count incorrectly", async () => {
            const s3 = new S3({ region });

            const pseudoFileReadStream = fs.createReadStream("/dev/urandom", { end: 6 * 1024 * 1024 });

            const upload = new Upload({
              client: s3,
              params: {
                Key: `/dev/urandom`,
                Bucket,
                Body: pseudoFileReadStream,
              },
            });

            const error = await upload.done().catch((e) => e);

            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(`Expected 0 part(s) but uploaded 2 part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from the size of the file given by Body.path on disk as reported by lstatSync and is 0.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
          });

          it("should use the input ContentLength as the total byte count if supplied by the caller", async () => {
            const s3 = new S3({ region });

            const pseudoFileReadStream = fs.createReadStream("/dev/urandom", { end: 6 * 1024 * 1024 });

            const upload = new Upload({
              client: s3,
              params: {
                Key: `/dev/urandom`,
                Bucket,
                Body: pseudoFileReadStream,
                ContentLength: 6 * 1024 * 1024,
              },
            });

            await upload.done();
            // no thrown error is sufficient.
          });
        });
      });
    }
  );
}, 60_000);
