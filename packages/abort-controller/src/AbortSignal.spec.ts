import { AbortController } from "./AbortController";

describe("AbortSignal", () => {
  it("should report aborted to be false until the signal is aborted", () => {
    const controller = new AbortController();
    const { signal } = controller;
    expect(signal.aborted).toBe(false);

    controller.abort();
    expect(signal.aborted).toBe(true);
  });

  it("should invoke the onabort handler when the signal is aborted", () => {
    const controller = new AbortController();
    const { signal } = controller;
    const abortHandler = jest.fn();
    signal.onabort = abortHandler;
    expect(abortHandler.mock.calls.length).toBe(0);
    controller.abort();
    expect(abortHandler.mock.calls.length).toBe(1);
  });

  it("should not invoke the onabort handler multiple time", () => {
    const controller = new AbortController();
    const { signal } = controller;
    const abortHandler = jest.fn();
    signal.onabort = abortHandler;
    expect(abortHandler.mock.calls.length).toBe(0);
    controller.abort();
    expect(abortHandler.mock.calls.length).toBe(1);
    controller.abort();
    expect(abortHandler.mock.calls.length).toBe(1);
  });
});
