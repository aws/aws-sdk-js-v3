import { ClientRequest } from "http";
import { Socket } from "net";
import { setConnectionTimeout } from "./set-connection-timeout";

describe("setConnectionTimeout", () => {
  const clientRequest: any = {
    on: jest.fn(),
  };

  beforeEach(() => {
    clientRequest.on.mockClear();
  });

  it("will not attach listeners if timeout is 0", () => {
    setConnectionTimeout(<ClientRequest>clientRequest, jest.fn(), 0);

    expect(clientRequest.on.mock.calls.length).toBe(0);
  });

  it("will not attach listeners if timeout is not provided", () => {
    setConnectionTimeout(<ClientRequest>clientRequest, jest.fn());

    expect(clientRequest.on.mock.calls.length).toBe(0);
  });

  it("will attach listeners if timeout is provided", () => {
    setConnectionTimeout(<ClientRequest>clientRequest, jest.fn(), 100);

    expect(clientRequest.on.mock.calls.length).toBe(1);
    expect(clientRequest.on.mock.calls[0][0]).toBe("socket");
  });
});
