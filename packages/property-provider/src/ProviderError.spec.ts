import { ProviderError } from "./ProviderError";

describe("ProviderError", () => {
  it("should direct the chain to proceed to the next link by default", () => {
    expect(new ProviderError("PANIC").tryNextLink).toBe(true);
  });

  it("should allow errors to halt the chain", () => {
    expect(new ProviderError("PANIC", false).tryNextLink).toBe(false);
  });
});
