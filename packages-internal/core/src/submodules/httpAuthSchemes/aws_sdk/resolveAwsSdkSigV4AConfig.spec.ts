import { describe, expect, test as it } from "vitest";

import { resolveAwsSdkSigV4AConfig } from "./resolveAwsSdkSigV4AConfig";

describe(resolveAwsSdkSigV4AConfig.name, () => {
  it("should normalize provider but default to undefined value", async () => {
    const config = resolveAwsSdkSigV4AConfig({});

    expect(typeof config.sigv4aSigningRegionSet).toEqual("function");
    expect(await config.sigv4aSigningRegionSet()).toEqual(undefined);
  });

  it("maintains object custody", () => {
    const input = {};
    expect(resolveAwsSdkSigV4AConfig(input)).toBe(input);
  });
});
