import {FetchHttpHandler} from './fetch-http-handler';
import {AbortController} from '@aws-sdk/abort-controller';
import * as timeouts from './request-timeout';

const mockRequest = jest.fn();
let mockResponse: any;
let timeoutSpy: jest.SpyInstance<any>;

(global as any).Request = mockRequest;
(global as any).Headers = jest.fn();

describe('httpHandler', () => {
    beforeEach(() => {
        (global as any).AbortController = void 0;
        jest.clearAllMocks();
        mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            arrayBuffer: jest.fn(() => Promise.resolve())
        }
    });

    afterEach(() => {
        jest.clearAllTimers();
        if (timeoutSpy) {
            timeoutSpy.mockRestore();
        }
    });

    it('makes requests using fetch', async () => {
        const mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            blob: jest.fn(() => Promise.resolve())
        }
        const mockFetch = jest.fn(() => {
            return Promise.resolve(mockResponse);
        });

        (global as any).fetch = mockFetch;
        const fetchHttpHandler = new FetchHttpHandler();

        let response = await fetchHttpHandler.handle({} as any, {});

        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockResponse.blob.mock.calls.length).toBe(1);
    });

    it('properly constructs url', async () => {
        let mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            blob: jest.fn(() => Promise.resolve())
        }
        const mockFetch = jest.fn(() => {
            return Promise.resolve(mockResponse);
        });

        (global as any).fetch = mockFetch;

        let httpRequest = {
            headers: {},
            hostname: 'foo.amazonaws.com',
            method: 'GET',
            path: '/test/?bar=baz',
            protocol: 'https:',
            port: 443,
        };
        const fetchHttpHandler = new FetchHttpHandler();

        let response = await fetchHttpHandler.handle(httpRequest, {});

        expect(mockFetch.mock.calls.length).toBe(1);
        let requestCall = mockRequest.mock.calls[0];
        expect(requestCall[0]).toBe(
            'https://foo.amazonaws.com:443/test/?bar=baz'
        );
    });

    it('will not make request if already aborted', async () => {
        let mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            blob: jest.fn(() => Promise.resolve()),
            body: 'test'
        };
        const mockFetch = jest.fn(() => {
            return Promise.resolve(mockResponse);
        });

        (global as any).fetch = mockFetch;
        const fetchHttpHandler = new FetchHttpHandler();

        await expect(fetchHttpHandler.handle({} as any, {
            abortSignal: {
                aborted: true
            }
        })).rejects.toHaveProperty('name', 'AbortError');

        expect(mockFetch.mock.calls.length).toBe(0);
    });

    it('will pass abortSignal to fetch if supported', async () => {
        let mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            blob: jest.fn(() => Promise.resolve()),
            body: 'test'
        };
        const mockFetch = jest.fn(() => {
            return Promise.resolve(mockResponse);
        });
        (global as any).fetch = mockFetch;
        (global as any).AbortController = jest.fn();
        const fetchHttpHandler = new FetchHttpHandler();

        let response = await fetchHttpHandler.handle({} as any, {
            abortSignal: {
                aborted: false
            }
        });

        expect(mockRequest.mock.calls[0][1]).toHaveProperty('signal');
        expect(mockFetch.mock.calls.length).toBe(1);
    });

    it('will pass timeout to request timeout', async () => {
        let mockResponse = {
            headers: {
                entries: jest.fn(() => {
                    return [
                        ['foo', 'bar'],
                        ['bizz', 'bazz']
                    ];
                })
            },
            blob: jest.fn(() => Promise.resolve()),
            body: 'test'
        };
        const mockFetch = jest.fn(() => {
            return Promise.resolve(mockResponse);
        });
        (global as any).fetch = mockFetch;

        timeoutSpy = jest.spyOn(timeouts, 'requestTimeout');
        const fetchHttpHandler = new FetchHttpHandler({
            requestTimeout: 500
        });

        let response = await fetchHttpHandler.handle({} as any, {});

        expect(mockFetch.mock.calls.length).toBe(1);
        expect(timeoutSpy.mock.calls[0][0]).toBe(500);
    });

    it('will throw timeout error it timeout finishes before request', async () => {
        const mockFetch = jest.fn(() => {
            return new Promise((resolve, reject) => {});
        });
        (global as any).fetch = mockFetch;
        const fetchHttpHandler = new FetchHttpHandler({
            requestTimeout: 5
        });

        await expect(fetchHttpHandler.handle(
            {} as any,
            {})
        ).rejects.toHaveProperty('name', 'TimeoutError');
        expect(mockFetch.mock.calls.length).toBe(1);
    });

    it('can be aborted before fetch completes', async () => {
        const abortController = new AbortController();

        const mockFetch = jest.fn(() => {
            return new Promise((resolve, reject) => {});
        });
        (global as any).fetch = mockFetch;

        setTimeout(() => {
            abortController.abort();
        }, 100)
        const fetchHttpHandler = new FetchHttpHandler();

        await expect(fetchHttpHandler.handle({} as any, {
            abortSignal: abortController.signal
        })).rejects.toHaveProperty('name', 'AbortError');

        // ensure that fetch's built-in mechanism isn't being used
        expect(mockRequest.mock.calls[0][1]).not.toHaveProperty('signal');
    });

    describe('#destroy', () => {
        it('should be callable and return nothing', () => {
            const httpHandler = new FetchHttpHandler();
            expect(httpHandler.destroy()).toBeUndefined();
        });
    });
});
