import { S3 } from "@aws-sdk/client-s3";
import { Transform } from "stream";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-flexible-checksums", () => {
  describe(S3.name, () => {
    it("should set flexible checksums (SHA256)", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        protocol: "https:",
        path: "/b/k",
        headers: {
          "content-type": "application/octet-stream",
          "x-amz-sdk-checksum-algorithm": "SHA256",
          "content-length": "4",
          Expect: "100-continue",
          "x-amz-checksum-sha256": "iNQmb9TmM40TuEX88olXnSCciXgjuSF9o+Fhk28DFYk=",
          host: "s3.us-west-2.amazonaws.com",
          "x-amz-user-agent": /./,
          "user-agent": /./,
          "amz-sdk-invocation-id": /./,
          "amz-sdk-request": /./,
          "x-amz-date": /./,
          "x-amz-content-sha256": "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",
          authorization: /./,
        },
        query: {
          "x-id": "PutObject",
        },
      });

      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: Buffer.from("abcd"),
        ChecksumAlgorithm: "SHA256",
      });

      expect.hasAssertions();
    });

    it("should set flexible checksums (SHA1)", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        protocol: "https:",
        path: "/b/k",
        headers: {
          "content-type": "application/octet-stream",
          "x-amz-sdk-checksum-algorithm": "SHA1",
          "content-length": "4",
          Expect: "100-continue",
          "x-amz-checksum-sha1": "gf6L/odXbD7LIkJvjleEc4KRes8=",
          host: "s3.us-west-2.amazonaws.com",
          "x-amz-user-agent": /./,
          "user-agent": /./,
          "amz-sdk-invocation-id": /./,
          "amz-sdk-request": /./,
          "x-amz-date": /./,
          authorization: /./,
          // this is here even if algo is SHA1
          "x-amz-content-sha256": "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",
        },
        query: {
          "x-id": "PutObject",
        },
      });

      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: Buffer.from("abcd"),
        ChecksumAlgorithm: "SHA1",
      });

      expect.hasAssertions();
    });

    it("should not set binary file content length", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        protocol: "https:",
        path: "/b/k",
        headers: {
          "content-type": "application/octet-stream",
          "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
          "content-length": /undefined/,
        },
        query: {
          "x-id": "PutObject",
        },
      });

      const stream = new Transform({
        transform(chunk) {
          return chunk;
        },
      });
      stream.write("hello");

      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: stream,
        ChecksumAlgorithm: "SHA256",
      });

      expect.hasAssertions();
    });
  });
});
