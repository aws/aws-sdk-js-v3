// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchGetAggregateResourceConfigCommandInput,
  BatchGetAggregateResourceConfigCommandOutput,
} from "../commands/BatchGetAggregateResourceConfigCommand";
import {
  BatchGetResourceConfigCommandInput,
  BatchGetResourceConfigCommandOutput,
} from "../commands/BatchGetResourceConfigCommand";
import {
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
} from "../commands/DeleteAggregationAuthorizationCommand";
import { DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput } from "../commands/DeleteConfigRuleCommand";
import {
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
} from "../commands/DeleteConfigurationAggregatorCommand";
import {
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
} from "../commands/DeleteConfigurationRecorderCommand";
import {
  DeleteConformancePackCommandInput,
  DeleteConformancePackCommandOutput,
} from "../commands/DeleteConformancePackCommand";
import {
  DeleteDeliveryChannelCommandInput,
  DeleteDeliveryChannelCommandOutput,
} from "../commands/DeleteDeliveryChannelCommand";
import {
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
} from "../commands/DeleteEvaluationResultsCommand";
import {
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
} from "../commands/DeleteOrganizationConfigRuleCommand";
import {
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
} from "../commands/DeleteOrganizationConformancePackCommand";
import {
  DeletePendingAggregationRequestCommandInput,
  DeletePendingAggregationRequestCommandOutput,
} from "../commands/DeletePendingAggregationRequestCommand";
import {
  DeleteRemediationConfigurationCommandInput,
  DeleteRemediationConfigurationCommandOutput,
} from "../commands/DeleteRemediationConfigurationCommand";
import {
  DeleteRemediationExceptionsCommandInput,
  DeleteRemediationExceptionsCommandOutput,
} from "../commands/DeleteRemediationExceptionsCommand";
import {
  DeleteResourceConfigCommandInput,
  DeleteResourceConfigCommandOutput,
} from "../commands/DeleteResourceConfigCommand";
import {
  DeleteRetentionConfigurationCommandInput,
  DeleteRetentionConfigurationCommandOutput,
} from "../commands/DeleteRetentionConfigurationCommand";
import { DeleteStoredQueryCommandInput, DeleteStoredQueryCommandOutput } from "../commands/DeleteStoredQueryCommand";
import {
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
} from "../commands/DeliverConfigSnapshotCommand";
import {
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "../commands/DescribeAggregateComplianceByConfigRulesCommand";
import {
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "../commands/DescribeAggregateComplianceByConformancePacksCommand";
import {
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "../commands/DescribeAggregationAuthorizationsCommand";
import {
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "../commands/DescribeComplianceByConfigRuleCommand";
import {
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "../commands/DescribeComplianceByResourceCommand";
import {
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "../commands/DescribeConfigRuleEvaluationStatusCommand";
import {
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "../commands/DescribeConfigRulesCommand";
import {
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "../commands/DescribeConfigurationAggregatorsCommand";
import {
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "../commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import {
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
} from "../commands/DescribeConfigurationRecordersCommand";
import {
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
} from "../commands/DescribeConfigurationRecorderStatusCommand";
import {
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "../commands/DescribeConformancePackComplianceCommand";
import {
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "../commands/DescribeConformancePacksCommand";
import {
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "../commands/DescribeConformancePackStatusCommand";
import {
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
} from "../commands/DescribeDeliveryChannelsCommand";
import {
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
} from "../commands/DescribeDeliveryChannelStatusCommand";
import {
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
} from "../commands/DescribeOrganizationConfigRulesCommand";
import {
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
} from "../commands/DescribeOrganizationConfigRuleStatusesCommand";
import {
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
} from "../commands/DescribeOrganizationConformancePacksCommand";
import {
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "../commands/DescribeOrganizationConformancePackStatusesCommand";
import {
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "../commands/DescribePendingAggregationRequestsCommand";
import {
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
} from "../commands/DescribeRemediationConfigurationsCommand";
import {
  DescribeRemediationExceptionsCommandInput,
  DescribeRemediationExceptionsCommandOutput,
} from "../commands/DescribeRemediationExceptionsCommand";
import {
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "../commands/DescribeRemediationExecutionStatusCommand";
import {
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "../commands/DescribeRetentionConfigurationsCommand";
import {
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import {
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConfigRuleComplianceSummaryCommand";
import {
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConformancePackComplianceSummaryCommand";
import {
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "../commands/GetAggregateDiscoveredResourceCountsCommand";
import {
  GetAggregateResourceConfigCommandInput,
  GetAggregateResourceConfigCommandOutput,
} from "../commands/GetAggregateResourceConfigCommand";
import {
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetComplianceDetailsByConfigRuleCommand";
import {
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "../commands/GetComplianceDetailsByResourceCommand";
import {
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
} from "../commands/GetComplianceSummaryByConfigRuleCommand";
import {
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
} from "../commands/GetComplianceSummaryByResourceTypeCommand";
import {
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
} from "../commands/GetConformancePackComplianceDetailsCommand";
import {
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "../commands/GetConformancePackComplianceSummaryCommand";
import {
  GetCustomRulePolicyCommandInput,
  GetCustomRulePolicyCommandOutput,
} from "../commands/GetCustomRulePolicyCommand";
import {
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "../commands/GetDiscoveredResourceCountsCommand";
import {
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "../commands/GetOrganizationConfigRuleDetailedStatusCommand";
import {
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
} from "../commands/GetOrganizationConformancePackDetailedStatusCommand";
import {
  GetOrganizationCustomRulePolicyCommandInput,
  GetOrganizationCustomRulePolicyCommandOutput,
} from "../commands/GetOrganizationCustomRulePolicyCommand";
import {
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "../commands/GetResourceConfigHistoryCommand";
import {
  GetResourceEvaluationSummaryCommandInput,
  GetResourceEvaluationSummaryCommandOutput,
} from "../commands/GetResourceEvaluationSummaryCommand";
import { GetStoredQueryCommandInput, GetStoredQueryCommandOutput } from "../commands/GetStoredQueryCommand";
import {
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "../commands/ListAggregateDiscoveredResourcesCommand";
import {
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
} from "../commands/ListConformancePackComplianceScoresCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import {
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
} from "../commands/ListResourceEvaluationsCommand";
import { ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput } from "../commands/ListStoredQueriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAggregationAuthorizationCommandInput,
  PutAggregationAuthorizationCommandOutput,
} from "../commands/PutAggregationAuthorizationCommand";
import { PutConfigRuleCommandInput, PutConfigRuleCommandOutput } from "../commands/PutConfigRuleCommand";
import {
  PutConfigurationAggregatorCommandInput,
  PutConfigurationAggregatorCommandOutput,
} from "../commands/PutConfigurationAggregatorCommand";
import {
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
} from "../commands/PutConfigurationRecorderCommand";
import { PutConformancePackCommandInput, PutConformancePackCommandOutput } from "../commands/PutConformancePackCommand";
import { PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput } from "../commands/PutDeliveryChannelCommand";
import { PutEvaluationsCommandInput, PutEvaluationsCommandOutput } from "../commands/PutEvaluationsCommand";
import {
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
} from "../commands/PutExternalEvaluationCommand";
import {
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
} from "../commands/PutOrganizationConfigRuleCommand";
import {
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
} from "../commands/PutOrganizationConformancePackCommand";
import {
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
} from "../commands/PutRemediationConfigurationsCommand";
import {
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
} from "../commands/PutRemediationExceptionsCommand";
import { PutResourceConfigCommandInput, PutResourceConfigCommandOutput } from "../commands/PutResourceConfigCommand";
import {
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
} from "../commands/PutRetentionConfigurationCommand";
import { PutStoredQueryCommandInput, PutStoredQueryCommandOutput } from "../commands/PutStoredQueryCommand";
import {
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "../commands/SelectAggregateResourceConfigCommand";
import {
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "../commands/SelectResourceConfigCommand";
import {
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
} from "../commands/StartConfigRulesEvaluationCommand";
import {
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
} from "../commands/StartConfigurationRecorderCommand";
import {
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
} from "../commands/StartRemediationExecutionCommand";
import {
  StartResourceEvaluationCommandInput,
  StartResourceEvaluationCommandOutput,
} from "../commands/StartResourceEvaluationCommand";
import {
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
} from "../commands/StopConfigurationRecorderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { ConfigServiceServiceException as __BaseException } from "../models/ConfigServiceServiceException";
import {
  AccountAggregationSource,
  AggregateComplianceByConfigRule,
  AggregateComplianceByConformancePack,
  AggregateComplianceCount,
  AggregateConformancePackCompliance,
  AggregateConformancePackComplianceCount,
  AggregateConformancePackComplianceFilters,
  AggregateConformancePackComplianceSummary,
  AggregateConformancePackComplianceSummaryFilters,
  AggregatedSourceStatus,
  AggregatedSourceStatusType,
  AggregateEvaluationResult,
  AggregateResourceIdentifier,
  AggregationAuthorization,
  BaseConfigurationItem,
  BatchGetAggregateResourceConfigRequest,
  BatchGetAggregateResourceConfigResponse,
  BatchGetResourceConfigRequest,
  BatchGetResourceConfigResponse,
  Compliance,
  ComplianceByConfigRule,
  ComplianceByResource,
  ComplianceContributorCount,
  ComplianceSummary,
  ComplianceSummaryByResourceType,
  ComplianceType,
  ConfigExportDeliveryInfo,
  ConfigRule,
  ConfigRuleComplianceFilters,
  ConfigRuleComplianceSummaryFilters,
  ConfigRuleEvaluationStatus,
  ConfigSnapshotDeliveryProperties,
  ConfigStreamDeliveryInfo,
  ConfigurationAggregator,
  ConfigurationItem,
  ConfigurationRecorder,
  ConfigurationRecorderStatus,
  ConformancePackComplianceFilters,
  ConformancePackComplianceScore,
  ConformancePackComplianceScoresFilters,
  ConformancePackComplianceSummary,
  ConformancePackDetail,
  ConformancePackEvaluationFilters,
  ConformancePackEvaluationResult,
  ConformancePackInputParameter,
  ConformancePackRuleCompliance,
  ConformancePackStatusDetail,
  ConformancePackTemplateValidationException,
  CustomPolicyDetails,
  DeleteAggregationAuthorizationRequest,
  DeleteConfigRuleRequest,
  DeleteConfigurationAggregatorRequest,
  DeleteConfigurationRecorderRequest,
  DeleteConformancePackRequest,
  DeleteDeliveryChannelRequest,
  DeleteEvaluationResultsRequest,
  DeleteEvaluationResultsResponse,
  DeleteOrganizationConfigRuleRequest,
  DeleteOrganizationConformancePackRequest,
  DeletePendingAggregationRequestRequest,
  DeleteRemediationConfigurationRequest,
  DeleteRemediationConfigurationResponse,
  DeleteRemediationExceptionsRequest,
  DeleteRemediationExceptionsResponse,
  DeleteResourceConfigRequest,
  DeleteRetentionConfigurationRequest,
  DeleteStoredQueryRequest,
  DeleteStoredQueryResponse,
  DeliverConfigSnapshotRequest,
  DeliverConfigSnapshotResponse,
  DeliveryChannel,
  DeliveryChannelStatus,
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesResponse,
  DescribeAggregateComplianceByConformancePacksRequest,
  DescribeAggregateComplianceByConformancePacksResponse,
  DescribeAggregationAuthorizationsRequest,
  DescribeAggregationAuthorizationsResponse,
  DescribeComplianceByConfigRuleRequest,
  DescribeComplianceByConfigRuleResponse,
  DescribeComplianceByResourceRequest,
  DescribeComplianceByResourceResponse,
  DescribeConfigRuleEvaluationStatusRequest,
  DescribeConfigRuleEvaluationStatusResponse,
  DescribeConfigRulesFilters,
  DescribeConfigRulesRequest,
  DescribeConfigRulesResponse,
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
  DescribeConfigurationAggregatorsRequest,
  DescribeConfigurationAggregatorsResponse,
  DescribeConfigurationRecordersRequest,
  DescribeConfigurationRecordersResponse,
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
  DescribeConformancePacksRequest,
  DescribeConformancePacksResponse,
  DescribeConformancePackStatusRequest,
  DescribeConformancePackStatusResponse,
  DescribeDeliveryChannelsRequest,
  DescribeDeliveryChannelsResponse,
  DescribeDeliveryChannelStatusRequest,
  DescribeDeliveryChannelStatusResponse,
  DescribeOrganizationConfigRulesRequest,
  DescribeOrganizationConfigRulesResponse,
  DescribeOrganizationConfigRuleStatusesRequest,
  DescribeOrganizationConfigRuleStatusesResponse,
  DescribeOrganizationConformancePacksRequest,
  DescribeOrganizationConformancePacksResponse,
  DescribeOrganizationConformancePackStatusesRequest,
  DescribeOrganizationConformancePackStatusesResponse,
  DescribePendingAggregationRequestsRequest,
  DescribePendingAggregationRequestsResponse,
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationConfigurationsResponse,
  DescribeRemediationExceptionsRequest,
  DescribeRemediationExceptionsResponse,
  DescribeRemediationExecutionStatusRequest,
  DescribeRemediationExecutionStatusResponse,
  DescribeRetentionConfigurationsRequest,
  DescribeRetentionConfigurationsResponse,
  Evaluation,
  EvaluationContext,
  EvaluationModeConfiguration,
  EvaluationResult,
  EvaluationResultIdentifier,
  EvaluationResultQualifier,
  EvaluationStatus,
  ExecutionControls,
  ExternalEvaluation,
  FailedDeleteRemediationExceptionsBatch,
  FailedRemediationBatch,
  FailedRemediationExceptionBatch,
  FieldInfo,
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
  GetAggregateConformancePackComplianceSummaryRequest,
  GetAggregateConformancePackComplianceSummaryResponse,
  GetAggregateDiscoveredResourceCountsRequest,
  GetAggregateDiscoveredResourceCountsResponse,
  GetAggregateResourceConfigRequest,
  GetAggregateResourceConfigResponse,
  GetComplianceDetailsByConfigRuleRequest,
  GetComplianceDetailsByConfigRuleResponse,
  GetComplianceDetailsByResourceRequest,
  GetComplianceDetailsByResourceResponse,
  GetComplianceSummaryByConfigRuleResponse,
  GetComplianceSummaryByResourceTypeRequest,
  GetComplianceSummaryByResourceTypeResponse,
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryResponse,
  GetCustomRulePolicyRequest,
  GetCustomRulePolicyResponse,
  GetDiscoveredResourceCountsRequest,
  GetDiscoveredResourceCountsResponse,
  GetOrganizationConfigRuleDetailedStatusRequest,
  GetOrganizationConfigRuleDetailedStatusResponse,
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
  GetOrganizationCustomRulePolicyRequest,
  GetOrganizationCustomRulePolicyResponse,
  GetResourceConfigHistoryRequest,
  GetResourceConfigHistoryResponse,
  GetResourceEvaluationSummaryRequest,
  GetResourceEvaluationSummaryResponse,
  GetStoredQueryRequest,
  GetStoredQueryResponse,
  GroupedResourceCount,
  IdempotentParameterMismatch,
  InsufficientDeliveryPolicyException,
  InsufficientPermissionsException,
  InvalidConfigurationRecorderNameException,
  InvalidDeliveryChannelNameException,
  InvalidExpressionException,
  InvalidLimitException,
  InvalidNextTokenException,
  InvalidParameterValueException,
  InvalidRecordingGroupException,
  InvalidResultTokenException,
  InvalidRoleException,
  InvalidS3KeyPrefixException,
  InvalidS3KmsKeyArnException,
  InvalidSNSTopicARNException,
  InvalidTimeRangeException,
  LastDeliveryChannelDeleteFailedException,
  LimitExceededException,
  ListAggregateDiscoveredResourcesRequest,
  ListAggregateDiscoveredResourcesResponse,
  ListConformancePackComplianceScoresRequest,
  ListConformancePackComplianceScoresResponse,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResponse,
  ListResourceEvaluationsRequest,
  ListResourceEvaluationsResponse,
  ListStoredQueriesRequest,
  ListStoredQueriesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MaxActiveResourcesExceededException,
  MaxNumberOfConfigRulesExceededException,
  MaxNumberOfConfigurationRecordersExceededException,
  MaxNumberOfConformancePacksExceededException,
  MemberAccountStatus,
  NoAvailableConfigurationRecorderException,
  NoRunningConfigurationRecorderException,
  NoSuchConfigRuleException,
  NoSuchConfigRuleInConformancePackException,
  NoSuchConfigurationAggregatorException,
  NoSuchConfigurationRecorderException,
  NoSuchConformancePackException,
  NoSuchDeliveryChannelException,
  NoSuchOrganizationConfigRuleException,
  NoSuchOrganizationConformancePackException,
  NoSuchRemediationConfigurationException,
  NoSuchRemediationExceptionException,
  NoSuchRetentionConfigurationException,
  OrganizationAccessDeniedException,
  OrganizationAggregationSource,
  OrganizationConfigRule,
  OrganizationConfigRuleStatus,
  OrganizationConfigRuleTriggerType,
  OrganizationConfigRuleTriggerTypeNoSN,
  OrganizationConformancePack,
  OrganizationConformancePackDetailedStatus,
  OrganizationConformancePackStatus,
  OrganizationCustomPolicyRuleMetadataNoPolicy,
  OrganizationCustomRuleMetadata,
  OrganizationManagedRuleMetadata,
  OrganizationResourceDetailedStatusFilters,
  OversizedConfigurationItemException,
  PendingAggregationRequest,
  RecordingGroup,
  Relationship,
  RemediationConfiguration,
  RemediationException,
  RemediationExceptionResourceKey,
  RemediationExecutionStatus,
  RemediationExecutionStep,
  RemediationInProgressException,
  RemediationParameterValue,
  ResourceCount,
  ResourceCountFilters,
  ResourceDetails,
  ResourceEvaluation,
  ResourceEvaluationFilters,
  ResourceFilters,
  ResourceIdentifier,
  ResourceInUseException,
  ResourceKey,
  ResourceNotDiscoveredException,
  ResourceNotFoundException,
  ResourceType,
  ResourceValue,
  RetentionConfiguration,
  Scope,
  Source,
  SourceDetail,
  SsmControls,
  StaticValue,
  StatusDetailFilters,
  StoredQuery,
  StoredQueryMetadata,
  Tag,
  TemplateSSMDocumentDetails,
  TimeWindow,
  ValidationException,
} from "../models/models_0";
import {
  MaxNumberOfDeliveryChannelsExceededException,
  MaxNumberOfOrganizationConfigRulesExceededException,
  MaxNumberOfOrganizationConformancePacksExceededException,
  MaxNumberOfRetentionConfigurationsExceededException,
  NoAvailableDeliveryChannelException,
  NoAvailableOrganizationException,
  NoSuchBucketException,
  OrganizationAllFeaturesNotEnabledException,
  OrganizationConformancePackTemplateValidationException,
  OrganizationCustomPolicyRuleMetadata,
  PutAggregationAuthorizationRequest,
  PutAggregationAuthorizationResponse,
  PutConfigRuleRequest,
  PutConfigurationAggregatorRequest,
  PutConfigurationAggregatorResponse,
  PutConfigurationRecorderRequest,
  PutConformancePackRequest,
  PutConformancePackResponse,
  PutDeliveryChannelRequest,
  PutEvaluationsRequest,
  PutEvaluationsResponse,
  PutExternalEvaluationRequest,
  PutExternalEvaluationResponse,
  PutOrganizationConfigRuleRequest,
  PutOrganizationConfigRuleResponse,
  PutOrganizationConformancePackRequest,
  PutOrganizationConformancePackResponse,
  PutRemediationConfigurationsRequest,
  PutRemediationConfigurationsResponse,
  PutRemediationExceptionsRequest,
  PutRemediationExceptionsResponse,
  PutResourceConfigRequest,
  PutRetentionConfigurationRequest,
  PutRetentionConfigurationResponse,
  PutStoredQueryRequest,
  PutStoredQueryResponse,
  QueryInfo,
  ResourceConcurrentModificationException,
  SelectAggregateResourceConfigRequest,
  SelectAggregateResourceConfigResponse,
  SelectResourceConfigRequest,
  SelectResourceConfigResponse,
  StartConfigRulesEvaluationRequest,
  StartConfigRulesEvaluationResponse,
  StartConfigurationRecorderRequest,
  StartRemediationExecutionRequest,
  StartRemediationExecutionResponse,
  StartResourceEvaluationRequest,
  StartResourceEvaluationResponse,
  StopConfigurationRecorderRequest,
  TagResourceRequest,
  TooManyTagsException,
  UntagResourceRequest,
} from "../models/models_1";

/**
 * serializeAws_json1_1BatchGetAggregateResourceConfigCommand
 */
export const se_BatchGetAggregateResourceConfigCommand = async (
  input: BatchGetAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetAggregateResourceConfig");
  let body: any;
  body = JSON.stringify(se_BatchGetAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetResourceConfigCommand
 */
export const se_BatchGetResourceConfigCommand = async (
  input: BatchGetResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetResourceConfig");
  let body: any;
  body = JSON.stringify(se_BatchGetResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAggregationAuthorizationCommand
 */
export const se_DeleteAggregationAuthorizationCommand = async (
  input: DeleteAggregationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAggregationAuthorization");
  let body: any;
  body = JSON.stringify(se_DeleteAggregationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConfigRuleCommand
 */
export const se_DeleteConfigRuleCommand = async (
  input: DeleteConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConfigRule");
  let body: any;
  body = JSON.stringify(se_DeleteConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConfigurationAggregatorCommand
 */
export const se_DeleteConfigurationAggregatorCommand = async (
  input: DeleteConfigurationAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConfigurationAggregator");
  let body: any;
  body = JSON.stringify(se_DeleteConfigurationAggregatorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConfigurationRecorderCommand
 */
export const se_DeleteConfigurationRecorderCommand = async (
  input: DeleteConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConfigurationRecorder");
  let body: any;
  body = JSON.stringify(se_DeleteConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConformancePackCommand
 */
export const se_DeleteConformancePackCommand = async (
  input: DeleteConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConformancePack");
  let body: any;
  body = JSON.stringify(se_DeleteConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliveryChannelCommand
 */
export const se_DeleteDeliveryChannelCommand = async (
  input: DeleteDeliveryChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliveryChannel");
  let body: any;
  body = JSON.stringify(se_DeleteDeliveryChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEvaluationResultsCommand
 */
export const se_DeleteEvaluationResultsCommand = async (
  input: DeleteEvaluationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEvaluationResults");
  let body: any;
  body = JSON.stringify(se_DeleteEvaluationResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOrganizationConfigRuleCommand
 */
export const se_DeleteOrganizationConfigRuleCommand = async (
  input: DeleteOrganizationConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOrganizationConfigRule");
  let body: any;
  body = JSON.stringify(se_DeleteOrganizationConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOrganizationConformancePackCommand
 */
export const se_DeleteOrganizationConformancePackCommand = async (
  input: DeleteOrganizationConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOrganizationConformancePack");
  let body: any;
  body = JSON.stringify(se_DeleteOrganizationConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePendingAggregationRequestCommand
 */
export const se_DeletePendingAggregationRequestCommand = async (
  input: DeletePendingAggregationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePendingAggregationRequest");
  let body: any;
  body = JSON.stringify(se_DeletePendingAggregationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRemediationConfigurationCommand
 */
export const se_DeleteRemediationConfigurationCommand = async (
  input: DeleteRemediationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRemediationConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteRemediationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRemediationExceptionsCommand
 */
export const se_DeleteRemediationExceptionsCommand = async (
  input: DeleteRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRemediationExceptions");
  let body: any;
  body = JSON.stringify(se_DeleteRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceConfigCommand
 */
export const se_DeleteResourceConfigCommand = async (
  input: DeleteResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceConfig");
  let body: any;
  body = JSON.stringify(se_DeleteResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRetentionConfigurationCommand
 */
export const se_DeleteRetentionConfigurationCommand = async (
  input: DeleteRetentionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRetentionConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteRetentionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStoredQueryCommand
 */
export const se_DeleteStoredQueryCommand = async (
  input: DeleteStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStoredQuery");
  let body: any;
  body = JSON.stringify(se_DeleteStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeliverConfigSnapshotCommand
 */
export const se_DeliverConfigSnapshotCommand = async (
  input: DeliverConfigSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeliverConfigSnapshot");
  let body: any;
  body = JSON.stringify(se_DeliverConfigSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand
 */
export const se_DescribeAggregateComplianceByConfigRulesCommand = async (
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAggregateComplianceByConfigRules");
  let body: any;
  body = JSON.stringify(se_DescribeAggregateComplianceByConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand
 */
export const se_DescribeAggregateComplianceByConformancePacksCommand = async (
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAggregateComplianceByConformancePacks");
  let body: any;
  body = JSON.stringify(se_DescribeAggregateComplianceByConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAggregationAuthorizationsCommand
 */
export const se_DescribeAggregationAuthorizationsCommand = async (
  input: DescribeAggregationAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAggregationAuthorizations");
  let body: any;
  body = JSON.stringify(se_DescribeAggregationAuthorizationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComplianceByConfigRuleCommand
 */
export const se_DescribeComplianceByConfigRuleCommand = async (
  input: DescribeComplianceByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeComplianceByConfigRule");
  let body: any;
  body = JSON.stringify(se_DescribeComplianceByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComplianceByResourceCommand
 */
export const se_DescribeComplianceByResourceCommand = async (
  input: DescribeComplianceByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeComplianceByResource");
  let body: any;
  body = JSON.stringify(se_DescribeComplianceByResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand
 */
export const se_DescribeConfigRuleEvaluationStatusCommand = async (
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigRuleEvaluationStatus");
  let body: any;
  body = JSON.stringify(se_DescribeConfigRuleEvaluationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigRulesCommand
 */
export const se_DescribeConfigRulesCommand = async (
  input: DescribeConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigRules");
  let body: any;
  body = JSON.stringify(se_DescribeConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigurationAggregatorsCommand
 */
export const se_DescribeConfigurationAggregatorsCommand = async (
  input: DescribeConfigurationAggregatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationAggregators");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationAggregatorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand
 */
export const se_DescribeConfigurationAggregatorSourcesStatusCommand = async (
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationAggregatorSourcesStatus");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationAggregatorSourcesStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigurationRecordersCommand
 */
export const se_DescribeConfigurationRecordersCommand = async (
  input: DescribeConfigurationRecordersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationRecorders");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationRecordersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConfigurationRecorderStatusCommand
 */
export const se_DescribeConfigurationRecorderStatusCommand = async (
  input: DescribeConfigurationRecorderStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationRecorderStatus");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationRecorderStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConformancePackComplianceCommand
 */
export const se_DescribeConformancePackComplianceCommand = async (
  input: DescribeConformancePackComplianceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConformancePackCompliance");
  let body: any;
  body = JSON.stringify(se_DescribeConformancePackComplianceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConformancePacksCommand
 */
export const se_DescribeConformancePacksCommand = async (
  input: DescribeConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConformancePacks");
  let body: any;
  body = JSON.stringify(se_DescribeConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConformancePackStatusCommand
 */
export const se_DescribeConformancePackStatusCommand = async (
  input: DescribeConformancePackStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConformancePackStatus");
  let body: any;
  body = JSON.stringify(se_DescribeConformancePackStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveryChannelsCommand
 */
export const se_DescribeDeliveryChannelsCommand = async (
  input: DescribeDeliveryChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveryChannels");
  let body: any;
  body = JSON.stringify(se_DescribeDeliveryChannelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveryChannelStatusCommand
 */
export const se_DescribeDeliveryChannelStatusCommand = async (
  input: DescribeDeliveryChannelStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveryChannelStatus");
  let body: any;
  body = JSON.stringify(se_DescribeDeliveryChannelStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationConfigRulesCommand
 */
export const se_DescribeOrganizationConfigRulesCommand = async (
  input: DescribeOrganizationConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganizationConfigRules");
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand
 */
export const se_DescribeOrganizationConfigRuleStatusesCommand = async (
  input: DescribeOrganizationConfigRuleStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganizationConfigRuleStatuses");
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationConfigRuleStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationConformancePacksCommand
 */
export const se_DescribeOrganizationConformancePacksCommand = async (
  input: DescribeOrganizationConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganizationConformancePacks");
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand
 */
export const se_DescribeOrganizationConformancePackStatusesCommand = async (
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganizationConformancePackStatuses");
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationConformancePackStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePendingAggregationRequestsCommand
 */
export const se_DescribePendingAggregationRequestsCommand = async (
  input: DescribePendingAggregationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePendingAggregationRequests");
  let body: any;
  body = JSON.stringify(se_DescribePendingAggregationRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRemediationConfigurationsCommand
 */
export const se_DescribeRemediationConfigurationsCommand = async (
  input: DescribeRemediationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRemediationConfigurations");
  let body: any;
  body = JSON.stringify(se_DescribeRemediationConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRemediationExceptionsCommand
 */
export const se_DescribeRemediationExceptionsCommand = async (
  input: DescribeRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRemediationExceptions");
  let body: any;
  body = JSON.stringify(se_DescribeRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRemediationExecutionStatusCommand
 */
export const se_DescribeRemediationExecutionStatusCommand = async (
  input: DescribeRemediationExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRemediationExecutionStatus");
  let body: any;
  body = JSON.stringify(se_DescribeRemediationExecutionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRetentionConfigurationsCommand
 */
export const se_DescribeRetentionConfigurationsCommand = async (
  input: DescribeRetentionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRetentionConfigurations");
  let body: any;
  body = JSON.stringify(se_DescribeRetentionConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand
 */
export const se_GetAggregateComplianceDetailsByConfigRuleCommand = async (
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAggregateComplianceDetailsByConfigRule");
  let body: any;
  body = JSON.stringify(se_GetAggregateComplianceDetailsByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand
 */
export const se_GetAggregateConfigRuleComplianceSummaryCommand = async (
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAggregateConfigRuleComplianceSummary");
  let body: any;
  body = JSON.stringify(se_GetAggregateConfigRuleComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand
 */
export const se_GetAggregateConformancePackComplianceSummaryCommand = async (
  input: GetAggregateConformancePackComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAggregateConformancePackComplianceSummary");
  let body: any;
  body = JSON.stringify(se_GetAggregateConformancePackComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand
 */
export const se_GetAggregateDiscoveredResourceCountsCommand = async (
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAggregateDiscoveredResourceCounts");
  let body: any;
  body = JSON.stringify(se_GetAggregateDiscoveredResourceCountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAggregateResourceConfigCommand
 */
export const se_GetAggregateResourceConfigCommand = async (
  input: GetAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAggregateResourceConfig");
  let body: any;
  body = JSON.stringify(se_GetAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand
 */
export const se_GetComplianceDetailsByConfigRuleCommand = async (
  input: GetComplianceDetailsByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceDetailsByConfigRule");
  let body: any;
  body = JSON.stringify(se_GetComplianceDetailsByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceDetailsByResourceCommand
 */
export const se_GetComplianceDetailsByResourceCommand = async (
  input: GetComplianceDetailsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceDetailsByResource");
  let body: any;
  body = JSON.stringify(se_GetComplianceDetailsByResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand
 */
export const se_GetComplianceSummaryByConfigRuleCommand = async (
  input: GetComplianceSummaryByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceSummaryByConfigRule");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand
 */
export const se_GetComplianceSummaryByResourceTypeCommand = async (
  input: GetComplianceSummaryByResourceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceSummaryByResourceType");
  let body: any;
  body = JSON.stringify(se_GetComplianceSummaryByResourceTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConformancePackComplianceDetailsCommand
 */
export const se_GetConformancePackComplianceDetailsCommand = async (
  input: GetConformancePackComplianceDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConformancePackComplianceDetails");
  let body: any;
  body = JSON.stringify(se_GetConformancePackComplianceDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConformancePackComplianceSummaryCommand
 */
export const se_GetConformancePackComplianceSummaryCommand = async (
  input: GetConformancePackComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConformancePackComplianceSummary");
  let body: any;
  body = JSON.stringify(se_GetConformancePackComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCustomRulePolicyCommand
 */
export const se_GetCustomRulePolicyCommand = async (
  input: GetCustomRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCustomRulePolicy");
  let body: any;
  body = JSON.stringify(se_GetCustomRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiscoveredResourceCountsCommand
 */
export const se_GetDiscoveredResourceCountsCommand = async (
  input: GetDiscoveredResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDiscoveredResourceCounts");
  let body: any;
  body = JSON.stringify(se_GetDiscoveredResourceCountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand
 */
export const se_GetOrganizationConfigRuleDetailedStatusCommand = async (
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOrganizationConfigRuleDetailedStatus");
  let body: any;
  body = JSON.stringify(se_GetOrganizationConfigRuleDetailedStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand
 */
export const se_GetOrganizationConformancePackDetailedStatusCommand = async (
  input: GetOrganizationConformancePackDetailedStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOrganizationConformancePackDetailedStatus");
  let body: any;
  body = JSON.stringify(se_GetOrganizationConformancePackDetailedStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOrganizationCustomRulePolicyCommand
 */
export const se_GetOrganizationCustomRulePolicyCommand = async (
  input: GetOrganizationCustomRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOrganizationCustomRulePolicy");
  let body: any;
  body = JSON.stringify(se_GetOrganizationCustomRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceConfigHistoryCommand
 */
export const se_GetResourceConfigHistoryCommand = async (
  input: GetResourceConfigHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceConfigHistory");
  let body: any;
  body = JSON.stringify(se_GetResourceConfigHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceEvaluationSummaryCommand
 */
export const se_GetResourceEvaluationSummaryCommand = async (
  input: GetResourceEvaluationSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceEvaluationSummary");
  let body: any;
  body = JSON.stringify(se_GetResourceEvaluationSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStoredQueryCommand
 */
export const se_GetStoredQueryCommand = async (
  input: GetStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStoredQuery");
  let body: any;
  body = JSON.stringify(se_GetStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAggregateDiscoveredResourcesCommand
 */
export const se_ListAggregateDiscoveredResourcesCommand = async (
  input: ListAggregateDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAggregateDiscoveredResources");
  let body: any;
  body = JSON.stringify(se_ListAggregateDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConformancePackComplianceScoresCommand
 */
export const se_ListConformancePackComplianceScoresCommand = async (
  input: ListConformancePackComplianceScoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConformancePackComplianceScores");
  let body: any;
  body = JSON.stringify(se_ListConformancePackComplianceScoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const se_ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDiscoveredResources");
  let body: any;
  body = JSON.stringify(se_ListDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceEvaluationsCommand
 */
export const se_ListResourceEvaluationsCommand = async (
  input: ListResourceEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceEvaluations");
  let body: any;
  body = JSON.stringify(se_ListResourceEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStoredQueriesCommand
 */
export const se_ListStoredQueriesCommand = async (
  input: ListStoredQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStoredQueries");
  let body: any;
  body = JSON.stringify(se_ListStoredQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAggregationAuthorizationCommand
 */
export const se_PutAggregationAuthorizationCommand = async (
  input: PutAggregationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAggregationAuthorization");
  let body: any;
  body = JSON.stringify(se_PutAggregationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutConfigRuleCommand
 */
export const se_PutConfigRuleCommand = async (
  input: PutConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutConfigRule");
  let body: any;
  body = JSON.stringify(se_PutConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutConfigurationAggregatorCommand
 */
export const se_PutConfigurationAggregatorCommand = async (
  input: PutConfigurationAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutConfigurationAggregator");
  let body: any;
  body = JSON.stringify(se_PutConfigurationAggregatorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutConfigurationRecorderCommand
 */
export const se_PutConfigurationRecorderCommand = async (
  input: PutConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutConfigurationRecorder");
  let body: any;
  body = JSON.stringify(se_PutConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutConformancePackCommand
 */
export const se_PutConformancePackCommand = async (
  input: PutConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutConformancePack");
  let body: any;
  body = JSON.stringify(se_PutConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDeliveryChannelCommand
 */
export const se_PutDeliveryChannelCommand = async (
  input: PutDeliveryChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDeliveryChannel");
  let body: any;
  body = JSON.stringify(se_PutDeliveryChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEvaluationsCommand
 */
export const se_PutEvaluationsCommand = async (
  input: PutEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEvaluations");
  let body: any;
  body = JSON.stringify(se_PutEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutExternalEvaluationCommand
 */
export const se_PutExternalEvaluationCommand = async (
  input: PutExternalEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutExternalEvaluation");
  let body: any;
  body = JSON.stringify(se_PutExternalEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutOrganizationConfigRuleCommand
 */
export const se_PutOrganizationConfigRuleCommand = async (
  input: PutOrganizationConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutOrganizationConfigRule");
  let body: any;
  body = JSON.stringify(se_PutOrganizationConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutOrganizationConformancePackCommand
 */
export const se_PutOrganizationConformancePackCommand = async (
  input: PutOrganizationConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutOrganizationConformancePack");
  let body: any;
  body = JSON.stringify(se_PutOrganizationConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRemediationConfigurationsCommand
 */
export const se_PutRemediationConfigurationsCommand = async (
  input: PutRemediationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRemediationConfigurations");
  let body: any;
  body = JSON.stringify(se_PutRemediationConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRemediationExceptionsCommand
 */
export const se_PutRemediationExceptionsCommand = async (
  input: PutRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRemediationExceptions");
  let body: any;
  body = JSON.stringify(se_PutRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourceConfigCommand
 */
export const se_PutResourceConfigCommand = async (
  input: PutResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourceConfig");
  let body: any;
  body = JSON.stringify(se_PutResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRetentionConfigurationCommand
 */
export const se_PutRetentionConfigurationCommand = async (
  input: PutRetentionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRetentionConfiguration");
  let body: any;
  body = JSON.stringify(se_PutRetentionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutStoredQueryCommand
 */
export const se_PutStoredQueryCommand = async (
  input: PutStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutStoredQuery");
  let body: any;
  body = JSON.stringify(se_PutStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SelectAggregateResourceConfigCommand
 */
export const se_SelectAggregateResourceConfigCommand = async (
  input: SelectAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SelectAggregateResourceConfig");
  let body: any;
  body = JSON.stringify(se_SelectAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SelectResourceConfigCommand
 */
export const se_SelectResourceConfigCommand = async (
  input: SelectResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SelectResourceConfig");
  let body: any;
  body = JSON.stringify(se_SelectResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartConfigRulesEvaluationCommand
 */
export const se_StartConfigRulesEvaluationCommand = async (
  input: StartConfigRulesEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartConfigRulesEvaluation");
  let body: any;
  body = JSON.stringify(se_StartConfigRulesEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartConfigurationRecorderCommand
 */
export const se_StartConfigurationRecorderCommand = async (
  input: StartConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartConfigurationRecorder");
  let body: any;
  body = JSON.stringify(se_StartConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRemediationExecutionCommand
 */
export const se_StartRemediationExecutionCommand = async (
  input: StartRemediationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRemediationExecution");
  let body: any;
  body = JSON.stringify(se_StartRemediationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartResourceEvaluationCommand
 */
export const se_StartResourceEvaluationCommand = async (
  input: StartResourceEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartResourceEvaluation");
  let body: any;
  body = JSON.stringify(se_StartResourceEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopConfigurationRecorderCommand
 */
export const se_StopConfigurationRecorderCommand = async (
  input: StopConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopConfigurationRecorder");
  let body: any;
  body = JSON.stringify(se_StopConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchGetAggregateResourceConfigCommand
 */
export const de_BatchGetAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetAggregateResourceConfigResponse(data, context);
  const response: BatchGetAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError
 */
const de_BatchGetAggregateResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAggregateResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetResourceConfigCommand
 */
export const de_BatchGetResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetResourceConfigResponse(data, context);
  const response: BatchGetResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetResourceConfigCommandError
 */
const de_BatchGetResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAggregationAuthorizationCommand
 */
export const de_DeleteAggregationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAggregationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAggregationAuthorizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAggregationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAggregationAuthorizationCommandError
 */
const de_DeleteAggregationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAggregationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConfigRuleCommand
 */
export const de_DeleteConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConfigRuleCommandError
 */
const de_DeleteConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConfigurationAggregatorCommand
 */
export const de_DeleteConfigurationAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationAggregatorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationAggregatorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationAggregatorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConfigurationAggregatorCommandError
 */
const de_DeleteConfigurationAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConfigurationRecorderCommand
 */
export const de_DeleteConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConfigurationRecorderCommandError
 */
const de_DeleteConfigurationRecorderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationRecorderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await de_NoSuchConfigurationRecorderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConformancePackCommand
 */
export const de_DeleteConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConformancePackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConformancePackCommandError
 */
const de_DeleteConformancePackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConformancePackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await de_NoSuchConformancePackExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeliveryChannelCommand
 */
export const de_DeleteDeliveryChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeliveryChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliveryChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeliveryChannelCommandError
 */
const de_DeleteDeliveryChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LastDeliveryChannelDeleteFailedException":
    case "com.amazonaws.configservice#LastDeliveryChannelDeleteFailedException":
      throw await de_LastDeliveryChannelDeleteFailedExceptionRes(parsedOutput, context);
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await de_NoSuchDeliveryChannelExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEvaluationResultsCommand
 */
export const de_DeleteEvaluationResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEvaluationResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEvaluationResultsResponse(data, context);
  const response: DeleteEvaluationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEvaluationResultsCommandError
 */
const de_DeleteEvaluationResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteOrganizationConfigRuleCommand
 */
export const de_DeleteOrganizationConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOrganizationConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError
 */
const de_DeleteOrganizationConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await de_NoSuchOrganizationConfigRuleExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteOrganizationConformancePackCommand
 */
export const de_DeleteOrganizationConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOrganizationConformancePackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOrganizationConformancePackCommandError
 */
const de_DeleteOrganizationConformancePackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConformancePackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await de_NoSuchOrganizationConformancePackExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePendingAggregationRequestCommand
 */
export const de_DeletePendingAggregationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePendingAggregationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePendingAggregationRequestCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePendingAggregationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePendingAggregationRequestCommandError
 */
const de_DeletePendingAggregationRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePendingAggregationRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRemediationConfigurationCommand
 */
export const de_DeleteRemediationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRemediationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRemediationConfigurationResponse(data, context);
  const response: DeleteRemediationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRemediationConfigurationCommandError
 */
const de_DeleteRemediationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await de_NoSuchRemediationConfigurationExceptionRes(parsedOutput, context);
    case "RemediationInProgressException":
    case "com.amazonaws.configservice#RemediationInProgressException":
      throw await de_RemediationInProgressExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRemediationExceptionsCommand
 */
export const de_DeleteRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRemediationExceptionsResponse(data, context);
  const response: DeleteRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRemediationExceptionsCommandError
 */
const de_DeleteRemediationExceptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationExceptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchRemediationExceptionException":
    case "com.amazonaws.configservice#NoSuchRemediationExceptionException":
      throw await de_NoSuchRemediationExceptionExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourceConfigCommand
 */
export const de_DeleteResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourceConfigCommandError
 */
const de_DeleteResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoRunningConfigurationRecorderException":
    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
      throw await de_NoRunningConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRetentionConfigurationCommand
 */
export const de_DeleteRetentionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRetentionConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRetentionConfigurationCommandError
 */
const de_DeleteRetentionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchRetentionConfigurationException":
    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
      throw await de_NoSuchRetentionConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStoredQueryCommand
 */
export const de_DeleteStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteStoredQueryResponse(data, context);
  const response: DeleteStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStoredQueryCommandError
 */
const de_DeleteStoredQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStoredQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeliverConfigSnapshotCommand
 */
export const de_DeliverConfigSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeliverConfigSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeliverConfigSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeliverConfigSnapshotResponse(data, context);
  const response: DeliverConfigSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeliverConfigSnapshotCommandError
 */
const de_DeliverConfigSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeliverConfigSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "NoRunningConfigurationRecorderException":
    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
      throw await de_NoRunningConfigurationRecorderExceptionRes(parsedOutput, context);
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await de_NoSuchDeliveryChannelExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand
 */
export const de_DescribeAggregateComplianceByConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAggregateComplianceByConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAggregateComplianceByConfigRulesResponse(data, context);
  const response: DescribeAggregateComplianceByConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError
 */
const de_DescribeAggregateComplianceByConfigRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand
 */
export const de_DescribeAggregateComplianceByConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAggregateComplianceByConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAggregateComplianceByConformancePacksResponse(data, context);
  const response: DescribeAggregateComplianceByConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError
 */
const de_DescribeAggregateComplianceByConformancePacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAggregationAuthorizationsCommand
 */
export const de_DescribeAggregationAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregationAuthorizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAggregationAuthorizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAggregationAuthorizationsResponse(data, context);
  const response: DescribeAggregationAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError
 */
const de_DescribeAggregationAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregationAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeComplianceByConfigRuleCommand
 */
export const de_DescribeComplianceByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComplianceByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeComplianceByConfigRuleResponse(data, context);
  const response: DescribeComplianceByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError
 */
const de_DescribeComplianceByConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeComplianceByResourceCommand
 */
export const de_DescribeComplianceByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComplianceByResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeComplianceByResourceResponse(data, context);
  const response: DescribeComplianceByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeComplianceByResourceCommandError
 */
const de_DescribeComplianceByResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand
 */
export const de_DescribeConfigRuleEvaluationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigRuleEvaluationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigRuleEvaluationStatusResponse(data, context);
  const response: DescribeConfigRuleEvaluationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError
 */
const de_DescribeConfigRuleEvaluationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigRulesCommand
 */
export const de_DescribeConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigRulesResponse(data, context);
  const response: DescribeConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigRulesCommandError
 */
const de_DescribeConfigRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorsCommand
 */
export const de_DescribeConfigurationAggregatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationAggregatorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationAggregatorsResponse(data, context);
  const response: DescribeConfigurationAggregatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError
 */
const de_DescribeConfigurationAggregatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand
 */
export const de_DescribeConfigurationAggregatorSourcesStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationAggregatorSourcesStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationAggregatorSourcesStatusResponse(data, context);
  const response: DescribeConfigurationAggregatorSourcesStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError
 */
const de_DescribeConfigurationAggregatorSourcesStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecordersCommand
 */
export const de_DescribeConfigurationRecordersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecordersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationRecordersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationRecordersResponse(data, context);
  const response: DescribeConfigurationRecordersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecordersCommandError
 */
const de_DescribeConfigurationRecordersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecordersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await de_NoSuchConfigurationRecorderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand
 */
export const de_DescribeConfigurationRecorderStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecorderStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationRecorderStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationRecorderStatusResponse(data, context);
  const response: DescribeConfigurationRecorderStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError
 */
const de_DescribeConfigurationRecorderStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecorderStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await de_NoSuchConfigurationRecorderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConformancePackComplianceCommand
 */
export const de_DescribeConformancePackComplianceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConformancePackComplianceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConformancePackComplianceResponse(data, context);
  const response: DescribeConformancePackComplianceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConformancePackComplianceCommandError
 */
const de_DescribeConformancePackComplianceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleInConformancePackException":
    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
      throw await de_NoSuchConfigRuleInConformancePackExceptionRes(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await de_NoSuchConformancePackExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConformancePacksCommand
 */
export const de_DescribeConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConformancePacksResponse(data, context);
  const response: DescribeConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConformancePacksCommandError
 */
const de_DescribeConformancePacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await de_NoSuchConformancePackExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConformancePackStatusCommand
 */
export const de_DescribeConformancePackStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConformancePackStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConformancePackStatusResponse(data, context);
  const response: DescribeConformancePackStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConformancePackStatusCommandError
 */
const de_DescribeConformancePackStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelsCommand
 */
export const de_DescribeDeliveryChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeliveryChannelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeliveryChannelsResponse(data, context);
  const response: DescribeDeliveryChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelsCommandError
 */
const de_DescribeDeliveryChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await de_NoSuchDeliveryChannelExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelStatusCommand
 */
export const de_DescribeDeliveryChannelStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeliveryChannelStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeliveryChannelStatusResponse(data, context);
  const response: DescribeDeliveryChannelStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError
 */
const de_DescribeDeliveryChannelStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await de_NoSuchDeliveryChannelExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRulesCommand
 */
export const de_DescribeOrganizationConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationConfigRulesResponse(data, context);
  const response: DescribeOrganizationConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError
 */
const de_DescribeOrganizationConfigRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await de_NoSuchOrganizationConfigRuleExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand
 */
export const de_DescribeOrganizationConfigRuleStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationConfigRuleStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationConfigRuleStatusesResponse(data, context);
  const response: DescribeOrganizationConfigRuleStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError
 */
const de_DescribeOrganizationConfigRuleStatusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await de_NoSuchOrganizationConfigRuleExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePacksCommand
 */
export const de_DescribeOrganizationConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationConformancePacksResponse(data, context);
  const response: DescribeOrganizationConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError
 */
const de_DescribeOrganizationConformancePacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await de_NoSuchOrganizationConformancePackExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand
 */
export const de_DescribeOrganizationConformancePackStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationConformancePackStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationConformancePackStatusesResponse(data, context);
  const response: DescribeOrganizationConformancePackStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError
 */
const de_DescribeOrganizationConformancePackStatusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await de_NoSuchOrganizationConformancePackExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePendingAggregationRequestsCommand
 */
export const de_DescribePendingAggregationRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingAggregationRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePendingAggregationRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePendingAggregationRequestsResponse(data, context);
  const response: DescribePendingAggregationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePendingAggregationRequestsCommandError
 */
const de_DescribePendingAggregationRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingAggregationRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRemediationConfigurationsCommand
 */
export const de_DescribeRemediationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRemediationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRemediationConfigurationsResponse(data, context);
  const response: DescribeRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRemediationConfigurationsCommandError
 */
const de_DescribeRemediationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeRemediationExceptionsCommand
 */
export const de_DescribeRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRemediationExceptionsResponse(data, context);
  const response: DescribeRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRemediationExceptionsCommandError
 */
const de_DescribeRemediationExceptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExceptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRemediationExecutionStatusCommand
 */
export const de_DescribeRemediationExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRemediationExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRemediationExecutionStatusResponse(data, context);
  const response: DescribeRemediationExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError
 */
const de_DescribeRemediationExecutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExecutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await de_NoSuchRemediationConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRetentionConfigurationsCommand
 */
export const de_DescribeRetentionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRetentionConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRetentionConfigurationsResponse(data, context);
  const response: DescribeRetentionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRetentionConfigurationsCommandError
 */
const de_DescribeRetentionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchRetentionConfigurationException":
    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
      throw await de_NoSuchRetentionConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand
 */
export const de_GetAggregateComplianceDetailsByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAggregateComplianceDetailsByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAggregateComplianceDetailsByConfigRuleResponse(data, context);
  const response: GetAggregateComplianceDetailsByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError
 */
const de_GetAggregateComplianceDetailsByConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand
 */
export const de_GetAggregateConfigRuleComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAggregateConfigRuleComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAggregateConfigRuleComplianceSummaryResponse(data, context);
  const response: GetAggregateConfigRuleComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError
 */
const de_GetAggregateConfigRuleComplianceSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand
 */
export const de_GetAggregateConformancePackComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAggregateConformancePackComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAggregateConformancePackComplianceSummaryResponse(data, context);
  const response: GetAggregateConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError
 */
const de_GetAggregateConformancePackComplianceSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand
 */
export const de_GetAggregateDiscoveredResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAggregateDiscoveredResourceCountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAggregateDiscoveredResourceCountsResponse(data, context);
  const response: GetAggregateDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError
 */
const de_GetAggregateDiscoveredResourceCountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAggregateResourceConfigCommand
 */
export const de_GetAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAggregateResourceConfigResponse(data, context);
  const response: GetAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAggregateResourceConfigCommandError
 */
const de_GetAggregateResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "OversizedConfigurationItemException":
    case "com.amazonaws.configservice#OversizedConfigurationItemException":
      throw await de_OversizedConfigurationItemExceptionRes(parsedOutput, context);
    case "ResourceNotDiscoveredException":
    case "com.amazonaws.configservice#ResourceNotDiscoveredException":
      throw await de_ResourceNotDiscoveredExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand
 */
export const de_GetComplianceDetailsByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceDetailsByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComplianceDetailsByConfigRuleResponse(data, context);
  const response: GetComplianceDetailsByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError
 */
const de_GetComplianceDetailsByConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByResourceCommand
 */
export const de_GetComplianceDetailsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceDetailsByResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComplianceDetailsByResourceResponse(data, context);
  const response: GetComplianceDetailsByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByResourceCommandError
 */
const de_GetComplianceDetailsByResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand
 */
export const de_GetComplianceSummaryByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceSummaryByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComplianceSummaryByConfigRuleResponse(data, context);
  const response: GetComplianceSummaryByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError
 */
const de_GetComplianceSummaryByConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand
 */
export const de_GetComplianceSummaryByResourceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByResourceTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceSummaryByResourceTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComplianceSummaryByResourceTypeResponse(data, context);
  const response: GetComplianceSummaryByResourceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError
 */
const de_GetComplianceSummaryByResourceTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByResourceTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceDetailsCommand
 */
export const de_GetConformancePackComplianceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConformancePackComplianceDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConformancePackComplianceDetailsResponse(data, context);
  const response: GetConformancePackComplianceDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError
 */
const de_GetConformancePackComplianceDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleInConformancePackException":
    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
      throw await de_NoSuchConfigRuleInConformancePackExceptionRes(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await de_NoSuchConformancePackExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceSummaryCommand
 */
export const de_GetConformancePackComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConformancePackComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConformancePackComplianceSummaryResponse(data, context);
  const response: GetConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError
 */
const de_GetConformancePackComplianceSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await de_NoSuchConformancePackExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCustomRulePolicyCommand
 */
export const de_GetCustomRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCustomRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCustomRulePolicyResponse(data, context);
  const response: GetCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCustomRulePolicyCommandError
 */
const de_GetCustomRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomRulePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDiscoveredResourceCountsCommand
 */
export const de_GetDiscoveredResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDiscoveredResourceCountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDiscoveredResourceCountsResponse(data, context);
  const response: GetDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDiscoveredResourceCountsCommandError
 */
const de_GetDiscoveredResourceCountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand
 */
export const de_GetOrganizationConfigRuleDetailedStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOrganizationConfigRuleDetailedStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOrganizationConfigRuleDetailedStatusResponse(data, context);
  const response: GetOrganizationConfigRuleDetailedStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError
 */
const de_GetOrganizationConfigRuleDetailedStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await de_NoSuchOrganizationConfigRuleExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand
 */
export const de_GetOrganizationConformancePackDetailedStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOrganizationConformancePackDetailedStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOrganizationConformancePackDetailedStatusResponse(data, context);
  const response: GetOrganizationConformancePackDetailedStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError
 */
const de_GetOrganizationConformancePackDetailedStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await de_NoSuchOrganizationConformancePackExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOrganizationCustomRulePolicyCommand
 */
export const de_GetOrganizationCustomRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationCustomRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOrganizationCustomRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOrganizationCustomRulePolicyResponse(data, context);
  const response: GetOrganizationCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOrganizationCustomRulePolicyCommandError
 */
const de_GetOrganizationCustomRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationCustomRulePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await de_NoSuchOrganizationConfigRuleExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourceConfigHistoryCommand
 */
export const de_GetResourceConfigHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceConfigHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceConfigHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceConfigHistoryResponse(data, context);
  const response: GetResourceConfigHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourceConfigHistoryCommandError
 */
const de_GetResourceConfigHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceConfigHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.configservice#InvalidTimeRangeException":
      throw await de_InvalidTimeRangeExceptionRes(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ResourceNotDiscoveredException":
    case "com.amazonaws.configservice#ResourceNotDiscoveredException":
      throw await de_ResourceNotDiscoveredExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourceEvaluationSummaryCommand
 */
export const de_GetResourceEvaluationSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEvaluationSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceEvaluationSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceEvaluationSummaryResponse(data, context);
  const response: GetResourceEvaluationSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourceEvaluationSummaryCommandError
 */
const de_GetResourceEvaluationSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEvaluationSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetStoredQueryCommand
 */
export const de_GetStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStoredQueryResponse(data, context);
  const response: GetStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetStoredQueryCommandError
 */
const de_GetStoredQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStoredQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand
 */
export const de_ListAggregateDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregateDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAggregateDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAggregateDiscoveredResourcesResponse(data, context);
  const response: ListAggregateDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError
 */
const de_ListAggregateDiscoveredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregateDiscoveredResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListConformancePackComplianceScoresCommand
 */
export const de_ListConformancePackComplianceScoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConformancePackComplianceScoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConformancePackComplianceScoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConformancePackComplianceScoresResponse(data, context);
  const response: ListConformancePackComplianceScoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConformancePackComplianceScoresCommandError
 */
const de_ListConformancePackComplianceScoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConformancePackComplianceScoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const de_ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDiscoveredResourcesResponse(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesCommandError
 */
const de_ListDiscoveredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceEvaluationsCommand
 */
export const de_ListResourceEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceEvaluationsResponse(data, context);
  const response: ListResourceEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceEvaluationsCommandError
 */
const de_ListResourceEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.configservice#InvalidTimeRangeException":
      throw await de_InvalidTimeRangeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStoredQueriesCommand
 */
export const de_ListStoredQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStoredQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStoredQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStoredQueriesResponse(data, context);
  const response: ListStoredQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStoredQueriesCommandError
 */
const de_ListStoredQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStoredQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAggregationAuthorizationCommand
 */
export const de_PutAggregationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAggregationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAggregationAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAggregationAuthorizationResponse(data, context);
  const response: PutAggregationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAggregationAuthorizationCommandError
 */
const de_PutAggregationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAggregationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutConfigRuleCommand
 */
export const de_PutConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutConfigRuleCommandError
 */
const de_PutConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MaxNumberOfConfigRulesExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConfigRulesExceededException":
      throw await de_MaxNumberOfConfigRulesExceededExceptionRes(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutConfigurationAggregatorCommand
 */
export const de_PutConfigurationAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationAggregatorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConfigurationAggregatorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutConfigurationAggregatorResponse(data, context);
  const response: PutConfigurationAggregatorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutConfigurationAggregatorCommandError
 */
const de_PutConfigurationAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.configservice#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.configservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await de_OrganizationAllFeaturesNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutConfigurationRecorderCommand
 */
export const de_PutConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutConfigurationRecorderCommandError
 */
const de_PutConfigurationRecorderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationRecorderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRecorderNameException":
    case "com.amazonaws.configservice#InvalidConfigurationRecorderNameException":
      throw await de_InvalidConfigurationRecorderNameExceptionRes(parsedOutput, context);
    case "InvalidRecordingGroupException":
    case "com.amazonaws.configservice#InvalidRecordingGroupException":
      throw await de_InvalidRecordingGroupExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.configservice#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "MaxNumberOfConfigurationRecordersExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConfigurationRecordersExceededException":
      throw await de_MaxNumberOfConfigurationRecordersExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutConformancePackCommand
 */
export const de_PutConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConformancePackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutConformancePackResponse(data, context);
  const response: PutConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutConformancePackCommandError
 */
const de_PutConformancePackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConformancePackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConformancePackTemplateValidationException":
    case "com.amazonaws.configservice#ConformancePackTemplateValidationException":
      throw await de_ConformancePackTemplateValidationExceptionRes(parsedOutput, context);
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MaxNumberOfConformancePacksExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConformancePacksExceededException":
      throw await de_MaxNumberOfConformancePacksExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutDeliveryChannelCommand
 */
export const de_PutDeliveryChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliveryChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDeliveryChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDeliveryChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutDeliveryChannelCommandError
 */
const de_PutDeliveryChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliveryChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientDeliveryPolicyException":
    case "com.amazonaws.configservice#InsufficientDeliveryPolicyException":
      throw await de_InsufficientDeliveryPolicyExceptionRes(parsedOutput, context);
    case "InvalidDeliveryChannelNameException":
    case "com.amazonaws.configservice#InvalidDeliveryChannelNameException":
      throw await de_InvalidDeliveryChannelNameExceptionRes(parsedOutput, context);
    case "InvalidS3KeyPrefixException":
    case "com.amazonaws.configservice#InvalidS3KeyPrefixException":
      throw await de_InvalidS3KeyPrefixExceptionRes(parsedOutput, context);
    case "InvalidS3KmsKeyArnException":
    case "com.amazonaws.configservice#InvalidS3KmsKeyArnException":
      throw await de_InvalidS3KmsKeyArnExceptionRes(parsedOutput, context);
    case "InvalidSNSTopicARNException":
    case "com.amazonaws.configservice#InvalidSNSTopicARNException":
      throw await de_InvalidSNSTopicARNExceptionRes(parsedOutput, context);
    case "MaxNumberOfDeliveryChannelsExceededException":
    case "com.amazonaws.configservice#MaxNumberOfDeliveryChannelsExceededException":
      throw await de_MaxNumberOfDeliveryChannelsExceededExceptionRes(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await de_NoAvailableConfigurationRecorderExceptionRes(parsedOutput, context);
    case "NoSuchBucketException":
    case "com.amazonaws.configservice#NoSuchBucketException":
      throw await de_NoSuchBucketExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutEvaluationsCommand
 */
export const de_PutEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEvaluationsResponse(data, context);
  const response: PutEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEvaluationsCommandError
 */
const de_PutEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidResultTokenException":
    case "com.amazonaws.configservice#InvalidResultTokenException":
      throw await de_InvalidResultTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutExternalEvaluationCommand
 */
export const de_PutExternalEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutExternalEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutExternalEvaluationResponse(data, context);
  const response: PutExternalEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutExternalEvaluationCommandError
 */
const de_PutExternalEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutOrganizationConfigRuleCommand
 */
export const de_PutOrganizationConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutOrganizationConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutOrganizationConfigRuleResponse(data, context);
  const response: PutOrganizationConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutOrganizationConfigRuleCommandError
 */
const de_PutOrganizationConfigRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConfigRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MaxNumberOfOrganizationConfigRulesExceededException":
    case "com.amazonaws.configservice#MaxNumberOfOrganizationConfigRulesExceededException":
      throw await de_MaxNumberOfOrganizationConfigRulesExceededExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await de_OrganizationAllFeaturesNotEnabledExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutOrganizationConformancePackCommand
 */
export const de_PutOrganizationConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutOrganizationConformancePackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutOrganizationConformancePackResponse(data, context);
  const response: PutOrganizationConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutOrganizationConformancePackCommandError
 */
const de_PutOrganizationConformancePackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConformancePackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "MaxNumberOfOrganizationConformancePacksExceededException":
    case "com.amazonaws.configservice#MaxNumberOfOrganizationConformancePacksExceededException":
      throw await de_MaxNumberOfOrganizationConformancePacksExceededExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await de_OrganizationAccessDeniedExceptionRes(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await de_OrganizationAllFeaturesNotEnabledExceptionRes(parsedOutput, context);
    case "OrganizationConformancePackTemplateValidationException":
    case "com.amazonaws.configservice#OrganizationConformancePackTemplateValidationException":
      throw await de_OrganizationConformancePackTemplateValidationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRemediationConfigurationsCommand
 */
export const de_PutRemediationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRemediationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRemediationConfigurationsResponse(data, context);
  const response: PutRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRemediationConfigurationsCommandError
 */
const de_PutRemediationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRemediationExceptionsCommand
 */
export const de_PutRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRemediationExceptionsResponse(data, context);
  const response: PutRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRemediationExceptionsCommandError
 */
const de_PutRemediationExceptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationExceptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourceConfigCommand
 */
export const de_PutResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourceConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourceConfigCommandError
 */
const de_PutResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "MaxActiveResourcesExceededException":
    case "com.amazonaws.configservice#MaxActiveResourcesExceededException":
      throw await de_MaxActiveResourcesExceededExceptionRes(parsedOutput, context);
    case "NoRunningConfigurationRecorderException":
    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
      throw await de_NoRunningConfigurationRecorderExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRetentionConfigurationCommand
 */
export const de_PutRetentionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRetentionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRetentionConfigurationResponse(data, context);
  const response: PutRetentionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRetentionConfigurationCommandError
 */
const de_PutRetentionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MaxNumberOfRetentionConfigurationsExceededException":
    case "com.amazonaws.configservice#MaxNumberOfRetentionConfigurationsExceededException":
      throw await de_MaxNumberOfRetentionConfigurationsExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutStoredQueryCommand
 */
export const de_PutStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutStoredQueryResponse(data, context);
  const response: PutStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutStoredQueryCommandError
 */
const de_PutStoredQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStoredQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceConcurrentModificationException":
    case "com.amazonaws.configservice#ResourceConcurrentModificationException":
      throw await de_ResourceConcurrentModificationExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.configservice#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SelectAggregateResourceConfigCommand
 */
export const de_SelectAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SelectAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SelectAggregateResourceConfigResponse(data, context);
  const response: SelectAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SelectAggregateResourceConfigCommandError
 */
const de_SelectAggregateResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidExpressionException":
    case "com.amazonaws.configservice#InvalidExpressionException":
      throw await de_InvalidExpressionExceptionRes(parsedOutput, context);
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await de_NoSuchConfigurationAggregatorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SelectResourceConfigCommand
 */
export const de_SelectResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SelectResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SelectResourceConfigResponse(data, context);
  const response: SelectResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SelectResourceConfigCommandError
 */
const de_SelectResourceConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectResourceConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidExpressionException":
    case "com.amazonaws.configservice#InvalidExpressionException":
      throw await de_InvalidExpressionExceptionRes(parsedOutput, context);
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await de_InvalidLimitExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartConfigRulesEvaluationCommand
 */
export const de_StartConfigRulesEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigRulesEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartConfigRulesEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartConfigRulesEvaluationResponse(data, context);
  const response: StartConfigRulesEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartConfigRulesEvaluationCommandError
 */
const de_StartConfigRulesEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigRulesEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.configservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await de_NoSuchConfigRuleExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartConfigurationRecorderCommand
 */
export const de_StartConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartConfigurationRecorderCommandError
 */
const de_StartConfigurationRecorderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationRecorderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoAvailableDeliveryChannelException":
    case "com.amazonaws.configservice#NoAvailableDeliveryChannelException":
      throw await de_NoAvailableDeliveryChannelExceptionRes(parsedOutput, context);
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await de_NoSuchConfigurationRecorderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartRemediationExecutionCommand
 */
export const de_StartRemediationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRemediationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartRemediationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartRemediationExecutionResponse(data, context);
  const response: StartRemediationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartRemediationExecutionCommandError
 */
const de_StartRemediationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRemediationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await de_NoSuchRemediationConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartResourceEvaluationCommand
 */
export const de_StartResourceEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartResourceEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartResourceEvaluationResponse(data, context);
  const response: StartResourceEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartResourceEvaluationCommandError
 */
const de_StartResourceEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatch":
    case "com.amazonaws.configservice#IdempotentParameterMismatch":
      throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopConfigurationRecorderCommand
 */
export const de_StopConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopConfigurationRecorderCommandError
 */
const de_StopConfigurationRecorderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopConfigurationRecorderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await de_NoSuchConfigurationRecorderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.configservice#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConformancePackTemplateValidationExceptionRes
 */
const de_ConformancePackTemplateValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConformancePackTemplateValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConformancePackTemplateValidationException(body, context);
  const exception = new ConformancePackTemplateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchRes
 */
const de_IdempotentParameterMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatch> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatch(body, context);
  const exception = new IdempotentParameterMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientDeliveryPolicyExceptionRes
 */
const de_InsufficientDeliveryPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDeliveryPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientDeliveryPolicyException(body, context);
  const exception = new InsufficientDeliveryPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientPermissionsExceptionRes
 */
const de_InsufficientPermissionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPermissionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientPermissionsException(body, context);
  const exception = new InsufficientPermissionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionRes
 */
const de_InvalidConfigurationRecorderNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRecorderNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidConfigurationRecorderNameException(body, context);
  const exception = new InvalidConfigurationRecorderNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeliveryChannelNameExceptionRes
 */
const de_InvalidDeliveryChannelNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeliveryChannelNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeliveryChannelNameException(body, context);
  const exception = new InvalidDeliveryChannelNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidExpressionExceptionRes
 */
const de_InvalidExpressionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExpressionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExpressionException(body, context);
  const exception = new InvalidExpressionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLimitExceptionRes
 */
const de_InvalidLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLimitException(body, context);
  const exception = new InvalidLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRecordingGroupExceptionRes
 */
const de_InvalidRecordingGroupExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRecordingGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRecordingGroupException(body, context);
  const exception = new InvalidRecordingGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResultTokenExceptionRes
 */
const de_InvalidResultTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResultTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResultTokenException(body, context);
  const exception = new InvalidResultTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRoleExceptionRes
 */
const de_InvalidRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRoleException(body, context);
  const exception = new InvalidRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3KeyPrefixExceptionRes
 */
const de_InvalidS3KeyPrefixExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyPrefixException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3KeyPrefixException(body, context);
  const exception = new InvalidS3KeyPrefixException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3KmsKeyArnExceptionRes
 */
const de_InvalidS3KmsKeyArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KmsKeyArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3KmsKeyArnException(body, context);
  const exception = new InvalidS3KmsKeyArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSNSTopicARNExceptionRes
 */
const de_InvalidSNSTopicARNExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSNSTopicARNException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSNSTopicARNException(body, context);
  const exception = new InvalidSNSTopicARNException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTimeRangeExceptionRes
 */
const de_InvalidTimeRangeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTimeRangeException(body, context);
  const exception = new InvalidTimeRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionRes
 */
const de_LastDeliveryChannelDeleteFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LastDeliveryChannelDeleteFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LastDeliveryChannelDeleteFailedException(body, context);
  const exception = new LastDeliveryChannelDeleteFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxActiveResourcesExceededExceptionRes
 */
const de_MaxActiveResourcesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxActiveResourcesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxActiveResourcesExceededException(body, context);
  const exception = new MaxActiveResourcesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionRes
 */
const de_MaxNumberOfConfigRulesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConfigRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfConfigRulesExceededException(body, context);
  const exception = new MaxNumberOfConfigRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionRes
 */
const de_MaxNumberOfConfigurationRecordersExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConfigurationRecordersExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfConfigurationRecordersExceededException(body, context);
  const exception = new MaxNumberOfConfigurationRecordersExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionRes
 */
const de_MaxNumberOfConformancePacksExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConformancePacksExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfConformancePacksExceededException(body, context);
  const exception = new MaxNumberOfConformancePacksExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionRes
 */
const de_MaxNumberOfDeliveryChannelsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfDeliveryChannelsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfDeliveryChannelsExceededException(body, context);
  const exception = new MaxNumberOfDeliveryChannelsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionRes
 */
const de_MaxNumberOfOrganizationConfigRulesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfOrganizationConfigRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfOrganizationConfigRulesExceededException(body, context);
  const exception = new MaxNumberOfOrganizationConfigRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionRes
 */
const de_MaxNumberOfOrganizationConformancePacksExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfOrganizationConformancePacksExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfOrganizationConformancePacksExceededException(body, context);
  const exception = new MaxNumberOfOrganizationConformancePacksExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionRes
 */
const de_MaxNumberOfRetentionConfigurationsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfRetentionConfigurationsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxNumberOfRetentionConfigurationsExceededException(body, context);
  const exception = new MaxNumberOfRetentionConfigurationsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionRes
 */
const de_NoAvailableConfigurationRecorderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoAvailableConfigurationRecorderException(body, context);
  const exception = new NoAvailableConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAvailableDeliveryChannelExceptionRes
 */
const de_NoAvailableDeliveryChannelExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableDeliveryChannelException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoAvailableDeliveryChannelException(body, context);
  const exception = new NoAvailableDeliveryChannelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAvailableOrganizationExceptionRes
 */
const de_NoAvailableOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoAvailableOrganizationException(body, context);
  const exception = new NoAvailableOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoRunningConfigurationRecorderExceptionRes
 */
const de_NoRunningConfigurationRecorderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoRunningConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoRunningConfigurationRecorderException(body, context);
  const exception = new NoRunningConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchBucketExceptionRes
 */
const de_NoSuchBucketExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchBucketException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchBucketException(body, context);
  const exception = new NoSuchBucketException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchConfigRuleExceptionRes
 */
const de_NoSuchConfigRuleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchConfigRuleException(body, context);
  const exception = new NoSuchConfigRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionRes
 */
const de_NoSuchConfigRuleInConformancePackExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigRuleInConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchConfigRuleInConformancePackException(body, context);
  const exception = new NoSuchConfigRuleInConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionRes
 */
const de_NoSuchConfigurationAggregatorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigurationAggregatorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchConfigurationAggregatorException(body, context);
  const exception = new NoSuchConfigurationAggregatorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchConfigurationRecorderExceptionRes
 */
const de_NoSuchConfigurationRecorderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchConfigurationRecorderException(body, context);
  const exception = new NoSuchConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchConformancePackExceptionRes
 */
const de_NoSuchConformancePackExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchConformancePackException(body, context);
  const exception = new NoSuchConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchDeliveryChannelExceptionRes
 */
const de_NoSuchDeliveryChannelExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchDeliveryChannelException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchDeliveryChannelException(body, context);
  const exception = new NoSuchDeliveryChannelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionRes
 */
const de_NoSuchOrganizationConfigRuleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOrganizationConfigRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchOrganizationConfigRuleException(body, context);
  const exception = new NoSuchOrganizationConfigRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionRes
 */
const de_NoSuchOrganizationConformancePackExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOrganizationConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchOrganizationConformancePackException(body, context);
  const exception = new NoSuchOrganizationConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchRemediationConfigurationExceptionRes
 */
const de_NoSuchRemediationConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRemediationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchRemediationConfigurationException(body, context);
  const exception = new NoSuchRemediationConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchRemediationExceptionExceptionRes
 */
const de_NoSuchRemediationExceptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRemediationExceptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchRemediationExceptionException(body, context);
  const exception = new NoSuchRemediationExceptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchRetentionConfigurationExceptionRes
 */
const de_NoSuchRetentionConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRetentionConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchRetentionConfigurationException(body, context);
  const exception = new NoSuchRetentionConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationAccessDeniedExceptionRes
 */
const de_OrganizationAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationAccessDeniedException(body, context);
  const exception = new OrganizationAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionRes
 */
const de_OrganizationAllFeaturesNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationAllFeaturesNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationAllFeaturesNotEnabledException(body, context);
  const exception = new OrganizationAllFeaturesNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionRes
 */
const de_OrganizationConformancePackTemplateValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationConformancePackTemplateValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationConformancePackTemplateValidationException(body, context);
  const exception = new OrganizationConformancePackTemplateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OversizedConfigurationItemExceptionRes
 */
const de_OversizedConfigurationItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OversizedConfigurationItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OversizedConfigurationItemException(body, context);
  const exception = new OversizedConfigurationItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RemediationInProgressExceptionRes
 */
const de_RemediationInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RemediationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RemediationInProgressException(body, context);
  const exception = new RemediationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceConcurrentModificationExceptionRes
 */
const de_ResourceConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceConcurrentModificationException(body, context);
  const exception = new ResourceConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotDiscoveredExceptionRes
 */
const de_ResourceNotDiscoveredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotDiscoveredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotDiscoveredException(body, context);
  const exception = new ResourceNotDiscoveredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccountAggregationSource
 */
const se_AccountAggregationSource = (input: AccountAggregationSource, context: __SerdeContext): any => {
  return {
    ...(input.AccountIds != null && { AccountIds: se_AccountAggregationSourceAccountList(input.AccountIds, context) }),
    ...(input.AllAwsRegions != null && { AllAwsRegions: input.AllAwsRegions }),
    ...(input.AwsRegions != null && { AwsRegions: se_AggregatorRegionList(input.AwsRegions, context) }),
  };
};

/**
 * serializeAws_json1_1AccountAggregationSourceAccountList
 */
const se_AccountAggregationSourceAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AccountAggregationSourceList
 */
const se_AccountAggregationSourceList = (input: AccountAggregationSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AccountAggregationSource(entry, context);
    });
};

/**
 * serializeAws_json1_1AggregateConformancePackComplianceFilters
 */
const se_AggregateConformancePackComplianceFilters = (
  input: AggregateConformancePackComplianceFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
  };
};

/**
 * serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters
 */
const se_AggregateConformancePackComplianceSummaryFilters = (
  input: AggregateConformancePackComplianceSummaryFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
  };
};

/**
 * serializeAws_json1_1AggregatedSourceStatusTypeList
 */
const se_AggregatedSourceStatusTypeList = (
  input: (AggregatedSourceStatusType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AggregateResourceIdentifier
 */
const se_AggregateResourceIdentifier = (input: AggregateResourceIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.SourceAccountId != null && { SourceAccountId: input.SourceAccountId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
  };
};

/**
 * serializeAws_json1_1AggregatorRegionList
 */
const se_AggregatorRegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchGetAggregateResourceConfigRequest
 */
const se_BatchGetAggregateResourceConfigRequest = (
  input: BatchGetAggregateResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.ResourceIdentifiers != null && {
      ResourceIdentifiers: se_ResourceIdentifiersList(input.ResourceIdentifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchGetResourceConfigRequest
 */
const se_BatchGetResourceConfigRequest = (input: BatchGetResourceConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceKeys != null && { resourceKeys: se_ResourceKeys(input.resourceKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ComplianceResourceTypes
 */
const se_ComplianceResourceTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ComplianceTypes
 */
const se_ComplianceTypes = (input: (ComplianceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConfigRule
 */
const se_ConfigRule = (input: ConfigRule, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleArn != null && { ConfigRuleArn: input.ConfigRuleArn }),
    ...(input.ConfigRuleId != null && { ConfigRuleId: input.ConfigRuleId }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ConfigRuleState != null && { ConfigRuleState: input.ConfigRuleState }),
    ...(input.CreatedBy != null && { CreatedBy: input.CreatedBy }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EvaluationModes != null && { EvaluationModes: se_EvaluationModes(input.EvaluationModes, context) }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.Scope != null && { Scope: se_Scope(input.Scope, context) }),
    ...(input.Source != null && { Source: se_Source(input.Source, context) }),
  };
};

/**
 * serializeAws_json1_1ConfigRuleComplianceFilters
 */
const se_ConfigRuleComplianceFilters = (input: ConfigRuleComplianceFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1ConfigRuleComplianceSummaryFilters
 */
const se_ConfigRuleComplianceSummaryFilters = (
  input: ConfigRuleComplianceSummaryFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
  };
};

/**
 * serializeAws_json1_1ConfigRuleNames
 */
const se_ConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConfigSnapshotDeliveryProperties
 */
const se_ConfigSnapshotDeliveryProperties = (input: ConfigSnapshotDeliveryProperties, context: __SerdeContext): any => {
  return {
    ...(input.deliveryFrequency != null && { deliveryFrequency: input.deliveryFrequency }),
  };
};

/**
 * serializeAws_json1_1ConfigurationAggregatorNameList
 */
const se_ConfigurationAggregatorNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConfigurationRecorder
 */
const se_ConfigurationRecorder = (input: ConfigurationRecorder, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.recordingGroup != null && { recordingGroup: se_RecordingGroup(input.recordingGroup, context) }),
    ...(input.roleARN != null && { roleARN: input.roleARN }),
  };
};

/**
 * serializeAws_json1_1ConfigurationRecorderNameList
 */
const se_ConfigurationRecorderNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConformancePackComplianceFilters
 */
const se_ConformancePackComplianceFilters = (input: ConformancePackComplianceFilters, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: se_ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConformancePackComplianceResourceIds
 */
const se_ConformancePackComplianceResourceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConformancePackComplianceScoresFilters
 */
const se_ConformancePackComplianceScoresFilters = (
  input: ConformancePackComplianceScoresFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: se_ConformancePackNameFilter(input.ConformancePackNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConformancePackConfigRuleNames
 */
const se_ConformancePackConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConformancePackEvaluationFilters
 */
const se_ConformancePackEvaluationFilters = (input: ConformancePackEvaluationFilters, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: se_ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    }),
    ...(input.ResourceIds != null && {
      ResourceIds: se_ConformancePackComplianceResourceIds(input.ResourceIds, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ConformancePackInputParameter
 */
const se_ConformancePackInputParameter = (input: ConformancePackInputParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_json1_1ConformancePackInputParameters
 */
const se_ConformancePackInputParameters = (input: ConformancePackInputParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConformancePackInputParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ConformancePackNameFilter
 */
const se_ConformancePackNameFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConformancePackNamesList
 */
const se_ConformancePackNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConformancePackNamesToSummarizeList
 */
const se_ConformancePackNamesToSummarizeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CustomPolicyDetails
 */
const se_CustomPolicyDetails = (input: CustomPolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.EnableDebugLogDelivery != null && { EnableDebugLogDelivery: input.EnableDebugLogDelivery }),
    ...(input.PolicyRuntime != null && { PolicyRuntime: input.PolicyRuntime }),
    ...(input.PolicyText != null && { PolicyText: input.PolicyText }),
  };
};

/**
 * serializeAws_json1_1DebugLogDeliveryAccounts
 */
const se_DebugLogDeliveryAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteAggregationAuthorizationRequest
 */
const se_DeleteAggregationAuthorizationRequest = (
  input: DeleteAggregationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizedAccountId != null && { AuthorizedAccountId: input.AuthorizedAccountId }),
    ...(input.AuthorizedAwsRegion != null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
  };
};

/**
 * serializeAws_json1_1DeleteConfigRuleRequest
 */
const se_DeleteConfigRuleRequest = (input: DeleteConfigRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1DeleteConfigurationAggregatorRequest
 */
const se_DeleteConfigurationAggregatorRequest = (
  input: DeleteConfigurationAggregatorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteConfigurationRecorderRequest
 */
const se_DeleteConfigurationRecorderRequest = (
  input: DeleteConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

/**
 * serializeAws_json1_1DeleteConformancePackRequest
 */
const se_DeleteConformancePackRequest = (input: DeleteConformancePackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
  };
};

/**
 * serializeAws_json1_1DeleteDeliveryChannelRequest
 */
const se_DeleteDeliveryChannelRequest = (input: DeleteDeliveryChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryChannelName != null && { DeliveryChannelName: input.DeliveryChannelName }),
  };
};

/**
 * serializeAws_json1_1DeleteEvaluationResultsRequest
 */
const se_DeleteEvaluationResultsRequest = (input: DeleteEvaluationResultsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1DeleteOrganizationConfigRuleRequest
 */
const se_DeleteOrganizationConfigRuleRequest = (
  input: DeleteOrganizationConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1DeleteOrganizationConformancePackRequest
 */
const se_DeleteOrganizationConformancePackRequest = (
  input: DeleteOrganizationConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
  };
};

/**
 * serializeAws_json1_1DeletePendingAggregationRequestRequest
 */
const se_DeletePendingAggregationRequestRequest = (
  input: DeletePendingAggregationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequesterAccountId != null && { RequesterAccountId: input.RequesterAccountId }),
    ...(input.RequesterAwsRegion != null && { RequesterAwsRegion: input.RequesterAwsRegion }),
  };
};

/**
 * serializeAws_json1_1DeleteRemediationConfigurationRequest
 */
const se_DeleteRemediationConfigurationRequest = (
  input: DeleteRemediationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1DeleteRemediationExceptionsRequest
 */
const se_DeleteRemediationExceptionsRequest = (
  input: DeleteRemediationExceptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: se_RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceConfigRequest
 */
const se_DeleteResourceConfigRequest = (input: DeleteResourceConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1DeleteRetentionConfigurationRequest
 */
const se_DeleteRetentionConfigurationRequest = (
  input: DeleteRetentionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionConfigurationName != null && { RetentionConfigurationName: input.RetentionConfigurationName }),
  };
};

/**
 * serializeAws_json1_1DeleteStoredQueryRequest
 */
const se_DeleteStoredQueryRequest = (input: DeleteStoredQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

/**
 * serializeAws_json1_1DeliverConfigSnapshotRequest
 */
const se_DeliverConfigSnapshotRequest = (input: DeliverConfigSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.deliveryChannelName != null && { deliveryChannelName: input.deliveryChannelName }),
  };
};

/**
 * serializeAws_json1_1DeliveryChannel
 */
const se_DeliveryChannel = (input: DeliveryChannel, context: __SerdeContext): any => {
  return {
    ...(input.configSnapshotDeliveryProperties != null && {
      configSnapshotDeliveryProperties: se_ConfigSnapshotDeliveryProperties(
        input.configSnapshotDeliveryProperties,
        context
      ),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.s3KeyPrefix != null && { s3KeyPrefix: input.s3KeyPrefix }),
    ...(input.s3KmsKeyArn != null && { s3KmsKeyArn: input.s3KmsKeyArn }),
    ...(input.snsTopicARN != null && { snsTopicARN: input.snsTopicARN }),
  };
};

/**
 * serializeAws_json1_1DeliveryChannelNameList
 */
const se_DeliveryChannelNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest
 */
const se_DescribeAggregateComplianceByConfigRulesRequest = (
  input: DescribeAggregateComplianceByConfigRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: se_ConfigRuleComplianceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest
 */
const se_DescribeAggregateComplianceByConformancePacksRequest = (
  input: DescribeAggregateComplianceByConformancePacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: se_AggregateConformancePackComplianceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAggregationAuthorizationsRequest
 */
const se_DescribeAggregationAuthorizationsRequest = (
  input: DescribeAggregationAuthorizationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeComplianceByConfigRuleRequest
 */
const se_DescribeComplianceByConfigRuleRequest = (
  input: DescribeComplianceByConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && { ComplianceTypes: se_ComplianceTypes(input.ComplianceTypes, context) }),
    ...(input.ConfigRuleNames != null && { ConfigRuleNames: se_ConfigRuleNames(input.ConfigRuleNames, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeComplianceByResourceRequest
 */
const se_DescribeComplianceByResourceRequest = (
  input: DescribeComplianceByResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && { ComplianceTypes: se_ComplianceTypes(input.ComplianceTypes, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest
 */
const se_DescribeConfigRuleEvaluationStatusRequest = (
  input: DescribeConfigRuleEvaluationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && { ConfigRuleNames: se_ConfigRuleNames(input.ConfigRuleNames, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigRulesFilters
 */
const se_DescribeConfigRulesFilters = (input: DescribeConfigRulesFilters, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigRulesRequest
 */
const se_DescribeConfigRulesRequest = (input: DescribeConfigRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleNames != null && { ConfigRuleNames: se_ConfigRuleNames(input.ConfigRuleNames, context) }),
    ...(input.Filters != null && { Filters: se_DescribeConfigRulesFilters(input.Filters, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest
 */
const se_DescribeConfigurationAggregatorSourcesStatusRequest = (
  input: DescribeConfigurationAggregatorSourcesStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UpdateStatus != null && { UpdateStatus: se_AggregatedSourceStatusTypeList(input.UpdateStatus, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigurationAggregatorsRequest
 */
const se_DescribeConfigurationAggregatorsRequest = (
  input: DescribeConfigurationAggregatorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorNames != null && {
      ConfigurationAggregatorNames: se_ConfigurationAggregatorNameList(input.ConfigurationAggregatorNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigurationRecordersRequest
 */
const se_DescribeConfigurationRecordersRequest = (
  input: DescribeConfigurationRecordersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderNames != null && {
      ConfigurationRecorderNames: se_ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeConfigurationRecorderStatusRequest
 */
const se_DescribeConfigurationRecorderStatusRequest = (
  input: DescribeConfigurationRecorderStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderNames != null && {
      ConfigurationRecorderNames: se_ConfigurationRecorderNameList(input.ConfigurationRecorderNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeConformancePackComplianceRequest
 */
const se_DescribeConformancePackComplianceRequest = (
  input: DescribeConformancePackComplianceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.Filters != null && { Filters: se_ConformancePackComplianceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConformancePacksRequest
 */
const se_DescribeConformancePacksRequest = (input: DescribeConformancePacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: se_ConformancePackNamesList(input.ConformancePackNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeConformancePackStatusRequest
 */
const se_DescribeConformancePackStatusRequest = (
  input: DescribeConformancePackStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: se_ConformancePackNamesList(input.ConformancePackNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDeliveryChannelsRequest
 */
const se_DescribeDeliveryChannelsRequest = (input: DescribeDeliveryChannelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryChannelNames != null && {
      DeliveryChannelNames: se_DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeDeliveryChannelStatusRequest
 */
const se_DescribeDeliveryChannelStatusRequest = (
  input: DescribeDeliveryChannelStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryChannelNames != null && {
      DeliveryChannelNames: se_DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationConfigRulesRequest
 */
const se_DescribeOrganizationConfigRulesRequest = (
  input: DescribeOrganizationConfigRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleNames != null && {
      OrganizationConfigRuleNames: se_OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest
 */
const se_DescribeOrganizationConfigRuleStatusesRequest = (
  input: DescribeOrganizationConfigRuleStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleNames != null && {
      OrganizationConfigRuleNames: se_OrganizationConfigRuleNames(input.OrganizationConfigRuleNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationConformancePacksRequest
 */
const se_DescribeOrganizationConformancePacksRequest = (
  input: DescribeOrganizationConformancePacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackNames != null && {
      OrganizationConformancePackNames: se_OrganizationConformancePackNames(
        input.OrganizationConformancePackNames,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest
 */
const se_DescribeOrganizationConformancePackStatusesRequest = (
  input: DescribeOrganizationConformancePackStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackNames != null && {
      OrganizationConformancePackNames: se_OrganizationConformancePackNames(
        input.OrganizationConformancePackNames,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1DescribePendingAggregationRequestsRequest
 */
const se_DescribePendingAggregationRequestsRequest = (
  input: DescribePendingAggregationRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeRemediationConfigurationsRequest
 */
const se_DescribeRemediationConfigurationsRequest = (
  input: DescribeRemediationConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && { ConfigRuleNames: se_ConfigRuleNames(input.ConfigRuleNames, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeRemediationExceptionsRequest
 */
const se_DescribeRemediationExceptionsRequest = (
  input: DescribeRemediationExceptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: se_RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeRemediationExecutionStatusRequest
 */
const se_DescribeRemediationExecutionStatusRequest = (
  input: DescribeRemediationExecutionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceKeys != null && { ResourceKeys: se_ResourceKeys(input.ResourceKeys, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeRetentionConfigurationsRequest
 */
const se_DescribeRetentionConfigurationsRequest = (
  input: DescribeRetentionConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RetentionConfigurationNames != null && {
      RetentionConfigurationNames: se_RetentionConfigurationNameList(input.RetentionConfigurationNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1Evaluation
 */
const se_Evaluation = (input: Evaluation, context: __SerdeContext): any => {
  return {
    ...(input.Annotation != null && { Annotation: input.Annotation }),
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceType != null && { ComplianceResourceType: input.ComplianceResourceType }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.OrderingTimestamp != null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1EvaluationContext
 */
const se_EvaluationContext = (input: EvaluationContext, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationContextIdentifier != null && {
      EvaluationContextIdentifier: input.EvaluationContextIdentifier,
    }),
  };
};

/**
 * serializeAws_json1_1EvaluationModeConfiguration
 */
const se_EvaluationModeConfiguration = (input: EvaluationModeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_json1_1EvaluationModes
 */
const se_EvaluationModes = (input: EvaluationModeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EvaluationModeConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1Evaluations
 */
const se_Evaluations = (input: Evaluation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Evaluation(entry, context);
    });
};

/**
 * serializeAws_json1_1ExcludedAccounts
 */
const se_ExcludedAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExecutionControls
 */
const se_ExecutionControls = (input: ExecutionControls, context: __SerdeContext): any => {
  return {
    ...(input.SsmControls != null && { SsmControls: se_SsmControls(input.SsmControls, context) }),
  };
};

/**
 * serializeAws_json1_1ExternalEvaluation
 */
const se_ExternalEvaluation = (input: ExternalEvaluation, context: __SerdeContext): any => {
  return {
    ...(input.Annotation != null && { Annotation: input.Annotation }),
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceType != null && { ComplianceResourceType: input.ComplianceResourceType }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.OrderingTimestamp != null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest
 */
const se_GetAggregateComplianceDetailsByConfigRuleRequest = (
  input: GetAggregateComplianceDetailsByConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest
 */
const se_GetAggregateConfigRuleComplianceSummaryRequest = (
  input: GetAggregateConfigRuleComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: se_ConfigRuleComplianceSummaryFilters(input.Filters, context) }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest
 */
const se_GetAggregateConformancePackComplianceSummaryRequest = (
  input: GetAggregateConformancePackComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && {
      Filters: se_AggregateConformancePackComplianceSummaryFilters(input.Filters, context),
    }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest
 */
const se_GetAggregateDiscoveredResourceCountsRequest = (
  input: GetAggregateDiscoveredResourceCountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: se_ResourceCountFilters(input.Filters, context) }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetAggregateResourceConfigRequest
 */
const se_GetAggregateResourceConfigRequest = (
  input: GetAggregateResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.ResourceIdentifier != null && {
      ResourceIdentifier: se_AggregateResourceIdentifier(input.ResourceIdentifier, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest
 */
const se_GetComplianceDetailsByConfigRuleRequest = (
  input: GetComplianceDetailsByConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && { ComplianceTypes: se_ComplianceTypes(input.ComplianceTypes, context) }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetComplianceDetailsByResourceRequest
 */
const se_GetComplianceDetailsByResourceRequest = (
  input: GetComplianceDetailsByResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && { ComplianceTypes: se_ComplianceTypes(input.ComplianceTypes, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceEvaluationId != null && { ResourceEvaluationId: input.ResourceEvaluationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest
 */
const se_GetComplianceSummaryByResourceTypeRequest = (
  input: GetComplianceSummaryByResourceTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceTypes != null && { ResourceTypes: se_ResourceTypes(input.ResourceTypes, context) }),
  };
};

/**
 * serializeAws_json1_1GetConformancePackComplianceDetailsRequest
 */
const se_GetConformancePackComplianceDetailsRequest = (
  input: GetConformancePackComplianceDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.Filters != null && { Filters: se_ConformancePackEvaluationFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetConformancePackComplianceSummaryRequest
 */
const se_GetConformancePackComplianceSummaryRequest = (
  input: GetConformancePackComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: se_ConformancePackNamesToSummarizeList(input.ConformancePackNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetCustomRulePolicyRequest
 */
const se_GetCustomRulePolicyRequest = (input: GetCustomRulePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1GetDiscoveredResourceCountsRequest
 */
const se_GetDiscoveredResourceCountsRequest = (
  input: GetDiscoveredResourceCountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceTypes != null && { resourceTypes: se_ResourceTypes(input.resourceTypes, context) }),
  };
};

/**
 * serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest
 */
const se_GetOrganizationConfigRuleDetailedStatusRequest = (
  input: GetOrganizationConfigRuleDetailedStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_StatusDetailFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest
 */
const se_GetOrganizationConformancePackDetailedStatusRequest = (
  input: GetOrganizationConformancePackDetailedStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_OrganizationResourceDetailedStatusFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
  };
};

/**
 * serializeAws_json1_1GetOrganizationCustomRulePolicyRequest
 */
const se_GetOrganizationCustomRulePolicyRequest = (
  input: GetOrganizationCustomRulePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

/**
 * serializeAws_json1_1GetResourceConfigHistoryRequest
 */
const se_GetResourceConfigHistoryRequest = (input: GetResourceConfigHistoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.chronologicalOrder != null && { chronologicalOrder: input.chronologicalOrder }),
    ...(input.earlierTime != null && { earlierTime: Math.round(input.earlierTime.getTime() / 1000) }),
    ...(input.laterTime != null && { laterTime: Math.round(input.laterTime.getTime() / 1000) }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceId != null && { resourceId: input.resourceId }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

/**
 * serializeAws_json1_1GetResourceEvaluationSummaryRequest
 */
const se_GetResourceEvaluationSummaryRequest = (
  input: GetResourceEvaluationSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceEvaluationId != null && { ResourceEvaluationId: input.ResourceEvaluationId }),
  };
};

/**
 * serializeAws_json1_1GetStoredQueryRequest
 */
const se_GetStoredQueryRequest = (input: GetStoredQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

/**
 * serializeAws_json1_1ListAggregateDiscoveredResourcesRequest
 */
const se_ListAggregateDiscoveredResourcesRequest = (
  input: ListAggregateDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: se_ResourceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ListConformancePackComplianceScoresRequest
 */
const se_ListConformancePackComplianceScoresRequest = (
  input: ListConformancePackComplianceScoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_ConformancePackComplianceScoresFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesRequest
 */
const se_ListDiscoveredResourcesRequest = (input: ListDiscoveredResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeDeletedResources != null && { includeDeletedResources: input.includeDeletedResources }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceIds != null && { resourceIds: se_ResourceIdList(input.resourceIds, context) }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

/**
 * serializeAws_json1_1ListResourceEvaluationsRequest
 */
const se_ListResourceEvaluationsRequest = (input: ListResourceEvaluationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ResourceEvaluationFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListStoredQueriesRequest
 */
const se_ListStoredQueriesRequest = (input: ListStoredQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1OrganizationAggregationSource
 */
const se_OrganizationAggregationSource = (input: OrganizationAggregationSource, context: __SerdeContext): any => {
  return {
    ...(input.AllAwsRegions != null && { AllAwsRegions: input.AllAwsRegions }),
    ...(input.AwsRegions != null && { AwsRegions: se_AggregatorRegionList(input.AwsRegions, context) }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1OrganizationConfigRuleNames
 */
const se_OrganizationConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs
 */
const se_OrganizationConfigRuleTriggerTypeNoSNs = (
  input: (OrganizationConfigRuleTriggerTypeNoSN | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OrganizationConfigRuleTriggerTypes
 */
const se_OrganizationConfigRuleTriggerTypes = (
  input: (OrganizationConfigRuleTriggerType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OrganizationConformancePackNames
 */
const se_OrganizationConformancePackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OrganizationCustomPolicyRuleMetadata
 */
const se_OrganizationCustomPolicyRuleMetadata = (
  input: OrganizationCustomPolicyRuleMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.DebugLogDeliveryAccounts != null && {
      DebugLogDeliveryAccounts: se_DebugLogDeliveryAccounts(input.DebugLogDeliveryAccounts, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.OrganizationConfigRuleTriggerTypes != null && {
      OrganizationConfigRuleTriggerTypes: se_OrganizationConfigRuleTriggerTypeNoSNs(
        input.OrganizationConfigRuleTriggerTypes,
        context
      ),
    }),
    ...(input.PolicyRuntime != null && { PolicyRuntime: input.PolicyRuntime }),
    ...(input.PolicyText != null && { PolicyText: input.PolicyText }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: se_ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

/**
 * serializeAws_json1_1OrganizationCustomRuleMetadata
 */
const se_OrganizationCustomRuleMetadata = (input: OrganizationCustomRuleMetadata, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.LambdaFunctionArn != null && { LambdaFunctionArn: input.LambdaFunctionArn }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.OrganizationConfigRuleTriggerTypes != null && {
      OrganizationConfigRuleTriggerTypes: se_OrganizationConfigRuleTriggerTypes(
        input.OrganizationConfigRuleTriggerTypes,
        context
      ),
    }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: se_ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

/**
 * serializeAws_json1_1OrganizationManagedRuleMetadata
 */
const se_OrganizationManagedRuleMetadata = (input: OrganizationManagedRuleMetadata, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: se_ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.RuleIdentifier != null && { RuleIdentifier: input.RuleIdentifier }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

/**
 * serializeAws_json1_1OrganizationResourceDetailedStatusFilters
 */
const se_OrganizationResourceDetailedStatusFilters = (
  input: OrganizationResourceDetailedStatusFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1PutAggregationAuthorizationRequest
 */
const se_PutAggregationAuthorizationRequest = (
  input: PutAggregationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizedAccountId != null && { AuthorizedAccountId: input.AuthorizedAccountId }),
    ...(input.AuthorizedAwsRegion != null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutConfigRuleRequest
 */
const se_PutConfigRuleRequest = (input: PutConfigRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRule != null && { ConfigRule: se_ConfigRule(input.ConfigRule, context) }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutConfigurationAggregatorRequest
 */
const se_PutConfigurationAggregatorRequest = (
  input: PutConfigurationAggregatorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAggregationSources != null && {
      AccountAggregationSources: se_AccountAggregationSourceList(input.AccountAggregationSources, context),
    }),
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.OrganizationAggregationSource != null && {
      OrganizationAggregationSource: se_OrganizationAggregationSource(input.OrganizationAggregationSource, context),
    }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutConfigurationRecorderRequest
 */
const se_PutConfigurationRecorderRequest = (input: PutConfigurationRecorderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationRecorder != null && {
      ConfigurationRecorder: se_ConfigurationRecorder(input.ConfigurationRecorder, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutConformancePackRequest
 */
const se_PutConformancePackRequest = (input: PutConformancePackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConformancePackInputParameters != null && {
      ConformancePackInputParameters: se_ConformancePackInputParameters(input.ConformancePackInputParameters, context),
    }),
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.DeliveryS3Bucket != null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
    ...(input.DeliveryS3KeyPrefix != null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
    ...(input.TemplateBody != null && { TemplateBody: input.TemplateBody }),
    ...(input.TemplateS3Uri != null && { TemplateS3Uri: input.TemplateS3Uri }),
    ...(input.TemplateSSMDocumentDetails != null && {
      TemplateSSMDocumentDetails: se_TemplateSSMDocumentDetails(input.TemplateSSMDocumentDetails, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutDeliveryChannelRequest
 */
const se_PutDeliveryChannelRequest = (input: PutDeliveryChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryChannel != null && { DeliveryChannel: se_DeliveryChannel(input.DeliveryChannel, context) }),
  };
};

/**
 * serializeAws_json1_1PutEvaluationsRequest
 */
const se_PutEvaluationsRequest = (input: PutEvaluationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Evaluations != null && { Evaluations: se_Evaluations(input.Evaluations, context) }),
    ...(input.ResultToken != null && { ResultToken: input.ResultToken }),
    ...(input.TestMode != null && { TestMode: input.TestMode }),
  };
};

/**
 * serializeAws_json1_1PutExternalEvaluationRequest
 */
const se_PutExternalEvaluationRequest = (input: PutExternalEvaluationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ExternalEvaluation != null && {
      ExternalEvaluation: se_ExternalEvaluation(input.ExternalEvaluation, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutOrganizationConfigRuleRequest
 */
const se_PutOrganizationConfigRuleRequest = (input: PutOrganizationConfigRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExcludedAccounts != null && { ExcludedAccounts: se_ExcludedAccounts(input.ExcludedAccounts, context) }),
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
    ...(input.OrganizationCustomPolicyRuleMetadata != null && {
      OrganizationCustomPolicyRuleMetadata: se_OrganizationCustomPolicyRuleMetadata(
        input.OrganizationCustomPolicyRuleMetadata,
        context
      ),
    }),
    ...(input.OrganizationCustomRuleMetadata != null && {
      OrganizationCustomRuleMetadata: se_OrganizationCustomRuleMetadata(input.OrganizationCustomRuleMetadata, context),
    }),
    ...(input.OrganizationManagedRuleMetadata != null && {
      OrganizationManagedRuleMetadata: se_OrganizationManagedRuleMetadata(
        input.OrganizationManagedRuleMetadata,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1PutOrganizationConformancePackRequest
 */
const se_PutOrganizationConformancePackRequest = (
  input: PutOrganizationConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackInputParameters != null && {
      ConformancePackInputParameters: se_ConformancePackInputParameters(input.ConformancePackInputParameters, context),
    }),
    ...(input.DeliveryS3Bucket != null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
    ...(input.DeliveryS3KeyPrefix != null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
    ...(input.ExcludedAccounts != null && { ExcludedAccounts: se_ExcludedAccounts(input.ExcludedAccounts, context) }),
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
    ...(input.TemplateBody != null && { TemplateBody: input.TemplateBody }),
    ...(input.TemplateS3Uri != null && { TemplateS3Uri: input.TemplateS3Uri }),
  };
};

/**
 * serializeAws_json1_1PutRemediationConfigurationsRequest
 */
const se_PutRemediationConfigurationsRequest = (
  input: PutRemediationConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RemediationConfigurations != null && {
      RemediationConfigurations: se_RemediationConfigurations(input.RemediationConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutRemediationExceptionsRequest
 */
const se_PutRemediationExceptionsRequest = (input: PutRemediationExceptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ExpirationTime != null && { ExpirationTime: Math.round(input.ExpirationTime.getTime() / 1000) }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: se_RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutResourceConfigRequest
 */
const se_PutResourceConfigRequest = (input: PutResourceConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutRetentionConfigurationRequest
 */
const se_PutRetentionConfigurationRequest = (input: PutRetentionConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.RetentionPeriodInDays != null && { RetentionPeriodInDays: input.RetentionPeriodInDays }),
  };
};

/**
 * serializeAws_json1_1PutStoredQueryRequest
 */
const se_PutStoredQueryRequest = (input: PutStoredQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.StoredQuery != null && { StoredQuery: se_StoredQuery(input.StoredQuery, context) }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1RecordingGroup
 */
const se_RecordingGroup = (input: RecordingGroup, context: __SerdeContext): any => {
  return {
    ...(input.allSupported != null && { allSupported: input.allSupported }),
    ...(input.includeGlobalResourceTypes != null && { includeGlobalResourceTypes: input.includeGlobalResourceTypes }),
    ...(input.resourceTypes != null && { resourceTypes: se_ResourceTypeList(input.resourceTypes, context) }),
  };
};

/**
 * serializeAws_json1_1ReevaluateConfigRuleNames
 */
const se_ReevaluateConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RemediationConfiguration
 */
const se_RemediationConfiguration = (input: RemediationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Automatic != null && { Automatic: input.Automatic }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.CreatedByService != null && { CreatedByService: input.CreatedByService }),
    ...(input.ExecutionControls != null && {
      ExecutionControls: se_ExecutionControls(input.ExecutionControls, context),
    }),
    ...(input.MaximumAutomaticAttempts != null && { MaximumAutomaticAttempts: input.MaximumAutomaticAttempts }),
    ...(input.Parameters != null && { Parameters: se_RemediationParameters(input.Parameters, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.RetryAttemptSeconds != null && { RetryAttemptSeconds: input.RetryAttemptSeconds }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.TargetVersion != null && { TargetVersion: input.TargetVersion }),
  };
};

/**
 * serializeAws_json1_1RemediationConfigurations
 */
const se_RemediationConfigurations = (input: RemediationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RemediationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1RemediationExceptionResourceKey
 */
const se_RemediationExceptionResourceKey = (input: RemediationExceptionResourceKey, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1RemediationExceptionResourceKeys
 */
const se_RemediationExceptionResourceKeys = (
  input: RemediationExceptionResourceKey[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RemediationExceptionResourceKey(entry, context);
    });
};

/**
 * serializeAws_json1_1RemediationParameters
 */
const se_RemediationParameters = (input: Record<string, RemediationParameterValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RemediationParameterValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RemediationParameterValue
 */
const se_RemediationParameterValue = (input: RemediationParameterValue, context: __SerdeContext): any => {
  return {
    ...(input.ResourceValue != null && { ResourceValue: se_ResourceValue(input.ResourceValue, context) }),
    ...(input.StaticValue != null && { StaticValue: se_StaticValue(input.StaticValue, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceCountFilters
 */
const se_ResourceCountFilters = (input: ResourceCountFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ResourceDetails
 */
const se_ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return {
    ...(input.ResourceConfiguration != null && { ResourceConfiguration: input.ResourceConfiguration }),
    ...(input.ResourceConfigurationSchemaType != null && {
      ResourceConfigurationSchemaType: input.ResourceConfigurationSchemaType,
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ResourceEvaluationFilters
 */
const se_ResourceEvaluationFilters = (input: ResourceEvaluationFilters, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationContextIdentifier != null && {
      EvaluationContextIdentifier: input.EvaluationContextIdentifier,
    }),
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
    ...(input.TimeWindow != null && { TimeWindow: se_TimeWindow(input.TimeWindow, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceFilters
 */
const se_ResourceFilters = (input: ResourceFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

/**
 * serializeAws_json1_1ResourceIdentifiersList
 */
const se_ResourceIdentifiersList = (input: AggregateResourceIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AggregateResourceIdentifier(entry, context);
    });
};

/**
 * serializeAws_json1_1ResourceIdList
 */
const se_ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceKey
 */
const se_ResourceKey = (input: ResourceKey, context: __SerdeContext): any => {
  return {
    ...(input.resourceId != null && { resourceId: input.resourceId }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

/**
 * serializeAws_json1_1ResourceKeys
 */
const se_ResourceKeys = (input: ResourceKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceKey(entry, context);
    });
};

/**
 * serializeAws_json1_1ResourceTypeList
 */
const se_ResourceTypeList = (input: (ResourceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTypes
 */
const se_ResourceTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTypesScope
 */
const se_ResourceTypesScope = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceValue
 */
const se_ResourceValue = (input: ResourceValue, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1RetentionConfigurationNameList
 */
const se_RetentionConfigurationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Scope
 */
const se_Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceTypes != null && {
      ComplianceResourceTypes: se_ComplianceResourceTypes(input.ComplianceResourceTypes, context),
    }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

/**
 * serializeAws_json1_1SelectAggregateResourceConfigRequest
 */
const se_SelectAggregateResourceConfigRequest = (
  input: SelectAggregateResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1SelectResourceConfigRequest
 */
const se_SelectResourceConfigRequest = (input: SelectResourceConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1Source
 */
const se_Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.CustomPolicyDetails != null && {
      CustomPolicyDetails: se_CustomPolicyDetails(input.CustomPolicyDetails, context),
    }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.SourceDetails != null && { SourceDetails: se_SourceDetails(input.SourceDetails, context) }),
    ...(input.SourceIdentifier != null && { SourceIdentifier: input.SourceIdentifier }),
  };
};

/**
 * serializeAws_json1_1SourceDetail
 */
const se_SourceDetail = (input: SourceDetail, context: __SerdeContext): any => {
  return {
    ...(input.EventSource != null && { EventSource: input.EventSource }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
  };
};

/**
 * serializeAws_json1_1SourceDetails
 */
const se_SourceDetails = (input: SourceDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceDetail(entry, context);
    });
};

/**
 * serializeAws_json1_1SsmControls
 */
const se_SsmControls = (input: SsmControls, context: __SerdeContext): any => {
  return {
    ...(input.ConcurrentExecutionRatePercentage != null && {
      ConcurrentExecutionRatePercentage: input.ConcurrentExecutionRatePercentage,
    }),
    ...(input.ErrorPercentage != null && { ErrorPercentage: input.ErrorPercentage }),
  };
};

/**
 * serializeAws_json1_1StartConfigRulesEvaluationRequest
 */
const se_StartConfigRulesEvaluationRequest = (
  input: StartConfigRulesEvaluationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: se_ReevaluateConfigRuleNames(input.ConfigRuleNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1StartConfigurationRecorderRequest
 */
const se_StartConfigurationRecorderRequest = (
  input: StartConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

/**
 * serializeAws_json1_1StartRemediationExecutionRequest
 */
const se_StartRemediationExecutionRequest = (input: StartRemediationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceKeys != null && { ResourceKeys: se_ResourceKeys(input.ResourceKeys, context) }),
  };
};

/**
 * serializeAws_json1_1StartResourceEvaluationRequest
 */
const se_StartResourceEvaluationRequest = (input: StartResourceEvaluationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.EvaluationContext != null && {
      EvaluationContext: se_EvaluationContext(input.EvaluationContext, context),
    }),
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
    ...(input.EvaluationTimeout != null && { EvaluationTimeout: input.EvaluationTimeout }),
    ...(input.ResourceDetails != null && { ResourceDetails: se_ResourceDetails(input.ResourceDetails, context) }),
  };
};

/**
 * serializeAws_json1_1StaticParameterValues
 */
const se_StaticParameterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StaticValue
 */
const se_StaticValue = (input: StaticValue, context: __SerdeContext): any => {
  return {
    ...(input.Values != null && { Values: se_StaticParameterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1StatusDetailFilters
 */
const se_StatusDetailFilters = (input: StatusDetailFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MemberAccountRuleStatus != null && { MemberAccountRuleStatus: input.MemberAccountRuleStatus }),
  };
};

/**
 * serializeAws_json1_1StopConfigurationRecorderRequest
 */
const se_StopConfigurationRecorderRequest = (input: StopConfigurationRecorderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

/**
 * serializeAws_json1_1StoredQuery
 */
const se_StoredQuery = (input: StoredQuery, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.QueryArn != null && { QueryArn: input.QueryArn }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TagsList
 */
const se_TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TemplateSSMDocumentDetails
 */
const se_TemplateSSMDocumentDetails = (input: TemplateSSMDocumentDetails, context: __SerdeContext): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
  };
};

/**
 * serializeAws_json1_1TimeWindow
 */
const se_TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1AccountAggregationSource
 */
const de_AccountAggregationSource = (output: any, context: __SerdeContext): AccountAggregationSource => {
  return {
    AccountIds:
      output.AccountIds != null ? de_AccountAggregationSourceAccountList(output.AccountIds, context) : undefined,
    AllAwsRegions: __expectBoolean(output.AllAwsRegions),
    AwsRegions: output.AwsRegions != null ? de_AggregatorRegionList(output.AwsRegions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccountAggregationSourceAccountList
 */
const de_AccountAggregationSourceAccountList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccountAggregationSourceList
 */
const de_AccountAggregationSourceList = (output: any, context: __SerdeContext): AccountAggregationSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountAggregationSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateComplianceByConfigRule
 */
const de_AggregateComplianceByConfigRule = (output: any, context: __SerdeContext): AggregateComplianceByConfigRule => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    Compliance: output.Compliance != null ? de_Compliance(output.Compliance, context) : undefined,
    ConfigRuleName: __expectString(output.ConfigRuleName),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateComplianceByConfigRuleList
 */
const de_AggregateComplianceByConfigRuleList = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateComplianceByConfigRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateComplianceByConformancePack
 */
const de_AggregateComplianceByConformancePack = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConformancePack => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    Compliance:
      output.Compliance != null ? de_AggregateConformancePackCompliance(output.Compliance, context) : undefined,
    ConformancePackName: __expectString(output.ConformancePackName),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateComplianceByConformancePackList
 */
const de_AggregateComplianceByConformancePackList = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConformancePack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateComplianceByConformancePack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateComplianceCount
 */
const de_AggregateComplianceCount = (output: any, context: __SerdeContext): AggregateComplianceCount => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null ? de_ComplianceSummary(output.ComplianceSummary, context) : undefined,
    GroupName: __expectString(output.GroupName),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateComplianceCountList
 */
const de_AggregateComplianceCountList = (output: any, context: __SerdeContext): AggregateComplianceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateComplianceCount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateConformancePackCompliance
 */
const de_AggregateConformancePackCompliance = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackCompliance => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantRuleCount: __expectInt32(output.CompliantRuleCount),
    NonCompliantRuleCount: __expectInt32(output.NonCompliantRuleCount),
    TotalRuleCount: __expectInt32(output.TotalRuleCount),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateConformancePackComplianceCount
 */
const de_AggregateConformancePackComplianceCount = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceCount => {
  return {
    CompliantConformancePackCount: __expectInt32(output.CompliantConformancePackCount),
    NonCompliantConformancePackCount: __expectInt32(output.NonCompliantConformancePackCount),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateConformancePackComplianceSummary
 */
const de_AggregateConformancePackComplianceSummary = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceSummary => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? de_AggregateConformancePackComplianceCount(output.ComplianceSummary, context)
        : undefined,
    GroupName: __expectString(output.GroupName),
  } as any;
};

/**
 * deserializeAws_json1_1AggregateConformancePackComplianceSummaryList
 */
const de_AggregateConformancePackComplianceSummaryList = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateConformancePackComplianceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregatedSourceStatus
 */
const de_AggregatedSourceStatus = (output: any, context: __SerdeContext): AggregatedSourceStatus => {
  return {
    AwsRegion: __expectString(output.AwsRegion),
    LastErrorCode: __expectString(output.LastErrorCode),
    LastErrorMessage: __expectString(output.LastErrorMessage),
    LastUpdateStatus: __expectString(output.LastUpdateStatus),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    SourceId: __expectString(output.SourceId),
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1AggregatedSourceStatusList
 */
const de_AggregatedSourceStatusList = (output: any, context: __SerdeContext): AggregatedSourceStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregatedSourceStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateEvaluationResult
 */
const de_AggregateEvaluationResult = (output: any, context: __SerdeContext): AggregateEvaluationResult => {
  return {
    AccountId: __expectString(output.AccountId),
    Annotation: __expectString(output.Annotation),
    AwsRegion: __expectString(output.AwsRegion),
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleInvokedTime:
      output.ConfigRuleInvokedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConfigRuleInvokedTime)))
        : undefined,
    EvaluationResultIdentifier:
      output.EvaluationResultIdentifier != null
        ? de_EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AggregateEvaluationResultList
 */
const de_AggregateEvaluationResultList = (output: any, context: __SerdeContext): AggregateEvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateEvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateResourceIdentifier
 */
const de_AggregateResourceIdentifier = (output: any, context: __SerdeContext): AggregateResourceIdentifier => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
    SourceAccountId: __expectString(output.SourceAccountId),
    SourceRegion: __expectString(output.SourceRegion),
  } as any;
};

/**
 * deserializeAws_json1_1AggregationAuthorization
 */
const de_AggregationAuthorization = (output: any, context: __SerdeContext): AggregationAuthorization => {
  return {
    AggregationAuthorizationArn: __expectString(output.AggregationAuthorizationArn),
    AuthorizedAccountId: __expectString(output.AuthorizedAccountId),
    AuthorizedAwsRegion: __expectString(output.AuthorizedAwsRegion),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AggregationAuthorizationList
 */
const de_AggregationAuthorizationList = (output: any, context: __SerdeContext): AggregationAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregationAuthorization(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregatorRegionList
 */
const de_AggregatorRegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BaseConfigurationItem
 */
const de_BaseConfigurationItem = (output: any, context: __SerdeContext): BaseConfigurationItem => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    availabilityZone: __expectString(output.availabilityZone),
    awsRegion: __expectString(output.awsRegion),
    configuration: __expectString(output.configuration),
    configurationItemCaptureTime:
      output.configurationItemCaptureTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.configurationItemCaptureTime)))
        : undefined,
    configurationItemStatus: __expectString(output.configurationItemStatus),
    configurationStateId: __expectString(output.configurationStateId),
    resourceCreationTime:
      output.resourceCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resourceCreationTime)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
    supplementaryConfiguration:
      output.supplementaryConfiguration != null
        ? de_SupplementaryConfiguration(output.supplementaryConfiguration, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1BaseConfigurationItems
 */
const de_BaseConfigurationItems = (output: any, context: __SerdeContext): BaseConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BaseConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchGetAggregateResourceConfigResponse
 */
const de_BatchGetAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): BatchGetAggregateResourceConfigResponse => {
  return {
    BaseConfigurationItems:
      output.BaseConfigurationItems != null
        ? de_BaseConfigurationItems(output.BaseConfigurationItems, context)
        : undefined,
    UnprocessedResourceIdentifiers:
      output.UnprocessedResourceIdentifiers != null
        ? de_UnprocessedResourceIdentifierList(output.UnprocessedResourceIdentifiers, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetResourceConfigResponse
 */
const de_BatchGetResourceConfigResponse = (output: any, context: __SerdeContext): BatchGetResourceConfigResponse => {
  return {
    baseConfigurationItems:
      output.baseConfigurationItems != null
        ? de_BaseConfigurationItems(output.baseConfigurationItems, context)
        : undefined,
    unprocessedResourceKeys:
      output.unprocessedResourceKeys != null ? de_ResourceKeys(output.unprocessedResourceKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Compliance
 */
const de_Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    ComplianceContributorCount:
      output.ComplianceContributorCount != null
        ? de_ComplianceContributorCount(output.ComplianceContributorCount, context)
        : undefined,
    ComplianceType: __expectString(output.ComplianceType),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceByConfigRule
 */
const de_ComplianceByConfigRule = (output: any, context: __SerdeContext): ComplianceByConfigRule => {
  return {
    Compliance: output.Compliance != null ? de_Compliance(output.Compliance, context) : undefined,
    ConfigRuleName: __expectString(output.ConfigRuleName),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceByConfigRules
 */
const de_ComplianceByConfigRules = (output: any, context: __SerdeContext): ComplianceByConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceByConfigRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceByResource
 */
const de_ComplianceByResource = (output: any, context: __SerdeContext): ComplianceByResource => {
  return {
    Compliance: output.Compliance != null ? de_Compliance(output.Compliance, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceByResources
 */
const de_ComplianceByResources = (output: any, context: __SerdeContext): ComplianceByResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceByResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceContributorCount
 */
const de_ComplianceContributorCount = (output: any, context: __SerdeContext): ComplianceContributorCount => {
  return {
    CapExceeded: __expectBoolean(output.CapExceeded),
    CappedCount: __expectInt32(output.CappedCount),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceResourceTypes
 */
const de_ComplianceResourceTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceSummariesByResourceType
 */
const de_ComplianceSummariesByResourceType = (
  output: any,
  context: __SerdeContext
): ComplianceSummaryByResourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceSummaryByResourceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceSummary
 */
const de_ComplianceSummary = (output: any, context: __SerdeContext): ComplianceSummary => {
  return {
    ComplianceSummaryTimestamp:
      output.ComplianceSummaryTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ComplianceSummaryTimestamp)))
        : undefined,
    CompliantResourceCount:
      output.CompliantResourceCount != null
        ? de_ComplianceContributorCount(output.CompliantResourceCount, context)
        : undefined,
    NonCompliantResourceCount:
      output.NonCompliantResourceCount != null
        ? de_ComplianceContributorCount(output.NonCompliantResourceCount, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceSummaryByResourceType
 */
const de_ComplianceSummaryByResourceType = (output: any, context: __SerdeContext): ComplianceSummaryByResourceType => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null ? de_ComplianceSummary(output.ComplianceSummary, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigExportDeliveryInfo
 */
const de_ConfigExportDeliveryInfo = (output: any, context: __SerdeContext): ConfigExportDeliveryInfo => {
  return {
    lastAttemptTime:
      output.lastAttemptTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAttemptTime)))
        : undefined,
    lastErrorCode: __expectString(output.lastErrorCode),
    lastErrorMessage: __expectString(output.lastErrorMessage),
    lastStatus: __expectString(output.lastStatus),
    lastSuccessfulTime:
      output.lastSuccessfulTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastSuccessfulTime)))
        : undefined,
    nextDeliveryTime:
      output.nextDeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.nextDeliveryTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigRule
 */
const de_ConfigRule = (output: any, context: __SerdeContext): ConfigRule => {
  return {
    ConfigRuleArn: __expectString(output.ConfigRuleArn),
    ConfigRuleId: __expectString(output.ConfigRuleId),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    ConfigRuleState: __expectString(output.ConfigRuleState),
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    EvaluationModes: output.EvaluationModes != null ? de_EvaluationModes(output.EvaluationModes, context) : undefined,
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    Scope: output.Scope != null ? de_Scope(output.Scope, context) : undefined,
    Source: output.Source != null ? de_Source(output.Source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigRuleEvaluationStatus
 */
const de_ConfigRuleEvaluationStatus = (output: any, context: __SerdeContext): ConfigRuleEvaluationStatus => {
  return {
    ConfigRuleArn: __expectString(output.ConfigRuleArn),
    ConfigRuleId: __expectString(output.ConfigRuleId),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    FirstActivatedTime:
      output.FirstActivatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FirstActivatedTime)))
        : undefined,
    FirstEvaluationStarted: __expectBoolean(output.FirstEvaluationStarted),
    LastDeactivatedTime:
      output.LastDeactivatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastDeactivatedTime)))
        : undefined,
    LastDebugLogDeliveryStatus: __expectString(output.LastDebugLogDeliveryStatus),
    LastDebugLogDeliveryStatusReason: __expectString(output.LastDebugLogDeliveryStatusReason),
    LastDebugLogDeliveryTime:
      output.LastDebugLogDeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastDebugLogDeliveryTime)))
        : undefined,
    LastErrorCode: __expectString(output.LastErrorCode),
    LastErrorMessage: __expectString(output.LastErrorMessage),
    LastFailedEvaluationTime:
      output.LastFailedEvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastFailedEvaluationTime)))
        : undefined,
    LastFailedInvocationTime:
      output.LastFailedInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastFailedInvocationTime)))
        : undefined,
    LastSuccessfulEvaluationTime:
      output.LastSuccessfulEvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulEvaluationTime)))
        : undefined,
    LastSuccessfulInvocationTime:
      output.LastSuccessfulInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulInvocationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigRuleEvaluationStatusList
 */
const de_ConfigRuleEvaluationStatusList = (output: any, context: __SerdeContext): ConfigRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigRules
 */
const de_ConfigRules = (output: any, context: __SerdeContext): ConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigSnapshotDeliveryProperties
 */
const de_ConfigSnapshotDeliveryProperties = (
  output: any,
  context: __SerdeContext
): ConfigSnapshotDeliveryProperties => {
  return {
    deliveryFrequency: __expectString(output.deliveryFrequency),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigStreamDeliveryInfo
 */
const de_ConfigStreamDeliveryInfo = (output: any, context: __SerdeContext): ConfigStreamDeliveryInfo => {
  return {
    lastErrorCode: __expectString(output.lastErrorCode),
    lastErrorMessage: __expectString(output.lastErrorMessage),
    lastStatus: __expectString(output.lastStatus),
    lastStatusChangeTime:
      output.lastStatusChangeTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusChangeTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationAggregator
 */
const de_ConfigurationAggregator = (output: any, context: __SerdeContext): ConfigurationAggregator => {
  return {
    AccountAggregationSources:
      output.AccountAggregationSources != null
        ? de_AccountAggregationSourceList(output.AccountAggregationSources, context)
        : undefined,
    ConfigurationAggregatorArn: __expectString(output.ConfigurationAggregatorArn),
    ConfigurationAggregatorName: __expectString(output.ConfigurationAggregatorName),
    CreatedBy: __expectString(output.CreatedBy),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    OrganizationAggregationSource:
      output.OrganizationAggregationSource != null
        ? de_OrganizationAggregationSource(output.OrganizationAggregationSource, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationAggregatorList
 */
const de_ConfigurationAggregatorList = (output: any, context: __SerdeContext): ConfigurationAggregator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationAggregator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigurationItem
 */
const de_ConfigurationItem = (output: any, context: __SerdeContext): ConfigurationItem => {
  return {
    accountId: __expectString(output.accountId),
    arn: __expectString(output.arn),
    availabilityZone: __expectString(output.availabilityZone),
    awsRegion: __expectString(output.awsRegion),
    configuration: __expectString(output.configuration),
    configurationItemCaptureTime:
      output.configurationItemCaptureTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.configurationItemCaptureTime)))
        : undefined,
    configurationItemMD5Hash: __expectString(output.configurationItemMD5Hash),
    configurationItemStatus: __expectString(output.configurationItemStatus),
    configurationStateId: __expectString(output.configurationStateId),
    relatedEvents: output.relatedEvents != null ? de_RelatedEventList(output.relatedEvents, context) : undefined,
    relationships: output.relationships != null ? de_RelationshipList(output.relationships, context) : undefined,
    resourceCreationTime:
      output.resourceCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resourceCreationTime)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
    supplementaryConfiguration:
      output.supplementaryConfiguration != null
        ? de_SupplementaryConfiguration(output.supplementaryConfiguration, context)
        : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationItemList
 */
const de_ConfigurationItemList = (output: any, context: __SerdeContext): ConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigurationRecorder
 */
const de_ConfigurationRecorder = (output: any, context: __SerdeContext): ConfigurationRecorder => {
  return {
    name: __expectString(output.name),
    recordingGroup: output.recordingGroup != null ? de_RecordingGroup(output.recordingGroup, context) : undefined,
    roleARN: __expectString(output.roleARN),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationRecorderList
 */
const de_ConfigurationRecorderList = (output: any, context: __SerdeContext): ConfigurationRecorder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationRecorder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigurationRecorderStatus
 */
const de_ConfigurationRecorderStatus = (output: any, context: __SerdeContext): ConfigurationRecorderStatus => {
  return {
    lastErrorCode: __expectString(output.lastErrorCode),
    lastErrorMessage: __expectString(output.lastErrorMessage),
    lastStartTime:
      output.lastStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStartTime)))
        : undefined,
    lastStatus: __expectString(output.lastStatus),
    lastStatusChangeTime:
      output.lastStatusChangeTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusChangeTime)))
        : undefined,
    lastStopTime:
      output.lastStopTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStopTime)))
        : undefined,
    name: __expectString(output.name),
    recording: __expectBoolean(output.recording),
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationRecorderStatusList
 */
const de_ConfigurationRecorderStatusList = (output: any, context: __SerdeContext): ConfigurationRecorderStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationRecorderStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceScore
 */
const de_ConformancePackComplianceScore = (output: any, context: __SerdeContext): ConformancePackComplianceScore => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Score: __expectString(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceScores
 */
const de_ConformancePackComplianceScores = (output: any, context: __SerdeContext): ConformancePackComplianceScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackComplianceScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceSummary
 */
const de_ConformancePackComplianceSummary = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceSummary => {
  return {
    ConformancePackComplianceStatus: __expectString(output.ConformancePackComplianceStatus),
    ConformancePackName: __expectString(output.ConformancePackName),
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceSummaryList
 */
const de_ConformancePackComplianceSummaryList = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackComplianceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackDetail
 */
const de_ConformancePackDetail = (output: any, context: __SerdeContext): ConformancePackDetail => {
  return {
    ConformancePackArn: __expectString(output.ConformancePackArn),
    ConformancePackId: __expectString(output.ConformancePackId),
    ConformancePackInputParameters:
      output.ConformancePackInputParameters != null
        ? de_ConformancePackInputParameters(output.ConformancePackInputParameters, context)
        : undefined,
    ConformancePackName: __expectString(output.ConformancePackName),
    CreatedBy: __expectString(output.CreatedBy),
    DeliveryS3Bucket: __expectString(output.DeliveryS3Bucket),
    DeliveryS3KeyPrefix: __expectString(output.DeliveryS3KeyPrefix),
    LastUpdateRequestedTime:
      output.LastUpdateRequestedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateRequestedTime)))
        : undefined,
    TemplateSSMDocumentDetails:
      output.TemplateSSMDocumentDetails != null
        ? de_TemplateSSMDocumentDetails(output.TemplateSSMDocumentDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackDetailList
 */
const de_ConformancePackDetailList = (output: any, context: __SerdeContext): ConformancePackDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackEvaluationResult
 */
const de_ConformancePackEvaluationResult = (output: any, context: __SerdeContext): ConformancePackEvaluationResult => {
  return {
    Annotation: __expectString(output.Annotation),
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleInvokedTime:
      output.ConfigRuleInvokedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConfigRuleInvokedTime)))
        : undefined,
    EvaluationResultIdentifier:
      output.EvaluationResultIdentifier != null
        ? de_EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackInputParameter
 */
const de_ConformancePackInputParameter = (output: any, context: __SerdeContext): ConformancePackInputParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackInputParameters
 */
const de_ConformancePackInputParameters = (output: any, context: __SerdeContext): ConformancePackInputParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackInputParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackRuleCompliance
 */
const de_ConformancePackRuleCompliance = (output: any, context: __SerdeContext): ConformancePackRuleCompliance => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    Controls: output.Controls != null ? de_ControlsList(output.Controls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackRuleComplianceList
 */
const de_ConformancePackRuleComplianceList = (
  output: any,
  context: __SerdeContext
): ConformancePackRuleCompliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackRuleCompliance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackRuleEvaluationResultsList
 */
const de_ConformancePackRuleEvaluationResultsList = (
  output: any,
  context: __SerdeContext
): ConformancePackEvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackEvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackStatusDetail
 */
const de_ConformancePackStatusDetail = (output: any, context: __SerdeContext): ConformancePackStatusDetail => {
  return {
    ConformancePackArn: __expectString(output.ConformancePackArn),
    ConformancePackId: __expectString(output.ConformancePackId),
    ConformancePackName: __expectString(output.ConformancePackName),
    ConformancePackState: __expectString(output.ConformancePackState),
    ConformancePackStatusReason: __expectString(output.ConformancePackStatusReason),
    LastUpdateCompletedTime:
      output.LastUpdateCompletedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateCompletedTime)))
        : undefined,
    LastUpdateRequestedTime:
      output.LastUpdateRequestedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateRequestedTime)))
        : undefined,
    StackArn: __expectString(output.StackArn),
  } as any;
};

/**
 * deserializeAws_json1_1ConformancePackStatusDetailsList
 */
const de_ConformancePackStatusDetailsList = (output: any, context: __SerdeContext): ConformancePackStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConformancePackStatusDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackTemplateValidationException
 */
const de_ConformancePackTemplateValidationException = (
  output: any,
  context: __SerdeContext
): ConformancePackTemplateValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ControlsList
 */
const de_ControlsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomPolicyDetails
 */
const de_CustomPolicyDetails = (output: any, context: __SerdeContext): CustomPolicyDetails => {
  return {
    EnableDebugLogDelivery: __expectBoolean(output.EnableDebugLogDelivery),
    PolicyRuntime: __expectString(output.PolicyRuntime),
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

/**
 * deserializeAws_json1_1DebugLogDeliveryAccounts
 */
const de_DebugLogDeliveryAccounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteEvaluationResultsResponse
 */
const de_DeleteEvaluationResultsResponse = (output: any, context: __SerdeContext): DeleteEvaluationResultsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRemediationConfigurationResponse
 */
const de_DeleteRemediationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteRemediationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRemediationExceptionsResponse
 */
const de_DeleteRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteRemediationExceptionsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null
        ? de_FailedDeleteRemediationExceptionsBatches(output.FailedBatches, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteStoredQueryResponse
 */
const de_DeleteStoredQueryResponse = (output: any, context: __SerdeContext): DeleteStoredQueryResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeliverConfigSnapshotResponse
 */
const de_DeliverConfigSnapshotResponse = (output: any, context: __SerdeContext): DeliverConfigSnapshotResponse => {
  return {
    configSnapshotId: __expectString(output.configSnapshotId),
  } as any;
};

/**
 * deserializeAws_json1_1DeliveryChannel
 */
const de_DeliveryChannel = (output: any, context: __SerdeContext): DeliveryChannel => {
  return {
    configSnapshotDeliveryProperties:
      output.configSnapshotDeliveryProperties != null
        ? de_ConfigSnapshotDeliveryProperties(output.configSnapshotDeliveryProperties, context)
        : undefined,
    name: __expectString(output.name),
    s3BucketName: __expectString(output.s3BucketName),
    s3KeyPrefix: __expectString(output.s3KeyPrefix),
    s3KmsKeyArn: __expectString(output.s3KmsKeyArn),
    snsTopicARN: __expectString(output.snsTopicARN),
  } as any;
};

/**
 * deserializeAws_json1_1DeliveryChannelList
 */
const de_DeliveryChannelList = (output: any, context: __SerdeContext): DeliveryChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeliveryChannel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeliveryChannelStatus
 */
const de_DeliveryChannelStatus = (output: any, context: __SerdeContext): DeliveryChannelStatus => {
  return {
    configHistoryDeliveryInfo:
      output.configHistoryDeliveryInfo != null
        ? de_ConfigExportDeliveryInfo(output.configHistoryDeliveryInfo, context)
        : undefined,
    configSnapshotDeliveryInfo:
      output.configSnapshotDeliveryInfo != null
        ? de_ConfigExportDeliveryInfo(output.configSnapshotDeliveryInfo, context)
        : undefined,
    configStreamDeliveryInfo:
      output.configStreamDeliveryInfo != null
        ? de_ConfigStreamDeliveryInfo(output.configStreamDeliveryInfo, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1DeliveryChannelStatusList
 */
const de_DeliveryChannelStatusList = (output: any, context: __SerdeContext): DeliveryChannelStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeliveryChannelStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse
 */
const de_DescribeAggregateComplianceByConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregateComplianceByConfigRulesResponse => {
  return {
    AggregateComplianceByConfigRules:
      output.AggregateComplianceByConfigRules != null
        ? de_AggregateComplianceByConfigRuleList(output.AggregateComplianceByConfigRules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse
 */
const de_DescribeAggregateComplianceByConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregateComplianceByConformancePacksResponse => {
  return {
    AggregateComplianceByConformancePacks:
      output.AggregateComplianceByConformancePacks != null
        ? de_AggregateComplianceByConformancePackList(output.AggregateComplianceByConformancePacks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAggregationAuthorizationsResponse
 */
const de_DescribeAggregationAuthorizationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregationAuthorizationsResponse => {
  return {
    AggregationAuthorizations:
      output.AggregationAuthorizations != null
        ? de_AggregationAuthorizationList(output.AggregationAuthorizations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeComplianceByConfigRuleResponse
 */
const de_DescribeComplianceByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): DescribeComplianceByConfigRuleResponse => {
  return {
    ComplianceByConfigRules:
      output.ComplianceByConfigRules != null
        ? de_ComplianceByConfigRules(output.ComplianceByConfigRules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeComplianceByResourceResponse
 */
const de_DescribeComplianceByResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeComplianceByResourceResponse => {
  return {
    ComplianceByResources:
      output.ComplianceByResources != null
        ? de_ComplianceByResources(output.ComplianceByResources, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse
 */
const de_DescribeConfigRuleEvaluationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigRuleEvaluationStatusResponse => {
  return {
    ConfigRulesEvaluationStatus:
      output.ConfigRulesEvaluationStatus != null
        ? de_ConfigRuleEvaluationStatusList(output.ConfigRulesEvaluationStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigRulesResponse
 */
const de_DescribeConfigRulesResponse = (output: any, context: __SerdeContext): DescribeConfigRulesResponse => {
  return {
    ConfigRules: output.ConfigRules != null ? de_ConfigRules(output.ConfigRules, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse
 */
const de_DescribeConfigurationAggregatorSourcesStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorSourcesStatusResponse => {
  return {
    AggregatedSourceStatusList:
      output.AggregatedSourceStatusList != null
        ? de_AggregatedSourceStatusList(output.AggregatedSourceStatusList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorsResponse
 */
const de_DescribeConfigurationAggregatorsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorsResponse => {
  return {
    ConfigurationAggregators:
      output.ConfigurationAggregators != null
        ? de_ConfigurationAggregatorList(output.ConfigurationAggregators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecordersResponse
 */
const de_DescribeConfigurationRecordersResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationRecordersResponse => {
  return {
    ConfigurationRecorders:
      output.ConfigurationRecorders != null
        ? de_ConfigurationRecorderList(output.ConfigurationRecorders, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse
 */
const de_DescribeConfigurationRecorderStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationRecorderStatusResponse => {
  return {
    ConfigurationRecordersStatus:
      output.ConfigurationRecordersStatus != null
        ? de_ConfigurationRecorderStatusList(output.ConfigurationRecordersStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConformancePackComplianceResponse
 */
const de_DescribeConformancePackComplianceResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePackComplianceResponse => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    ConformancePackRuleComplianceList:
      output.ConformancePackRuleComplianceList != null
        ? de_ConformancePackRuleComplianceList(output.ConformancePackRuleComplianceList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConformancePacksResponse
 */
const de_DescribeConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePacksResponse => {
  return {
    ConformancePackDetails:
      output.ConformancePackDetails != null
        ? de_ConformancePackDetailList(output.ConformancePackDetails, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConformancePackStatusResponse
 */
const de_DescribeConformancePackStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePackStatusResponse => {
  return {
    ConformancePackStatusDetails:
      output.ConformancePackStatusDetails != null
        ? de_ConformancePackStatusDetailsList(output.ConformancePackStatusDetails, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelsResponse
 */
const de_DescribeDeliveryChannelsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryChannelsResponse => {
  return {
    DeliveryChannels:
      output.DeliveryChannels != null ? de_DeliveryChannelList(output.DeliveryChannels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDeliveryChannelStatusResponse
 */
const de_DescribeDeliveryChannelStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryChannelStatusResponse => {
  return {
    DeliveryChannelsStatus:
      output.DeliveryChannelsStatus != null
        ? de_DeliveryChannelStatusList(output.DeliveryChannelsStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRulesResponse
 */
const de_DescribeOrganizationConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRulesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRules:
      output.OrganizationConfigRules != null
        ? de_OrganizationConfigRules(output.OrganizationConfigRules, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse
 */
const de_DescribeOrganizationConfigRuleStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRuleStatusesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRuleStatuses:
      output.OrganizationConfigRuleStatuses != null
        ? de_OrganizationConfigRuleStatuses(output.OrganizationConfigRuleStatuses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePacksResponse
 */
const de_DescribeOrganizationConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePacksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePacks:
      output.OrganizationConformancePacks != null
        ? de_OrganizationConformancePacks(output.OrganizationConformancePacks, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse
 */
const de_DescribeOrganizationConformancePackStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePackStatusesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePackStatuses:
      output.OrganizationConformancePackStatuses != null
        ? de_OrganizationConformancePackStatuses(output.OrganizationConformancePackStatuses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePendingAggregationRequestsResponse
 */
const de_DescribePendingAggregationRequestsResponse = (
  output: any,
  context: __SerdeContext
): DescribePendingAggregationRequestsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PendingAggregationRequests:
      output.PendingAggregationRequests != null
        ? de_PendingAggregationRequestList(output.PendingAggregationRequests, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRemediationConfigurationsResponse
 */
const de_DescribeRemediationConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationConfigurationsResponse => {
  return {
    RemediationConfigurations:
      output.RemediationConfigurations != null
        ? de_RemediationConfigurations(output.RemediationConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRemediationExceptionsResponse
 */
const de_DescribeRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExceptionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RemediationExceptions:
      output.RemediationExceptions != null
        ? de_RemediationExceptions(output.RemediationExceptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRemediationExecutionStatusResponse
 */
const de_DescribeRemediationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExecutionStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RemediationExecutionStatuses:
      output.RemediationExecutionStatuses != null
        ? de_RemediationExecutionStatuses(output.RemediationExecutionStatuses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRetentionConfigurationsResponse
 */
const de_DescribeRetentionConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRetentionConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RetentionConfigurations:
      output.RetentionConfigurations != null
        ? de_RetentionConfigurationList(output.RetentionConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DiscoveredResourceIdentifierList
 */
const de_DiscoveredResourceIdentifierList = (output: any, context: __SerdeContext): AggregateResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateResourceIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return {
    Annotation: __expectString(output.Annotation),
    ComplianceResourceId: __expectString(output.ComplianceResourceId),
    ComplianceResourceType: __expectString(output.ComplianceResourceType),
    ComplianceType: __expectString(output.ComplianceType),
    OrderingTimestamp:
      output.OrderingTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderingTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationContext
 */
const de_EvaluationContext = (output: any, context: __SerdeContext): EvaluationContext => {
  return {
    EvaluationContextIdentifier: __expectString(output.EvaluationContextIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationModeConfiguration
 */
const de_EvaluationModeConfiguration = (output: any, context: __SerdeContext): EvaluationModeConfiguration => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationModes
 */
const de_EvaluationModes = (output: any, context: __SerdeContext): EvaluationModeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluationModeConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    Annotation: __expectString(output.Annotation),
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleInvokedTime:
      output.ConfigRuleInvokedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConfigRuleInvokedTime)))
        : undefined,
    EvaluationResultIdentifier:
      output.EvaluationResultIdentifier != null
        ? de_EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
    ResultToken: __expectString(output.ResultToken),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResultIdentifier
 */
const de_EvaluationResultIdentifier = (output: any, context: __SerdeContext): EvaluationResultIdentifier => {
  return {
    EvaluationResultQualifier:
      output.EvaluationResultQualifier != null
        ? de_EvaluationResultQualifier(output.EvaluationResultQualifier, context)
        : undefined,
    OrderingTimestamp:
      output.OrderingTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderingTimestamp)))
        : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResultQualifier
 */
const de_EvaluationResultQualifier = (output: any, context: __SerdeContext): EvaluationResultQualifier => {
  return {
    ConfigRuleName: __expectString(output.ConfigRuleName),
    EvaluationMode: __expectString(output.EvaluationMode),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResults
 */
const de_EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Evaluations
 */
const de_Evaluations = (output: any, context: __SerdeContext): Evaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Evaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluationStatus
 */
const de_EvaluationStatus = (output: any, context: __SerdeContext): EvaluationStatus => {
  return {
    FailureReason: __expectString(output.FailureReason),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ExcludedAccounts
 */
const de_ExcludedAccounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExecutionControls
 */
const de_ExecutionControls = (output: any, context: __SerdeContext): ExecutionControls => {
  return {
    SsmControls: output.SsmControls != null ? de_SsmControls(output.SsmControls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch
 */
const de_FailedDeleteRemediationExceptionsBatch = (
  output: any,
  context: __SerdeContext
): FailedDeleteRemediationExceptionsBatch => {
  return {
    FailedItems:
      output.FailedItems != null ? de_RemediationExceptionResourceKeys(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches
 */
const de_FailedDeleteRemediationExceptionsBatches = (
  output: any,
  context: __SerdeContext
): FailedDeleteRemediationExceptionsBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedDeleteRemediationExceptionsBatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedRemediationBatch
 */
const de_FailedRemediationBatch = (output: any, context: __SerdeContext): FailedRemediationBatch => {
  return {
    FailedItems: output.FailedItems != null ? de_RemediationConfigurations(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FailedRemediationBatches
 */
const de_FailedRemediationBatches = (output: any, context: __SerdeContext): FailedRemediationBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedRemediationBatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedRemediationExceptionBatch
 */
const de_FailedRemediationExceptionBatch = (output: any, context: __SerdeContext): FailedRemediationExceptionBatch => {
  return {
    FailedItems: output.FailedItems != null ? de_RemediationExceptions(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FailedRemediationExceptionBatches
 */
const de_FailedRemediationExceptionBatches = (
  output: any,
  context: __SerdeContext
): FailedRemediationExceptionBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedRemediationExceptionBatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FieldInfo
 */
const de_FieldInfo = (output: any, context: __SerdeContext): FieldInfo => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1FieldInfoList
 */
const de_FieldInfoList = (output: any, context: __SerdeContext): FieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse
 */
const de_GetAggregateComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateComplianceDetailsByConfigRuleResponse => {
  return {
    AggregateEvaluationResults:
      output.AggregateEvaluationResults != null
        ? de_AggregateEvaluationResultList(output.AggregateEvaluationResults, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse
 */
const de_GetAggregateConfigRuleComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateConfigRuleComplianceSummaryResponse => {
  return {
    AggregateComplianceCounts:
      output.AggregateComplianceCounts != null
        ? de_AggregateComplianceCountList(output.AggregateComplianceCounts, context)
        : undefined,
    GroupByKey: __expectString(output.GroupByKey),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse
 */
const de_GetAggregateConformancePackComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateConformancePackComplianceSummaryResponse => {
  return {
    AggregateConformancePackComplianceSummaries:
      output.AggregateConformancePackComplianceSummaries != null
        ? de_AggregateConformancePackComplianceSummaryList(output.AggregateConformancePackComplianceSummaries, context)
        : undefined,
    GroupByKey: __expectString(output.GroupByKey),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse
 */
const de_GetAggregateDiscoveredResourceCountsResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateDiscoveredResourceCountsResponse => {
  return {
    GroupByKey: __expectString(output.GroupByKey),
    GroupedResourceCounts:
      output.GroupedResourceCounts != null
        ? de_GroupedResourceCountList(output.GroupedResourceCounts, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalDiscoveredResources: __expectLong(output.TotalDiscoveredResources),
  } as any;
};

/**
 * deserializeAws_json1_1GetAggregateResourceConfigResponse
 */
const de_GetAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateResourceConfigResponse => {
  return {
    ConfigurationItem:
      output.ConfigurationItem != null ? de_ConfigurationItem(output.ConfigurationItem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse
 */
const de_GetComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByConfigRuleResponse => {
  return {
    EvaluationResults:
      output.EvaluationResults != null ? de_EvaluationResults(output.EvaluationResults, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByResourceResponse
 */
const de_GetComplianceDetailsByResourceResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByResourceResponse => {
  return {
    EvaluationResults:
      output.EvaluationResults != null ? de_EvaluationResults(output.EvaluationResults, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse
 */
const de_GetComplianceSummaryByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByConfigRuleResponse => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null ? de_ComplianceSummary(output.ComplianceSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse
 */
const de_GetComplianceSummaryByResourceTypeResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByResourceTypeResponse => {
  return {
    ComplianceSummariesByResourceType:
      output.ComplianceSummariesByResourceType != null
        ? de_ComplianceSummariesByResourceType(output.ComplianceSummariesByResourceType, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceDetailsResponse
 */
const de_GetConformancePackComplianceDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetConformancePackComplianceDetailsResponse => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    ConformancePackRuleEvaluationResults:
      output.ConformancePackRuleEvaluationResults != null
        ? de_ConformancePackRuleEvaluationResultsList(output.ConformancePackRuleEvaluationResults, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceSummaryResponse
 */
const de_GetConformancePackComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetConformancePackComplianceSummaryResponse => {
  return {
    ConformancePackComplianceSummaryList:
      output.ConformancePackComplianceSummaryList != null
        ? de_ConformancePackComplianceSummaryList(output.ConformancePackComplianceSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetCustomRulePolicyResponse
 */
const de_GetCustomRulePolicyResponse = (output: any, context: __SerdeContext): GetCustomRulePolicyResponse => {
  return {
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

/**
 * deserializeAws_json1_1GetDiscoveredResourceCountsResponse
 */
const de_GetDiscoveredResourceCountsResponse = (
  output: any,
  context: __SerdeContext
): GetDiscoveredResourceCountsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourceCounts: output.resourceCounts != null ? de_ResourceCounts(output.resourceCounts, context) : undefined,
    totalDiscoveredResources: __expectLong(output.totalDiscoveredResources),
  } as any;
};

/**
 * deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse
 */
const de_GetOrganizationConfigRuleDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConfigRuleDetailedStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRuleDetailedStatus:
      output.OrganizationConfigRuleDetailedStatus != null
        ? de_OrganizationConfigRuleDetailedStatus(output.OrganizationConfigRuleDetailedStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse
 */
const de_GetOrganizationConformancePackDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConformancePackDetailedStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePackDetailedStatuses:
      output.OrganizationConformancePackDetailedStatuses != null
        ? de_OrganizationConformancePackDetailedStatuses(output.OrganizationConformancePackDetailedStatuses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOrganizationCustomRulePolicyResponse
 */
const de_GetOrganizationCustomRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationCustomRulePolicyResponse => {
  return {
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourceConfigHistoryResponse
 */
const de_GetResourceConfigHistoryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceConfigHistoryResponse => {
  return {
    configurationItems:
      output.configurationItems != null ? de_ConfigurationItemList(output.configurationItems, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourceEvaluationSummaryResponse
 */
const de_GetResourceEvaluationSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceEvaluationSummaryResponse => {
  return {
    Compliance: __expectString(output.Compliance),
    EvaluationContext:
      output.EvaluationContext != null ? de_EvaluationContext(output.EvaluationContext, context) : undefined,
    EvaluationMode: __expectString(output.EvaluationMode),
    EvaluationStartTimestamp:
      output.EvaluationStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationStartTimestamp)))
        : undefined,
    EvaluationStatus:
      output.EvaluationStatus != null ? de_EvaluationStatus(output.EvaluationStatus, context) : undefined,
    ResourceDetails: output.ResourceDetails != null ? de_ResourceDetails(output.ResourceDetails, context) : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1GetStoredQueryResponse
 */
const de_GetStoredQueryResponse = (output: any, context: __SerdeContext): GetStoredQueryResponse => {
  return {
    StoredQuery: output.StoredQuery != null ? de_StoredQuery(output.StoredQuery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GroupedResourceCount
 */
const de_GroupedResourceCount = (output: any, context: __SerdeContext): GroupedResourceCount => {
  return {
    GroupName: __expectString(output.GroupName),
    ResourceCount: __expectLong(output.ResourceCount),
  } as any;
};

/**
 * deserializeAws_json1_1GroupedResourceCountList
 */
const de_GroupedResourceCountList = (output: any, context: __SerdeContext): GroupedResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupedResourceCount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatch
 */
const de_IdempotentParameterMismatch = (output: any, context: __SerdeContext): IdempotentParameterMismatch => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientDeliveryPolicyException
 */
const de_InsufficientDeliveryPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientDeliveryPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientPermissionsException
 */
const de_InsufficientPermissionsException = (
  output: any,
  context: __SerdeContext
): InsufficientPermissionsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidConfigurationRecorderNameException
 */
const de_InvalidConfigurationRecorderNameException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRecorderNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeliveryChannelNameException
 */
const de_InvalidDeliveryChannelNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeliveryChannelNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidExpressionException
 */
const de_InvalidExpressionException = (output: any, context: __SerdeContext): InvalidExpressionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLimitException
 */
const de_InvalidLimitException = (output: any, context: __SerdeContext): InvalidLimitException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRecordingGroupException
 */
const de_InvalidRecordingGroupException = (output: any, context: __SerdeContext): InvalidRecordingGroupException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResultTokenException
 */
const de_InvalidResultTokenException = (output: any, context: __SerdeContext): InvalidResultTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRoleException
 */
const de_InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3KeyPrefixException
 */
const de_InvalidS3KeyPrefixException = (output: any, context: __SerdeContext): InvalidS3KeyPrefixException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3KmsKeyArnException
 */
const de_InvalidS3KmsKeyArnException = (output: any, context: __SerdeContext): InvalidS3KmsKeyArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSNSTopicARNException
 */
const de_InvalidSNSTopicARNException = (output: any, context: __SerdeContext): InvalidSNSTopicARNException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTimeRangeException
 */
const de_InvalidTimeRangeException = (output: any, context: __SerdeContext): InvalidTimeRangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LastDeliveryChannelDeleteFailedException
 */
const de_LastDeliveryChannelDeleteFailedException = (
  output: any,
  context: __SerdeContext
): LastDeliveryChannelDeleteFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse
 */
const de_ListAggregateDiscoveredResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListAggregateDiscoveredResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceIdentifiers:
      output.ResourceIdentifiers != null
        ? de_DiscoveredResourceIdentifierList(output.ResourceIdentifiers, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListConformancePackComplianceScoresResponse
 */
const de_ListConformancePackComplianceScoresResponse = (
  output: any,
  context: __SerdeContext
): ListConformancePackComplianceScoresResponse => {
  return {
    ConformancePackComplianceScores:
      output.ConformancePackComplianceScores != null
        ? de_ConformancePackComplianceScores(output.ConformancePackComplianceScores, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesResponse
 */
const de_ListDiscoveredResourcesResponse = (output: any, context: __SerdeContext): ListDiscoveredResourcesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourceIdentifiers:
      output.resourceIdentifiers != null ? de_ResourceIdentifierList(output.resourceIdentifiers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceEvaluationsResponse
 */
const de_ListResourceEvaluationsResponse = (output: any, context: __SerdeContext): ListResourceEvaluationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceEvaluations:
      output.ResourceEvaluations != null ? de_ResourceEvaluations(output.ResourceEvaluations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStoredQueriesResponse
 */
const de_ListStoredQueriesResponse = (output: any, context: __SerdeContext): ListStoredQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StoredQueryMetadata:
      output.StoredQueryMetadata != null ? de_StoredQueryMetadataList(output.StoredQueryMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MaxActiveResourcesExceededException
 */
const de_MaxActiveResourcesExceededException = (
  output: any,
  context: __SerdeContext
): MaxActiveResourcesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfConfigRulesExceededException
 */
const de_MaxNumberOfConfigRulesExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConfigRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException
 */
const de_MaxNumberOfConfigurationRecordersExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConfigurationRecordersExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfConformancePacksExceededException
 */
const de_MaxNumberOfConformancePacksExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConformancePacksExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException
 */
const de_MaxNumberOfDeliveryChannelsExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfDeliveryChannelsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException
 */
const de_MaxNumberOfOrganizationConfigRulesExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfOrganizationConfigRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException
 */
const de_MaxNumberOfOrganizationConformancePacksExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfOrganizationConformancePacksExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException
 */
const de_MaxNumberOfRetentionConfigurationsExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfRetentionConfigurationsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MemberAccountStatus
 */
const de_MemberAccountStatus = (output: any, context: __SerdeContext): MemberAccountStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    MemberAccountRuleStatus: __expectString(output.MemberAccountRuleStatus),
  } as any;
};

/**
 * deserializeAws_json1_1NoAvailableConfigurationRecorderException
 */
const de_NoAvailableConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoAvailableConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoAvailableDeliveryChannelException
 */
const de_NoAvailableDeliveryChannelException = (
  output: any,
  context: __SerdeContext
): NoAvailableDeliveryChannelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoAvailableOrganizationException
 */
const de_NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoRunningConfigurationRecorderException
 */
const de_NoRunningConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoRunningConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchBucketException
 */
const de_NoSuchBucketException = (output: any, context: __SerdeContext): NoSuchBucketException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchConfigRuleException
 */
const de_NoSuchConfigRuleException = (output: any, context: __SerdeContext): NoSuchConfigRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchConfigRuleInConformancePackException
 */
const de_NoSuchConfigRuleInConformancePackException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigRuleInConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchConfigurationAggregatorException
 */
const de_NoSuchConfigurationAggregatorException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigurationAggregatorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchConfigurationRecorderException
 */
const de_NoSuchConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchConformancePackException
 */
const de_NoSuchConformancePackException = (output: any, context: __SerdeContext): NoSuchConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchDeliveryChannelException
 */
const de_NoSuchDeliveryChannelException = (output: any, context: __SerdeContext): NoSuchDeliveryChannelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchOrganizationConfigRuleException
 */
const de_NoSuchOrganizationConfigRuleException = (
  output: any,
  context: __SerdeContext
): NoSuchOrganizationConfigRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchOrganizationConformancePackException
 */
const de_NoSuchOrganizationConformancePackException = (
  output: any,
  context: __SerdeContext
): NoSuchOrganizationConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchRemediationConfigurationException
 */
const de_NoSuchRemediationConfigurationException = (
  output: any,
  context: __SerdeContext
): NoSuchRemediationConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchRemediationExceptionException
 */
const de_NoSuchRemediationExceptionException = (
  output: any,
  context: __SerdeContext
): NoSuchRemediationExceptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchRetentionConfigurationException
 */
const de_NoSuchRetentionConfigurationException = (
  output: any,
  context: __SerdeContext
): NoSuchRetentionConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationAccessDeniedException
 */
const de_OrganizationAccessDeniedException = (
  output: any,
  context: __SerdeContext
): OrganizationAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationAggregationSource
 */
const de_OrganizationAggregationSource = (output: any, context: __SerdeContext): OrganizationAggregationSource => {
  return {
    AllAwsRegions: __expectBoolean(output.AllAwsRegions),
    AwsRegions: output.AwsRegions != null ? de_AggregatorRegionList(output.AwsRegions, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException
 */
const de_OrganizationAllFeaturesNotEnabledException = (
  output: any,
  context: __SerdeContext
): OrganizationAllFeaturesNotEnabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConfigRule
 */
const de_OrganizationConfigRule = (output: any, context: __SerdeContext): OrganizationConfigRule => {
  return {
    ExcludedAccounts:
      output.ExcludedAccounts != null ? de_ExcludedAccounts(output.ExcludedAccounts, context) : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConfigRuleArn: __expectString(output.OrganizationConfigRuleArn),
    OrganizationConfigRuleName: __expectString(output.OrganizationConfigRuleName),
    OrganizationCustomPolicyRuleMetadata:
      output.OrganizationCustomPolicyRuleMetadata != null
        ? de_OrganizationCustomPolicyRuleMetadataNoPolicy(output.OrganizationCustomPolicyRuleMetadata, context)
        : undefined,
    OrganizationCustomRuleMetadata:
      output.OrganizationCustomRuleMetadata != null
        ? de_OrganizationCustomRuleMetadata(output.OrganizationCustomRuleMetadata, context)
        : undefined,
    OrganizationManagedRuleMetadata:
      output.OrganizationManagedRuleMetadata != null
        ? de_OrganizationManagedRuleMetadata(output.OrganizationManagedRuleMetadata, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleDetailedStatus
 */
const de_OrganizationConfigRuleDetailedStatus = (output: any, context: __SerdeContext): MemberAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberAccountStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConfigRules
 */
const de_OrganizationConfigRules = (output: any, context: __SerdeContext): OrganizationConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationConfigRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleStatus
 */
const de_OrganizationConfigRuleStatus = (output: any, context: __SerdeContext): OrganizationConfigRuleStatus => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConfigRuleName: __expectString(output.OrganizationConfigRuleName),
    OrganizationRuleStatus: __expectString(output.OrganizationRuleStatus),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleStatuses
 */
const de_OrganizationConfigRuleStatuses = (output: any, context: __SerdeContext): OrganizationConfigRuleStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationConfigRuleStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs
 */
const de_OrganizationConfigRuleTriggerTypeNoSNs = (
  output: any,
  context: __SerdeContext
): (OrganizationConfigRuleTriggerTypeNoSN | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleTriggerTypes
 */
const de_OrganizationConfigRuleTriggerTypes = (
  output: any,
  context: __SerdeContext
): (OrganizationConfigRuleTriggerType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConformancePack
 */
const de_OrganizationConformancePack = (output: any, context: __SerdeContext): OrganizationConformancePack => {
  return {
    ConformancePackInputParameters:
      output.ConformancePackInputParameters != null
        ? de_ConformancePackInputParameters(output.ConformancePackInputParameters, context)
        : undefined,
    DeliveryS3Bucket: __expectString(output.DeliveryS3Bucket),
    DeliveryS3KeyPrefix: __expectString(output.DeliveryS3KeyPrefix),
    ExcludedAccounts:
      output.ExcludedAccounts != null ? de_ExcludedAccounts(output.ExcludedAccounts, context) : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConformancePackArn: __expectString(output.OrganizationConformancePackArn),
    OrganizationConformancePackName: __expectString(output.OrganizationConformancePackName),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackDetailedStatus
 */
const de_OrganizationConformancePackDetailedStatus = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackDetailedStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    ConformancePackName: __expectString(output.ConformancePackName),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackDetailedStatuses
 */
const de_OrganizationConformancePackDetailedStatuses = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackDetailedStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationConformancePackDetailedStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConformancePacks
 */
const de_OrganizationConformancePacks = (output: any, context: __SerdeContext): OrganizationConformancePack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationConformancePack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackStatus
 */
const de_OrganizationConformancePackStatus = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackStatus => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConformancePackName: __expectString(output.OrganizationConformancePackName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackStatuses
 */
const de_OrganizationConformancePackStatuses = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationConformancePackStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackTemplateValidationException
 */
const de_OrganizationConformancePackTemplateValidationException = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackTemplateValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationCustomPolicyRuleMetadataNoPolicy
 */
const de_OrganizationCustomPolicyRuleMetadataNoPolicy = (
  output: any,
  context: __SerdeContext
): OrganizationCustomPolicyRuleMetadataNoPolicy => {
  return {
    DebugLogDeliveryAccounts:
      output.DebugLogDeliveryAccounts != null
        ? de_DebugLogDeliveryAccounts(output.DebugLogDeliveryAccounts, context)
        : undefined,
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    OrganizationConfigRuleTriggerTypes:
      output.OrganizationConfigRuleTriggerTypes != null
        ? de_OrganizationConfigRuleTriggerTypeNoSNs(output.OrganizationConfigRuleTriggerTypes, context)
        : undefined,
    PolicyRuntime: __expectString(output.PolicyRuntime),
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null ? de_ResourceTypesScope(output.ResourceTypesScope, context) : undefined,
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationCustomRuleMetadata
 */
const de_OrganizationCustomRuleMetadata = (output: any, context: __SerdeContext): OrganizationCustomRuleMetadata => {
  return {
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    LambdaFunctionArn: __expectString(output.LambdaFunctionArn),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    OrganizationConfigRuleTriggerTypes:
      output.OrganizationConfigRuleTriggerTypes != null
        ? de_OrganizationConfigRuleTriggerTypes(output.OrganizationConfigRuleTriggerTypes, context)
        : undefined,
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null ? de_ResourceTypesScope(output.ResourceTypesScope, context) : undefined,
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationManagedRuleMetadata
 */
const de_OrganizationManagedRuleMetadata = (output: any, context: __SerdeContext): OrganizationManagedRuleMetadata => {
  return {
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null ? de_ResourceTypesScope(output.ResourceTypesScope, context) : undefined,
    RuleIdentifier: __expectString(output.RuleIdentifier),
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

/**
 * deserializeAws_json1_1OversizedConfigurationItemException
 */
const de_OversizedConfigurationItemException = (
  output: any,
  context: __SerdeContext
): OversizedConfigurationItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PendingAggregationRequest
 */
const de_PendingAggregationRequest = (output: any, context: __SerdeContext): PendingAggregationRequest => {
  return {
    RequesterAccountId: __expectString(output.RequesterAccountId),
    RequesterAwsRegion: __expectString(output.RequesterAwsRegion),
  } as any;
};

/**
 * deserializeAws_json1_1PendingAggregationRequestList
 */
const de_PendingAggregationRequestList = (output: any, context: __SerdeContext): PendingAggregationRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PendingAggregationRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutAggregationAuthorizationResponse
 */
const de_PutAggregationAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): PutAggregationAuthorizationResponse => {
  return {
    AggregationAuthorization:
      output.AggregationAuthorization != null
        ? de_AggregationAuthorization(output.AggregationAuthorization, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutConfigurationAggregatorResponse
 */
const de_PutConfigurationAggregatorResponse = (
  output: any,
  context: __SerdeContext
): PutConfigurationAggregatorResponse => {
  return {
    ConfigurationAggregator:
      output.ConfigurationAggregator != null
        ? de_ConfigurationAggregator(output.ConfigurationAggregator, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutConformancePackResponse
 */
const de_PutConformancePackResponse = (output: any, context: __SerdeContext): PutConformancePackResponse => {
  return {
    ConformancePackArn: __expectString(output.ConformancePackArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutEvaluationsResponse
 */
const de_PutEvaluationsResponse = (output: any, context: __SerdeContext): PutEvaluationsResponse => {
  return {
    FailedEvaluations: output.FailedEvaluations != null ? de_Evaluations(output.FailedEvaluations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutExternalEvaluationResponse
 */
const de_PutExternalEvaluationResponse = (output: any, context: __SerdeContext): PutExternalEvaluationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutOrganizationConfigRuleResponse
 */
const de_PutOrganizationConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): PutOrganizationConfigRuleResponse => {
  return {
    OrganizationConfigRuleArn: __expectString(output.OrganizationConfigRuleArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutOrganizationConformancePackResponse
 */
const de_PutOrganizationConformancePackResponse = (
  output: any,
  context: __SerdeContext
): PutOrganizationConformancePackResponse => {
  return {
    OrganizationConformancePackArn: __expectString(output.OrganizationConformancePackArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutRemediationConfigurationsResponse
 */
const de_PutRemediationConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): PutRemediationConfigurationsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null ? de_FailedRemediationBatches(output.FailedBatches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRemediationExceptionsResponse
 */
const de_PutRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): PutRemediationExceptionsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null ? de_FailedRemediationExceptionBatches(output.FailedBatches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRetentionConfigurationResponse
 */
const de_PutRetentionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutRetentionConfigurationResponse => {
  return {
    RetentionConfiguration:
      output.RetentionConfiguration != null
        ? de_RetentionConfiguration(output.RetentionConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutStoredQueryResponse
 */
const de_PutStoredQueryResponse = (output: any, context: __SerdeContext): PutStoredQueryResponse => {
  return {
    QueryArn: __expectString(output.QueryArn),
  } as any;
};

/**
 * deserializeAws_json1_1QueryInfo
 */
const de_QueryInfo = (output: any, context: __SerdeContext): QueryInfo => {
  return {
    SelectFields: output.SelectFields != null ? de_FieldInfoList(output.SelectFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecordingGroup
 */
const de_RecordingGroup = (output: any, context: __SerdeContext): RecordingGroup => {
  return {
    allSupported: __expectBoolean(output.allSupported),
    includeGlobalResourceTypes: __expectBoolean(output.includeGlobalResourceTypes),
    resourceTypes: output.resourceTypes != null ? de_ResourceTypeList(output.resourceTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RelatedEventList
 */
const de_RelatedEventList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Relationship
 */
const de_Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    relationshipName: __expectString(output.relationshipName),
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1RelationshipList
 */
const de_RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Relationship(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationConfiguration
 */
const de_RemediationConfiguration = (output: any, context: __SerdeContext): RemediationConfiguration => {
  return {
    Arn: __expectString(output.Arn),
    Automatic: __expectBoolean(output.Automatic),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    CreatedByService: __expectString(output.CreatedByService),
    ExecutionControls:
      output.ExecutionControls != null ? de_ExecutionControls(output.ExecutionControls, context) : undefined,
    MaximumAutomaticAttempts: __expectInt32(output.MaximumAutomaticAttempts),
    Parameters: output.Parameters != null ? de_RemediationParameters(output.Parameters, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
    RetryAttemptSeconds: __expectLong(output.RetryAttemptSeconds),
    TargetId: __expectString(output.TargetId),
    TargetType: __expectString(output.TargetType),
    TargetVersion: __expectString(output.TargetVersion),
  } as any;
};

/**
 * deserializeAws_json1_1RemediationConfigurations
 */
const de_RemediationConfigurations = (output: any, context: __SerdeContext): RemediationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationException
 */
const de_RemediationException = (output: any, context: __SerdeContext): RemediationException => {
  return {
    ConfigRuleName: __expectString(output.ConfigRuleName),
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1RemediationExceptionResourceKey
 */
const de_RemediationExceptionResourceKey = (output: any, context: __SerdeContext): RemediationExceptionResourceKey => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1RemediationExceptionResourceKeys
 */
const de_RemediationExceptionResourceKeys = (
  output: any,
  context: __SerdeContext
): RemediationExceptionResourceKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationExceptionResourceKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationExceptions
 */
const de_RemediationExceptions = (output: any, context: __SerdeContext): RemediationException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationException(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationExecutionStatus
 */
const de_RemediationExecutionStatus = (output: any, context: __SerdeContext): RemediationExecutionStatus => {
  return {
    InvocationTime:
      output.InvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InvocationTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ResourceKey: output.ResourceKey != null ? de_ResourceKey(output.ResourceKey, context) : undefined,
    State: __expectString(output.State),
    StepDetails: output.StepDetails != null ? de_RemediationExecutionSteps(output.StepDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RemediationExecutionStatuses
 */
const de_RemediationExecutionStatuses = (output: any, context: __SerdeContext): RemediationExecutionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationExecutionStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationExecutionStep
 */
const de_RemediationExecutionStep = (output: any, context: __SerdeContext): RemediationExecutionStep => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    Name: __expectString(output.Name),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    StopTime:
      output.StopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RemediationExecutionSteps
 */
const de_RemediationExecutionSteps = (output: any, context: __SerdeContext): RemediationExecutionStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationExecutionStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationInProgressException
 */
const de_RemediationInProgressException = (output: any, context: __SerdeContext): RemediationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RemediationParameters
 */
const de_RemediationParameters = (output: any, context: __SerdeContext): Record<string, RemediationParameterValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RemediationParameterValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_RemediationParameterValue(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1RemediationParameterValue
 */
const de_RemediationParameterValue = (output: any, context: __SerdeContext): RemediationParameterValue => {
  return {
    ResourceValue: output.ResourceValue != null ? de_ResourceValue(output.ResourceValue, context) : undefined,
    StaticValue: output.StaticValue != null ? de_StaticValue(output.StaticValue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceConcurrentModificationException
 */
const de_ResourceConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ResourceConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceCount
 */
const de_ResourceCount = (output: any, context: __SerdeContext): ResourceCount => {
  return {
    count: __expectLong(output.count),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceCounts
 */
const de_ResourceCounts = (output: any, context: __SerdeContext): ResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceCount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    ResourceConfiguration: __expectString(output.ResourceConfiguration),
    ResourceConfigurationSchemaType: __expectString(output.ResourceConfigurationSchemaType),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceEvaluation
 */
const de_ResourceEvaluation = (output: any, context: __SerdeContext): ResourceEvaluation => {
  return {
    EvaluationMode: __expectString(output.EvaluationMode),
    EvaluationStartTimestamp:
      output.EvaluationStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationStartTimestamp)))
        : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceEvaluations
 */
const de_ResourceEvaluations = (output: any, context: __SerdeContext): ResourceEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceEvaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceIdentifier
 */
const de_ResourceIdentifier = (output: any, context: __SerdeContext): ResourceIdentifier => {
  return {
    resourceDeletionTime:
      output.resourceDeletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resourceDeletionTime)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceIdentifierList
 */
const de_ResourceIdentifierList = (output: any, context: __SerdeContext): ResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceKey
 */
const de_ResourceKey = (output: any, context: __SerdeContext): ResourceKey => {
  return {
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceKeys
 */
const de_ResourceKeys = (output: any, context: __SerdeContext): ResourceKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotDiscoveredException
 */
const de_ResourceNotDiscoveredException = (output: any, context: __SerdeContext): ResourceNotDiscoveredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTypeList
 */
const de_ResourceTypeList = (output: any, context: __SerdeContext): (ResourceType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceTypesScope
 */
const de_ResourceTypesScope = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceValue
 */
const de_ResourceValue = (output: any, context: __SerdeContext): ResourceValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Results
 */
const de_Results = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RetentionConfiguration
 */
const de_RetentionConfiguration = (output: any, context: __SerdeContext): RetentionConfiguration => {
  return {
    Name: __expectString(output.Name),
    RetentionPeriodInDays: __expectInt32(output.RetentionPeriodInDays),
  } as any;
};

/**
 * deserializeAws_json1_1RetentionConfigurationList
 */
const de_RetentionConfigurationList = (output: any, context: __SerdeContext): RetentionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RetentionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Scope
 */
const de_Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    ComplianceResourceId: __expectString(output.ComplianceResourceId),
    ComplianceResourceTypes:
      output.ComplianceResourceTypes != null
        ? de_ComplianceResourceTypes(output.ComplianceResourceTypes, context)
        : undefined,
    TagKey: __expectString(output.TagKey),
    TagValue: __expectString(output.TagValue),
  } as any;
};

/**
 * deserializeAws_json1_1SelectAggregateResourceConfigResponse
 */
const de_SelectAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): SelectAggregateResourceConfigResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryInfo: output.QueryInfo != null ? de_QueryInfo(output.QueryInfo, context) : undefined,
    Results: output.Results != null ? de_Results(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SelectResourceConfigResponse
 */
const de_SelectResourceConfigResponse = (output: any, context: __SerdeContext): SelectResourceConfigResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryInfo: output.QueryInfo != null ? de_QueryInfo(output.QueryInfo, context) : undefined,
    Results: output.Results != null ? de_Results(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    CustomPolicyDetails:
      output.CustomPolicyDetails != null ? de_CustomPolicyDetails(output.CustomPolicyDetails, context) : undefined,
    Owner: __expectString(output.Owner),
    SourceDetails: output.SourceDetails != null ? de_SourceDetails(output.SourceDetails, context) : undefined,
    SourceIdentifier: __expectString(output.SourceIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1SourceDetail
 */
const de_SourceDetail = (output: any, context: __SerdeContext): SourceDetail => {
  return {
    EventSource: __expectString(output.EventSource),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    MessageType: __expectString(output.MessageType),
  } as any;
};

/**
 * deserializeAws_json1_1SourceDetails
 */
const de_SourceDetails = (output: any, context: __SerdeContext): SourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SsmControls
 */
const de_SsmControls = (output: any, context: __SerdeContext): SsmControls => {
  return {
    ConcurrentExecutionRatePercentage: __expectInt32(output.ConcurrentExecutionRatePercentage),
    ErrorPercentage: __expectInt32(output.ErrorPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1StartConfigRulesEvaluationResponse
 */
const de_StartConfigRulesEvaluationResponse = (
  output: any,
  context: __SerdeContext
): StartConfigRulesEvaluationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartRemediationExecutionResponse
 */
const de_StartRemediationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartRemediationExecutionResponse => {
  return {
    FailedItems: output.FailedItems != null ? de_ResourceKeys(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

/**
 * deserializeAws_json1_1StartResourceEvaluationResponse
 */
const de_StartResourceEvaluationResponse = (output: any, context: __SerdeContext): StartResourceEvaluationResponse => {
  return {
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1StaticParameterValues
 */
const de_StaticParameterValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StaticValue
 */
const de_StaticValue = (output: any, context: __SerdeContext): StaticValue => {
  return {
    Values: output.Values != null ? de_StaticParameterValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StoredQuery
 */
const de_StoredQuery = (output: any, context: __SerdeContext): StoredQuery => {
  return {
    Description: __expectString(output.Description),
    Expression: __expectString(output.Expression),
    QueryArn: __expectString(output.QueryArn),
    QueryId: __expectString(output.QueryId),
    QueryName: __expectString(output.QueryName),
  } as any;
};

/**
 * deserializeAws_json1_1StoredQueryMetadata
 */
const de_StoredQueryMetadata = (output: any, context: __SerdeContext): StoredQueryMetadata => {
  return {
    Description: __expectString(output.Description),
    QueryArn: __expectString(output.QueryArn),
    QueryId: __expectString(output.QueryId),
    QueryName: __expectString(output.QueryName),
  } as any;
};

/**
 * deserializeAws_json1_1StoredQueryMetadataList
 */
const de_StoredQueryMetadataList = (output: any, context: __SerdeContext): StoredQueryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StoredQueryMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SupplementaryConfiguration
 */
const de_SupplementaryConfiguration = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TemplateSSMDocumentDetails
 */
const de_TemplateSSMDocumentDetails = (output: any, context: __SerdeContext): TemplateSSMDocumentDetails => {
  return {
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedResourceIdentifierList
 */
const de_UnprocessedResourceIdentifierList = (output: any, context: __SerdeContext): AggregateResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateResourceIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `StarlingDoveService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
