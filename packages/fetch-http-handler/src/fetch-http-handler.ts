import {
    BrowserHttpOptions,
    Handler,
    HeaderBag,
    HttpHandler,
    HttpHandlerOptions,
    HttpRequest,
    HttpResponse,
    QueryParameterBag
} from '@aws/types';

import {requestTimeout} from './request-timeout';
import {escapeUri} from '@aws/util-uri-escape';

declare var AbortController: any;

export class FetchHttpHandler implements HttpHandler<ReadableStream, BrowserHttpOptions> {
    constructor(private readonly httpOptions: BrowserHttpOptions = {}) {}

    destroy(): void {
        // Do nothing. TLS and HTTP/2 connection pooling is handled by the
        // browser.
    }

    handle(
        request: HttpRequest<ReadableStream>,
        options: HttpHandlerOptions
    ): Promise<HttpResponse<ReadableStream>> {
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
            const queryString = this.generateQueryString(request.query);
            if (queryString) {
                path += `?${queryString}`;
            }
        }

        const port = request.port;
        const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ''}${path}`;
        const requestOptions: RequestInit = {
            // FIXME
            // The type of RequestInit.body no longer accepts streams as of
            // TypeScript 2.7. This differs from the current Fetch spec ( https://fetch.spec.whatwg.org/#bodyinit )
            body: request.body as any,
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
                                httpResponse.body = new Uint8Array(buffer);
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

    private generateQueryString(query: QueryParameterBag): string {
        const parts: string[] = [];
        for (let key of Object.keys(query).sort()) {
            const value = query[key];
            key = escapeUri(key);
            if (Array.isArray(value)) {
                for (let i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(`${key}=${escapeUri(value[i])}`);
                }
            } else {
                let qsEntry = key;
                if (value) {
                    qsEntry += `=${escapeUri(value)}`;
                }
                parts.push(qsEntry);
            }
        }

        return parts.join('&');
    }
}
