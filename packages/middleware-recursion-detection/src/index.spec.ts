import { HttpRequest } from "@smithy/protocol-http";

import { recursionDetectionMiddleware } from "./index";

describe(recursionDetectionMiddleware.name, () => {
  const mockNextHandler = jest.fn();
  const originEnv = process.env;
  const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {};
  });

  afterAll(() => {
    process.env = originEnv;
  });

  it(`sets ${TRACE_ID_HEADER_NAME} header when function name and trace id environmental variables are set`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware({ runtime: "node" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });
    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).toBe("some-trace-id");
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when function name environmental variable is NOT set`, async () => {
    process.env = {
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware({ runtime: "node" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).not.toBeDefined();
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when the header is already set`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware({ runtime: "node" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          [TRACE_ID_HEADER_NAME]: "some-real-trace-id",
        },
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).toBe("some-real-trace-id");
  });

  it("has no effect for browser runtime", async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware({ runtime: "browser" })(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).toBeUndefined();
  });
});
