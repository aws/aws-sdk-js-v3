/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { expect } from "chai";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "../index";
declare let defaultRegion: string;
declare const credentials: any;
declare const isBrowser: boolean; //undefined by default, used for NodeJS.

const Bucket = "aws-sdk-unit-test"; // this bucket requires enabling CORS
const Key = `${Date.now()}`;

describe("@aws-sdk/client-s3", () => {
  const client = new S3Client({
    region: defaultRegion,
    credentials
  });

  after(async () => {
    await client.send(
      new DeleteObjectCommand({
        Bucket,
        Key
      })
    );
  });

  if (isBrowser) {
    it("PutObject should succeed when given blob body", async () => {
      const smallBody = [];
      const result = await client.send(
        new PutObjectCommand({
          Bucket,
          Key,
          Body: new Blob(["abc"])
        })
      );
      expect(result.$metadata.httpStatusCode).to.eql(200);
    });
  }
});
