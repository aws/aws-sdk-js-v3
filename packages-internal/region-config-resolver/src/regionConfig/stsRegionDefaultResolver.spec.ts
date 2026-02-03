import { describe, expect, test as it } from "vitest";

import { stsRegionDefaultResolver } from "./stsRegionDefaultResolver";
import { stsRegionDefaultResolver as browser } from "./stsRegionDefaultResolver.browser";
import { stsRegionDefaultResolver as native } from "./stsRegionDefaultResolver.native";

describe("stsRegionDefaultResolver", () => {
  for (const impl of [stsRegionDefaultResolver, native, browser]) {
    it(`should default to us-east-1`, async () => {
      delete process.env.AWS_REGION;
      const regionProvider = impl({
        profile: "non-existent P R O F I L E",
      });
      const region = await regionProvider();
      expect(region).toBe("us-east-1");
    });
  }

  it("should use AWS_REGION before fallback to us-east-1", async () => {
    process.env.AWS_REGION = "us-west-2";
    const regionProvider = stsRegionDefaultResolver({
      profile: "non-existent P R O F I L E",
    });
    const region = await regionProvider();
    expect(region).toBe("us-west-2");
  });
});
