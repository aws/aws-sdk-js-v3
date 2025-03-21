import { describe, expect, test as it, vi } from "vitest";

import { resolveAwsSdkSigV4Config } from "./resolveAwsSdkSigV4Config";

describe(resolveAwsSdkSigV4Config.name, () => {
  it("maintains object custody", () => {
    const input = {
      region: "",
      sha256: vi.fn(),
      serviceId: "",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
    };
    expect(resolveAwsSdkSigV4Config(input)).toBe(input);
  });
});
