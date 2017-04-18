import {CredentialProvider} from "./CredentialProvider";
import {Credentials} from "./Credentials";

export function fromCredentials(
    credentials: Credentials
): CredentialProvider {
    return () => Promise.resolve(credentials);
}
