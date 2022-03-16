import { CredentialsProviderError } from "./CredentialsProviderError";

describe(CredentialsProviderError.name, () => {
  it("should be named as CredentialsProviderError", () => {
    expect(new CredentialsProviderError("PANIC").name).toBe("CredentialsProviderError");
  });

  describe("should be instanceof CredentialsProviderError", () => {
    it("when created using constructor", () => {
      expect(new CredentialsProviderError("PANIC")).toBeInstanceOf(CredentialsProviderError);
    });

    it("when created using from()", () => {
      // ToDo: set instanceof to be CredentialsProviderError
      expect(CredentialsProviderError.from(new Error("PANIC"))).toBeInstanceOf(Error);
    });
  });
});
