import {Server as HttpServer} from 'http';
import {Server as HttpsServer} from 'https';
import * as https from 'https';
import {httpHandler} from './index';
import {ReadFromBuffers} from './readable.mock';
import {
    createMockHttpServer,
    createMockHttpsServer
} from './server.mock';

const rejectUnauthorizedEnv = process.env.NODE_TLS_REJECT_UNAUTHORIZED;

beforeEach(() => {
    // Setting the NODE_TLS_REJECT_UNAUTHORIZED will allow the unconfigurable
    // HTTPS client in getCertificate to skip cert validation, which the
    // self-signed cert used for this test's server would fail. The variable
    // will be reset to its original value at the end of the test.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
});

afterEach(() => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = rejectUnauthorizedEnv;
});

describe('httpHandler', () => {
    let mockServer: HttpServer|HttpsServer;
    
    afterEach(() => {
        if (mockServer) {
            mockServer.close();
        }
    });

    it('can send https requests', async () => {
        const mockResponse = {
            statusCode: 200,
            headers: {},
            body: 'test'
        };
        mockServer = await createMockHttpsServer(mockResponse);

        let response = await httpHandler({
            hostname: mockServer.address().address,
            method: 'GET',
            port: mockServer.address().port,
            protocol: 'https:',
            path: '/',
            headers: {}
        });

        expect(response.statusCode).toEqual(mockResponse.statusCode);
        expect(response.headers).toBeDefined();
        expect(response.headers).toMatchObject(mockResponse.headers);
        expect(response.body).toBeDefined();
    });

    it('can send http requests', async () => {
        const mockResponse = {
            statusCode: 200,
            headers: {},
            body: 'test'
        };
        mockServer = await createMockHttpServer(mockResponse);

        let response = await httpHandler({
            hostname: mockServer.address().address,
            method: 'GET',
            port: mockServer.address().port,
            protocol: 'http:',
            path: '/',
            headers: {}
        });

        expect(response.statusCode).toEqual(mockResponse.statusCode);
        expect(response.headers).toBeDefined();
        expect(response.headers).toMatchObject(mockResponse.headers);
        expect(response.body).toBeDefined();
    });

    it('can send requests with bodies', async () => {
        const body = Buffer.from('test');
        const mockResponse = {
            statusCode: 200,
            headers: {}
        };
        mockServer = await createMockHttpsServer(mockResponse);
        let httpRequest;
        const spy = jest.spyOn(https, 'request').mockImplementationOnce(() => {
            let calls = spy.mock.calls;
            let currentIndex = calls.length - 1;
            httpRequest = https.request(calls[currentIndex][0], calls[currentIndex][1]);
            return httpRequest;
        });
        let response = await httpHandler({
            hostname: mockServer.address().address,
            method: 'PUT',
            port: mockServer.address().port,
            protocol: 'https:',
            path: '/',
            headers: {},
            body
        });

        expect(response.statusCode).toEqual(mockResponse.statusCode);
        expect(response.headers).toBeDefined();
        expect(response.headers).toMatchObject(mockResponse.headers);
        
    });

    it('can send requests with streaming bodies', async () => {
        const body = new ReadFromBuffers({
            buffers: [
                Buffer.from('t'),
                Buffer.from('e'),
                Buffer.from('s'),
                Buffer.from('t'),
            ]
        });
        let inputBodySpy = jest.spyOn(body, 'pipe');
        const mockResponse = {
            statusCode: 200,
            headers: {}
        };
        mockServer = await createMockHttpsServer(mockResponse);

        let response = await httpHandler({
            hostname: mockServer.address().address,
            method: 'PUT',
            port: mockServer.address().port,
            protocol: 'https:',
            path: '/',
            headers: {},
            body
        });

        expect(response.statusCode).toEqual(mockResponse.statusCode);
        expect(response.headers).toBeDefined();
        expect(response.headers).toMatchObject(mockResponse.headers);
        expect(inputBodySpy.mock.calls.length).toBeTruthy();
    });

    it('rejects if the request encounters an error', async () => {
        const mockResponse = {
            statusCode: 200,
            headers: {},
            body: 'test'
        };
        mockServer = await createMockHttpsServer(mockResponse);

        await expect(httpHandler({
            hostname: mockServer.address().address,
            method: 'GET',
            port: mockServer.address().port,
            protocol: 'fake:', // trigger a request error
            path: '/',
            headers: {}
        })).rejects.toHaveProperty('message');
    });
});