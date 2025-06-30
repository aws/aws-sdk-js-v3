import type { AttributedTokenIdentity, AwsSdkTokenFeatures } from "@aws-sdk/types";

/**
 * @internal
 *
 * @returns the token with source feature attribution.
 */
export function setTokenFeature<F extends keyof AwsSdkTokenFeatures>(
  token: AttributedTokenIdentity,
  feature: F,
  value: AwsSdkTokenFeatures[F]
): AttributedTokenIdentity {
  if (!token.$source) {
    token.$source = {};
  }
  token.$source![feature] = value;
  return token;
}
