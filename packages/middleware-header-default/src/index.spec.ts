import { HttpRequest } from "@aws-sdk/protocol-http";

import { headerDefault } from "./index";

describe("headerDefault", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set any defined headers on the request", async () => {
    const mockHandlerArgs = {
      request: new HttpRequest({
        headers: {},
      }),
    };
    const headers = {
      foo: "fizz",
      bar: "buzz",
    };
    const middleware = headerDefault(headers);
    const handler = middleware(mockNextHandler, {} as any);

    await handler(mockHandlerArgs as any);

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["foo"]).toBe("fizz");
    expect(request.headers["bar"]).toBe("buzz");
  });

  it("should not mutate the original request", async () => {
    const mockHandlerArgs = {
      request: new HttpRequest({ headers: {} }),
    };
    const headers = {
      foo: "fizz",
      bar: "buzz",
    };
    const middleware = headerDefault(headers);
    const handler = middleware(mockNextHandler, {} as any);

    await handler(mockHandlerArgs as any);

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["foo"]).toBe("fizz");
    expect(request.headers["bar"]).toBe("buzz");
    expect(Object.keys(mockHandlerArgs.request.headers).length).toBe(0);
  });

  it("should merge headers with existing headers", async () => {
    const mockHandlerArgs = {
      request: new HttpRequest({
        headers: {
          cat: "dog",
        },
      }),
    };
    const headers = {
      foo: "fizz",
      bar: "buzz",
    };
    const middleware = headerDefault(headers);
    const handler = middleware(mockNextHandler, {} as any);

    await handler(mockHandlerArgs as any);

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["foo"]).toBe("fizz");
    expect(request.headers["bar"]).toBe("buzz");
    expect(request.headers["cat"]).toBe("dog");
    expect(Object.keys(mockHandlerArgs.request.headers).length).toBe(1);
  });

  it("should not override existing headers", async () => {
    const mockHandlerArgs = {
      request: new HttpRequest({
        headers: {
          foo: "dog",
        },
      }),
    };
    const headers = {
      foo: "fizz",
      bar: "buzz",
    };
    const middleware = headerDefault(headers);
    const handler = middleware(mockNextHandler, {} as any);

    await handler(mockHandlerArgs as any);

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["foo"]).toBe("dog");
    expect(request.headers["bar"]).toBe("buzz");
    expect(Object.keys(mockHandlerArgs.request.headers).length).toBe(1);
  });
});
