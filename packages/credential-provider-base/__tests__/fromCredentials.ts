import {CredentialProvider, Credentials} from "@aws/types";
import {fromCredentials} from "../lib/fromCredentials";

describe('fromCredentials', () => {
    it('should convert credentials into a credential provider', async () => {
        const credentials: Credentials = {
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
            sessionToken: 'baz',
            expiration: Math.floor(Date.now().valueOf() / 1000),
        };
        const provider: CredentialProvider = fromCredentials(credentials);

        expect(typeof provider).toBe('function');
        expect(provider()).toBeInstanceOf(Promise);
        expect(await provider()).toEqual(credentials);
    });
});
