import { addExpectContinueMiddleware } from "./index";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("addExpectContinueMiddleware", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets the Expect header to 100-continue if there is a request body", async () => {
    const handler = addExpectContinueMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        body: "foo",
        headers: {}
      })
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["Expect"]).toBe("100-continue");
  });

  it("does not set the Expect header to 100-continue if there is no request body", async () => {
    const handler = addExpectContinueMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {}
      })
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["Expect"]).toBeUndefined();
  });
});
