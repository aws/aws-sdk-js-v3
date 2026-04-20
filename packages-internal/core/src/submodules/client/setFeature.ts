import type { AwsHandlerExecutionContext, AwsSdkFeatures } from "@aws-sdk/types";
import { Retry } from "@smithy/util-retry";

/**
 * This is temporary code which reads AWS_NEW_RETRIES_2026
 * and conditionally activates the v2026 retry behavior flag.
 * todo: this will be removed at a later date.
 */
Retry.v2026 ||= typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true";

/**
 * Indicates to the request context that a given feature is active.
 * @internal
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
