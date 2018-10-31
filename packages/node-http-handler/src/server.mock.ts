import {
    createServer as createHttpServer,
    Server as HttpServer,
    IncomingMessage,
    ServerResponse
} from 'http';
import {
    createServer as createHttpsServer,
    Server as HttpsServer
} from 'https';
import {readFileSync} from 'fs';
import {join} from 'path';
import {Readable} from 'stream';

import {HttpResponse} from '@aws-sdk/types';

const fixturesDir = join(__dirname, '..', 'fixtures');

export function createResponseFunction(httpResp: HttpResponse<Readable>) {
    return function (request: IncomingMessage, response: ServerResponse) {
        response.statusCode = httpResp.statusCode;
        for (let name of Object.keys(httpResp.headers)) {
            let values = httpResp.headers[name];
            response.setHeader(name, values);
        }
        if (httpResp.body instanceof Readable) {
            httpResp.body.pipe(response);
        } else {
            response.end(httpResp.body);
        }
    };
}

export function createContinueResponseFunction(httpResp: HttpResponse<Readable>) {
    return function (request: IncomingMessage, response: ServerResponse) {
        response.writeContinue();
        setTimeout(() => {
            createResponseFunction(httpResp)(request, response);
        }, 100);
    }
}

export function createMockHttpsServer(): HttpsServer {
    const server = createHttpsServer({
        key: readFileSync(join(fixturesDir, 'test-server-key.pem')),
        cert: readFileSync(join(fixturesDir, 'test-server-cert.pem'))
    });
    return server;
}

export function createMockHttpServer(): HttpServer {
    const server = createHttpServer();
    return server;
}