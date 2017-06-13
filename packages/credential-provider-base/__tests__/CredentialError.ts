import {CredentialError} from "../lib/CredentialError";

describe('CredentialError', () => {
    it('should direct the chain to proceed to the next link by default', () => {
        expect(new CredentialError('PANIC').tryNextLink).toBe(true);
    });

    it('should allow errors to halt the chain', () => {
        expect(new CredentialError('PANIC', false).tryNextLink).toBe(false);
    });
});
