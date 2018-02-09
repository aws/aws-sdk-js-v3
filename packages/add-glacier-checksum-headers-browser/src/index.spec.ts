import {
    BuildHandler,
    BuildHandlerArguments,
    HttpRequest
} from '@aws/types';
import {Sha256} from '@aws/crypto-sha256-browser';
import {fromUtf8} from '@aws/util-utf8-browser';
import {addChecksumHeaders} from './index';

describe('addChecksumHeaders', () => {
    const minimalRequest: HttpRequest<any> = {
        method: 'POST',
        protocol: 'https:',
        path: '/',
        headers: {},
        hostname: 'foo.us-east-1.amazonaws.com',
    };

    const mockNextHandler = jasmine.createSpy('nextHandler', () => Promise.resolve());

    const composedHandler: BuildHandler<any, any, ReadableStream|Blob> = addChecksumHeaders(
        Sha256,
        fromUtf8,
    )(mockNextHandler);

    beforeEach(() => {
        mockNextHandler.calls.reset();
    });

    it('will not set content-sha256 headers if request body is empty', async () => {
        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {}
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBeUndefined();
        expect(request.headers['x-amz-sha-256-tree-hash']).toBeUndefined();
    });

    it('will set sha256 headers if request body is present', async () => {
        const body = new Uint8Array(5767168); // 5.5 MiB

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });

    it('will not set sha256 tree header if header is already present', async () => {
        const body = new Uint8Array(5767168); // 5.5 MiB

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {
                    'x-amz-sha256-tree-hash': 'foo'
                },
                body
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('foo');
    });

    it('will calculate sha256 hashes when request body is a string', async () => {
        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: 'bar'
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9');
    });

    it('will calculate sha256 hashes when request body is a stream', async () => {
        const mockStream = new (ReadableStream as any)({
            start(controller: any) {
                const totalSize = 5767168; // 5.5 MiB
                let readSize = 0;
                function generateData(size: number) {
                    setTimeout(() => {
                        const data = new Uint8Array(size);
                        controller.enqueue(data);

                        readSize += data.byteLength;

                        if (readSize < totalSize) {
                            generateData(
                                Math.min(1048576, totalSize - readSize)
                            );
                        } else {
                            controller.close();
                        }
                    }, 1);
                }
                generateData(1048576)
            }
        });

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: mockStream
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });

    it('will set a ReadableStream request body to a collected stream', async () => {
        const expectedRequestBody = new Uint8Array(5767168);

        const mockStream = new (ReadableStream as any)({
            start(controller: any) {
                const totalSize = 5767168; // 5.5 MiB
                let readSize = 0;
                function generateData(size: number) {
                    setTimeout(() => {
                        const data = new Uint8Array(size);
                        controller.enqueue(data);

                        readSize += data.byteLength;

                        if (readSize < totalSize) {
                            generateData(
                                Math.min(1048576, totalSize - readSize)
                            );
                        } else {
                            controller.close();
                        }
                    }, 1);
                }
                generateData(1048576)
            }
        });

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: mockStream
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.body).toEqual(expectedRequestBody);
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });

    it('will calculate sha256 hashes when request body is a blob', async () => {
        const data = new Uint8Array(5767168);
        const blob = new Blob([
            data
        ]);

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: blob
            }
        });

        expect(mockNextHandler.calls.count()).toBe(1);
        const {request} = mockNextHandler.calls.allArgs()[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });
});
