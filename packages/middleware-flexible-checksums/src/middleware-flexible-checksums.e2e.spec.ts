import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { S3, UploadPartCommandOutput } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import type { HttpRequest, HttpResponse } from "@smithy/types";
import { ChecksumStream, headStream } from "@smithy/util-stream";
import { Readable } from "node:stream";
import { beforeAll, describe, expect, test as it, vi } from "vitest";

describe("S3 checksums", () => {
  let s3: S3;
  let s3_noChecksum: S3;
  let s3_noRequestBuffer: S3;
  let Bucket: string;
  let Key: string;
  let region: string;
  const expected = new Uint8Array([97, 98, 99, 100]);
  const logger = {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };

  function stream(size: number, chunkSize: number) {
    async function* generate() {
      while (size > 0) {
        const z = Math.min(size, chunkSize);
        yield "a".repeat(z);
        size -= z;
      }
    }
    return Readable.from(generate());
  }
  function webStream(size: number, chunkSize: number) {
    return Readable.toWeb(stream(size, chunkSize)) as unknown as ReadableStream;
  }

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;

    s3 = new S3({ logger, region, requestStreamBufferSize: 8 * 1024 });
    s3_noRequestBuffer = new S3({ logger, region });
    s3_noChecksum = new S3({
      region,
      requestChecksumCalculation: "WHEN_REQUIRED",
      responseChecksumValidation: "WHEN_REQUIRED",
    });
    Key = "middleware-flexible-checksum.txt";

    s3.middlewareStack.add(
      (next) => async (args) => {
        const r = await next(args);
        const reqHeader = (args.request as HttpRequest).headers["x-amz-sdk-checksum-algorithm"];
        const resHeader = (r.response as HttpResponse).headers["x-amz-checksum-crc32"];
        if (reqHeader) {
          expect(reqHeader).toEqual("CRC32");
        }
        if (resHeader) {
          expect(resHeader.length).toBeGreaterThanOrEqual(8);
        }
        return r;
      },
      {
        step: "build",
        override: true,
        name: "assert",
      }
    );

    await s3.putObject({ Bucket, Key, Body: "abcd" });
  });

  it("checksums work with empty objects", async () => {
    await s3.putObject({
      Bucket,
      Key: Key + "empty",
      Body: stream(0, 0),
      ContentLength: 0,
    });
    const get = await s3.getObject({ Bucket, Key: Key + "empty" });
    expect(get.Body).toBeInstanceOf(ChecksumStream);
  });

  it("an object should have checksum by default", async () => {
    const get = await s3.getObject({ Bucket, Key });
    expect(get.Body).toBeInstanceOf(ChecksumStream);
  });

  describe("PUT operations", () => {
    it("S3 throws an error if chunks are too small, because request buffering is off by default", async () => {
      await s3_noRequestBuffer
        .putObject({
          Bucket,
          Key: Key + "small-chunks",
          Body: stream(24 * 1024, 8),
          ContentLength: 24 * 1024,
        })
        .catch((e) => {
          expect(String(e)).toContain(
            "InvalidChunkSizeError: Only the last chunk is allowed to have a size less than 8192 bytes. " +
              "Set [requestStreamBufferSize=number e.g. 65_536] in client constructor to instruct AWS SDK to buffer your input stream."
          );
        });
      expect.hasAssertions();
    });
    it("should assist user input streams by buffering to the minimum 8kb required by S3", async () => {
      await s3.putObject({
        Bucket,
        Key: Key + "small-chunks",
        Body: stream(24 * 1024, 8),
        ContentLength: 24 * 1024,
      });
      expect(logger.warn).toHaveBeenCalledWith(
        `@smithy/util-stream - stream chunk size 8 is below threshold of 8192, automatically buffering.`
      );
      const get = await s3.getObject({
        Bucket,
        Key: Key + "small-chunks",
      });
      expect((await get.Body?.transformToByteArray())?.byteLength).toEqual(24 * 1024);
    });
    it("should be able to write an object with a webstream body (using fetch handler without checksum)", async () => {
      const handler = s3_noChecksum.config.requestHandler;
      s3_noChecksum.config.requestHandler = new FetchHttpHandler();
      await s3_noChecksum.putObject({
        Bucket,
        Key: Key + "small-chunks-webstream",
        Body: webStream(24 * 1024, 512),
        ContentLength: 24 * 1024,
      });
      s3_noChecksum.config.requestHandler = handler;
      const get = await s3.getObject({
        Bucket,
        Key: Key + "small-chunks-webstream",
      });
      expect((await get.Body?.transformToByteArray())?.byteLength).toEqual(24 * 1024);
    });
    it("@aws-sdk/lib-storage Upload should allow webstreams to be used", async () => {
      await new Upload({
        client: s3,
        params: {
          Bucket,
          Key: Key + "small-chunks-webstream-mpu",
          Body: webStream(6 * 1024 * 1024, 512),
        },
      }).done();
      const get = await s3.getObject({
        Bucket,
        Key: Key + "small-chunks-webstream-mpu",
      });
      expect((await get.Body?.transformToByteArray())?.byteLength).toEqual(6 * 1024 * 1024);
    });
    it("should allow streams to be used in a manually orchestrated MPU", async () => {
      const cmpu = await s3.createMultipartUpload({
        Bucket,
        Key: Key + "-mpu",
      });

      const MB = 1024 * 1024;
      const up = [] as UploadPartCommandOutput[];

      try {
        up.push(
          await s3.uploadPart({
            Bucket,
            Key: Key + "-mpu",
            UploadId: cmpu.UploadId,
            Body: stream(5 * MB, 1024),
            PartNumber: 1,
            ContentLength: 5 * MB,
          }),
          await s3.uploadPart({
            Bucket,
            Key: Key + "-mpu",
            UploadId: cmpu.UploadId,
            Body: stream(MB, 64),
            PartNumber: 2,
            ContentLength: MB,
          })
        );
        expect(logger.warn).toHaveBeenCalledWith(
          `@smithy/util-stream - stream chunk size 1024 is below threshold of 8192, automatically buffering.`
        );
        expect(logger.warn).toHaveBeenCalledWith(
          `@smithy/util-stream - stream chunk size 64 is below threshold of 8192, automatically buffering.`
        );

        await s3.completeMultipartUpload({
          Bucket,
          Key: Key + "-mpu",
          UploadId: cmpu.UploadId,
          MultipartUpload: {
            Parts: up.map((part, i) => {
              return {
                PartNumber: i + 1,
                ETag: part.ETag,
              };
            }),
          },
        });

        const go = await s3.getObject({
          Bucket,
          Key: Key + "-mpu",
        });
        expect((await go.Body?.transformToByteArray())?.byteLength).toEqual(6 * MB);

        expect(go.$metadata.httpStatusCode).toEqual(200);
      } catch (e) {
        await s3.abortMultipartUpload({
          UploadId: cmpu.UploadId,
          Bucket,
          Key: Key + "-mpu",
        });
        throw e;
      }
    });
  }, 45_000);

  describe("the stream returned by S3::getObject should function interchangeably between ChecksumStream and default streams", () => {
    it("when collecting the stream", async () => {
      const defaultStream = (await s3_noChecksum.getObject({ Bucket, Key })).Body as Readable;
      const checksumStream = (await s3.getObject({ Bucket, Key })).Body as Readable;

      expect(defaultStream.constructor.name).not.toEqual("ChecksumStream");
      expect(checksumStream.constructor.name).toEqual("ChecksumStream");

      const defaultStreamContents = await headStream(defaultStream, Infinity);
      const checksumStreamContents = await headStream(checksumStream, Infinity);

      expect(defaultStreamContents).toEqual(expected);
      expect(defaultStream.closed).toBe(true);
      expect(checksumStreamContents).toEqual(expected);
      expect(checksumStream.closed).toBe(true);
    });

    it("when piping the stream to web stream api", async () => {
      const defaultStream = Readable.toWeb((await s3_noChecksum.getObject({ Bucket, Key })).Body as Readable);
      const checksumStream = Readable.toWeb((await s3.getObject({ Bucket, Key })).Body as Readable);

      const defaultStreamContents = await headStream(defaultStream as ReadableStream<any>, Infinity);
      const checksumStreamContents = await headStream(checksumStream as ReadableStream<any>, Infinity);

      expect(defaultStreamContents).toEqual(expected);
      await expect(defaultStream.getReader().closed).resolves.toBe(undefined);
      expect(checksumStreamContents).toEqual(expected);
      await expect(checksumStream.getReader().closed).resolves.toBe(undefined);
    });
  });
}, 60_000);
