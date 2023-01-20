// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
} from "./commands/BatchGetAggregateResourceConfigCommand";
import {
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
} from "./commands/BatchGetResourceConfigCommand";
import {
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
} from "./commands/DeleteAggregationAuthorizationCommand";
import { DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput } from "./commands/DeleteConfigRuleCommand";
import {
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
} from "./commands/DeleteConfigurationAggregatorCommand";
import {
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
} from "./commands/DeleteConfigurationRecorderCommand";
import {
  DeleteConformancePackCommandInput,
  DeleteConformancePackCommandOutput,
} from "./commands/DeleteConformancePackCommand";
import {
  DeleteDeliveryChannelCommandInput,
  DeleteDeliveryChannelCommandOutput,
} from "./commands/DeleteDeliveryChannelCommand";
import {
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
} from "./commands/DeleteEvaluationResultsCommand";
import {
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
} from "./commands/DeleteOrganizationConfigRuleCommand";
import {
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
} from "./commands/DeleteOrganizationConformancePackCommand";
import {
  DeletePendingAggregationRequestCommandInput,
  DeletePendingAggregationRequestCommandOutput,
} from "./commands/DeletePendingAggregationRequestCommand";
import {
  DeleteRemediationConfigurationCommandInput,
  DeleteRemediationConfigurationCommandOutput,
} from "./commands/DeleteRemediationConfigurationCommand";
import {
  DeleteRemediationExceptionsCommandInput,
  DeleteRemediationExceptionsCommandOutput,
} from "./commands/DeleteRemediationExceptionsCommand";
import {
  DeleteResourceConfigCommandInput,
  DeleteResourceConfigCommandOutput,
} from "./commands/DeleteResourceConfigCommand";
import {
  DeleteRetentionConfigurationCommandInput,
  DeleteRetentionConfigurationCommandOutput,
} from "./commands/DeleteRetentionConfigurationCommand";
import { DeleteStoredQueryCommandInput, DeleteStoredQueryCommandOutput } from "./commands/DeleteStoredQueryCommand";
import {
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
} from "./commands/DeliverConfigSnapshotCommand";
import {
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import {
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "./commands/DescribeAggregateComplianceByConformancePacksCommand";
import {
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "./commands/DescribeAggregationAuthorizationsCommand";
import {
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "./commands/DescribeComplianceByConfigRuleCommand";
import {
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "./commands/DescribeComplianceByResourceCommand";
import {
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import {
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "./commands/DescribeConfigRulesCommand";
import {
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import {
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand";
import {
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import {
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand";
import {
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand";
import {
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand";
import {
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand";
import {
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import {
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import {
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand";
import {
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "./commands/DescribePendingAggregationRequestsCommand";
import {
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
} from "./commands/DescribeRemediationConfigurationsCommand";
import {
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "./commands/DescribeRemediationExceptionsCommand";
import {
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "./commands/DescribeRemediationExecutionStatusCommand";
import {
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "./commands/DescribeRetentionConfigurationsCommand";
import {
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import {
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import {
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConformancePackComplianceSummaryCommand";
import {
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import {
  GetAggregateResourceConfigCommandInput,
  GetAggregateResourceConfigCommandOutput,
} from "./commands/GetAggregateResourceConfigCommand";
import {
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetComplianceDetailsByConfigRuleCommand";
import {
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "./commands/GetComplianceDetailsByResourceCommand";
import {
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
} from "./commands/GetComplianceSummaryByConfigRuleCommand";
import {
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
} from "./commands/GetComplianceSummaryByResourceTypeCommand";
import {
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "./commands/GetConformancePackComplianceDetailsCommand";
import {
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetConformancePackComplianceSummaryCommand";
import {
  GetCustomRulePolicyCommandInput,
  GetCustomRulePolicyCommandOutput,
} from "./commands/GetCustomRulePolicyCommand";
import {
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "./commands/GetDiscoveredResourceCountsCommand";
import {
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import {
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import {
  GetOrganizationCustomRulePolicyCommandInput,
  GetOrganizationCustomRulePolicyCommandOutput,
} from "./commands/GetOrganizationCustomRulePolicyCommand";
import {
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand";
import {
  GetResourceEvaluationSummaryCommandInput,
  GetResourceEvaluationSummaryCommandOutput,
} from "./commands/GetResourceEvaluationSummaryCommand";
import { GetStoredQueryCommandInput, GetStoredQueryCommandOutput } from "./commands/GetStoredQueryCommand";
import {
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import {
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "./commands/ListConformancePackComplianceScoresCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
} from "./commands/ListResourceEvaluationsCommand";
import { ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput } from "./commands/ListStoredQueriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
} from "./commands/PutAggregationAuthorizationCommand";
import { PutConfigRuleCommandInput, PutConfigRuleCommandOutput } from "./commands/PutConfigRuleCommand";
import {
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
} from "./commands/PutConfigurationAggregatorCommand";
import {
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
} from "./commands/PutConfigurationRecorderCommand";
import { PutConformancePackCommandInput, PutConformancePackCommandOutput } from "./commands/PutConformancePackCommand";
import { PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput } from "./commands/PutDeliveryChannelCommand";
import { PutEvaluationsCommandInput, PutEvaluationsCommandOutput } from "./commands/PutEvaluationsCommand";
import {
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
} from "./commands/PutExternalEvaluationCommand";
import {
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
} from "./commands/PutOrganizationConfigRuleCommand";
import {
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
} from "./commands/PutOrganizationConformancePackCommand";
import {
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
} from "./commands/PutRemediationConfigurationsCommand";
import {
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
} from "./commands/PutRemediationExceptionsCommand";
import { PutResourceConfigCommandInput, PutResourceConfigCommandOutput } from "./commands/PutResourceConfigCommand";
import {
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
} from "./commands/PutRetentionConfigurationCommand";
import { PutStoredQueryCommandInput, PutStoredQueryCommandOutput } from "./commands/PutStoredQueryCommand";
import {
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "./commands/SelectAggregateResourceConfigCommand";
import {
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "./commands/SelectResourceConfigCommand";
import {
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
} from "./commands/StartConfigRulesEvaluationCommand";
import {
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
} from "./commands/StartConfigurationRecorderCommand";
import {
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
} from "./commands/StartRemediationExecutionCommand";
import {
  StartResourceEvaluationCommandInput,
  StartResourceEvaluationCommandOutput,
} from "./commands/StartResourceEvaluationCommand";
import {
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchGetAggregateResourceConfigCommandInput
  | BatchGetResourceConfigCommandInput
  | DeleteAggregationAuthorizationCommandInput
  | DeleteConfigRuleCommandInput
  | DeleteConfigurationAggregatorCommandInput
  | DeleteConfigurationRecorderCommandInput
  | DeleteConformancePackCommandInput
  | DeleteDeliveryChannelCommandInput
  | DeleteEvaluationResultsCommandInput
  | DeleteOrganizationConfigRuleCommandInput
  | DeleteOrganizationConformancePackCommandInput
  | DeletePendingAggregationRequestCommandInput
  | DeleteRemediationConfigurationCommandInput
  | DeleteRemediationExceptionsCommandInput
  | DeleteResourceConfigCommandInput
  | DeleteRetentionConfigurationCommandInput
  | DeleteStoredQueryCommandInput
  | DeliverConfigSnapshotCommandInput
  | DescribeAggregateComplianceByConfigRulesCommandInput
  | DescribeAggregateComplianceByConformancePacksCommandInput
  | DescribeAggregationAuthorizationsCommandInput
  | DescribeComplianceByConfigRuleCommandInput
  | DescribeComplianceByResourceCommandInput
  | DescribeConfigRuleEvaluationStatusCommandInput
  | DescribeConfigRulesCommandInput
  | DescribeConfigurationAggregatorSourcesStatusCommandInput
  | DescribeConfigurationAggregatorsCommandInput
  | DescribeConfigurationRecorderStatusCommandInput
  | DescribeConfigurationRecordersCommandInput
  | DescribeConformancePackComplianceCommandInput
  | DescribeConformancePackStatusCommandInput
  | DescribeConformancePacksCommandInput
  | DescribeDeliveryChannelStatusCommandInput
  | DescribeDeliveryChannelsCommandInput
  | DescribeOrganizationConfigRuleStatusesCommandInput
  | DescribeOrganizationConfigRulesCommandInput
  | DescribeOrganizationConformancePackStatusesCommandInput
  | DescribeOrganizationConformancePacksCommandInput
  | DescribePendingAggregationRequestsCommandInput
  | DescribeRemediationConfigurationsCommandInput
  | DescribeRemediationExceptionsCommandInput
  | DescribeRemediationExecutionStatusCommandInput
  | DescribeRetentionConfigurationsCommandInput
  | GetAggregateComplianceDetailsByConfigRuleCommandInput
  | GetAggregateConfigRuleComplianceSummaryCommandInput
  | GetAggregateConformancePackComplianceSummaryCommandInput
  | GetAggregateDiscoveredResourceCountsCommandInput
  | GetAggregateResourceConfigCommandInput
  | GetComplianceDetailsByConfigRuleCommandInput
  | GetComplianceDetailsByResourceCommandInput
  | GetComplianceSummaryByConfigRuleCommandInput
  | GetComplianceSummaryByResourceTypeCommandInput
  | GetConformancePackComplianceDetailsCommandInput
  | GetConformancePackComplianceSummaryCommandInput
  | GetCustomRulePolicyCommandInput
  | GetDiscoveredResourceCountsCommandInput
  | GetOrganizationConfigRuleDetailedStatusCommandInput
  | GetOrganizationConformancePackDetailedStatusCommandInput
  | GetOrganizationCustomRulePolicyCommandInput
  | GetResourceConfigHistoryCommandInput
  | GetResourceEvaluationSummaryCommandInput
  | GetStoredQueryCommandInput
  | ListAggregateDiscoveredResourcesCommandInput
  | ListConformancePackComplianceScoresCommandInput
  | ListDiscoveredResourcesCommandInput
  | ListResourceEvaluationsCommandInput
  | ListStoredQueriesCommandInput
  | ListTagsForResourceCommandInput
  | PutAggregationAuthorizationCommandInput
  | PutConfigRuleCommandInput
  | PutConfigurationAggregatorCommandInput
  | PutConfigurationRecorderCommandInput
  | PutConformancePackCommandInput
  | PutDeliveryChannelCommandInput
  | PutEvaluationsCommandInput
  | PutExternalEvaluationCommandInput
  | PutOrganizationConfigRuleCommandInput
  | PutOrganizationConformancePackCommandInput
  | PutRemediationConfigurationsCommandInput
  | PutRemediationExceptionsCommandInput
  | PutResourceConfigCommandInput
  | PutRetentionConfigurationCommandInput
  | PutStoredQueryCommandInput
  | SelectAggregateResourceConfigCommandInput
  | SelectResourceConfigCommandInput
  | StartConfigRulesEvaluationCommandInput
  | StartConfigurationRecorderCommandInput
  | StartRemediationExecutionCommandInput
  | StartResourceEvaluationCommandInput
  | StopConfigurationRecorderCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | BatchGetAggregateResourceConfigCommandOutput
  | BatchGetResourceConfigCommandOutput
  | DeleteAggregationAuthorizationCommandOutput
  | DeleteConfigRuleCommandOutput
  | DeleteConfigurationAggregatorCommandOutput
  | DeleteConfigurationRecorderCommandOutput
  | DeleteConformancePackCommandOutput
  | DeleteDeliveryChannelCommandOutput
  | DeleteEvaluationResultsCommandOutput
  | DeleteOrganizationConfigRuleCommandOutput
  | DeleteOrganizationConformancePackCommandOutput
  | DeletePendingAggregationRequestCommandOutput
  | DeleteRemediationConfigurationCommandOutput
  | DeleteRemediationExceptionsCommandOutput
  | DeleteResourceConfigCommandOutput
  | DeleteRetentionConfigurationCommandOutput
  | DeleteStoredQueryCommandOutput
  | DeliverConfigSnapshotCommandOutput
  | DescribeAggregateComplianceByConfigRulesCommandOutput
  | DescribeAggregateComplianceByConformancePacksCommandOutput
  | DescribeAggregationAuthorizationsCommandOutput
  | DescribeComplianceByConfigRuleCommandOutput
  | DescribeComplianceByResourceCommandOutput
  | DescribeConfigRuleEvaluationStatusCommandOutput
  | DescribeConfigRulesCommandOutput
  | DescribeConfigurationAggregatorSourcesStatusCommandOutput
  | DescribeConfigurationAggregatorsCommandOutput
  | DescribeConfigurationRecorderStatusCommandOutput
  | DescribeConfigurationRecordersCommandOutput
  | DescribeConformancePackComplianceCommandOutput
  | DescribeConformancePackStatusCommandOutput
  | DescribeConformancePacksCommandOutput
  | DescribeDeliveryChannelStatusCommandOutput
  | DescribeDeliveryChannelsCommandOutput
  | DescribeOrganizationConfigRuleStatusesCommandOutput
  | DescribeOrganizationConfigRulesCommandOutput
  | DescribeOrganizationConformancePackStatusesCommandOutput
  | DescribeOrganizationConformancePacksCommandOutput
  | DescribePendingAggregationRequestsCommandOutput
  | DescribeRemediationConfigurationsCommandOutput
  | DescribeRemediationExceptionsCommandOutput
  | DescribeRemediationExecutionStatusCommandOutput
  | DescribeRetentionConfigurationsCommandOutput
  | GetAggregateComplianceDetailsByConfigRuleCommandOutput
  | GetAggregateConfigRuleComplianceSummaryCommandOutput
  | GetAggregateConformancePackComplianceSummaryCommandOutput
  | GetAggregateDiscoveredResourceCountsCommandOutput
  | GetAggregateResourceConfigCommandOutput
  | GetComplianceDetailsByConfigRuleCommandOutput
  | GetComplianceDetailsByResourceCommandOutput
  | GetComplianceSummaryByConfigRuleCommandOutput
  | GetComplianceSummaryByResourceTypeCommandOutput
  | GetConformancePackComplianceDetailsCommandOutput
  | GetConformancePackComplianceSummaryCommandOutput
  | GetCustomRulePolicyCommandOutput
  | GetDiscoveredResourceCountsCommandOutput
  | GetOrganizationConfigRuleDetailedStatusCommandOutput
  | GetOrganizationConformancePackDetailedStatusCommandOutput
  | GetOrganizationCustomRulePolicyCommandOutput
  | GetResourceConfigHistoryCommandOutput
  | GetResourceEvaluationSummaryCommandOutput
  | GetStoredQueryCommandOutput
  | ListAggregateDiscoveredResourcesCommandOutput
  | ListConformancePackComplianceScoresCommandOutput
  | ListDiscoveredResourcesCommandOutput
  | ListResourceEvaluationsCommandOutput
  | ListStoredQueriesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAggregationAuthorizationCommandOutput
  | PutConfigRuleCommandOutput
  | PutConfigurationAggregatorCommandOutput
  | PutConfigurationRecorderCommandOutput
  | PutConformancePackCommandOutput
  | PutDeliveryChannelCommandOutput
  | PutEvaluationsCommandOutput
  | PutExternalEvaluationCommandOutput
  | PutOrganizationConfigRuleCommandOutput
  | PutOrganizationConformancePackCommandOutput
  | PutRemediationConfigurationsCommandOutput
  | PutRemediationExceptionsCommandOutput
  | PutResourceConfigCommandOutput
  | PutRetentionConfigurationCommandOutput
  | PutStoredQueryCommandOutput
  | SelectAggregateResourceConfigCommandOutput
  | SelectResourceConfigCommandOutput
  | StartConfigRulesEvaluationCommandOutput
  | StartConfigurationRecorderCommandOutput
  | StartRemediationExecutionCommandOutput
  | StartResourceEvaluationCommandOutput
  | StopConfigurationRecorderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type ConfigServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ConfigServiceClient class constructor that set the region, credentials and other options.
 */
export interface ConfigServiceClientConfig extends ConfigServiceClientConfigType {}

type ConfigServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ConfigServiceClient class. This is resolved and normalized from the {@link ConfigServiceClientConfig | constructor configuration interface}.
 */
export interface ConfigServiceClientResolvedConfig extends ConfigServiceClientResolvedConfigType {}

/**
 * <fullname>Config</fullname>
 *
 * 		       <p>Config provides a way to keep track of the configurations
 * 			of all the Amazon Web Services resources associated with your Amazon Web Services account. You can
 * 			use Config to get the current and historical configurations of
 * 			each Amazon Web Services resource and also to get information about the relationship
 * 			between the resources. An Amazon Web Services resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p>
 *
 * 		       <p>You can access and manage Config through the Amazon Web Services Management
 * 			Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config
 * 			API, or the Amazon Web Services SDKs for Config. This reference guide contains
 * 			documentation for the Config API and the Amazon Web Services CLI commands that
 * 			you can use to manage Config. The Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about Config features and their associated actions or commands,
 * 			as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer
 * 				Guide</i>.</p>
 */
export class ConfigServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConfigServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ConfigServiceClient class. This is resolved and normalized from the {@link ConfigServiceClientConfig | constructor configuration interface}.
   */
  readonly config: ConfigServiceClientResolvedConfig;

  constructor(configuration: ConfigServiceClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
