import type {
  AttributedAwsCredentialIdentity,
  AwsHandlerExecutionContext,
  AwsSdkCredentialsFeatures,
  AwsSdkFeatures,
} from "@aws-sdk/types";

/**
 * @internal
 * Indicates to the request context that a given feature is active.
 *
 * @param context - handler execution context.
 * @param feature - readable name of feature.
 * @param value - encoding value of feature. This is required because the
 * specification asks the SDK not to include a runtime lookup of all
 * the feature identifiers.
 */
export function setFeature<F extends keyof AwsSdkFeatures>(
  context: AwsHandlerExecutionContext,
  feature: F,
  value: AwsSdkFeatures[F]
) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {},
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features![feature] = value;
}

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
