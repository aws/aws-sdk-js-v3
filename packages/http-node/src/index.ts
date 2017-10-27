import {
    HeaderBag,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    Middleware
} from '@aws/types';
import * as https from 'https';
import * as http from 'http';
import {Readable} from 'stream';

import {setConnectionTimeout} from './set-connection-timeout';
import {setSocketTimeout} from './set-socket-timeout';


/**
 * Useful options:
 *  - Connection Timeout
 *  - Socket Timeout
 *  - keepAlive
 *  - maxSockets
 *  - custom agent for proxies/advanced configuration
 */

export const httpHandler: HttpHandler<Readable> = function httpHandler(
        request:HttpRequest<Readable>
    ): Promise<HttpResponse<Readable>> {

    const isSSL = request.protocol === 'https:';
    const httpsOptions: https.RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: request.path,
        port: request.port
    }

    const httpClient = isSSL ? https : http;
    
    return new Promise((resolve, reject) => {
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

        let connectionTimeout = 1000;
        setConnectionTimeout(req, reject, connectionTimeout);
        let socketTimeout = 500;
        setSocketTimeout(req, reject, socketTimeout);
        
        if (request.body instanceof Readable) {
            request.body.pipe(req);
            return;
        } else if (request.body) {
            req.write(request.body);
        }
        req.end();
    });
}