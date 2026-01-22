import { afterAll, beforeEach, describe, expect, test as it } from "vitest";
import { S3 } from "@aws-sdk/client-s3";
import path from "node:path";
import type { Provider } from "@smithy/types";

describe("defaults mode", () => {
  const snapshot = {
    ...process.env,
  };

  beforeEach(async () => {
    process.env = {};
  });

  afterAll(async () => {
    process.env = snapshot;
  });

  it("should load various client configuration options from file with default profile", async () => {
    process.env.AWS_CONFIG_FILE = path.join(__dirname, "mock-aws-config");

    const client = new S3({});

    expect(await client.config.region()).toEqual("us-west-2");
  });

  it("should load various client configuration options from specific profile", async () => {
    process.env.AWS_CONFIG_FILE = path.join(__dirname, "mock-aws-config");

    const client = new S3({
      profile: "abc",
    });

    expect(await client.config.region()).toEqual("ap-northeast-1");
    expect(await (client.config.retryMode as Provider<string>)()).toEqual("adaptive");
    expect(await (client.config.disableS3ExpressSessionAuth as Provider<boolean>)()).toEqual(true);
    expect(await client.config.maxAttempts()).toEqual(33);
    expect(await client.config.requestChecksumCalculation()).toEqual("WHEN_REQUIRED");
    expect(await client.config.sigv4aSigningRegionSet()).toEqual(["*", "*", "us-west-2"]);
    expect(await client.config.useFipsEndpoint()).toEqual(true);
    expect(await (client.config.useArnRegion as Provider<boolean>)()).toEqual(true);
    expect(await client.config.useDualstackEndpoint()).toEqual(true);
    expect(await client.config.userAgentAppId()).toEqual("blargh");
  });
});
