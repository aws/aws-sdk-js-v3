import type { CredentialProviderOptions } from "@aws-sdk/types";
import { chain, CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentityProvider, Logger } from "@smithy/types";

/**
 * @internal
 *
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
export const resolveCredentialSource = (
  credentialSource: string,
  profileName: string,
  logger?: Logger
): ((options?: CredentialProviderOptions) => Promise<AwsCredentialIdentityProvider>) => {
  const sourceProvidersMap = {
    EcsContainer: async (options?: CredentialProviderOptions) => {
      const { fromHttp } = await import("@aws-sdk/credential-provider-http");
      const { fromContainerMetadata } = await import("@smithy/credential-provider-imds");
      logger?.debug("@aws-sdk/credential-provider-ini", "credential_source EcsContainer");
      return chain(fromHttp(options ?? {}), fromContainerMetadata(options));
    },
    Ec2InstanceMetadata: (options?: CredentialProviderOptions) => {
      logger?.debug("@aws-sdk/credential-provider-ini", "credential_source Ec2InstanceMetadata");
      return import("@smithy/credential-provider-imds").then(({ fromInstanceMetadata }) =>
        fromInstanceMetadata(options)
      );
    },
    Environment: (options?: CredentialProviderOptions) => {
      logger?.debug("@aws-sdk/credential-provider-ini", "credential_source Environment");
      return import("@aws-sdk/credential-provider-env").then(({ fromEnv }) => fromEnv(options));
    },
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource as keyof typeof sourceProvidersMap];
  } else {
    throw new CredentialsProviderError(
      `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
        `expected EcsContainer or Ec2InstanceMetadata or Environment.`
    );
  }
};
