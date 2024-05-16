import type { CredentialProviderOptions } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import type { AwsCredentialIdentityProvider } from "@smithy/types";

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
  profileName: string
): ((options?: CredentialProviderOptions) => Promise<AwsCredentialIdentityProvider>) => {
  const sourceProvidersMap = {
    EcsContainer: (options?: CredentialProviderOptions) =>
      import("@smithy/credential-provider-imds").then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
    Ec2InstanceMetadata: (options?: CredentialProviderOptions) =>
      import("@smithy/credential-provider-imds").then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
    Environment: (options?: CredentialProviderOptions) =>
      import("@aws-sdk/credential-provider-env").then(({ fromEnv }) => fromEnv(options)),
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
