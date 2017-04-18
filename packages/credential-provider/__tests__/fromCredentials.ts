import {CredentialProvider} from "../lib/CredentialProvider";
import {Credentials} from "../lib/Credentials";
import {fromCredentials} from "../lib/fromCredentials";

describe('fromCredentials', () => {
    it('should convert credentials into a credential provider', async () => {
        const credentials: Credentials = {accessKeyId: 'foo', secretKey: 'bar'};
        const provider: CredentialProvider = fromCredentials(credentials);

        expect(typeof provider).toBe('function');
        expect(provider()).toBeInstanceOf(Promise);
        expect(await provider()).toEqual(credentials);
    });
});
