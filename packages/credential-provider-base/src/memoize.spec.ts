import {memoize} from "./memoize";

describe('memoize', () => {
    it('should cache the resolved provider for permanent credentials', async () => {
        const creds = {accessKeyId: 'foo', secretAccessKey: 'bar'};
        const provider = jest.fn(() => Promise.resolve(creds));
        const memoized = memoize(provider);

        expect(await memoized()).toEqual(creds);
        expect(provider.mock.calls.length).toBe(1);
        expect(await memoized()).toEqual(creds);
        expect(provider.mock.calls.length).toBe(1);
    });

    it('should invoke provider again when credentials expire', async () => {
        const clockMock = Date.now = jest.fn();
        clockMock.mockReturnValue(0);
        const provider = jest.fn(() => Promise.resolve({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
            expiration: Date.now() + 600, // expires in ten minutes
        }));
        const memoized = memoize(provider);

        expect((await memoized()).accessKeyId).toEqual('foo');
        expect(provider.mock.calls.length).toBe(1);
        expect((await memoized()).secretAccessKey).toEqual('bar');
        expect(provider.mock.calls.length).toBe(1);

        clockMock.mockReset();
        clockMock.mockReturnValue(601000); // One second past previous expiration

        expect((await memoized()).accessKeyId).toEqual('foo');
        expect(provider.mock.calls.length).toBe(2);
        expect((await memoized()).secretAccessKey).toEqual('bar');
        expect(provider.mock.calls.length).toBe(2);
    });
});
