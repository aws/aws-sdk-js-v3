import { AwsCredentialIdentity } from "@aws-sdk/types";

/**
 * @internal
 */
export interface InstanceMetadataCredentials extends AwsCredentialIdentity {
  readonly originalExpiration?: Date;
}
