import {Sha256} from '../lib/jsSha256';
import SjclSha256 = require('@aws/crypto-sjcl-sha256');
import SjclHmac = require('@aws/crypto-sjcl-hmac');

describe('Sha256', () => {
    it('should create an instance of SjclSha256 by default', () => {
        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(SjclSha256);
    });

    it('should create an instance of SjclHmac if a secret is present', () => {
        const sha256 = new Sha256('foo');
        expect((sha256 as any).hash).toBeInstanceOf(SjclHmac);
    });

    it('should accept ArrayBufferView secrets', () => {
        const sha256 = new Sha256(Uint8Array.from([0xde, 0xad]));
        expect((sha256 as any).hash).toBeInstanceOf(SjclHmac);
    });

    it('should accept ArrayBuffer secrets', () => {
        const sha256 = new Sha256(Uint8Array.from([0xde, 0xad]).buffer);
        expect((sha256 as any).hash).toBeInstanceOf(SjclHmac);
    });

    it('should call update when given data', () => {
        const sha256 = new Sha256();
        const spy = jest.spyOn((sha256 as any).hash, 'update');

        sha256.update('data');
        expect(spy.mock.calls.length).toBe(1);
    });

    it('should not call update when given empty data', () => {
        const sha256 = new Sha256();
        const spy = jest.spyOn((sha256 as any).hash, 'update');

        sha256.update(new ArrayBuffer(0));
        expect(spy.mock.calls.length).toBe(0);
    });

    it('should trap update errors', async () => {
        const sha256 = new Sha256();
        jest.spyOn((sha256 as any).hash, 'update')
            .mockImplementation(() => {
                throw new Error('PANIC');
            });

        sha256.update('foo');

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    it('should call finalize when creating SHA-256 digests', () => {
        const sha256 = new Sha256();
        const spy = jest.spyOn((sha256 as any).hash, 'finalize');

        sha256.digest();
        expect(spy.mock.calls.length).toBe(1);
    });

    it('should call digest when creating SHA-256 HMACs', () => {
        const sha256 = new Sha256('secret');
        const spy = jest.spyOn((sha256 as any).hash, 'digest');

        sha256.digest();
        expect(spy.mock.calls.length).toBe(1);
    });

    it('should trap finalization errors', async () => {
        const sha256 = new Sha256();
        jest.spyOn((sha256 as any).hash, 'finalize')
            .mockImplementation(() => {
                throw new Error('PANIC');
            });

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });
});
