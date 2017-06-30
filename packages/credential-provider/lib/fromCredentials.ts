import {CredentialProvider, Credentials} from "@aws/types";

export function fromCredentials(
    credentials: Credentials
): CredentialProvider {
    return () => Promise.resolve(credentials);
}
