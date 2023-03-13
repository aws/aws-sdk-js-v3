/**
 * @jest-environment jsdom
 */
import { tokenDefaultProvider } from "./tokenDefaultProvider.browser";

/**
 * TODO(identityandauth)
 */
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
