import {
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@aws/types';
import * as https from 'https';
import {Readable} from 'stream';


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
    /**
     * What does today's implementation do in Node.js?
     *  - checks if a proxy is being used
     *  - checks if https or http should be used
     *  - determine whether to use a custom agent
     *  - makes the request
     *  - hooks up connection timeout code
     * 
     */

    const isSSL = request.protocol === 'https:';
    const httpsOptions: https.RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: request.path,
        port: request.port
    }

    return new Promise((resolve, reject) => {
        const req = https.request(httpsOptions, (res) => {
            
            const httpResponse: HttpResponse<Readable> = {
                statusCode: res.statusCode || -1,
                headers: res.headers,
                body: res
            };
            resolve(httpResponse);
        });
        req.on('error', reject);
        if (request.body instanceof Readable) {
            request.body.pipe(req);
            return;
        } else if (request.body) {
            req.write(request.body);
        }
        req.end();
    });
 }

