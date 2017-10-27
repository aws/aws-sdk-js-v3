import {ClientRequest} from 'http';
import {Socket} from 'net';

export function setConnectionTimeout(
    request: ClientRequest,
    reject: (err: Error) => void,
    timeoutInMs: number = 0
) {
    if (!timeoutInMs) {
        return;
    }

    request.on('socket', function(this: ClientRequest, socket: Socket) {
        if (socket.connecting) {
            // Throw a connecting timeout error unless a connection is made within x time
            let timeoutId = setTimeout(() => {
                // abort the request to destroy it
                this.abort();
                reject(new Error(
                    `TimeoutError: Socket timed out without establishing a connection within ${timeoutInMs} ms`
                ));
            }, timeoutInMs);

            // if the connection was established, cancel the timeout
            socket.on('connect', () => {
                clearTimeout(timeoutId);
            });
        }
    });
}