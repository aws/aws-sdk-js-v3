import { describe, expect, test as it } from "vitest";

import { resolveUserAgentConfig } from "./configurations";

describe(resolveUserAgentConfig.name, () => {
  it("maintains object custody", () => {
    const input = {
      defaultUserAgentProvider: async () => [["", ""] as [string, string?]],
      runtime: "node",
    };
    expect(resolveUserAgentConfig(input)).toBe(input);
  });
});
