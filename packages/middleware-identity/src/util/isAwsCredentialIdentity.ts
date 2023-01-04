import { AwsCredentialIdentity, Identity } from "@aws-sdk/types";

export const isAwsCredentialIdentity = (identity: Identity) =>
  (identity as AwsCredentialIdentity).accessKeyId !== undefined &&
  (identity as AwsCredentialIdentity).secretAccessKey !== undefined;
