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

    try {
      const result = await chain(...providers)();
      expect(result).toBe(expectedOutput);
    } catch (error) {
      throw error;
    }

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

    try {
      const result = await chain(...providers)();
      expect(result).toBe(expectedOutput);
    } catch (error) {
      throw error;
    }

    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  describe("should throw if no provider resolves", () => {
    const expectedErrorMsg = "Last provider failed";

    it.each([
      [ProviderError, rejectWithProviderError(expectedErrorMsg)],
      [Error, rejectWithError(expectedErrorMsg)],
    ])("case %p", async (errorType, errorProviderMockFn) => {
      const firstProviderWhichRejects = rejectWithProviderError("Move along");
      try {
        await chain(firstProviderWhichRejects, errorProviderMockFn)();
        throw new Error("Should not get here");
      } catch (error) {
        expect(error).toEqual(new errorType(expectedErrorMsg));
      }
      expect(firstProviderWhichRejects).toHaveBeenCalledTimes(1);
      expect(errorProviderMockFn).toHaveBeenCalledTimes(1);
    });
  });

  it("should halt if an unrecognized error is encountered", async () => {
    const expectedErrorMsg = "Unrelated failure";
    const providers = [rejectWithProviderError("Move along"), rejectWithError(expectedErrorMsg), resolveStatic("foo")];

    try {
      await chain(...providers)();
      throw new Error("Should not get here");
    } catch (error) {
      expect(error).toEqual(new Error(expectedErrorMsg));
    }

    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  it("should halt if ProviderError explicitly requests it", async () => {
    const expectedError = new ProviderError("ProviderError with tryNextLink set to false", false);
    const providers = [
      rejectWithProviderError("Move along"),
      jest.fn().mockRejectedValue(expectedError),
      resolveStatic("foo"),
    ];

    try {
      await chain(...providers)();
      throw new Error("Should not get here");
    } catch (error) {
      expect(error).toEqual(expectedError);
    }

    expect(providers[0]).toHaveBeenCalledTimes(1);
    expect(providers[1]).toHaveBeenCalledTimes(1);
    expect(providers[2]).not.toHaveBeenCalled();
  });

  it("should reject chains with no links", async () => {
    try {
      await chain()();
      throw new Error("Should not get here");
    } catch (error) {
      expect(error).toEqual(new Error("No providers in chain"));
    }
  });
});
