import { chain } from "./chain";
import { fromStatic } from "./fromStatic";
import { ProviderError } from "./ProviderError";

describe("chain", () => {
  it("should distill many credential providers into one", async () => {
    const provider = chain(fromStatic("foo"), fromStatic("bar"));

    expect(typeof (await provider())).toBe("string");
  });

  it("should return the resolved value of the first successful promise", async () => {
    const provider = chain(
      () => Promise.reject(new ProviderError("Move along")),
      () => Promise.reject(new ProviderError("Nothing to see here")),
      fromStatic("foo")
    );

    expect(await provider()).toBe("foo");
  });

  it("should not invoke subsequent providers once one resolves", async () => {
    const providers = [
      jest.fn().mockRejectedValue(new ProviderError("Move along")),
      jest.fn().mockResolvedValue("foo"),
      jest.fn(() => fail("This provider should not be invoked")),
    ];

    expect(await chain(...providers)()).toBe("foo");
    expect(providers[0].mock.calls.length).toBe(1);
    expect(providers[1].mock.calls.length).toBe(1);
    expect(providers[2].mock.calls.length).toBe(0);
  });

  it("should halt if an unrecognized error is encountered", async () => {
    const provider = chain(
      () => Promise.reject(new ProviderError("Move along")),
      () => Promise.reject(new Error("Unrelated failure")),
      fromStatic("foo")
    );

    await expect(provider()).rejects.toMatchObject(new Error("Unrelated failure"));
  });

  it("should reject chains with no links", async () => {
    await expect(chain()()).rejects.toMatchObject(new Error("No providers in chain"));
  });
});
