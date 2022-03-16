import { ProviderError } from "./ProviderError";

describe(ProviderError.name, () => {
  it("should be named as ProviderError", () => {
    expect(new ProviderError("PANIC").name).toBe("ProviderError");
  });

  it("should direct the chain to proceed to the next link by default", () => {
    expect(new ProviderError("PANIC").tryNextLink).toBe(true);
  });

  it("should allow errors to halt the chain", () => {
    expect(new ProviderError("PANIC", false).tryNextLink).toBe(false);
  });

  describe("should be instanceof ProviderError", () => {
    it("when created using constructor", () => {
      expect(new ProviderError("PANIC")).toBeInstanceOf(ProviderError);
    });

    it("when created using from()", () => {
      // ToDo: set instanceof to be CredentialsProviderError
      expect(ProviderError.from(new Error("PANIC"))).toBeInstanceOf(Error);
    });
  });

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
