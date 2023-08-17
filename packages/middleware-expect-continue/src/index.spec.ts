import { HttpRequest } from "@smithy/protocol-http";

import { addExpectContinueMiddleware } from "./index";

describe("addExpectContinueMiddleware", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets the Expect header to 100-continue if there is a request body in node runtime", async () => {
    const handler = addExpectContinueMiddleware({ runtime: "node" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        body: "foo",
        headers: {},
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["Expect"]).toBe("100-continue");
  });

  it("does not set the Expect header to 100-continue if there is no request body in node runtime", async () => {
    const handler = addExpectContinueMiddleware({ runtime: "node" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["Expect"]).toBeUndefined();
  });

  it("does not set the Expect header to 100-continue for browser runtime", async () => {
    const handler = addExpectContinueMiddleware({ runtime: "browser" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        body: "foo",
        headers: {},
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["Expect"]).toBeUndefined();
  });
});
