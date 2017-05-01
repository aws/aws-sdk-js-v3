import {CredentialProvider, Credentials} from "@aws/types";

export function memoize(
    provider: CredentialProvider
): CredentialProvider {
    let result: Promise<Credentials> = provider();
    let isConstant: boolean = false;

    return () => {
        if (isConstant) {
            return result;
        }

        return result.then<Credentials>(credentials => {
            if (!credentials.expiration) {
                isConstant = true;
                return credentials;
            }

            if (credentials.expiration - 300 > getEpochTs()) {
                return credentials;
            }

            return result = provider();
        });
    }
}

function getEpochTs() {
    return Math.floor(Date.now() / 1000);
}
