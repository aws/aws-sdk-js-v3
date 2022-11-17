import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import { defaultProvider, DefaultProviderInit } from "@aws-sdk/credential-provider-node";
import { AwsCredentialIdentityProvider, Pluggable } from "@aws-sdk/types";

export interface fromNodeProviderChainInit extends DefaultProviderInit {
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}

/**
 * This is the same credential provider as {@link defaultProvider|the default provider for Node.js SDK},
 * but with default role assumers so you don't need to import them from
 * STS client and supply them manually.
 *
 * You normally don't need to use this explicitly in the client constructor.
 * It is useful for utility functions requiring credentials like S3 presigner,
 * or RDS signer.
 *
 * ```js
 * import { fromNodeProviderChain } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromNodeProviderChain } = require("@aws-sdk/credential-providers") // CommonJS import
 *
 * const credentialProvider = fromNodeProviderChain({
 *   //...any input of fromEnv(), fromSSO(), fromTokenFile(), fromIni(),
 *   // fromProcess(), fromInstanceMetadata(), fromContainerMetadata()
 *
 *   // Optional. Custom STS client configurations overriding the default ones.
 *   clientConfig: { region },
 *   // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *   // e.g. adding custom headers.
 *   clientPlugins: [addFooHeadersPlugin],
 * })
 * ```
 */
export const fromNodeProviderChain = (init: fromNodeProviderChainInit = {}): AwsCredentialIdentityProvider =>
  defaultProvider({
    ...init,
    roleAssumer: init.roleAssumer ?? getDefaultRoleAssumer(init.clientConfig, init.clientPlugins),
    roleAssumerWithWebIdentity:
      init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
  });
