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
} from '@aws/types';
import {setConnectionTimeout} from './set-connection-timeout';
import {setSocketTimeout} from './set-socket-timeout';

export class NodeHttpHandler implements HttpHandler<Readable, NodeHttpOptions> {
    constructor(private readonly httpOptions: NodeHttpOptions = {}){}

    handle(
        request: HttpRequest<Readable>,
        options: HttpHandlerOptions
    ): Promise<HttpResponse<Readable>> {
        // determine which http(s) client to use
        const isSSL = request.protocol === 'https:';
        const httpClient = isSSL ? https : http;

        const nodeHttpsOptions: https.RequestOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path: request.path,
            port: request.port
        }

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
}