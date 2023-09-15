import { NoOpLogger } from "@smithy/smithy-client";

import { checkContentLengthHeader } from "./check-content-length-header";

describe("checkContentLengthHeaderMiddleware", () => {
  const mockNextHandler = jest.fn();

  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, "warn");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("warns if uploading a payload of unknown length", async () => {
    const handler = checkContentLengthHeader()(mockNextHandler, {});

    await handler({
      request: {
        method: null,
        protocol: null,
        hostname: null,
        path: null,
        query: {},
        headers: {},
      },
      input: {},
    });

    expect(spy).toHaveBeenCalledWith(
      "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
    );
  });

  it("warns with console if logger is the default NoOpLogger", async () => {
    const handler = checkContentLengthHeader()(mockNextHandler, {
      logger: new NoOpLogger(),
    });

    await handler({
      request: {
        method: null,
        protocol: null,
        hostname: null,
        path: null,
        query: {},
        headers: {},
      },
      input: {},
    });

    expect(spy).toHaveBeenCalledWith(
      "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
    );
  });

  it("uses the context logger if available", async () => {
    const context = {
      logger: {
        called: false,
        calledWith: "",
        warn(msg) {
          this.called = true;
          this.calledWith = msg;
        },
        debug() {},
        info() {},
        error() {},
      },
    };
    const handler = checkContentLengthHeader()(mockNextHandler, context);

    await handler({
      request: {
        method: null,
        protocol: null,
        hostname: null,
        path: null,
        query: {},
        headers: {},
      },
      input: {},
    });

    expect(spy).not.toHaveBeenCalled();
    expect(context.logger.called).toBe(true);
    expect(context.logger.calledWith).toEqual(
      "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
    );
  });

  it("does not warn if uploading a payload of known length", async () => {
    const handler = checkContentLengthHeader()(mockNextHandler, {});

    await handler({
      request: {
        method: null,
        protocol: null,
        hostname: null,
        path: null,
        query: {},
        headers: {
          "content-length": "5",
        },
      },
      input: {},
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
