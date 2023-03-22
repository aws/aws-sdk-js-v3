import { ClientRequest } from "http";

const DEFAULT_INITIAL_DELAY = 300 * 1000;

export interface SocketKeepAliveOptions {
    keepAlive: boolean;
    initialDelayInMSecs?: number;
}

export const setSocketKeepAlive = (
    request: ClientRequest,
    socketKeepAlive: SocketKeepAliveOptions
) => {
    if (!(socketKeepAlive?.keepAlive === true)) {
        return;
    }

    request.on("socket", (socket) => {
        socket.setKeepAlive(
            socketKeepAlive.keepAlive,
            socketKeepAlive.initialDelayInMSecs || DEFAULT_INITIAL_DELAY
        );
    });
};
