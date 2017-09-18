import {CredentialProvider} from "@aws/types";
import {CredentialError} from "./CredentialError";

/**
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
export function chain(
    ...providers: Array<CredentialProvider>
): CredentialProvider {
    return () => {
        providers = providers.slice(0);
        let provider = providers.shift();
        if (provider === undefined) {
            return Promise.reject(new CredentialError(
                'No credential providers in chain'
            ));
        }
        let promise = provider();
        while (provider = providers.shift()) {
            promise = promise.catch((provider => {
                return (err: CredentialError) => {
                    if (err.tryNextLink) {
                        return provider();
                    }

                    throw err;
                }
            })(provider));
        }

        return promise;
    }
}
