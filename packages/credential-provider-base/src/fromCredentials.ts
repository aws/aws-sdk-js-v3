import {CredentialProvider, Credentials} from "@aws/types";

/**
 * Convert a static credentials object into a credential provider function.
 */
export function fromCredentials(
    credentials: Credentials
): CredentialProvider {
    return () => Promise.resolve(credentials);
}
