import { chain as propertyProviderChain } from "@smithy/property-provider";
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
 * import { fromEnv, fromIni, chain } from "@aws-sdk/credential-providers";
 * import { S3 } from '@aws-sdk/client-s3';
 *
 * // basic chain.
 * new S3({
 *   credentials: chain(
 *     fromEnv(),
 *     fromIni()
 *   )
 * });
 *
 * // set a max duration on the credentials (client side only).
 * new S3({
 *   credentials: chain(
 *     fromEnv(),
 *     fromIni()
 *   ).expireAfter(15 * 60_000) // 15 minutes in milliseconds.
 * });
 *
 * // apply shared init properties.
 * new S3({
 *   credentials: chain(...[
 *     fromEnv,
 *     fromIni
 *   ].map(p => p({ logger: console })))
 * });
 *
 * ```
 *
 * @param credentialProviders - one or more credential providers.
 * @returns a single AwsCredentialIdentityProvider that calls the given
 * providers in sequence until one succeeds or all fail.
 */
export const chain = (
  ...credentialProviders: AwsCredentialIdentityProvider[]
): AwsCredentialIdentityProvider & CustomCredentialChainOptions => {
  let expireAfter = -1;
  const baseFunction = async () => {
    const credentials = await propertyProviderChain(...credentialProviders)();
    if (!credentials.expiration && expireAfter !== -1) {
      (credentials as Mutable<typeof credentials>).expiration = new Date(Date.now() + expireAfter);
    }
    return credentials;
  };
  const withOptions = Object.assign(baseFunction, {
    expireAfter(milliseconds: number) {
      expireAfter = milliseconds;
      return withOptions;
    },
  });
  return withOptions;
};
