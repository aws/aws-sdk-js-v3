// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AggregateComplianceCount,
  AggregateConformancePackComplianceFilters,
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
  ConformancePackDetail,
  ConformancePackEvaluationFilters,
  ConformancePackEvaluationResult,
  ConformancePackInputParameter,
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
  DeleteOrganizationConfigRuleRequest,
  DeleteOrganizationConformancePackRequest,
  DeletePendingAggregationRequestRequest,
  DeleteRemediationConfigurationRequest,
  DeleteRemediationExceptionsRequest,
  DeleteResourceConfigRequest,
  DeleteRetentionConfigurationRequest,
  DeleteStoredQueryRequest,
  DeliverConfigSnapshotRequest,
  DeliveryChannel,
  DeliveryChannelStatus,
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConformancePacksRequest,
  DescribeAggregationAuthorizationsRequest,
  DescribeAggregationAuthorizationsResponse,
  DescribeComplianceByConfigRuleRequest,
  DescribeComplianceByResourceRequest,
  DescribeConfigRuleEvaluationStatusRequest,
  DescribeConfigRuleEvaluationStatusResponse,
  DescribeConfigRulesFilters,
  DescribeConfigRulesRequest,
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
  DescribeConfigurationAggregatorsRequest,
  DescribeConfigurationAggregatorsResponse,
  DescribeConfigurationRecordersRequest,
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
  DescribeConformancePackComplianceRequest,
  DescribeConformancePacksRequest,
  DescribeConformancePacksResponse,
  DescribeConformancePackStatusRequest,
  DescribeConformancePackStatusResponse,
  DescribeDeliveryChannelsRequest,
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
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationExceptionsRequest,
  DescribeRemediationExceptionsResponse,
  DescribeRemediationExecutionStatusRequest,
  DescribeRemediationExecutionStatusResponse,
  DescribeRetentionConfigurationsRequest,
  Evaluation,
  EvaluationContext,
  EvaluationModeConfiguration,
  EvaluationResult,
  EvaluationResultIdentifier,
  ExclusionByResourceTypes,
  ExecutionControls,
  ExternalEvaluation,
  FailedRemediationExceptionBatch,
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
  GetAggregateConformancePackComplianceSummaryRequest,
  GetAggregateDiscoveredResourceCountsRequest,
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
  GetCustomRulePolicyRequest,
  GetDiscoveredResourceCountsRequest,
  GetOrganizationConfigRuleDetailedStatusRequest,
  GetOrganizationConfigRuleDetailedStatusResponse,
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
  GetOrganizationCustomRulePolicyRequest,
  GetResourceConfigHistoryRequest,
  GetResourceConfigHistoryResponse,
  GetResourceEvaluationSummaryRequest,
  GetResourceEvaluationSummaryResponse,
  GetStoredQueryRequest,
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
  ListConformancePackComplianceScoresRequest,
  ListConformancePackComplianceScoresResponse,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResponse,
  ListResourceEvaluationsRequest,
  ListResourceEvaluationsResponse,
  ListStoredQueriesRequest,
  ListTagsForResourceRequest,
  MaxActiveResourcesExceededException,
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
  OrganizationCustomRuleMetadata,
  OrganizationManagedRuleMetadata,
  OrganizationResourceDetailedStatusFilters,
  OversizedConfigurationItemException,
  RecordingGroup,
  RecordingStrategy,
  RemediationConfiguration,
  RemediationException,
  RemediationExceptionResourceKey,
  RemediationExecutionStatus,
  RemediationExecutionStep,
  RemediationInProgressException,
  RemediationParameterValue,
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
  Scope,
  Source,
  SourceDetail,
  SsmControls,
  StaticValue,
  StatusDetailFilters,
  StoredQuery,
  Tag,
  TemplateSSMDocumentDetails,
  TimeWindow,
  ValidationException,
} from "../models/models_0";
import {
  MaxNumberOfConfigRulesExceededException,
  MaxNumberOfConfigurationRecordersExceededException,
  MaxNumberOfConformancePacksExceededException,
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
  PutDeliveryChannelRequest,
  PutEvaluationsRequest,
  PutEvaluationsResponse,
  PutExternalEvaluationRequest,
  PutOrganizationConfigRuleRequest,
  PutOrganizationConformancePackRequest,
  PutRemediationConfigurationsRequest,
  PutRemediationExceptionsRequest,
  PutRemediationExceptionsResponse,
  PutResourceConfigRequest,
  PutRetentionConfigurationRequest,
  PutStoredQueryRequest,
  ResourceConcurrentModificationException,
  SelectAggregateResourceConfigRequest,
  SelectResourceConfigRequest,
  StartConfigRulesEvaluationRequest,
  StartConfigurationRecorderRequest,
  StartRemediationExecutionRequest,
  StartResourceEvaluationRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEvaluationResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRemediationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRemediationExceptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeliverConfigSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAggregateComplianceByConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAggregateComplianceByConformancePacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeComplianceByConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeComplianceByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeConfigRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeConfigurationRecordersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeConformancePackComplianceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDeliveryChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePendingAggregationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeRetentionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAggregateConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAggregateDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetConformancePackComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDiscoveredResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetOrganizationCustomRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListAggregateDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListStoredQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutExternalEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutOrganizationConfigRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutOrganizationConformancePackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRemediationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRetentionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutStoredQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SelectAggregateResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SelectResourceConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartConfigRulesEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartRemediationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartResourceEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountAggregationSource omitted.

// se_AccountAggregationSourceAccountList omitted.

// se_AccountAggregationSourceList omitted.

// se_AggregateConformancePackComplianceFilters omitted.

// se_AggregateConformancePackComplianceSummaryFilters omitted.

// se_AggregatedSourceStatusTypeList omitted.

// se_AggregateResourceIdentifier omitted.

// se_AggregatorRegionList omitted.

// se_BatchGetAggregateResourceConfigRequest omitted.

// se_BatchGetResourceConfigRequest omitted.

// se_ComplianceResourceTypes omitted.

// se_ComplianceTypes omitted.

// se_ConfigRule omitted.

// se_ConfigRuleComplianceFilters omitted.

// se_ConfigRuleComplianceSummaryFilters omitted.

// se_ConfigRuleNames omitted.

// se_ConfigSnapshotDeliveryProperties omitted.

// se_ConfigurationAggregatorNameList omitted.

// se_ConfigurationRecorder omitted.

// se_ConfigurationRecorderNameList omitted.

// se_ConformancePackComplianceFilters omitted.

// se_ConformancePackComplianceResourceIds omitted.

// se_ConformancePackComplianceScoresFilters omitted.

// se_ConformancePackConfigRuleNames omitted.

// se_ConformancePackEvaluationFilters omitted.

// se_ConformancePackInputParameter omitted.

// se_ConformancePackInputParameters omitted.

// se_ConformancePackNameFilter omitted.

// se_ConformancePackNamesList omitted.

// se_ConformancePackNamesToSummarizeList omitted.

// se_CustomPolicyDetails omitted.

// se_DebugLogDeliveryAccounts omitted.

// se_DeleteAggregationAuthorizationRequest omitted.

// se_DeleteConfigRuleRequest omitted.

// se_DeleteConfigurationAggregatorRequest omitted.

// se_DeleteConfigurationRecorderRequest omitted.

// se_DeleteConformancePackRequest omitted.

// se_DeleteDeliveryChannelRequest omitted.

// se_DeleteEvaluationResultsRequest omitted.

// se_DeleteOrganizationConfigRuleRequest omitted.

// se_DeleteOrganizationConformancePackRequest omitted.

// se_DeletePendingAggregationRequestRequest omitted.

// se_DeleteRemediationConfigurationRequest omitted.

// se_DeleteRemediationExceptionsRequest omitted.

// se_DeleteResourceConfigRequest omitted.

// se_DeleteRetentionConfigurationRequest omitted.

// se_DeleteStoredQueryRequest omitted.

// se_DeliverConfigSnapshotRequest omitted.

// se_DeliveryChannel omitted.

// se_DeliveryChannelNameList omitted.

// se_DescribeAggregateComplianceByConfigRulesRequest omitted.

// se_DescribeAggregateComplianceByConformancePacksRequest omitted.

// se_DescribeAggregationAuthorizationsRequest omitted.

// se_DescribeComplianceByConfigRuleRequest omitted.

// se_DescribeComplianceByResourceRequest omitted.

// se_DescribeConfigRuleEvaluationStatusRequest omitted.

// se_DescribeConfigRulesFilters omitted.

// se_DescribeConfigRulesRequest omitted.

// se_DescribeConfigurationAggregatorSourcesStatusRequest omitted.

// se_DescribeConfigurationAggregatorsRequest omitted.

// se_DescribeConfigurationRecordersRequest omitted.

// se_DescribeConfigurationRecorderStatusRequest omitted.

// se_DescribeConformancePackComplianceRequest omitted.

// se_DescribeConformancePacksRequest omitted.

// se_DescribeConformancePackStatusRequest omitted.

// se_DescribeDeliveryChannelsRequest omitted.

// se_DescribeDeliveryChannelStatusRequest omitted.

// se_DescribeOrganizationConfigRulesRequest omitted.

// se_DescribeOrganizationConfigRuleStatusesRequest omitted.

// se_DescribeOrganizationConformancePacksRequest omitted.

// se_DescribeOrganizationConformancePackStatusesRequest omitted.

// se_DescribePendingAggregationRequestsRequest omitted.

// se_DescribeRemediationConfigurationsRequest omitted.

// se_DescribeRemediationExceptionsRequest omitted.

// se_DescribeRemediationExecutionStatusRequest omitted.

// se_DescribeRetentionConfigurationsRequest omitted.

/**
 * serializeAws_json1_1Evaluation
 */
const se_Evaluation = (input: Evaluation, context: __SerdeContext): any => {
  return take(input, {
    Annotation: [],
    ComplianceResourceId: [],
    ComplianceResourceType: [],
    ComplianceType: [],
    OrderingTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_EvaluationContext omitted.

// se_EvaluationModeConfiguration omitted.

// se_EvaluationModes omitted.

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

// se_ExcludedAccounts omitted.

// se_ExclusionByResourceTypes omitted.

// se_ExecutionControls omitted.

/**
 * serializeAws_json1_1ExternalEvaluation
 */
const se_ExternalEvaluation = (input: ExternalEvaluation, context: __SerdeContext): any => {
  return take(input, {
    Annotation: [],
    ComplianceResourceId: [],
    ComplianceResourceType: [],
    ComplianceType: [],
    OrderingTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_GetAggregateComplianceDetailsByConfigRuleRequest omitted.

// se_GetAggregateConfigRuleComplianceSummaryRequest omitted.

// se_GetAggregateConformancePackComplianceSummaryRequest omitted.

// se_GetAggregateDiscoveredResourceCountsRequest omitted.

// se_GetAggregateResourceConfigRequest omitted.

// se_GetComplianceDetailsByConfigRuleRequest omitted.

// se_GetComplianceDetailsByResourceRequest omitted.

// se_GetComplianceSummaryByResourceTypeRequest omitted.

// se_GetConformancePackComplianceDetailsRequest omitted.

// se_GetConformancePackComplianceSummaryRequest omitted.

// se_GetCustomRulePolicyRequest omitted.

// se_GetDiscoveredResourceCountsRequest omitted.

// se_GetOrganizationConfigRuleDetailedStatusRequest omitted.

// se_GetOrganizationConformancePackDetailedStatusRequest omitted.

// se_GetOrganizationCustomRulePolicyRequest omitted.

/**
 * serializeAws_json1_1GetResourceConfigHistoryRequest
 */
const se_GetResourceConfigHistoryRequest = (input: GetResourceConfigHistoryRequest, context: __SerdeContext): any => {
  return take(input, {
    chronologicalOrder: [],
    earlierTime: (_) => Math.round(_.getTime() / 1000),
    laterTime: (_) => Math.round(_.getTime() / 1000),
    limit: [],
    nextToken: [],
    resourceId: [],
    resourceType: [],
  });
};

// se_GetResourceEvaluationSummaryRequest omitted.

// se_GetStoredQueryRequest omitted.

// se_ListAggregateDiscoveredResourcesRequest omitted.

// se_ListConformancePackComplianceScoresRequest omitted.

// se_ListDiscoveredResourcesRequest omitted.

/**
 * serializeAws_json1_1ListResourceEvaluationsRequest
 */
const se_ListResourceEvaluationsRequest = (input: ListResourceEvaluationsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filters: (_) => se_ResourceEvaluationFilters(_, context),
    Limit: [],
    NextToken: [],
  });
};

// se_ListStoredQueriesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_OrganizationAggregationSource omitted.

// se_OrganizationConfigRuleNames omitted.

// se_OrganizationConfigRuleTriggerTypeNoSNs omitted.

// se_OrganizationConfigRuleTriggerTypes omitted.

// se_OrganizationConformancePackNames omitted.

// se_OrganizationCustomPolicyRuleMetadata omitted.

// se_OrganizationCustomRuleMetadata omitted.

// se_OrganizationManagedRuleMetadata omitted.

// se_OrganizationResourceDetailedStatusFilters omitted.

// se_PutAggregationAuthorizationRequest omitted.

// se_PutConfigRuleRequest omitted.

// se_PutConfigurationAggregatorRequest omitted.

// se_PutConfigurationRecorderRequest omitted.

// se_PutConformancePackRequest omitted.

// se_PutDeliveryChannelRequest omitted.

/**
 * serializeAws_json1_1PutEvaluationsRequest
 */
const se_PutEvaluationsRequest = (input: PutEvaluationsRequest, context: __SerdeContext): any => {
  return take(input, {
    Evaluations: (_) => se_Evaluations(_, context),
    ResultToken: [],
    TestMode: [],
  });
};

/**
 * serializeAws_json1_1PutExternalEvaluationRequest
 */
const se_PutExternalEvaluationRequest = (input: PutExternalEvaluationRequest, context: __SerdeContext): any => {
  return take(input, {
    ConfigRuleName: [],
    ExternalEvaluation: (_) => se_ExternalEvaluation(_, context),
  });
};

// se_PutOrganizationConfigRuleRequest omitted.

// se_PutOrganizationConformancePackRequest omitted.

// se_PutRemediationConfigurationsRequest omitted.

/**
 * serializeAws_json1_1PutRemediationExceptionsRequest
 */
const se_PutRemediationExceptionsRequest = (input: PutRemediationExceptionsRequest, context: __SerdeContext): any => {
  return take(input, {
    ConfigRuleName: [],
    ExpirationTime: (_) => Math.round(_.getTime() / 1000),
    Message: [],
    ResourceKeys: _json,
  });
};

// se_PutResourceConfigRequest omitted.

// se_PutRetentionConfigurationRequest omitted.

// se_PutStoredQueryRequest omitted.

// se_RecordingGroup omitted.

// se_RecordingStrategy omitted.

// se_ReevaluateConfigRuleNames omitted.

// se_RemediationConfiguration omitted.

// se_RemediationConfigurations omitted.

// se_RemediationExceptionResourceKey omitted.

// se_RemediationExceptionResourceKeys omitted.

// se_RemediationParameters omitted.

// se_RemediationParameterValue omitted.

// se_ResourceCountFilters omitted.

// se_ResourceDetails omitted.

/**
 * serializeAws_json1_1ResourceEvaluationFilters
 */
const se_ResourceEvaluationFilters = (input: ResourceEvaluationFilters, context: __SerdeContext): any => {
  return take(input, {
    EvaluationContextIdentifier: [],
    EvaluationMode: [],
    TimeWindow: (_) => se_TimeWindow(_, context),
  });
};

// se_ResourceFilters omitted.

// se_ResourceIdentifiersList omitted.

// se_ResourceIdList omitted.

// se_ResourceKey omitted.

// se_ResourceKeys omitted.

// se_ResourceTypeList omitted.

// se_ResourceTypes omitted.

// se_ResourceTypesScope omitted.

// se_ResourceValue omitted.

// se_RetentionConfigurationNameList omitted.

// se_Scope omitted.

// se_SelectAggregateResourceConfigRequest omitted.

// se_SelectResourceConfigRequest omitted.

// se_Source omitted.

// se_SourceDetail omitted.

// se_SourceDetails omitted.

// se_SsmControls omitted.

// se_StartConfigRulesEvaluationRequest omitted.

// se_StartConfigurationRecorderRequest omitted.

// se_StartRemediationExecutionRequest omitted.

// se_StartResourceEvaluationRequest omitted.

// se_StaticParameterValues omitted.

// se_StaticValue omitted.

// se_StatusDetailFilters omitted.

// se_StopConfigurationRecorderRequest omitted.

// se_StoredQuery omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TagsList omitted.

// se_TemplateSSMDocumentDetails omitted.

/**
 * serializeAws_json1_1TimeWindow
 */
const se_TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

// de_AccountAggregationSource omitted.

// de_AccountAggregationSourceAccountList omitted.

// de_AccountAggregationSourceList omitted.

// de_AggregateComplianceByConfigRule omitted.

// de_AggregateComplianceByConfigRuleList omitted.

// de_AggregateComplianceByConformancePack omitted.

// de_AggregateComplianceByConformancePackList omitted.

/**
 * deserializeAws_json1_1AggregateComplianceCount
 */
const de_AggregateComplianceCount = (output: any, context: __SerdeContext): AggregateComplianceCount => {
  return take(output, {
    ComplianceSummary: (_: any) => de_ComplianceSummary(_, context),
    GroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AggregateComplianceCountList
 */
const de_AggregateComplianceCountList = (output: any, context: __SerdeContext): AggregateComplianceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregateComplianceCount(entry, context);
    });
  return retVal;
};

// de_AggregateConformancePackCompliance omitted.

// de_AggregateConformancePackComplianceCount omitted.

// de_AggregateConformancePackComplianceSummary omitted.

// de_AggregateConformancePackComplianceSummaryList omitted.

/**
 * deserializeAws_json1_1AggregatedSourceStatus
 */
const de_AggregatedSourceStatus = (output: any, context: __SerdeContext): AggregatedSourceStatus => {
  return take(output, {
    AwsRegion: __expectString,
    LastErrorCode: __expectString,
    LastErrorMessage: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceId: __expectString,
    SourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AggregatedSourceStatusList
 */
const de_AggregatedSourceStatusList = (output: any, context: __SerdeContext): AggregatedSourceStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregatedSourceStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AggregateEvaluationResult
 */
const de_AggregateEvaluationResult = (output: any, context: __SerdeContext): AggregateEvaluationResult => {
  return take(output, {
    AccountId: __expectString,
    Annotation: __expectString,
    AwsRegion: __expectString,
    ComplianceType: __expectString,
    ConfigRuleInvokedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationResultIdentifier: (_: any) => de_EvaluationResultIdentifier(_, context),
    ResultRecordedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AggregateEvaluationResultList
 */
const de_AggregateEvaluationResultList = (output: any, context: __SerdeContext): AggregateEvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregateEvaluationResult(entry, context);
    });
  return retVal;
};

// de_AggregateResourceIdentifier omitted.

/**
 * deserializeAws_json1_1AggregationAuthorization
 */
const de_AggregationAuthorization = (output: any, context: __SerdeContext): AggregationAuthorization => {
  return take(output, {
    AggregationAuthorizationArn: __expectString,
    AuthorizedAccountId: __expectString,
    AuthorizedAwsRegion: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AggregationAuthorizationList
 */
const de_AggregationAuthorizationList = (output: any, context: __SerdeContext): AggregationAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregationAuthorization(entry, context);
    });
  return retVal;
};

// de_AggregatorRegionList omitted.

/**
 * deserializeAws_json1_1BaseConfigurationItem
 */
const de_BaseConfigurationItem = (output: any, context: __SerdeContext): BaseConfigurationItem => {
  return take(output, {
    accountId: __expectString,
    arn: __expectString,
    availabilityZone: __expectString,
    awsRegion: __expectString,
    configuration: __expectString,
    configurationItemCaptureTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    configurationItemStatus: __expectString,
    configurationStateId: __expectString,
    resourceCreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceId: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
    supplementaryConfiguration: _json,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BaseConfigurationItems
 */
const de_BaseConfigurationItems = (output: any, context: __SerdeContext): BaseConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    BaseConfigurationItems: (_: any) => de_BaseConfigurationItems(_, context),
    UnprocessedResourceIdentifiers: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetResourceConfigResponse
 */
const de_BatchGetResourceConfigResponse = (output: any, context: __SerdeContext): BatchGetResourceConfigResponse => {
  return take(output, {
    baseConfigurationItems: (_: any) => de_BaseConfigurationItems(_, context),
    unprocessedResourceKeys: _json,
  }) as any;
};

// de_Compliance omitted.

// de_ComplianceByConfigRule omitted.

// de_ComplianceByConfigRules omitted.

// de_ComplianceByResource omitted.

// de_ComplianceByResources omitted.

// de_ComplianceContributorCount omitted.

// de_ComplianceResourceTypes omitted.

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
      return de_ComplianceSummaryByResourceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComplianceSummary
 */
const de_ComplianceSummary = (output: any, context: __SerdeContext): ComplianceSummary => {
  return take(output, {
    ComplianceSummaryTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompliantResourceCount: _json,
    NonCompliantResourceCount: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ComplianceSummaryByResourceType
 */
const de_ComplianceSummaryByResourceType = (output: any, context: __SerdeContext): ComplianceSummaryByResourceType => {
  return take(output, {
    ComplianceSummary: (_: any) => de_ComplianceSummary(_, context),
    ResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigExportDeliveryInfo
 */
const de_ConfigExportDeliveryInfo = (output: any, context: __SerdeContext): ConfigExportDeliveryInfo => {
  return take(output, {
    lastAttemptTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastErrorCode: __expectString,
    lastErrorMessage: __expectString,
    lastStatus: __expectString,
    lastSuccessfulTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nextDeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ConfigRule omitted.

/**
 * deserializeAws_json1_1ConfigRuleEvaluationStatus
 */
const de_ConfigRuleEvaluationStatus = (output: any, context: __SerdeContext): ConfigRuleEvaluationStatus => {
  return take(output, {
    ConfigRuleArn: __expectString,
    ConfigRuleId: __expectString,
    ConfigRuleName: __expectString,
    FirstActivatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FirstEvaluationStarted: __expectBoolean,
    LastDeactivatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastDebugLogDeliveryStatus: __expectString,
    LastDebugLogDeliveryStatusReason: __expectString,
    LastDebugLogDeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastErrorCode: __expectString,
    LastErrorMessage: __expectString,
    LastFailedEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastFailedInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessfulEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessfulInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigRuleEvaluationStatusList
 */
const de_ConfigRuleEvaluationStatusList = (output: any, context: __SerdeContext): ConfigRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

// de_ConfigRules omitted.

// de_ConfigSnapshotDeliveryProperties omitted.

/**
 * deserializeAws_json1_1ConfigStreamDeliveryInfo
 */
const de_ConfigStreamDeliveryInfo = (output: any, context: __SerdeContext): ConfigStreamDeliveryInfo => {
  return take(output, {
    lastErrorCode: __expectString,
    lastErrorMessage: __expectString,
    lastStatus: __expectString,
    lastStatusChangeTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationAggregator
 */
const de_ConfigurationAggregator = (output: any, context: __SerdeContext): ConfigurationAggregator => {
  return take(output, {
    AccountAggregationSources: _json,
    ConfigurationAggregatorArn: __expectString,
    ConfigurationAggregatorName: __expectString,
    CreatedBy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationAggregationSource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationAggregatorList
 */
const de_ConfigurationAggregatorList = (output: any, context: __SerdeContext): ConfigurationAggregator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationAggregator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfigurationItem
 */
const de_ConfigurationItem = (output: any, context: __SerdeContext): ConfigurationItem => {
  return take(output, {
    accountId: __expectString,
    arn: __expectString,
    availabilityZone: __expectString,
    awsRegion: __expectString,
    configuration: __expectString,
    configurationItemCaptureTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    configurationItemMD5Hash: __expectString,
    configurationItemStatus: __expectString,
    configurationStateId: __expectString,
    relatedEvents: _json,
    relationships: _json,
    resourceCreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceId: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
    supplementaryConfiguration: _json,
    tags: _json,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationItemList
 */
const de_ConfigurationItemList = (output: any, context: __SerdeContext): ConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationItem(entry, context);
    });
  return retVal;
};

// de_ConfigurationRecorder omitted.

// de_ConfigurationRecorderList omitted.

/**
 * deserializeAws_json1_1ConfigurationRecorderStatus
 */
const de_ConfigurationRecorderStatus = (output: any, context: __SerdeContext): ConfigurationRecorderStatus => {
  return take(output, {
    lastErrorCode: __expectString,
    lastErrorMessage: __expectString,
    lastStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStatus: __expectString,
    lastStatusChangeTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recording: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationRecorderStatusList
 */
const de_ConfigurationRecorderStatusList = (output: any, context: __SerdeContext): ConfigurationRecorderStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationRecorderStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceScore
 */
const de_ConformancePackComplianceScore = (output: any, context: __SerdeContext): ConformancePackComplianceScore => {
  return take(output, {
    ConformancePackName: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Score: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConformancePackComplianceScores
 */
const de_ConformancePackComplianceScores = (output: any, context: __SerdeContext): ConformancePackComplianceScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConformancePackComplianceScore(entry, context);
    });
  return retVal;
};

// de_ConformancePackComplianceSummary omitted.

// de_ConformancePackComplianceSummaryList omitted.

/**
 * deserializeAws_json1_1ConformancePackDetail
 */
const de_ConformancePackDetail = (output: any, context: __SerdeContext): ConformancePackDetail => {
  return take(output, {
    ConformancePackArn: __expectString,
    ConformancePackId: __expectString,
    ConformancePackInputParameters: _json,
    ConformancePackName: __expectString,
    CreatedBy: __expectString,
    DeliveryS3Bucket: __expectString,
    DeliveryS3KeyPrefix: __expectString,
    LastUpdateRequestedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TemplateSSMDocumentDetails: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ConformancePackDetailList
 */
const de_ConformancePackDetailList = (output: any, context: __SerdeContext): ConformancePackDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConformancePackDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackEvaluationResult
 */
const de_ConformancePackEvaluationResult = (output: any, context: __SerdeContext): ConformancePackEvaluationResult => {
  return take(output, {
    Annotation: __expectString,
    ComplianceType: __expectString,
    ConfigRuleInvokedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationResultIdentifier: (_: any) => de_EvaluationResultIdentifier(_, context),
    ResultRecordedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ConformancePackInputParameter omitted.

// de_ConformancePackInputParameters omitted.

// de_ConformancePackRuleCompliance omitted.

// de_ConformancePackRuleComplianceList omitted.

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
      return de_ConformancePackEvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConformancePackStatusDetail
 */
const de_ConformancePackStatusDetail = (output: any, context: __SerdeContext): ConformancePackStatusDetail => {
  return take(output, {
    ConformancePackArn: __expectString,
    ConformancePackId: __expectString,
    ConformancePackName: __expectString,
    ConformancePackState: __expectString,
    ConformancePackStatusReason: __expectString,
    LastUpdateCompletedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateRequestedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StackArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConformancePackStatusDetailsList
 */
const de_ConformancePackStatusDetailsList = (output: any, context: __SerdeContext): ConformancePackStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConformancePackStatusDetail(entry, context);
    });
  return retVal;
};

// de_ConformancePackTemplateValidationException omitted.

// de_ControlsList omitted.

// de_CustomPolicyDetails omitted.

// de_DebugLogDeliveryAccounts omitted.

// de_DeleteEvaluationResultsResponse omitted.

// de_DeleteRemediationConfigurationResponse omitted.

// de_DeleteRemediationExceptionsResponse omitted.

// de_DeleteStoredQueryResponse omitted.

// de_DeliverConfigSnapshotResponse omitted.

// de_DeliveryChannel omitted.

// de_DeliveryChannelList omitted.

/**
 * deserializeAws_json1_1DeliveryChannelStatus
 */
const de_DeliveryChannelStatus = (output: any, context: __SerdeContext): DeliveryChannelStatus => {
  return take(output, {
    configHistoryDeliveryInfo: (_: any) => de_ConfigExportDeliveryInfo(_, context),
    configSnapshotDeliveryInfo: (_: any) => de_ConfigExportDeliveryInfo(_, context),
    configStreamDeliveryInfo: (_: any) => de_ConfigStreamDeliveryInfo(_, context),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeliveryChannelStatusList
 */
const de_DeliveryChannelStatusList = (output: any, context: __SerdeContext): DeliveryChannelStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeliveryChannelStatus(entry, context);
    });
  return retVal;
};

// de_DescribeAggregateComplianceByConfigRulesResponse omitted.

// de_DescribeAggregateComplianceByConformancePacksResponse omitted.

/**
 * deserializeAws_json1_1DescribeAggregationAuthorizationsResponse
 */
const de_DescribeAggregationAuthorizationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAggregationAuthorizationsResponse => {
  return take(output, {
    AggregationAuthorizations: (_: any) => de_AggregationAuthorizationList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeComplianceByConfigRuleResponse omitted.

// de_DescribeComplianceByResourceResponse omitted.

/**
 * deserializeAws_json1_1DescribeConfigRuleEvaluationStatusResponse
 */
const de_DescribeConfigRuleEvaluationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigRuleEvaluationStatusResponse => {
  return take(output, {
    ConfigRulesEvaluationStatus: (_: any) => de_ConfigRuleEvaluationStatusList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeConfigRulesResponse omitted.

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusResponse
 */
const de_DescribeConfigurationAggregatorSourcesStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorSourcesStatusResponse => {
  return take(output, {
    AggregatedSourceStatusList: (_: any) => de_AggregatedSourceStatusList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeConfigurationAggregatorsResponse
 */
const de_DescribeConfigurationAggregatorsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationAggregatorsResponse => {
  return take(output, {
    ConfigurationAggregators: (_: any) => de_ConfigurationAggregatorList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeConfigurationRecordersResponse omitted.

/**
 * deserializeAws_json1_1DescribeConfigurationRecorderStatusResponse
 */
const de_DescribeConfigurationRecorderStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationRecorderStatusResponse => {
  return take(output, {
    ConfigurationRecordersStatus: (_: any) => de_ConfigurationRecorderStatusList(_, context),
  }) as any;
};

// de_DescribeConformancePackComplianceResponse omitted.

/**
 * deserializeAws_json1_1DescribeConformancePacksResponse
 */
const de_DescribeConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePacksResponse => {
  return take(output, {
    ConformancePackDetails: (_: any) => de_ConformancePackDetailList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeConformancePackStatusResponse
 */
const de_DescribeConformancePackStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeConformancePackStatusResponse => {
  return take(output, {
    ConformancePackStatusDetails: (_: any) => de_ConformancePackStatusDetailsList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeDeliveryChannelsResponse omitted.

/**
 * deserializeAws_json1_1DescribeDeliveryChannelStatusResponse
 */
const de_DescribeDeliveryChannelStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryChannelStatusResponse => {
  return take(output, {
    DeliveryChannelsStatus: (_: any) => de_DeliveryChannelStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRulesResponse
 */
const de_DescribeOrganizationConfigRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRulesResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConfigRules: (_: any) => de_OrganizationConfigRules(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesResponse
 */
const de_DescribeOrganizationConfigRuleStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConfigRuleStatusesResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConfigRuleStatuses: (_: any) => de_OrganizationConfigRuleStatuses(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePacksResponse
 */
const de_DescribeOrganizationConformancePacksResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePacksResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConformancePacks: (_: any) => de_OrganizationConformancePacks(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationConformancePackStatusesResponse
 */
const de_DescribeOrganizationConformancePackStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationConformancePackStatusesResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConformancePackStatuses: (_: any) => de_OrganizationConformancePackStatuses(_, context),
  }) as any;
};

// de_DescribePendingAggregationRequestsResponse omitted.

// de_DescribeRemediationConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1DescribeRemediationExceptionsResponse
 */
const de_DescribeRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExceptionsResponse => {
  return take(output, {
    NextToken: __expectString,
    RemediationExceptions: (_: any) => de_RemediationExceptions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRemediationExecutionStatusResponse
 */
const de_DescribeRemediationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRemediationExecutionStatusResponse => {
  return take(output, {
    NextToken: __expectString,
    RemediationExecutionStatuses: (_: any) => de_RemediationExecutionStatuses(_, context),
  }) as any;
};

// de_DescribeRetentionConfigurationsResponse omitted.

// de_DiscoveredResourceIdentifierList omitted.

/**
 * deserializeAws_json1_1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return take(output, {
    Annotation: __expectString,
    ComplianceResourceId: __expectString,
    ComplianceResourceType: __expectString,
    ComplianceType: __expectString,
    OrderingTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_EvaluationContext omitted.

// de_EvaluationModeConfiguration omitted.

// de_EvaluationModes omitted.

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return take(output, {
    Annotation: __expectString,
    ComplianceType: __expectString,
    ConfigRuleInvokedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationResultIdentifier: (_: any) => de_EvaluationResultIdentifier(_, context),
    ResultRecordedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResultToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EvaluationResultIdentifier
 */
const de_EvaluationResultIdentifier = (output: any, context: __SerdeContext): EvaluationResultIdentifier => {
  return take(output, {
    EvaluationResultQualifier: _json,
    OrderingTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceEvaluationId: __expectString,
  }) as any;
};

// de_EvaluationResultQualifier omitted.

/**
 * deserializeAws_json1_1EvaluationResults
 */
const de_EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Evaluation(entry, context);
    });
  return retVal;
};

// de_EvaluationStatus omitted.

// de_ExcludedAccounts omitted.

// de_ExclusionByResourceTypes omitted.

// de_ExecutionControls omitted.

// de_FailedDeleteRemediationExceptionsBatch omitted.

// de_FailedDeleteRemediationExceptionsBatches omitted.

// de_FailedRemediationBatch omitted.

// de_FailedRemediationBatches omitted.

/**
 * deserializeAws_json1_1FailedRemediationExceptionBatch
 */
const de_FailedRemediationExceptionBatch = (output: any, context: __SerdeContext): FailedRemediationExceptionBatch => {
  return take(output, {
    FailedItems: (_: any) => de_RemediationExceptions(_, context),
    FailureMessage: __expectString,
  }) as any;
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
      return de_FailedRemediationExceptionBatch(entry, context);
    });
  return retVal;
};

// de_FieldInfo omitted.

// de_FieldInfoList omitted.

/**
 * deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleResponse
 */
const de_GetAggregateComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateComplianceDetailsByConfigRuleResponse => {
  return take(output, {
    AggregateEvaluationResults: (_: any) => de_AggregateEvaluationResultList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryResponse
 */
const de_GetAggregateConfigRuleComplianceSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateConfigRuleComplianceSummaryResponse => {
  return take(output, {
    AggregateComplianceCounts: (_: any) => de_AggregateComplianceCountList(_, context),
    GroupByKey: __expectString,
    NextToken: __expectString,
  }) as any;
};

// de_GetAggregateConformancePackComplianceSummaryResponse omitted.

// de_GetAggregateDiscoveredResourceCountsResponse omitted.

/**
 * deserializeAws_json1_1GetAggregateResourceConfigResponse
 */
const de_GetAggregateResourceConfigResponse = (
  output: any,
  context: __SerdeContext
): GetAggregateResourceConfigResponse => {
  return take(output, {
    ConfigurationItem: (_: any) => de_ConfigurationItem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByConfigRuleResponse
 */
const de_GetComplianceDetailsByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByConfigRuleResponse => {
  return take(output, {
    EvaluationResults: (_: any) => de_EvaluationResults(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailsByResourceResponse
 */
const de_GetComplianceDetailsByResourceResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailsByResourceResponse => {
  return take(output, {
    EvaluationResults: (_: any) => de_EvaluationResults(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByConfigRuleResponse
 */
const de_GetComplianceSummaryByConfigRuleResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByConfigRuleResponse => {
  return take(output, {
    ComplianceSummary: (_: any) => de_ComplianceSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryByResourceTypeResponse
 */
const de_GetComplianceSummaryByResourceTypeResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryByResourceTypeResponse => {
  return take(output, {
    ComplianceSummariesByResourceType: (_: any) => de_ComplianceSummariesByResourceType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetConformancePackComplianceDetailsResponse
 */
const de_GetConformancePackComplianceDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetConformancePackComplianceDetailsResponse => {
  return take(output, {
    ConformancePackName: __expectString,
    ConformancePackRuleEvaluationResults: (_: any) => de_ConformancePackRuleEvaluationResultsList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_GetConformancePackComplianceSummaryResponse omitted.

// de_GetCustomRulePolicyResponse omitted.

// de_GetDiscoveredResourceCountsResponse omitted.

/**
 * deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusResponse
 */
const de_GetOrganizationConfigRuleDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConfigRuleDetailedStatusResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConfigRuleDetailedStatus: (_: any) => de_OrganizationConfigRuleDetailedStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusResponse
 */
const de_GetOrganizationConformancePackDetailedStatusResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationConformancePackDetailedStatusResponse => {
  return take(output, {
    NextToken: __expectString,
    OrganizationConformancePackDetailedStatuses: (_: any) => de_OrganizationConformancePackDetailedStatuses(_, context),
  }) as any;
};

// de_GetOrganizationCustomRulePolicyResponse omitted.

/**
 * deserializeAws_json1_1GetResourceConfigHistoryResponse
 */
const de_GetResourceConfigHistoryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceConfigHistoryResponse => {
  return take(output, {
    configurationItems: (_: any) => de_ConfigurationItemList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetResourceEvaluationSummaryResponse
 */
const de_GetResourceEvaluationSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetResourceEvaluationSummaryResponse => {
  return take(output, {
    Compliance: __expectString,
    EvaluationContext: _json,
    EvaluationMode: __expectString,
    EvaluationStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationStatus: _json,
    ResourceDetails: _json,
    ResourceEvaluationId: __expectString,
  }) as any;
};

// de_GetStoredQueryResponse omitted.

// de_GroupedResourceCount omitted.

// de_GroupedResourceCountList omitted.

// de_IdempotentParameterMismatch omitted.

// de_InsufficientDeliveryPolicyException omitted.

// de_InsufficientPermissionsException omitted.

// de_InvalidConfigurationRecorderNameException omitted.

// de_InvalidDeliveryChannelNameException omitted.

// de_InvalidExpressionException omitted.

// de_InvalidLimitException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterValueException omitted.

// de_InvalidRecordingGroupException omitted.

// de_InvalidResultTokenException omitted.

// de_InvalidRoleException omitted.

// de_InvalidS3KeyPrefixException omitted.

// de_InvalidS3KmsKeyArnException omitted.

// de_InvalidSNSTopicARNException omitted.

// de_InvalidTimeRangeException omitted.

// de_LastDeliveryChannelDeleteFailedException omitted.

// de_LimitExceededException omitted.

// de_ListAggregateDiscoveredResourcesResponse omitted.

/**
 * deserializeAws_json1_1ListConformancePackComplianceScoresResponse
 */
const de_ListConformancePackComplianceScoresResponse = (
  output: any,
  context: __SerdeContext
): ListConformancePackComplianceScoresResponse => {
  return take(output, {
    ConformancePackComplianceScores: (_: any) => de_ConformancePackComplianceScores(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesResponse
 */
const de_ListDiscoveredResourcesResponse = (output: any, context: __SerdeContext): ListDiscoveredResourcesResponse => {
  return take(output, {
    nextToken: __expectString,
    resourceIdentifiers: (_: any) => de_ResourceIdentifierList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListResourceEvaluationsResponse
 */
const de_ListResourceEvaluationsResponse = (output: any, context: __SerdeContext): ListResourceEvaluationsResponse => {
  return take(output, {
    NextToken: __expectString,
    ResourceEvaluations: (_: any) => de_ResourceEvaluations(_, context),
  }) as any;
};

// de_ListStoredQueriesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_MaxActiveResourcesExceededException omitted.

// de_MaxNumberOfConfigRulesExceededException omitted.

// de_MaxNumberOfConfigurationRecordersExceededException omitted.

// de_MaxNumberOfConformancePacksExceededException omitted.

// de_MaxNumberOfDeliveryChannelsExceededException omitted.

// de_MaxNumberOfOrganizationConfigRulesExceededException omitted.

// de_MaxNumberOfOrganizationConformancePacksExceededException omitted.

// de_MaxNumberOfRetentionConfigurationsExceededException omitted.

/**
 * deserializeAws_json1_1MemberAccountStatus
 */
const de_MemberAccountStatus = (output: any, context: __SerdeContext): MemberAccountStatus => {
  return take(output, {
    AccountId: __expectString,
    ConfigRuleName: __expectString,
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MemberAccountRuleStatus: __expectString,
  }) as any;
};

// de_NoAvailableConfigurationRecorderException omitted.

// de_NoAvailableDeliveryChannelException omitted.

// de_NoAvailableOrganizationException omitted.

// de_NoRunningConfigurationRecorderException omitted.

// de_NoSuchBucketException omitted.

// de_NoSuchConfigRuleException omitted.

// de_NoSuchConfigRuleInConformancePackException omitted.

// de_NoSuchConfigurationAggregatorException omitted.

// de_NoSuchConfigurationRecorderException omitted.

// de_NoSuchConformancePackException omitted.

// de_NoSuchDeliveryChannelException omitted.

// de_NoSuchOrganizationConfigRuleException omitted.

// de_NoSuchOrganizationConformancePackException omitted.

// de_NoSuchRemediationConfigurationException omitted.

// de_NoSuchRemediationExceptionException omitted.

// de_NoSuchRetentionConfigurationException omitted.

// de_OrganizationAccessDeniedException omitted.

// de_OrganizationAggregationSource omitted.

// de_OrganizationAllFeaturesNotEnabledException omitted.

/**
 * deserializeAws_json1_1OrganizationConfigRule
 */
const de_OrganizationConfigRule = (output: any, context: __SerdeContext): OrganizationConfigRule => {
  return take(output, {
    ExcludedAccounts: _json,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationConfigRuleArn: __expectString,
    OrganizationConfigRuleName: __expectString,
    OrganizationCustomPolicyRuleMetadata: _json,
    OrganizationCustomRuleMetadata: _json,
    OrganizationManagedRuleMetadata: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleDetailedStatus
 */
const de_OrganizationConfigRuleDetailedStatus = (output: any, context: __SerdeContext): MemberAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_OrganizationConfigRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleStatus
 */
const de_OrganizationConfigRuleStatus = (output: any, context: __SerdeContext): OrganizationConfigRuleStatus => {
  return take(output, {
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationConfigRuleName: __expectString,
    OrganizationRuleStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OrganizationConfigRuleStatuses
 */
const de_OrganizationConfigRuleStatuses = (output: any, context: __SerdeContext): OrganizationConfigRuleStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrganizationConfigRuleStatus(entry, context);
    });
  return retVal;
};

// de_OrganizationConfigRuleTriggerTypeNoSNs omitted.

// de_OrganizationConfigRuleTriggerTypes omitted.

/**
 * deserializeAws_json1_1OrganizationConformancePack
 */
const de_OrganizationConformancePack = (output: any, context: __SerdeContext): OrganizationConformancePack => {
  return take(output, {
    ConformancePackInputParameters: _json,
    DeliveryS3Bucket: __expectString,
    DeliveryS3KeyPrefix: __expectString,
    ExcludedAccounts: _json,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationConformancePackArn: __expectString,
    OrganizationConformancePackName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OrganizationConformancePackDetailedStatus
 */
const de_OrganizationConformancePackDetailedStatus = (
  output: any,
  context: __SerdeContext
): OrganizationConformancePackDetailedStatus => {
  return take(output, {
    AccountId: __expectString,
    ConformancePackName: __expectString,
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
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
  return take(output, {
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationConformancePackName: __expectString,
    Status: __expectString,
  }) as any;
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
      return de_OrganizationConformancePackStatus(entry, context);
    });
  return retVal;
};

// de_OrganizationConformancePackTemplateValidationException omitted.

// de_OrganizationCustomPolicyRuleMetadataNoPolicy omitted.

// de_OrganizationCustomRuleMetadata omitted.

// de_OrganizationManagedRuleMetadata omitted.

// de_OversizedConfigurationItemException omitted.

// de_PendingAggregationRequest omitted.

// de_PendingAggregationRequestList omitted.

/**
 * deserializeAws_json1_1PutAggregationAuthorizationResponse
 */
const de_PutAggregationAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): PutAggregationAuthorizationResponse => {
  return take(output, {
    AggregationAuthorization: (_: any) => de_AggregationAuthorization(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PutConfigurationAggregatorResponse
 */
const de_PutConfigurationAggregatorResponse = (
  output: any,
  context: __SerdeContext
): PutConfigurationAggregatorResponse => {
  return take(output, {
    ConfigurationAggregator: (_: any) => de_ConfigurationAggregator(_, context),
  }) as any;
};

// de_PutConformancePackResponse omitted.

/**
 * deserializeAws_json1_1PutEvaluationsResponse
 */
const de_PutEvaluationsResponse = (output: any, context: __SerdeContext): PutEvaluationsResponse => {
  return take(output, {
    FailedEvaluations: (_: any) => de_Evaluations(_, context),
  }) as any;
};

// de_PutExternalEvaluationResponse omitted.

// de_PutOrganizationConfigRuleResponse omitted.

// de_PutOrganizationConformancePackResponse omitted.

// de_PutRemediationConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1PutRemediationExceptionsResponse
 */
const de_PutRemediationExceptionsResponse = (
  output: any,
  context: __SerdeContext
): PutRemediationExceptionsResponse => {
  return take(output, {
    FailedBatches: (_: any) => de_FailedRemediationExceptionBatches(_, context),
  }) as any;
};

// de_PutRetentionConfigurationResponse omitted.

// de_PutStoredQueryResponse omitted.

// de_QueryInfo omitted.

// de_RecordingGroup omitted.

// de_RecordingStrategy omitted.

// de_RelatedEventList omitted.

// de_Relationship omitted.

// de_RelationshipList omitted.

// de_RemediationConfiguration omitted.

// de_RemediationConfigurations omitted.

/**
 * deserializeAws_json1_1RemediationException
 */
const de_RemediationException = (output: any, context: __SerdeContext): RemediationException => {
  return take(output, {
    ConfigRuleName: __expectString,
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  }) as any;
};

// de_RemediationExceptionResourceKey omitted.

// de_RemediationExceptionResourceKeys omitted.

/**
 * deserializeAws_json1_1RemediationExceptions
 */
const de_RemediationExceptions = (output: any, context: __SerdeContext): RemediationException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RemediationException(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationExecutionStatus
 */
const de_RemediationExecutionStatus = (output: any, context: __SerdeContext): RemediationExecutionStatus => {
  return take(output, {
    InvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceKey: _json,
    State: __expectString,
    StepDetails: (_: any) => de_RemediationExecutionSteps(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RemediationExecutionStatuses
 */
const de_RemediationExecutionStatuses = (output: any, context: __SerdeContext): RemediationExecutionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RemediationExecutionStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemediationExecutionStep
 */
const de_RemediationExecutionStep = (output: any, context: __SerdeContext): RemediationExecutionStep => {
  return take(output, {
    ErrorMessage: __expectString,
    Name: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1RemediationExecutionSteps
 */
const de_RemediationExecutionSteps = (output: any, context: __SerdeContext): RemediationExecutionStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RemediationExecutionStep(entry, context);
    });
  return retVal;
};

// de_RemediationInProgressException omitted.

// de_RemediationParameters omitted.

// de_RemediationParameterValue omitted.

// de_ResourceConcurrentModificationException omitted.

// de_ResourceCount omitted.

// de_ResourceCounts omitted.

// de_ResourceDetails omitted.

/**
 * deserializeAws_json1_1ResourceEvaluation
 */
const de_ResourceEvaluation = (output: any, context: __SerdeContext): ResourceEvaluation => {
  return take(output, {
    EvaluationMode: __expectString,
    EvaluationStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceEvaluationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceEvaluations
 */
const de_ResourceEvaluations = (output: any, context: __SerdeContext): ResourceEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceEvaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceIdentifier
 */
const de_ResourceIdentifier = (output: any, context: __SerdeContext): ResourceIdentifier => {
  return take(output, {
    resourceDeletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceId: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceIdentifierList
 */
const de_ResourceIdentifierList = (output: any, context: __SerdeContext): ResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceIdentifier(entry, context);
    });
  return retVal;
};

// de_ResourceInUseException omitted.

// de_ResourceKey omitted.

// de_ResourceKeys omitted.

// de_ResourceNotDiscoveredException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceTypeList omitted.

// de_ResourceTypesScope omitted.

// de_ResourceValue omitted.

// de_Results omitted.

// de_RetentionConfiguration omitted.

// de_RetentionConfigurationList omitted.

// de_Scope omitted.

// de_SelectAggregateResourceConfigResponse omitted.

// de_SelectResourceConfigResponse omitted.

// de_Source omitted.

// de_SourceDetail omitted.

// de_SourceDetails omitted.

// de_SsmControls omitted.

// de_StartConfigRulesEvaluationResponse omitted.

// de_StartRemediationExecutionResponse omitted.

// de_StartResourceEvaluationResponse omitted.

// de_StaticParameterValues omitted.

// de_StaticValue omitted.

// de_StoredQuery omitted.

// de_StoredQueryMetadata omitted.

// de_StoredQueryMetadataList omitted.

// de_SupplementaryConfiguration omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Tags omitted.

// de_TemplateSSMDocumentDetails omitted.

// de_TooManyTagsException omitted.

// de_UnprocessedResourceIdentifierList omitted.

// de_ValidationException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
