const no = Symbol.for("node-only");

// original client submodule exports
export const emitWarningIfUnsupportedVersion = no;
export const state = no;
export { getLongPollPlugin } from "./longPollMiddleware";
export { setCredentialFeature } from "./setCredentialFeature";
export { setFeature } from "./setFeature";
export { setTokenFeature } from "./setTokenFeature";

// middleware-host-header
export {
  hostHeaderMiddleware,
  hostHeaderMiddlewareOptions,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "./middleware-host-header/hostHeaderMiddleware";
export type { HostHeaderInputConfig, HostHeaderResolvedConfig } from "./middleware-host-header/hostHeaderMiddleware";

// middleware-logger
export { loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin } from "./middleware-logger/loggerMiddleware";

// middleware-recursion-detection
export { recursionDetectionMiddlewareOptions } from "./middleware-recursion-detection/configuration";
export { getRecursionDetectionPlugin } from "./middleware-recursion-detection/getRecursionDetectionPlugin.browser";
export { recursionDetectionMiddleware } from "./middleware-recursion-detection/recursionDetectionMiddleware.native";

// middleware-trace-context-propagation
export { traceContextPropagationMiddlewareOptions } from "./middleware-trace-context-propagation/configuration";
export { getTraceContextPropagationPlugin } from "./middleware-trace-context-propagation/getTraceContextPropagationPlugin.browser";
export { traceContextPropagationMiddleware } from "./middleware-trace-context-propagation/traceContextPropagationMiddleware.native";

// middleware-user-agent
export { DEFAULT_UA_APP_ID, resolveUserAgentConfig } from "./middleware-user-agent/configurations";
export type { UserAgentInputConfig, UserAgentResolvedConfig } from "./middleware-user-agent/configurations";
export {
  userAgentMiddleware,
  getUserAgentMiddlewareOptions,
  getUserAgentPlugin,
} from "./middleware-user-agent/user-agent-middleware";

// util-user-agent
export { createDefaultUserAgentProvider, defaultUserAgent } from "./util-user-agent-browser/defaultUserAgent.native";
export const crtAvailability = no;
export type { DefaultUserAgentOptions, PreviouslyResolved } from "./util-user-agent-node/defaultUserAgent";
export const NODE_APP_ID_CONFIG_OPTIONS = no;
export const UA_APP_ID_ENV_NAME = no;
export const UA_APP_ID_INI_NAME = no;
export { fallback } from "./util-user-agent-browser/defaultUserAgent";
export { createUserAgentStringParsingProvider } from "./util-user-agent-browser/createUserAgentStringParsingProvider";

// util-endpoints
export { awsEndpointFunctions } from "./util-endpoints/aws";
export { resolveEndpoint } from "./util-endpoints/resolveEndpoint";
export {
  resolveDefaultAwsRegionalEndpointsConfig,
  toEndpointV1,
} from "./util-endpoints/resolveDefaultAwsRegionalEndpointsConfig";
export type {
  DefaultAwsRegionalEndpointsInputConfig,
  DefaultAwsRegionalEndpointsResolvedConfig,
} from "./util-endpoints/resolveDefaultAwsRegionalEndpointsConfig";
export { isIpAddress } from "./util-endpoints/lib/isIpAddress";
export { isVirtualHostableS3Bucket } from "./util-endpoints/lib/aws/isVirtualHostableS3Bucket";
export { parseArn } from "./util-endpoints/lib/aws/parseArn";
export {
  partition,
  setPartitionInfo,
  useDefaultPartitionInfo,
  getUserAgentPrefix,
} from "./util-endpoints/lib/aws/partition";
export type { PartitionsInfo } from "./util-endpoints/lib/aws/partition";
export { EndpointError } from "./util-endpoints/types/EndpointError";
export {
  EndpointObjectProperties,
  EndpointObjectHeaders,
  EndpointObject,
  EndpointRuleObject,
} from "./util-endpoints/types/EndpointRuleObject";
export { ErrorRuleObject } from "./util-endpoints/types/ErrorRuleObject";
export { RuleSetRules, TreeRuleObject } from "./util-endpoints/types/TreeRuleObject";
export { DeprecatedObject, ParameterObject, RuleSetObject } from "./util-endpoints/types/RuleSetObject";
export {
  ReferenceObject,
  FunctionObject,
  FunctionArgv,
  FunctionReturn,
  ConditionObject,
  Expression,
  EndpointParams,
  EndpointResolverOptions,
  ReferenceRecord,
  EvaluateOptions,
} from "./util-endpoints/types/shared";

// region-config-resolver
export const REGION_ENV_NAME = no;
export const REGION_INI_NAME = no;
export const NODE_REGION_CONFIG_OPTIONS = no;
export const NODE_REGION_CONFIG_FILE_OPTIONS = no;
export { resolveRegionConfig } from "./region-config-resolver/awsRegionConfig";
export type { RegionInputConfig, RegionResolvedConfig } from "./region-config-resolver/awsRegionConfig";
export { stsRegionDefaultResolver } from "./region-config-resolver/stsRegionDefaultResolver.native";
export const stsRegionWarning = no;
export {
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
} from "./region-config-resolver/extensions";
export type { RegionExtensionRuntimeConfigType } from "./region-config-resolver/extensions";
