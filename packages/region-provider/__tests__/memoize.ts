import {memoize} from "../lib/memoize";

describe('memoize', () => {
    it('should cache the resolved provider', async () => {
        const provider = jest.fn(() => Promise.resolve('foo'));
        const memoized = memoize(provider);

        expect(await memoized()).toEqual('foo');
        expect(provider.mock.calls.length).toBe(1);
        expect(await memoized()).toEqual('foo');
        expect(provider.mock.calls.length).toBe(1);
    });

    it('should always return the same promise', () => {
        const provider = jest.fn(() => Promise.resolve('foo'));
        const memoized = memoize(provider);
        const result = memoized();

        expect(memoized()).toBe(result);
    });
});
