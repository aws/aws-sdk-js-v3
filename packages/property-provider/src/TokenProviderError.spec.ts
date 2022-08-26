import { ProviderError } from "./ProviderError";
import { TokenProviderError } from "./TokenProviderError";

describe(TokenProviderError.name, () => {
  it("should be named as TokenProviderError", () => {
    expect(new TokenProviderError("PANIC").name).toBe("TokenProviderError");
  });

  describe.each([Error, ProviderError, TokenProviderError])("should be instanceof %p", (classConstructor) => {
    it("when created using constructor", () => {
      expect(new TokenProviderError("PANIC")).toBeInstanceOf(classConstructor);
    });

    it("when created using from()", () => {
      expect(TokenProviderError.from(new Error("PANIC"))).toBeInstanceOf(classConstructor);
    });
  });
});
