import { HttpRequest } from "@aws-sdk/protocol-http";
import { FinalizeHandlerArguments, MiddlewareStack } from "@aws-sdk/types";

import { INVOCATION_ID_HEADER, REQUEST_HEADER } from "./constants";
import {
  getOmitRetryHeadersPlugin,
  omitRetryHeadersMiddleware,
  omitRetryHeadersMiddlewareOptions,
} from "./omitRetryHeadersMiddleware";

describe("getOmitRetryHeadersPlugin", () => {
  const mockClientStack = {
    add: jest.fn(),
    addRelativeTo: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`adds omitRetryHeadersMiddleware`, () => {
    getOmitRetryHeadersPlugin({}).applyToStack(mockClientStack as unknown as MiddlewareStack<any, any>);
    expect(mockClientStack.addRelativeTo).toHaveBeenCalledTimes(1);
    expect(mockClientStack.addRelativeTo.mock.calls[0][1]).toEqual(omitRetryHeadersMiddlewareOptions);
  });
});

describe("omitRetryHeadersMiddleware", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("remove retry headers", async () => {
    const next = jest.fn();
    const args = {
      request: new HttpRequest({
        headers: {
          [INVOCATION_ID_HEADER]: "12345",
          [REQUEST_HEADER]: "maxAttempts=30",
        },
      }),
    };

    await omitRetryHeadersMiddleware()(next)(args as FinalizeHandlerArguments<any>);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next.mock.calls[0][0].request.headers[INVOCATION_ID_HEADER]).toBeUndefined();
    expect(next.mock.calls[0][0].request.headers[REQUEST_HEADER]).toBeUndefined();
  });
});
