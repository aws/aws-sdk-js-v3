import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { version as sdkVersion } from "@aws-sdk/client-s3/package.json";
import { platform, release } from "node:os";
import { versions } from "node:process";
import { describe, test as it } from "vitest";

describe("util-user-agent-node", () => {
  it("populates user agent string", async () => {
    const client = new S3({ region: "us-west-2" });
    requireRequestsFrom(client).toMatch({
      headers: {
        "user-agent": new RegExp(
          `^aws-sdk-js/${sdkVersion} ua/2\\.1 os/${platform()}#${release()} lang/js md/nodejs#${versions.node}` +
            `(?: \\S+)* api/s3#${sdkVersion}(?: \\S+)* m/E,g$`
        ),
      },
    });
    await client.listBuckets();
  });
});
