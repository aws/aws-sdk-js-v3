import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { version as sdkVersion } from "@aws-sdk/client-s3/package.json";
import { platform, release } from "os";
import { versions } from "process";
import { describe, test as it } from "vitest";
const { version: tscVersion } = await import("typescript");

describe("util-user-agent-node", () => {
  it("populates user agent string", async () => {
    const client = new S3({ region: "us-west-2" });
    requireRequestsFrom(client).toMatch({
      headers: {
        "user-agent": `aws-sdk-js/${sdkVersion} ua/2.1 os/${platform()}#${release()} lang/js md/nodejs#${
          versions.node
        } md/tsc#${tscVersion} api/s3#${sdkVersion} m/E,g`,
      },
    });
    await client.listBuckets();
  });
});
