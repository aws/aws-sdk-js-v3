import {
    AbortSignal,
    BrowserHttpOptions,
    Handler,
    HeaderBag,
    HttpHandler,
    HttpHandlerOptions,
    HttpRequest,
    HttpResponse
} from '@aws/types';

import {requestTimeout} from './request-timeout';

declare var AbortController: any;

export const httpHandler: HttpHandler<ReadableStream> = function httpHandler(
    request: HttpRequest<ReadableStream>,
    options: HttpHandlerOptions<BrowserHttpOptions>
): Promise<HttpResponse<ReadableStream>> {
    const abortSignal = options && options.abortSignal;
    if (options && options.httpOptions) {
        var requestTimeoutInMs = options.httpOptions.requestTimeout;
    }

    // if the request was already aborted, prevent doing extra work
    if (abortSignal && abortSignal.aborted) {
        const abortError = new Error('Request aborted');
        abortError.name = 'AbortError';
        return Promise.reject(abortError);
    }

    const url = `${request.protocol}//${request.hostname}:${request.port}${request.path}`;
    const requestOptions: RequestInit = {
        body: request.body,
        headers: request.headers,
        method: request.method,
        mode: 'cors'
    };

    // some browsers support abort signal
    if (typeof AbortController !== 'undefined') {
        (requestOptions as any)['signal'] = abortSignal;
    }

    const fetchRequest = new Request(url, requestOptions);
    const raceOfPromises = [
        fetch(fetchRequest)
            .then(response => {
                const fetchHeaders: any = response.headers;
                const transformedHeaders: HeaderBag = {};

                for (let pair of <Array<string[]>>fetchHeaders.entries()) {
                    transformedHeaders[pair[0]] = pair[1];
                }

                const httpResponse: HttpResponse<ReadableStream> = {
                    headers: transformedHeaders,
                    statusCode: response.status
                };

                if (response.body) {
                    httpResponse.body = response.body;
                    return httpResponse;
                } else {
                    return response.arrayBuffer()
                        .then(buffer => {
                            httpResponse.body = buffer;
                            return httpResponse;
                        });
                }
            }),
        requestTimeout(requestTimeoutInMs),
    ];
    if (abortSignal) {
        raceOfPromises.push(
            new Promise<never>((resolve, reject) => {
                abortSignal.onabort = () => {
                    const abortError = new Error('Request aborted');
                    abortError.name = 'AbortError';
                    reject(abortError);
                };
            })
        );
    }
    return Promise.race(raceOfPromises);
}

