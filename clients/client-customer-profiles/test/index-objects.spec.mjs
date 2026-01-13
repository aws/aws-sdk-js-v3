import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionType,
  AdditionalSearchKey$,
  AddProfileKey$,
  AddProfileKeyCommand,
  AddProfileKeyRequest$,
  AddProfileKeyResponse$,
  Address$,
  AddressDimension$,
  AppflowIntegration$,
  AppflowIntegrationWorkflowAttributes$,
  AppflowIntegrationWorkflowMetrics$,
  AppflowIntegrationWorkflowStep$,
  AttributeDetails$,
  AttributeDimension$,
  AttributeDimensionType,
  AttributeItem$,
  AttributeMatchingModel,
  AttributeTypesSelector$,
  AttributeValueItem$,
  AutoMerging$,
  BadRequestException,
  BadRequestException$,
  Batch$,
  BatchGetCalculatedAttributeForProfile$,
  BatchGetCalculatedAttributeForProfileCommand,
  BatchGetCalculatedAttributeForProfileError$,
  BatchGetCalculatedAttributeForProfileRequest$,
  BatchGetCalculatedAttributeForProfileResponse$,
  BatchGetProfile$,
  BatchGetProfileCommand,
  BatchGetProfileError$,
  BatchGetProfileRequest$,
  BatchGetProfileResponse$,
  CalculatedAttributeDimension$,
  CalculatedAttributeValue$,
  CatalogItem$,
  ComparisonOperator,
  ConditionOverrides$,
  Conditions$,
  ConflictResolution$,
  ConflictResolvingModel,
  ConnectorOperator$,
  Consolidation$,
  ContactPreference$,
  ContactType,
  ContentType,
  CreateCalculatedAttributeDefinition$,
  CreateCalculatedAttributeDefinitionCommand,
  CreateCalculatedAttributeDefinitionRequest$,
  CreateCalculatedAttributeDefinitionResponse$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainLayout$,
  CreateDomainLayoutCommand,
  CreateDomainLayoutRequest$,
  CreateDomainLayoutResponse$,
  CreateDomainRequest$,
  CreateDomainResponse$,
  CreateEventStream$,
  CreateEventStreamCommand,
  CreateEventStreamRequest$,
  CreateEventStreamResponse$,
  CreateEventTrigger$,
  CreateEventTriggerCommand,
  CreateEventTriggerRequest$,
  CreateEventTriggerResponse$,
  CreateIntegrationWorkflow$,
  CreateIntegrationWorkflowCommand,
  CreateIntegrationWorkflowRequest$,
  CreateIntegrationWorkflowResponse$,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileRequest$,
  CreateProfileResponse$,
  CreateRecommender$,
  CreateRecommenderCommand,
  CreateRecommenderRequest$,
  CreateRecommenderResponse$,
  CreateSegmentDefinition$,
  CreateSegmentDefinitionCommand,
  CreateSegmentDefinitionRequest$,
  CreateSegmentDefinitionResponse$,
  CreateSegmentEstimate$,
  CreateSegmentEstimateCommand,
  CreateSegmentEstimateRequest$,
  CreateSegmentEstimateResponse$,
  CreateSegmentSnapshot$,
  CreateSegmentSnapshotCommand,
  CreateSegmentSnapshotRequest$,
  CreateSegmentSnapshotResponse$,
  CreateUploadJob$,
  CreateUploadJobCommand,
  CreateUploadJobRequest$,
  CreateUploadJobResponse$,
  CustomerProfiles,
  CustomerProfilesClient,
  CustomerProfilesServiceException,
  DataFormat,
  DataPullMode,
  DataStoreRequest$,
  DataStoreResponse$,
  DateDimension$,
  DateDimensionType,
  DeleteCalculatedAttributeDefinition$,
  DeleteCalculatedAttributeDefinitionCommand,
  DeleteCalculatedAttributeDefinitionRequest$,
  DeleteCalculatedAttributeDefinitionResponse$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainLayout$,
  DeleteDomainLayoutCommand,
  DeleteDomainLayoutRequest$,
  DeleteDomainLayoutResponse$,
  DeleteDomainObjectType$,
  DeleteDomainObjectTypeCommand,
  DeleteDomainObjectTypeRequest$,
  DeleteDomainObjectTypeResponse$,
  DeleteDomainRequest$,
  DeleteDomainResponse$,
  DeleteEventStream$,
  DeleteEventStreamCommand,
  DeleteEventStreamRequest$,
  DeleteEventStreamResponse$,
  DeleteEventTrigger$,
  DeleteEventTriggerCommand,
  DeleteEventTriggerRequest$,
  DeleteEventTriggerResponse$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationRequest$,
  DeleteIntegrationResponse$,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteProfileKey$,
  DeleteProfileKeyCommand,
  DeleteProfileKeyRequest$,
  DeleteProfileKeyResponse$,
  DeleteProfileObject$,
  DeleteProfileObjectCommand,
  DeleteProfileObjectRequest$,
  DeleteProfileObjectResponse$,
  DeleteProfileObjectType$,
  DeleteProfileObjectTypeCommand,
  DeleteProfileObjectTypeRequest$,
  DeleteProfileObjectTypeResponse$,
  DeleteProfileRequest$,
  DeleteProfileResponse$,
  DeleteRecommender$,
  DeleteRecommenderCommand,
  DeleteRecommenderRequest$,
  DeleteRecommenderResponse$,
  DeleteSegmentDefinition$,
  DeleteSegmentDefinitionCommand,
  DeleteSegmentDefinitionRequest$,
  DeleteSegmentDefinitionResponse$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DeleteWorkflowResponse$,
  DestinationSummary$,
  DetectedProfileObjectType$,
  DetectProfileObjectType$,
  DetectProfileObjectTypeCommand,
  DetectProfileObjectTypeRequest$,
  DetectProfileObjectTypeResponse$,
  Dimension$,
  DomainObjectTypeField$,
  DomainObjectTypesListItem$,
  DomainStats$,
  EngagementPreferences$,
  EstimateStatus,
  EventParameters$,
  EventsConfig$,
  EventStreamDestinationDetails$,
  EventStreamDestinationStatus,
  EventStreamState,
  EventStreamSummary$,
  EventTriggerCondition$,
  EventTriggerDimension$,
  EventTriggerLimits$,
  EventTriggerLogicalOperator,
  EventTriggerSummaryItem$,
  ExportingConfig$,
  ExportingLocation$,
  ExtraLengthValueProfileDimension$,
  FeatureType,
  FieldContentType,
  FieldSourceProfileIds$,
  Filter$,
  FilterAttributeDimension$,
  FilterDimension$,
  FilterDimensionType,
  FilterGroup$,
  FlowDefinition$,
  FoundByKeyValue$,
  Gender,
  GetAutoMergingPreview$,
  GetAutoMergingPreviewCommand,
  GetAutoMergingPreviewRequest$,
  GetAutoMergingPreviewResponse$,
  GetCalculatedAttributeDefinition$,
  GetCalculatedAttributeDefinitionCommand,
  GetCalculatedAttributeDefinitionRequest$,
  GetCalculatedAttributeDefinitionResponse$,
  GetCalculatedAttributeForProfile$,
  GetCalculatedAttributeForProfileCommand,
  GetCalculatedAttributeForProfileRequest$,
  GetCalculatedAttributeForProfileResponse$,
  GetDomain$,
  GetDomainCommand,
  GetDomainLayout$,
  GetDomainLayoutCommand,
  GetDomainLayoutRequest$,
  GetDomainLayoutResponse$,
  GetDomainObjectType$,
  GetDomainObjectTypeCommand,
  GetDomainObjectTypeRequest$,
  GetDomainObjectTypeResponse$,
  GetDomainRequest$,
  GetDomainResponse$,
  GetEventStream$,
  GetEventStreamCommand,
  GetEventStreamRequest$,
  GetEventStreamResponse$,
  GetEventTrigger$,
  GetEventTriggerCommand,
  GetEventTriggerRequest$,
  GetEventTriggerResponse$,
  GetIdentityResolutionJob$,
  GetIdentityResolutionJobCommand,
  GetIdentityResolutionJobRequest$,
  GetIdentityResolutionJobResponse$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationRequest$,
  GetIntegrationResponse$,
  GetMatches$,
  GetMatchesCommand,
  GetMatchesRequest$,
  GetMatchesResponse$,
  GetObjectTypeAttributeStatistics$,
  GetObjectTypeAttributeStatisticsCommand,
  GetObjectTypeAttributeStatisticsPercentiles$,
  GetObjectTypeAttributeStatisticsRequest$,
  GetObjectTypeAttributeStatisticsResponse$,
  GetObjectTypeAttributeStatisticsStats$,
  GetProfileHistoryRecord$,
  GetProfileHistoryRecordCommand,
  GetProfileHistoryRecordRequest$,
  GetProfileHistoryRecordResponse$,
  GetProfileObjectType$,
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeRequest$,
  GetProfileObjectTypeResponse$,
  GetProfileObjectTypeTemplate$,
  GetProfileObjectTypeTemplateCommand,
  GetProfileObjectTypeTemplateRequest$,
  GetProfileObjectTypeTemplateResponse$,
  GetProfileRecommendations$,
  GetProfileRecommendationsCommand,
  GetProfileRecommendationsRequest$,
  GetProfileRecommendationsResponse$,
  GetRecommender$,
  GetRecommenderCommand,
  GetRecommenderRequest$,
  GetRecommenderResponse$,
  GetSegmentDefinition$,
  GetSegmentDefinitionCommand,
  GetSegmentDefinitionRequest$,
  GetSegmentDefinitionResponse$,
  GetSegmentEstimate$,
  GetSegmentEstimateCommand,
  GetSegmentEstimateRequest$,
  GetSegmentEstimateResponse$,
  GetSegmentMembership$,
  GetSegmentMembershipCommand,
  GetSegmentMembershipRequest$,
  GetSegmentMembershipResponse$,
  GetSegmentSnapshot$,
  GetSegmentSnapshotCommand,
  GetSegmentSnapshotRequest$,
  GetSegmentSnapshotResponse$,
  GetSimilarProfiles$,
  GetSimilarProfilesCommand,
  GetSimilarProfilesRequest$,
  GetSimilarProfilesResponse$,
  GetUploadJob$,
  GetUploadJobCommand,
  GetUploadJobPath$,
  GetUploadJobPathCommand,
  GetUploadJobPathRequest$,
  GetUploadJobPathResponse$,
  GetUploadJobRequest$,
  GetUploadJobResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowSteps$,
  GetWorkflowStepsCommand,
  GetWorkflowStepsRequest$,
  GetWorkflowStepsResponse$,
  Group$,
  IdentityResolutionJob$,
  IdentityResolutionJobStatus,
  Include,
  IncludeOptions,
  IncrementalPullConfig$,
  IntegrationConfig$,
  InternalServerException,
  InternalServerException$,
  JobSchedule$,
  JobScheduleDayOfTheWeek,
  JobStats$,
  LayoutItem$,
  LayoutType,
  ListAccountIntegrations$,
  ListAccountIntegrationsCommand,
  ListAccountIntegrationsRequest$,
  ListAccountIntegrationsResponse$,
  ListCalculatedAttributeDefinitionItem$,
  ListCalculatedAttributeDefinitions$,
  ListCalculatedAttributeDefinitionsCommand,
  ListCalculatedAttributeDefinitionsRequest$,
  ListCalculatedAttributeDefinitionsResponse$,
  ListCalculatedAttributeForProfileItem$,
  ListCalculatedAttributesForProfile$,
  ListCalculatedAttributesForProfileCommand,
  ListCalculatedAttributesForProfileRequest$,
  ListCalculatedAttributesForProfileResponse$,
  ListDomainItem$,
  ListDomainLayouts$,
  ListDomainLayoutsCommand,
  ListDomainLayoutsRequest$,
  ListDomainLayoutsResponse$,
  ListDomainObjectTypes$,
  ListDomainObjectTypesCommand,
  ListDomainObjectTypesRequest$,
  ListDomainObjectTypesResponse$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListEventStreams$,
  ListEventStreamsCommand,
  ListEventStreamsRequest$,
  ListEventStreamsResponse$,
  ListEventTriggers$,
  ListEventTriggersCommand,
  ListEventTriggersRequest$,
  ListEventTriggersResponse$,
  ListIdentityResolutionJobs$,
  ListIdentityResolutionJobsCommand,
  ListIdentityResolutionJobsRequest$,
  ListIdentityResolutionJobsResponse$,
  ListIntegrationItem$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsRequest$,
  ListIntegrationsResponse$,
  ListObjectTypeAttributeItem$,
  ListObjectTypeAttributes$,
  ListObjectTypeAttributesCommand,
  ListObjectTypeAttributesRequest$,
  ListObjectTypeAttributesResponse$,
  ListObjectTypeAttributeValues$,
  ListObjectTypeAttributeValuesCommand,
  ListObjectTypeAttributeValuesItem$,
  ListObjectTypeAttributeValuesRequest$,
  ListObjectTypeAttributeValuesResponse$,
  ListProfileAttributeValues$,
  ListProfileAttributeValuesCommand,
  ListProfileHistoryRecords$,
  ListProfileHistoryRecordsCommand,
  ListProfileHistoryRecordsRequest$,
  ListProfileHistoryRecordsResponse$,
  ListProfileObjects$,
  ListProfileObjectsCommand,
  ListProfileObjectsItem$,
  ListProfileObjectsRequest$,
  ListProfileObjectsResponse$,
  ListProfileObjectTypeItem$,
  ListProfileObjectTypes$,
  ListProfileObjectTypesCommand,
  ListProfileObjectTypesRequest$,
  ListProfileObjectTypesResponse$,
  ListProfileObjectTypeTemplateItem$,
  ListProfileObjectTypeTemplates$,
  ListProfileObjectTypeTemplatesCommand,
  ListProfileObjectTypeTemplatesRequest$,
  ListProfileObjectTypeTemplatesResponse$,
  ListRecommenderRecipes$,
  ListRecommenderRecipesCommand,
  ListRecommenderRecipesRequest$,
  ListRecommenderRecipesResponse$,
  ListRecommenders$,
  ListRecommendersCommand,
  ListRecommendersRequest$,
  ListRecommendersResponse$,
  ListRuleBasedMatches$,
  ListRuleBasedMatchesCommand,
  ListRuleBasedMatchesRequest$,
  ListRuleBasedMatchesResponse$,
  ListSegmentDefinitions$,
  ListSegmentDefinitionsCommand,
  ListSegmentDefinitionsRequest$,
  ListSegmentDefinitionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUploadJobs$,
  ListUploadJobsCommand,
  ListUploadJobsRequest$,
  ListUploadJobsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsItem$,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  LogicalOperator,
  MarketoConnectorOperator,
  MarketoSourceProperties$,
  MatchingRequest$,
  MatchingResponse$,
  MatchingRule$,
  MatchItem$,
  MatchType,
  MergeProfiles$,
  MergeProfilesCommand,
  MergeProfilesRequest$,
  MergeProfilesResponse$,
  ObjectAttribute$,
  ObjectFilter$,
  ObjectTypeField$,
  ObjectTypeKey$,
  Operator,
  OperatorPropertiesKeys,
  paginateGetSimilarProfiles,
  paginateListDomainLayouts,
  paginateListDomainObjectTypes,
  paginateListEventStreams,
  paginateListEventTriggers,
  paginateListObjectTypeAttributes,
  paginateListRecommenderRecipes,
  paginateListRecommenders,
  paginateListRuleBasedMatches,
  paginateListSegmentDefinitions,
  paginateListUploadJobs,
  PartyType,
  Period$,
  PeriodUnit,
  Profile$,
  ProfileAttributes$,
  ProfileAttributeValuesRequest$,
  ProfileAttributeValuesResponse$,
  ProfileDimension$,
  ProfileHistoryRecord$,
  ProfileQueryFailures$,
  ProfileQueryResult$,
  ProfileType,
  ProfileTypeDimension$,
  ProfileTypeDimensionType,
  PutDomainObjectType$,
  PutDomainObjectTypeCommand,
  PutDomainObjectTypeRequest$,
  PutDomainObjectTypeResponse$,
  PutIntegration$,
  PutIntegrationCommand,
  PutIntegrationRequest$,
  PutIntegrationResponse$,
  PutProfileObject$,
  PutProfileObjectCommand,
  PutProfileObjectRequest$,
  PutProfileObjectResponse$,
  PutProfileObjectType$,
  PutProfileObjectTypeCommand,
  PutProfileObjectTypeRequest$,
  PutProfileObjectTypeResponse$,
  QueryResult,
  Range$,
  RangeOverride$,
  RangeUnit,
  Readiness$,
  ReadinessStatus,
  Recommendation$,
  RecommenderConfig$,
  RecommenderRecipe$,
  RecommenderRecipeName,
  RecommenderStatus,
  RecommenderSummary$,
  RecommenderUpdate$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultsSummary$,
  RuleBasedMatchingRequest$,
  RuleBasedMatchingResponse$,
  RuleBasedMatchingStatus,
  S3ConnectorOperator,
  S3ExportingConfig$,
  S3ExportingLocation$,
  S3SourceProperties$,
  SalesforceConnectorOperator,
  SalesforceSourceProperties$,
  ScheduledTriggerProperties$,
  Scope,
  SearchProfiles$,
  SearchProfilesCommand,
  SearchProfilesRequest$,
  SearchProfilesResponse$,
  SegmentDefinitionItem$,
  SegmentGroup$,
  SegmentGroupStructure$,
  SegmentSnapshotStatus,
  SegmentType,
  ServiceNowConnectorOperator,
  ServiceNowSourceProperties$,
  SourceConnectorProperties$,
  SourceConnectorType,
  SourceFlowConfig$,
  SourceSegment$,
  StandardIdentifier,
  StartRecommender$,
  StartRecommenderCommand,
  StartRecommenderRequest$,
  StartRecommenderResponse$,
  StartUploadJob$,
  StartUploadJobCommand,
  StartUploadJobRequest$,
  StartUploadJobResponse$,
  Statistic,
  Status,
  StatusReason,
  StopRecommender$,
  StopRecommenderCommand,
  StopRecommenderRequest$,
  StopRecommenderResponse$,
  StopUploadJob$,
  StopUploadJobCommand,
  StopUploadJobRequest$,
  StopUploadJobResponse$,
  StringDimensionType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Task$,
  TaskType,
  Threshold$,
  ThrottlingException,
  ThrottlingException$,
  TrainingMetricName,
  TrainingMetrics$,
  TriggerConfig$,
  TriggerProperties$,
  TriggerType,
  Type,
  Unit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAddress$,
  UpdateCalculatedAttributeDefinition$,
  UpdateCalculatedAttributeDefinitionCommand,
  UpdateCalculatedAttributeDefinitionRequest$,
  UpdateCalculatedAttributeDefinitionResponse$,
  UpdateDomain$,
  UpdateDomainCommand,
  UpdateDomainLayout$,
  UpdateDomainLayoutCommand,
  UpdateDomainLayoutRequest$,
  UpdateDomainLayoutResponse$,
  UpdateDomainRequest$,
  UpdateDomainResponse$,
  UpdateEventTrigger$,
  UpdateEventTriggerCommand,
  UpdateEventTriggerRequest$,
  UpdateEventTriggerResponse$,
  UpdateProfile$,
  UpdateProfileCommand,
  UpdateProfileRequest$,
  UpdateProfileResponse$,
  UpdateRecommender$,
  UpdateRecommenderCommand,
  UpdateRecommenderRequest$,
  UpdateRecommenderResponse$,
  UploadJobItem$,
  UploadJobStatus,
  ValueRange$,
  WorkflowAttributes$,
  WorkflowMetrics$,
  WorkflowStepItem$,
  WorkflowType,
  ZendeskConnectorOperator,
  ZendeskSourceProperties$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CustomerProfilesClient === "function");
assert(typeof CustomerProfiles === "function");
// commands
assert(typeof AddProfileKeyCommand === "function");
assert(typeof AddProfileKey$ === "object");
assert(typeof BatchGetCalculatedAttributeForProfileCommand === "function");
assert(typeof BatchGetCalculatedAttributeForProfile$ === "object");
assert(typeof BatchGetProfileCommand === "function");
assert(typeof BatchGetProfile$ === "object");
assert(typeof CreateCalculatedAttributeDefinitionCommand === "function");
assert(typeof CreateCalculatedAttributeDefinition$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateDomainLayoutCommand === "function");
assert(typeof CreateDomainLayout$ === "object");
assert(typeof CreateEventStreamCommand === "function");
assert(typeof CreateEventStream$ === "object");
assert(typeof CreateEventTriggerCommand === "function");
assert(typeof CreateEventTrigger$ === "object");
assert(typeof CreateIntegrationWorkflowCommand === "function");
assert(typeof CreateIntegrationWorkflow$ === "object");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof CreateRecommenderCommand === "function");
assert(typeof CreateRecommender$ === "object");
assert(typeof CreateSegmentDefinitionCommand === "function");
assert(typeof CreateSegmentDefinition$ === "object");
assert(typeof CreateSegmentEstimateCommand === "function");
assert(typeof CreateSegmentEstimate$ === "object");
assert(typeof CreateSegmentSnapshotCommand === "function");
assert(typeof CreateSegmentSnapshot$ === "object");
assert(typeof CreateUploadJobCommand === "function");
assert(typeof CreateUploadJob$ === "object");
assert(typeof DeleteCalculatedAttributeDefinitionCommand === "function");
assert(typeof DeleteCalculatedAttributeDefinition$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteDomainLayoutCommand === "function");
assert(typeof DeleteDomainLayout$ === "object");
assert(typeof DeleteDomainObjectTypeCommand === "function");
assert(typeof DeleteDomainObjectType$ === "object");
assert(typeof DeleteEventStreamCommand === "function");
assert(typeof DeleteEventStream$ === "object");
assert(typeof DeleteEventTriggerCommand === "function");
assert(typeof DeleteEventTrigger$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DeleteProfileKeyCommand === "function");
assert(typeof DeleteProfileKey$ === "object");
assert(typeof DeleteProfileObjectCommand === "function");
assert(typeof DeleteProfileObject$ === "object");
assert(typeof DeleteProfileObjectTypeCommand === "function");
assert(typeof DeleteProfileObjectType$ === "object");
assert(typeof DeleteRecommenderCommand === "function");
assert(typeof DeleteRecommender$ === "object");
assert(typeof DeleteSegmentDefinitionCommand === "function");
assert(typeof DeleteSegmentDefinition$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DetectProfileObjectTypeCommand === "function");
assert(typeof DetectProfileObjectType$ === "object");
assert(typeof GetAutoMergingPreviewCommand === "function");
assert(typeof GetAutoMergingPreview$ === "object");
assert(typeof GetCalculatedAttributeDefinitionCommand === "function");
assert(typeof GetCalculatedAttributeDefinition$ === "object");
assert(typeof GetCalculatedAttributeForProfileCommand === "function");
assert(typeof GetCalculatedAttributeForProfile$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetDomainLayoutCommand === "function");
assert(typeof GetDomainLayout$ === "object");
assert(typeof GetDomainObjectTypeCommand === "function");
assert(typeof GetDomainObjectType$ === "object");
assert(typeof GetEventStreamCommand === "function");
assert(typeof GetEventStream$ === "object");
assert(typeof GetEventTriggerCommand === "function");
assert(typeof GetEventTrigger$ === "object");
assert(typeof GetIdentityResolutionJobCommand === "function");
assert(typeof GetIdentityResolutionJob$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetMatchesCommand === "function");
assert(typeof GetMatches$ === "object");
assert(typeof GetObjectTypeAttributeStatisticsCommand === "function");
assert(typeof GetObjectTypeAttributeStatistics$ === "object");
assert(typeof GetProfileHistoryRecordCommand === "function");
assert(typeof GetProfileHistoryRecord$ === "object");
assert(typeof GetProfileObjectTypeCommand === "function");
assert(typeof GetProfileObjectType$ === "object");
assert(typeof GetProfileObjectTypeTemplateCommand === "function");
assert(typeof GetProfileObjectTypeTemplate$ === "object");
assert(typeof GetProfileRecommendationsCommand === "function");
assert(typeof GetProfileRecommendations$ === "object");
assert(typeof GetRecommenderCommand === "function");
assert(typeof GetRecommender$ === "object");
assert(typeof GetSegmentDefinitionCommand === "function");
assert(typeof GetSegmentDefinition$ === "object");
assert(typeof GetSegmentEstimateCommand === "function");
assert(typeof GetSegmentEstimate$ === "object");
assert(typeof GetSegmentMembershipCommand === "function");
assert(typeof GetSegmentMembership$ === "object");
assert(typeof GetSegmentSnapshotCommand === "function");
assert(typeof GetSegmentSnapshot$ === "object");
assert(typeof GetSimilarProfilesCommand === "function");
assert(typeof GetSimilarProfiles$ === "object");
assert(typeof GetUploadJobCommand === "function");
assert(typeof GetUploadJob$ === "object");
assert(typeof GetUploadJobPathCommand === "function");
assert(typeof GetUploadJobPath$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowStepsCommand === "function");
assert(typeof GetWorkflowSteps$ === "object");
assert(typeof ListAccountIntegrationsCommand === "function");
assert(typeof ListAccountIntegrations$ === "object");
assert(typeof ListCalculatedAttributeDefinitionsCommand === "function");
assert(typeof ListCalculatedAttributeDefinitions$ === "object");
assert(typeof ListCalculatedAttributesForProfileCommand === "function");
assert(typeof ListCalculatedAttributesForProfile$ === "object");
assert(typeof ListDomainLayoutsCommand === "function");
assert(typeof ListDomainLayouts$ === "object");
assert(typeof ListDomainObjectTypesCommand === "function");
assert(typeof ListDomainObjectTypes$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListEventStreamsCommand === "function");
assert(typeof ListEventStreams$ === "object");
assert(typeof ListEventTriggersCommand === "function");
assert(typeof ListEventTriggers$ === "object");
assert(typeof ListIdentityResolutionJobsCommand === "function");
assert(typeof ListIdentityResolutionJobs$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof ListObjectTypeAttributesCommand === "function");
assert(typeof ListObjectTypeAttributes$ === "object");
assert(typeof ListObjectTypeAttributeValuesCommand === "function");
assert(typeof ListObjectTypeAttributeValues$ === "object");
assert(typeof ListProfileAttributeValuesCommand === "function");
assert(typeof ListProfileAttributeValues$ === "object");
assert(typeof ListProfileHistoryRecordsCommand === "function");
assert(typeof ListProfileHistoryRecords$ === "object");
assert(typeof ListProfileObjectsCommand === "function");
assert(typeof ListProfileObjects$ === "object");
assert(typeof ListProfileObjectTypesCommand === "function");
assert(typeof ListProfileObjectTypes$ === "object");
assert(typeof ListProfileObjectTypeTemplatesCommand === "function");
assert(typeof ListProfileObjectTypeTemplates$ === "object");
assert(typeof ListRecommenderRecipesCommand === "function");
assert(typeof ListRecommenderRecipes$ === "object");
assert(typeof ListRecommendersCommand === "function");
assert(typeof ListRecommenders$ === "object");
assert(typeof ListRuleBasedMatchesCommand === "function");
assert(typeof ListRuleBasedMatches$ === "object");
assert(typeof ListSegmentDefinitionsCommand === "function");
assert(typeof ListSegmentDefinitions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUploadJobsCommand === "function");
assert(typeof ListUploadJobs$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof MergeProfilesCommand === "function");
assert(typeof MergeProfiles$ === "object");
assert(typeof PutDomainObjectTypeCommand === "function");
assert(typeof PutDomainObjectType$ === "object");
assert(typeof PutIntegrationCommand === "function");
assert(typeof PutIntegration$ === "object");
assert(typeof PutProfileObjectCommand === "function");
assert(typeof PutProfileObject$ === "object");
assert(typeof PutProfileObjectTypeCommand === "function");
assert(typeof PutProfileObjectType$ === "object");
assert(typeof SearchProfilesCommand === "function");
assert(typeof SearchProfiles$ === "object");
assert(typeof StartRecommenderCommand === "function");
assert(typeof StartRecommender$ === "object");
assert(typeof StartUploadJobCommand === "function");
assert(typeof StartUploadJob$ === "object");
assert(typeof StopRecommenderCommand === "function");
assert(typeof StopRecommender$ === "object");
assert(typeof StopUploadJobCommand === "function");
assert(typeof StopUploadJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCalculatedAttributeDefinitionCommand === "function");
assert(typeof UpdateCalculatedAttributeDefinition$ === "object");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomain$ === "object");
assert(typeof UpdateDomainLayoutCommand === "function");
assert(typeof UpdateDomainLayout$ === "object");
assert(typeof UpdateEventTriggerCommand === "function");
assert(typeof UpdateEventTrigger$ === "object");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateProfile$ === "object");
assert(typeof UpdateRecommenderCommand === "function");
assert(typeof UpdateRecommender$ === "object");
// structural schemas
assert(typeof AdditionalSearchKey$ === "object");
assert(typeof AddProfileKeyRequest$ === "object");
assert(typeof AddProfileKeyResponse$ === "object");
assert(typeof Address$ === "object");
assert(typeof AddressDimension$ === "object");
assert(typeof AppflowIntegration$ === "object");
assert(typeof AppflowIntegrationWorkflowAttributes$ === "object");
assert(typeof AppflowIntegrationWorkflowMetrics$ === "object");
assert(typeof AppflowIntegrationWorkflowStep$ === "object");
assert(typeof AttributeDetails$ === "object");
assert(typeof AttributeDimension$ === "object");
assert(typeof AttributeItem$ === "object");
assert(typeof AttributeTypesSelector$ === "object");
assert(typeof AttributeValueItem$ === "object");
assert(typeof AutoMerging$ === "object");
assert(typeof Batch$ === "object");
assert(typeof BatchGetCalculatedAttributeForProfileError$ === "object");
assert(typeof BatchGetCalculatedAttributeForProfileRequest$ === "object");
assert(typeof BatchGetCalculatedAttributeForProfileResponse$ === "object");
assert(typeof BatchGetProfileError$ === "object");
assert(typeof BatchGetProfileRequest$ === "object");
assert(typeof BatchGetProfileResponse$ === "object");
assert(typeof CalculatedAttributeDimension$ === "object");
assert(typeof CalculatedAttributeValue$ === "object");
assert(typeof CatalogItem$ === "object");
assert(typeof ConditionOverrides$ === "object");
assert(typeof Conditions$ === "object");
assert(typeof ConflictResolution$ === "object");
assert(typeof ConnectorOperator$ === "object");
assert(typeof Consolidation$ === "object");
assert(typeof ContactPreference$ === "object");
assert(typeof CreateCalculatedAttributeDefinitionRequest$ === "object");
assert(typeof CreateCalculatedAttributeDefinitionResponse$ === "object");
assert(typeof CreateDomainLayoutRequest$ === "object");
assert(typeof CreateDomainLayoutResponse$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof CreateEventStreamRequest$ === "object");
assert(typeof CreateEventStreamResponse$ === "object");
assert(typeof CreateEventTriggerRequest$ === "object");
assert(typeof CreateEventTriggerResponse$ === "object");
assert(typeof CreateIntegrationWorkflowRequest$ === "object");
assert(typeof CreateIntegrationWorkflowResponse$ === "object");
assert(typeof CreateProfileRequest$ === "object");
assert(typeof CreateProfileResponse$ === "object");
assert(typeof CreateRecommenderRequest$ === "object");
assert(typeof CreateRecommenderResponse$ === "object");
assert(typeof CreateSegmentDefinitionRequest$ === "object");
assert(typeof CreateSegmentDefinitionResponse$ === "object");
assert(typeof CreateSegmentEstimateRequest$ === "object");
assert(typeof CreateSegmentEstimateResponse$ === "object");
assert(typeof CreateSegmentSnapshotRequest$ === "object");
assert(typeof CreateSegmentSnapshotResponse$ === "object");
assert(typeof CreateUploadJobRequest$ === "object");
assert(typeof CreateUploadJobResponse$ === "object");
assert(typeof DataStoreRequest$ === "object");
assert(typeof DataStoreResponse$ === "object");
assert(typeof DateDimension$ === "object");
assert(typeof DeleteCalculatedAttributeDefinitionRequest$ === "object");
assert(typeof DeleteCalculatedAttributeDefinitionResponse$ === "object");
assert(typeof DeleteDomainLayoutRequest$ === "object");
assert(typeof DeleteDomainLayoutResponse$ === "object");
assert(typeof DeleteDomainObjectTypeRequest$ === "object");
assert(typeof DeleteDomainObjectTypeResponse$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResponse$ === "object");
assert(typeof DeleteEventStreamRequest$ === "object");
assert(typeof DeleteEventStreamResponse$ === "object");
assert(typeof DeleteEventTriggerRequest$ === "object");
assert(typeof DeleteEventTriggerResponse$ === "object");
assert(typeof DeleteIntegrationRequest$ === "object");
assert(typeof DeleteIntegrationResponse$ === "object");
assert(typeof DeleteProfileKeyRequest$ === "object");
assert(typeof DeleteProfileKeyResponse$ === "object");
assert(typeof DeleteProfileObjectRequest$ === "object");
assert(typeof DeleteProfileObjectResponse$ === "object");
assert(typeof DeleteProfileObjectTypeRequest$ === "object");
assert(typeof DeleteProfileObjectTypeResponse$ === "object");
assert(typeof DeleteProfileRequest$ === "object");
assert(typeof DeleteProfileResponse$ === "object");
assert(typeof DeleteRecommenderRequest$ === "object");
assert(typeof DeleteRecommenderResponse$ === "object");
assert(typeof DeleteSegmentDefinitionRequest$ === "object");
assert(typeof DeleteSegmentDefinitionResponse$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DeleteWorkflowResponse$ === "object");
assert(typeof DestinationSummary$ === "object");
assert(typeof DetectedProfileObjectType$ === "object");
assert(typeof DetectProfileObjectTypeRequest$ === "object");
assert(typeof DetectProfileObjectTypeResponse$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DomainObjectTypeField$ === "object");
assert(typeof DomainObjectTypesListItem$ === "object");
assert(typeof DomainStats$ === "object");
assert(typeof EngagementPreferences$ === "object");
assert(typeof EventParameters$ === "object");
assert(typeof EventsConfig$ === "object");
assert(typeof EventStreamDestinationDetails$ === "object");
assert(typeof EventStreamSummary$ === "object");
assert(typeof EventTriggerCondition$ === "object");
assert(typeof EventTriggerDimension$ === "object");
assert(typeof EventTriggerLimits$ === "object");
assert(typeof EventTriggerSummaryItem$ === "object");
assert(typeof ExportingConfig$ === "object");
assert(typeof ExportingLocation$ === "object");
assert(typeof ExtraLengthValueProfileDimension$ === "object");
assert(typeof FieldSourceProfileIds$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterAttributeDimension$ === "object");
assert(typeof FilterDimension$ === "object");
assert(typeof FilterGroup$ === "object");
assert(typeof FlowDefinition$ === "object");
assert(typeof FoundByKeyValue$ === "object");
assert(typeof GetAutoMergingPreviewRequest$ === "object");
assert(typeof GetAutoMergingPreviewResponse$ === "object");
assert(typeof GetCalculatedAttributeDefinitionRequest$ === "object");
assert(typeof GetCalculatedAttributeDefinitionResponse$ === "object");
assert(typeof GetCalculatedAttributeForProfileRequest$ === "object");
assert(typeof GetCalculatedAttributeForProfileResponse$ === "object");
assert(typeof GetDomainLayoutRequest$ === "object");
assert(typeof GetDomainLayoutResponse$ === "object");
assert(typeof GetDomainObjectTypeRequest$ === "object");
assert(typeof GetDomainObjectTypeResponse$ === "object");
assert(typeof GetDomainRequest$ === "object");
assert(typeof GetDomainResponse$ === "object");
assert(typeof GetEventStreamRequest$ === "object");
assert(typeof GetEventStreamResponse$ === "object");
assert(typeof GetEventTriggerRequest$ === "object");
assert(typeof GetEventTriggerResponse$ === "object");
assert(typeof GetIdentityResolutionJobRequest$ === "object");
assert(typeof GetIdentityResolutionJobResponse$ === "object");
assert(typeof GetIntegrationRequest$ === "object");
assert(typeof GetIntegrationResponse$ === "object");
assert(typeof GetMatchesRequest$ === "object");
assert(typeof GetMatchesResponse$ === "object");
assert(typeof GetObjectTypeAttributeStatisticsPercentiles$ === "object");
assert(typeof GetObjectTypeAttributeStatisticsRequest$ === "object");
assert(typeof GetObjectTypeAttributeStatisticsResponse$ === "object");
assert(typeof GetObjectTypeAttributeStatisticsStats$ === "object");
assert(typeof GetProfileHistoryRecordRequest$ === "object");
assert(typeof GetProfileHistoryRecordResponse$ === "object");
assert(typeof GetProfileObjectTypeRequest$ === "object");
assert(typeof GetProfileObjectTypeResponse$ === "object");
assert(typeof GetProfileObjectTypeTemplateRequest$ === "object");
assert(typeof GetProfileObjectTypeTemplateResponse$ === "object");
assert(typeof GetProfileRecommendationsRequest$ === "object");
assert(typeof GetProfileRecommendationsResponse$ === "object");
assert(typeof GetRecommenderRequest$ === "object");
assert(typeof GetRecommenderResponse$ === "object");
assert(typeof GetSegmentDefinitionRequest$ === "object");
assert(typeof GetSegmentDefinitionResponse$ === "object");
assert(typeof GetSegmentEstimateRequest$ === "object");
assert(typeof GetSegmentEstimateResponse$ === "object");
assert(typeof GetSegmentMembershipRequest$ === "object");
assert(typeof GetSegmentMembershipResponse$ === "object");
assert(typeof GetSegmentSnapshotRequest$ === "object");
assert(typeof GetSegmentSnapshotResponse$ === "object");
assert(typeof GetSimilarProfilesRequest$ === "object");
assert(typeof GetSimilarProfilesResponse$ === "object");
assert(typeof GetUploadJobPathRequest$ === "object");
assert(typeof GetUploadJobPathResponse$ === "object");
assert(typeof GetUploadJobRequest$ === "object");
assert(typeof GetUploadJobResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowStepsRequest$ === "object");
assert(typeof GetWorkflowStepsResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof IdentityResolutionJob$ === "object");
assert(typeof IncrementalPullConfig$ === "object");
assert(typeof IntegrationConfig$ === "object");
assert(typeof JobSchedule$ === "object");
assert(typeof JobStats$ === "object");
assert(typeof LayoutItem$ === "object");
assert(typeof ListAccountIntegrationsRequest$ === "object");
assert(typeof ListAccountIntegrationsResponse$ === "object");
assert(typeof ListCalculatedAttributeDefinitionItem$ === "object");
assert(typeof ListCalculatedAttributeDefinitionsRequest$ === "object");
assert(typeof ListCalculatedAttributeDefinitionsResponse$ === "object");
assert(typeof ListCalculatedAttributeForProfileItem$ === "object");
assert(typeof ListCalculatedAttributesForProfileRequest$ === "object");
assert(typeof ListCalculatedAttributesForProfileResponse$ === "object");
assert(typeof ListDomainItem$ === "object");
assert(typeof ListDomainLayoutsRequest$ === "object");
assert(typeof ListDomainLayoutsResponse$ === "object");
assert(typeof ListDomainObjectTypesRequest$ === "object");
assert(typeof ListDomainObjectTypesResponse$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListEventStreamsRequest$ === "object");
assert(typeof ListEventStreamsResponse$ === "object");
assert(typeof ListEventTriggersRequest$ === "object");
assert(typeof ListEventTriggersResponse$ === "object");
assert(typeof ListIdentityResolutionJobsRequest$ === "object");
assert(typeof ListIdentityResolutionJobsResponse$ === "object");
assert(typeof ListIntegrationItem$ === "object");
assert(typeof ListIntegrationsRequest$ === "object");
assert(typeof ListIntegrationsResponse$ === "object");
assert(typeof ListObjectTypeAttributeItem$ === "object");
assert(typeof ListObjectTypeAttributesRequest$ === "object");
assert(typeof ListObjectTypeAttributesResponse$ === "object");
assert(typeof ListObjectTypeAttributeValuesItem$ === "object");
assert(typeof ListObjectTypeAttributeValuesRequest$ === "object");
assert(typeof ListObjectTypeAttributeValuesResponse$ === "object");
assert(typeof ListProfileHistoryRecordsRequest$ === "object");
assert(typeof ListProfileHistoryRecordsResponse$ === "object");
assert(typeof ListProfileObjectsItem$ === "object");
assert(typeof ListProfileObjectsRequest$ === "object");
assert(typeof ListProfileObjectsResponse$ === "object");
assert(typeof ListProfileObjectTypeItem$ === "object");
assert(typeof ListProfileObjectTypesRequest$ === "object");
assert(typeof ListProfileObjectTypesResponse$ === "object");
assert(typeof ListProfileObjectTypeTemplateItem$ === "object");
assert(typeof ListProfileObjectTypeTemplatesRequest$ === "object");
assert(typeof ListProfileObjectTypeTemplatesResponse$ === "object");
assert(typeof ListRecommenderRecipesRequest$ === "object");
assert(typeof ListRecommenderRecipesResponse$ === "object");
assert(typeof ListRecommendersRequest$ === "object");
assert(typeof ListRecommendersResponse$ === "object");
assert(typeof ListRuleBasedMatchesRequest$ === "object");
assert(typeof ListRuleBasedMatchesResponse$ === "object");
assert(typeof ListSegmentDefinitionsRequest$ === "object");
assert(typeof ListSegmentDefinitionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUploadJobsRequest$ === "object");
assert(typeof ListUploadJobsResponse$ === "object");
assert(typeof ListWorkflowsItem$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof MarketoSourceProperties$ === "object");
assert(typeof MatchingRequest$ === "object");
assert(typeof MatchingResponse$ === "object");
assert(typeof MatchingRule$ === "object");
assert(typeof MatchItem$ === "object");
assert(typeof MergeProfilesRequest$ === "object");
assert(typeof MergeProfilesResponse$ === "object");
assert(typeof ObjectAttribute$ === "object");
assert(typeof ObjectFilter$ === "object");
assert(typeof ObjectTypeField$ === "object");
assert(typeof ObjectTypeKey$ === "object");
assert(typeof Period$ === "object");
assert(typeof Profile$ === "object");
assert(typeof ProfileAttributes$ === "object");
assert(typeof ProfileAttributeValuesRequest$ === "object");
assert(typeof ProfileAttributeValuesResponse$ === "object");
assert(typeof ProfileDimension$ === "object");
assert(typeof ProfileHistoryRecord$ === "object");
assert(typeof ProfileQueryFailures$ === "object");
assert(typeof ProfileQueryResult$ === "object");
assert(typeof ProfileTypeDimension$ === "object");
assert(typeof PutDomainObjectTypeRequest$ === "object");
assert(typeof PutDomainObjectTypeResponse$ === "object");
assert(typeof PutIntegrationRequest$ === "object");
assert(typeof PutIntegrationResponse$ === "object");
assert(typeof PutProfileObjectRequest$ === "object");
assert(typeof PutProfileObjectResponse$ === "object");
assert(typeof PutProfileObjectTypeRequest$ === "object");
assert(typeof PutProfileObjectTypeResponse$ === "object");
assert(typeof Range$ === "object");
assert(typeof RangeOverride$ === "object");
assert(typeof Readiness$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommenderConfig$ === "object");
assert(typeof RecommenderRecipe$ === "object");
assert(typeof RecommenderSummary$ === "object");
assert(typeof RecommenderUpdate$ === "object");
assert(typeof ResultsSummary$ === "object");
assert(typeof RuleBasedMatchingRequest$ === "object");
assert(typeof RuleBasedMatchingResponse$ === "object");
assert(typeof S3ExportingConfig$ === "object");
assert(typeof S3ExportingLocation$ === "object");
assert(typeof S3SourceProperties$ === "object");
assert(typeof SalesforceSourceProperties$ === "object");
assert(typeof ScheduledTriggerProperties$ === "object");
assert(typeof SearchProfilesRequest$ === "object");
assert(typeof SearchProfilesResponse$ === "object");
assert(typeof SegmentDefinitionItem$ === "object");
assert(typeof SegmentGroup$ === "object");
assert(typeof SegmentGroupStructure$ === "object");
assert(typeof ServiceNowSourceProperties$ === "object");
assert(typeof SourceConnectorProperties$ === "object");
assert(typeof SourceFlowConfig$ === "object");
assert(typeof SourceSegment$ === "object");
assert(typeof StartRecommenderRequest$ === "object");
assert(typeof StartRecommenderResponse$ === "object");
assert(typeof StartUploadJobRequest$ === "object");
assert(typeof StartUploadJobResponse$ === "object");
assert(typeof StopRecommenderRequest$ === "object");
assert(typeof StopRecommenderResponse$ === "object");
assert(typeof StopUploadJobRequest$ === "object");
assert(typeof StopUploadJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Task$ === "object");
assert(typeof Threshold$ === "object");
assert(typeof TrainingMetrics$ === "object");
assert(typeof TriggerConfig$ === "object");
assert(typeof TriggerProperties$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAddress$ === "object");
assert(typeof UpdateCalculatedAttributeDefinitionRequest$ === "object");
assert(typeof UpdateCalculatedAttributeDefinitionResponse$ === "object");
assert(typeof UpdateDomainLayoutRequest$ === "object");
assert(typeof UpdateDomainLayoutResponse$ === "object");
assert(typeof UpdateDomainRequest$ === "object");
assert(typeof UpdateDomainResponse$ === "object");
assert(typeof UpdateEventTriggerRequest$ === "object");
assert(typeof UpdateEventTriggerResponse$ === "object");
assert(typeof UpdateProfileRequest$ === "object");
assert(typeof UpdateProfileResponse$ === "object");
assert(typeof UpdateRecommenderRequest$ === "object");
assert(typeof UpdateRecommenderResponse$ === "object");
assert(typeof UploadJobItem$ === "object");
assert(typeof ValueRange$ === "object");
assert(typeof WorkflowAttributes$ === "object");
assert(typeof WorkflowMetrics$ === "object");
assert(typeof WorkflowStepItem$ === "object");
assert(typeof ZendeskSourceProperties$ === "object");
// enums
assert(typeof ActionType === "object");
assert(typeof AttributeDimensionType === "object");
assert(typeof AttributeMatchingModel === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ConflictResolvingModel === "object");
assert(typeof ContactType === "object");
assert(typeof ContentType === "object");
assert(typeof DataFormat === "object");
assert(typeof DataPullMode === "object");
assert(typeof DateDimensionType === "object");
assert(typeof EstimateStatus === "object");
assert(typeof EventStreamDestinationStatus === "object");
assert(typeof EventStreamState === "object");
assert(typeof EventTriggerLogicalOperator === "object");
assert(typeof FeatureType === "object");
assert(typeof FieldContentType === "object");
assert(typeof FilterDimensionType === "object");
assert(typeof Gender === "object");
assert(typeof IdentityResolutionJobStatus === "object");
assert(typeof Include === "object");
assert(typeof IncludeOptions === "object");
assert(typeof JobScheduleDayOfTheWeek === "object");
assert(typeof LayoutType === "object");
assert(typeof LogicalOperator === "object");
assert(typeof MarketoConnectorOperator === "object");
assert(typeof MatchType === "object");
assert(typeof Operator === "object");
assert(typeof OperatorPropertiesKeys === "object");
assert(typeof PartyType === "object");
assert(typeof PeriodUnit === "object");
assert(typeof ProfileType === "object");
assert(typeof ProfileTypeDimensionType === "object");
assert(typeof QueryResult === "object");
assert(typeof RangeUnit === "object");
assert(typeof ReadinessStatus === "object");
assert(typeof RecommenderRecipeName === "object");
assert(typeof RecommenderStatus === "object");
assert(typeof RuleBasedMatchingStatus === "object");
assert(typeof S3ConnectorOperator === "object");
assert(typeof SalesforceConnectorOperator === "object");
assert(typeof Scope === "object");
assert(typeof SegmentSnapshotStatus === "object");
assert(typeof SegmentType === "object");
assert(typeof ServiceNowConnectorOperator === "object");
assert(typeof SourceConnectorType === "object");
assert(typeof StandardIdentifier === "object");
assert(typeof Statistic === "object");
assert(typeof Status === "object");
assert(typeof StatusReason === "object");
assert(typeof StringDimensionType === "object");
assert(typeof TaskType === "object");
assert(typeof TrainingMetricName === "object");
assert(typeof TriggerType === "object");
assert(typeof Type === "object");
assert(typeof Unit === "object");
assert(typeof UploadJobStatus === "object");
assert(typeof WorkflowType === "object");
assert(typeof ZendeskConnectorOperator === "object");
// errors
assert(AccessDeniedException.prototype instanceof CustomerProfilesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof CustomerProfilesServiceException);
assert(typeof BadRequestException$ === "object");
assert(InternalServerException.prototype instanceof CustomerProfilesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CustomerProfilesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof CustomerProfilesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(CustomerProfilesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetSimilarProfiles === "function");
assert(typeof paginateListDomainLayouts === "function");
assert(typeof paginateListDomainObjectTypes === "function");
assert(typeof paginateListEventStreams === "function");
assert(typeof paginateListEventTriggers === "function");
assert(typeof paginateListObjectTypeAttributes === "function");
assert(typeof paginateListRecommenderRecipes === "function");
assert(typeof paginateListRecommenders === "function");
assert(typeof paginateListRuleBasedMatches === "function");
assert(typeof paginateListSegmentDefinitions === "function");
assert(typeof paginateListUploadJobs === "function");
console.log(`CustomerProfiles index test passed.`);
