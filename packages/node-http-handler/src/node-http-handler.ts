import * as https from 'https';
import * as http from 'http';
import {Readable} from 'stream';
import {
    Handler,
    HeaderBag,
    HttpHandler,
    HttpHandlerOptions,
    HttpRequest,
    HttpResponse,
    NodeHttpOptions,
    QueryParameterBag
} from '@aws/types';
import {setConnectionTimeout} from './set-connection-timeout';
import {setSocketTimeout} from './set-socket-timeout';
import {escapeUri} from '@aws/util-uri-escape';

export class NodeHttpHandler implements HttpHandler<Readable, NodeHttpOptions> {
    constructor(private readonly httpOptions: NodeHttpOptions = {}) {}

    destroy(): void {
        // pass for now, but this may destroy the underlying agent in the future
        // if we decide to enable keep-alive by default.
    }

    handle(
        request: HttpRequest<Readable>,
        options: HttpHandlerOptions
    ): Promise<HttpResponse<Readable>> {
        // determine which http(s) client to use
        const isSSL = request.protocol === 'https:';
        const httpClient = isSSL ? https : http;

        let path = request.path;
        if (request.query) {
            const queryString = this.generateQueryString(request.query);
            if (queryString) {
                path += `?${queryString}`;
            }
        }

        const nodeHttpsOptions: https.RequestOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path: path,
            port: request.port
        };

        return new Promise((resolve, reject) => {
            const abortSignal = options && options.abortSignal;
            const {
                connectionTimeout,
                socketTimeout
            } = this.httpOptions;

            // if the request was already aborted, prevent doing extra work
            if (abortSignal && abortSignal.aborted) {
                const abortError = new Error('Request aborted');
                abortError.name = 'AbortError';
                reject(abortError);
                return;
            }

            // create the http request
            const req = (httpClient as typeof http).request(nodeHttpsOptions, (res) => {
                const httpHeaders = res.headers;
                const transformedHeaders: HeaderBag = {};

                for (let name of Object.keys(httpHeaders)) {
                    let headerValues = <string>httpHeaders[name];
                    transformedHeaders[name] =
                        Array.isArray(headerValues) ? headerValues.join(',') : headerValues;
                }

                const httpResponse: HttpResponse<Readable> = {
                    statusCode: res.statusCode || -1,
                    headers: transformedHeaders,
                    body: res
                };
                resolve(httpResponse);
            });

            req.on('error', reject);

            // wire-up any timeout logic
            setConnectionTimeout(req, reject, connectionTimeout);
            setSocketTimeout(req, reject, socketTimeout);

            // wire-up abort logic
            if (abortSignal) {
                abortSignal.onabort = () => {
                    // ensure request is destroyed
                    req.abort();
                    const abortError = new Error('Request aborted');
                    abortError.name = 'AbortError';
                    reject(abortError);
                };
            }

            if (request.body instanceof Readable) {
                // pipe automatically handles end
                request.body.pipe(req);
            } else if (request.body) {
                req.end(request.body);
            } else {
                req.end();
            }
        });
    }

    private generateQueryString(query: QueryParameterBag): string {
        let parts: string[] = [];
        for (let key of Object.keys(query).sort()) {
            let value = query[key];
            if (Array.isArray(value)) {
                for (let i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(`${escapeUri(key)}=${escapeUri(value[i])}`);
                }
            } else {
                let qsEntry = escapeUri(key);
                if (value) {
                    qsEntry += `=${escapeUri(value)}`;
                }
                parts.push(qsEntry);
            }
        }

        return parts.join('&');
    }
}
