import type { AttributedAwsCredentialIdentity, AwsSdkCredentialsFeatures } from "@aws-sdk/types";

/**
 * @internal
 *
 * @returns the credentials with source feature attribution.
 */
export function setCredentialFeature<F extends keyof AwsSdkCredentialsFeatures>(
  credentials: AttributedAwsCredentialIdentity,
  feature: F,
  value: AwsSdkCredentialsFeatures[F]
): AttributedAwsCredentialIdentity {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source![feature] = value;
  return credentials;
}
