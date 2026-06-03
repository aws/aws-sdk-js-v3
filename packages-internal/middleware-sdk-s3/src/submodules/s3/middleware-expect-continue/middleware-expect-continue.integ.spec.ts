import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { describe, expect, test as it } from "vitest";

describe("middleware-expect-continue", () => {
  describe(S3.name, () => {
    it("should not set expect header if there is no body", async () => {
      const client = new S3({ region: "us-west-2", expectContinueHeader: true });
      requireRequestsFrom(client).toMatch({
        headers: {
          Expect: /undefined/,
        },
      });
      await client.listBuckets({});
      expect.assertions(1);
    });

    it("should set expect header if there is a body", async () => {
      const client = new S3({ region: "us-west-2", expectContinueHeader: 4 });
      requireRequestsFrom(client).toMatch({
        headers: {
          Expect: /100-continue/,
        },
      });
      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: Buffer.from("abcd"),
      });
      expect.assertions(1);
    });

    describe("should set or omit expect header based on configurations", () => {
      it("false", async () => {
        const client = new S3({ region: "us-west-2", expectContinueHeader: false });
        requireRequestsFrom(client).toMatch({
          headers: {
            Expect: /undefined/,
          },
        });
        await client.putObject({
          Bucket: "b",
          Key: "k",
          Body: Buffer.from("abcd"),
        });
        expect.assertions(1);
      });
      it("5", async () => {
        const client = new S3({ region: "us-west-2", expectContinueHeader: 5 });
        requireRequestsFrom(client).toMatch({
          headers: {
            Expect: /undefined/,
          },
        });
        await client.putObject({
          Bucket: "b",
          Key: "k",
          Body: Buffer.from("abcd"),
        });
        expect.assertions(1);
      });
      it("true", async () => {
        const client = new S3({ region: "us-west-2", expectContinueHeader: true });
        requireRequestsFrom(client).toMatch({
          headers: {
            Expect: /100-continue/,
          },
        });
        await client.putObject({
          Bucket: "b",
          Key: "k",
          Body: Buffer.from("abcd"),
        });
        expect.assertions(1);
      });
      it("4", async () => {
        const client = new S3({ region: "us-west-2", expectContinueHeader: 4 });
        requireRequestsFrom(client).toMatch({
          headers: {
            Expect: /100-continue/,
          },
        });
        await client.putObject({
          Bucket: "b",
          Key: "k",
          Body: Buffer.from("abcd"),
        });
        expect.assertions(1);
      });
    });
  });
});
