import {CredentialProvider} from "@aws/types";
import {CredentialError} from "./CredentialError";

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
