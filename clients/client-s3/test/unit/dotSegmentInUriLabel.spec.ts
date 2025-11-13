import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { describe, expect, test as it } from "vitest";

import { S3 } from "../../src/S3";

describe("Dot Segment in URI Label", () => {
  it("S3PreservesLeadingDotSegmentInUriLabel", async () => {
    const client = new S3({
      region: "us-west-2",
      credentials: { accessKeyId: "mockAccessKeyId", secretAccessKey: "mockSecretAccessKey" },
    });

    requireRequestsFrom(client).toMatch({
      method: "GET",
      hostname: "mybucket.s3.us-west-2.amazonaws.com",
      path: "/../key.txt",
    });

    await client.getObject({
      Bucket: "mybucket",
      Key: "../key.txt",
    });

    expect.hasAssertions();
  });

  it("S3PreservesEmbeddedDotSegmentInUriLabel", async () => {
    const client = new S3({
      region: "us-west-2",
      credentials: { accessKeyId: "mockAccessKeyId", secretAccessKey: "mockSecretAccessKey" },
    });

    requireRequestsFrom(client).toMatch({
      method: "GET",
      hostname: "mybucket.s3.us-west-2.amazonaws.com",
      path: "/foo/../key.txt",
    });

    await client.getObject({
      Bucket: "mybucket",
      Key: "foo/../key.txt",
    });

    expect.hasAssertions();
  });
});
