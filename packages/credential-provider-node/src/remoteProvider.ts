import type { RemoteProviderInit } from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";
import type { AwsCredentialIdentityProvider } from "@smithy/types";

export const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";

/**
 * @internal
 */
export const remoteProvider = async (init: RemoteProviderInit): Promise<AwsCredentialIdentityProvider> => {
  const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import(
    "@smithy/credential-provider-imds"
  );

  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    return fromContainerMetadata(init);
  }

  if (process.env[ENV_IMDS_DISABLED]) {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
    };
  }

  return fromInstanceMetadata(init);
};
