import {memoize} from "./memoize";
import {Provider} from '@aws-sdk/types';

describe('memoize', () => {
    describe('static memoization', () => {
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

    describe('refreshing memoization', () => {
        it(
            'should not reinvoke the underlying provider while isExpired returns `false`',
            async () => {
                const provider = jest.fn(() => Promise.resolve('foo'));
                const isExpired = jest.fn(() => false);
                const memoized = memoize(provider, isExpired);

                const checkCount = 10;
                for (let i = 0; i < checkCount; i++) {
                    expect(await memoized()).toBe('foo');
                }

                expect(isExpired.mock.calls.length).toBe(checkCount);
                expect(provider.mock.calls.length).toBe(1);
            }
        );

        it(
            'should reinvoke the underlying provider when isExpired returns `true`',
            async () => {
                const provider = jest.fn(() => Promise.resolve('foo'));
                const isExpired = jest.fn(() => false);
                const memoized = memoize(provider, isExpired);

                const checkCount = 10;
                for (let i = 0; i < checkCount; i++) {
                    expect(await memoized()).toBe('foo');
                }

                expect(isExpired.mock.calls.length).toBe(checkCount);
                expect(provider.mock.calls.length).toBe(1);

                isExpired.mockImplementationOnce(() => true);
                for (let i = 0; i < checkCount; i++) {
                    expect(await memoized()).toBe('foo');
                }

                expect(isExpired.mock.calls.length).toBe(checkCount * 2);
                expect(provider.mock.calls.length).toBe(2);
            }
        );

        it(
            'should return the same promise for invocations 2-infinity if `requiresRefresh` returns `false`',
            async () => {
                const provider = jest.fn(() => Promise.resolve('foo'));
                const isExpired = jest.fn(() => true);
                const requiresRefresh = jest.fn(() => false);

                const memoized = memoize(provider, isExpired, requiresRefresh);
                expect(await memoized()).toBe('foo');
                const set = new Set<Promise<string>>();

                const checkCount = 10;
                for (let i = 0; i < checkCount; i++) {
                    set.add(memoized());
                }

                expect(set.size).toBe(1);
            }
        );
    });
});
