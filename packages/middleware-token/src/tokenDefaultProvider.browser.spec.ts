import { describe, expect, test as it } from "vitest";

import { tokenDefaultProvider } from "./tokenDefaultProvider.browser";

describe(tokenDefaultProvider.name, () => {
  it("should throw error", async () => {
    try {
      await tokenDefaultProvider({})();
      fail("Expected error");
    } catch (error) {
      expect(error.message).toEqual("Token is missing");
    }
  });
});
