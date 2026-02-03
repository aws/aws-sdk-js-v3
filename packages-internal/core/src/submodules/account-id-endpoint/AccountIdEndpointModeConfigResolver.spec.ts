import { describe, expect, test as it } from "vitest";

import { resolveAccountIdEndpointModeConfig } from "./AccountIdEndpointModeConfigResolver";

describe(resolveAccountIdEndpointModeConfig.name, () => {
  it("maintains object custody", () => {
    const input = {};
    expect(resolveAccountIdEndpointModeConfig(input)).toBe(input);
  });
});
