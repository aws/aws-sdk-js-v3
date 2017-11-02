import {
    createServer as createHttpServer,
    Server as HttpServer
} from 'http';
import {
    createServer as createHttpsServer,
    Server as HttpsServer
} from 'https';
import {readFileSync} from 'fs';
import {join} from 'path';
import {Readable} from 'stream';

import {HttpResponse} from '@aws/types';

function getOpenPort(candidatePort: number = 4321): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const server = createHttpServer();
        server.on('error', reject);
        server.listen(candidatePort);
        server.close(() => resolve(candidatePort));
    }).catch(() => getOpenPort(candidatePort + 1));
}

const fixturesDir = join(__dirname, '..', 'fixtures');

export const createMockHttpsServer = async (httpResp: HttpResponse<Readable>): Promise<HttpsServer> => {
    const server = createHttpsServer({
        key: readFileSync(join(fixturesDir, 'test-server-key.pem')),
        cert: readFileSync(join(fixturesDir, 'test-server-cert.pem'))
    }, (request, response) => {
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
    });
    const port = await getOpenPort();
    server.listen(port);
    return server;
}

export const createMockHttpServer = async (httpResp: HttpResponse<Readable>): Promise<HttpServer> => {
    const server = createHttpServer((request, response) => {
        response.statusCode = httpResp.statusCode;
        for (let name in Object.keys(httpResp.headers)) {
            let values = httpResp.headers[name];
            response.setHeader(name, values);
        }
        if (httpResp.body instanceof Readable) {
            httpResp.body.pipe(response);
        } else {
            response.end(httpResp.body);
        }
    });
    server.listen(await getOpenPort());
    return server;
}