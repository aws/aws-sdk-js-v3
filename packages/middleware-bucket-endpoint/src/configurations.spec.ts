import { describe, expect, test as it, vi } from "vitest";

import { resolveBucketEndpointConfig } from "./configurations";

describe(resolveBucketEndpointConfig.name, () => {
  it("maintains object custody", () => {
    const input = {
      region: async () => "",
      regionInfoProvider: vi.fn(),
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
    };
    expect(resolveBucketEndpointConfig(input)).toBe(input);
  });
});
