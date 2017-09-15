import {CredentialProvider} from "@aws/types";

/**
 * Decorates a credential provider with credential-specific memoization. If the
 * decorated provider returns permanent credentials, it will only be invoked
 * once; if the decorated provider returns temporary credentials, it will be
 * invoked again when the validity of the returned credentials is less than 5
 * minutes.
 */
export function memoize(provider: CredentialProvider): CredentialProvider {
    let result = provider();
    let isConstant: boolean = false;

    return () => {
        if (isConstant) {
            return result;
        }

        return result.then(credentials => {
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
