import { ProviderError } from "./ProviderError";

describe("ProviderError", () => {
  it("should direct the chain to proceed to the next link by default", () => {
    expect(new ProviderError("PANIC").tryNextLink).toBe(true);
  });

  it("should allow errors to halt the chain", () => {
    expect(new ProviderError("PANIC", false).tryNextLink).toBe(false);
  });

  describe("from()", () => {
    it("should create ProviderError from existing error", () => {
      const error = new Error("PANIC");
      // @ts-expect-error Property 'someValue' does not exist on type 'Error'.
      error.someValue = "foo";
      const providerError = ProviderError.from(error);
      // @ts-expect-error Property 'someValue' does not exist on type 'ProviderError'.
      expect(providerError.someValue).toBe("foo");
      expect(providerError.tryNextLink).toBe(true);
    });
  });
});
