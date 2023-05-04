import { EventEmitter } from "events";

import { setSocketKeepAlive } from "./set-socket-keep-alive";

class MockSocket {
  enableKeepAlive: boolean;
  keepAliveInitialDelay: number;

  setKeepAlive(enable, initialDelay) {
    this.enableKeepAlive = enable;
    this.keepAliveInitialDelay = initialDelay;
  }

  isKeepAliveEnabled() {
    return this.enableKeepAlive;
  }

  getKeepALiveInitialDelay() {
    return this.keepAliveInitialDelay;
  }
}

describe("setSocketKeepAlive", () => {
  let request: any;
  let socket;

  beforeEach(() => {
    request = new EventEmitter();
    socket = new MockSocket();
  });

  it("should set keepAlive to true", () => {
    setSocketKeepAlive(request, {
      keepAlive: true,
    });
    request.emit("socket", socket);

    expect(socket.isKeepAliveEnabled()).toBeTruthy();
  });

  it("should set keepAlive to true with custom initialDelay", () => {
    const initialDelay = 5 * 1000;
    setSocketKeepAlive(request, {
      keepAlive: true,
      keepAliveMsecs: initialDelay,
    });
    request.emit("socket", socket);

    expect(socket.isKeepAliveEnabled() && socket.getKeepALiveInitialDelay() === initialDelay).toBeTruthy();
  });

  it("should not set keepAlive at all when keepAlive is false", () => {
    setSocketKeepAlive(request, {
      keepAlive: false,
    });
    request.emit("socket", socket);

    expect(socket.isKeepAliveEnabled()).toBeFalsy();
  });
});
