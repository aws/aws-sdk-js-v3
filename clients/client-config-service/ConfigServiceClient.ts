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
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import {
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import {
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand";
import {
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand";
import {
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand";
import {
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand";
import {
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import {
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand";
import {
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import {
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand";
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
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand";
import { GetStoredQueryCommandInput, GetStoredQueryCommandOutput } from "./commands/GetStoredQueryCommand";
import {
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
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
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  | GetDiscoveredResourceCountsCommandInput
  | GetOrganizationConfigRuleDetailedStatusCommandInput
  | GetOrganizationConformancePackDetailedStatusCommandInput
  | GetResourceConfigHistoryCommandInput
  | GetStoredQueryCommandInput
  | ListAggregateDiscoveredResourcesCommandInput
  | ListDiscoveredResourcesCommandInput
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
  | GetDiscoveredResourceCountsCommandOutput
  | GetOrganizationConfigRuleDetailedStatusCommandOutput
  | GetOrganizationConformancePackDetailedStatusCommandOutput
  | GetResourceConfigHistoryCommandOutput
  | GetStoredQueryCommandOutput
  | ListAggregateDiscoveredResourcesCommandOutput
  | ListDiscoveredResourcesCommandOutput
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
  | StopConfigurationRecorderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ConfigServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ConfigServiceClient class constructor that set the region, credentials and other options.
 */
export interface ConfigServiceClientConfig extends ConfigServiceClientConfigType {}

type ConfigServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ConfigServiceClient class. This is resolved and normalized from the {@link ConfigServiceClientConfig | constructor configuration interface}.
 */
export interface ConfigServiceClientResolvedConfig extends ConfigServiceClientResolvedConfigType {}

/**
 * <fullname>AWS Config</fullname>
 *
 * 		       <p>AWS Config provides a way to keep track of the configurations
 * 			of all the AWS resources associated with your AWS account. You can
 * 			use AWS Config to get the current and historical configurations of
 * 			each AWS resource and also to get information about the relationship
 * 			between the resources. An AWS resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p>
 *
 * 		       <p>You can access and manage AWS Config through the AWS Management
 * 			Console, the AWS Command Line Interface (AWS CLI), the AWS Config
 * 			API, or the AWS SDKs for AWS Config. This reference guide contains
 * 			documentation for the AWS Config API and the AWS CLI commands that
 * 			you can use to manage AWS Config. The AWS Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about AWS Config features and their associated actions or commands,
 * 			as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS
 * 				Config</a> in the <i>AWS Config Developer
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
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
