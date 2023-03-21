import { ClientRequest } from "http";

const DEFAULT_INITIAL_DELAY = 10 * 1000;

export interface SocketKeepAliveOptions {
    keepAlive: boolean;
    initialDelay: number;
}

export const setSocketKeepAlive = (request: ClientRequest, socketKeepAlive: SocketKeepAliveOptions) => {
    if (!socketKeepAlive || socketKeepAlive.keepAlive === false) {
        return;
    }

    request.on('socket', (socket) => {
        socket.setKeepAlive(socketKeepAlive.keepAlive, socketKeepAlive.initialDelay || DEFAULT_INITIAL_DELAY);
    })
}