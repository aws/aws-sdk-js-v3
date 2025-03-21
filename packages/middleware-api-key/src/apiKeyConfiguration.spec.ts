import { describe, expect, test as it } from "vitest";

import { resolveApiKeyConfig } from "./index";

describe("ApiKeyConfig", () => {
  it("maintains object custody", () => {
    const config = {
      apiKey: () => Promise.resolve("example-api-key"),
    };
    expect(resolveApiKeyConfig(config)).toBe(config);
  });
  it("should return the input unchanged", () => {
    const config = {
      apiKey: () => Promise.resolve("example-api-key"),
    };
    expect(resolveApiKeyConfig(config)).toEqual(config);
  });
});
