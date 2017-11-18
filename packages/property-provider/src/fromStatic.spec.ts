import {fromStatic} from './fromStatic';

describe('fromStatic', () => {
    it('should convert a static value into a provider', async () => {
        const provider = fromStatic('string');

        expect(await provider()).toBe('string');
    });

    it('should always return the same promise', () => {
        const provider = fromStatic('string');
        const result = provider();

        expect(provider()).toBe(result);
    });
});
