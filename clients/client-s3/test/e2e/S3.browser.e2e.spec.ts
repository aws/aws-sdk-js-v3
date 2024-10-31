import { setTestCredentials } from "@aws-sdk/aws-util-test";
import type { S3, SelectObjectContentEventStream } from "@aws-sdk/client-s3";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { afterEach, beforeAll, beforeEach, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";
import { getRuntimeConfig } from "../../src/runtimeConfig.browser";
import { S3 as S3Impl } from "../browser-build/browser-s3-bundle";
import { createBuffer } from "./helpers";

describe("@aws-sdk/client-s3", () => {
  let client: S3;
  let Bucket: string;
  let region: string;
  let mrapArn: string;
  let Key = `${Date.now()}`;

  beforeAll(async () => {
    await setTestCredentials();
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    mrapArn = (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_MRAP_ARN || process?.env?.AWS_SMOKE_TEST_MRAP_ARN;

    client = new S3Impl(
      getRuntimeConfig({
        region,
        credentials: fromNodeProviderChain(),
        requestHandler: new FetchHttpHandler(),
      })
    ) as unknown as S3;
  });

  describe("PutObject", () => {
    beforeEach(() => {
      Key = `${Date.now()}`;
    });

    afterEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    const buf = createBuffer("1KB");

    // TODO(vitest)
    // Caused by: RequestContentLengthMismatchError: Request body length does not match content-length header
    // only in vitest + happy-dom.
    it.skip("should succeed with blob body", async () => {
      const blob = new Blob([buf]);
      const result = await client.putObject({
        Bucket,
        Key,
        Body: blob,
        ContentLength: blob.size,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
    });

    it("should succeed with TypedArray body", async () => {
      const result = await client.putObject({
        Bucket,
        Key,
        Body: buf,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
    });

    it("should succeed with ReadableStream body", async () => {
      const length = 10 * 1000; // 10KB
      const chunkSize = 10;
      const readableStream = new ReadableStream({
        start(controller) {
          let sizeLeft = length;
          while (sizeLeft > 0) {
            let chunk = "";
            for (let i = 0; i < Math.min(sizeLeft, chunkSize); i++) {
              chunk += "x";
            }
            controller.enqueue(chunk);
            sizeLeft -= chunk.length;
          }
        },
      });
      const result = await client.putObject({
        Bucket,
        Key,
        Body: readableStream,
        ContentLength: length,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
    });
  });

  describe("GetObject", function () {
    beforeEach(async () => {
      Key = `${Date.now()}`;
    });

    afterEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    it("should succeed with valid body payload", async () => {
      // prepare the object.
      const body = createBuffer("1MB");

      try {
        await client.putObject({ Bucket, Key, Body: body });
      } catch (e) {
        console.error("failed to put");
        throw e;
      }

      try {
        // eslint-disable-next-line no-var
        var result = await client.getObject({ Bucket, Key });
      } catch (e) {
        console.error("failed to get");
        throw e;
      }

      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.Body).toBeInstanceOf(ReadableStream);
    });
  }, 10_000);

  describe("ListObjects", () => {
    beforeEach(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: "foo" });
    });
    afterEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed with valid bucket", async () => {
      const result = await client.listObjects({
        Bucket,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.Contents).toBeInstanceOf(Array);
    });

    it("should throw with invalid bucket", () => {
      expect(() => client.listObjects({ Bucket: "invalid-bucket" })).rejects.toThrow();
    });
  });

  describe("MultipartUpload", () => {
    let UploadId: string;
    let Etag: string;
    const multipartObjectKey = `${Key}-multipart`;
    beforeEach(() => {
      Key = `${Date.now()}`;
    });
    afterEach(async () => {
      if (UploadId) {
        await client.abortMultipartUpload({
          Bucket,
          Key: multipartObjectKey,
          UploadId,
        });
      }
      await client.deleteObject({
        Bucket,
        Key: multipartObjectKey,
      });
    });

    it("should successfully create, upload list and complete", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(createResult.$metadata.httpStatusCode).toEqual(200);
      expect(typeof createResult.UploadId).toEqual("string");
      UploadId = createResult.UploadId as string;

      //upload part
      const uploadResult = await client.uploadPart({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        PartNumber: 1,
        Body: createBuffer("1KB"),
      });
      expect(uploadResult.$metadata.httpStatusCode).toEqual(200);
      expect(typeof uploadResult.ETag).toEqual("string");
      Etag = uploadResult.ETag as string;

      //list parts
      const listPartsResult = await client.listParts({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
      });
      expect(listPartsResult.$metadata.httpStatusCode).toEqual(200);
      expect(listPartsResult.Parts?.length).toEqual(1);
      expect(listPartsResult.Parts?.[0].ETag).toEqual(Etag);

      //complete multipart upload
      const completeResult = await client.completeMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        MultipartUpload: { Parts: [{ ETag: Etag, PartNumber: 1 }] },
      });
      expect(completeResult.$metadata.httpStatusCode).toEqual(200);

      //validate the object is uploaded
      const headResult = await client.headObject({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(headResult.$metadata.httpStatusCode).toEqual(200);
    });

    it("should successfully create, abort, and list upload", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(createResult.$metadata.httpStatusCode).toEqual(200);
      const toAbort = createResult.UploadId;
      expect(typeof toAbort).toEqual("string");

      //abort multipart upload
      const abortResult = await client.abortMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId: toAbort,
      });
      expect(abortResult.$metadata.httpStatusCode).toEqual(204);

      //validate multipart upload is aborted
      const listUploadsResult = await client.listMultipartUploads({
        Bucket,
      });
      expect(listUploadsResult.$metadata.httpStatusCode).toEqual(200);
      expect((listUploadsResult.Uploads || []).map((upload) => upload.UploadId)).not.toContain(toAbort);
    });
  });

  describe("selectObjectContent", () => {
    const csvFile = `user_name,age
jsrocks,13
node4life,22
esfuture,29`;
    beforeEach(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: csvFile });
    });
    afterEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed", async () => {
      const { Payload } = await client.selectObjectContent({
        Bucket,
        Key,
        ExpressionType: "SQL",
        Expression: "SELECT user_name FROM S3Object WHERE cast(age as int) > 20",
        InputSerialization: {
          CSV: {
            FileHeaderInfo: "USE",
            RecordDelimiter: "\n",
            FieldDelimiter: ",",
          },
        },
        OutputSerialization: {
          CSV: {},
        },
      });
      const events: SelectObjectContentEventStream[] = [];
      for await (const event of Payload!) {
        events.push(event);
      }
      expect(events.length).toEqual(3);
      expect(new TextDecoder().decode(events[0].Records?.Payload)).toEqual("node4life\nesfuture\n");
      expect(events[1].Stats?.Details).toBeDefined();
      expect(events[2].End).toBeDefined();
    });
  });

  describe("Multi-region access point", () => {
    beforeEach(async () => {
      Key = `${Date.now()}`;
    });
    afterEach(async () => {});
    it("should throw for aws-crt no available in browser", async () => {
      try {
        await client.listObjects({
          Bucket: mrapArn,
        });
        throw new Error("MRAP call in browser should throw");
      } catch (e) {
        expect(e.message).toContain("only available in Node.js");
      }
    });
  });
});
