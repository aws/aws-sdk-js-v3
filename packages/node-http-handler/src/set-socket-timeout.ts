import {ClientRequest} from 'http';

export function setSocketTimeout(
    request: ClientRequest,
    reject: (err: Error) => void,
    timeoutInMs: number = 0
) {
    request.setTimeout(timeoutInMs, function(this: ClientRequest) {
        // abort the request to destroy it
        this.abort();
        const timeoutError = new Error(`Socket timed out after ${timeoutInMs} ms of inactivity`);
        timeoutError.name = 'TimeoutError';
        reject(timeoutError);
    });
}
