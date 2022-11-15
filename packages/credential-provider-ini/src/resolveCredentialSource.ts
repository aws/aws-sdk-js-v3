import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromContainerMetadata, fromInstanceMetadata } from "@aws-sdk/credential-provider-imds";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
export const resolveCredentialSource = (credentialSource: string, profileName: string): AwsCredentialIdentityProvider => {
  const sourceProvidersMap: Record<string, () => AwsCredentialIdentityProvider> = {
    EcsContainer: fromContainerMetadata,
    Ec2InstanceMetadata: fromInstanceMetadata,
    Environment: fromEnv,
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource]();
  } else {
    throw new CredentialsProviderError(
      `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
        `expected EcsContainer or Ec2InstanceMetadata or Environment.`
    );
  }
};
