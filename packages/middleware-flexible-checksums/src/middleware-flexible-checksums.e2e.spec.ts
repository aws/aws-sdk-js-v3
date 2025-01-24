import { S3 } from "@aws-sdk/client-s3";
import type { HttpRequest, HttpResponse } from "@smithy/types";
import { headStream } from "@smithy/util-stream";
import { Readable } from "node:stream";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../tests/e2e/get-integ-test-resources";

describe("S3 checksums", () => {
  let s3: S3;
  let s3_noChecksum: S3;
  let Bucket: string;
  let Key: string;
  let region: string;
  const expected = new Uint8Array([97, 98, 99, 100]);

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;

    s3 = new S3({ region });
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
          expect(resHeader).toEqual("7YLNEQ==");
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

  it("an object should have checksum by default", async () => {
    await s3.getObject({ Bucket, Key });
  });

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
});
