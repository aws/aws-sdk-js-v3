import { checkUploadBodyMiddleware } from "./check-upload-body";

describe("checkUploadBodyMiddleware", () => {
  const mockNextHandler = jest.fn();

  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, "warn");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("warns if uploading a stream of unknown length", async () => {
    const handler = checkUploadBodyMiddleware()(mockNextHandler, {});

    const result = await handler({
      request: null,
      input: {
        Body: {
          emit() {},
          read() {},
        },
        ContentLength: undefined,
      },
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
    const handler = checkUploadBodyMiddleware()(mockNextHandler, context);

    const result = await handler({
      request: null,
      input: {
        Body: {
          emit() {},
          read() {},
        },
        ContentLength: undefined,
      },
    });

    expect(spy).not.toHaveBeenCalled();
    expect(context.logger.called).toBe(true);
    expect(context.logger.calledWith).toEqual(
      "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
    );
  });

  it("does not warn if uploading a stream of known length", async () => {
    const handler = checkUploadBodyMiddleware()(mockNextHandler, {});

    const result = await handler({
      request: null,
      input: {
        Body: {
          emit() {},
          read() {},
        },
        ContentLength: 5,
      },
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
