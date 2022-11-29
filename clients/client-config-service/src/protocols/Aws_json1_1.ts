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

export const serializeAws_json1_1BatchGetAggregateResourceConfigCommand = async (
  input: BatchGetAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.BatchGetAggregateResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetResourceConfigCommand = async (
  input: BatchGetResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.BatchGetResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAggregationAuthorizationCommand = async (
  input: DeleteAggregationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteAggregationAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAggregationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConfigRuleCommand = async (
  input: DeleteConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConfigurationAggregatorCommand = async (
  input: DeleteConfigurationAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteConfigurationAggregator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConfigurationAggregatorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConfigurationRecorderCommand = async (
  input: DeleteConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteConfigurationRecorder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConformancePackCommand = async (
  input: DeleteConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteConformancePack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeliveryChannelCommand = async (
  input: DeleteDeliveryChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteDeliveryChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeliveryChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEvaluationResultsCommand = async (
  input: DeleteEvaluationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteEvaluationResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEvaluationResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOrganizationConfigRuleCommand = async (
  input: DeleteOrganizationConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteOrganizationConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOrganizationConformancePackCommand = async (
  input: DeleteOrganizationConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteOrganizationConformancePack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOrganizationConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePendingAggregationRequestCommand = async (
  input: DeletePendingAggregationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeletePendingAggregationRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePendingAggregationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRemediationConfigurationCommand = async (
  input: DeleteRemediationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteRemediationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRemediationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRemediationExceptionsCommand = async (
  input: DeleteRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteRemediationExceptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourceConfigCommand = async (
  input: DeleteResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRetentionConfigurationCommand = async (
  input: DeleteRetentionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteRetentionConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRetentionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStoredQueryCommand = async (
  input: DeleteStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeleteStoredQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeliverConfigSnapshotCommand = async (
  input: DeliverConfigSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DeliverConfigSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeliverConfigSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = async (
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConfigRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = async (
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeAggregateComplianceByConformancePacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAggregationAuthorizationsCommand = async (
  input: DescribeAggregationAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeAggregationAuthorizations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAggregationAuthorizationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComplianceByConfigRuleCommand = async (
  input: DescribeComplianceByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeComplianceByConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComplianceByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComplianceByResourceCommand = async (
  input: DescribeComplianceByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeComplianceByResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComplianceByResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = async (
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigRuleEvaluationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigRulesCommand = async (
  input: DescribeConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationAggregatorsCommand = async (
  input: DescribeConfigurationAggregatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = async (
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationRecordersCommand = async (
  input: DescribeConfigurationRecordersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecordersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationRecorderStatusCommand = async (
  input: DescribeConfigurationRecorderStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConfigurationRecorderStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationRecorderStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConformancePackComplianceCommand = async (
  input: DescribeConformancePackComplianceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConformancePackCompliance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConformancePackComplianceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConformancePacksCommand = async (
  input: DescribeConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConformancePacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConformancePackStatusCommand = async (
  input: DescribeConformancePackStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeConformancePackStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConformancePackStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDeliveryChannelsCommand = async (
  input: DescribeDeliveryChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeDeliveryChannels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDeliveryChannelStatusCommand = async (
  input: DescribeDeliveryChannelStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeDeliveryChannelStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDeliveryChannelStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationConfigRulesCommand = async (
  input: DescribeOrganizationConfigRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = async (
  input: DescribeOrganizationConfigRuleStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeOrganizationConfigRuleStatuses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationConformancePacksCommand = async (
  input: DescribeOrganizationConformancePacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = async (
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeOrganizationConformancePackStatuses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePendingAggregationRequestsCommand = async (
  input: DescribePendingAggregationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribePendingAggregationRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePendingAggregationRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRemediationConfigurationsCommand = async (
  input: DescribeRemediationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeRemediationConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRemediationConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRemediationExceptionsCommand = async (
  input: DescribeRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeRemediationExceptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRemediationExecutionStatusCommand = async (
  input: DescribeRemediationExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeRemediationExecutionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRemediationExecutionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRetentionConfigurationsCommand = async (
  input: DescribeRetentionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.DescribeRetentionConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRetentionConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = async (
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = async (
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetAggregateConfigRuleComplianceSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = async (
  input: GetAggregateConformancePackComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetAggregateConformancePackComplianceSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = async (
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetAggregateDiscoveredResourceCounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAggregateResourceConfigCommand = async (
  input: GetAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetAggregateResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = async (
  input: GetComplianceDetailsByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetComplianceDetailsByConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceDetailsByResourceCommand = async (
  input: GetComplianceDetailsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetComplianceDetailsByResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComplianceDetailsByResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = async (
  input: GetComplianceSummaryByConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetComplianceSummaryByConfigRule",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = async (
  input: GetComplianceSummaryByResourceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetComplianceSummaryByResourceType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConformancePackComplianceDetailsCommand = async (
  input: GetConformancePackComplianceDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetConformancePackComplianceDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConformancePackComplianceSummaryCommand = async (
  input: GetConformancePackComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetConformancePackComplianceSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConformancePackComplianceSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCustomRulePolicyCommand = async (
  input: GetCustomRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetCustomRulePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCustomRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiscoveredResourceCountsCommand = async (
  input: GetDiscoveredResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetDiscoveredResourceCounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiscoveredResourceCountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = async (
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = async (
  input: GetOrganizationConformancePackDetailedStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetOrganizationConformancePackDetailedStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOrganizationCustomRulePolicyCommand = async (
  input: GetOrganizationCustomRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetOrganizationCustomRulePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOrganizationCustomRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceConfigHistoryCommand = async (
  input: GetResourceConfigHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetResourceConfigHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourceConfigHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceEvaluationSummaryCommand = async (
  input: GetResourceEvaluationSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetResourceEvaluationSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourceEvaluationSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStoredQueryCommand = async (
  input: GetStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.GetStoredQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAggregateDiscoveredResourcesCommand = async (
  input: ListAggregateDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListAggregateDiscoveredResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAggregateDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConformancePackComplianceScoresCommand = async (
  input: ListConformancePackComplianceScoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListConformancePackComplianceScores",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConformancePackComplianceScoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListDiscoveredResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceEvaluationsCommand = async (
  input: ListResourceEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListResourceEvaluations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStoredQueriesCommand = async (
  input: ListStoredQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListStoredQueries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStoredQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAggregationAuthorizationCommand = async (
  input: PutAggregationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutAggregationAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAggregationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutConfigRuleCommand = async (
  input: PutConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutConfigurationAggregatorCommand = async (
  input: PutConfigurationAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutConfigurationAggregator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutConfigurationAggregatorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutConfigurationRecorderCommand = async (
  input: PutConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutConfigurationRecorder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutConformancePackCommand = async (
  input: PutConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutConformancePack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDeliveryChannelCommand = async (
  input: PutDeliveryChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutDeliveryChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDeliveryChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEvaluationsCommand = async (
  input: PutEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutEvaluations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutExternalEvaluationCommand = async (
  input: PutExternalEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutExternalEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutExternalEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutOrganizationConfigRuleCommand = async (
  input: PutOrganizationConfigRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutOrganizationConfigRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutOrganizationConfigRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutOrganizationConformancePackCommand = async (
  input: PutOrganizationConformancePackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutOrganizationConformancePack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutOrganizationConformancePackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRemediationConfigurationsCommand = async (
  input: PutRemediationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutRemediationConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRemediationConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRemediationExceptionsCommand = async (
  input: PutRemediationExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutRemediationExceptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRemediationExceptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourceConfigCommand = async (
  input: PutResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRetentionConfigurationCommand = async (
  input: PutRetentionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutRetentionConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRetentionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutStoredQueryCommand = async (
  input: PutStoredQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.PutStoredQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutStoredQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SelectAggregateResourceConfigCommand = async (
  input: SelectAggregateResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.SelectAggregateResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SelectAggregateResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SelectResourceConfigCommand = async (
  input: SelectResourceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.SelectResourceConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SelectResourceConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartConfigRulesEvaluationCommand = async (
  input: StartConfigRulesEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.StartConfigRulesEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartConfigRulesEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartConfigurationRecorderCommand = async (
  input: StartConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.StartConfigurationRecorder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartRemediationExecutionCommand = async (
  input: StartRemediationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.StartRemediationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartRemediationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartResourceEvaluationCommand = async (
  input: StartResourceEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.StartResourceEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartResourceEvaluationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopConfigurationRecorderCommand = async (
  input: StopConfigurationRecorderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.StopConfigurationRecorder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopConfigurationRecorderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "StarlingDoveService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchGetAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetAggregateResourceConfigResponse(data, context);
  const response: BatchGetAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetAggregateResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetResourceConfigResponse(data, context);
  const response: BatchGetResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAggregationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAggregationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAggregationAuthorizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAggregationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAggregationAuthorizationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConfigurationAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationAggregatorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConfigurationAggregatorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationAggregatorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConfigurationAggregatorCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConfigurationRecorderCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConformancePackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConformancePackCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDeliveryChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeliveryChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliveryChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeliveryChannelCommandError = async (
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
      throw await deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse(parsedOutput, context);
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEvaluationResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEvaluationResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEvaluationResultsResponse(data, context);
  const response: DeleteEvaluationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEvaluationResultsCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOrganizationConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOrganizationConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOrganizationConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOrganizationConformancePackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOrganizationConformancePackCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePendingAggregationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePendingAggregationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePendingAggregationRequestCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePendingAggregationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePendingAggregationRequestCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRemediationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRemediationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRemediationConfigurationResponse(data, context);
  const response: DeleteRemediationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRemediationConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context);
    case "RemediationInProgressException":
    case "com.amazonaws.configservice#RemediationInProgressException":
      throw await deserializeAws_json1_1RemediationInProgressExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRemediationExceptionsResponse(data, context);
  const response: DeleteRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRemediationExceptionsCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourceConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRetentionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRetentionConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRetentionConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchRetentionConfigurationException":
    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
      throw await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStoredQueryResponse(data, context);
  const response: DeleteStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStoredQueryCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeliverConfigSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeliverConfigSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeliverConfigSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeliverConfigSnapshotResponse(data, context);
  const response: DeliverConfigSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeliverConfigSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "NoRunningConfigurationRecorderException":
    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
      throw await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "NoSuchDeliveryChannelException":
    case "com.amazonaws.configservice#NoSuchDeliveryChannelException":
      throw await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse(data, context);
  const response: DescribeAggregateComplianceByConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse(data, context);
  const response: DescribeAggregateComplianceByConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAggregationAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAggregationAuthorizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAggregationAuthorizationsResponse(data, context);
  const response: DescribeAggregationAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAggregationAuthorizationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComplianceByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComplianceByConfigRuleResponse(data, context);
  const response: DescribeComplianceByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComplianceByConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComplianceByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComplianceByResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComplianceByResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComplianceByResourceResponse(data, context);
  const response: DescribeComplianceByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComplianceByResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse(data, context);
  const response: DescribeConfigRuleEvaluationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigRulesResponse(data, context);
  const response: DescribeConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigRulesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigurationAggregatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationAggregatorsResponse(data, context);
  const response: DescribeConfigurationAggregatorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigurationAggregatorsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse(data, context);
  const response: DescribeConfigurationAggregatorSourcesStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigurationRecordersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecordersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationRecordersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationRecordersResponse(data, context);
  const response: DescribeConfigurationRecordersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigurationRecordersCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRecorderStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse(data, context);
  const response: DescribeConfigurationRecorderStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConfigurationRecorderStatusCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConformancePackComplianceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConformancePackComplianceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConformancePackComplianceResponse(data, context);
  const response: DescribeConformancePackComplianceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConformancePackComplianceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleInConformancePackException":
    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
      throw await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConformancePacksResponse(data, context);
  const response: DescribeConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConformancePacksCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConformancePackStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConformancePackStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConformancePackStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConformancePackStatusResponse(data, context);
  const response: DescribeConformancePackStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConformancePackStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDeliveryChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDeliveryChannelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryChannelsResponse(data, context);
  const response: DescribeDeliveryChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDeliveryChannelsCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDeliveryChannelStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryChannelStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryChannelStatusResponse(data, context);
  const response: DescribeDeliveryChannelStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDeliveryChannelStatusCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationConfigRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationConfigRulesResponse(data, context);
  const response: DescribeOrganizationConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationConfigRulesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse(data, context);
  const response: DescribeOrganizationConfigRuleStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationConformancePacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationConformancePacksResponse(data, context);
  const response: DescribeOrganizationConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationConformancePacksCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse(data, context);
  const response: DescribeOrganizationConformancePackStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePendingAggregationRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingAggregationRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePendingAggregationRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePendingAggregationRequestsResponse(data, context);
  const response: DescribePendingAggregationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePendingAggregationRequestsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRemediationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRemediationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRemediationConfigurationsResponse(data, context);
  const response: DescribeRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRemediationConfigurationsCommandError = async (
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

export const deserializeAws_json1_1DescribeRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRemediationExceptionsResponse(data, context);
  const response: DescribeRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRemediationExceptionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRemediationExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRemediationExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRemediationExecutionStatusResponse(data, context);
  const response: DescribeRemediationExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRemediationExecutionStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRetentionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRetentionConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRetentionConfigurationsResponse(data, context);
  const response: DescribeRetentionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRetentionConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchRetentionConfigurationException":
    case "com.amazonaws.configservice#NoSuchRetentionConfigurationException":
      throw await deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse(data, context);
  const response: GetAggregateComplianceDetailsByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse(data, context);
  const response: GetAggregateConfigRuleComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateConformancePackComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse(data, context);
  const response: GetAggregateConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse(data, context);
  const response: GetAggregateDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAggregateResourceConfigResponse(data, context);
  const response: GetAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAggregateResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "OversizedConfigurationItemException":
    case "com.amazonaws.configservice#OversizedConfigurationItemException":
      throw await deserializeAws_json1_1OversizedConfigurationItemExceptionResponse(parsedOutput, context);
    case "ResourceNotDiscoveredException":
    case "com.amazonaws.configservice#ResourceNotDiscoveredException":
      throw await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse(data, context);
  const response: GetComplianceDetailsByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetComplianceDetailsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailsByResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceDetailsByResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceDetailsByResourceResponse(data, context);
  const response: GetComplianceDetailsByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceDetailsByResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse(data, context);
  const response: GetComplianceSummaryByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommandError = async (
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

export const deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryByResourceTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse(data, context);
  const response: GetComplianceSummaryByResourceTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetConformancePackComplianceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConformancePackComplianceDetailsResponse(data, context);
  const response: GetConformancePackComplianceDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConformancePackComplianceDetailsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleInConformancePackException":
    case "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException":
      throw await deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetConformancePackComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConformancePackComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConformancePackComplianceSummaryResponse(data, context);
  const response: GetConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConformancePackComplianceSummaryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConformancePackException":
    case "com.amazonaws.configservice#NoSuchConformancePackException":
      throw await deserializeAws_json1_1NoSuchConformancePackExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCustomRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCustomRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCustomRulePolicyResponse(data, context);
  const response: GetCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCustomRulePolicyCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDiscoveredResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiscoveredResourceCountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiscoveredResourceCountsResponse(data, context);
  const response: GetDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiscoveredResourceCountsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse(data, context);
  const response: GetOrganizationConfigRuleDetailedStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConfigRuleException":
    case "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException":
      throw await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse(data, context);
  const response: GetOrganizationConformancePackDetailedStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchOrganizationConformancePackException":
    case "com.amazonaws.configservice#NoSuchOrganizationConformancePackException":
      throw await deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOrganizationCustomRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationCustomRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOrganizationCustomRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOrganizationCustomRulePolicyResponse(data, context);
  const response: GetOrganizationCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOrganizationCustomRulePolicyCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourceConfigHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceConfigHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourceConfigHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceConfigHistoryResponse(data, context);
  const response: GetResourceConfigHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceConfigHistoryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.configservice#InvalidTimeRangeException":
      throw await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ResourceNotDiscoveredException":
    case "com.amazonaws.configservice#ResourceNotDiscoveredException":
      throw await deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourceEvaluationSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEvaluationSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourceEvaluationSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceEvaluationSummaryResponse(data, context);
  const response: GetResourceEvaluationSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceEvaluationSummaryCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStoredQueryResponse(data, context);
  const response: GetStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStoredQueryCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregateDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse(data, context);
  const response: ListAggregateDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAggregateDiscoveredResourcesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListConformancePackComplianceScoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConformancePackComplianceScoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConformancePackComplianceScoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConformancePackComplianceScoresResponse(data, context);
  const response: ListConformancePackComplianceScoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConformancePackComplianceScoresCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDiscoveredResourcesResponse(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDiscoveredResourcesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceEvaluationsResponse(data, context);
  const response: ListResourceEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceEvaluationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.configservice#InvalidTimeRangeException":
      throw await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStoredQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStoredQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStoredQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStoredQueriesResponse(data, context);
  const response: ListStoredQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStoredQueriesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.configservice#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAggregationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAggregationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAggregationAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAggregationAuthorizationResponse(data, context);
  const response: PutAggregationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAggregationAuthorizationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConfigRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MaxNumberOfConfigRulesExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConfigRulesExceededException":
      throw await deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutConfigurationAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationAggregatorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConfigurationAggregatorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutConfigurationAggregatorResponse(data, context);
  const response: PutConfigurationAggregatorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutConfigurationAggregatorCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.configservice#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.configservice#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutConfigurationRecorderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse(parsedOutput, context);
    case "InvalidRecordingGroupException":
    case "com.amazonaws.configservice#InvalidRecordingGroupException":
      throw await deserializeAws_json1_1InvalidRecordingGroupExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.configservice#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "MaxNumberOfConfigurationRecordersExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConfigurationRecordersExceededException":
      throw await deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse(
        parsedOutput,
        context
      );
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

export const deserializeAws_json1_1PutConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConformancePackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutConformancePackResponse(data, context);
  const response: PutConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutConformancePackCommandError = async (
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
      throw await deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse(parsedOutput, context);
    case "InsufficientPermissionsException":
    case "com.amazonaws.configservice#InsufficientPermissionsException":
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MaxNumberOfConformancePacksExceededException":
    case "com.amazonaws.configservice#MaxNumberOfConformancePacksExceededException":
      throw await deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutDeliveryChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliveryChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDeliveryChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDeliveryChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDeliveryChannelCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse(parsedOutput, context);
    case "InvalidDeliveryChannelNameException":
    case "com.amazonaws.configservice#InvalidDeliveryChannelNameException":
      throw await deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse(parsedOutput, context);
    case "InvalidS3KeyPrefixException":
    case "com.amazonaws.configservice#InvalidS3KeyPrefixException":
      throw await deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse(parsedOutput, context);
    case "InvalidS3KmsKeyArnException":
    case "com.amazonaws.configservice#InvalidS3KmsKeyArnException":
      throw await deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse(parsedOutput, context);
    case "InvalidSNSTopicARNException":
    case "com.amazonaws.configservice#InvalidSNSTopicARNException":
      throw await deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse(parsedOutput, context);
    case "MaxNumberOfDeliveryChannelsExceededException":
    case "com.amazonaws.configservice#MaxNumberOfDeliveryChannelsExceededException":
      throw await deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse(parsedOutput, context);
    case "NoAvailableConfigurationRecorderException":
    case "com.amazonaws.configservice#NoAvailableConfigurationRecorderException":
      throw await deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "NoSuchBucketException":
    case "com.amazonaws.configservice#NoSuchBucketException":
      throw await deserializeAws_json1_1NoSuchBucketExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEvaluationsResponse(data, context);
  const response: PutEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEvaluationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidResultTokenException":
    case "com.amazonaws.configservice#InvalidResultTokenException":
      throw await deserializeAws_json1_1InvalidResultTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutExternalEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutExternalEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutExternalEvaluationResponse(data, context);
  const response: PutExternalEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutExternalEvaluationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutOrganizationConfigRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConfigRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutOrganizationConfigRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutOrganizationConfigRuleResponse(data, context);
  const response: PutOrganizationConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutOrganizationConfigRuleCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MaxNumberOfOrganizationConfigRulesExceededException":
    case "com.amazonaws.configservice#MaxNumberOfOrganizationConfigRulesExceededException":
      throw await deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutOrganizationConformancePackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOrganizationConformancePackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutOrganizationConformancePackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutOrganizationConformancePackResponse(data, context);
  const response: PutOrganizationConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutOrganizationConformancePackCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "MaxNumberOfOrganizationConformancePacksExceededException":
    case "com.amazonaws.configservice#MaxNumberOfOrganizationConformancePacksExceededException":
      throw await deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse(
        parsedOutput,
        context
      );
    case "NoAvailableOrganizationException":
    case "com.amazonaws.configservice#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "OrganizationAccessDeniedException":
    case "com.amazonaws.configservice#OrganizationAccessDeniedException":
      throw await deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse(parsedOutput, context);
    case "OrganizationAllFeaturesNotEnabledException":
    case "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException":
      throw await deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse(parsedOutput, context);
    case "OrganizationConformancePackTemplateValidationException":
    case "com.amazonaws.configservice#OrganizationConformancePackTemplateValidationException":
      throw await deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRemediationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRemediationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRemediationConfigurationsResponse(data, context);
  const response: PutRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRemediationConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRemediationExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRemediationExceptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRemediationExceptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRemediationExceptionsResponse(data, context);
  const response: PutRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRemediationExceptionsCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourceConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "MaxActiveResourcesExceededException":
    case "com.amazonaws.configservice#MaxActiveResourcesExceededException":
      throw await deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse(parsedOutput, context);
    case "NoRunningConfigurationRecorderException":
    case "com.amazonaws.configservice#NoRunningConfigurationRecorderException":
      throw await deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRetentionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRetentionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRetentionConfigurationResponse(data, context);
  const response: PutRetentionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRetentionConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MaxNumberOfRetentionConfigurationsExceededException":
    case "com.amazonaws.configservice#MaxNumberOfRetentionConfigurationsExceededException":
      throw await deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse(
        parsedOutput,
        context
      );
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

export const deserializeAws_json1_1PutStoredQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStoredQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutStoredQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutStoredQueryResponse(data, context);
  const response: PutStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutStoredQueryCommandError = async (
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
      throw await deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.configservice#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SelectAggregateResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SelectAggregateResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SelectAggregateResourceConfigResponse(data, context);
  const response: SelectAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SelectAggregateResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context);
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationAggregatorException":
    case "com.amazonaws.configservice#NoSuchConfigurationAggregatorException":
      throw await deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SelectResourceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectResourceConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SelectResourceConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SelectResourceConfigResponse(data, context);
  const response: SelectResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SelectResourceConfigCommandError = async (
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
      throw await deserializeAws_json1_1InvalidExpressionExceptionResponse(parsedOutput, context);
    case "InvalidLimitException":
    case "com.amazonaws.configservice#InvalidLimitException":
      throw await deserializeAws_json1_1InvalidLimitExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.configservice#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartConfigRulesEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigRulesEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartConfigRulesEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartConfigRulesEvaluationResponse(data, context);
  const response: StartConfigRulesEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartConfigRulesEvaluationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.configservice#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NoSuchConfigRuleException":
    case "com.amazonaws.configservice#NoSuchConfigRuleException":
      throw await deserializeAws_json1_1NoSuchConfigRuleExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.configservice#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartConfigurationRecorderCommandError = async (
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
      throw await deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse(parsedOutput, context);
    case "NoSuchConfigurationRecorderException":
    case "com.amazonaws.configservice#NoSuchConfigurationRecorderException":
      throw await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartRemediationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRemediationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartRemediationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRemediationExecutionResponse(data, context);
  const response: StartRemediationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartRemediationExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoSuchRemediationConfigurationException":
    case "com.amazonaws.configservice#NoSuchRemediationConfigurationException":
      throw await deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartResourceEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartResourceEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartResourceEvaluationResponse(data, context);
  const response: StartResourceEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartResourceEvaluationCommandError = async (
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
      throw await deserializeAws_json1_1IdempotentParameterMismatchResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.configservice#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopConfigurationRecorderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopConfigurationRecorderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopConfigurationRecorderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopConfigurationRecorderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopConfigurationRecorderCommandError = async (
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
      throw await deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.configservice#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.configservice#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConformancePackTemplateValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConformancePackTemplateValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConformancePackTemplateValidationException(body, context);
  const exception = new ConformancePackTemplateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatch> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatch(body, context);
  const exception = new IdempotentParameterMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientDeliveryPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDeliveryPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientDeliveryPolicyException(body, context);
  const exception = new InsufficientDeliveryPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPermissionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientPermissionsException(body, context);
  const exception = new InsufficientPermissionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidConfigurationRecorderNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRecorderNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConfigurationRecorderNameException(body, context);
  const exception = new InvalidConfigurationRecorderNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDeliveryChannelNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeliveryChannelNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeliveryChannelNameException(body, context);
  const exception = new InvalidDeliveryChannelNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidExpressionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExpressionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidExpressionException(body, context);
  const exception = new InvalidExpressionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidLimitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLimitException(body, context);
  const exception = new InvalidLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRecordingGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRecordingGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRecordingGroupException(body, context);
  const exception = new InvalidRecordingGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResultTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResultTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResultTokenException(body, context);
  const exception = new InvalidResultTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(body, context);
  const exception = new InvalidRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3KeyPrefixExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyPrefixException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3KeyPrefixException(body, context);
  const exception = new InvalidS3KeyPrefixException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3KmsKeyArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KmsKeyArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3KmsKeyArnException(body, context);
  const exception = new InvalidS3KmsKeyArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSNSTopicARNExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSNSTopicARNException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSNSTopicARNException(body, context);
  const exception = new InvalidSNSTopicARNException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(body, context);
  const exception = new InvalidTimeRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LastDeliveryChannelDeleteFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LastDeliveryChannelDeleteFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LastDeliveryChannelDeleteFailedException(body, context);
  const exception = new LastDeliveryChannelDeleteFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxActiveResourcesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxActiveResourcesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxActiveResourcesExceededException(body, context);
  const exception = new MaxActiveResourcesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfConfigRulesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConfigRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfConfigRulesExceededException(body, context);
  const exception = new MaxNumberOfConfigRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConfigurationRecordersExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException(body, context);
  const exception = new MaxNumberOfConfigurationRecordersExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfConformancePacksExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfConformancePacksExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfConformancePacksExceededException(body, context);
  const exception = new MaxNumberOfConformancePacksExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfDeliveryChannelsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException(body, context);
  const exception = new MaxNumberOfDeliveryChannelsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfOrganizationConfigRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException(body, context);
  const exception = new MaxNumberOfOrganizationConfigRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfOrganizationConformancePacksExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException(
    body,
    context
  );
  const exception = new MaxNumberOfOrganizationConformancePacksExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxNumberOfRetentionConfigurationsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException(body, context);
  const exception = new MaxNumberOfRetentionConfigurationsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoAvailableConfigurationRecorderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableConfigurationRecorderException(body, context);
  const exception = new NoAvailableConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoAvailableDeliveryChannelExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableDeliveryChannelException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableDeliveryChannelException(body, context);
  const exception = new NoAvailableDeliveryChannelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
  const exception = new NoAvailableOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoRunningConfigurationRecorderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoRunningConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoRunningConfigurationRecorderException(body, context);
  const exception = new NoRunningConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchBucketExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchBucketException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchBucketException(body, context);
  const exception = new NoSuchBucketException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchConfigRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchConfigRuleException(body, context);
  const exception = new NoSuchConfigRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchConfigRuleInConformancePackExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigRuleInConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchConfigRuleInConformancePackException(body, context);
  const exception = new NoSuchConfigRuleInConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchConfigurationAggregatorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigurationAggregatorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchConfigurationAggregatorException(body, context);
  const exception = new NoSuchConfigurationAggregatorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchConfigurationRecorderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConfigurationRecorderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchConfigurationRecorderException(body, context);
  const exception = new NoSuchConfigurationRecorderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchConformancePackExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchConformancePackException(body, context);
  const exception = new NoSuchConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchDeliveryChannelExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchDeliveryChannelException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchDeliveryChannelException(body, context);
  const exception = new NoSuchDeliveryChannelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchOrganizationConfigRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOrganizationConfigRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchOrganizationConfigRuleException(body, context);
  const exception = new NoSuchOrganizationConfigRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchOrganizationConformancePackExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOrganizationConformancePackException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchOrganizationConformancePackException(body, context);
  const exception = new NoSuchOrganizationConformancePackException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchRemediationConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRemediationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchRemediationConfigurationException(body, context);
  const exception = new NoSuchRemediationConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchRemediationExceptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRemediationExceptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchRemediationExceptionException(body, context);
  const exception = new NoSuchRemediationExceptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchRetentionConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRetentionConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchRetentionConfigurationException(body, context);
  const exception = new NoSuchRetentionConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationAccessDeniedException(body, context);
  const exception = new OrganizationAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationAllFeaturesNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException(body, context);
  const exception = new OrganizationAllFeaturesNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationConformancePackTemplateValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationConformancePackTemplateValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationConformancePackTemplateValidationException(body, context);
  const exception = new OrganizationConformancePackTemplateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OversizedConfigurationItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OversizedConfigurationItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OversizedConfigurationItemException(body, context);
  const exception = new OversizedConfigurationItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RemediationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RemediationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RemediationInProgressException(body, context);
  const exception = new RemediationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceConcurrentModificationException(body, context);
  const exception = new ResourceConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotDiscoveredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotDiscoveredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotDiscoveredException(body, context);
  const exception = new ResourceNotDiscoveredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccountAggregationSource = (
  input: AccountAggregationSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountIds != null && {
      AccountIds: serializeAws_json1_1AccountAggregationSourceAccountList(input.AccountIds, context),
    }),
    ...(input.AllAwsRegions != null && { AllAwsRegions: input.AllAwsRegions }),
    ...(input.AwsRegions != null && {
      AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context),
    }),
  };
};

const serializeAws_json1_1AccountAggregationSourceAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AccountAggregationSourceList = (
  input: AccountAggregationSource[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AccountAggregationSource(entry, context);
    });
};

const serializeAws_json1_1AggregateConformancePackComplianceFilters = (
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

const serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters = (
  input: AggregateConformancePackComplianceSummaryFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
  };
};

const serializeAws_json1_1AggregatedSourceStatusTypeList = (
  input: (AggregatedSourceStatusType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AggregateResourceIdentifier = (
  input: AggregateResourceIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.SourceAccountId != null && { SourceAccountId: input.SourceAccountId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
  };
};

const serializeAws_json1_1AggregatorRegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BatchGetAggregateResourceConfigRequest = (
  input: BatchGetAggregateResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.ResourceIdentifiers != null && {
      ResourceIdentifiers: serializeAws_json1_1ResourceIdentifiersList(input.ResourceIdentifiers, context),
    }),
  };
};

const serializeAws_json1_1BatchGetResourceConfigRequest = (
  input: BatchGetResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceKeys != null && { resourceKeys: serializeAws_json1_1ResourceKeys(input.resourceKeys, context) }),
  };
};

const serializeAws_json1_1ComplianceResourceTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ComplianceTypes = (input: (ComplianceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConfigRule = (input: ConfigRule, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleArn != null && { ConfigRuleArn: input.ConfigRuleArn }),
    ...(input.ConfigRuleId != null && { ConfigRuleId: input.ConfigRuleId }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ConfigRuleState != null && { ConfigRuleState: input.ConfigRuleState }),
    ...(input.CreatedBy != null && { CreatedBy: input.CreatedBy }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EvaluationModes != null && {
      EvaluationModes: serializeAws_json1_1EvaluationModes(input.EvaluationModes, context),
    }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.Scope != null && { Scope: serializeAws_json1_1Scope(input.Scope, context) }),
    ...(input.Source != null && { Source: serializeAws_json1_1Source(input.Source, context) }),
  };
};

const serializeAws_json1_1ConfigRuleComplianceFilters = (
  input: ConfigRuleComplianceFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

const serializeAws_json1_1ConfigRuleComplianceSummaryFilters = (
  input: ConfigRuleComplianceSummaryFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
  };
};

const serializeAws_json1_1ConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConfigSnapshotDeliveryProperties = (
  input: ConfigSnapshotDeliveryProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.deliveryFrequency != null && { deliveryFrequency: input.deliveryFrequency }),
  };
};

const serializeAws_json1_1ConfigurationAggregatorNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConfigurationRecorder = (input: ConfigurationRecorder, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.recordingGroup != null && {
      recordingGroup: serializeAws_json1_1RecordingGroup(input.recordingGroup, context),
    }),
    ...(input.roleARN != null && { roleARN: input.roleARN }),
  };
};

const serializeAws_json1_1ConfigurationRecorderNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConformancePackComplianceFilters = (
  input: ConformancePackComplianceFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    }),
  };
};

const serializeAws_json1_1ConformancePackComplianceResourceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConformancePackComplianceScoresFilters = (
  input: ConformancePackComplianceScoresFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: serializeAws_json1_1ConformancePackNameFilter(input.ConformancePackNames, context),
    }),
  };
};

const serializeAws_json1_1ConformancePackConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConformancePackEvaluationFilters = (
  input: ConformancePackEvaluationFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConformancePackConfigRuleNames(input.ConfigRuleNames, context),
    }),
    ...(input.ResourceIds != null && {
      ResourceIds: serializeAws_json1_1ConformancePackComplianceResourceIds(input.ResourceIds, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ConformancePackInputParameter = (
  input: ConformancePackInputParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ConformancePackInputParameters = (
  input: ConformancePackInputParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
};

const serializeAws_json1_1ConformancePackNameFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConformancePackNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConformancePackNamesToSummarizeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CustomPolicyDetails = (input: CustomPolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.EnableDebugLogDelivery != null && { EnableDebugLogDelivery: input.EnableDebugLogDelivery }),
    ...(input.PolicyRuntime != null && { PolicyRuntime: input.PolicyRuntime }),
    ...(input.PolicyText != null && { PolicyText: input.PolicyText }),
  };
};

const serializeAws_json1_1DebugLogDeliveryAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteAggregationAuthorizationRequest = (
  input: DeleteAggregationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizedAccountId != null && { AuthorizedAccountId: input.AuthorizedAccountId }),
    ...(input.AuthorizedAwsRegion != null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
  };
};

const serializeAws_json1_1DeleteConfigRuleRequest = (input: DeleteConfigRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

const serializeAws_json1_1DeleteConfigurationAggregatorRequest = (
  input: DeleteConfigurationAggregatorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
  };
};

const serializeAws_json1_1DeleteConfigurationRecorderRequest = (
  input: DeleteConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

const serializeAws_json1_1DeleteConformancePackRequest = (
  input: DeleteConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
  };
};

const serializeAws_json1_1DeleteDeliveryChannelRequest = (
  input: DeleteDeliveryChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryChannelName != null && { DeliveryChannelName: input.DeliveryChannelName }),
  };
};

const serializeAws_json1_1DeleteEvaluationResultsRequest = (
  input: DeleteEvaluationResultsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

const serializeAws_json1_1DeleteOrganizationConfigRuleRequest = (
  input: DeleteOrganizationConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

const serializeAws_json1_1DeleteOrganizationConformancePackRequest = (
  input: DeleteOrganizationConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
  };
};

const serializeAws_json1_1DeletePendingAggregationRequestRequest = (
  input: DeletePendingAggregationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequesterAccountId != null && { RequesterAccountId: input.RequesterAccountId }),
    ...(input.RequesterAwsRegion != null && { RequesterAwsRegion: input.RequesterAwsRegion }),
  };
};

const serializeAws_json1_1DeleteRemediationConfigurationRequest = (
  input: DeleteRemediationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1DeleteRemediationExceptionsRequest = (
  input: DeleteRemediationExceptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

const serializeAws_json1_1DeleteResourceConfigRequest = (
  input: DeleteResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1DeleteRetentionConfigurationRequest = (
  input: DeleteRetentionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionConfigurationName != null && { RetentionConfigurationName: input.RetentionConfigurationName }),
  };
};

const serializeAws_json1_1DeleteStoredQueryRequest = (
  input: DeleteStoredQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

const serializeAws_json1_1DeliverConfigSnapshotRequest = (
  input: DeliverConfigSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.deliveryChannelName != null && { deliveryChannelName: input.deliveryChannelName }),
  };
};

const serializeAws_json1_1DeliveryChannel = (input: DeliveryChannel, context: __SerdeContext): any => {
  return {
    ...(input.configSnapshotDeliveryProperties != null && {
      configSnapshotDeliveryProperties: serializeAws_json1_1ConfigSnapshotDeliveryProperties(
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

const serializeAws_json1_1DeliveryChannelNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DescribeAggregateComplianceByConfigRulesRequest = (
  input: DescribeAggregateComplianceByConfigRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ConfigRuleComplianceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAggregateComplianceByConformancePacksRequest = (
  input: DescribeAggregateComplianceByConformancePacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1AggregateConformancePackComplianceFilters(input.Filters, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAggregationAuthorizationsRequest = (
  input: DescribeAggregationAuthorizationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeComplianceByConfigRuleRequest = (
  input: DescribeComplianceByConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && {
      ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    }),
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeComplianceByResourceRequest = (
  input: DescribeComplianceByResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && {
      ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1DescribeConfigRuleEvaluationStatusRequest = (
  input: DescribeConfigRuleEvaluationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeConfigRulesFilters = (
  input: DescribeConfigRulesFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
  };
};

const serializeAws_json1_1DescribeConfigRulesRequest = (
  input: DescribeConfigRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1DescribeConfigRulesFilters(input.Filters, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusRequest = (
  input: DescribeConfigurationAggregatorSourcesStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UpdateStatus != null && {
      UpdateStatus: serializeAws_json1_1AggregatedSourceStatusTypeList(input.UpdateStatus, context),
    }),
  };
};

const serializeAws_json1_1DescribeConfigurationAggregatorsRequest = (
  input: DescribeConfigurationAggregatorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorNames != null && {
      ConfigurationAggregatorNames: serializeAws_json1_1ConfigurationAggregatorNameList(
        input.ConfigurationAggregatorNames,
        context
      ),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeConfigurationRecordersRequest = (
  input: DescribeConfigurationRecordersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderNames != null && {
      ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(
        input.ConfigurationRecorderNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribeConfigurationRecorderStatusRequest = (
  input: DescribeConfigurationRecorderStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderNames != null && {
      ConfigurationRecorderNames: serializeAws_json1_1ConfigurationRecorderNameList(
        input.ConfigurationRecorderNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribeConformancePackComplianceRequest = (
  input: DescribeConformancePackComplianceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1ConformancePackComplianceFilters(input.Filters, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeConformancePacksRequest = (
  input: DescribeConformancePacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeConformancePackStatusRequest = (
  input: DescribeConformancePackStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: serializeAws_json1_1ConformancePackNamesList(input.ConformancePackNames, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDeliveryChannelsRequest = (
  input: DescribeDeliveryChannelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryChannelNames != null && {
      DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeDeliveryChannelStatusRequest = (
  input: DescribeDeliveryChannelStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryChannelNames != null && {
      DeliveryChannelNames: serializeAws_json1_1DeliveryChannelNameList(input.DeliveryChannelNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeOrganizationConfigRulesRequest = (
  input: DescribeOrganizationConfigRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleNames != null && {
      OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(
        input.OrganizationConfigRuleNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribeOrganizationConfigRuleStatusesRequest = (
  input: DescribeOrganizationConfigRuleStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleNames != null && {
      OrganizationConfigRuleNames: serializeAws_json1_1OrganizationConfigRuleNames(
        input.OrganizationConfigRuleNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribeOrganizationConformancePacksRequest = (
  input: DescribeOrganizationConformancePacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackNames != null && {
      OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(
        input.OrganizationConformancePackNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribeOrganizationConformancePackStatusesRequest = (
  input: DescribeOrganizationConformancePackStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackNames != null && {
      OrganizationConformancePackNames: serializeAws_json1_1OrganizationConformancePackNames(
        input.OrganizationConformancePackNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DescribePendingAggregationRequestsRequest = (
  input: DescribePendingAggregationRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeRemediationConfigurationsRequest = (
  input: DescribeRemediationConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ConfigRuleNames(input.ConfigRuleNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeRemediationExceptionsRequest = (
  input: DescribeRemediationExceptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

const serializeAws_json1_1DescribeRemediationExecutionStatusRequest = (
  input: DescribeRemediationExecutionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceKeys != null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }),
  };
};

const serializeAws_json1_1DescribeRetentionConfigurationsRequest = (
  input: DescribeRetentionConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RetentionConfigurationNames != null && {
      RetentionConfigurationNames: serializeAws_json1_1RetentionConfigurationNameList(
        input.RetentionConfigurationNames,
        context
      ),
    }),
  };
};

const serializeAws_json1_1Evaluation = (input: Evaluation, context: __SerdeContext): any => {
  return {
    ...(input.Annotation != null && { Annotation: input.Annotation }),
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceType != null && { ComplianceResourceType: input.ComplianceResourceType }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.OrderingTimestamp != null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1EvaluationContext = (input: EvaluationContext, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationContextIdentifier != null && {
      EvaluationContextIdentifier: input.EvaluationContextIdentifier,
    }),
  };
};

const serializeAws_json1_1EvaluationModeConfiguration = (
  input: EvaluationModeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

const serializeAws_json1_1EvaluationModes = (input: EvaluationModeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EvaluationModeConfiguration(entry, context);
    });
};

const serializeAws_json1_1Evaluations = (input: Evaluation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Evaluation(entry, context);
    });
};

const serializeAws_json1_1ExcludedAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExecutionControls = (input: ExecutionControls, context: __SerdeContext): any => {
  return {
    ...(input.SsmControls != null && { SsmControls: serializeAws_json1_1SsmControls(input.SsmControls, context) }),
  };
};

const serializeAws_json1_1ExternalEvaluation = (input: ExternalEvaluation, context: __SerdeContext): any => {
  return {
    ...(input.Annotation != null && { Annotation: input.Annotation }),
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceType != null && { ComplianceResourceType: input.ComplianceResourceType }),
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.OrderingTimestamp != null && { OrderingTimestamp: Math.round(input.OrderingTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleRequest = (
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

const serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryRequest = (
  input: GetAggregateConfigRuleComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1ConfigRuleComplianceSummaryFilters(input.Filters, context),
    }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetAggregateConformancePackComplianceSummaryRequest = (
  input: GetAggregateConformancePackComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1AggregateConformancePackComplianceSummaryFilters(input.Filters, context),
    }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetAggregateDiscoveredResourceCountsRequest = (
  input: GetAggregateDiscoveredResourceCountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ResourceCountFilters(input.Filters, context) }),
    ...(input.GroupByKey != null && { GroupByKey: input.GroupByKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetAggregateResourceConfigRequest = (
  input: GetAggregateResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.ResourceIdentifier != null && {
      ResourceIdentifier: serializeAws_json1_1AggregateResourceIdentifier(input.ResourceIdentifier, context),
    }),
  };
};

const serializeAws_json1_1GetComplianceDetailsByConfigRuleRequest = (
  input: GetComplianceDetailsByConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && {
      ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetComplianceDetailsByResourceRequest = (
  input: GetComplianceDetailsByResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceTypes != null && {
      ComplianceTypes: serializeAws_json1_1ComplianceTypes(input.ComplianceTypes, context),
    }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceEvaluationId != null && { ResourceEvaluationId: input.ResourceEvaluationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1GetComplianceSummaryByResourceTypeRequest = (
  input: GetComplianceSummaryByResourceTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceTypes != null && {
      ResourceTypes: serializeAws_json1_1ResourceTypes(input.ResourceTypes, context),
    }),
  };
};

const serializeAws_json1_1GetConformancePackComplianceDetailsRequest = (
  input: GetConformancePackComplianceDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1ConformancePackEvaluationFilters(input.Filters, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetConformancePackComplianceSummaryRequest = (
  input: GetConformancePackComplianceSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackNames != null && {
      ConformancePackNames: serializeAws_json1_1ConformancePackNamesToSummarizeList(
        input.ConformancePackNames,
        context
      ),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCustomRulePolicyRequest = (
  input: GetCustomRulePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
  };
};

const serializeAws_json1_1GetDiscoveredResourceCountsRequest = (
  input: GetDiscoveredResourceCountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceTypes != null && {
      resourceTypes: serializeAws_json1_1ResourceTypes(input.resourceTypes, context),
    }),
  };
};

const serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusRequest = (
  input: GetOrganizationConfigRuleDetailedStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1StatusDetailFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

const serializeAws_json1_1GetOrganizationConformancePackDetailedStatusRequest = (
  input: GetOrganizationConformancePackDetailedStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1OrganizationResourceDetailedStatusFilters(input.Filters, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
  };
};

const serializeAws_json1_1GetOrganizationCustomRulePolicyRequest = (
  input: GetOrganizationCustomRulePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
  };
};

const serializeAws_json1_1GetResourceConfigHistoryRequest = (
  input: GetResourceConfigHistoryRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1GetResourceEvaluationSummaryRequest = (
  input: GetResourceEvaluationSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceEvaluationId != null && { ResourceEvaluationId: input.ResourceEvaluationId }),
  };
};

const serializeAws_json1_1GetStoredQueryRequest = (input: GetStoredQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

const serializeAws_json1_1ListAggregateDiscoveredResourcesRequest = (
  input: ListAggregateDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ResourceFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ListConformancePackComplianceScoresRequest = (
  input: ListConformancePackComplianceScoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_1ConformancePackComplianceScoresFilters(input.Filters, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ListDiscoveredResourcesRequest = (
  input: ListDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeDeletedResources != null && { includeDeletedResources: input.includeDeletedResources }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceIds != null && { resourceIds: serializeAws_json1_1ResourceIdList(input.resourceIds, context) }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

const serializeAws_json1_1ListResourceEvaluationsRequest = (
  input: ListResourceEvaluationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ResourceEvaluationFilters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListStoredQueriesRequest = (
  input: ListStoredQueriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1OrganizationAggregationSource = (
  input: OrganizationAggregationSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllAwsRegions != null && { AllAwsRegions: input.AllAwsRegions }),
    ...(input.AwsRegions != null && {
      AwsRegions: serializeAws_json1_1AggregatorRegionList(input.AwsRegions, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1OrganizationConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs = (
  input: (OrganizationConfigRuleTriggerTypeNoSN | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OrganizationConfigRuleTriggerTypes = (
  input: (OrganizationConfigRuleTriggerType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OrganizationConformancePackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OrganizationCustomPolicyRuleMetadata = (
  input: OrganizationCustomPolicyRuleMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.DebugLogDeliveryAccounts != null && {
      DebugLogDeliveryAccounts: serializeAws_json1_1DebugLogDeliveryAccounts(input.DebugLogDeliveryAccounts, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.OrganizationConfigRuleTriggerTypes != null && {
      OrganizationConfigRuleTriggerTypes: serializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs(
        input.OrganizationConfigRuleTriggerTypes,
        context
      ),
    }),
    ...(input.PolicyRuntime != null && { PolicyRuntime: input.PolicyRuntime }),
    ...(input.PolicyText != null && { PolicyText: input.PolicyText }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

const serializeAws_json1_1OrganizationCustomRuleMetadata = (
  input: OrganizationCustomRuleMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.LambdaFunctionArn != null && { LambdaFunctionArn: input.LambdaFunctionArn }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.OrganizationConfigRuleTriggerTypes != null && {
      OrganizationConfigRuleTriggerTypes: serializeAws_json1_1OrganizationConfigRuleTriggerTypes(
        input.OrganizationConfigRuleTriggerTypes,
        context
      ),
    }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

const serializeAws_json1_1OrganizationManagedRuleMetadata = (
  input: OrganizationManagedRuleMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InputParameters != null && { InputParameters: input.InputParameters }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.ResourceIdScope != null && { ResourceIdScope: input.ResourceIdScope }),
    ...(input.ResourceTypesScope != null && {
      ResourceTypesScope: serializeAws_json1_1ResourceTypesScope(input.ResourceTypesScope, context),
    }),
    ...(input.RuleIdentifier != null && { RuleIdentifier: input.RuleIdentifier }),
    ...(input.TagKeyScope != null && { TagKeyScope: input.TagKeyScope }),
    ...(input.TagValueScope != null && { TagValueScope: input.TagValueScope }),
  };
};

const serializeAws_json1_1OrganizationResourceDetailedStatusFilters = (
  input: OrganizationResourceDetailedStatusFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1PutAggregationAuthorizationRequest = (
  input: PutAggregationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizedAccountId != null && { AuthorizedAccountId: input.AuthorizedAccountId }),
    ...(input.AuthorizedAwsRegion != null && { AuthorizedAwsRegion: input.AuthorizedAwsRegion }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutConfigRuleRequest = (input: PutConfigRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigRule != null && { ConfigRule: serializeAws_json1_1ConfigRule(input.ConfigRule, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutConfigurationAggregatorRequest = (
  input: PutConfigurationAggregatorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAggregationSources != null && {
      AccountAggregationSources: serializeAws_json1_1AccountAggregationSourceList(
        input.AccountAggregationSources,
        context
      ),
    }),
    ...(input.ConfigurationAggregatorName != null && {
      ConfigurationAggregatorName: input.ConfigurationAggregatorName,
    }),
    ...(input.OrganizationAggregationSource != null && {
      OrganizationAggregationSource: serializeAws_json1_1OrganizationAggregationSource(
        input.OrganizationAggregationSource,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutConfigurationRecorderRequest = (
  input: PutConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorder != null && {
      ConfigurationRecorder: serializeAws_json1_1ConfigurationRecorder(input.ConfigurationRecorder, context),
    }),
  };
};

const serializeAws_json1_1PutConformancePackRequest = (
  input: PutConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackInputParameters != null && {
      ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(
        input.ConformancePackInputParameters,
        context
      ),
    }),
    ...(input.ConformancePackName != null && { ConformancePackName: input.ConformancePackName }),
    ...(input.DeliveryS3Bucket != null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
    ...(input.DeliveryS3KeyPrefix != null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
    ...(input.TemplateBody != null && { TemplateBody: input.TemplateBody }),
    ...(input.TemplateS3Uri != null && { TemplateS3Uri: input.TemplateS3Uri }),
    ...(input.TemplateSSMDocumentDetails != null && {
      TemplateSSMDocumentDetails: serializeAws_json1_1TemplateSSMDocumentDetails(
        input.TemplateSSMDocumentDetails,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutDeliveryChannelRequest = (
  input: PutDeliveryChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryChannel != null && {
      DeliveryChannel: serializeAws_json1_1DeliveryChannel(input.DeliveryChannel, context),
    }),
  };
};

const serializeAws_json1_1PutEvaluationsRequest = (input: PutEvaluationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Evaluations != null && { Evaluations: serializeAws_json1_1Evaluations(input.Evaluations, context) }),
    ...(input.ResultToken != null && { ResultToken: input.ResultToken }),
    ...(input.TestMode != null && { TestMode: input.TestMode }),
  };
};

const serializeAws_json1_1PutExternalEvaluationRequest = (
  input: PutExternalEvaluationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ExternalEvaluation != null && {
      ExternalEvaluation: serializeAws_json1_1ExternalEvaluation(input.ExternalEvaluation, context),
    }),
  };
};

const serializeAws_json1_1PutOrganizationConfigRuleRequest = (
  input: PutOrganizationConfigRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludedAccounts != null && {
      ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
    }),
    ...(input.OrganizationConfigRuleName != null && { OrganizationConfigRuleName: input.OrganizationConfigRuleName }),
    ...(input.OrganizationCustomPolicyRuleMetadata != null && {
      OrganizationCustomPolicyRuleMetadata: serializeAws_json1_1OrganizationCustomPolicyRuleMetadata(
        input.OrganizationCustomPolicyRuleMetadata,
        context
      ),
    }),
    ...(input.OrganizationCustomRuleMetadata != null && {
      OrganizationCustomRuleMetadata: serializeAws_json1_1OrganizationCustomRuleMetadata(
        input.OrganizationCustomRuleMetadata,
        context
      ),
    }),
    ...(input.OrganizationManagedRuleMetadata != null && {
      OrganizationManagedRuleMetadata: serializeAws_json1_1OrganizationManagedRuleMetadata(
        input.OrganizationManagedRuleMetadata,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutOrganizationConformancePackRequest = (
  input: PutOrganizationConformancePackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConformancePackInputParameters != null && {
      ConformancePackInputParameters: serializeAws_json1_1ConformancePackInputParameters(
        input.ConformancePackInputParameters,
        context
      ),
    }),
    ...(input.DeliveryS3Bucket != null && { DeliveryS3Bucket: input.DeliveryS3Bucket }),
    ...(input.DeliveryS3KeyPrefix != null && { DeliveryS3KeyPrefix: input.DeliveryS3KeyPrefix }),
    ...(input.ExcludedAccounts != null && {
      ExcludedAccounts: serializeAws_json1_1ExcludedAccounts(input.ExcludedAccounts, context),
    }),
    ...(input.OrganizationConformancePackName != null && {
      OrganizationConformancePackName: input.OrganizationConformancePackName,
    }),
    ...(input.TemplateBody != null && { TemplateBody: input.TemplateBody }),
    ...(input.TemplateS3Uri != null && { TemplateS3Uri: input.TemplateS3Uri }),
  };
};

const serializeAws_json1_1PutRemediationConfigurationsRequest = (
  input: PutRemediationConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RemediationConfigurations != null && {
      RemediationConfigurations: serializeAws_json1_1RemediationConfigurations(
        input.RemediationConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutRemediationExceptionsRequest = (
  input: PutRemediationExceptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ExpirationTime != null && { ExpirationTime: Math.round(input.ExpirationTime.getTime() / 1000) }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.ResourceKeys != null && {
      ResourceKeys: serializeAws_json1_1RemediationExceptionResourceKeys(input.ResourceKeys, context),
    }),
  };
};

const serializeAws_json1_1PutResourceConfigRequest = (
  input: PutResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutRetentionConfigurationRequest = (
  input: PutRetentionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionPeriodInDays != null && { RetentionPeriodInDays: input.RetentionPeriodInDays }),
  };
};

const serializeAws_json1_1PutStoredQueryRequest = (input: PutStoredQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.StoredQuery != null && { StoredQuery: serializeAws_json1_1StoredQuery(input.StoredQuery, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
  };
};

const serializeAws_json1_1RecordingGroup = (input: RecordingGroup, context: __SerdeContext): any => {
  return {
    ...(input.allSupported != null && { allSupported: input.allSupported }),
    ...(input.includeGlobalResourceTypes != null && { includeGlobalResourceTypes: input.includeGlobalResourceTypes }),
    ...(input.resourceTypes != null && {
      resourceTypes: serializeAws_json1_1ResourceTypeList(input.resourceTypes, context),
    }),
  };
};

const serializeAws_json1_1ReevaluateConfigRuleNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RemediationConfiguration = (
  input: RemediationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Automatic != null && { Automatic: input.Automatic }),
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.CreatedByService != null && { CreatedByService: input.CreatedByService }),
    ...(input.ExecutionControls != null && {
      ExecutionControls: serializeAws_json1_1ExecutionControls(input.ExecutionControls, context),
    }),
    ...(input.MaximumAutomaticAttempts != null && { MaximumAutomaticAttempts: input.MaximumAutomaticAttempts }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1RemediationParameters(input.Parameters, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.RetryAttemptSeconds != null && { RetryAttemptSeconds: input.RetryAttemptSeconds }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
    ...(input.TargetVersion != null && { TargetVersion: input.TargetVersion }),
  };
};

const serializeAws_json1_1RemediationConfigurations = (
  input: RemediationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RemediationConfiguration(entry, context);
    });
};

const serializeAws_json1_1RemediationExceptionResourceKey = (
  input: RemediationExceptionResourceKey,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1RemediationExceptionResourceKeys = (
  input: RemediationExceptionResourceKey[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
};

const serializeAws_json1_1RemediationParameters = (
  input: Record<string, RemediationParameterValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1RemediationParameterValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1RemediationParameterValue = (
  input: RemediationParameterValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceValue != null && {
      ResourceValue: serializeAws_json1_1ResourceValue(input.ResourceValue, context),
    }),
    ...(input.StaticValue != null && { StaticValue: serializeAws_json1_1StaticValue(input.StaticValue, context) }),
  };
};

const serializeAws_json1_1ResourceCountFilters = (input: ResourceCountFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return {
    ...(input.ResourceConfiguration != null && { ResourceConfiguration: input.ResourceConfiguration }),
    ...(input.ResourceConfigurationSchemaType != null && {
      ResourceConfigurationSchemaType: input.ResourceConfigurationSchemaType,
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ResourceEvaluationFilters = (
  input: ResourceEvaluationFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.EvaluationContextIdentifier != null && {
      EvaluationContextIdentifier: input.EvaluationContextIdentifier,
    }),
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
    ...(input.TimeWindow != null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) }),
  };
};

const serializeAws_json1_1ResourceFilters = (input: ResourceFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

const serializeAws_json1_1ResourceIdentifiersList = (
  input: AggregateResourceIdentifier[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
};

const serializeAws_json1_1ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceKey = (input: ResourceKey, context: __SerdeContext): any => {
  return {
    ...(input.resourceId != null && { resourceId: input.resourceId }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

const serializeAws_json1_1ResourceKeys = (input: ResourceKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResourceKey(entry, context);
    });
};

const serializeAws_json1_1ResourceTypeList = (input: (ResourceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceTypesScope = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceValue = (input: ResourceValue, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1RetentionConfigurationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceResourceId != null && { ComplianceResourceId: input.ComplianceResourceId }),
    ...(input.ComplianceResourceTypes != null && {
      ComplianceResourceTypes: serializeAws_json1_1ComplianceResourceTypes(input.ComplianceResourceTypes, context),
    }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

const serializeAws_json1_1SelectAggregateResourceConfigRequest = (
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

const serializeAws_json1_1SelectResourceConfigRequest = (
  input: SelectResourceConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.CustomPolicyDetails != null && {
      CustomPolicyDetails: serializeAws_json1_1CustomPolicyDetails(input.CustomPolicyDetails, context),
    }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.SourceDetails != null && {
      SourceDetails: serializeAws_json1_1SourceDetails(input.SourceDetails, context),
    }),
    ...(input.SourceIdentifier != null && { SourceIdentifier: input.SourceIdentifier }),
  };
};

const serializeAws_json1_1SourceDetail = (input: SourceDetail, context: __SerdeContext): any => {
  return {
    ...(input.EventSource != null && { EventSource: input.EventSource }),
    ...(input.MaximumExecutionFrequency != null && { MaximumExecutionFrequency: input.MaximumExecutionFrequency }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
  };
};

const serializeAws_json1_1SourceDetails = (input: SourceDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SourceDetail(entry, context);
    });
};

const serializeAws_json1_1SsmControls = (input: SsmControls, context: __SerdeContext): any => {
  return {
    ...(input.ConcurrentExecutionRatePercentage != null && {
      ConcurrentExecutionRatePercentage: input.ConcurrentExecutionRatePercentage,
    }),
    ...(input.ErrorPercentage != null && { ErrorPercentage: input.ErrorPercentage }),
  };
};

const serializeAws_json1_1StartConfigRulesEvaluationRequest = (
  input: StartConfigRulesEvaluationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleNames != null && {
      ConfigRuleNames: serializeAws_json1_1ReevaluateConfigRuleNames(input.ConfigRuleNames, context),
    }),
  };
};

const serializeAws_json1_1StartConfigurationRecorderRequest = (
  input: StartConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

const serializeAws_json1_1StartRemediationExecutionRequest = (
  input: StartRemediationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigRuleName != null && { ConfigRuleName: input.ConfigRuleName }),
    ...(input.ResourceKeys != null && { ResourceKeys: serializeAws_json1_1ResourceKeys(input.ResourceKeys, context) }),
  };
};

const serializeAws_json1_1StartResourceEvaluationRequest = (
  input: StartResourceEvaluationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.EvaluationContext != null && {
      EvaluationContext: serializeAws_json1_1EvaluationContext(input.EvaluationContext, context),
    }),
    ...(input.EvaluationMode != null && { EvaluationMode: input.EvaluationMode }),
    ...(input.EvaluationTimeout != null && { EvaluationTimeout: input.EvaluationTimeout }),
    ...(input.ResourceDetails != null && {
      ResourceDetails: serializeAws_json1_1ResourceDetails(input.ResourceDetails, context),
    }),
  };
};

const serializeAws_json1_1StaticParameterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StaticValue = (input: StaticValue, context: __SerdeContext): any => {
  return {
    ...(input.Values != null && { Values: serializeAws_json1_1StaticParameterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1StatusDetailFilters = (input: StatusDetailFilters, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MemberAccountRuleStatus != null && { MemberAccountRuleStatus: input.MemberAccountRuleStatus }),
  };
};

const serializeAws_json1_1StopConfigurationRecorderRequest = (
  input: StopConfigurationRecorderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationRecorderName != null && { ConfigurationRecorderName: input.ConfigurationRecorderName }),
  };
};

const serializeAws_json1_1StoredQuery = (input: StoredQuery, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.QueryArn != null && { QueryArn: input.QueryArn }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
    ...(input.QueryName != null && { QueryName: input.QueryName }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TemplateSSMDocumentDetails = (
  input: TemplateSSMDocumentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentName != null && { DocumentName: input.DocumentName }),
    ...(input.DocumentVersion != null && { DocumentVersion: input.DocumentVersion }),
  };
};

const serializeAws_json1_1TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1AccountAggregationSource = (
  output: any,
  context: __SerdeContext
): AccountAggregationSource => {
  return {
    AccountIds:
      output.AccountIds != null
        ? deserializeAws_json1_1AccountAggregationSourceAccountList(output.AccountIds, context)
        : undefined,
    AllAwsRegions: __expectBoolean(output.AllAwsRegions),
    AwsRegions:
      output.AwsRegions != null ? deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AccountAggregationSourceAccountList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AccountAggregationSourceList = (
  output: any,
  context: __SerdeContext
): AccountAggregationSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountAggregationSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateComplianceByConfigRule = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConfigRule => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    Compliance: output.Compliance != null ? deserializeAws_json1_1Compliance(output.Compliance, context) : undefined,
    ConfigRuleName: __expectString(output.ConfigRuleName),
  } as any;
};

const deserializeAws_json1_1AggregateComplianceByConfigRuleList = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateComplianceByConfigRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateComplianceByConformancePack = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConformancePack => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    Compliance:
      output.Compliance != null
        ? deserializeAws_json1_1AggregateConformancePackCompliance(output.Compliance, context)
        : undefined,
    ConformancePackName: __expectString(output.ConformancePackName),
  } as any;
};

const deserializeAws_json1_1AggregateComplianceByConformancePackList = (
  output: any,
  context: __SerdeContext
): AggregateComplianceByConformancePack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateComplianceByConformancePack(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateComplianceCount = (
  output: any,
  context: __SerdeContext
): AggregateComplianceCount => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
        : undefined,
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_json1_1AggregateComplianceCountList = (
  output: any,
  context: __SerdeContext
): AggregateComplianceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateComplianceCount(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateConformancePackCompliance = (
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

const deserializeAws_json1_1AggregateConformancePackComplianceCount = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceCount => {
  return {
    CompliantConformancePackCount: __expectInt32(output.CompliantConformancePackCount),
    NonCompliantConformancePackCount: __expectInt32(output.NonCompliantConformancePackCount),
  } as any;
};

const deserializeAws_json1_1AggregateConformancePackComplianceSummary = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceSummary => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? deserializeAws_json1_1AggregateConformancePackComplianceCount(output.ComplianceSummary, context)
        : undefined,
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_json1_1AggregateConformancePackComplianceSummaryList = (
  output: any,
  context: __SerdeContext
): AggregateConformancePackComplianceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateConformancePackComplianceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregatedSourceStatus = (output: any, context: __SerdeContext): AggregatedSourceStatus => {
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

const deserializeAws_json1_1AggregatedSourceStatusList = (
  output: any,
  context: __SerdeContext
): AggregatedSourceStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregatedSourceStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateEvaluationResult = (
  output: any,
  context: __SerdeContext
): AggregateEvaluationResult => {
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
        ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1AggregateEvaluationResultList = (
  output: any,
  context: __SerdeContext
): AggregateEvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateEvaluationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregateResourceIdentifier = (
  output: any,
  context: __SerdeContext
): AggregateResourceIdentifier => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
    SourceAccountId: __expectString(output.SourceAccountId),
    SourceRegion: __expectString(output.SourceRegion),
  } as any;
};

const deserializeAws_json1_1AggregationAuthorization = (
  output: any,
  context: __SerdeContext
): AggregationAuthorization => {
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

const deserializeAws_json1_1AggregationAuthorizationList = (
  output: any,
  context: __SerdeContext
): AggregationAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregationAuthorization(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AggregatorRegionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1BaseConfigurationItem = (output: any, context: __SerdeContext): BaseConfigurationItem => {
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
        ? deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1BaseConfigurationItems = (
  output: any,
  context: __SerdeContext
): BaseConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BaseConfigurationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): BatchGetAggregateResourceConfigResponse => {
  return {
    BaseConfigurationItems:
      output.BaseConfigurationItems != null
        ? deserializeAws_json1_1BaseConfigurationItems(output.BaseConfigurationItems, context)
        : undefined,
    UnprocessedResourceIdentifiers:
      output.UnprocessedResourceIdentifiers != null
        ? deserializeAws_json1_1UnprocessedResourceIdentifierList(output.UnprocessedResourceIdentifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): BatchGetResourceConfigResponse => {
  return {
    baseConfigurationItems:
      output.baseConfigurationItems != null
        ? deserializeAws_json1_1BaseConfigurationItems(output.baseConfigurationItems, context)
        : undefined,
    unprocessedResourceKeys:
      output.unprocessedResourceKeys != null
        ? deserializeAws_json1_1ResourceKeys(output.unprocessedResourceKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    ComplianceContributorCount:
      output.ComplianceContributorCount != null
        ? deserializeAws_json1_1ComplianceContributorCount(output.ComplianceContributorCount, context)
        : undefined,
    ComplianceType: __expectString(output.ComplianceType),
  } as any;
};

const deserializeAws_json1_1ComplianceByConfigRule = (output: any, context: __SerdeContext): ComplianceByConfigRule => {
  return {
    Compliance: output.Compliance != null ? deserializeAws_json1_1Compliance(output.Compliance, context) : undefined,
    ConfigRuleName: __expectString(output.ConfigRuleName),
  } as any;
};

const deserializeAws_json1_1ComplianceByConfigRules = (
  output: any,
  context: __SerdeContext
): ComplianceByConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceByConfigRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceByResource = (output: any, context: __SerdeContext): ComplianceByResource => {
  return {
    Compliance: output.Compliance != null ? deserializeAws_json1_1Compliance(output.Compliance, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ComplianceByResources = (output: any, context: __SerdeContext): ComplianceByResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceByResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceContributorCount = (
  output: any,
  context: __SerdeContext
): ComplianceContributorCount => {
  return {
    CapExceeded: __expectBoolean(output.CapExceeded),
    CappedCount: __expectInt32(output.CappedCount),
  } as any;
};

const deserializeAws_json1_1ComplianceResourceTypes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ComplianceSummariesByResourceType = (
  output: any,
  context: __SerdeContext
): ComplianceSummaryByResourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceSummaryByResourceType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComplianceSummary = (output: any, context: __SerdeContext): ComplianceSummary => {
  return {
    ComplianceSummaryTimestamp:
      output.ComplianceSummaryTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ComplianceSummaryTimestamp)))
        : undefined,
    CompliantResourceCount:
      output.CompliantResourceCount != null
        ? deserializeAws_json1_1ComplianceContributorCount(output.CompliantResourceCount, context)
        : undefined,
    NonCompliantResourceCount:
      output.NonCompliantResourceCount != null
        ? deserializeAws_json1_1ComplianceContributorCount(output.NonCompliantResourceCount, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ComplianceSummaryByResourceType = (
  output: any,
  context: __SerdeContext
): ComplianceSummaryByResourceType => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ConfigExportDeliveryInfo = (
  output: any,
  context: __SerdeContext
): ConfigExportDeliveryInfo => {
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

const deserializeAws_json1_1ConfigRule = (output: any, context: __SerdeContext): ConfigRule => {
  return {
    ConfigRuleArn: __expectString(output.ConfigRuleArn),
    ConfigRuleId: __expectString(output.ConfigRuleId),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    ConfigRuleState: __expectString(output.ConfigRuleState),
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    EvaluationModes:
      output.EvaluationModes != null
        ? deserializeAws_json1_1EvaluationModes(output.EvaluationModes, context)
        : undefined,
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    Scope: output.Scope != null ? deserializeAws_json1_1Scope(output.Scope, context) : undefined,
    Source: output.Source != null ? deserializeAws_json1_1Source(output.Source, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConfigRuleEvaluationStatus = (
  output: any,
  context: __SerdeContext
): ConfigRuleEvaluationStatus => {
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

const deserializeAws_json1_1ConfigRuleEvaluationStatusList = (
  output: any,
  context: __SerdeContext
): ConfigRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigRules = (output: any, context: __SerdeContext): ConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigSnapshotDeliveryProperties = (
  output: any,
  context: __SerdeContext
): ConfigSnapshotDeliveryProperties => {
  return {
    deliveryFrequency: __expectString(output.deliveryFrequency),
  } as any;
};

const deserializeAws_json1_1ConfigStreamDeliveryInfo = (
  output: any,
  context: __SerdeContext
): ConfigStreamDeliveryInfo => {
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

const deserializeAws_json1_1ConfigurationAggregator = (
  output: any,
  context: __SerdeContext
): ConfigurationAggregator => {
  return {
    AccountAggregationSources:
      output.AccountAggregationSources != null
        ? deserializeAws_json1_1AccountAggregationSourceList(output.AccountAggregationSources, context)
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
        ? deserializeAws_json1_1OrganizationAggregationSource(output.OrganizationAggregationSource, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfigurationAggregatorList = (
  output: any,
  context: __SerdeContext
): ConfigurationAggregator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationAggregator(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigurationItem = (output: any, context: __SerdeContext): ConfigurationItem => {
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
    relatedEvents:
      output.relatedEvents != null ? deserializeAws_json1_1RelatedEventList(output.relatedEvents, context) : undefined,
    relationships:
      output.relationships != null ? deserializeAws_json1_1RelationshipList(output.relationships, context) : undefined,
    resourceCreationTime:
      output.resourceCreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resourceCreationTime)))
        : undefined,
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
    supplementaryConfiguration:
      output.supplementaryConfiguration != null
        ? deserializeAws_json1_1SupplementaryConfiguration(output.supplementaryConfiguration, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1ConfigurationItemList = (output: any, context: __SerdeContext): ConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigurationRecorder = (output: any, context: __SerdeContext): ConfigurationRecorder => {
  return {
    name: __expectString(output.name),
    recordingGroup:
      output.recordingGroup != null ? deserializeAws_json1_1RecordingGroup(output.recordingGroup, context) : undefined,
    roleARN: __expectString(output.roleARN),
  } as any;
};

const deserializeAws_json1_1ConfigurationRecorderList = (
  output: any,
  context: __SerdeContext
): ConfigurationRecorder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationRecorder(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfigurationRecorderStatus = (
  output: any,
  context: __SerdeContext
): ConfigurationRecorderStatus => {
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

const deserializeAws_json1_1ConfigurationRecorderStatusList = (
  output: any,
  context: __SerdeContext
): ConfigurationRecorderStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationRecorderStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackComplianceScore = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceScore => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Score: __expectString(output.Score),
  } as any;
};

const deserializeAws_json1_1ConformancePackComplianceScores = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackComplianceScore(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackComplianceSummary = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceSummary => {
  return {
    ConformancePackComplianceStatus: __expectString(output.ConformancePackComplianceStatus),
    ConformancePackName: __expectString(output.ConformancePackName),
  } as any;
};

const deserializeAws_json1_1ConformancePackComplianceSummaryList = (
  output: any,
  context: __SerdeContext
): ConformancePackComplianceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackComplianceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackDetail = (output: any, context: __SerdeContext): ConformancePackDetail => {
  return {
    ConformancePackArn: __expectString(output.ConformancePackArn),
    ConformancePackId: __expectString(output.ConformancePackId),
    ConformancePackInputParameters:
      output.ConformancePackInputParameters != null
        ? deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context)
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
        ? deserializeAws_json1_1TemplateSSMDocumentDetails(output.TemplateSSMDocumentDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConformancePackDetailList = (
  output: any,
  context: __SerdeContext
): ConformancePackDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackEvaluationResult = (
  output: any,
  context: __SerdeContext
): ConformancePackEvaluationResult => {
  return {
    Annotation: __expectString(output.Annotation),
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleInvokedTime:
      output.ConfigRuleInvokedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConfigRuleInvokedTime)))
        : undefined,
    EvaluationResultIdentifier:
      output.EvaluationResultIdentifier != null
        ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConformancePackInputParameter = (
  output: any,
  context: __SerdeContext
): ConformancePackInputParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

const deserializeAws_json1_1ConformancePackInputParameters = (
  output: any,
  context: __SerdeContext
): ConformancePackInputParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackInputParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackRuleCompliance = (
  output: any,
  context: __SerdeContext
): ConformancePackRuleCompliance => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    Controls: output.Controls != null ? deserializeAws_json1_1ControlsList(output.Controls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConformancePackRuleComplianceList = (
  output: any,
  context: __SerdeContext
): ConformancePackRuleCompliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackRuleCompliance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackRuleEvaluationResultsList = (
  output: any,
  context: __SerdeContext
): ConformancePackEvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackEvaluationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackStatusDetail = (
  output: any,
  context: __SerdeContext
): ConformancePackStatusDetail => {
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

const deserializeAws_json1_1ConformancePackStatusDetailsList = (
  output: any,
  context: __SerdeContext
): ConformancePackStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConformancePackStatusDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConformancePackTemplateValidationException = (
  output: any,
  context: __SerdeContext
): ConformancePackTemplateValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ControlsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CustomPolicyDetails = (output: any, context: __SerdeContext): CustomPolicyDetails => {
  return {
    EnableDebugLogDelivery: __expectBoolean(output.EnableDebugLogDelivery),
    PolicyRuntime: __expectString(output.PolicyRuntime),
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

const deserializeAws_json1_1DebugLogDeliveryAccounts = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DeleteEvaluationResultsResponse = (
  output: any,
  context: __SerdeContext
): DeleteEvaluationResultsResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRemediationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteRemediationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteRemediationExceptionsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null
        ? deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches(output.FailedBatches, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteStoredQueryResponse = (
  output: any,
  context: __SerdeContext
): DeleteStoredQueryResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeliverConfigSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeliverConfigSnapshotResponse => {
  return {
    configSnapshotId: __expectString(output.configSnapshotId),
  } as any;
};

const deserializeAws_json1_1DeliveryChannel = (output: any, context: __SerdeContext): DeliveryChannel => {
  return {
    configSnapshotDeliveryProperties:
      output.configSnapshotDeliveryProperties != null
        ? deserializeAws_json1_1ConfigSnapshotDeliveryProperties(output.configSnapshotDeliveryProperties, context)
        : undefined,
    name: __expectString(output.name),
    s3BucketName: __expectString(output.s3BucketName),
    s3KeyPrefix: __expectString(output.s3KeyPrefix),
    s3KmsKeyArn: __expectString(output.s3KmsKeyArn),
    snsTopicARN: __expectString(output.snsTopicARN),
  } as any;
};

const deserializeAws_json1_1DeliveryChannelList = (output: any, context: __SerdeContext): DeliveryChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeliveryChannel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DeliveryChannelStatus = (output: any, context: __SerdeContext): DeliveryChannelStatus => {
  return {
    configHistoryDeliveryInfo:
      output.configHistoryDeliveryInfo != null
        ? deserializeAws_json1_1ConfigExportDeliveryInfo(output.configHistoryDeliveryInfo, context)
        : undefined,
    configSnapshotDeliveryInfo:
      output.configSnapshotDeliveryInfo != null
        ? deserializeAws_json1_1ConfigExportDeliveryInfo(output.configSnapshotDeliveryInfo, context)
        : undefined,
    configStreamDeliveryInfo:
      output.configStreamDeliveryInfo != null
        ? deserializeAws_json1_1ConfigStreamDeliveryInfo(output.configStreamDeliveryInfo, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1DeliveryChannelStatusList = (
  output: any,
  context: __SerdeContext
): DeliveryChannelStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeliveryChannelStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregateComplianceByConfigRulesResponse => {
  return {
    AggregateComplianceByConfigRules:
      output.AggregateComplianceByConfigRules != null
        ? deserializeAws_json1_1AggregateComplianceByConfigRuleList(output.AggregateComplianceByConfigRules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregateComplianceByConformancePacksResponse => {
  return {
    AggregateComplianceByConformancePacks:
      output.AggregateComplianceByConformancePacks != null
        ? deserializeAws_json1_1AggregateComplianceByConformancePackList(
            output.AggregateComplianceByConformancePacks,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAggregationAuthorizationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregationAuthorizationsResponse => {
  return {
    AggregationAuthorizations:
      output.AggregationAuthorizations != null
        ? deserializeAws_json1_1AggregationAuthorizationList(output.AggregationAuthorizations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeComplianceByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): DescribeComplianceByConfigRuleResponse => {
  return {
    ComplianceByConfigRules:
      output.ComplianceByConfigRules != null
        ? deserializeAws_json1_1ComplianceByConfigRules(output.ComplianceByConfigRules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeComplianceByResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeComplianceByResourceResponse => {
  return {
    ComplianceByResources:
      output.ComplianceByResources != null
        ? deserializeAws_json1_1ComplianceByResources(output.ComplianceByResources, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigRuleEvaluationStatusResponse => {
  return {
    ConfigRulesEvaluationStatus:
      output.ConfigRulesEvaluationStatus != null
        ? deserializeAws_json1_1ConfigRuleEvaluationStatusList(output.ConfigRulesEvaluationStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigRulesResponse => {
  return {
    ConfigRules:
      output.ConfigRules != null ? deserializeAws_json1_1ConfigRules(output.ConfigRules, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorSourcesStatusResponse => {
  return {
    AggregatedSourceStatusList:
      output.AggregatedSourceStatusList != null
        ? deserializeAws_json1_1AggregatedSourceStatusList(output.AggregatedSourceStatusList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationAggregatorsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorsResponse => {
  return {
    ConfigurationAggregators:
      output.ConfigurationAggregators != null
        ? deserializeAws_json1_1ConfigurationAggregatorList(output.ConfigurationAggregators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationRecordersResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationRecordersResponse => {
  return {
    ConfigurationRecorders:
      output.ConfigurationRecorders != null
        ? deserializeAws_json1_1ConfigurationRecorderList(output.ConfigurationRecorders, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationRecorderStatusResponse => {
  return {
    ConfigurationRecordersStatus:
      output.ConfigurationRecordersStatus != null
        ? deserializeAws_json1_1ConfigurationRecorderStatusList(output.ConfigurationRecordersStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConformancePackComplianceResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePackComplianceResponse => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    ConformancePackRuleComplianceList:
      output.ConformancePackRuleComplianceList != null
        ? deserializeAws_json1_1ConformancePackRuleComplianceList(output.ConformancePackRuleComplianceList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePacksResponse => {
  return {
    ConformancePackDetails:
      output.ConformancePackDetails != null
        ? deserializeAws_json1_1ConformancePackDetailList(output.ConformancePackDetails, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConformancePackStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePackStatusResponse => {
  return {
    ConformancePackStatusDetails:
      output.ConformancePackStatusDetails != null
        ? deserializeAws_json1_1ConformancePackStatusDetailsList(output.ConformancePackStatusDetails, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDeliveryChannelsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryChannelsResponse => {
  return {
    DeliveryChannels:
      output.DeliveryChannels != null
        ? deserializeAws_json1_1DeliveryChannelList(output.DeliveryChannels, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDeliveryChannelStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryChannelStatusResponse => {
  return {
    DeliveryChannelsStatus:
      output.DeliveryChannelsStatus != null
        ? deserializeAws_json1_1DeliveryChannelStatusList(output.DeliveryChannelsStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRulesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRules:
      output.OrganizationConfigRules != null
        ? deserializeAws_json1_1OrganizationConfigRules(output.OrganizationConfigRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRuleStatusesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRuleStatuses:
      output.OrganizationConfigRuleStatuses != null
        ? deserializeAws_json1_1OrganizationConfigRuleStatuses(output.OrganizationConfigRuleStatuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePacksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePacks:
      output.OrganizationConformancePacks != null
        ? deserializeAws_json1_1OrganizationConformancePacks(output.OrganizationConformancePacks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePackStatusesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePackStatuses:
      output.OrganizationConformancePackStatuses != null
        ? deserializeAws_json1_1OrganizationConformancePackStatuses(output.OrganizationConformancePackStatuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePendingAggregationRequestsResponse = (
  output: any,
  context: __SerdeContext
): DescribePendingAggregationRequestsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PendingAggregationRequests:
      output.PendingAggregationRequests != null
        ? deserializeAws_json1_1PendingAggregationRequestList(output.PendingAggregationRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRemediationConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationConfigurationsResponse => {
  return {
    RemediationConfigurations:
      output.RemediationConfigurations != null
        ? deserializeAws_json1_1RemediationConfigurations(output.RemediationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExceptionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RemediationExceptions:
      output.RemediationExceptions != null
        ? deserializeAws_json1_1RemediationExceptions(output.RemediationExceptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRemediationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExecutionStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RemediationExecutionStatuses:
      output.RemediationExecutionStatuses != null
        ? deserializeAws_json1_1RemediationExecutionStatuses(output.RemediationExecutionStatuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRetentionConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRetentionConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RetentionConfigurations:
      output.RetentionConfigurations != null
        ? deserializeAws_json1_1RetentionConfigurationList(output.RetentionConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DiscoveredResourceIdentifierList = (
  output: any,
  context: __SerdeContext
): AggregateResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Evaluation = (output: any, context: __SerdeContext): Evaluation => {
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

const deserializeAws_json1_1EvaluationContext = (output: any, context: __SerdeContext): EvaluationContext => {
  return {
    EvaluationContextIdentifier: __expectString(output.EvaluationContextIdentifier),
  } as any;
};

const deserializeAws_json1_1EvaluationModeConfiguration = (
  output: any,
  context: __SerdeContext
): EvaluationModeConfiguration => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_json1_1EvaluationModes = (output: any, context: __SerdeContext): EvaluationModeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluationModeConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    Annotation: __expectString(output.Annotation),
    ComplianceType: __expectString(output.ComplianceType),
    ConfigRuleInvokedTime:
      output.ConfigRuleInvokedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConfigRuleInvokedTime)))
        : undefined,
    EvaluationResultIdentifier:
      output.EvaluationResultIdentifier != null
        ? deserializeAws_json1_1EvaluationResultIdentifier(output.EvaluationResultIdentifier, context)
        : undefined,
    ResultRecordedTime:
      output.ResultRecordedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResultRecordedTime)))
        : undefined,
    ResultToken: __expectString(output.ResultToken),
  } as any;
};

const deserializeAws_json1_1EvaluationResultIdentifier = (
  output: any,
  context: __SerdeContext
): EvaluationResultIdentifier => {
  return {
    EvaluationResultQualifier:
      output.EvaluationResultQualifier != null
        ? deserializeAws_json1_1EvaluationResultQualifier(output.EvaluationResultQualifier, context)
        : undefined,
    OrderingTimestamp:
      output.OrderingTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderingTimestamp)))
        : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

const deserializeAws_json1_1EvaluationResultQualifier = (
  output: any,
  context: __SerdeContext
): EvaluationResultQualifier => {
  return {
    ConfigRuleName: __expectString(output.ConfigRuleName),
    EvaluationMode: __expectString(output.EvaluationMode),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Evaluations = (output: any, context: __SerdeContext): Evaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Evaluation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EvaluationStatus = (output: any, context: __SerdeContext): EvaluationStatus => {
  return {
    FailureReason: __expectString(output.FailureReason),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ExcludedAccounts = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExecutionControls = (output: any, context: __SerdeContext): ExecutionControls => {
  return {
    SsmControls:
      output.SsmControls != null ? deserializeAws_json1_1SsmControls(output.SsmControls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch = (
  output: any,
  context: __SerdeContext
): FailedDeleteRemediationExceptionsBatch => {
  return {
    FailedItems:
      output.FailedItems != null
        ? deserializeAws_json1_1RemediationExceptionResourceKeys(output.FailedItems, context)
        : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

const deserializeAws_json1_1FailedDeleteRemediationExceptionsBatches = (
  output: any,
  context: __SerdeContext
): FailedDeleteRemediationExceptionsBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedDeleteRemediationExceptionsBatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedRemediationBatch = (output: any, context: __SerdeContext): FailedRemediationBatch => {
  return {
    FailedItems:
      output.FailedItems != null
        ? deserializeAws_json1_1RemediationConfigurations(output.FailedItems, context)
        : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

const deserializeAws_json1_1FailedRemediationBatches = (
  output: any,
  context: __SerdeContext
): FailedRemediationBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedRemediationBatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedRemediationExceptionBatch = (
  output: any,
  context: __SerdeContext
): FailedRemediationExceptionBatch => {
  return {
    FailedItems:
      output.FailedItems != null ? deserializeAws_json1_1RemediationExceptions(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

const deserializeAws_json1_1FailedRemediationExceptionBatches = (
  output: any,
  context: __SerdeContext
): FailedRemediationExceptionBatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedRemediationExceptionBatch(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FieldInfo = (output: any, context: __SerdeContext): FieldInfo => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1FieldInfoList = (output: any, context: __SerdeContext): FieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FieldInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateComplianceDetailsByConfigRuleResponse => {
  return {
    AggregateEvaluationResults:
      output.AggregateEvaluationResults != null
        ? deserializeAws_json1_1AggregateEvaluationResultList(output.AggregateEvaluationResults, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateConfigRuleComplianceSummaryResponse => {
  return {
    AggregateComplianceCounts:
      output.AggregateComplianceCounts != null
        ? deserializeAws_json1_1AggregateComplianceCountList(output.AggregateComplianceCounts, context)
        : undefined,
    GroupByKey: __expectString(output.GroupByKey),
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetAggregateConformancePackComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateConformancePackComplianceSummaryResponse => {
  return {
    AggregateConformancePackComplianceSummaries:
      output.AggregateConformancePackComplianceSummaries != null
        ? deserializeAws_json1_1AggregateConformancePackComplianceSummaryList(
            output.AggregateConformancePackComplianceSummaries,
            context
          )
        : undefined,
    GroupByKey: __expectString(output.GroupByKey),
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetAggregateDiscoveredResourceCountsResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateDiscoveredResourceCountsResponse => {
  return {
    GroupByKey: __expectString(output.GroupByKey),
    GroupedResourceCounts:
      output.GroupedResourceCounts != null
        ? deserializeAws_json1_1GroupedResourceCountList(output.GroupedResourceCounts, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalDiscoveredResources: __expectLong(output.TotalDiscoveredResources),
  } as any;
};

const deserializeAws_json1_1GetAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateResourceConfigResponse => {
  return {
    ConfigurationItem:
      output.ConfigurationItem != null
        ? deserializeAws_json1_1ConfigurationItem(output.ConfigurationItem, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByConfigRuleResponse => {
  return {
    EvaluationResults:
      output.EvaluationResults != null
        ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetComplianceDetailsByResourceResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByResourceResponse => {
  return {
    EvaluationResults:
      output.EvaluationResults != null
        ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByConfigRuleResponse => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? deserializeAws_json1_1ComplianceSummary(output.ComplianceSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByResourceTypeResponse => {
  return {
    ComplianceSummariesByResourceType:
      output.ComplianceSummariesByResourceType != null
        ? deserializeAws_json1_1ComplianceSummariesByResourceType(output.ComplianceSummariesByResourceType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConformancePackComplianceDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetConformancePackComplianceDetailsResponse => {
  return {
    ConformancePackName: __expectString(output.ConformancePackName),
    ConformancePackRuleEvaluationResults:
      output.ConformancePackRuleEvaluationResults != null
        ? deserializeAws_json1_1ConformancePackRuleEvaluationResultsList(
            output.ConformancePackRuleEvaluationResults,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetConformancePackComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetConformancePackComplianceSummaryResponse => {
  return {
    ConformancePackComplianceSummaryList:
      output.ConformancePackComplianceSummaryList != null
        ? deserializeAws_json1_1ConformancePackComplianceSummaryList(
            output.ConformancePackComplianceSummaryList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCustomRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetCustomRulePolicyResponse => {
  return {
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

const deserializeAws_json1_1GetDiscoveredResourceCountsResponse = (
  output: any,
  context: __SerdeContext
): GetDiscoveredResourceCountsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourceCounts:
      output.resourceCounts != null ? deserializeAws_json1_1ResourceCounts(output.resourceCounts, context) : undefined,
    totalDiscoveredResources: __expectLong(output.totalDiscoveredResources),
  } as any;
};

const deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConfigRuleDetailedStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConfigRuleDetailedStatus:
      output.OrganizationConfigRuleDetailedStatus != null
        ? deserializeAws_json1_1OrganizationConfigRuleDetailedStatus(
            output.OrganizationConfigRuleDetailedStatus,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConformancePackDetailedStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationConformancePackDetailedStatuses:
      output.OrganizationConformancePackDetailedStatuses != null
        ? deserializeAws_json1_1OrganizationConformancePackDetailedStatuses(
            output.OrganizationConformancePackDetailedStatuses,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOrganizationCustomRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationCustomRulePolicyResponse => {
  return {
    PolicyText: __expectString(output.PolicyText),
  } as any;
};

const deserializeAws_json1_1GetResourceConfigHistoryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceConfigHistoryResponse => {
  return {
    configurationItems:
      output.configurationItems != null
        ? deserializeAws_json1_1ConfigurationItemList(output.configurationItems, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetResourceEvaluationSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceEvaluationSummaryResponse => {
  return {
    Compliance: __expectString(output.Compliance),
    EvaluationContext:
      output.EvaluationContext != null
        ? deserializeAws_json1_1EvaluationContext(output.EvaluationContext, context)
        : undefined,
    EvaluationMode: __expectString(output.EvaluationMode),
    EvaluationStartTimestamp:
      output.EvaluationStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationStartTimestamp)))
        : undefined,
    EvaluationStatus:
      output.EvaluationStatus != null
        ? deserializeAws_json1_1EvaluationStatus(output.EvaluationStatus, context)
        : undefined,
    ResourceDetails:
      output.ResourceDetails != null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

const deserializeAws_json1_1GetStoredQueryResponse = (output: any, context: __SerdeContext): GetStoredQueryResponse => {
  return {
    StoredQuery:
      output.StoredQuery != null ? deserializeAws_json1_1StoredQuery(output.StoredQuery, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GroupedResourceCount = (output: any, context: __SerdeContext): GroupedResourceCount => {
  return {
    GroupName: __expectString(output.GroupName),
    ResourceCount: __expectLong(output.ResourceCount),
  } as any;
};

const deserializeAws_json1_1GroupedResourceCountList = (
  output: any,
  context: __SerdeContext
): GroupedResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupedResourceCount(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IdempotentParameterMismatch = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatch => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InsufficientDeliveryPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientDeliveryPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InsufficientPermissionsException = (
  output: any,
  context: __SerdeContext
): InsufficientPermissionsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidConfigurationRecorderNameException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRecorderNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeliveryChannelNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeliveryChannelNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidExpressionException = (
  output: any,
  context: __SerdeContext
): InvalidExpressionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidLimitException = (output: any, context: __SerdeContext): InvalidLimitException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRecordingGroupException = (
  output: any,
  context: __SerdeContext
): InvalidRecordingGroupException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidResultTokenException = (
  output: any,
  context: __SerdeContext
): InvalidResultTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidS3KeyPrefixException = (
  output: any,
  context: __SerdeContext
): InvalidS3KeyPrefixException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidS3KmsKeyArnException = (
  output: any,
  context: __SerdeContext
): InvalidS3KmsKeyArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSNSTopicARNException = (
  output: any,
  context: __SerdeContext
): InvalidSNSTopicARNException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LastDeliveryChannelDeleteFailedException = (
  output: any,
  context: __SerdeContext
): LastDeliveryChannelDeleteFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAggregateDiscoveredResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListAggregateDiscoveredResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceIdentifiers:
      output.ResourceIdentifiers != null
        ? deserializeAws_json1_1DiscoveredResourceIdentifierList(output.ResourceIdentifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListConformancePackComplianceScoresResponse = (
  output: any,
  context: __SerdeContext
): ListConformancePackComplianceScoresResponse => {
  return {
    ConformancePackComplianceScores:
      output.ConformancePackComplianceScores != null
        ? deserializeAws_json1_1ConformancePackComplianceScores(output.ConformancePackComplianceScores, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDiscoveredResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListDiscoveredResourcesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourceIdentifiers:
      output.resourceIdentifiers != null
        ? deserializeAws_json1_1ResourceIdentifierList(output.resourceIdentifiers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceEvaluationsResponse = (
  output: any,
  context: __SerdeContext
): ListResourceEvaluationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceEvaluations:
      output.ResourceEvaluations != null
        ? deserializeAws_json1_1ResourceEvaluations(output.ResourceEvaluations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStoredQueriesResponse = (
  output: any,
  context: __SerdeContext
): ListStoredQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StoredQueryMetadata:
      output.StoredQueryMetadata != null
        ? deserializeAws_json1_1StoredQueryMetadataList(output.StoredQueryMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MaxActiveResourcesExceededException = (
  output: any,
  context: __SerdeContext
): MaxActiveResourcesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfConfigRulesExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConfigRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfConfigurationRecordersExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConfigurationRecordersExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfConformancePacksExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfConformancePacksExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfDeliveryChannelsExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfDeliveryChannelsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfOrganizationConfigRulesExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfOrganizationConfigRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfOrganizationConformancePacksExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfOrganizationConformancePacksExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MaxNumberOfRetentionConfigurationsExceededException = (
  output: any,
  context: __SerdeContext
): MaxNumberOfRetentionConfigurationsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MemberAccountStatus = (output: any, context: __SerdeContext): MemberAccountStatus => {
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

const deserializeAws_json1_1NoAvailableConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoAvailableConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoAvailableDeliveryChannelException = (
  output: any,
  context: __SerdeContext
): NoAvailableDeliveryChannelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoRunningConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoRunningConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchBucketException = (output: any, context: __SerdeContext): NoSuchBucketException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchConfigRuleException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchConfigRuleInConformancePackException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigRuleInConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchConfigurationAggregatorException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigurationAggregatorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchConfigurationRecorderException = (
  output: any,
  context: __SerdeContext
): NoSuchConfigurationRecorderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchConformancePackException = (
  output: any,
  context: __SerdeContext
): NoSuchConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchDeliveryChannelException = (
  output: any,
  context: __SerdeContext
): NoSuchDeliveryChannelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchOrganizationConfigRuleException = (
  output: any,
  context: __SerdeContext
): NoSuchOrganizationConfigRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchOrganizationConformancePackException = (
  output: any,
  context: __SerdeContext
): NoSuchOrganizationConformancePackException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchRemediationConfigurationException = (
  output: any,
  context: __SerdeContext
): NoSuchRemediationConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchRemediationExceptionException = (
  output: any,
  context: __SerdeContext
): NoSuchRemediationExceptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoSuchRetentionConfigurationException = (
  output: any,
  context: __SerdeContext
): NoSuchRetentionConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OrganizationAccessDeniedException = (
  output: any,
  context: __SerdeContext
): OrganizationAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OrganizationAggregationSource = (
  output: any,
  context: __SerdeContext
): OrganizationAggregationSource => {
  return {
    AllAwsRegions: __expectBoolean(output.AllAwsRegions),
    AwsRegions:
      output.AwsRegions != null ? deserializeAws_json1_1AggregatorRegionList(output.AwsRegions, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1OrganizationAllFeaturesNotEnabledException = (
  output: any,
  context: __SerdeContext
): OrganizationAllFeaturesNotEnabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OrganizationConfigRule = (output: any, context: __SerdeContext): OrganizationConfigRule => {
  return {
    ExcludedAccounts:
      output.ExcludedAccounts != null
        ? deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context)
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConfigRuleArn: __expectString(output.OrganizationConfigRuleArn),
    OrganizationConfigRuleName: __expectString(output.OrganizationConfigRuleName),
    OrganizationCustomPolicyRuleMetadata:
      output.OrganizationCustomPolicyRuleMetadata != null
        ? deserializeAws_json1_1OrganizationCustomPolicyRuleMetadataNoPolicy(
            output.OrganizationCustomPolicyRuleMetadata,
            context
          )
        : undefined,
    OrganizationCustomRuleMetadata:
      output.OrganizationCustomRuleMetadata != null
        ? deserializeAws_json1_1OrganizationCustomRuleMetadata(output.OrganizationCustomRuleMetadata, context)
        : undefined,
    OrganizationManagedRuleMetadata:
      output.OrganizationManagedRuleMetadata != null
        ? deserializeAws_json1_1OrganizationManagedRuleMetadata(output.OrganizationManagedRuleMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OrganizationConfigRuleDetailedStatus = (
  output: any,
  context: __SerdeContext
): MemberAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MemberAccountStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConfigRules = (
  output: any,
  context: __SerdeContext
): OrganizationConfigRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationConfigRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConfigRuleStatus = (
  output: any,
  context: __SerdeContext
): OrganizationConfigRuleStatus => {
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

const deserializeAws_json1_1OrganizationConfigRuleStatuses = (
  output: any,
  context: __SerdeContext
): OrganizationConfigRuleStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationConfigRuleStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs = (
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

const deserializeAws_json1_1OrganizationConfigRuleTriggerTypes = (
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

const deserializeAws_json1_1OrganizationConformancePack = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePack => {
  return {
    ConformancePackInputParameters:
      output.ConformancePackInputParameters != null
        ? deserializeAws_json1_1ConformancePackInputParameters(output.ConformancePackInputParameters, context)
        : undefined,
    DeliveryS3Bucket: __expectString(output.DeliveryS3Bucket),
    DeliveryS3KeyPrefix: __expectString(output.DeliveryS3KeyPrefix),
    ExcludedAccounts:
      output.ExcludedAccounts != null
        ? deserializeAws_json1_1ExcludedAccounts(output.ExcludedAccounts, context)
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    OrganizationConformancePackArn: __expectString(output.OrganizationConformancePackArn),
    OrganizationConformancePackName: __expectString(output.OrganizationConformancePackName),
  } as any;
};

const deserializeAws_json1_1OrganizationConformancePackDetailedStatus = (
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

const deserializeAws_json1_1OrganizationConformancePackDetailedStatuses = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackDetailedStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationConformancePackDetailedStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConformancePacks = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationConformancePack(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConformancePackStatus = (
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

const deserializeAws_json1_1OrganizationConformancePackStatuses = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationConformancePackStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationConformancePackTemplateValidationException = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackTemplateValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OrganizationCustomPolicyRuleMetadataNoPolicy = (
  output: any,
  context: __SerdeContext
): OrganizationCustomPolicyRuleMetadataNoPolicy => {
  return {
    DebugLogDeliveryAccounts:
      output.DebugLogDeliveryAccounts != null
        ? deserializeAws_json1_1DebugLogDeliveryAccounts(output.DebugLogDeliveryAccounts, context)
        : undefined,
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    OrganizationConfigRuleTriggerTypes:
      output.OrganizationConfigRuleTriggerTypes != null
        ? deserializeAws_json1_1OrganizationConfigRuleTriggerTypeNoSNs(
            output.OrganizationConfigRuleTriggerTypes,
            context
          )
        : undefined,
    PolicyRuntime: __expectString(output.PolicyRuntime),
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null
        ? deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context)
        : undefined,
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

const deserializeAws_json1_1OrganizationCustomRuleMetadata = (
  output: any,
  context: __SerdeContext
): OrganizationCustomRuleMetadata => {
  return {
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    LambdaFunctionArn: __expectString(output.LambdaFunctionArn),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    OrganizationConfigRuleTriggerTypes:
      output.OrganizationConfigRuleTriggerTypes != null
        ? deserializeAws_json1_1OrganizationConfigRuleTriggerTypes(output.OrganizationConfigRuleTriggerTypes, context)
        : undefined,
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null
        ? deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context)
        : undefined,
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

const deserializeAws_json1_1OrganizationManagedRuleMetadata = (
  output: any,
  context: __SerdeContext
): OrganizationManagedRuleMetadata => {
  return {
    Description: __expectString(output.Description),
    InputParameters: __expectString(output.InputParameters),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    ResourceIdScope: __expectString(output.ResourceIdScope),
    ResourceTypesScope:
      output.ResourceTypesScope != null
        ? deserializeAws_json1_1ResourceTypesScope(output.ResourceTypesScope, context)
        : undefined,
    RuleIdentifier: __expectString(output.RuleIdentifier),
    TagKeyScope: __expectString(output.TagKeyScope),
    TagValueScope: __expectString(output.TagValueScope),
  } as any;
};

const deserializeAws_json1_1OversizedConfigurationItemException = (
  output: any,
  context: __SerdeContext
): OversizedConfigurationItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PendingAggregationRequest = (
  output: any,
  context: __SerdeContext
): PendingAggregationRequest => {
  return {
    RequesterAccountId: __expectString(output.RequesterAccountId),
    RequesterAwsRegion: __expectString(output.RequesterAwsRegion),
  } as any;
};

const deserializeAws_json1_1PendingAggregationRequestList = (
  output: any,
  context: __SerdeContext
): PendingAggregationRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingAggregationRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutAggregationAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): PutAggregationAuthorizationResponse => {
  return {
    AggregationAuthorization:
      output.AggregationAuthorization != null
        ? deserializeAws_json1_1AggregationAuthorization(output.AggregationAuthorization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutConfigurationAggregatorResponse = (
  output: any,
  context: __SerdeContext
): PutConfigurationAggregatorResponse => {
  return {
    ConfigurationAggregator:
      output.ConfigurationAggregator != null
        ? deserializeAws_json1_1ConfigurationAggregator(output.ConfigurationAggregator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutConformancePackResponse = (
  output: any,
  context: __SerdeContext
): PutConformancePackResponse => {
  return {
    ConformancePackArn: __expectString(output.ConformancePackArn),
  } as any;
};

const deserializeAws_json1_1PutEvaluationsResponse = (output: any, context: __SerdeContext): PutEvaluationsResponse => {
  return {
    FailedEvaluations:
      output.FailedEvaluations != null
        ? deserializeAws_json1_1Evaluations(output.FailedEvaluations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutExternalEvaluationResponse = (
  output: any,
  context: __SerdeContext
): PutExternalEvaluationResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutOrganizationConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): PutOrganizationConfigRuleResponse => {
  return {
    OrganizationConfigRuleArn: __expectString(output.OrganizationConfigRuleArn),
  } as any;
};

const deserializeAws_json1_1PutOrganizationConformancePackResponse = (
  output: any,
  context: __SerdeContext
): PutOrganizationConformancePackResponse => {
  return {
    OrganizationConformancePackArn: __expectString(output.OrganizationConformancePackArn),
  } as any;
};

const deserializeAws_json1_1PutRemediationConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): PutRemediationConfigurationsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null
        ? deserializeAws_json1_1FailedRemediationBatches(output.FailedBatches, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): PutRemediationExceptionsResponse => {
  return {
    FailedBatches:
      output.FailedBatches != null
        ? deserializeAws_json1_1FailedRemediationExceptionBatches(output.FailedBatches, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRetentionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutRetentionConfigurationResponse => {
  return {
    RetentionConfiguration:
      output.RetentionConfiguration != null
        ? deserializeAws_json1_1RetentionConfiguration(output.RetentionConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutStoredQueryResponse = (output: any, context: __SerdeContext): PutStoredQueryResponse => {
  return {
    QueryArn: __expectString(output.QueryArn),
  } as any;
};

const deserializeAws_json1_1QueryInfo = (output: any, context: __SerdeContext): QueryInfo => {
  return {
    SelectFields:
      output.SelectFields != null ? deserializeAws_json1_1FieldInfoList(output.SelectFields, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RecordingGroup = (output: any, context: __SerdeContext): RecordingGroup => {
  return {
    allSupported: __expectBoolean(output.allSupported),
    includeGlobalResourceTypes: __expectBoolean(output.includeGlobalResourceTypes),
    resourceTypes:
      output.resourceTypes != null ? deserializeAws_json1_1ResourceTypeList(output.resourceTypes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RelatedEventList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    relationshipName: __expectString(output.relationshipName),
    resourceId: __expectString(output.resourceId),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Relationship(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationConfiguration = (
  output: any,
  context: __SerdeContext
): RemediationConfiguration => {
  return {
    Arn: __expectString(output.Arn),
    Automatic: __expectBoolean(output.Automatic),
    ConfigRuleName: __expectString(output.ConfigRuleName),
    CreatedByService: __expectString(output.CreatedByService),
    ExecutionControls:
      output.ExecutionControls != null
        ? deserializeAws_json1_1ExecutionControls(output.ExecutionControls, context)
        : undefined,
    MaximumAutomaticAttempts: __expectInt32(output.MaximumAutomaticAttempts),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1RemediationParameters(output.Parameters, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
    RetryAttemptSeconds: __expectLong(output.RetryAttemptSeconds),
    TargetId: __expectString(output.TargetId),
    TargetType: __expectString(output.TargetType),
    TargetVersion: __expectString(output.TargetVersion),
  } as any;
};

const deserializeAws_json1_1RemediationConfigurations = (
  output: any,
  context: __SerdeContext
): RemediationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationException = (output: any, context: __SerdeContext): RemediationException => {
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

const deserializeAws_json1_1RemediationExceptionResourceKey = (
  output: any,
  context: __SerdeContext
): RemediationExceptionResourceKey => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1RemediationExceptionResourceKeys = (
  output: any,
  context: __SerdeContext
): RemediationExceptionResourceKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationExceptionResourceKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationExceptions = (output: any, context: __SerdeContext): RemediationException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationException(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationExecutionStatus = (
  output: any,
  context: __SerdeContext
): RemediationExecutionStatus => {
  return {
    InvocationTime:
      output.InvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InvocationTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ResourceKey:
      output.ResourceKey != null ? deserializeAws_json1_1ResourceKey(output.ResourceKey, context) : undefined,
    State: __expectString(output.State),
    StepDetails:
      output.StepDetails != null
        ? deserializeAws_json1_1RemediationExecutionSteps(output.StepDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RemediationExecutionStatuses = (
  output: any,
  context: __SerdeContext
): RemediationExecutionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationExecutionStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationExecutionStep = (
  output: any,
  context: __SerdeContext
): RemediationExecutionStep => {
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

const deserializeAws_json1_1RemediationExecutionSteps = (
  output: any,
  context: __SerdeContext
): RemediationExecutionStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationExecutionStep(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RemediationInProgressException = (
  output: any,
  context: __SerdeContext
): RemediationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RemediationParameters = (
  output: any,
  context: __SerdeContext
): Record<string, RemediationParameterValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RemediationParameterValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_json1_1RemediationParameterValue(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1RemediationParameterValue = (
  output: any,
  context: __SerdeContext
): RemediationParameterValue => {
  return {
    ResourceValue:
      output.ResourceValue != null ? deserializeAws_json1_1ResourceValue(output.ResourceValue, context) : undefined,
    StaticValue:
      output.StaticValue != null ? deserializeAws_json1_1StaticValue(output.StaticValue, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ResourceConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceCount = (output: any, context: __SerdeContext): ResourceCount => {
  return {
    count: __expectLong(output.count),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ResourceCounts = (output: any, context: __SerdeContext): ResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceCount(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    ResourceConfiguration: __expectString(output.ResourceConfiguration),
    ResourceConfigurationSchemaType: __expectString(output.ResourceConfigurationSchemaType),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ResourceEvaluation = (output: any, context: __SerdeContext): ResourceEvaluation => {
  return {
    EvaluationMode: __expectString(output.EvaluationMode),
    EvaluationStartTimestamp:
      output.EvaluationStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationStartTimestamp)))
        : undefined,
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

const deserializeAws_json1_1ResourceEvaluations = (output: any, context: __SerdeContext): ResourceEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceEvaluation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceIdentifier = (output: any, context: __SerdeContext): ResourceIdentifier => {
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

const deserializeAws_json1_1ResourceIdentifierList = (output: any, context: __SerdeContext): ResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceKey = (output: any, context: __SerdeContext): ResourceKey => {
  return {
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ResourceKeys = (output: any, context: __SerdeContext): ResourceKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotDiscoveredException = (
  output: any,
  context: __SerdeContext
): ResourceNotDiscoveredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceTypeList = (output: any, context: __SerdeContext): (ResourceType | string)[] => {
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

const deserializeAws_json1_1ResourceTypesScope = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceValue = (output: any, context: __SerdeContext): ResourceValue => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Results = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RetentionConfiguration = (output: any, context: __SerdeContext): RetentionConfiguration => {
  return {
    Name: __expectString(output.Name),
    RetentionPeriodInDays: __expectInt32(output.RetentionPeriodInDays),
  } as any;
};

const deserializeAws_json1_1RetentionConfigurationList = (
  output: any,
  context: __SerdeContext
): RetentionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RetentionConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    ComplianceResourceId: __expectString(output.ComplianceResourceId),
    ComplianceResourceTypes:
      output.ComplianceResourceTypes != null
        ? deserializeAws_json1_1ComplianceResourceTypes(output.ComplianceResourceTypes, context)
        : undefined,
    TagKey: __expectString(output.TagKey),
    TagValue: __expectString(output.TagValue),
  } as any;
};

const deserializeAws_json1_1SelectAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): SelectAggregateResourceConfigResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryInfo: output.QueryInfo != null ? deserializeAws_json1_1QueryInfo(output.QueryInfo, context) : undefined,
    Results: output.Results != null ? deserializeAws_json1_1Results(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SelectResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): SelectResourceConfigResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryInfo: output.QueryInfo != null ? deserializeAws_json1_1QueryInfo(output.QueryInfo, context) : undefined,
    Results: output.Results != null ? deserializeAws_json1_1Results(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Source = (output: any, context: __SerdeContext): Source => {
  return {
    CustomPolicyDetails:
      output.CustomPolicyDetails != null
        ? deserializeAws_json1_1CustomPolicyDetails(output.CustomPolicyDetails, context)
        : undefined,
    Owner: __expectString(output.Owner),
    SourceDetails:
      output.SourceDetails != null ? deserializeAws_json1_1SourceDetails(output.SourceDetails, context) : undefined,
    SourceIdentifier: __expectString(output.SourceIdentifier),
  } as any;
};

const deserializeAws_json1_1SourceDetail = (output: any, context: __SerdeContext): SourceDetail => {
  return {
    EventSource: __expectString(output.EventSource),
    MaximumExecutionFrequency: __expectString(output.MaximumExecutionFrequency),
    MessageType: __expectString(output.MessageType),
  } as any;
};

const deserializeAws_json1_1SourceDetails = (output: any, context: __SerdeContext): SourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SourceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SsmControls = (output: any, context: __SerdeContext): SsmControls => {
  return {
    ConcurrentExecutionRatePercentage: __expectInt32(output.ConcurrentExecutionRatePercentage),
    ErrorPercentage: __expectInt32(output.ErrorPercentage),
  } as any;
};

const deserializeAws_json1_1StartConfigRulesEvaluationResponse = (
  output: any,
  context: __SerdeContext
): StartConfigRulesEvaluationResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartRemediationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartRemediationExecutionResponse => {
  return {
    FailedItems:
      output.FailedItems != null ? deserializeAws_json1_1ResourceKeys(output.FailedItems, context) : undefined,
    FailureMessage: __expectString(output.FailureMessage),
  } as any;
};

const deserializeAws_json1_1StartResourceEvaluationResponse = (
  output: any,
  context: __SerdeContext
): StartResourceEvaluationResponse => {
  return {
    ResourceEvaluationId: __expectString(output.ResourceEvaluationId),
  } as any;
};

const deserializeAws_json1_1StaticParameterValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StaticValue = (output: any, context: __SerdeContext): StaticValue => {
  return {
    Values: output.Values != null ? deserializeAws_json1_1StaticParameterValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StoredQuery = (output: any, context: __SerdeContext): StoredQuery => {
  return {
    Description: __expectString(output.Description),
    Expression: __expectString(output.Expression),
    QueryArn: __expectString(output.QueryArn),
    QueryId: __expectString(output.QueryId),
    QueryName: __expectString(output.QueryName),
  } as any;
};

const deserializeAws_json1_1StoredQueryMetadata = (output: any, context: __SerdeContext): StoredQueryMetadata => {
  return {
    Description: __expectString(output.Description),
    QueryArn: __expectString(output.QueryArn),
    QueryId: __expectString(output.QueryId),
    QueryName: __expectString(output.QueryName),
  } as any;
};

const deserializeAws_json1_1StoredQueryMetadataList = (output: any, context: __SerdeContext): StoredQueryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StoredQueryMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SupplementaryConfiguration = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TemplateSSMDocumentDetails = (
  output: any,
  context: __SerdeContext
): TemplateSSMDocumentDetails => {
  return {
    DocumentName: __expectString(output.DocumentName),
    DocumentVersion: __expectString(output.DocumentVersion),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnprocessedResourceIdentifierList = (
  output: any,
  context: __SerdeContext
): AggregateResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateResourceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
