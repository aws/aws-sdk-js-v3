import {Sha256} from './ie11Sha256';
import {MsWindow} from '@aws-sdk/crypto-ie11-detection';
import {SHA_256_HMAC_ALGO} from "./constants";
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
    const hash = {
        process: jest.fn(),
        finish: jest.fn(),
    };
    const hmac = {
        process: jest.fn(),
        finish: jest.fn(),
    };

    (locateWindow() as any).msCrypto = {
        subtle: {
            digest: jest.fn(() => hash),
            importKey: jest.fn(),
            sign: jest.fn(() => hmac)
        },
    };

    (fromUtf8 as any).mockClear();
});

describe('Sha256', () => {
    it('should create a hash object by default', () => {
        const sha256 = new Sha256();

        const {calls} = (window as any).msCrypto.subtle.digest.mock;
        expect(calls.length).toBe(1);
        expect(calls[0]).toEqual(['SHA-256']);
    });

    it(
        'should immediately import a secret as a SubtleCrypto key when supplied',
        async () => {
            const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
            const {importKey} = (window as MsWindow).msCrypto.subtle;

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

    it(
        'should import ArrayBuffer secrets',
        async () => {
            const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
            const {importKey} = (window as MsWindow).msCrypto.subtle;

            const sha256 = new Sha256(secret.buffer);
            await flushPromises();

            expect((importKey as any).mock.calls.length).toBe(1);
            const [_, key] = (importKey as any).mock.calls[0];

            expect(key).toMatchObject(secret);
        }
    );

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
        const keyOperation = {} as any;
        const {importKey} = (window as MsWindow).msCrypto.subtle;
        (importKey as any).mockReturnValue(keyOperation);

        const sha256 = new Sha256(secret);
        await flushPromises();

        expect((importKey as any).mock.calls.length).toBe(1);
        keyOperation.onerror();

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it(
        'should trap errors where the key neither imports nor invokes an error handler',
        async () => {
            const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]).buffer;
            const keyOperation = {} as any;
            const {importKey} = (window as MsWindow).msCrypto.subtle;
            (importKey as any).mockReturnValue(keyOperation);

            const sha256 = new Sha256(secret);
            await flushPromises();

            expect((importKey as any).mock.calls.length).toBe(1);
            keyOperation.oncomplete();

            await sha256.digest().then(
                () => { throw new Error('The promise should have been rejected.'); },
                () => { /* Promise rejected, just as expected */ }
            );
        }
    );

    it('should not create a signing operation until the key has been imported', async () => {
        const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
        const keyOperation = {} as any;
        const {
            importKey,
            sign
        } = (window as MsWindow).msCrypto.subtle;
        (importKey as any).mockReturnValue(keyOperation);

        const sha256 = new Sha256(secret);
        await flushPromises();

        expect((importKey as any).mock.calls.length).toBe(1);
        expect((sign as any).mock.calls.length).toBe(0);

        keyOperation.result = 'KEY';
        keyOperation.oncomplete();
        await flushPromises();

        expect((sign as any).mock.calls.length).toBe(1);
        const [_, key] = (sign as any).mock.calls[0];

        expect(key).toBe('KEY');
    });

    it('should not process any data until the key has been imported', async () => {
        const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
        const keyOperation = {} as any;
        const {
            importKey,
            sign
        } = (window as MsWindow).msCrypto.subtle;
        (importKey as any).mockReturnValue(keyOperation);

        const sha256 = new Sha256(secret);
        await flushPromises();

        expect((importKey as any).mock.calls.length).toBe(1);
        expect((sign as any).mock.calls.length).toBe(0);

        sha256.update(secret);

        expect((sign as any).mock.calls.length).toBe(0);
        keyOperation.result = 'KEY';
        keyOperation.oncomplete();
        const hmac = (sign as any)();
        expect(hmac.process.mock.calls.length).toBe(0);

        await flushPromises();

        expect(hmac.process.mock.calls.length).toBe(1);
    });

    it('should not call process if empty data is received', async () => {
        const sha256 = new Sha256();

        const {digest} = (window as any).msCrypto.subtle;
        const operation = digest();

        await flushPromises();
        expect(operation.process.mock.calls.length).toBe(0);

        sha256.update(new ArrayBuffer(0));
        await flushPromises();
        expect(operation.process.mock.calls.length).toBe(0);
    });

    it('should trap processing errors', async () => {
        const sha256 = new Sha256();

        const {digest} = (window as any).msCrypto.subtle;
        const operation = digest();

        sha256.update(new ArrayBuffer(4));
        await flushPromises();
        operation.onerror();

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should trap finalization errors', async () => {
        const sha256 = new Sha256();

        const {digest} = (window as any).msCrypto.subtle;
        const operation = digest();

        sha256.update(new ArrayBuffer(4));
        const promise = sha256.digest();
        await flushPromises();
        operation.onerror();

        await promise.then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should trap errors when no result is available nor any error handler invoked', async () => {
        const sha256 = new Sha256();

        const {digest} = (window as any).msCrypto.subtle;
        const operation = digest();

        sha256.update(new ArrayBuffer(4));
        const promise = sha256.digest();
        await flushPromises();
        operation.oncomplete();

        await promise.then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should resolve the promise with the value returned by WebCrypto', async () => {
        const sha256 = new Sha256();

        const {digest} = (window as any).msCrypto.subtle;
        const operation = digest();

        sha256.update(new ArrayBuffer(4));
        const promise = sha256.digest();
        await flushPromises();
        operation.result = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]).buffer;
        operation.oncomplete();

        expect(await promise).toMatchObject(operation.result);
    });
});
