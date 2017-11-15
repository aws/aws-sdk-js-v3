import {Sha256} from './jsSha256';
import {RawSha256} from './RawSha256';
import {hashTestVectors, hmacTestVectors} from './knownHashes.fixture';

describe('Sha256', () => {
    it('should create an instance of RawSha256 by default', () => {
        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(RawSha256);
    });

    it('should create an outer hash if a secret is present', () => {
        const sha256 = new Sha256('foo');
        expect((sha256 as any).hash).toBeInstanceOf(RawSha256);
        expect((sha256 as any).outer).toBeInstanceOf(RawSha256);
    });

    it('should accept ArrayBufferView secrets', () => {
        const sha256 = new Sha256(Uint8Array.from([0xde, 0xad]));
    });

    it('should accept ArrayBuffer secrets', () => {
        const sha256 = new Sha256(Uint8Array.from([0xde, 0xad]).buffer);
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

    it('should trap finalization errors', async () => {
        const sha256 = new Sha256();
        jest.spyOn((sha256 as any).hash, 'digest')
            .mockImplementation(() => {
                throw new Error('PANIC');
            });

        await sha256.digest().then(
            () => { throw new Error('The promise should have been rejected.'); },
            () => { /* Promise rejected, just as expected */ }
        );
    });

    let idx = 0;
    for (const [input, result] of hashTestVectors) {
        it('should match known hash calculations: ' + idx++, async () => {
            const hash = new Sha256();
            hash.update(input);
            expect(await hash.digest()).toEqual(result);
        });
    }

    idx = 0;
    for (const [key, data, result] of hmacTestVectors) {
        it('should match known hash calculations: ' + idx++, async () => {
            const hash = new Sha256(key);
            hash.update(data);
            expect(await hash.digest()).toEqual(result);
        });
    }
});
