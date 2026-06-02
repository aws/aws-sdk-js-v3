export {
  awsEndpointFunctions,
  resolveEndpoint,
  resolveDefaultAwsRegionalEndpointsConfig,
  toEndpointV1,
  isIpAddress,
  partition,
  setPartitionInfo,
  useDefaultPartitionInfo,
  getUserAgentPrefix,
} from "@aws-sdk/core/client";
export type {
  PartitionsInfo,
  DefaultAwsRegionalEndpointsInputConfig,
  DefaultAwsRegionalEndpointsResolvedConfig,
} from "@aws-sdk/core/client";
export { EndpointError } from "@smithy/core/endpoints";
export type {
  EndpointObjectProperties,
  EndpointObjectHeaders,
  EndpointObject,
  EndpointRuleObject,
} from "@smithy/core/endpoints";
export type { ErrorRuleObject } from "@smithy/core/endpoints";
export type { RuleSetRules, TreeRuleObject } from "@smithy/core/endpoints";
export type { DeprecatedObject, ParameterObject, RuleSetObject } from "@smithy/core/endpoints";
export type {
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
} from "@smithy/core/endpoints";
