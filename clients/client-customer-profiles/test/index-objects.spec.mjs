import {
  ActionType,
  AddProfileKeyCommand,
  AttributeDimensionType,
  AttributeMatchingModel,
  BatchGetCalculatedAttributeForProfileCommand,
  BatchGetProfileCommand,
  ComparisonOperator,
  ConflictResolvingModel,
  ContactType,
  ContentType,
  CreateCalculatedAttributeDefinitionCommand,
  CreateDomainCommand,
  CreateDomainLayoutCommand,
  CreateEventStreamCommand,
  CreateEventTriggerCommand,
  CreateIntegrationWorkflowCommand,
  CreateProfileCommand,
  CreateRecommenderCommand,
  CreateSegmentDefinitionCommand,
  CreateSegmentEstimateCommand,
  CreateSegmentSnapshotCommand,
  CreateUploadJobCommand,
  CustomerProfiles,
  CustomerProfilesClient,
  CustomerProfilesServiceException,
  DataFormat,
  DataPullMode,
  DateDimensionType,
  DeleteCalculatedAttributeDefinitionCommand,
  DeleteDomainCommand,
  DeleteDomainLayoutCommand,
  DeleteDomainObjectTypeCommand,
  DeleteEventStreamCommand,
  DeleteEventTriggerCommand,
  DeleteIntegrationCommand,
  DeleteProfileCommand,
  DeleteProfileKeyCommand,
  DeleteProfileObjectCommand,
  DeleteProfileObjectTypeCommand,
  DeleteRecommenderCommand,
  DeleteSegmentDefinitionCommand,
  DeleteWorkflowCommand,
  DetectProfileObjectTypeCommand,
  EstimateStatus,
  EventStreamDestinationStatus,
  EventStreamState,
  EventTriggerLogicalOperator,
  FeatureType,
  FieldContentType,
  FilterDimensionType,
  Gender,
  GetAutoMergingPreviewCommand,
  GetCalculatedAttributeDefinitionCommand,
  GetCalculatedAttributeForProfileCommand,
  GetDomainCommand,
  GetDomainLayoutCommand,
  GetDomainObjectTypeCommand,
  GetEventStreamCommand,
  GetEventTriggerCommand,
  GetIdentityResolutionJobCommand,
  GetIntegrationCommand,
  GetMatchesCommand,
  GetObjectTypeAttributeStatisticsCommand,
  GetProfileHistoryRecordCommand,
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeTemplateCommand,
  GetProfileRecommendationsCommand,
  GetRecommenderCommand,
  GetSegmentDefinitionCommand,
  GetSegmentEstimateCommand,
  GetSegmentMembershipCommand,
  GetSegmentSnapshotCommand,
  GetSimilarProfilesCommand,
  GetUploadJobCommand,
  GetUploadJobPathCommand,
  GetWorkflowCommand,
  GetWorkflowStepsCommand,
  IdentityResolutionJobStatus,
  Include,
  IncludeOptions,
  JobScheduleDayOfTheWeek,
  LayoutType,
  ListAccountIntegrationsCommand,
  ListCalculatedAttributeDefinitionsCommand,
  ListCalculatedAttributesForProfileCommand,
  ListDomainLayoutsCommand,
  ListDomainObjectTypesCommand,
  ListDomainsCommand,
  ListEventStreamsCommand,
  ListEventTriggersCommand,
  ListIdentityResolutionJobsCommand,
  ListIntegrationsCommand,
  ListObjectTypeAttributeValuesCommand,
  ListObjectTypeAttributesCommand,
  ListProfileAttributeValuesCommand,
  ListProfileHistoryRecordsCommand,
  ListProfileObjectTypeTemplatesCommand,
  ListProfileObjectTypesCommand,
  ListProfileObjectsCommand,
  ListRecommenderRecipesCommand,
  ListRecommendersCommand,
  ListRuleBasedMatchesCommand,
  ListSegmentDefinitionsCommand,
  ListTagsForResourceCommand,
  ListUploadJobsCommand,
  ListWorkflowsCommand,
  LogicalOperator,
  MarketoConnectorOperator,
  MatchType,
  MergeProfilesCommand,
  Operator,
  OperatorPropertiesKeys,
  PartyType,
  PeriodUnit,
  ProfileType,
  ProfileTypeDimensionType,
  PutDomainObjectTypeCommand,
  PutIntegrationCommand,
  PutProfileObjectCommand,
  PutProfileObjectTypeCommand,
  QueryResult,
  RangeUnit,
  ReadinessStatus,
  RecommenderRecipeName,
  RecommenderStatus,
  RuleBasedMatchingStatus,
  S3ConnectorOperator,
  SalesforceConnectorOperator,
  Scope,
  SearchProfilesCommand,
  SegmentSnapshotStatus,
  SegmentType,
  ServiceNowConnectorOperator,
  SourceConnectorType,
  StandardIdentifier,
  StartRecommenderCommand,
  StartUploadJobCommand,
  Statistic,
  Status,
  StatusReason,
  StopRecommenderCommand,
  StopUploadJobCommand,
  StringDimensionType,
  TagResourceCommand,
  TaskType,
  TrainingMetricName,
  TriggerType,
  Type,
  Unit,
  UntagResourceCommand,
  UpdateCalculatedAttributeDefinitionCommand,
  UpdateDomainCommand,
  UpdateDomainLayoutCommand,
  UpdateEventTriggerCommand,
  UpdateProfileCommand,
  UpdateRecommenderCommand,
  UploadJobStatus,
  WorkflowType,
  ZendeskConnectorOperator,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CustomerProfilesClient === "function");
assert(typeof CustomerProfiles === "function");
// commands
assert(typeof AddProfileKeyCommand === "function");
assert(typeof BatchGetCalculatedAttributeForProfileCommand === "function");
assert(typeof BatchGetProfileCommand === "function");
assert(typeof CreateCalculatedAttributeDefinitionCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomainLayoutCommand === "function");
assert(typeof CreateEventStreamCommand === "function");
assert(typeof CreateEventTriggerCommand === "function");
assert(typeof CreateIntegrationWorkflowCommand === "function");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateRecommenderCommand === "function");
assert(typeof CreateSegmentDefinitionCommand === "function");
assert(typeof CreateSegmentEstimateCommand === "function");
assert(typeof CreateSegmentSnapshotCommand === "function");
assert(typeof CreateUploadJobCommand === "function");
assert(typeof DeleteCalculatedAttributeDefinitionCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomainLayoutCommand === "function");
assert(typeof DeleteDomainObjectTypeCommand === "function");
assert(typeof DeleteEventStreamCommand === "function");
assert(typeof DeleteEventTriggerCommand === "function");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfileKeyCommand === "function");
assert(typeof DeleteProfileObjectCommand === "function");
assert(typeof DeleteProfileObjectTypeCommand === "function");
assert(typeof DeleteRecommenderCommand === "function");
assert(typeof DeleteSegmentDefinitionCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DetectProfileObjectTypeCommand === "function");
assert(typeof GetAutoMergingPreviewCommand === "function");
assert(typeof GetCalculatedAttributeDefinitionCommand === "function");
assert(typeof GetCalculatedAttributeForProfileCommand === "function");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomainLayoutCommand === "function");
assert(typeof GetDomainObjectTypeCommand === "function");
assert(typeof GetEventStreamCommand === "function");
assert(typeof GetEventTriggerCommand === "function");
assert(typeof GetIdentityResolutionJobCommand === "function");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetMatchesCommand === "function");
assert(typeof GetObjectTypeAttributeStatisticsCommand === "function");
assert(typeof GetProfileHistoryRecordCommand === "function");
assert(typeof GetProfileObjectTypeCommand === "function");
assert(typeof GetProfileObjectTypeTemplateCommand === "function");
assert(typeof GetProfileRecommendationsCommand === "function");
assert(typeof GetRecommenderCommand === "function");
assert(typeof GetSegmentDefinitionCommand === "function");
assert(typeof GetSegmentEstimateCommand === "function");
assert(typeof GetSegmentMembershipCommand === "function");
assert(typeof GetSegmentSnapshotCommand === "function");
assert(typeof GetSimilarProfilesCommand === "function");
assert(typeof GetUploadJobCommand === "function");
assert(typeof GetUploadJobPathCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowStepsCommand === "function");
assert(typeof ListAccountIntegrationsCommand === "function");
assert(typeof ListCalculatedAttributeDefinitionsCommand === "function");
assert(typeof ListCalculatedAttributesForProfileCommand === "function");
assert(typeof ListDomainLayoutsCommand === "function");
assert(typeof ListDomainObjectTypesCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListEventStreamsCommand === "function");
assert(typeof ListEventTriggersCommand === "function");
assert(typeof ListIdentityResolutionJobsCommand === "function");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListObjectTypeAttributesCommand === "function");
assert(typeof ListObjectTypeAttributeValuesCommand === "function");
assert(typeof ListProfileAttributeValuesCommand === "function");
assert(typeof ListProfileHistoryRecordsCommand === "function");
assert(typeof ListProfileObjectsCommand === "function");
assert(typeof ListProfileObjectTypesCommand === "function");
assert(typeof ListProfileObjectTypeTemplatesCommand === "function");
assert(typeof ListRecommenderRecipesCommand === "function");
assert(typeof ListRecommendersCommand === "function");
assert(typeof ListRuleBasedMatchesCommand === "function");
assert(typeof ListSegmentDefinitionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUploadJobsCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof MergeProfilesCommand === "function");
assert(typeof PutDomainObjectTypeCommand === "function");
assert(typeof PutIntegrationCommand === "function");
assert(typeof PutProfileObjectCommand === "function");
assert(typeof PutProfileObjectTypeCommand === "function");
assert(typeof SearchProfilesCommand === "function");
assert(typeof StartRecommenderCommand === "function");
assert(typeof StartUploadJobCommand === "function");
assert(typeof StopRecommenderCommand === "function");
assert(typeof StopUploadJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCalculatedAttributeDefinitionCommand === "function");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomainLayoutCommand === "function");
assert(typeof UpdateEventTriggerCommand === "function");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateRecommenderCommand === "function");
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
