import { describe, test as it } from "vitest";

import { S3 } from "@aws-sdk/client-s3";
import { AwsCredentialIdentity } from "@smithy/types";
import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";

describe("S3 Object Lambda", () => {
  const region = "us-west-2";
  const credentials: AwsCredentialIdentity = {
    accessKeyId: "",
    secretAccessKey: "",
  };

  it("can make a GET request to an S3 Object Lambda ARN", async () => {
    const s3 = new S3({
      region,
      credentials,
    });

    requireRequestsFrom(s3).toMatch({
      hostname: "my-access-point-123456789012.s3-object-lambda.us-west-2.amazonaws.com",
      query: {
        "x-id": "GetObject",
      },
      headers: {
        authorization: /=\/\d+\/us-west-2\/s3-object-lambda\/aws4_request/,
      },
      path: "/a",
    });

    // slash delimiter
    await s3.getObject({
      Bucket: "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint/my-access-point",
      Key: "a",
    });

    // colon delimiter
    await s3.getObject({
      Bucket: "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint:my-access-point",
      Key: "a",
    });
  });
});
