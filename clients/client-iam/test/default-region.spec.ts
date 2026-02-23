import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getRuntimeConfig } from "../src/runtimeConfig";

describe("IAM default region", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    // Clear any region-related env vars
    delete process.env.AWS_REGION;
    delete process.env.AWS_DEFAULT_REGION;
    delete process.env.AMAZON_REGION;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should default to us-east-1 when no region is configured", async () => {
    const config = getRuntimeConfig({
      // Explicitly pass no region, and override profile to avoid loading from ~/.aws/config
      profile: "__test_no_region_profile__",
    });
    // The region field should be a provider that resolves to us-east-1
    const region = typeof config.region === "function" ? await config.region() : config.region;
    expect(region).toBe("us-east-1");
  });

  it("should use the provided region when explicitly set", async () => {
    const config = getRuntimeConfig({
      region: "eu-west-1",
    });
    const region = typeof config.region === "function" ? await config.region() : config.region;
    expect(region).toBe("eu-west-1");
  });

  it("should use the region from environment when set", async () => {
    process.env.AWS_REGION = "ap-southeast-1";
    const config = getRuntimeConfig({});
    const region = typeof config.region === "function" ? await config.region() : config.region;
    expect(region).toBe("ap-southeast-1");
  });
});
