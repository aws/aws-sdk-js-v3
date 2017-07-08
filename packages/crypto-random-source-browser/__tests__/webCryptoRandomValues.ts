import {randomValues} from '../lib/webCryptoRandomValues';
import {locateWindow} from '@aws/util-locate-window';

describe('randomValues', () => {
    it('should call the random source built into most browsers', async () => {
        (locateWindow() as any).crypto = {
            getRandomValues(toFill: Uint8Array) {
                const view = new DataView(toFill.buffer);
                for (let i = 0; i < toFill.byteLength; i++) {
                    view.setUint8(i, 0x00);
                }
            }
        };

        expect(await randomValues(4))
            .toMatchObject(Uint8Array.from([0, 0, 0, 0]));
    });

    it(
        'should convert a failed random generation into a promise rejection',
        async () => {
            (locateWindow() as any).crypto = {
                getRandomValues(toFill: Uint8Array) {
                    throw new Error('PANIC PANIC');
                }
            };

            await expect(randomValues(12)).rejects;
        }
    );
});
