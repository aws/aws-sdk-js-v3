import {
  AggregateConformancePackComplianceSummaryGroupKey,
  AggregatedSourceStatusType,
  AggregatedSourceType,
  AggregatorFilterType,
  AssociateResourceTypesCommand,
  BatchGetAggregateResourceConfigCommand,
  BatchGetResourceConfigCommand,
  ChronologicalOrder,
  ComplianceType,
  ConfigRuleComplianceSummaryGroupKey,
  ConfigRuleState,
  ConfigService,
  ConfigServiceClient,
  ConfigServiceServiceException,
  ConfigurationItemStatus,
  ConfigurationRecorderFilterName,
  ConflictException,
  ConformancePackComplianceType,
  ConformancePackState,
  ConformancePackTemplateValidationException,
  DeleteAggregationAuthorizationCommand,
  DeleteConfigRuleCommand,
  DeleteConfigurationAggregatorCommand,
  DeleteConfigurationRecorderCommand,
  DeleteConformancePackCommand,
  DeleteDeliveryChannelCommand,
  DeleteEvaluationResultsCommand,
  DeleteOrganizationConfigRuleCommand,
  DeleteOrganizationConformancePackCommand,
  DeletePendingAggregationRequestCommand,
  DeleteRemediationConfigurationCommand,
  DeleteRemediationExceptionsCommand,
  DeleteResourceConfigCommand,
  DeleteRetentionConfigurationCommand,
  DeleteServiceLinkedConfigurationRecorderCommand,
  DeleteStoredQueryCommand,
  DeliverConfigSnapshotCommand,
  DeliveryStatus,
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregationAuthorizationsCommand,
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByResourceCommand,
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRulesCommand,
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationRecorderStatusCommand,
  DescribeConfigurationRecordersCommand,
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackStatusCommand,
  DescribeConformancePacksCommand,
  DescribeDeliveryChannelStatusCommand,
  DescribeDeliveryChannelsCommand,
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePacksCommand,
  DescribePendingAggregationRequestsCommand,
  DescribeRemediationConfigurationsCommand,
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExecutionStatusCommand,
  DescribeRetentionConfigurationsCommand,
  DisassociateResourceTypesCommand,
  EvaluationMode,
  EventSource,
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConformancePackComplianceSummaryCommand,
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateResourceConfigCommand,
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByResourceCommand,
  GetComplianceSummaryByConfigRuleCommand,
  GetComplianceSummaryByResourceTypeCommand,
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceSummaryCommand,
  GetCustomRulePolicyCommand,
  GetDiscoveredResourceCountsCommand,
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConformancePackDetailedStatusCommand,
  GetOrganizationCustomRulePolicyCommand,
  GetResourceConfigHistoryCommand,
  GetResourceEvaluationSummaryCommand,
  GetStoredQueryCommand,
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
  ListAggregateDiscoveredResourcesCommand,
  ListConfigurationRecordersCommand,
  ListConformancePackComplianceScoresCommand,
  ListDiscoveredResourcesCommand,
  ListResourceEvaluationsCommand,
  ListStoredQueriesCommand,
  ListTagsForResourceCommand,
  MaxActiveResourcesExceededException,
  MaxNumberOfConfigRulesExceededException,
  MaxNumberOfConfigurationRecordersExceededException,
  MaxNumberOfConformancePacksExceededException,
  MaxNumberOfDeliveryChannelsExceededException,
  MaxNumberOfOrganizationConfigRulesExceededException,
  MaxNumberOfOrganizationConformancePacksExceededException,
  MaxNumberOfRetentionConfigurationsExceededException,
  MaximumExecutionFrequency,
  MemberAccountRuleStatus,
  MessageType,
  NoAvailableConfigurationRecorderException,
  NoAvailableDeliveryChannelException,
  NoAvailableOrganizationException,
  NoRunningConfigurationRecorderException,
  NoSuchBucketException,
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
  OrganizationAllFeaturesNotEnabledException,
  OrganizationConfigRuleTriggerType,
  OrganizationConfigRuleTriggerTypeNoSN,
  OrganizationConformancePackTemplateValidationException,
  OrganizationResourceDetailedStatus,
  OrganizationResourceStatus,
  OrganizationRuleStatus,
  OversizedConfigurationItemException,
  Owner,
  PutAggregationAuthorizationCommand,
  PutConfigRuleCommand,
  PutConfigurationAggregatorCommand,
  PutConfigurationRecorderCommand,
  PutConformancePackCommand,
  PutDeliveryChannelCommand,
  PutEvaluationsCommand,
  PutExternalEvaluationCommand,
  PutOrganizationConfigRuleCommand,
  PutOrganizationConformancePackCommand,
  PutRemediationConfigurationsCommand,
  PutRemediationExceptionsCommand,
  PutResourceConfigCommand,
  PutRetentionConfigurationCommand,
  PutServiceLinkedConfigurationRecorderCommand,
  PutStoredQueryCommand,
  RecorderStatus,
  RecordingFrequency,
  RecordingScope,
  RecordingStrategyType,
  RemediationExecutionState,
  RemediationExecutionStepState,
  RemediationInProgressException,
  RemediationTargetType,
  ResourceConcurrentModificationException,
  ResourceConfigurationSchemaType,
  ResourceCountGroupKey,
  ResourceEvaluationStatus,
  ResourceInUseException,
  ResourceNotDiscoveredException,
  ResourceNotFoundException,
  ResourceType,
  ResourceValueType,
  SelectAggregateResourceConfigCommand,
  SelectResourceConfigCommand,
  SortBy,
  SortOrder,
  StartConfigRulesEvaluationCommand,
  StartConfigurationRecorderCommand,
  StartRemediationExecutionCommand,
  StartResourceEvaluationCommand,
  StopConfigurationRecorderCommand,
  TagResourceCommand,
  TooManyTagsException,
  UnmodifiableEntityException,
  UntagResourceCommand,
  ValidationException,
  paginateDescribeAggregateComplianceByConfigRules,
  paginateDescribeAggregateComplianceByConformancePacks,
  paginateDescribeAggregationAuthorizations,
  paginateDescribeComplianceByConfigRule,
  paginateDescribeComplianceByResource,
  paginateDescribeConfigRuleEvaluationStatus,
  paginateDescribeConfigRules,
  paginateDescribeConfigurationAggregatorSourcesStatus,
  paginateDescribeConfigurationAggregators,
  paginateDescribeConformancePackCompliance,
  paginateDescribeConformancePackStatus,
  paginateDescribeConformancePacks,
  paginateDescribeOrganizationConfigRuleStatuses,
  paginateDescribeOrganizationConfigRules,
  paginateDescribeOrganizationConformancePackStatuses,
  paginateDescribeOrganizationConformancePacks,
  paginateDescribePendingAggregationRequests,
  paginateDescribeRemediationExceptions,
  paginateDescribeRemediationExecutionStatus,
  paginateDescribeRetentionConfigurations,
  paginateGetAggregateComplianceDetailsByConfigRule,
  paginateGetAggregateConfigRuleComplianceSummary,
  paginateGetAggregateConformancePackComplianceSummary,
  paginateGetAggregateDiscoveredResourceCounts,
  paginateGetComplianceDetailsByConfigRule,
  paginateGetComplianceDetailsByResource,
  paginateGetConformancePackComplianceDetails,
  paginateGetConformancePackComplianceSummary,
  paginateGetDiscoveredResourceCounts,
  paginateGetOrganizationConfigRuleDetailedStatus,
  paginateGetOrganizationConformancePackDetailedStatus,
  paginateGetResourceConfigHistory,
  paginateListAggregateDiscoveredResources,
  paginateListConfigurationRecorders,
  paginateListConformancePackComplianceScores,
  paginateListDiscoveredResources,
  paginateListResourceEvaluations,
  paginateListStoredQueries,
  paginateListTagsForResource,
  paginateSelectAggregateResourceConfig,
  paginateSelectResourceConfig,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConfigServiceClient === "function");
assert(typeof ConfigService === "function");
// commands
assert(typeof AssociateResourceTypesCommand === "function");
assert(typeof BatchGetAggregateResourceConfigCommand === "function");
assert(typeof BatchGetResourceConfigCommand === "function");
assert(typeof DeleteAggregationAuthorizationCommand === "function");
assert(typeof DeleteConfigRuleCommand === "function");
assert(typeof DeleteConfigurationAggregatorCommand === "function");
assert(typeof DeleteConfigurationRecorderCommand === "function");
assert(typeof DeleteConformancePackCommand === "function");
assert(typeof DeleteDeliveryChannelCommand === "function");
assert(typeof DeleteEvaluationResultsCommand === "function");
assert(typeof DeleteOrganizationConfigRuleCommand === "function");
assert(typeof DeleteOrganizationConformancePackCommand === "function");
assert(typeof DeletePendingAggregationRequestCommand === "function");
assert(typeof DeleteRemediationConfigurationCommand === "function");
assert(typeof DeleteRemediationExceptionsCommand === "function");
assert(typeof DeleteResourceConfigCommand === "function");
assert(typeof DeleteRetentionConfigurationCommand === "function");
assert(typeof DeleteServiceLinkedConfigurationRecorderCommand === "function");
assert(typeof DeleteStoredQueryCommand === "function");
assert(typeof DeliverConfigSnapshotCommand === "function");
assert(typeof DescribeAggregateComplianceByConfigRulesCommand === "function");
assert(typeof DescribeAggregateComplianceByConformancePacksCommand === "function");
assert(typeof DescribeAggregationAuthorizationsCommand === "function");
assert(typeof DescribeComplianceByConfigRuleCommand === "function");
assert(typeof DescribeComplianceByResourceCommand === "function");
assert(typeof DescribeConfigRuleEvaluationStatusCommand === "function");
assert(typeof DescribeConfigRulesCommand === "function");
assert(typeof DescribeConfigurationAggregatorsCommand === "function");
assert(typeof DescribeConfigurationAggregatorSourcesStatusCommand === "function");
assert(typeof DescribeConfigurationRecordersCommand === "function");
assert(typeof DescribeConfigurationRecorderStatusCommand === "function");
assert(typeof DescribeConformancePackComplianceCommand === "function");
assert(typeof DescribeConformancePacksCommand === "function");
assert(typeof DescribeConformancePackStatusCommand === "function");
assert(typeof DescribeDeliveryChannelsCommand === "function");
assert(typeof DescribeDeliveryChannelStatusCommand === "function");
assert(typeof DescribeOrganizationConfigRulesCommand === "function");
assert(typeof DescribeOrganizationConfigRuleStatusesCommand === "function");
assert(typeof DescribeOrganizationConformancePacksCommand === "function");
assert(typeof DescribeOrganizationConformancePackStatusesCommand === "function");
assert(typeof DescribePendingAggregationRequestsCommand === "function");
assert(typeof DescribeRemediationConfigurationsCommand === "function");
assert(typeof DescribeRemediationExceptionsCommand === "function");
assert(typeof DescribeRemediationExecutionStatusCommand === "function");
assert(typeof DescribeRetentionConfigurationsCommand === "function");
assert(typeof DisassociateResourceTypesCommand === "function");
assert(typeof GetAggregateComplianceDetailsByConfigRuleCommand === "function");
assert(typeof GetAggregateConfigRuleComplianceSummaryCommand === "function");
assert(typeof GetAggregateConformancePackComplianceSummaryCommand === "function");
assert(typeof GetAggregateDiscoveredResourceCountsCommand === "function");
assert(typeof GetAggregateResourceConfigCommand === "function");
assert(typeof GetComplianceDetailsByConfigRuleCommand === "function");
assert(typeof GetComplianceDetailsByResourceCommand === "function");
assert(typeof GetComplianceSummaryByConfigRuleCommand === "function");
assert(typeof GetComplianceSummaryByResourceTypeCommand === "function");
assert(typeof GetConformancePackComplianceDetailsCommand === "function");
assert(typeof GetConformancePackComplianceSummaryCommand === "function");
assert(typeof GetCustomRulePolicyCommand === "function");
assert(typeof GetDiscoveredResourceCountsCommand === "function");
assert(typeof GetOrganizationConfigRuleDetailedStatusCommand === "function");
assert(typeof GetOrganizationConformancePackDetailedStatusCommand === "function");
assert(typeof GetOrganizationCustomRulePolicyCommand === "function");
assert(typeof GetResourceConfigHistoryCommand === "function");
assert(typeof GetResourceEvaluationSummaryCommand === "function");
assert(typeof GetStoredQueryCommand === "function");
assert(typeof ListAggregateDiscoveredResourcesCommand === "function");
assert(typeof ListConfigurationRecordersCommand === "function");
assert(typeof ListConformancePackComplianceScoresCommand === "function");
assert(typeof ListDiscoveredResourcesCommand === "function");
assert(typeof ListResourceEvaluationsCommand === "function");
assert(typeof ListStoredQueriesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAggregationAuthorizationCommand === "function");
assert(typeof PutConfigRuleCommand === "function");
assert(typeof PutConfigurationAggregatorCommand === "function");
assert(typeof PutConfigurationRecorderCommand === "function");
assert(typeof PutConformancePackCommand === "function");
assert(typeof PutDeliveryChannelCommand === "function");
assert(typeof PutEvaluationsCommand === "function");
assert(typeof PutExternalEvaluationCommand === "function");
assert(typeof PutOrganizationConfigRuleCommand === "function");
assert(typeof PutOrganizationConformancePackCommand === "function");
assert(typeof PutRemediationConfigurationsCommand === "function");
assert(typeof PutRemediationExceptionsCommand === "function");
assert(typeof PutResourceConfigCommand === "function");
assert(typeof PutRetentionConfigurationCommand === "function");
assert(typeof PutServiceLinkedConfigurationRecorderCommand === "function");
assert(typeof PutStoredQueryCommand === "function");
assert(typeof SelectAggregateResourceConfigCommand === "function");
assert(typeof SelectResourceConfigCommand === "function");
assert(typeof StartConfigRulesEvaluationCommand === "function");
assert(typeof StartConfigurationRecorderCommand === "function");
assert(typeof StartRemediationExecutionCommand === "function");
assert(typeof StartResourceEvaluationCommand === "function");
assert(typeof StopConfigurationRecorderCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AggregateConformancePackComplianceSummaryGroupKey === "object");
assert(typeof AggregatedSourceStatusType === "object");
assert(typeof AggregatedSourceType === "object");
assert(typeof AggregatorFilterType === "object");
assert(typeof ChronologicalOrder === "object");
assert(typeof ComplianceType === "object");
assert(typeof ConfigRuleComplianceSummaryGroupKey === "object");
assert(typeof ConfigRuleState === "object");
assert(typeof ConfigurationItemStatus === "object");
assert(typeof ConfigurationRecorderFilterName === "object");
assert(typeof ConformancePackComplianceType === "object");
assert(typeof ConformancePackState === "object");
assert(typeof DeliveryStatus === "object");
assert(typeof EvaluationMode === "object");
assert(typeof EventSource === "object");
assert(typeof MaximumExecutionFrequency === "object");
assert(typeof MemberAccountRuleStatus === "object");
assert(typeof MessageType === "object");
assert(typeof OrganizationConfigRuleTriggerType === "object");
assert(typeof OrganizationConfigRuleTriggerTypeNoSN === "object");
assert(typeof OrganizationResourceDetailedStatus === "object");
assert(typeof OrganizationResourceStatus === "object");
assert(typeof OrganizationRuleStatus === "object");
assert(typeof Owner === "object");
assert(typeof RecorderStatus === "object");
assert(typeof RecordingFrequency === "object");
assert(typeof RecordingScope === "object");
assert(typeof RecordingStrategyType === "object");
assert(typeof RemediationExecutionState === "object");
assert(typeof RemediationExecutionStepState === "object");
assert(typeof RemediationTargetType === "object");
assert(typeof ResourceConfigurationSchemaType === "object");
assert(typeof ResourceCountGroupKey === "object");
assert(typeof ResourceEvaluationStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof ResourceValueType === "object");
assert(typeof SortBy === "object");
assert(typeof SortOrder === "object");
// errors
assert(ConflictException.prototype instanceof ConfigServiceServiceException);
assert(ConformancePackTemplateValidationException.prototype instanceof ConfigServiceServiceException);
assert(IdempotentParameterMismatch.prototype instanceof ConfigServiceServiceException);
assert(InsufficientDeliveryPolicyException.prototype instanceof ConfigServiceServiceException);
assert(InsufficientPermissionsException.prototype instanceof ConfigServiceServiceException);
assert(InvalidConfigurationRecorderNameException.prototype instanceof ConfigServiceServiceException);
assert(InvalidDeliveryChannelNameException.prototype instanceof ConfigServiceServiceException);
assert(InvalidExpressionException.prototype instanceof ConfigServiceServiceException);
assert(InvalidLimitException.prototype instanceof ConfigServiceServiceException);
assert(InvalidNextTokenException.prototype instanceof ConfigServiceServiceException);
assert(InvalidParameterValueException.prototype instanceof ConfigServiceServiceException);
assert(InvalidRecordingGroupException.prototype instanceof ConfigServiceServiceException);
assert(InvalidResultTokenException.prototype instanceof ConfigServiceServiceException);
assert(InvalidRoleException.prototype instanceof ConfigServiceServiceException);
assert(InvalidS3KeyPrefixException.prototype instanceof ConfigServiceServiceException);
assert(InvalidS3KmsKeyArnException.prototype instanceof ConfigServiceServiceException);
assert(InvalidSNSTopicARNException.prototype instanceof ConfigServiceServiceException);
assert(InvalidTimeRangeException.prototype instanceof ConfigServiceServiceException);
assert(LastDeliveryChannelDeleteFailedException.prototype instanceof ConfigServiceServiceException);
assert(LimitExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxActiveResourcesExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfConfigRulesExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfConfigurationRecordersExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfConformancePacksExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfDeliveryChannelsExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfOrganizationConfigRulesExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfOrganizationConformancePacksExceededException.prototype instanceof ConfigServiceServiceException);
assert(MaxNumberOfRetentionConfigurationsExceededException.prototype instanceof ConfigServiceServiceException);
assert(NoAvailableConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(NoAvailableDeliveryChannelException.prototype instanceof ConfigServiceServiceException);
assert(NoAvailableOrganizationException.prototype instanceof ConfigServiceServiceException);
assert(NoRunningConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchBucketException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchConfigRuleException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchConfigRuleInConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchConfigurationAggregatorException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchDeliveryChannelException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchOrganizationConfigRuleException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchOrganizationConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchRemediationConfigurationException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchRemediationExceptionException.prototype instanceof ConfigServiceServiceException);
assert(NoSuchRetentionConfigurationException.prototype instanceof ConfigServiceServiceException);
assert(OrganizationAccessDeniedException.prototype instanceof ConfigServiceServiceException);
assert(OrganizationAllFeaturesNotEnabledException.prototype instanceof ConfigServiceServiceException);
assert(OrganizationConformancePackTemplateValidationException.prototype instanceof ConfigServiceServiceException);
assert(OversizedConfigurationItemException.prototype instanceof ConfigServiceServiceException);
assert(RemediationInProgressException.prototype instanceof ConfigServiceServiceException);
assert(ResourceConcurrentModificationException.prototype instanceof ConfigServiceServiceException);
assert(ResourceInUseException.prototype instanceof ConfigServiceServiceException);
assert(ResourceNotDiscoveredException.prototype instanceof ConfigServiceServiceException);
assert(ResourceNotFoundException.prototype instanceof ConfigServiceServiceException);
assert(TooManyTagsException.prototype instanceof ConfigServiceServiceException);
assert(UnmodifiableEntityException.prototype instanceof ConfigServiceServiceException);
assert(ValidationException.prototype instanceof ConfigServiceServiceException);
assert(ConfigServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAggregateComplianceByConfigRules === "function");
assert(typeof paginateDescribeAggregateComplianceByConformancePacks === "function");
assert(typeof paginateDescribeAggregationAuthorizations === "function");
assert(typeof paginateDescribeComplianceByConfigRule === "function");
assert(typeof paginateDescribeComplianceByResource === "function");
assert(typeof paginateDescribeConfigRuleEvaluationStatus === "function");
assert(typeof paginateDescribeConfigRules === "function");
assert(typeof paginateDescribeConfigurationAggregatorSourcesStatus === "function");
assert(typeof paginateDescribeConfigurationAggregators === "function");
assert(typeof paginateDescribeConformancePackCompliance === "function");
assert(typeof paginateDescribeConformancePackStatus === "function");
assert(typeof paginateDescribeConformancePacks === "function");
assert(typeof paginateDescribeOrganizationConfigRuleStatuses === "function");
assert(typeof paginateDescribeOrganizationConfigRules === "function");
assert(typeof paginateDescribeOrganizationConformancePackStatuses === "function");
assert(typeof paginateDescribeOrganizationConformancePacks === "function");
assert(typeof paginateDescribePendingAggregationRequests === "function");
assert(typeof paginateDescribeRemediationExceptions === "function");
assert(typeof paginateDescribeRemediationExecutionStatus === "function");
assert(typeof paginateDescribeRetentionConfigurations === "function");
assert(typeof paginateGetAggregateComplianceDetailsByConfigRule === "function");
assert(typeof paginateGetAggregateConfigRuleComplianceSummary === "function");
assert(typeof paginateGetAggregateConformancePackComplianceSummary === "function");
assert(typeof paginateGetAggregateDiscoveredResourceCounts === "function");
assert(typeof paginateGetComplianceDetailsByConfigRule === "function");
assert(typeof paginateGetComplianceDetailsByResource === "function");
assert(typeof paginateGetConformancePackComplianceDetails === "function");
assert(typeof paginateGetConformancePackComplianceSummary === "function");
assert(typeof paginateGetDiscoveredResourceCounts === "function");
assert(typeof paginateGetOrganizationConfigRuleDetailedStatus === "function");
assert(typeof paginateGetOrganizationConformancePackDetailedStatus === "function");
assert(typeof paginateGetResourceConfigHistory === "function");
assert(typeof paginateListAggregateDiscoveredResources === "function");
assert(typeof paginateListConfigurationRecorders === "function");
assert(typeof paginateListConformancePackComplianceScores === "function");
assert(typeof paginateListDiscoveredResources === "function");
assert(typeof paginateListResourceEvaluations === "function");
assert(typeof paginateListStoredQueries === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateSelectAggregateResourceConfig === "function");
assert(typeof paginateSelectResourceConfig === "function");
console.log(`ConfigService index test passed.`);
