import { Provider } from "@aws-sdk/types";

import { ProviderError } from "./ProviderError";

/**
 * @internal
 *
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
export const chain =
  <T>(...providers: Array<Provider<T>>): Provider<T> =>
  async () => {
    let lastProviderError: Error | undefined;

    for (const provider of providers) {
      try {
        const credentials = await provider();
        return credentials;
      } catch (err) {
        lastProviderError = err;
        if (err?.tryNextLink) {
          continue;
        }
        throw err;
      }
    }

    if (lastProviderError) {
      throw lastProviderError;
    }

    throw new ProviderError("No providers in chain");
  };
