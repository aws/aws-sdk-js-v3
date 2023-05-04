import { EventEmitter } from "events";
import { ClientRequest } from "http";
import { Socket } from "net";

import { setSocketKeepAlive } from "./set-socket-keep-alive";

describe("setSocketKeepAlive", () => {
  let request: ClientRequest;
  let socket: Socket;

  beforeEach(() => {
    request = new EventEmitter() as ClientRequest;
    socket = new Socket();
  });

  it("should set keepAlive to true", () => {
    setSocketKeepAlive(request, { keepAlive: true });

    const setKeepAliveSpy = jest.spyOn(socket, "setKeepAlive");
    request.emit("socket", socket);

    expect(setKeepAliveSpy).toHaveBeenCalled();
    expect(setKeepAliveSpy).toHaveBeenCalledWith(true, 0);
  });

  it("should set keepAlive to true with custom initialDelay", () => {
    const initialDelay = 5 * 1000;
    setSocketKeepAlive(request, { keepAlive: true, keepAliveMsecs: initialDelay });

    const setKeepAliveSpy = jest.spyOn(socket, "setKeepAlive");
    request.emit("socket", socket);

    expect(setKeepAliveSpy).toHaveBeenCalled();
    expect(setKeepAliveSpy).toHaveBeenCalledWith(true, initialDelay);
  });

  it("should not set keepAlive at all when keepAlive is false", () => {
    setSocketKeepAlive(request, { keepAlive: false });

    const setKeepAliveSpy = jest.spyOn(socket, "setKeepAlive");
    request.emit("socket", socket);

    expect(setKeepAliveSpy).not.toHaveBeenCalled();
  });
});

