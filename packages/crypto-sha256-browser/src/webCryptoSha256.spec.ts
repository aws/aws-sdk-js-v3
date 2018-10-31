import {Sha256} from './webCryptoSha256';
import {EMPTY_DATA_SHA_256, SHA_256_HASH, SHA_256_HMAC_ALGO} from "./constants";
import {flushPromises} from './testUtils.fixture';

jest.mock('@aws-sdk/util-utf8-browser', () => {
    return {
        fromUtf8: jest.fn(() => new Uint8Array(0)),
        toUtf8: jest.fn(() => ''),
    };
});
import {fromUtf8} from '@aws-sdk/util-utf8-browser';
import {locateWindow} from "@aws-sdk/util-locate-window";

beforeEach(() => {
    (locateWindow() as any).crypto = {
        subtle: {
            digest: jest.fn(() => Promise.resolve(new ArrayBuffer(32))),
            importKey: jest.fn(),
            sign: jest.fn(() => Promise.resolve(new ArrayBuffer(32)))
        },
    };

    (fromUtf8 as any).mockClear();
});

describe('Sha256', () => {
    it('should create a hash object by default', async () => {
        const sha256 = new Sha256();
        sha256.update(new ArrayBuffer(1));
        await sha256.digest();

        const {calls} = (window.crypto.subtle.digest as any).mock;
        expect(calls.length).toBe(1);
        const [method, data] = calls[0];
        expect(method).toEqual(SHA_256_HASH);
        expect(data).toEqual(new Uint8Array(1));
    });

    it(
        'should immediately import a secret as a SubtleCrypto key when supplied',
        async () => {
            const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
            const {importKey} = window.crypto.subtle;

            const sha256 = new Sha256(secret);
            await flushPromises();

            expect((importKey as any).mock.calls.length).toBe(1);
            const [
                type,
                key,
                algorithm,
                exportable,
                permittedUses,
            ] = (importKey as any).mock.calls[0];

            expect(type).toBe('raw');
            expect(key).toEqual(secret);
            expect(algorithm).toEqual(SHA_256_HMAC_ALGO);
            expect(exportable).toBe(false);
            expect(permittedUses).toEqual(['sign']);
        }
    );

    it('should import ArrayBufferView secrets', async () => {
        const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
        const {importKey} = window.crypto.subtle;

        const sha256 = new Sha256(secret);
        await flushPromises();

        expect((importKey as any).mock.calls.length).toBe(1);
        const [_, key] = (importKey as any).mock.calls[0];

        expect(key).toMatchObject(secret);
    });

    it('should convert empty string secrets to empty ArrayBuffers', async () => {
        const {importKey} = window.crypto.subtle;

        const sha256 = new Sha256('');
        await flushPromises();

        const [_, key] = (importKey as any).mock.calls[0];

        expect(key).toMatchObject(new ArrayBuffer(0));
    });

    it('should import string secrets via the browser UTF-8 decoder', async () => {
        const sha256 = new Sha256('secret');
        await flushPromises();

        expect((fromUtf8 as any).mock.calls.length).toBe(1);
    });

    it('should trap UTF-8 errors', async () => {
        const sha256 = new Sha256('secret');
        await flushPromises();

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should trap key import errors', async () => {
        const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
        const {importKey} = window.crypto.subtle;
        (importKey as any).mockReturnValue(Promise.reject('No can do, sir.'));

        const sha256 = new Sha256(secret);
        await flushPromises();

        expect((importKey as any).mock.calls.length).toBe(1);

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should not call process if empty data is received', async () => {
        const sha256 = new Sha256();

        const {digest} = window.crypto.subtle;

        await flushPromises();
        expect((digest as any).mock.calls.length).toBe(0);

        sha256.update(new ArrayBuffer(0));
        await flushPromises();
        expect((digest as any).mock.calls.length).toBe(0);
    });

    it('should trap processing errors for vanilla hashes', async () => {
        const sha256 = new Sha256();

        const {digest} = window.crypto.subtle;
        (digest as any).mockReturnValue(Promise.reject('failure, failure'));

        sha256.update(new ArrayBuffer(4));
        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should trap processing errors for hmacs', async () => {
        const {importKey, sign} = window.crypto.subtle;
        (importKey as any).mockReturnValue(
            Promise.resolve(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
        );
        (sign as any).mockReturnValue(Promise.reject('failure, failure'));

        const sha256 = new Sha256(new ArrayBuffer(1));

        sha256.update(new ArrayBuffer(4));
        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it(
        'should resolve the promise with the value returned by WebCrypto for vanilla hashes',
        async () => {
            const sha256 = new Sha256();

            const {digest} = window.crypto.subtle;
            (digest as any).mockReturnValue(
                Promise.resolve(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
            );

            sha256.update(new ArrayBuffer(4));

            expect(await sha256.digest())
                .toEqual(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]));
        }
    );

    it(
        'should resolve the promise with the value returned by WebCrypto for hmacs',
        async () => {
            const {importKey, sign} = window.crypto.subtle;
            (importKey as any).mockReturnValue(
                Promise.resolve(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
            );
            (sign as any).mockReturnValue(
                Promise.resolve(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
            );

            const sha256 = new Sha256(new ArrayBuffer(1));

            sha256.update(new ArrayBuffer(4));

            expect(await sha256.digest())
                .toEqual(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]));
        }
    );

    it('should skip calling WebCrypto if no data was supplied', async () => {
        const sha256 = new Sha256();

        const {digest} = window.crypto.subtle;
        (digest as any).mockImplementation(() => { throw new Error('PANIC'); });

        sha256.update(new ArrayBuffer(0));

        expect(await sha256.digest()).toEqual(EMPTY_DATA_SHA_256);
    });
});
