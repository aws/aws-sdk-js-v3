export {
  AwsSdkSigV4Signer,
  AWSSDKSigV4Signer,
  validateSigningProperties,
  AwsSdkSigV4ASigner,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  resolveAwsSdkSigV4AConfig,
  NODE_SIGV4A_CONFIG_OPTIONS,
} from "./aws_sdk";
export type {
  AwsSdkSigV4AAuthInputConfig,
  AwsSdkSigV4APreviouslyResolved,
  AwsSdkSigV4AAuthResolvedConfig,
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4Memoized,
  AwsSdkSigV4PreviouslyResolved,
  AwsSdkSigV4AuthResolvedConfig,
  AWSSDKSigV4AuthInputConfig,
  AWSSDKSigV4PreviouslyResolved,
  AWSSDKSigV4AuthResolvedConfig,
} from "./aws_sdk";
export { getBearerTokenEnvKey } from "./utils/getBearerTokenEnvKey";

import { bindResolveAwsSdkSigV4Config } from "./aws_sdk";
import { DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION } from "./aws_sdk/clock-skew-defaults";

export const resolveAwsSdkSigV4Config = bindResolveAwsSdkSigV4Config(DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION);

/**
 * @internal
 * @deprecated renamed to {@link resolveAwsSdkSigV4Config}
 */
export const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
