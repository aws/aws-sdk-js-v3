import { HttpHandler } from './';
import { Readable } from 'stream';
import { FetchHttpHandler } from '@aws/fetch-http-handler';
import { NodeHttpHandler } from '@aws/node-http-handler';
import { HttpHandlerOptions, HttpRequest } from '@aws/types';

describe('HttpHandler', () => {
    it('should proxy method calls to underlying implementation', async () => {
        const handler = new HttpHandler();
        const handlerMock = {
            handle: jest.fn(),
            destroy: jest.fn(),
        };
        const streamCollectorMock = jest.fn(() => new Uint8Array(0));
        (handler as any).handler = handlerMock;
        (handler as any).streamCollector = streamCollectorMock;

        const request: any = {};
        const options: HttpHandlerOptions = {};
        const responseBody = new Readable;

        handlerMock.handle.mockImplementationOnce(() => ({body: responseBody}));

        const response = await handler.handle(request, options);

        expect(response.body).toEqual(new Uint8Array(0));

        expect(handlerMock.handle.mock.calls.length).toBe(1);
        expect(handlerMock.handle.mock.calls[0]).toEqual([request, options]);
        expect(streamCollectorMock.mock.calls.length).toBe(1);
        expect(streamCollectorMock.mock.calls[0][0]).toBe(responseBody);

        handler.destroy();
        expect(handlerMock.destroy.mock.calls.length).toBe(1);
    })

    describe('environment detection', () => {
        beforeEach(() => {
            jest.resetModules()
        })

        afterAll(() => {
            jest.resetModules()
        })

        it(
            'should use the browser implementation when the http module is not defined',
            () => {
                jest.mock('http', () => {
                    throw new Error('http module is not defined')
                })

                const handler = new HttpHandler()
                expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler)
            }
        )

        it(
            'should use the browser implementation when the http module is an empty object',
            () => {
                jest.mock('http', () => ({}))

                const handler = new HttpHandler()
                expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler)
            }
        )

        it(
            'should use the browser implementation when the https module is not defined',
            () => {
                jest.mock('https', () => {
                    throw new Error('https module is not defined')
                })

                const handler = new HttpHandler()
                expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler)
            }
        )

        it(
            'should use the browser implementation when the http module is an empty object',
            () => {
                jest.mock('https', () => ({}))

                const handler = new HttpHandler()
                expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler)
            }
        )

        it(
            'should use the node implementation when the requisite node modules are defined',
            () => {
                jest.mock('http', () => ({request() {}}))
                jest.mock('https', () => ({request() {}}))

                const handler = new HttpHandler()
                expect((handler as any).handler).toBeInstanceOf(NodeHttpHandler)
            }
        )
    })
})
