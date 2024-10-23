import { describe, expect, test as it } from "vitest";

import { resolveApiKeyConfig } from "./index";

describe("ApiKeyConfig", () => {
  it("should return the input unchanged", () => {
    const config = {
      apiKey: () => Promise.resolve("example-api-key"),
    };
    expect(resolveApiKeyConfig(config)).toEqual(config);
  });
});
