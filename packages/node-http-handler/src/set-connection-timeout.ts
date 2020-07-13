import { ClientRequest } from "http";
import { Socket } from "net";

export function setConnectionTimeout(request: ClientRequest, reject: (err: Error) => void, timeoutInMs = 0) {
  if (!timeoutInMs) {
    return;
  }

  request.on("socket", function (this: ClientRequest, socket: Socket) {
    if (socket.connecting) {
      // Throw a connecting timeout error unless a connection is made within x time
      const timeoutId = setTimeout(() => {
        // abort the request to destroy it
        this.abort();

        const timeoutError = new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);

      // if the connection was established, cancel the timeout
      socket.on("connect", () => {
        clearTimeout(timeoutId);
      });
    }
  });
}
