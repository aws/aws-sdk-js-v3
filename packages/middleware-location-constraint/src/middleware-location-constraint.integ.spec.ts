import { S3 } from "@aws-sdk/client-s3";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-location-constraint", () => {
  describe(S3.name, () => {
    it("should set on input CreateBucketConfiguration and LocationConstraint", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        body: /<CreateBucketConfiguration (.*)?><LocationConstraint>us-west-2<\/LocationConstraint><\/CreateBucketConfiguration>/,
      });

      await client.createBucket({
        Bucket: "b",
      });

      expect.hasAssertions();
    });

    it("except for us-east-1 for some reason", async () => {
      const client = new S3({ region: "us-east-1" });

      requireRequestsFrom(client).toMatch({
        body: /undefined/,
      });

      await client.createBucket({
        Bucket: "b",
      });

      expect.hasAssertions();
    });
  });
});
