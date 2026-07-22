const no = Symbol.for("node-only");

export {
  AwsSdkSigV4Signer,
  AWSSDKSigV4Signer,
  validateSigningProperties,
  AwsSdkSigV4ASigner,
  DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION,
  resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config,
  resolveAWSSDKSigV4Config,
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
export const ENV_DISABLE_CLOCK_SKEW_CORRECTION = no;
export const CONFIG_DISABLE_CLOCK_SKEW_CORRECTION = no;
export const NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS = no;
export const NODE_SIGV4A_CONFIG_OPTIONS = no;
