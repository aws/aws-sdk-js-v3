import { chain } from "./chain";
import { ProviderError } from "./ProviderError";

const resolveStatic = (staticValue: unknown) => jest.fn().mockResolvedValue(staticValue);
const rejectWithError = (errorMsg: string) => jest.fn().mockRejectedValue(new Error(errorMsg));
const rejectWithProviderError = (errorMsg: string) => jest.fn().mockRejectedValue(new ProviderError(errorMsg));

describe("chain", () => {
  it("should distill many credential providers into one", async () => {
    const provider = chain(resolveStatic("foo"), resolveStatic("bar"));
    expect(typeof (await provider())).toBe("string");
  });

  it("should return the resolved value of the first successful promise", async () => {
    const expectedOutput = "foo";
    const providers = [
      rejectWithProviderError("Move along"),
      rejectWithProviderError("Nothing to see here"),
      resolveStatic(expectedOutput),
    ];

    await expect(chain(...providers)()).resolves.toBe(expectedOutput);
    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).toHaveBeenCalledTimes(1);
  });

  it("should not invoke subsequent providers once one resolves", async () => {
    const expectedOutput = "foo";
    const providers = [
      rejectWithProviderError("Move along"),
      resolveStatic(expectedOutput),
      rejectWithProviderError("This provider should not be invoked"),
    ];

    await expect(chain(...providers)()).resolves.toBe(expectedOutput);
    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  it("should throw if no provider resolves", async () => {
    const expectedErrorMsg = "Last provider failed";
    const providers = [
      rejectWithProviderError("Move along"),
      rejectWithProviderError("Nothing to see here"),
      rejectWithProviderError(expectedErrorMsg),
    ];

    await expect(chain(...providers)()).rejects.toMatchObject(new Error(expectedErrorMsg));
    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).toHaveBeenCalledTimes(1);
  });

  it("should halt if an unrecognized error is encountered", async () => {
    const expectedErrorMsg = "Unrelated failure";
    const providers = [rejectWithProviderError("Move along"), rejectWithError(expectedErrorMsg), resolveStatic("foo")];

    await expect(chain(...providers)()).rejects.toMatchObject(new Error(expectedErrorMsg));
    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  it("should halt if ProviderError explicitly requests it", async () => {
    const expectedErrorMsg = "ProviderError with tryNextLink set to false";
    const providers = [
      rejectWithProviderError("Move along"),
      jest.fn().mockRejectedValue(new ProviderError(expectedErrorMsg, false)),
      resolveStatic("foo"),
    ];

    await expect(chain(...providers)()).rejects.toMatchObject(new Error(expectedErrorMsg));
    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  it("should reject chains with no links", async () => {
    await expect(chain()()).rejects.toMatchObject(new Error("No providers in chain"));
  });
});
