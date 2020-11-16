import { setSocketTimeout } from "./set-socket-timeout";

describe("setSocketTimeout", () => {
  const clientRequest: any = {
    destroy: jest.fn(),
    setTimeout: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`sets the request's timeout if provided`, () => {
    setSocketTimeout(clientRequest, jest.fn(), 100);

    expect(clientRequest.setTimeout).toHaveBeenCalledTimes(1);
    expect(clientRequest.setTimeout).toHaveBeenLastCalledWith(100, expect.any(Function));
  });

  it(`sets the request's timeout to 0 if not provided`, () => {
    setSocketTimeout(clientRequest, jest.fn());

    expect(clientRequest.setTimeout).toHaveBeenCalledTimes(1);
    expect(clientRequest.setTimeout).toHaveBeenLastCalledWith(0, expect.any(Function));
  });

  it(`destroys the request on timeout`, () => {
    setSocketTimeout(clientRequest, jest.fn());
    expect(clientRequest.destroy).not.toHaveBeenCalled();

    // call setTimeout callback
    clientRequest.setTimeout.mock.calls[0][1]();
    expect(clientRequest.destroy).toHaveBeenCalledTimes(1);
  });

  it(`rejects on timeout with a TimeoutError`, () => {
    const reject = jest.fn();
    const timeoutInMs = 100;

    setSocketTimeout(clientRequest, reject, timeoutInMs);
    expect(reject).not.toHaveBeenCalled();

    // call setTimeout callback
    clientRequest.setTimeout.mock.calls[0][1]();
    expect(reject).toHaveBeenCalledTimes(1);
    expect(reject).toHaveBeenCalledWith(
      Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" })
    );
  });
});
