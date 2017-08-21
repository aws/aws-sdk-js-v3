import {chain} from "../lib/chain";
import {fromString} from "../lib/fromString";

describe('chain', () => {
    it('should distill many credential providers into one', async () => {
        const provider = chain(
            fromString('foo'),
            fromString('bar'),
        );

        expect(typeof await provider()).toBe('string');
    });

    it('should return the resolved value of the first successful promise', async () => {
        const provider = chain(
            () => Promise.reject(new Error('Move along')),
            () => Promise.reject(new Error('Nothing to see here')),
            fromString('foo')
        );

        expect(await provider()).toBe('foo');
    });

    it('should not invoke subsequent providers one resolves', async () => {
        const providers = [
            jest.fn(() => Promise.reject(new Error('Move along'))),
            jest.fn(() => Promise.resolve('foo')),
            jest.fn(() => fail('This provider should not be invoked'))
        ];

        expect(await chain(...providers)()).toBe('foo');
        expect(providers[0].mock.calls.length).toBe(1);
        expect(providers[1].mock.calls.length).toBe(1);
        expect(providers[2].mock.calls.length).toBe(0);
    });

    it('should reject chains with no links', async () => {
        await expect(chain()()).rejects.toMatchObject({
            message: 'No providers in chain'
        });
    });
});
