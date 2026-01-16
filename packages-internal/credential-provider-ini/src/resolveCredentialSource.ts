import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AwsCredentialIdentity, CredentialProviderOptions } from "@aws-sdk/types";
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
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
      return async () => chain(fromHttp(options ?? {}), fromContainerMetadata(options))().then(setNamedProvider);
    },
    Ec2InstanceMetadata: async (options?: CredentialProviderOptions) => {
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
      const { fromInstanceMetadata } = await import("@smithy/credential-provider-imds");
      return async () => fromInstanceMetadata(options)().then(setNamedProvider);
    },
    Environment: async (options?: CredentialProviderOptions) => {
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
      const { fromEnv } = await import("@aws-sdk/credential-provider-env");
      return async () => fromEnv(options)().then(setNamedProvider);
    },
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource as keyof typeof sourceProvidersMap];
  } else {
    throw new CredentialsProviderError(
      `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
        `expected EcsContainer or Ec2InstanceMetadata or Environment.`,
      { logger }
    );
  }
};

const setNamedProvider = (creds: AwsCredentialIdentity) =>
  setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
