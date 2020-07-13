import { ClientRequest } from "http";

import { setSocketTimeout } from "./set-socket-timeout";

describe("setSocketTimeout", () => {
  const clientRequest: any = {
    abort: jest.fn(),
    setTimeout: jest.fn(),
  };

  beforeEach(() => {
    clientRequest.abort.mockClear();
    clientRequest.setTimeout.mockClear();
  });

  it(`sets the request's timeout if provided`, () => {
    setSocketTimeout(<ClientRequest>clientRequest, jest.fn(), 100);

    expect(clientRequest.setTimeout.mock.calls.length).toBe(1);
    expect(clientRequest.setTimeout.mock.calls[0][0]).toBe(100);
  });

  it(`sets the request's timeout to 0 if not provided`, () => {
    setSocketTimeout(<ClientRequest>clientRequest, jest.fn());

    expect(clientRequest.setTimeout.mock.calls.length).toBe(1);
    expect(clientRequest.setTimeout.mock.calls[0][0]).toBe(0);
  });

  it(`aborts the request on timeout`, () => {
    setSocketTimeout(<ClientRequest>clientRequest, jest.fn());

    expect(clientRequest.setTimeout.mock.calls.length).toBe(1);
    expect(clientRequest.setTimeout.mock.calls[0][0]).toBe(0);

    // call setTimeout callback
    const cb = clientRequest.setTimeout.mock.calls[0][1];
    cb.call(clientRequest);
    expect(clientRequest.abort.mock.calls.length).toBe(1);
  });

  it(`rejects on timeout with a TimeoutError`, () => {
    const reject = jest.fn();

    setSocketTimeout(<ClientRequest>clientRequest, reject);

    expect(clientRequest.setTimeout.mock.calls.length).toBe(1);
    expect(clientRequest.setTimeout.mock.calls[0][0]).toBe(0);

    // call setTimeout callback
    const cb = clientRequest.setTimeout.mock.calls[0][1];
    cb.call(clientRequest);
    expect(reject.mock.calls.length).toBe(1);
    expect(reject.mock.calls[0][0].name).toBe("TimeoutError");
  });
});
