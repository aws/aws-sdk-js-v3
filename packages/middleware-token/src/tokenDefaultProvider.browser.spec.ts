/**
 * @jest-environment jsdom
 */
import { tokenDefaultProvider } from "./tokenDefaultProvider.browser";

describe(tokenDefaultProvider.name, () => {
  it("should throw error", () => {
    expect(() => {
      tokenDefaultProvider({})();
    }).toThrow(new Error("Token is missing"));
  });
});
