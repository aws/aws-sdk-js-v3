import {CredentialProvider} from "./CredentialProvider";
import {Credentials} from "./Credentials";

export function chain(...providers: Array<CredentialProvider>): CredentialProvider {
    return () => {
        providers = providers.slice(0);
        let provider = providers.shift();
        if (provider === undefined) {
            return Promise.reject<Credentials>('No credential providers in chain');
        }
        let promise = provider();
        while (provider = providers.shift()) {
            promise = promise.catch(provider);
        }

        return promise;
    }
}
