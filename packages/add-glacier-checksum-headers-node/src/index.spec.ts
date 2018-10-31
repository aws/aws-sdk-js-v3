import {createReadStream, mkdtempSync, writeFileSync} from 'fs';
import {join} from 'path';
import {tmpdir} from 'os';
import { Readable } from 'stream';
import {
    BuildHandler,
    BuildHandlerArguments,
    HttpRequest
} from '@aws-sdk/types';
import {Sha256} from '@aws-sdk/crypto-sha256-js';
import {fromUtf8} from '@aws-sdk/util-utf8-node';
import {addChecksumHeaders} from './index';

function createTemporaryFile(contents: string|Buffer): string {
    const folder = mkdtempSync(
        join(tmpdir(), 'add-glacier-checksum-headers-node-')
    );
    const fileLoc = join(folder, 'test.txt');
    writeFileSync(fileLoc, contents);

    return fileLoc;
}

describe('addChecksumHeaders', () => {
    const minimalRequest: HttpRequest<any> = {
        method: 'POST',
        protocol: 'https:',
        path: '/',
        headers: {},
        hostname: 'foo.us-east-1.amazonaws.com',
    };

    const mockNextHandler = jest.fn(() => Promise.resolve());

    const composedHandler: BuildHandler<any, any, Readable> = addChecksumHeaders(
        Sha256,
        fromUtf8,
    )(mockNextHandler);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('will not set content-sha256 headers if request body is empty', async () => {
        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {}
            }
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['x-amz-content-sha256']).toBeUndefined();
        expect(request.headers['x-amz-sha-256-tree-hash']).toBeUndefined();
    });

    it('will set sha256 headers if request body is present', async () => {
        const body = new Uint8Array(5767168); // 5.5 MiB
        body.fill(0);

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body
            }
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });

    it('will not set sha256 tree header if header is already present', async () => {
        const body = new Uint8Array(5767168); // 5.5 MiB
        body.fill(0);

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

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
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

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9');
    });

    it('will calculate sha256 hashes when request body is a file stream', async () => {
        const temporaryFile = createTemporaryFile(
            Buffer.alloc(5767168, 0)
        );

        await composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: createReadStream(temporaryFile)
            }
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['x-amz-content-sha256']).toBe('733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60');
        expect(request.headers['x-amz-sha256-tree-hash']).toBe('a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455');
    });

    it('will reject when request body is a non-file stream', async () => {
        const temporaryFile = createTemporaryFile(
            Buffer.alloc(5767168, 0)
        );

        await expect(composedHandler({
            input: {},
            request: {
                ...minimalRequest,
                headers: {},
                body: new Readable()
            }
        })).rejects.toHaveProperty('message', 'Unable to calculate checksums for non-file streams.');
    });
});
