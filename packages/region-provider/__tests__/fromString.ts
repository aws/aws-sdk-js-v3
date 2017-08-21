import {fromString} from '../lib/fromString';

describe('fromString', () => {
    it('should convert a string into a provider', async () => {
        const region = 'region';
        const provider = fromString(region);

        await expect(provider()).resolves.toBe(region);
    });
});
