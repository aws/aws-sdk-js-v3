import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import type { S3, waitUntilObjectExists } from "@aws-sdk/client-s3";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { Browser } from "happy-dom";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, onTestFailed, test as it } from "vitest";

import { getRuntimeConfig } from "../../src/runtimeConfig.browser";
import { S3 as S3Impl, waitUntilObjectExists as waitUntilObjectExistsImpl } from "../browser-build/browser-s3-bundle";
import { createBuffer } from "./helpers";

describe("@aws-sdk/client-s3", () => {
  let client: S3;
  let Bucket: string;
  let region: string;
  let mrapArn: string;
  let Key = `${Date.now()}`;
  const errors = [] as any[];
  let testFailed = false;
  const setTestFailed = () => {
    testFailed = true;
  };

  beforeAll(async () => {
    const browser = new Browser();
    browser.settings.fetch.disableSameOriginPolicy = true;

    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    mrapArn = (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_MRAP_ARN || process?.env?.AWS_SMOKE_TEST_MRAP_ARN;

    const provider = fromNodeProviderChain();
    const credentials = await provider();

    client = new S3Impl(
      getRuntimeConfig({
        region,
        credentials,
        requestHandler: FetchHttpHandler.create({
          credentials: "include",
        }),
        logger: {
          trace() {},
          debug() {},
          info() {},
          warn() {},
          error(entry: any) {
            errors.push(entry);
          },
        },
      })
    ) as unknown as S3;

    client.middlewareStack.addRelativeTo(
      (next: any) => async (args: any) => {
        const result = await next(args);
        const { response } = result;
        for (const [key, value] of Object.entries(response.headers)) {
          delete response.headers[key];
          response.headers[String(key).toLowerCase()] = value;
        }
        return result;
      },
      {
        toMiddleware: "deserializerMiddleware",
        name: "header-casing-middleware",
        override: true,
        relation: "after",
      }
    );
  });

  afterAll(() => {
    if (testFailed) {
      console.info("Test failed, logging errors collecting during test.");
      for (const error of errors) {
        console.error(error);
      }
    }
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
    // Caused by: readableStream.on is not a function
    // only in vitest + happy-dom.
    it.skip("should succeed with blob body", async () => {
      onTestFailed(setTestFailed);
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
      onTestFailed(setTestFailed);
      const result = await client.putObject({
        Bucket,
        Key,
        Body: buf,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
    });

    // TODO(vitest)
    // Caused by: SignatureDoesNotMatch
    // only in vitest + happy-dom.
    it.skip("should succeed with ReadableStream body", async () => {
      onTestFailed(setTestFailed);
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
      onTestFailed(setTestFailed);
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
      onTestFailed(setTestFailed);
      const result = await client.listObjects({
        Bucket,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.Contents).toBeInstanceOf(Array);
    });

    it("should throw with invalid bucket", async () => {
      onTestFailed(setTestFailed);
      await expect(() => client.listObjects({ Bucket: "invalid-bucket" })).rejects.toThrow();
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
      onTestFailed(setTestFailed);

      // create multipart upload
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

      // validate the object is uploaded
      const waiterState = await (waitUntilObjectExistsImpl as typeof waitUntilObjectExists)(
        {
          client,
          maxWaitTime: 60,
        },
        {
          Bucket,
          Key: multipartObjectKey,
        }
      );
      expect(waiterState.state).toEqual("SUCCESS");
    });

    it("should successfully create, abort, and list upload", async () => {
      onTestFailed(setTestFailed);

      // create multipart upload
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

  describe("Multi-region access point", () => {
    beforeEach(async () => {
      Key = `${Date.now()}`;
    });

    it("should throw for aws-crt no available in browser", async () => {
      onTestFailed(setTestFailed);
      try {
        await client.listObjects({
          Bucket: mrapArn,
        });
        throw new Error("MRAP call in browser should throw");
      } catch (e) {
        expect(e.message).toContain("JS SigV4a implementation is not available or not a valid constructor");
      }
    });
  });
}, 60_000);
