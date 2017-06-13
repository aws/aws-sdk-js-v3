import {randomValues} from '../lib/ie11RandomValues';

beforeEach(() => {
    (window as any).msCrypto = {
        getRandomValues(toFill: Uint8Array) {
            const view = new DataView(toFill.buffer);
            for (let i = 0; i < toFill.byteLength; i++) {
                view.setUint8(i, 0x00);
            }
        }
    };
});

describe('randomValues', () => {
    it('should call the random source built into IE 11', async () => {
        expect(await randomValues(4))
            .toMatchObject(Uint8Array.from([0, 0, 0, 0]));
    });

    it(
        'should convert a failed random generation into a promise rejection',
        async () => {
            (window as any).msCrypto.getRandomValues = () => {
                throw new Error('PANIC PANIC');
            };

            await randomValues(12).then(
                () => { throw new Error('The promise should have been rejected'); },
                () => { /* promise rejected, just as expected */ }
            );
        }
    );
});
