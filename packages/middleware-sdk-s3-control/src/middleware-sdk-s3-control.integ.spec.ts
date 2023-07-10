import { S3Control } from "@aws-sdk/client-s3-control";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-sdk-s3-control", () => {
  describe(S3Control.name, () => {
    it("dedupes host prefixes", async () => {
      const client = new S3Control({
        region: "us-west-2",
        endpoint: "https://my.hostname.com:8000/path?query=query",
      });

      requireRequestsFrom(client).toMatch({
        hostname: "123456789012.my.hostname.com",
        // and specifically not 123456789012.123456789012.my.hostname.com
      });

      await client.listAccessPoints({
        AccountId: "123456789012",
        Bucket: "my-bucket",
      });

      expect.hasAssertions();
    });

    it("doesn't dedupe host prefixes for IP addresses", async () => {
      const client = new S3Control({
        region: "snow",
        endpoint: "https://10.10.10.10:8000/path?query=query",
        useFipsEndpoint: false,
        useDualstackEndpoint: false,
        disableHostPrefix: true,
      });

      requireRequestsFrom(client).toMatch({
        hostname: /^10.10.10.10$/,
        port: /^8000$/,
      });

      await client.listAccessPoints({
        AccountId: "123456789012",
        Bucket: "my-bucket",
      });

      expect.hasAssertions();
    });

    it("parses outpost ARNs", async () => {
      const client = new S3Control({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        method: "GET",
        hostname: "s3-outposts.us-west-2.amazonaws.com",
        headers: {
          "x-amz-account-id": "123456789012",
          "x-amz-outpost-id": "outpost-id-1234",
          host: "s3-outposts.us-west-2.amazonaws.com",
        },
        protocol: "https:",
        path: "/v20180820/bucket/my-bucket/tagging",
      });

      await client.getBucketTagging({
        AccountId: "123456789012",
        Bucket: "arn:aws:s3-outposts:us-west-2:123456789012:outpost/outpost-id-1234/bucket/my-bucket",
      });

      expect.hasAssertions();
    });

    it("redirects from outpost id", async () => {
      const client = new S3Control({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        method: "GET",
        hostname: "123456789012.s3-outposts.us-west-2.amazonaws.com",
        headers: {
          host: "123456789012.s3-outposts.us-west-2.amazonaws.com",
        },
        protocol: "https:",
        path: "/v20180820/bucket",
      });

      await client.listRegionalBuckets({
        AccountId: "123456789012",
        OutpostId: "outpost-id-1234",
      });

      expect.hasAssertions();
    });
  });
});
