// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultConfigServiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateResourceTypesCommandInput,
  AssociateResourceTypesCommandOutput,
} from "./commands/AssociateResourceTypesCommand";
import type {
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
} from "./commands/BatchGetAggregateResourceConfigCommand";
import type {
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
} from "./commands/BatchGetResourceConfigCommand";
import type {
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
} from "./commands/DeleteAggregationAuthorizationCommand";
import type { DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput } from "./commands/DeleteConfigRuleCommand";
import type {
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
} from "./commands/DeleteConfigurationAggregatorCommand";
import type {
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
} from "./commands/DeleteConfigurationRecorderCommand";
import type {
  DeleteConformancePackCommandInput,
  DeleteConformancePackCommandOutput,
} from "./commands/DeleteConformancePackCommand";
import type {
  DeleteDeliveryChannelCommandInput,
  DeleteDeliveryChannelCommandOutput,
} from "./commands/DeleteDeliveryChannelCommand";
import type {
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
} from "./commands/DeleteEvaluationResultsCommand";
import type {
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
} from "./commands/DeleteOrganizationConfigRuleCommand";
import type {
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
} from "./commands/DeleteOrganizationConformancePackCommand";
import type {
  DeletePendingAggregationRequestCommandInput,
  DeletePendingAggregationRequestCommandOutput,
} from "./commands/DeletePendingAggregationRequestCommand";
import type {
  DeleteRemediationConfigurationCommandInput,
  DeleteRemediationConfigurationCommandOutput,
} from "./commands/DeleteRemediationConfigurationCommand";
import type {
  DeleteRemediationExceptionsCommandInput,
  DeleteRemediationExceptionsCommandOutput,
} from "./commands/DeleteRemediationExceptionsCommand";
import type {
  DeleteResourceConfigCommandInput,
  DeleteResourceConfigCommandOutput,
} from "./commands/DeleteResourceConfigCommand";
import type {
  DeleteRetentionConfigurationCommandInput,
  DeleteRetentionConfigurationCommandOutput,
} from "./commands/DeleteRetentionConfigurationCommand";
import type {
  DeleteServiceLinkedConfigurationRecorderCommandInput,
  DeleteServiceLinkedConfigurationRecorderCommandOutput,
} from "./commands/DeleteServiceLinkedConfigurationRecorderCommand";
import type {
  DeleteStoredQueryCommandInput,
  DeleteStoredQueryCommandOutput,
} from "./commands/DeleteStoredQueryCommand";
import type {
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
} from "./commands/DeliverConfigSnapshotCommand";
import type {
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import type {
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "./commands/DescribeAggregateComplianceByConformancePacksCommand";
import type {
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "./commands/DescribeAggregationAuthorizationsCommand";
import type {
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "./commands/DescribeComplianceByConfigRuleCommand";
import type {
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "./commands/DescribeComplianceByResourceCommand";
import type {
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import type {
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "./commands/DescribeConfigRulesCommand";
import type {
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "./commands/DescribeConfigurationAggregatorsCommand";
import type {
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import type {
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "./commands/DescribeConfigurationRecordersCommand";
import type {
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "./commands/DescribeConfigurationRecorderStatusCommand";
import type {
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "./commands/DescribeConformancePackComplianceCommand";
import type {
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "./commands/DescribeConformancePacksCommand";
import type {
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "./commands/DescribeConformancePackStatusCommand";
import type {
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "./commands/DescribeDeliveryChannelsCommand";
import type {
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "./commands/DescribeDeliveryChannelStatusCommand";
import type {
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "./commands/DescribeOrganizationConfigRulesCommand";
import type {
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import type {
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "./commands/DescribeOrganizationConformancePacksCommand";
import type {
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import type {
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "./commands/DescribePendingAggregationRequestsCommand";
import type {
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
} from "./commands/DescribeRemediationConfigurationsCommand";
import type {
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "./commands/DescribeRemediationExceptionsCommand";
import type {
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "./commands/DescribeRemediationExecutionStatusCommand";
import type {
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "./commands/DescribeRetentionConfigurationsCommand";
import type {
  DisassociateResourceTypesCommandInput,
  DisassociateResourceTypesCommandOutput,
} from "./commands/DisassociateResourceTypesCommand";
import type {
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import type {
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import type {
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetAggregateConformancePackComplianceSummaryCommand";
import type {
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import type {
  GetAggregateResourceConfigCommandInput,
  GetAggregateResourceConfigCommandOutput,
} from "./commands/GetAggregateResourceConfigCommand";
import type {
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "./commands/GetComplianceDetailsByConfigRuleCommand";
import type {
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "./commands/GetComplianceDetailsByResourceCommand";
import type {
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
} from "./commands/GetComplianceSummaryByConfigRuleCommand";
import type {
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
} from "./commands/GetComplianceSummaryByResourceTypeCommand";
import type {
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "./commands/GetConformancePackComplianceDetailsCommand";
import type {
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "./commands/GetConformancePackComplianceSummaryCommand";
import type {
  GetCustomRulePolicyCommandInput,
  GetCustomRulePolicyCommandOutput,
} from "./commands/GetCustomRulePolicyCommand";
import type {
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "./commands/GetDiscoveredResourceCountsCommand";
import type {
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import type {
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import type {
  GetOrganizationCustomRulePolicyCommandInput,
  GetOrganizationCustomRulePolicyCommandOutput,
} from "./commands/GetOrganizationCustomRulePolicyCommand";
import type {
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "./commands/GetResourceConfigHistoryCommand";
import type {
  GetResourceEvaluationSummaryCommandInput,
  GetResourceEvaluationSummaryCommandOutput,
} from "./commands/GetResourceEvaluationSummaryCommand";
import type { GetStoredQueryCommandInput, GetStoredQueryCommandOutput } from "./commands/GetStoredQueryCommand";
import type {
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "./commands/ListAggregateDiscoveredResourcesCommand";
import type {
  ListConfigurationRecordersCommandInput,
  ListConfigurationRecordersCommandOutput,
} from "./commands/ListConfigurationRecordersCommand";
import type {
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "./commands/ListConformancePackComplianceScoresCommand";
import type {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import type {
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
} from "./commands/ListResourceEvaluationsCommand";
import type {
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
} from "./commands/ListStoredQueriesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
} from "./commands/PutAggregationAuthorizationCommand";
import type { PutConfigRuleCommandInput, PutConfigRuleCommandOutput } from "./commands/PutConfigRuleCommand";
import type {
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
} from "./commands/PutConfigurationAggregatorCommand";
import type {
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
} from "./commands/PutConfigurationRecorderCommand";
import type {
  PutConformancePackCommandInput,
  PutConformancePackCommandOutput,
} from "./commands/PutConformancePackCommand";
import type {
  PutDeliveryChannelCommandInput,
  PutDeliveryChannelCommandOutput,
} from "./commands/PutDeliveryChannelCommand";
import type { PutEvaluationsCommandInput, PutEvaluationsCommandOutput } from "./commands/PutEvaluationsCommand";
import type {
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
} from "./commands/PutExternalEvaluationCommand";
import type {
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
} from "./commands/PutOrganizationConfigRuleCommand";
import type {
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
} from "./commands/PutOrganizationConformancePackCommand";
import type {
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
} from "./commands/PutRemediationConfigurationsCommand";
import type {
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
} from "./commands/PutRemediationExceptionsCommand";
import type {
  PutResourceConfigCommandInput,
  PutResourceConfigCommandOutput,
} from "./commands/PutResourceConfigCommand";
import type {
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
} from "./commands/PutRetentionConfigurationCommand";
import type {
  PutServiceLinkedConfigurationRecorderCommandInput,
  PutServiceLinkedConfigurationRecorderCommandOutput,
} from "./commands/PutServiceLinkedConfigurationRecorderCommand";
import type { PutStoredQueryCommandInput, PutStoredQueryCommandOutput } from "./commands/PutStoredQueryCommand";
import type {
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "./commands/SelectAggregateResourceConfigCommand";
import type {
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "./commands/SelectResourceConfigCommand";
import type {
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
} from "./commands/StartConfigRulesEvaluationCommand";
import type {
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
} from "./commands/StartConfigurationRecorderCommand";
import type {
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
} from "./commands/StartRemediationExecutionCommand";
import type {
  StartResourceEvaluationCommandInput,
  StartResourceEvaluationCommandOutput,
} from "./commands/StartResourceEvaluationCommand";
import type {
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "./commands/StopConfigurationRecorderCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateResourceTypesCommandInput
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
  | DeleteServiceLinkedConfigurationRecorderCommandInput
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
  | DisassociateResourceTypesCommandInput
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
  | ListConfigurationRecordersCommandInput
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
  | PutServiceLinkedConfigurationRecorderCommandInput
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

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateResourceTypesCommandOutput
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
  | DeleteServiceLinkedConfigurationRecorderCommandOutput
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
  | DisassociateResourceTypesCommandOutput
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
  | ListConfigurationRecordersCommandOutput
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
  | PutServiceLinkedConfigurationRecorderCommandOutput
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

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ConfigServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ConfigServiceClient class constructor that set the region, credentials and other options.
 */
export interface ConfigServiceClientConfig extends ConfigServiceClientConfigType {}

/**
 * @public
 */
export type ConfigServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ConfigServiceClient class. This is resolved and normalized from the {@link ConfigServiceClientConfig | constructor configuration interface}.
 */
export interface ConfigServiceClientResolvedConfig extends ConfigServiceClientResolvedConfigType {}

/**
 * <fullname>Config</fullname>
 *          <p>Config provides a way to keep track of the configurations
 * 			of all the Amazon Web Services resources associated with your Amazon Web Services account. You can
 * 			use Config to get the current and historical configurations of
 * 			each Amazon Web Services resource and also to get information about the relationship
 * 			between the resources. An Amazon Web Services resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p>
 *          <p>You can access and manage Config through the Amazon Web Services Management
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ConfigServiceClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultConfigServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ConfigServiceClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
