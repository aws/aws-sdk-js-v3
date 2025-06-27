import type {
  AwsIdentityProperties,
  RuntimeConfigAwsCredentialIdentityProvider,
  RuntimeConfigIdentityProvider,
} from "@aws-sdk/types";
import { ProviderError } from "@smithy/property-provider";
import type { AwsCredentialIdentityProvider } from "@smithy/types";

export interface CustomCredentialChainOptions {
  expireAfter(milliseconds: number): AwsCredentialIdentityProvider & CustomCredentialChainOptions;
}

/**
 * @internal
 */
type Mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

/**
 * @example
 * ```js
 * import { fromEnv, fromIni, createCredentialChain } from '@aws-sdk/credential-providers';
 * import { S3 } from '@aws-sdk/client-s3';
 *
 * // You can mix existing AWS SDK credential providers
 * // and custom async functions returning credential objects.
 * new S3({
 *   credentials: createCredentialChain(
 *     fromEnv(),
 *     async () => {
 *       // credentials customized by your code...
 *       return credentials;
 *     },
 *     fromIni()
 *   ),
 * });
 *
 * // Set a max duration on the credentials (client side only).
 * // A set expiration will cause the credentials function to be called again
 * // when the time left is less than 5 minutes.
 * new S3({
 *   // expire after 15 minutes (in milliseconds).
 *   credentials: createCredentialChain(fromEnv(), fromIni()).expireAfter(15 * 60_000),
 * });
 *
 * // Apply shared init properties.
 * const init = { logger: console };
 *
 * new S3({
 *   credentials: createCredentialChain(fromEnv(init), fromIni(init)),
 * });
 * ```
 *
 * @param credentialProviders - one or more credential providers.
 * @returns a single AwsCredentialIdentityProvider that calls the given
 * providers in sequence until one succeeds or all fail.
 *
 * @public
 */
export const createCredentialChain = (
  ...credentialProviders: RuntimeConfigAwsCredentialIdentityProvider[]
): RuntimeConfigAwsCredentialIdentityProvider & CustomCredentialChainOptions => {
  let expireAfter = -1;
  const baseFunction = async (awsIdentityProperties?: AwsIdentityProperties) => {
    const credentials = await propertyProviderChain(...credentialProviders)(awsIdentityProperties);
    if (!credentials.expiration && expireAfter !== -1) {
      (credentials as Mutable<typeof credentials>).expiration = new Date(Date.now() + expireAfter);
    }
    return credentials;
  };
  const withOptions = Object.assign(baseFunction, {
    expireAfter(milliseconds: number) {
      if (milliseconds < 5 * 60_000) {
        throw new Error(
          "@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes."
        );
      }
      expireAfter = milliseconds;
      return withOptions;
    },
  });
  return withOptions;
};

/**
 * @internal
 */
export const propertyProviderChain =
  <T>(...providers: Array<RuntimeConfigIdentityProvider<T>>): RuntimeConfigIdentityProvider<T> =>
  async (awsIdentityProperties?: AwsIdentityProperties) => {
    if (providers.length === 0) {
      throw new ProviderError("No providers in chain");
    }

    let lastProviderError: Error | undefined;
    for (const provider of providers) {
      try {
        const credentials = await provider(awsIdentityProperties);
        return credentials;
      } catch (err) {
        lastProviderError = err;
        if (err?.tryNextLink) {
          continue;
        }
        throw err;
      }
    }
    throw lastProviderError;
  };
