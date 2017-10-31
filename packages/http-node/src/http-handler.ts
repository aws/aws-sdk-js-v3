import * as https from 'https';
import * as http from 'http';
import {Readable} from 'stream';
import {AbortSignal} from '@aws/abort-controller';
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

export const httpHandler: HttpHandler<Readable> = function httpHandler(
    request: HttpRequest<Readable>,
    options: HttpHandlerOptions<NodeHttpOptions>
): Promise<HttpResponse<Readable>> {
    // determine which http(s) client to use
    const isSSL = request.protocol === 'https:';
    const httpClient = isSSL ? https : http;

    const httpsOptions: https.RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: request.path,
        port: request.port
    }

    return new Promise((resolve, reject) => {
        const abortSignal = options && options.abortSignal;
        if (options && options.httpOptions) {
            var {
                connectionTimeout,
                socketTimeout
            } = options.httpOptions;
        }

        // if the request was already aborted, prevent doing extra work
        if (abortSignal && abortSignal.aborted) {
            const abortError = new Error('Request aborted');
            abortError.name = 'AbortError';
            reject(abortError);
            return;
        }

        // create the http request
        const req = (httpClient as typeof http).request(httpsOptions, (res) => {
            const httpHeaders = res.headers;
            const transformedHeaders: HeaderBag = {};

            for (let name of Object.keys(httpHeaders)) {
                let headerValues = httpHeaders[name];
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
            request.body.pipe(req);
            // pipe automatically handles end
            return;
        } else if (request.body) {
            req.write(request.body);
        }
        req.end();
    });
}