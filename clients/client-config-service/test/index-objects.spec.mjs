import {
  AccountAggregationSource$,
  AggregateComplianceByConfigRule$,
  AggregateComplianceByConformancePack$,
  AggregateComplianceCount$,
  AggregateConformancePackCompliance$,
  AggregateConformancePackComplianceCount$,
  AggregateConformancePackComplianceFilters$,
  AggregateConformancePackComplianceSummary$,
  AggregateConformancePackComplianceSummaryFilters$,
  AggregateConformancePackComplianceSummaryGroupKey,
  AggregateEvaluationResult$,
  AggregateResourceIdentifier$,
  AggregatedSourceStatus$,
  AggregatedSourceStatusType,
  AggregatedSourceType,
  AggregationAuthorization$,
  AggregatorFilterResourceType$,
  AggregatorFilterServicePrincipal$,
  AggregatorFilterType,
  AggregatorFilters$,
  AssociateResourceTypes$,
  AssociateResourceTypesCommand,
  AssociateResourceTypesRequest$,
  AssociateResourceTypesResponse$,
  BaseConfigurationItem$,
  BatchGetAggregateResourceConfig$,
  BatchGetAggregateResourceConfigCommand,
  BatchGetAggregateResourceConfigRequest$,
  BatchGetAggregateResourceConfigResponse$,
  BatchGetResourceConfig$,
  BatchGetResourceConfigCommand,
  BatchGetResourceConfigRequest$,
  BatchGetResourceConfigResponse$,
  ChronologicalOrder,
  Compliance$,
  ComplianceByConfigRule$,
  ComplianceByResource$,
  ComplianceContributorCount$,
  ComplianceSummary$,
  ComplianceSummaryByResourceType$,
  ComplianceType,
  ConfigExportDeliveryInfo$,
  ConfigRule$,
  ConfigRuleComplianceFilters$,
  ConfigRuleComplianceSummaryFilters$,
  ConfigRuleComplianceSummaryGroupKey,
  ConfigRuleEvaluationStatus$,
  ConfigRuleState,
  ConfigService,
  ConfigServiceClient,
  ConfigServiceServiceException,
  ConfigSnapshotDeliveryProperties$,
  ConfigStreamDeliveryInfo$,
  ConfigurationAggregator$,
  ConfigurationItem$,
  ConfigurationItemStatus,
  ConfigurationRecorder$,
  ConfigurationRecorderFilter$,
  ConfigurationRecorderFilterName,
  ConfigurationRecorderStatus$,
  ConfigurationRecorderSummary$,
  ConflictException,
  ConflictException$,
  ConformancePackComplianceFilters$,
  ConformancePackComplianceScore$,
  ConformancePackComplianceScoresFilters$,
  ConformancePackComplianceSummary$,
  ConformancePackComplianceType,
  ConformancePackDetail$,
  ConformancePackEvaluationFilters$,
  ConformancePackEvaluationResult$,
  ConformancePackInputParameter$,
  ConformancePackRuleCompliance$,
  ConformancePackState,
  ConformancePackStatusDetail$,
  ConformancePackTemplateValidationException,
  ConformancePackTemplateValidationException$,
  CustomPolicyDetails$,
  DeleteAggregationAuthorization$,
  DeleteAggregationAuthorizationCommand,
  DeleteAggregationAuthorizationRequest$,
  DeleteConfigRule$,
  DeleteConfigRuleCommand,
  DeleteConfigRuleRequest$,
  DeleteConfigurationAggregator$,
  DeleteConfigurationAggregatorCommand,
  DeleteConfigurationAggregatorRequest$,
  DeleteConfigurationRecorder$,
  DeleteConfigurationRecorderCommand,
  DeleteConfigurationRecorderRequest$,
  DeleteConformancePack$,
  DeleteConformancePackCommand,
  DeleteConformancePackRequest$,
  DeleteDeliveryChannel$,
  DeleteDeliveryChannelCommand,
  DeleteDeliveryChannelRequest$,
  DeleteEvaluationResults$,
  DeleteEvaluationResultsCommand,
  DeleteEvaluationResultsRequest$,
  DeleteEvaluationResultsResponse$,
  DeleteOrganizationConfigRule$,
  DeleteOrganizationConfigRuleCommand,
  DeleteOrganizationConfigRuleRequest$,
  DeleteOrganizationConformancePack$,
  DeleteOrganizationConformancePackCommand,
  DeleteOrganizationConformancePackRequest$,
  DeletePendingAggregationRequest$,
  DeletePendingAggregationRequestCommand,
  DeletePendingAggregationRequestRequest$,
  DeleteRemediationConfiguration$,
  DeleteRemediationConfigurationCommand,
  DeleteRemediationConfigurationRequest$,
  DeleteRemediationConfigurationResponse$,
  DeleteRemediationExceptions$,
  DeleteRemediationExceptionsCommand,
  DeleteRemediationExceptionsRequest$,
  DeleteRemediationExceptionsResponse$,
  DeleteResourceConfig$,
  DeleteResourceConfigCommand,
  DeleteResourceConfigRequest$,
  DeleteRetentionConfiguration$,
  DeleteRetentionConfigurationCommand,
  DeleteRetentionConfigurationRequest$,
  DeleteServiceLinkedConfigurationRecorder$,
  DeleteServiceLinkedConfigurationRecorderCommand,
  DeleteServiceLinkedConfigurationRecorderRequest$,
  DeleteServiceLinkedConfigurationRecorderResponse$,
  DeleteStoredQuery$,
  DeleteStoredQueryCommand,
  DeleteStoredQueryRequest$,
  DeleteStoredQueryResponse$,
  DeliverConfigSnapshot$,
  DeliverConfigSnapshotCommand,
  DeliverConfigSnapshotRequest$,
  DeliverConfigSnapshotResponse$,
  DeliveryChannel$,
  DeliveryChannelStatus$,
  DeliveryStatus,
  DescribeAggregateComplianceByConfigRules$,
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConfigRulesRequest$,
  DescribeAggregateComplianceByConfigRulesResponse$,
  DescribeAggregateComplianceByConformancePacks$,
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregateComplianceByConformancePacksRequest$,
  DescribeAggregateComplianceByConformancePacksResponse$,
  DescribeAggregationAuthorizations$,
  DescribeAggregationAuthorizationsCommand,
  DescribeAggregationAuthorizationsRequest$,
  DescribeAggregationAuthorizationsResponse$,
  DescribeComplianceByConfigRule$,
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByConfigRuleRequest$,
  DescribeComplianceByConfigRuleResponse$,
  DescribeComplianceByResource$,
  DescribeComplianceByResourceCommand,
  DescribeComplianceByResourceRequest$,
  DescribeComplianceByResourceResponse$,
  DescribeConfigRuleEvaluationStatus$,
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRuleEvaluationStatusRequest$,
  DescribeConfigRuleEvaluationStatusResponse$,
  DescribeConfigRules$,
  DescribeConfigRulesCommand,
  DescribeConfigRulesFilters$,
  DescribeConfigRulesRequest$,
  DescribeConfigRulesResponse$,
  DescribeConfigurationAggregatorSourcesStatus$,
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorSourcesStatusRequest$,
  DescribeConfigurationAggregatorSourcesStatusResponse$,
  DescribeConfigurationAggregators$,
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorsRequest$,
  DescribeConfigurationAggregatorsResponse$,
  DescribeConfigurationRecorderStatus$,
  DescribeConfigurationRecorderStatusCommand,
  DescribeConfigurationRecorderStatusRequest$,
  DescribeConfigurationRecorderStatusResponse$,
  DescribeConfigurationRecorders$,
  DescribeConfigurationRecordersCommand,
  DescribeConfigurationRecordersRequest$,
  DescribeConfigurationRecordersResponse$,
  DescribeConformancePackCompliance$,
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceRequest$,
  DescribeConformancePackComplianceResponse$,
  DescribeConformancePackStatus$,
  DescribeConformancePackStatusCommand,
  DescribeConformancePackStatusRequest$,
  DescribeConformancePackStatusResponse$,
  DescribeConformancePacks$,
  DescribeConformancePacksCommand,
  DescribeConformancePacksRequest$,
  DescribeConformancePacksResponse$,
  DescribeDeliveryChannelStatus$,
  DescribeDeliveryChannelStatusCommand,
  DescribeDeliveryChannelStatusRequest$,
  DescribeDeliveryChannelStatusResponse$,
  DescribeDeliveryChannels$,
  DescribeDeliveryChannelsCommand,
  DescribeDeliveryChannelsRequest$,
  DescribeDeliveryChannelsResponse$,
  DescribeOrganizationConfigRuleStatuses$,
  DescribeOrganizationConfigRuleStatusesCommand,
  DescribeOrganizationConfigRuleStatusesRequest$,
  DescribeOrganizationConfigRuleStatusesResponse$,
  DescribeOrganizationConfigRules$,
  DescribeOrganizationConfigRulesCommand,
  DescribeOrganizationConfigRulesRequest$,
  DescribeOrganizationConfigRulesResponse$,
  DescribeOrganizationConformancePackStatuses$,
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesRequest$,
  DescribeOrganizationConformancePackStatusesResponse$,
  DescribeOrganizationConformancePacks$,
  DescribeOrganizationConformancePacksCommand,
  DescribeOrganizationConformancePacksRequest$,
  DescribeOrganizationConformancePacksResponse$,
  DescribePendingAggregationRequests$,
  DescribePendingAggregationRequestsCommand,
  DescribePendingAggregationRequestsRequest$,
  DescribePendingAggregationRequestsResponse$,
  DescribeRemediationConfigurations$,
  DescribeRemediationConfigurationsCommand,
  DescribeRemediationConfigurationsRequest$,
  DescribeRemediationConfigurationsResponse$,
  DescribeRemediationExceptions$,
  DescribeRemediationExceptionsCommand,
  DescribeRemediationExceptionsRequest$,
  DescribeRemediationExceptionsResponse$,
  DescribeRemediationExecutionStatus$,
  DescribeRemediationExecutionStatusCommand,
  DescribeRemediationExecutionStatusRequest$,
  DescribeRemediationExecutionStatusResponse$,
  DescribeRetentionConfigurations$,
  DescribeRetentionConfigurationsCommand,
  DescribeRetentionConfigurationsRequest$,
  DescribeRetentionConfigurationsResponse$,
  DisassociateResourceTypes$,
  DisassociateResourceTypesCommand,
  DisassociateResourceTypesRequest$,
  DisassociateResourceTypesResponse$,
  Evaluation$,
  EvaluationContext$,
  EvaluationMode,
  EvaluationModeConfiguration$,
  EvaluationResult$,
  EvaluationResultIdentifier$,
  EvaluationResultQualifier$,
  EvaluationStatus$,
  EventSource,
  ExclusionByResourceTypes$,
  ExecutionControls$,
  ExternalEvaluation$,
  FailedDeleteRemediationExceptionsBatch$,
  FailedRemediationBatch$,
  FailedRemediationExceptionBatch$,
  FieldInfo$,
  GetAggregateComplianceDetailsByConfigRule$,
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateComplianceDetailsByConfigRuleRequest$,
  GetAggregateComplianceDetailsByConfigRuleResponse$,
  GetAggregateConfigRuleComplianceSummary$,
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConfigRuleComplianceSummaryRequest$,
  GetAggregateConfigRuleComplianceSummaryResponse$,
  GetAggregateConformancePackComplianceSummary$,
  GetAggregateConformancePackComplianceSummaryCommand,
  GetAggregateConformancePackComplianceSummaryRequest$,
  GetAggregateConformancePackComplianceSummaryResponse$,
  GetAggregateDiscoveredResourceCounts$,
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateDiscoveredResourceCountsRequest$,
  GetAggregateDiscoveredResourceCountsResponse$,
  GetAggregateResourceConfig$,
  GetAggregateResourceConfigCommand,
  GetAggregateResourceConfigRequest$,
  GetAggregateResourceConfigResponse$,
  GetComplianceDetailsByConfigRule$,
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByConfigRuleRequest$,
  GetComplianceDetailsByConfigRuleResponse$,
  GetComplianceDetailsByResource$,
  GetComplianceDetailsByResourceCommand,
  GetComplianceDetailsByResourceRequest$,
  GetComplianceDetailsByResourceResponse$,
  GetComplianceSummaryByConfigRule$,
  GetComplianceSummaryByConfigRuleCommand,
  GetComplianceSummaryByConfigRuleResponse$,
  GetComplianceSummaryByResourceType$,
  GetComplianceSummaryByResourceTypeCommand,
  GetComplianceSummaryByResourceTypeRequest$,
  GetComplianceSummaryByResourceTypeResponse$,
  GetConformancePackComplianceDetails$,
  GetConformancePackComplianceDetailsCommand,
  GetConformancePackComplianceDetailsRequest$,
  GetConformancePackComplianceDetailsResponse$,
  GetConformancePackComplianceSummary$,
  GetConformancePackComplianceSummaryCommand,
  GetConformancePackComplianceSummaryRequest$,
  GetConformancePackComplianceSummaryResponse$,
  GetCustomRulePolicy$,
  GetCustomRulePolicyCommand,
  GetCustomRulePolicyRequest$,
  GetCustomRulePolicyResponse$,
  GetDiscoveredResourceCounts$,
  GetDiscoveredResourceCountsCommand,
  GetDiscoveredResourceCountsRequest$,
  GetDiscoveredResourceCountsResponse$,
  GetOrganizationConfigRuleDetailedStatus$,
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConfigRuleDetailedStatusRequest$,
  GetOrganizationConfigRuleDetailedStatusResponse$,
  GetOrganizationConformancePackDetailedStatus$,
  GetOrganizationConformancePackDetailedStatusCommand,
  GetOrganizationConformancePackDetailedStatusRequest$,
  GetOrganizationConformancePackDetailedStatusResponse$,
  GetOrganizationCustomRulePolicy$,
  GetOrganizationCustomRulePolicyCommand,
  GetOrganizationCustomRulePolicyRequest$,
  GetOrganizationCustomRulePolicyResponse$,
  GetResourceConfigHistory$,
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryRequest$,
  GetResourceConfigHistoryResponse$,
  GetResourceEvaluationSummary$,
  GetResourceEvaluationSummaryCommand,
  GetResourceEvaluationSummaryRequest$,
  GetResourceEvaluationSummaryResponse$,
  GetStoredQuery$,
  GetStoredQueryCommand,
  GetStoredQueryRequest$,
  GetStoredQueryResponse$,
  GroupedResourceCount$,
  IdempotentParameterMismatch,
  IdempotentParameterMismatch$,
  InsufficientDeliveryPolicyException,
  InsufficientDeliveryPolicyException$,
  InsufficientPermissionsException,
  InsufficientPermissionsException$,
  InvalidConfigurationRecorderNameException,
  InvalidConfigurationRecorderNameException$,
  InvalidDeliveryChannelNameException,
  InvalidDeliveryChannelNameException$,
  InvalidExpressionException,
  InvalidExpressionException$,
  InvalidLimitException,
  InvalidLimitException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidRecordingGroupException,
  InvalidRecordingGroupException$,
  InvalidResultTokenException,
  InvalidResultTokenException$,
  InvalidRoleException,
  InvalidRoleException$,
  InvalidS3KeyPrefixException,
  InvalidS3KeyPrefixException$,
  InvalidS3KmsKeyArnException,
  InvalidS3KmsKeyArnException$,
  InvalidSNSTopicARNException,
  InvalidSNSTopicARNException$,
  InvalidTimeRangeException,
  InvalidTimeRangeException$,
  LastDeliveryChannelDeleteFailedException,
  LastDeliveryChannelDeleteFailedException$,
  LimitExceededException,
  LimitExceededException$,
  ListAggregateDiscoveredResources$,
  ListAggregateDiscoveredResourcesCommand,
  ListAggregateDiscoveredResourcesRequest$,
  ListAggregateDiscoveredResourcesResponse$,
  ListConfigurationRecorders$,
  ListConfigurationRecordersCommand,
  ListConfigurationRecordersRequest$,
  ListConfigurationRecordersResponse$,
  ListConformancePackComplianceScores$,
  ListConformancePackComplianceScoresCommand,
  ListConformancePackComplianceScoresRequest$,
  ListConformancePackComplianceScoresResponse$,
  ListDiscoveredResources$,
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesRequest$,
  ListDiscoveredResourcesResponse$,
  ListResourceEvaluations$,
  ListResourceEvaluationsCommand,
  ListResourceEvaluationsRequest$,
  ListResourceEvaluationsResponse$,
  ListStoredQueries$,
  ListStoredQueriesCommand,
  ListStoredQueriesRequest$,
  ListStoredQueriesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MaxActiveResourcesExceededException,
  MaxActiveResourcesExceededException$,
  MaxNumberOfConfigRulesExceededException,
  MaxNumberOfConfigRulesExceededException$,
  MaxNumberOfConfigurationRecordersExceededException,
  MaxNumberOfConfigurationRecordersExceededException$,
  MaxNumberOfConformancePacksExceededException,
  MaxNumberOfConformancePacksExceededException$,
  MaxNumberOfDeliveryChannelsExceededException,
  MaxNumberOfDeliveryChannelsExceededException$,
  MaxNumberOfOrganizationConfigRulesExceededException,
  MaxNumberOfOrganizationConfigRulesExceededException$,
  MaxNumberOfOrganizationConformancePacksExceededException,
  MaxNumberOfOrganizationConformancePacksExceededException$,
  MaxNumberOfRetentionConfigurationsExceededException,
  MaxNumberOfRetentionConfigurationsExceededException$,
  MaximumExecutionFrequency,
  MemberAccountRuleStatus,
  MemberAccountStatus$,
  MessageType,
  NoAvailableConfigurationRecorderException,
  NoAvailableConfigurationRecorderException$,
  NoAvailableDeliveryChannelException,
  NoAvailableDeliveryChannelException$,
  NoAvailableOrganizationException,
  NoAvailableOrganizationException$,
  NoRunningConfigurationRecorderException,
  NoRunningConfigurationRecorderException$,
  NoSuchBucketException,
  NoSuchBucketException$,
  NoSuchConfigRuleException,
  NoSuchConfigRuleException$,
  NoSuchConfigRuleInConformancePackException,
  NoSuchConfigRuleInConformancePackException$,
  NoSuchConfigurationAggregatorException,
  NoSuchConfigurationAggregatorException$,
  NoSuchConfigurationRecorderException,
  NoSuchConfigurationRecorderException$,
  NoSuchConformancePackException,
  NoSuchConformancePackException$,
  NoSuchDeliveryChannelException,
  NoSuchDeliveryChannelException$,
  NoSuchOrganizationConfigRuleException,
  NoSuchOrganizationConfigRuleException$,
  NoSuchOrganizationConformancePackException,
  NoSuchOrganizationConformancePackException$,
  NoSuchRemediationConfigurationException,
  NoSuchRemediationConfigurationException$,
  NoSuchRemediationExceptionException,
  NoSuchRemediationExceptionException$,
  NoSuchRetentionConfigurationException,
  NoSuchRetentionConfigurationException$,
  OrganizationAccessDeniedException,
  OrganizationAccessDeniedException$,
  OrganizationAggregationSource$,
  OrganizationAllFeaturesNotEnabledException,
  OrganizationAllFeaturesNotEnabledException$,
  OrganizationConfigRule$,
  OrganizationConfigRuleStatus$,
  OrganizationConfigRuleTriggerType,
  OrganizationConfigRuleTriggerTypeNoSN,
  OrganizationConformancePack$,
  OrganizationConformancePackDetailedStatus$,
  OrganizationConformancePackStatus$,
  OrganizationConformancePackTemplateValidationException,
  OrganizationConformancePackTemplateValidationException$,
  OrganizationCustomPolicyRuleMetadata$,
  OrganizationCustomPolicyRuleMetadataNoPolicy$,
  OrganizationCustomRuleMetadata$,
  OrganizationManagedRuleMetadata$,
  OrganizationResourceDetailedStatus,
  OrganizationResourceDetailedStatusFilters$,
  OrganizationResourceStatus,
  OrganizationRuleStatus,
  OversizedConfigurationItemException,
  OversizedConfigurationItemException$,
  Owner,
  PendingAggregationRequest$,
  PutAggregationAuthorization$,
  PutAggregationAuthorizationCommand,
  PutAggregationAuthorizationRequest$,
  PutAggregationAuthorizationResponse$,
  PutConfigRule$,
  PutConfigRuleCommand,
  PutConfigRuleRequest$,
  PutConfigurationAggregator$,
  PutConfigurationAggregatorCommand,
  PutConfigurationAggregatorRequest$,
  PutConfigurationAggregatorResponse$,
  PutConfigurationRecorder$,
  PutConfigurationRecorderCommand,
  PutConfigurationRecorderRequest$,
  PutConformancePack$,
  PutConformancePackCommand,
  PutConformancePackRequest$,
  PutConformancePackResponse$,
  PutDeliveryChannel$,
  PutDeliveryChannelCommand,
  PutDeliveryChannelRequest$,
  PutEvaluations$,
  PutEvaluationsCommand,
  PutEvaluationsRequest$,
  PutEvaluationsResponse$,
  PutExternalEvaluation$,
  PutExternalEvaluationCommand,
  PutExternalEvaluationRequest$,
  PutExternalEvaluationResponse$,
  PutOrganizationConfigRule$,
  PutOrganizationConfigRuleCommand,
  PutOrganizationConfigRuleRequest$,
  PutOrganizationConfigRuleResponse$,
  PutOrganizationConformancePack$,
  PutOrganizationConformancePackCommand,
  PutOrganizationConformancePackRequest$,
  PutOrganizationConformancePackResponse$,
  PutRemediationConfigurations$,
  PutRemediationConfigurationsCommand,
  PutRemediationConfigurationsRequest$,
  PutRemediationConfigurationsResponse$,
  PutRemediationExceptions$,
  PutRemediationExceptionsCommand,
  PutRemediationExceptionsRequest$,
  PutRemediationExceptionsResponse$,
  PutResourceConfig$,
  PutResourceConfigCommand,
  PutResourceConfigRequest$,
  PutRetentionConfiguration$,
  PutRetentionConfigurationCommand,
  PutRetentionConfigurationRequest$,
  PutRetentionConfigurationResponse$,
  PutServiceLinkedConfigurationRecorder$,
  PutServiceLinkedConfigurationRecorderCommand,
  PutServiceLinkedConfigurationRecorderRequest$,
  PutServiceLinkedConfigurationRecorderResponse$,
  PutStoredQuery$,
  PutStoredQueryCommand,
  PutStoredQueryRequest$,
  PutStoredQueryResponse$,
  QueryInfo$,
  RecorderStatus,
  RecordingFrequency,
  RecordingGroup$,
  RecordingMode$,
  RecordingModeOverride$,
  RecordingScope,
  RecordingStrategy$,
  RecordingStrategyType,
  Relationship$,
  RemediationConfiguration$,
  RemediationException$,
  RemediationExceptionResourceKey$,
  RemediationExecutionState,
  RemediationExecutionStatus$,
  RemediationExecutionStep$,
  RemediationExecutionStepState,
  RemediationInProgressException,
  RemediationInProgressException$,
  RemediationParameterValue$,
  RemediationTargetType,
  ResourceConcurrentModificationException,
  ResourceConcurrentModificationException$,
  ResourceConfigurationSchemaType,
  ResourceCount$,
  ResourceCountFilters$,
  ResourceCountGroupKey,
  ResourceDetails$,
  ResourceEvaluation$,
  ResourceEvaluationFilters$,
  ResourceEvaluationStatus,
  ResourceFilters$,
  ResourceIdentifier$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceKey$,
  ResourceNotDiscoveredException,
  ResourceNotDiscoveredException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ResourceValue$,
  ResourceValueType,
  RetentionConfiguration$,
  Scope$,
  SelectAggregateResourceConfig$,
  SelectAggregateResourceConfigCommand,
  SelectAggregateResourceConfigRequest$,
  SelectAggregateResourceConfigResponse$,
  SelectResourceConfig$,
  SelectResourceConfigCommand,
  SelectResourceConfigRequest$,
  SelectResourceConfigResponse$,
  SortBy,
  SortOrder,
  Source$,
  SourceDetail$,
  SsmControls$,
  StartConfigRulesEvaluation$,
  StartConfigRulesEvaluationCommand,
  StartConfigRulesEvaluationRequest$,
  StartConfigRulesEvaluationResponse$,
  StartConfigurationRecorder$,
  StartConfigurationRecorderCommand,
  StartConfigurationRecorderRequest$,
  StartRemediationExecution$,
  StartRemediationExecutionCommand,
  StartRemediationExecutionRequest$,
  StartRemediationExecutionResponse$,
  StartResourceEvaluation$,
  StartResourceEvaluationCommand,
  StartResourceEvaluationRequest$,
  StartResourceEvaluationResponse$,
  StaticValue$,
  StatusDetailFilters$,
  StopConfigurationRecorder$,
  StopConfigurationRecorderCommand,
  StopConfigurationRecorderRequest$,
  StoredQuery$,
  StoredQueryMetadata$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TemplateSSMDocumentDetails$,
  TimeWindow$,
  TooManyTagsException,
  TooManyTagsException$,
  UnmodifiableEntityException,
  UnmodifiableEntityException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  ValidationException,
  ValidationException$,
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
assert(typeof AssociateResourceTypes$ === "object");
assert(typeof BatchGetAggregateResourceConfigCommand === "function");
assert(typeof BatchGetAggregateResourceConfig$ === "object");
assert(typeof BatchGetResourceConfigCommand === "function");
assert(typeof BatchGetResourceConfig$ === "object");
assert(typeof DeleteAggregationAuthorizationCommand === "function");
assert(typeof DeleteAggregationAuthorization$ === "object");
assert(typeof DeleteConfigRuleCommand === "function");
assert(typeof DeleteConfigRule$ === "object");
assert(typeof DeleteConfigurationAggregatorCommand === "function");
assert(typeof DeleteConfigurationAggregator$ === "object");
assert(typeof DeleteConfigurationRecorderCommand === "function");
assert(typeof DeleteConfigurationRecorder$ === "object");
assert(typeof DeleteConformancePackCommand === "function");
assert(typeof DeleteConformancePack$ === "object");
assert(typeof DeleteDeliveryChannelCommand === "function");
assert(typeof DeleteDeliveryChannel$ === "object");
assert(typeof DeleteEvaluationResultsCommand === "function");
assert(typeof DeleteEvaluationResults$ === "object");
assert(typeof DeleteOrganizationConfigRuleCommand === "function");
assert(typeof DeleteOrganizationConfigRule$ === "object");
assert(typeof DeleteOrganizationConformancePackCommand === "function");
assert(typeof DeleteOrganizationConformancePack$ === "object");
assert(typeof DeletePendingAggregationRequestCommand === "function");
assert(typeof DeletePendingAggregationRequest$ === "object");
assert(typeof DeleteRemediationConfigurationCommand === "function");
assert(typeof DeleteRemediationConfiguration$ === "object");
assert(typeof DeleteRemediationExceptionsCommand === "function");
assert(typeof DeleteRemediationExceptions$ === "object");
assert(typeof DeleteResourceConfigCommand === "function");
assert(typeof DeleteResourceConfig$ === "object");
assert(typeof DeleteRetentionConfigurationCommand === "function");
assert(typeof DeleteRetentionConfiguration$ === "object");
assert(typeof DeleteServiceLinkedConfigurationRecorderCommand === "function");
assert(typeof DeleteServiceLinkedConfigurationRecorder$ === "object");
assert(typeof DeleteStoredQueryCommand === "function");
assert(typeof DeleteStoredQuery$ === "object");
assert(typeof DeliverConfigSnapshotCommand === "function");
assert(typeof DeliverConfigSnapshot$ === "object");
assert(typeof DescribeAggregateComplianceByConfigRulesCommand === "function");
assert(typeof DescribeAggregateComplianceByConfigRules$ === "object");
assert(typeof DescribeAggregateComplianceByConformancePacksCommand === "function");
assert(typeof DescribeAggregateComplianceByConformancePacks$ === "object");
assert(typeof DescribeAggregationAuthorizationsCommand === "function");
assert(typeof DescribeAggregationAuthorizations$ === "object");
assert(typeof DescribeComplianceByConfigRuleCommand === "function");
assert(typeof DescribeComplianceByConfigRule$ === "object");
assert(typeof DescribeComplianceByResourceCommand === "function");
assert(typeof DescribeComplianceByResource$ === "object");
assert(typeof DescribeConfigRuleEvaluationStatusCommand === "function");
assert(typeof DescribeConfigRuleEvaluationStatus$ === "object");
assert(typeof DescribeConfigRulesCommand === "function");
assert(typeof DescribeConfigRules$ === "object");
assert(typeof DescribeConfigurationAggregatorsCommand === "function");
assert(typeof DescribeConfigurationAggregators$ === "object");
assert(typeof DescribeConfigurationAggregatorSourcesStatusCommand === "function");
assert(typeof DescribeConfigurationAggregatorSourcesStatus$ === "object");
assert(typeof DescribeConfigurationRecordersCommand === "function");
assert(typeof DescribeConfigurationRecorders$ === "object");
assert(typeof DescribeConfigurationRecorderStatusCommand === "function");
assert(typeof DescribeConfigurationRecorderStatus$ === "object");
assert(typeof DescribeConformancePackComplianceCommand === "function");
assert(typeof DescribeConformancePackCompliance$ === "object");
assert(typeof DescribeConformancePacksCommand === "function");
assert(typeof DescribeConformancePacks$ === "object");
assert(typeof DescribeConformancePackStatusCommand === "function");
assert(typeof DescribeConformancePackStatus$ === "object");
assert(typeof DescribeDeliveryChannelsCommand === "function");
assert(typeof DescribeDeliveryChannels$ === "object");
assert(typeof DescribeDeliveryChannelStatusCommand === "function");
assert(typeof DescribeDeliveryChannelStatus$ === "object");
assert(typeof DescribeOrganizationConfigRulesCommand === "function");
assert(typeof DescribeOrganizationConfigRules$ === "object");
assert(typeof DescribeOrganizationConfigRuleStatusesCommand === "function");
assert(typeof DescribeOrganizationConfigRuleStatuses$ === "object");
assert(typeof DescribeOrganizationConformancePacksCommand === "function");
assert(typeof DescribeOrganizationConformancePacks$ === "object");
assert(typeof DescribeOrganizationConformancePackStatusesCommand === "function");
assert(typeof DescribeOrganizationConformancePackStatuses$ === "object");
assert(typeof DescribePendingAggregationRequestsCommand === "function");
assert(typeof DescribePendingAggregationRequests$ === "object");
assert(typeof DescribeRemediationConfigurationsCommand === "function");
assert(typeof DescribeRemediationConfigurations$ === "object");
assert(typeof DescribeRemediationExceptionsCommand === "function");
assert(typeof DescribeRemediationExceptions$ === "object");
assert(typeof DescribeRemediationExecutionStatusCommand === "function");
assert(typeof DescribeRemediationExecutionStatus$ === "object");
assert(typeof DescribeRetentionConfigurationsCommand === "function");
assert(typeof DescribeRetentionConfigurations$ === "object");
assert(typeof DisassociateResourceTypesCommand === "function");
assert(typeof DisassociateResourceTypes$ === "object");
assert(typeof GetAggregateComplianceDetailsByConfigRuleCommand === "function");
assert(typeof GetAggregateComplianceDetailsByConfigRule$ === "object");
assert(typeof GetAggregateConfigRuleComplianceSummaryCommand === "function");
assert(typeof GetAggregateConfigRuleComplianceSummary$ === "object");
assert(typeof GetAggregateConformancePackComplianceSummaryCommand === "function");
assert(typeof GetAggregateConformancePackComplianceSummary$ === "object");
assert(typeof GetAggregateDiscoveredResourceCountsCommand === "function");
assert(typeof GetAggregateDiscoveredResourceCounts$ === "object");
assert(typeof GetAggregateResourceConfigCommand === "function");
assert(typeof GetAggregateResourceConfig$ === "object");
assert(typeof GetComplianceDetailsByConfigRuleCommand === "function");
assert(typeof GetComplianceDetailsByConfigRule$ === "object");
assert(typeof GetComplianceDetailsByResourceCommand === "function");
assert(typeof GetComplianceDetailsByResource$ === "object");
assert(typeof GetComplianceSummaryByConfigRuleCommand === "function");
assert(typeof GetComplianceSummaryByConfigRule$ === "object");
assert(typeof GetComplianceSummaryByResourceTypeCommand === "function");
assert(typeof GetComplianceSummaryByResourceType$ === "object");
assert(typeof GetConformancePackComplianceDetailsCommand === "function");
assert(typeof GetConformancePackComplianceDetails$ === "object");
assert(typeof GetConformancePackComplianceSummaryCommand === "function");
assert(typeof GetConformancePackComplianceSummary$ === "object");
assert(typeof GetCustomRulePolicyCommand === "function");
assert(typeof GetCustomRulePolicy$ === "object");
assert(typeof GetDiscoveredResourceCountsCommand === "function");
assert(typeof GetDiscoveredResourceCounts$ === "object");
assert(typeof GetOrganizationConfigRuleDetailedStatusCommand === "function");
assert(typeof GetOrganizationConfigRuleDetailedStatus$ === "object");
assert(typeof GetOrganizationConformancePackDetailedStatusCommand === "function");
assert(typeof GetOrganizationConformancePackDetailedStatus$ === "object");
assert(typeof GetOrganizationCustomRulePolicyCommand === "function");
assert(typeof GetOrganizationCustomRulePolicy$ === "object");
assert(typeof GetResourceConfigHistoryCommand === "function");
assert(typeof GetResourceConfigHistory$ === "object");
assert(typeof GetResourceEvaluationSummaryCommand === "function");
assert(typeof GetResourceEvaluationSummary$ === "object");
assert(typeof GetStoredQueryCommand === "function");
assert(typeof GetStoredQuery$ === "object");
assert(typeof ListAggregateDiscoveredResourcesCommand === "function");
assert(typeof ListAggregateDiscoveredResources$ === "object");
assert(typeof ListConfigurationRecordersCommand === "function");
assert(typeof ListConfigurationRecorders$ === "object");
assert(typeof ListConformancePackComplianceScoresCommand === "function");
assert(typeof ListConformancePackComplianceScores$ === "object");
assert(typeof ListDiscoveredResourcesCommand === "function");
assert(typeof ListDiscoveredResources$ === "object");
assert(typeof ListResourceEvaluationsCommand === "function");
assert(typeof ListResourceEvaluations$ === "object");
assert(typeof ListStoredQueriesCommand === "function");
assert(typeof ListStoredQueries$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAggregationAuthorizationCommand === "function");
assert(typeof PutAggregationAuthorization$ === "object");
assert(typeof PutConfigRuleCommand === "function");
assert(typeof PutConfigRule$ === "object");
assert(typeof PutConfigurationAggregatorCommand === "function");
assert(typeof PutConfigurationAggregator$ === "object");
assert(typeof PutConfigurationRecorderCommand === "function");
assert(typeof PutConfigurationRecorder$ === "object");
assert(typeof PutConformancePackCommand === "function");
assert(typeof PutConformancePack$ === "object");
assert(typeof PutDeliveryChannelCommand === "function");
assert(typeof PutDeliveryChannel$ === "object");
assert(typeof PutEvaluationsCommand === "function");
assert(typeof PutEvaluations$ === "object");
assert(typeof PutExternalEvaluationCommand === "function");
assert(typeof PutExternalEvaluation$ === "object");
assert(typeof PutOrganizationConfigRuleCommand === "function");
assert(typeof PutOrganizationConfigRule$ === "object");
assert(typeof PutOrganizationConformancePackCommand === "function");
assert(typeof PutOrganizationConformancePack$ === "object");
assert(typeof PutRemediationConfigurationsCommand === "function");
assert(typeof PutRemediationConfigurations$ === "object");
assert(typeof PutRemediationExceptionsCommand === "function");
assert(typeof PutRemediationExceptions$ === "object");
assert(typeof PutResourceConfigCommand === "function");
assert(typeof PutResourceConfig$ === "object");
assert(typeof PutRetentionConfigurationCommand === "function");
assert(typeof PutRetentionConfiguration$ === "object");
assert(typeof PutServiceLinkedConfigurationRecorderCommand === "function");
assert(typeof PutServiceLinkedConfigurationRecorder$ === "object");
assert(typeof PutStoredQueryCommand === "function");
assert(typeof PutStoredQuery$ === "object");
assert(typeof SelectAggregateResourceConfigCommand === "function");
assert(typeof SelectAggregateResourceConfig$ === "object");
assert(typeof SelectResourceConfigCommand === "function");
assert(typeof SelectResourceConfig$ === "object");
assert(typeof StartConfigRulesEvaluationCommand === "function");
assert(typeof StartConfigRulesEvaluation$ === "object");
assert(typeof StartConfigurationRecorderCommand === "function");
assert(typeof StartConfigurationRecorder$ === "object");
assert(typeof StartRemediationExecutionCommand === "function");
assert(typeof StartRemediationExecution$ === "object");
assert(typeof StartResourceEvaluationCommand === "function");
assert(typeof StartResourceEvaluation$ === "object");
assert(typeof StopConfigurationRecorderCommand === "function");
assert(typeof StopConfigurationRecorder$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AccountAggregationSource$ === "object");
assert(typeof AggregateComplianceByConfigRule$ === "object");
assert(typeof AggregateComplianceByConformancePack$ === "object");
assert(typeof AggregateComplianceCount$ === "object");
assert(typeof AggregateConformancePackCompliance$ === "object");
assert(typeof AggregateConformancePackComplianceCount$ === "object");
assert(typeof AggregateConformancePackComplianceFilters$ === "object");
assert(typeof AggregateConformancePackComplianceSummary$ === "object");
assert(typeof AggregateConformancePackComplianceSummaryFilters$ === "object");
assert(typeof AggregatedSourceStatus$ === "object");
assert(typeof AggregateEvaluationResult$ === "object");
assert(typeof AggregateResourceIdentifier$ === "object");
assert(typeof AggregationAuthorization$ === "object");
assert(typeof AggregatorFilterResourceType$ === "object");
assert(typeof AggregatorFilters$ === "object");
assert(typeof AggregatorFilterServicePrincipal$ === "object");
assert(typeof AssociateResourceTypesRequest$ === "object");
assert(typeof AssociateResourceTypesResponse$ === "object");
assert(typeof BaseConfigurationItem$ === "object");
assert(typeof BatchGetAggregateResourceConfigRequest$ === "object");
assert(typeof BatchGetAggregateResourceConfigResponse$ === "object");
assert(typeof BatchGetResourceConfigRequest$ === "object");
assert(typeof BatchGetResourceConfigResponse$ === "object");
assert(typeof Compliance$ === "object");
assert(typeof ComplianceByConfigRule$ === "object");
assert(typeof ComplianceByResource$ === "object");
assert(typeof ComplianceContributorCount$ === "object");
assert(typeof ComplianceSummary$ === "object");
assert(typeof ComplianceSummaryByResourceType$ === "object");
assert(typeof ConfigExportDeliveryInfo$ === "object");
assert(typeof ConfigRule$ === "object");
assert(typeof ConfigRuleComplianceFilters$ === "object");
assert(typeof ConfigRuleComplianceSummaryFilters$ === "object");
assert(typeof ConfigRuleEvaluationStatus$ === "object");
assert(typeof ConfigSnapshotDeliveryProperties$ === "object");
assert(typeof ConfigStreamDeliveryInfo$ === "object");
assert(typeof ConfigurationAggregator$ === "object");
assert(typeof ConfigurationItem$ === "object");
assert(typeof ConfigurationRecorder$ === "object");
assert(typeof ConfigurationRecorderFilter$ === "object");
assert(typeof ConfigurationRecorderStatus$ === "object");
assert(typeof ConfigurationRecorderSummary$ === "object");
assert(typeof ConformancePackComplianceFilters$ === "object");
assert(typeof ConformancePackComplianceScore$ === "object");
assert(typeof ConformancePackComplianceScoresFilters$ === "object");
assert(typeof ConformancePackComplianceSummary$ === "object");
assert(typeof ConformancePackDetail$ === "object");
assert(typeof ConformancePackEvaluationFilters$ === "object");
assert(typeof ConformancePackEvaluationResult$ === "object");
assert(typeof ConformancePackInputParameter$ === "object");
assert(typeof ConformancePackRuleCompliance$ === "object");
assert(typeof ConformancePackStatusDetail$ === "object");
assert(typeof CustomPolicyDetails$ === "object");
assert(typeof DeleteAggregationAuthorizationRequest$ === "object");
assert(typeof DeleteConfigRuleRequest$ === "object");
assert(typeof DeleteConfigurationAggregatorRequest$ === "object");
assert(typeof DeleteConfigurationRecorderRequest$ === "object");
assert(typeof DeleteConformancePackRequest$ === "object");
assert(typeof DeleteDeliveryChannelRequest$ === "object");
assert(typeof DeleteEvaluationResultsRequest$ === "object");
assert(typeof DeleteEvaluationResultsResponse$ === "object");
assert(typeof DeleteOrganizationConfigRuleRequest$ === "object");
assert(typeof DeleteOrganizationConformancePackRequest$ === "object");
assert(typeof DeletePendingAggregationRequestRequest$ === "object");
assert(typeof DeleteRemediationConfigurationRequest$ === "object");
assert(typeof DeleteRemediationConfigurationResponse$ === "object");
assert(typeof DeleteRemediationExceptionsRequest$ === "object");
assert(typeof DeleteRemediationExceptionsResponse$ === "object");
assert(typeof DeleteResourceConfigRequest$ === "object");
assert(typeof DeleteRetentionConfigurationRequest$ === "object");
assert(typeof DeleteServiceLinkedConfigurationRecorderRequest$ === "object");
assert(typeof DeleteServiceLinkedConfigurationRecorderResponse$ === "object");
assert(typeof DeleteStoredQueryRequest$ === "object");
assert(typeof DeleteStoredQueryResponse$ === "object");
assert(typeof DeliverConfigSnapshotRequest$ === "object");
assert(typeof DeliverConfigSnapshotResponse$ === "object");
assert(typeof DeliveryChannel$ === "object");
assert(typeof DeliveryChannelStatus$ === "object");
assert(typeof DescribeAggregateComplianceByConfigRulesRequest$ === "object");
assert(typeof DescribeAggregateComplianceByConfigRulesResponse$ === "object");
assert(typeof DescribeAggregateComplianceByConformancePacksRequest$ === "object");
assert(typeof DescribeAggregateComplianceByConformancePacksResponse$ === "object");
assert(typeof DescribeAggregationAuthorizationsRequest$ === "object");
assert(typeof DescribeAggregationAuthorizationsResponse$ === "object");
assert(typeof DescribeComplianceByConfigRuleRequest$ === "object");
assert(typeof DescribeComplianceByConfigRuleResponse$ === "object");
assert(typeof DescribeComplianceByResourceRequest$ === "object");
assert(typeof DescribeComplianceByResourceResponse$ === "object");
assert(typeof DescribeConfigRuleEvaluationStatusRequest$ === "object");
assert(typeof DescribeConfigRuleEvaluationStatusResponse$ === "object");
assert(typeof DescribeConfigRulesFilters$ === "object");
assert(typeof DescribeConfigRulesRequest$ === "object");
assert(typeof DescribeConfigRulesResponse$ === "object");
assert(typeof DescribeConfigurationAggregatorSourcesStatusRequest$ === "object");
assert(typeof DescribeConfigurationAggregatorSourcesStatusResponse$ === "object");
assert(typeof DescribeConfigurationAggregatorsRequest$ === "object");
assert(typeof DescribeConfigurationAggregatorsResponse$ === "object");
assert(typeof DescribeConfigurationRecordersRequest$ === "object");
assert(typeof DescribeConfigurationRecordersResponse$ === "object");
assert(typeof DescribeConfigurationRecorderStatusRequest$ === "object");
assert(typeof DescribeConfigurationRecorderStatusResponse$ === "object");
assert(typeof DescribeConformancePackComplianceRequest$ === "object");
assert(typeof DescribeConformancePackComplianceResponse$ === "object");
assert(typeof DescribeConformancePacksRequest$ === "object");
assert(typeof DescribeConformancePacksResponse$ === "object");
assert(typeof DescribeConformancePackStatusRequest$ === "object");
assert(typeof DescribeConformancePackStatusResponse$ === "object");
assert(typeof DescribeDeliveryChannelsRequest$ === "object");
assert(typeof DescribeDeliveryChannelsResponse$ === "object");
assert(typeof DescribeDeliveryChannelStatusRequest$ === "object");
assert(typeof DescribeDeliveryChannelStatusResponse$ === "object");
assert(typeof DescribeOrganizationConfigRulesRequest$ === "object");
assert(typeof DescribeOrganizationConfigRulesResponse$ === "object");
assert(typeof DescribeOrganizationConfigRuleStatusesRequest$ === "object");
assert(typeof DescribeOrganizationConfigRuleStatusesResponse$ === "object");
assert(typeof DescribeOrganizationConformancePacksRequest$ === "object");
assert(typeof DescribeOrganizationConformancePacksResponse$ === "object");
assert(typeof DescribeOrganizationConformancePackStatusesRequest$ === "object");
assert(typeof DescribeOrganizationConformancePackStatusesResponse$ === "object");
assert(typeof DescribePendingAggregationRequestsRequest$ === "object");
assert(typeof DescribePendingAggregationRequestsResponse$ === "object");
assert(typeof DescribeRemediationConfigurationsRequest$ === "object");
assert(typeof DescribeRemediationConfigurationsResponse$ === "object");
assert(typeof DescribeRemediationExceptionsRequest$ === "object");
assert(typeof DescribeRemediationExceptionsResponse$ === "object");
assert(typeof DescribeRemediationExecutionStatusRequest$ === "object");
assert(typeof DescribeRemediationExecutionStatusResponse$ === "object");
assert(typeof DescribeRetentionConfigurationsRequest$ === "object");
assert(typeof DescribeRetentionConfigurationsResponse$ === "object");
assert(typeof DisassociateResourceTypesRequest$ === "object");
assert(typeof DisassociateResourceTypesResponse$ === "object");
assert(typeof Evaluation$ === "object");
assert(typeof EvaluationContext$ === "object");
assert(typeof EvaluationModeConfiguration$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof EvaluationResultIdentifier$ === "object");
assert(typeof EvaluationResultQualifier$ === "object");
assert(typeof EvaluationStatus$ === "object");
assert(typeof ExclusionByResourceTypes$ === "object");
assert(typeof ExecutionControls$ === "object");
assert(typeof ExternalEvaluation$ === "object");
assert(typeof FailedDeleteRemediationExceptionsBatch$ === "object");
assert(typeof FailedRemediationBatch$ === "object");
assert(typeof FailedRemediationExceptionBatch$ === "object");
assert(typeof FieldInfo$ === "object");
assert(typeof GetAggregateComplianceDetailsByConfigRuleRequest$ === "object");
assert(typeof GetAggregateComplianceDetailsByConfigRuleResponse$ === "object");
assert(typeof GetAggregateConfigRuleComplianceSummaryRequest$ === "object");
assert(typeof GetAggregateConfigRuleComplianceSummaryResponse$ === "object");
assert(typeof GetAggregateConformancePackComplianceSummaryRequest$ === "object");
assert(typeof GetAggregateConformancePackComplianceSummaryResponse$ === "object");
assert(typeof GetAggregateDiscoveredResourceCountsRequest$ === "object");
assert(typeof GetAggregateDiscoveredResourceCountsResponse$ === "object");
assert(typeof GetAggregateResourceConfigRequest$ === "object");
assert(typeof GetAggregateResourceConfigResponse$ === "object");
assert(typeof GetComplianceDetailsByConfigRuleRequest$ === "object");
assert(typeof GetComplianceDetailsByConfigRuleResponse$ === "object");
assert(typeof GetComplianceDetailsByResourceRequest$ === "object");
assert(typeof GetComplianceDetailsByResourceResponse$ === "object");
assert(typeof GetComplianceSummaryByConfigRuleResponse$ === "object");
assert(typeof GetComplianceSummaryByResourceTypeRequest$ === "object");
assert(typeof GetComplianceSummaryByResourceTypeResponse$ === "object");
assert(typeof GetConformancePackComplianceDetailsRequest$ === "object");
assert(typeof GetConformancePackComplianceDetailsResponse$ === "object");
assert(typeof GetConformancePackComplianceSummaryRequest$ === "object");
assert(typeof GetConformancePackComplianceSummaryResponse$ === "object");
assert(typeof GetCustomRulePolicyRequest$ === "object");
assert(typeof GetCustomRulePolicyResponse$ === "object");
assert(typeof GetDiscoveredResourceCountsRequest$ === "object");
assert(typeof GetDiscoveredResourceCountsResponse$ === "object");
assert(typeof GetOrganizationConfigRuleDetailedStatusRequest$ === "object");
assert(typeof GetOrganizationConfigRuleDetailedStatusResponse$ === "object");
assert(typeof GetOrganizationConformancePackDetailedStatusRequest$ === "object");
assert(typeof GetOrganizationConformancePackDetailedStatusResponse$ === "object");
assert(typeof GetOrganizationCustomRulePolicyRequest$ === "object");
assert(typeof GetOrganizationCustomRulePolicyResponse$ === "object");
assert(typeof GetResourceConfigHistoryRequest$ === "object");
assert(typeof GetResourceConfigHistoryResponse$ === "object");
assert(typeof GetResourceEvaluationSummaryRequest$ === "object");
assert(typeof GetResourceEvaluationSummaryResponse$ === "object");
assert(typeof GetStoredQueryRequest$ === "object");
assert(typeof GetStoredQueryResponse$ === "object");
assert(typeof GroupedResourceCount$ === "object");
assert(typeof ListAggregateDiscoveredResourcesRequest$ === "object");
assert(typeof ListAggregateDiscoveredResourcesResponse$ === "object");
assert(typeof ListConfigurationRecordersRequest$ === "object");
assert(typeof ListConfigurationRecordersResponse$ === "object");
assert(typeof ListConformancePackComplianceScoresRequest$ === "object");
assert(typeof ListConformancePackComplianceScoresResponse$ === "object");
assert(typeof ListDiscoveredResourcesRequest$ === "object");
assert(typeof ListDiscoveredResourcesResponse$ === "object");
assert(typeof ListResourceEvaluationsRequest$ === "object");
assert(typeof ListResourceEvaluationsResponse$ === "object");
assert(typeof ListStoredQueriesRequest$ === "object");
assert(typeof ListStoredQueriesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MemberAccountStatus$ === "object");
assert(typeof OrganizationAggregationSource$ === "object");
assert(typeof OrganizationConfigRule$ === "object");
assert(typeof OrganizationConfigRuleStatus$ === "object");
assert(typeof OrganizationConformancePack$ === "object");
assert(typeof OrganizationConformancePackDetailedStatus$ === "object");
assert(typeof OrganizationConformancePackStatus$ === "object");
assert(typeof OrganizationCustomPolicyRuleMetadata$ === "object");
assert(typeof OrganizationCustomPolicyRuleMetadataNoPolicy$ === "object");
assert(typeof OrganizationCustomRuleMetadata$ === "object");
assert(typeof OrganizationManagedRuleMetadata$ === "object");
assert(typeof OrganizationResourceDetailedStatusFilters$ === "object");
assert(typeof PendingAggregationRequest$ === "object");
assert(typeof PutAggregationAuthorizationRequest$ === "object");
assert(typeof PutAggregationAuthorizationResponse$ === "object");
assert(typeof PutConfigRuleRequest$ === "object");
assert(typeof PutConfigurationAggregatorRequest$ === "object");
assert(typeof PutConfigurationAggregatorResponse$ === "object");
assert(typeof PutConfigurationRecorderRequest$ === "object");
assert(typeof PutConformancePackRequest$ === "object");
assert(typeof PutConformancePackResponse$ === "object");
assert(typeof PutDeliveryChannelRequest$ === "object");
assert(typeof PutEvaluationsRequest$ === "object");
assert(typeof PutEvaluationsResponse$ === "object");
assert(typeof PutExternalEvaluationRequest$ === "object");
assert(typeof PutExternalEvaluationResponse$ === "object");
assert(typeof PutOrganizationConfigRuleRequest$ === "object");
assert(typeof PutOrganizationConfigRuleResponse$ === "object");
assert(typeof PutOrganizationConformancePackRequest$ === "object");
assert(typeof PutOrganizationConformancePackResponse$ === "object");
assert(typeof PutRemediationConfigurationsRequest$ === "object");
assert(typeof PutRemediationConfigurationsResponse$ === "object");
assert(typeof PutRemediationExceptionsRequest$ === "object");
assert(typeof PutRemediationExceptionsResponse$ === "object");
assert(typeof PutResourceConfigRequest$ === "object");
assert(typeof PutRetentionConfigurationRequest$ === "object");
assert(typeof PutRetentionConfigurationResponse$ === "object");
assert(typeof PutServiceLinkedConfigurationRecorderRequest$ === "object");
assert(typeof PutServiceLinkedConfigurationRecorderResponse$ === "object");
assert(typeof PutStoredQueryRequest$ === "object");
assert(typeof PutStoredQueryResponse$ === "object");
assert(typeof QueryInfo$ === "object");
assert(typeof RecordingGroup$ === "object");
assert(typeof RecordingMode$ === "object");
assert(typeof RecordingModeOverride$ === "object");
assert(typeof RecordingStrategy$ === "object");
assert(typeof Relationship$ === "object");
assert(typeof RemediationConfiguration$ === "object");
assert(typeof RemediationException$ === "object");
assert(typeof RemediationExceptionResourceKey$ === "object");
assert(typeof RemediationExecutionStatus$ === "object");
assert(typeof RemediationExecutionStep$ === "object");
assert(typeof RemediationParameterValue$ === "object");
assert(typeof ResourceCount$ === "object");
assert(typeof ResourceCountFilters$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceEvaluation$ === "object");
assert(typeof ResourceEvaluationFilters$ === "object");
assert(typeof ResourceFilters$ === "object");
assert(typeof ResourceIdentifier$ === "object");
assert(typeof ResourceKey$ === "object");
assert(typeof ResourceValue$ === "object");
assert(typeof RetentionConfiguration$ === "object");
assert(typeof Scope$ === "object");
assert(typeof SelectAggregateResourceConfigRequest$ === "object");
assert(typeof SelectAggregateResourceConfigResponse$ === "object");
assert(typeof SelectResourceConfigRequest$ === "object");
assert(typeof SelectResourceConfigResponse$ === "object");
assert(typeof Source$ === "object");
assert(typeof SourceDetail$ === "object");
assert(typeof SsmControls$ === "object");
assert(typeof StartConfigRulesEvaluationRequest$ === "object");
assert(typeof StartConfigRulesEvaluationResponse$ === "object");
assert(typeof StartConfigurationRecorderRequest$ === "object");
assert(typeof StartRemediationExecutionRequest$ === "object");
assert(typeof StartRemediationExecutionResponse$ === "object");
assert(typeof StartResourceEvaluationRequest$ === "object");
assert(typeof StartResourceEvaluationResponse$ === "object");
assert(typeof StaticValue$ === "object");
assert(typeof StatusDetailFilters$ === "object");
assert(typeof StopConfigurationRecorderRequest$ === "object");
assert(typeof StoredQuery$ === "object");
assert(typeof StoredQueryMetadata$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateSSMDocumentDetails$ === "object");
assert(typeof TimeWindow$ === "object");
assert(typeof UntagResourceRequest$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(ConformancePackTemplateValidationException.prototype instanceof ConfigServiceServiceException);
assert(typeof ConformancePackTemplateValidationException$ === "object");
assert(IdempotentParameterMismatch.prototype instanceof ConfigServiceServiceException);
assert(typeof IdempotentParameterMismatch$ === "object");
assert(InsufficientDeliveryPolicyException.prototype instanceof ConfigServiceServiceException);
assert(typeof InsufficientDeliveryPolicyException$ === "object");
assert(InsufficientPermissionsException.prototype instanceof ConfigServiceServiceException);
assert(typeof InsufficientPermissionsException$ === "object");
assert(InvalidConfigurationRecorderNameException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidConfigurationRecorderNameException$ === "object");
assert(InvalidDeliveryChannelNameException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidDeliveryChannelNameException$ === "object");
assert(InvalidExpressionException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidExpressionException$ === "object");
assert(InvalidLimitException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidLimitException$ === "object");
assert(InvalidNextTokenException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidRecordingGroupException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidRecordingGroupException$ === "object");
assert(InvalidResultTokenException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidResultTokenException$ === "object");
assert(InvalidRoleException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidRoleException$ === "object");
assert(InvalidS3KeyPrefixException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidS3KeyPrefixException$ === "object");
assert(InvalidS3KmsKeyArnException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidS3KmsKeyArnException$ === "object");
assert(InvalidSNSTopicARNException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidSNSTopicARNException$ === "object");
assert(InvalidTimeRangeException.prototype instanceof ConfigServiceServiceException);
assert(typeof InvalidTimeRangeException$ === "object");
assert(LastDeliveryChannelDeleteFailedException.prototype instanceof ConfigServiceServiceException);
assert(typeof LastDeliveryChannelDeleteFailedException$ === "object");
assert(LimitExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MaxActiveResourcesExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxActiveResourcesExceededException$ === "object");
assert(MaxNumberOfConfigRulesExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfConfigRulesExceededException$ === "object");
assert(MaxNumberOfConfigurationRecordersExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfConfigurationRecordersExceededException$ === "object");
assert(MaxNumberOfConformancePacksExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfConformancePacksExceededException$ === "object");
assert(MaxNumberOfDeliveryChannelsExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfDeliveryChannelsExceededException$ === "object");
assert(MaxNumberOfOrganizationConfigRulesExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfOrganizationConfigRulesExceededException$ === "object");
assert(MaxNumberOfOrganizationConformancePacksExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfOrganizationConformancePacksExceededException$ === "object");
assert(MaxNumberOfRetentionConfigurationsExceededException.prototype instanceof ConfigServiceServiceException);
assert(typeof MaxNumberOfRetentionConfigurationsExceededException$ === "object");
assert(NoAvailableConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoAvailableConfigurationRecorderException$ === "object");
assert(NoAvailableDeliveryChannelException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoAvailableDeliveryChannelException$ === "object");
assert(NoAvailableOrganizationException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoAvailableOrganizationException$ === "object");
assert(NoRunningConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoRunningConfigurationRecorderException$ === "object");
assert(NoSuchBucketException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchBucketException$ === "object");
assert(NoSuchConfigRuleException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchConfigRuleException$ === "object");
assert(NoSuchConfigRuleInConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchConfigRuleInConformancePackException$ === "object");
assert(NoSuchConfigurationAggregatorException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchConfigurationAggregatorException$ === "object");
assert(NoSuchConfigurationRecorderException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchConfigurationRecorderException$ === "object");
assert(NoSuchConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchConformancePackException$ === "object");
assert(NoSuchDeliveryChannelException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchDeliveryChannelException$ === "object");
assert(NoSuchOrganizationConfigRuleException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchOrganizationConfigRuleException$ === "object");
assert(NoSuchOrganizationConformancePackException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchOrganizationConformancePackException$ === "object");
assert(NoSuchRemediationConfigurationException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchRemediationConfigurationException$ === "object");
assert(NoSuchRemediationExceptionException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchRemediationExceptionException$ === "object");
assert(NoSuchRetentionConfigurationException.prototype instanceof ConfigServiceServiceException);
assert(typeof NoSuchRetentionConfigurationException$ === "object");
assert(OrganizationAccessDeniedException.prototype instanceof ConfigServiceServiceException);
assert(typeof OrganizationAccessDeniedException$ === "object");
assert(OrganizationAllFeaturesNotEnabledException.prototype instanceof ConfigServiceServiceException);
assert(typeof OrganizationAllFeaturesNotEnabledException$ === "object");
assert(OrganizationConformancePackTemplateValidationException.prototype instanceof ConfigServiceServiceException);
assert(typeof OrganizationConformancePackTemplateValidationException$ === "object");
assert(OversizedConfigurationItemException.prototype instanceof ConfigServiceServiceException);
assert(typeof OversizedConfigurationItemException$ === "object");
assert(RemediationInProgressException.prototype instanceof ConfigServiceServiceException);
assert(typeof RemediationInProgressException$ === "object");
assert(ResourceConcurrentModificationException.prototype instanceof ConfigServiceServiceException);
assert(typeof ResourceConcurrentModificationException$ === "object");
assert(ResourceInUseException.prototype instanceof ConfigServiceServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotDiscoveredException.prototype instanceof ConfigServiceServiceException);
assert(typeof ResourceNotDiscoveredException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConfigServiceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof ConfigServiceServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnmodifiableEntityException.prototype instanceof ConfigServiceServiceException);
assert(typeof UnmodifiableEntityException$ === "object");
assert(ValidationException.prototype instanceof ConfigServiceServiceException);
assert(typeof ValidationException$ === "object");
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
