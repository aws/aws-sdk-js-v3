import {Sha256} from "../";
import {Buffer} from 'buffer';
import {fromString} from '@aws/util-buffer-from';

jest.mock('crypto', () => {
    const cryptoModule = jest.genMockFromModule('crypto') as any;
    const mockHash = {
        update: jest.fn(),
        digest: jest.fn(),
    };
    const mockHmac = {
        update: jest.fn(),
        digest: jest.fn(),
    };

    cryptoModule.createHash = jest.fn(() => mockHash);
    cryptoModule.createHmac = jest.fn(() => mockHmac);

    return cryptoModule;
});
import {createHash, createHmac} from 'crypto';

beforeEach(() => {
    const hash = createHash('');
    const hmac = createHmac('', '');
    (hash.update as any).mockClear();
    (hash.digest as any).mockClear();
    (hmac.update as any).mockClear();
    (hmac.digest as any).mockClear();
    (createHash as any).mockClear();
    (createHmac as any).mockClear();
});

describe('Sha256', () => {
    it('should create a hash object by default', () => {
        const sha256 = new Sha256();

        expect((createHash as any).mock.calls.length).toBe(1);
        expect((createHash as any).mock.calls[0]).toEqual(['sha256']);
        expect((createHmac as any).mock.calls.length).toBe(0);
    });

    it('should create a hmac object if a secret is supplied', () => {
        const sha256 = new Sha256('foo');

        expect((createHash as any).mock.calls.length).toBe(0);
        expect((createHmac as any).mock.calls.length).toBe(1);
        expect((createHmac as any).mock.calls[0])
            .toEqual(['sha256', fromString('foo')]);
    });

    it('should create a hmac object with a buffer secret', () => {
        const sha256 = new Sha256(Uint8Array.from([0, 0]));

        expect((createHash as any).mock.calls.length).toBe(0);
        expect((createHmac as any).mock.calls.length).toBe(1);

        const [method, secret] = (createHmac as any).mock.calls[0];
        expect(method).toEqual('sha256');
        expect(Buffer.from([0, 0]).equals(secret));
    });

    it('should incrementally update a hash', () => {
        const hash = createHash('sha256');
        const {calls} = (hash.update as any).mock;

        const sha256 = new Sha256();
        expect(calls.length).toBe(0);

        sha256.update('foo', 'ascii');
        expect(calls.length).toBe(1);
        expect(calls[0]).toEqual([fromString('foo', "ascii")]);

        sha256.update(Uint8Array.from([0, 0]));
        expect(calls.length).toBe(2);
        expect((calls[1][0] as any).equals(Buffer.from([0, 0]))).toBe(true);

        sha256.update(Uint8Array.from([0, 0]).buffer);
        expect(calls.length).toBe(3);
        expect((calls[2][0] as any).equals(Buffer.from([0, 0]))).toBe(true);

        sha256.digest();
        expect(calls.length).toBe(3);
        expect((hash.digest as any).mock.calls.length).toBe(1);
    });

    it('should incrementally update an hmac', () => {
        const hash = createHmac('sha256', 'foo');
        const {calls} = (hash.update as any).mock;

        const sha256 = new Sha256('foo');
        expect(calls.length).toBe(0);

        sha256.update('foo', 'ascii');
        expect(calls.length).toBe(1);
        expect(calls[0]).toEqual([fromString('foo', "ascii")]);

        sha256.update(Uint8Array.from([0, 0]));
        expect(calls.length).toBe(2);
        expect((calls[1][0] as any).equals(Buffer.from([0, 0]))).toBe(true);

        sha256.update(Uint8Array.from([0, 0]).buffer);
        expect(calls.length).toBe(3);
        expect((calls[2][0] as any).equals(Buffer.from([0, 0]))).toBe(true);

        sha256.digest();
        expect(calls.length).toBe(3);
        expect((hash.digest as any).mock.calls.length).toBe(1);
    });
});
