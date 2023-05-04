import { ClientRequest } from "http";

export interface SocketKeepAliveOptions {
  keepAlive: boolean;
  keepAliveMsecs?: number;
}

export const setSocketKeepAlive = (request: ClientRequest, socketKeepAlive: SocketKeepAliveOptions) => {
  if (socketKeepAlive?.keepAlive !== true) {
    return;
  }

  request.on("socket", (socket) => {
    socket.setKeepAlive(socketKeepAlive.keepAlive, socketKeepAlive.keepAliveMsecs || 0);
  });
};
