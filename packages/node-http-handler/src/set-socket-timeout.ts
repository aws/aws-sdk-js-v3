import { ClientRequest } from "http";

export function setSocketTimeout(request: ClientRequest, reject: (err: Error) => void, timeoutInMs = 0) {
  request.setTimeout(timeoutInMs, function (this: ClientRequest) {
    // abort the request to destroy it
    this.abort();
    const timeoutError = new Error(`Connection timed out after ${timeoutInMs} ms`);
    timeoutError.name = "TimeoutError";
    reject(timeoutError);
  });
}
