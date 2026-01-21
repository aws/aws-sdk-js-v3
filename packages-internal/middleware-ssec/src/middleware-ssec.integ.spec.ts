import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import * as crypto from "crypto";
import { describe, test as it } from "vitest";

// "server-side-encryption"
describe("middleware-ssec", () => {
  describe(S3.name, () => {
    it("adds hash for SSECustomerKey and CopySourceSSECustomerKey", async () => {
      const client = new S3({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        query: { "x-id": "CopyObject" },
        headers: {
          "x-amz-copy-source": "s",
          "x-amz-server-side-encryption-customer-key": "c3NlLWN1c3RvbWVyLWtleQ==",
          "x-amz-server-side-encryption-customer-key-md5": "E+/nTVpQe9+cNzOKBFXSlA==",
          "x-amz-copy-source-server-side-encryption-customer-key": "Y29weS1zb3VyY2Utc3NlLWN1c3RvbWVyLWtleQ==",
          "x-amz-copy-source-server-side-encryption-customer-key-md5": "4CgOx9iMMPvAQi7bWXEJEw==",
        },
        protocol: "https:",
        path: "/b/k",
      });
      await client.copyObject({
        SSECustomerKey: "sse-customer-key",
        CopySourceSSECustomerKey: "copy-source-sse-customer-key",
        Bucket: "b",
        CopySource: "s",
        Key: "k",
      });
    });

    it("verifies headers for PutObject with base64-encoded SSECustomerKey", async () => {
      const client = new S3({ region: "us-east-1" });
      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "testbucket.s3.us-east-1.amazonaws.com",
        query: { "x-id": "PutObject" },
        headers: {
          "x-amz-server-side-encryption-customer-algorithm": "AES256",
          "x-amz-server-side-encryption-customer-key": "UNhY4JhezH9gQYqvDMWrWH9CwlcKiECVqejMrND2VFw=",
          "x-amz-server-side-encryption-customer-key-md5": "SwoBWUcJBbc/WRhR6hZGCA==",
          "content-length": "14",
        },
        body: "This is a test",
        protocol: "https:",
        path: "/foo",
      });
      const exampleKey = crypto.createHash("sha256").update("example").digest();
      await client.putObject({
        Bucket: "testbucket",
        Body: "This is a test",
        Key: "foo",
        SSECustomerKey: exampleKey.toString("base64"),
        SSECustomerAlgorithm: "AES256",
      });
    });
  });
});
