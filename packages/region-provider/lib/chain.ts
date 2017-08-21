import {Provider} from "@aws/types";

/**
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
export function chain<T>(
    ...providers: Array<Provider<T>>
): Provider<T> {
    return () => {
        providers = providers.slice(0);
        let provider = providers.shift();
        if (provider === undefined) {
            return Promise.reject(new Error(
                'No providers in chain'
            ));
        }

        let promise = provider();
        while (provider = providers.shift()) {
            promise = promise.catch(provider);
        }

        return promise;
    }
}
