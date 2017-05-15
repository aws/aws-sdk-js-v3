import {Sha256} from '../lib/webCryptoSha256';
import {SHA_256_HASH, SHA_256_HMAC_ALGO} from "../lib/constants";
import {flushPromises} from '../__fixtures__';

beforeEach(() => {
    (window as any).crypto = {
        subtle: {
            digest: jest.fn(() => Promise.resolve(new ArrayBuffer(32))),
            importKey: jest.fn(),
            sign: jest.fn(() => Promise.resolve(new ArrayBuffer(32)))
        },
    };

    const blobInstance = jest.fn();
    const fileReaderInstance = jest.fn() as any;
    fileReaderInstance.readAsArrayBuffer = jest.fn();
    const textEncoderInstance = {
        encode: jest.fn(),
    };
    Blob = jest.fn(() => blobInstance) as any;
    FileReader = jest.fn(() => fileReaderInstance) as any;
    (global as any).TextEncoder = jest.fn(() => textEncoderInstance) as any;
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
        expect(data).toEqual(new ArrayBuffer(1));
    });

    it(
        'should immediately import a secret as a SubtleCrypto key when supplied',
        async () => {
            const secret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]).buffer;
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
            expect(key).toBe(secret);
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

        expect(key).toMatchObject(secret.buffer);
    });

    it('should convert empty string secrets to empty ArrayBuffers', async () => {
        const {importKey} = window.crypto.subtle;

        const sha256 = new Sha256('');
        await flushPromises();

        const [_, key] = (importKey as any).mock.calls[0];

        expect(key).toMatchObject(new ArrayBuffer(0));
    });

    it('should import strings via the TextEncoder API', async () => {
        const {importKey} = window.crypto.subtle;

        const parsedSecret = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
        const encoderInstance = new TextEncoder();
        (TextEncoder as any).mockClear();
        (encoderInstance.encode as any).mockReturnValue(parsedSecret);

        const sha256 = new Sha256('secret');
        await flushPromises();

        expect((TextEncoder as any).mock.calls.length).toBe(1);
        expect((encoderInstance.encode as any).mock.calls.length).toBe(1);

        await flushPromises();

        const [_, key] = (importKey as any).mock.calls[0];

        expect(key).toBe(parsedSecret.buffer);
    });

    it('should pass encoding along to the TextEncoder constructor', async () => {
        const encoderInstance = new TextEncoder();
        (TextEncoder as any).mockClear();
        (encoderInstance.encode as any).mockReturnValue(new Uint8Array(0));

        const sha256 = new Sha256();
        sha256.update('foo', 'ascii');
        await sha256.digest();

        const {mock} = TextEncoder as any;
        expect(mock.calls.length).toBe(1);
        expect(mock.calls[0]).toEqual(['ascii']);
    });

    it('should import strings via the FileReader API if TextEncoder is not available', async () => {
        delete (global as any).TextEncoder;

        const {importKey} = window.crypto.subtle;

        const sha256 = new Sha256('secret');
        await flushPromises();

        expect((FileReader as any).mock.calls.length).toBe(1);
        expect((Blob as any).mock.calls.length).toBe(1);

        const reader = (FileReader as any)();
        expect(reader.readAsArrayBuffer.mock.calls.length).toBe(1);

        reader.result = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]).buffer;
        reader.onload();

        await flushPromises();

        const [_, key] = (importKey as any).mock.calls[0];

        expect(key).toMatchObject(reader.result);
    });

    it('should trap FileReader errors', async () => {
        delete (global as any).TextEncoder;

        const sha256 = new Sha256('secret');
        await flushPromises();

        expect((FileReader as any).mock.calls.length).toBe(1);
        expect((Blob as any).mock.calls.length).toBe(1);

        const reader = (FileReader as any)();
        expect(reader.readAsArrayBuffer.mock.calls.length).toBe(1);

        reader.onerror();

        await flushPromises();

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should trap key import errors', async () => {
        delete (global as any).TextEncoder;
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

    it('should process data in the order in which it was received', async () => {
        // Fake timers and disable the TextEncoder API to force strings to be
        // parsed with asynchronous FileReader objects
        jest.useFakeTimers();
        delete (global as any).TextEncoder;

        // Overwrite the global FileReader constructor so that readers are
        // captured as they are created
        const readers: Array<FileReader> = [];
        FileReader = (() => {
            const reader = {readAsArrayBuffer: jest.fn()};
            readers.push(reader as any);
            return reader;
        }) as any;

        const {digest} = window.crypto.subtle;
        (digest as any).mockReturnValue(Promise.resolve(new ArrayBuffer(32)));
        const sha256 = new Sha256();
        const expectedHash = Uint8Array.from([0xde, 0xad, 0xbe, 0xef, 0xfa, 0xce]);

        // Force the creation of three FileReaders and flush synchronous
        // promises
        sha256.update('dead');
        sha256.update('beef');
        sha256.update('face');

        await flushPromises();
        expect(readers.length).toBe(3);

        // Set the readers to resolve in reverse order: the last reader should
        // resolve after the timer advances 1 milliseconds, the penultimate
        // reader should resolve after 10 milliseconds, and the first reader
        // should resolve after 100 milliseconds
        setTimeout(() => {
            (readers[0] as any).result = expectedHash.slice(0, 2).buffer;
            readers[0].onload({} as any);
        }, 100);
        setTimeout(() => {
            (readers[1] as any).result = expectedHash.slice(2, 4).buffer;
            readers[1].onload({} as any);
        }, 10);
        setTimeout(() => {
            (readers[2] as any).result = expectedHash.slice(4, 6).buffer;
            readers[2].onload({} as any);
        }, 1);

        // resolve the third file reader
        jest.runTimersToTime(2);
        await flushPromises();

        // resolve the second file reader
        jest.runTimersToTime(12);
        await flushPromises();

        // resolve the first file reader
        jest.runTimersToTime(102);
        await flushPromises();

        // finalize the hash
        await sha256.digest();

        const {calls} = (digest as any).mock;
        expect(calls.length).toBe(1);

        const [algo, data] = calls[0];
        expect(algo).toEqual(SHA_256_HASH);
        expect(new Uint8Array(data)).toEqual(expectedHash);
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
        const sha256 = new Sha256(new ArrayBuffer(1));

        const {sign} = window.crypto.subtle;
        (sign as any).mockReturnValue(Promise.reject('failure, failure'));

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
            const sha256 = new Sha256(new ArrayBuffer(1));

            const {sign} = window.crypto.subtle;
            (sign as any).mockReturnValue(
                Promise.resolve(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
            );

            sha256.update(new ArrayBuffer(4));

            expect(await sha256.digest())
                .toEqual(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]));
        }
    );
});
