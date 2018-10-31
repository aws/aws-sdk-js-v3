import {
    BrowserHttpOptions,
    Handler,
    HeaderBag,
    HttpHandler,
    HttpHandlerOptions,
    HttpRequest,
    HttpResponse,
    QueryParameterBag
} from '@aws-sdk/types';

import {requestTimeout} from './request-timeout';
import {buildQueryString} from '@aws-sdk/querystring-builder';

declare var AbortController: any;

export class FetchHttpHandler implements HttpHandler<Blob, BrowserHttpOptions> {
    constructor(private readonly httpOptions: BrowserHttpOptions = {}) {}

    destroy(): void {
        // Do nothing. TLS and HTTP/2 connection pooling is handled by the
        // browser.
    }

    handle(
        request: HttpRequest<Blob>,
        options: HttpHandlerOptions
    ): Promise<HttpResponse<Blob>> {
        const abortSignal = options && options.abortSignal;
        const requestTimeoutInMs = this.httpOptions.requestTimeout;

        // if the request was already aborted, prevent doing extra work
        if (abortSignal && abortSignal.aborted) {
            const abortError = new Error('Request aborted');
            abortError.name = 'AbortError';
            return Promise.reject(abortError);
        }

        let path = request.path;
        if (request.query) {
            const queryString = buildQueryString(request.query);
            if (queryString) {
                path += `?${queryString}`;
            }
        }

        const port = request.port;
        const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ''}${path}`;
        const requestOptions: RequestInit = {
            body: request.body,
            headers: new Headers(request.headers),
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

                    return response.blob().then<HttpResponse<Blob>>(body => ({
                        headers: transformedHeaders,
                        statusCode: response.status,
                        body,
                    }));
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
}
