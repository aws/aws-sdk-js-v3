import { S3 } from "@aws-sdk/client-s3";
import { NoOpLogger } from "@smithy/smithy-client";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-sdk-s3", () => {
  describe(S3.name, () => {
    it("validates bucket names", async () => {
      const client = new S3({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          bucket: "not-reached",
        },
      });

      await client
        .headBucket({
          Bucket: "/my-bucket/a",
        })
        .then(() => {
          throw new Error("this should not be reached");
        })
        .catch((err) => {
          expect(err.name).toBe("InvalidBucketName");
        });

      expect.hasAssertions();
    });

    it("warns on input streams of unknown length", async () => {
      const client = new S3({
        region: "us-west-2",
        logger: Object.assign(new NoOpLogger(), {
          warn: jest.fn(),
        }),
      });

      requireRequestsFrom(client).toMatch({
        query: { "x-id": "PutObject" },
      });

      await client.putObject({
        Bucket: "my-bucket",
        Key: "k",
        Body: "", // use empty body to leave content-length unset.
      });

      expect(client.config.logger.warn).toHaveBeenCalledWith(
        "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
      );

      expect.hasAssertions();
    });
  });
});
