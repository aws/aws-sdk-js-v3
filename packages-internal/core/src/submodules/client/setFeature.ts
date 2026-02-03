import type { AwsHandlerExecutionContext, AwsSdkFeatures } from "@aws-sdk/types";

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
