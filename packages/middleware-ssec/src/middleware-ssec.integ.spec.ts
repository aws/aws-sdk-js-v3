import { S3 } from "@aws-sdk/client-s3";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

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
  });
});
