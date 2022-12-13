/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { Credentials } from "@aws-sdk/types";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import { S3, SelectObjectContentEventStream } from "../../src/index";
import { createBuffer } from "./helpers";
chai.use(chaiAsPromised);
const { expect } = chai;
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
const region: string | undefined = (globalThis as any).defaultRegion || process?.env?.AWS_SMOKE_TEST_REGION;
const credentials: Credentials | undefined = (globalThis as any).credentials || undefined;
const isBrowser: boolean | undefined = (globalThis as any).isBrowser || false;
const Bucket = (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_BUCKET || process?.env?.AWS_SMOKE_TEST_BUCKET;
const mrapArn = (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_MRAP_ARN || process?.env?.AWS_SMOKE_TEST_MRAP_ARN;

let Key = `${Date.now()}`;

describe("@aws-sdk/client-s3", () => {
  const client = new S3({
    region: region,
    credentials,
  });

  describe("PutObject", () => {
    before(() => {
      Key = `${Date.now()}`;
    });
    after(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    if (isBrowser) {
      const buf = createBuffer("1KB");
      it("should succeed with blob body", async () => {
        const result = await client.putObject({
          Bucket,
          Key,
          Body: new Blob([buf]),
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });

      it("should succeed with TypedArray body", async () => {
        const result = await client.putObject({
          Bucket,
          Key,
          Body: buf,
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });

      // todo: fix needed
      // todo: TypeError: Failed to construct 'Request': The `duplex` member must
      // todo: be specified for a request with a streaming body
      it.skip("should succeed with ReadableStream body", async () => {
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
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });
    } else {
      it("should succeed with Node.js readable stream body", async () => {
        const length = 10 * 1000; // 10KB
        const chunkSize = 10;
        const { Readable } = require("stream");
        let sizeLeft = length;
        const inputStream = new Readable({
          read() {
            if (sizeLeft <= 0) {
              this.push(null); //end stream;
              return;
            }
            let chunk = "";
            for (let i = 0; i < Math.min(sizeLeft, chunkSize); i++) {
              chunk += "x";
            }
            this.push(chunk);
            sizeLeft -= chunk.length;
          },
        });
        inputStream.size = length; // This is required
        const result = await client.putObject({
          Bucket,
          Key,
          Body: inputStream,
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
      });
    }
  });

  describe("GetObject", function () {
    this.timeout(10 * 1000);
    before(async () => {
      Key = `${Date.now()}`;
    });

    after(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    it("should succeed with valid body payload", async () => {
      // prepare the object.
      const body = createBuffer("1MB");
      await client.putObject({ Bucket, Key, Body: body });
      const result = await client.getObject({ Bucket, Key });
      expect(result.$metadata.httpStatusCode).to.equal(200);
      if (isBrowser) {
        expect(result.Body).to.be.instanceOf(ReadableStream);
      } else {
        const { Readable } = require("stream");
        expect(result.Body).to.be.instanceOf(Readable);
      }
    });
  });

  describe("ListObjects", () => {
    before(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: "foo" });
    });
    after(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed with valid bucket", async () => {
      const result = await client.listObjects({
        Bucket,
      });
      expect(result.$metadata.httpStatusCode).to.equal(200);
      expect(result.Contents).to.be.instanceOf(Array);
    });

    it("should throw with invalid bucket", () =>
      expect(client.listObjects({ Bucket: "invalid-bucket" })).to.eventually.be.rejected.and.be.an.instanceOf(Error));
  });

  describe("MultipartUpload", () => {
    let UploadId: string;
    let Etag: string;
    const multipartObjectKey = `${Key}-multipart`;
    before(() => {
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
      expect(createResult.$metadata.httpStatusCode).to.equal(200);
      expect(typeof createResult.UploadId).to.equal("string");
      UploadId = createResult.UploadId as string;

      //upload part
      const uploadResult = await client.uploadPart({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        PartNumber: 1,
        Body: createBuffer("1KB"),
      });
      expect(uploadResult.$metadata.httpStatusCode).to.equal(200);
      expect(typeof uploadResult.ETag).to.equal("string");
      Etag = uploadResult.ETag as string;

      //list parts
      const listPartsResult = await client.listParts({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
      });
      expect(listPartsResult.$metadata.httpStatusCode).to.equal(200);
      expect(listPartsResult.Parts?.length).to.equal(1);
      expect(listPartsResult.Parts?.[0].ETag).to.equal(Etag);

      //complete multipart upload
      const completeResult = await client.completeMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        MultipartUpload: { Parts: [{ ETag: Etag, PartNumber: 1 }] },
      });
      expect(completeResult.$metadata.httpStatusCode).to.equal(200);

      //validate the object is uploaded
      const headResult = await client.headObject({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(headResult.$metadata.httpStatusCode).to.equal(200);
    });

    it("should successfully create, abort, and list upload", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(createResult.$metadata.httpStatusCode).to.equal(200);
      const toAbort = createResult.UploadId;
      expect(typeof toAbort).to.equal("string");

      //abort multipart upload
      const abortResult = await client.abortMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId: toAbort,
      });
      expect(abortResult.$metadata.httpStatusCode).to.equal(204);

      //validate multipart upload is aborted
      const listUploadsResult = await client.listMultipartUploads({
        Bucket,
      });
      expect(listUploadsResult.$metadata.httpStatusCode).to.equal(200);
      expect((listUploadsResult.Uploads || []).map((upload) => upload.UploadId)).not.to.contain(toAbort);
    });
  });

  describe("selectObjectContent", () => {
    const csvFile = `user_name,age
jsrocks,13
node4life,22
esfuture,29`;
    before(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: csvFile });
    });
    after(async () => {
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
        console.log(event);
        events.push(event);
      }
      expect(events.length).to.equal(3);
      expect(new TextDecoder().decode(events[0].Records?.Payload)).to.equal("node4life\nesfuture\n");
      expect(events[1].Stats?.Details).to.be.exist;
      expect(events[2].End).to.be.exist;
    });
  });

  describe("Multi-region access point", () => {
    before(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: "foo" });
    });
    after(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    if (isBrowser) {
      it("should throw for aws-crt no available in browser", async () => {
        try {
          await client.listObjects({
            Bucket: mrapArn,
          });
          expect.fail("MRAP call in browser should throw");
        } catch (e) {
          expect(e.message).include("only available in Node.js");
        }
      });
    } else {
      it("should succeed with valid MRAP ARN", async () => {
        const result = await client.listObjects({
          Bucket: mrapArn,
        });
        expect(result.$metadata.httpStatusCode).to.equal(200);
        expect(result.Contents).to.be.instanceOf(Array);
      });
    }
  });
});
