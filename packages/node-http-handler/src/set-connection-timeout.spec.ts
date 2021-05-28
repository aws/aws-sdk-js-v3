import { setConnectionTimeout } from "./set-connection-timeout";

describe("setConnectionTimeout", () => {
  const reject = jest.fn();
  const clientRequest: any = {
    on: jest.fn(),
    destroy: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("will not attach listeners if timeout is 0", () => {
    setConnectionTimeout(clientRequest, reject, 0);
    expect(clientRequest.on).not.toHaveBeenCalled();
  });

  it("will not attach listeners if timeout is not provided", () => {
    setConnectionTimeout(clientRequest, reject);
    expect(clientRequest.on).not.toHaveBeenCalled();
  });

  describe("when timeout is provided", () => {
    const timeoutInMs = 100;
    const mockSocket = {
      connecting: true,
      on: jest.fn(),
    };

    beforeEach(() => {
      jest.useFakeTimers();
      setConnectionTimeout(clientRequest, reject, timeoutInMs);
    });

    it("attaches listener", () => {
      expect(clientRequest.on).toHaveBeenCalledTimes(1);
      expect(clientRequest.on).toHaveBeenCalledWith("socket", expect.any(Function));
    });

    it("doesn't set timeout if socket is already connected", () => {
      clientRequest.on.mock.calls[0][1]({
        ...mockSocket,
        connecting: false,
      });
      expect(mockSocket.on).not.toHaveBeenCalled();
      expect(setTimeout).not.toHaveBeenCalled();
      expect(reject).not.toHaveBeenCalled();
    });

    it("rejects and aborts request if socket isn't connected by timeout", () => {
      clientRequest.on.mock.calls[0][1](mockSocket);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), timeoutInMs);
      expect(mockSocket.on).toHaveBeenCalledTimes(1);
      expect(mockSocket.on).toHaveBeenCalledWith("connect", expect.any(Function));

      expect(clientRequest.destroy).not.toHaveBeenCalled();
      expect(reject).not.toHaveBeenCalled();

      // Fast-forward until timer has been executed.
      jest.advanceTimersByTime(timeoutInMs);
      expect(clientRequest.destroy).toHaveBeenCalledTimes(1);
      expect(reject).toHaveBeenCalledTimes(1);
      expect(reject).toHaveBeenCalledWith(
        Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
          name: "TimeoutError",
        })
      );
    });

    it("clears timeout if socket gets connected", () => {
      const mockTimeoutId = 42;
      (setTimeout as unknown as jest.Mock).mockReturnValueOnce(mockTimeoutId);
      clientRequest.on.mock.calls[0][1](mockSocket);

      expect(clientRequest.destroy).not.toHaveBeenCalled();
      expect(reject).not.toHaveBeenCalled();
      expect(clearTimeout).not.toHaveBeenCalled();

      // Fast-forward for half the amount of time and call connect callback to clear timer.
      jest.advanceTimersByTime(timeoutInMs / 2);
      mockSocket.on.mock.calls[0][1]();

      expect(clearTimeout).toHaveBeenCalled();
      expect(clearTimeout).toHaveBeenCalledWith(mockTimeoutId);

      // Fast-forward until timer has been executed.
      jest.runAllTimers();
      expect(clientRequest.destroy).not.toHaveBeenCalled();
      expect(reject).not.toHaveBeenCalled();
    });
  });
});
