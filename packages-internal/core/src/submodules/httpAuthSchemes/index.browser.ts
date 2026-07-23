const no = Symbol.for("node-only");

export {
  AwsSdkSigV4Signer,
  AWSSDKSigV4Signer,
  validateSigningProperties,
  AwsSdkSigV4ASigner,
  resolveAwsSdkSigV4AConfig,
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

export const NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = no;
export const NODE_SIGV4A_CONFIG_OPTIONS = no;

import { bindResolveAwsSdkSigV4Config } from "./aws_sdk";
import { DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION } from "./aws_sdk/clock-skew-defaults.browser";

export const resolveAwsSdkSigV4Config = bindResolveAwsSdkSigV4Config(DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION);

/**
 * @internal
 * @deprecated renamed to {@link resolveAwsSdkSigV4Config}
 */
export const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
