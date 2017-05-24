import {chain} from "../lib/chain";
import {fromCredentials} from "../lib/fromCredentials";
import {isCredentials} from "../lib/isCredentials";
import {CredentialError} from "../lib/CredentialError";

describe('chain', () => {
    it('should distill many credential providers into one', async () => {
        const provider = chain(
            fromCredentials({accessKeyId: 'foo', secretAccessKey: 'bar'}),
            fromCredentials({accessKeyId: 'baz', secretAccessKey: 'quux'}),
        );

        expect(isCredentials(await provider())).toBe(true);
    });

    it('should return the resolved value of the first successful promise', async () => {
        const creds = {accessKeyId: 'foo', secretAccessKey: 'bar'};
        const provider = chain(
            () => Promise.reject(new CredentialError('Move along')),
            () => Promise.reject(new CredentialError('Nothing to see here')),
            fromCredentials(creds)
        );

        expect(await provider()).toEqual(creds);
    });

    it('should not invoke subsequent providers one resolves', async () => {
        const creds = {accessKeyId: 'foo', secretAccessKey: 'bar'};
        const providers = [
            jest.fn(() => Promise.reject(new CredentialError('Move along'))),
            jest.fn(() => Promise.resolve(creds)),
            jest.fn(() => fail('This provider should not be invoked'))
        ];

        expect(await chain(...providers)()).toEqual(creds);
        expect(providers[0].mock.calls.length).toBe(1);
        expect(providers[1].mock.calls.length).toBe(1);
        expect(providers[2].mock.calls.length).toBe(0);
    });

    it('should reject chains with no links', async () => {
        await chain()().then(
            () => { throw new Error('The promise should have been rejected'); },
            () => { /* Promise rejected as expected */ }
        );
    });
});
