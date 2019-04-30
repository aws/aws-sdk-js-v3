import { AbortController } from "./AbortController";
import { AbortSignal } from "./AbortSignal";

jest.useFakeTimers();

describe("AbortController", () => {
  it("should communicate cancellation via its signal", () => {
    const source = new AbortController();
    const { signal } = source;
    expect(signal).toBeInstanceOf(AbortSignal);
    expect(signal.aborted).toBe(false);

    source.abort();
    expect(signal.aborted).toBe(true);
  });
});
