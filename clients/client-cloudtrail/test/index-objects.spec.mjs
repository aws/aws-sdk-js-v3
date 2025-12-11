import {
  AccessDeniedException,
  AccountHasOngoingImportException,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountRegisteredException,
  AddTagsCommand,
  BillingMode,
  CancelQueryCommand,
  CannotDelegateManagementAccountException,
  ChannelARNInvalidException,
  ChannelAlreadyExistsException,
  ChannelExistsForEDSException,
  ChannelMaxLimitExceededException,
  ChannelNotFoundException,
  CloudTrail,
  CloudTrailARNInvalidException,
  CloudTrailAccessNotEnabledException,
  CloudTrailClient,
  CloudTrailInvalidClientTokenIdException,
  CloudTrailServiceException,
  CloudWatchLogsDeliveryUnavailableException,
  ConcurrentModificationException,
  ConflictException,
  CreateChannelCommand,
  CreateDashboardCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DashboardStatus,
  DashboardType,
  DelegatedAdminAccountLimitExceededException,
  DeleteChannelCommand,
  DeleteDashboardCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeliveryStatus,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  DestinationType,
  DisableFederationCommand,
  EnableFederationCommand,
  EventCategory,
  EventCategoryAggregation,
  EventDataStoreARNInvalidException,
  EventDataStoreAlreadyExistsException,
  EventDataStoreFederationEnabledException,
  EventDataStoreHasOngoingImportException,
  EventDataStoreMaxLimitExceededException,
  EventDataStoreNotFoundException,
  EventDataStoreStatus,
  EventDataStoreTerminationProtectedException,
  FederationStatus,
  GenerateQueryCommand,
  GenerateResponseException,
  GetChannelCommand,
  GetDashboardCommand,
  GetEventConfigurationCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ImportFailureStatus,
  ImportNotFoundException,
  ImportStatus,
  InactiveEventDataStoreException,
  InactiveQueryException,
  InsightNotEnabledException,
  InsightType,
  InsightsMetricDataType,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException,
  InsufficientIAMAccessPermissionException,
  InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException,
  InvalidDateRangeException,
  InvalidEventCategoryException,
  InvalidEventDataStoreCategoryException,
  InvalidEventDataStoreStatusException,
  InvalidEventSelectorsException,
  InvalidHomeRegionException,
  InvalidImportSourceException,
  InvalidInsightSelectorsException,
  InvalidKmsKeyIdException,
  InvalidLookupAttributesException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidQueryStatementException,
  InvalidQueryStatusException,
  InvalidS3BucketNameException,
  InvalidS3PrefixException,
  InvalidSnsTopicNameException,
  InvalidSourceException,
  InvalidTagParameterException,
  InvalidTimeRangeException,
  InvalidTokenException,
  InvalidTrailNameException,
  KmsException,
  KmsKeyDisabledException,
  KmsKeyNotFoundException,
  ListChannelsCommand,
  ListDashboardsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListInsightsDataCommand,
  ListInsightsDataDimensionKey,
  ListInsightsDataType,
  ListInsightsMetricDataCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupAttributeKey,
  LookupEventsCommand,
  MaxConcurrentQueriesException,
  MaxEventSize,
  MaximumNumberOfTrailsExceededException,
  NoManagementAccountSLRExistsException,
  NotOrganizationManagementAccountException,
  NotOrganizationMasterAccountException,
  OperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException,
  PutEventConfigurationCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  QueryIdNotFoundException,
  QueryStatus,
  ReadWriteType,
  RefreshScheduleFrequencyUnit,
  RefreshScheduleStatus,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  ResourceARNNotValidException,
  ResourceNotFoundException,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotValidException,
  ResourceTypeNotSupportedException,
  RestoreEventDataStoreCommand,
  S3BucketDoesNotExistException,
  SearchSampleQueriesCommand,
  ServiceQuotaExceededException,
  SourceEventCategory,
  StartDashboardRefreshCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  TagsLimitExceededException,
  Template,
  ThrottlingException,
  TrailAlreadyExistsException,
  TrailNotFoundException,
  TrailNotProvidedException,
  Type,
  UnsupportedOperationException,
  UpdateChannelCommand,
  UpdateDashboardCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
  paginateGetQueryResults,
  paginateListChannels,
  paginateListEventDataStores,
  paginateListImportFailures,
  paginateListImports,
  paginateListInsightsData,
  paginateListInsightsMetricData,
  paginateListPublicKeys,
  paginateListQueries,
  paginateListTags,
  paginateListTrails,
  paginateLookupEvents,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudTrailClient === "function");
assert(typeof CloudTrail === "function");
// commands
assert(typeof AddTagsCommand === "function");
assert(typeof CancelQueryCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateDashboardCommand === "function");
assert(typeof CreateEventDataStoreCommand === "function");
assert(typeof CreateTrailCommand === "function");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteDashboardCommand === "function");
assert(typeof DeleteEventDataStoreCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteTrailCommand === "function");
assert(typeof DeregisterOrganizationDelegatedAdminCommand === "function");
assert(typeof DescribeQueryCommand === "function");
assert(typeof DescribeTrailsCommand === "function");
assert(typeof DisableFederationCommand === "function");
assert(typeof EnableFederationCommand === "function");
assert(typeof GenerateQueryCommand === "function");
assert(typeof GetChannelCommand === "function");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetEventConfigurationCommand === "function");
assert(typeof GetEventDataStoreCommand === "function");
assert(typeof GetEventSelectorsCommand === "function");
assert(typeof GetImportCommand === "function");
assert(typeof GetInsightSelectorsCommand === "function");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetTrailCommand === "function");
assert(typeof GetTrailStatusCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListEventDataStoresCommand === "function");
assert(typeof ListImportFailuresCommand === "function");
assert(typeof ListImportsCommand === "function");
assert(typeof ListInsightsDataCommand === "function");
assert(typeof ListInsightsMetricDataCommand === "function");
assert(typeof ListPublicKeysCommand === "function");
assert(typeof ListQueriesCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTrailsCommand === "function");
assert(typeof LookupEventsCommand === "function");
assert(typeof PutEventConfigurationCommand === "function");
assert(typeof PutEventSelectorsCommand === "function");
assert(typeof PutInsightSelectorsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterOrganizationDelegatedAdminCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RestoreEventDataStoreCommand === "function");
assert(typeof SearchSampleQueriesCommand === "function");
assert(typeof StartDashboardRefreshCommand === "function");
assert(typeof StartEventDataStoreIngestionCommand === "function");
assert(typeof StartImportCommand === "function");
assert(typeof StartLoggingCommand === "function");
assert(typeof StartQueryCommand === "function");
assert(typeof StopEventDataStoreIngestionCommand === "function");
assert(typeof StopImportCommand === "function");
assert(typeof StopLoggingCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateDashboardCommand === "function");
assert(typeof UpdateEventDataStoreCommand === "function");
assert(typeof UpdateTrailCommand === "function");
// enums
assert(typeof BillingMode === "object");
assert(typeof DashboardStatus === "object");
assert(typeof DashboardType === "object");
assert(typeof DeliveryStatus === "object");
assert(typeof DestinationType === "object");
assert(typeof EventCategory === "object");
assert(typeof EventCategoryAggregation === "object");
assert(typeof EventDataStoreStatus === "object");
assert(typeof FederationStatus === "object");
assert(typeof ImportFailureStatus === "object");
assert(typeof ImportStatus === "object");
assert(typeof InsightsMetricDataType === "object");
assert(typeof InsightType === "object");
assert(typeof ListInsightsDataDimensionKey === "object");
assert(typeof ListInsightsDataType === "object");
assert(typeof LookupAttributeKey === "object");
assert(typeof MaxEventSize === "object");
assert(typeof QueryStatus === "object");
assert(typeof ReadWriteType === "object");
assert(typeof RefreshScheduleFrequencyUnit === "object");
assert(typeof RefreshScheduleStatus === "object");
assert(typeof SourceEventCategory === "object");
assert(typeof Template === "object");
assert(typeof Type === "object");
// errors
assert(AccessDeniedException.prototype instanceof CloudTrailServiceException);
assert(AccountHasOngoingImportException.prototype instanceof CloudTrailServiceException);
assert(AccountNotFoundException.prototype instanceof CloudTrailServiceException);
assert(AccountNotRegisteredException.prototype instanceof CloudTrailServiceException);
assert(AccountRegisteredException.prototype instanceof CloudTrailServiceException);
assert(CannotDelegateManagementAccountException.prototype instanceof CloudTrailServiceException);
assert(ChannelAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(ChannelARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(ChannelExistsForEDSException.prototype instanceof CloudTrailServiceException);
assert(ChannelMaxLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(ChannelNotFoundException.prototype instanceof CloudTrailServiceException);
assert(CloudTrailAccessNotEnabledException.prototype instanceof CloudTrailServiceException);
assert(CloudTrailARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(CloudTrailInvalidClientTokenIdException.prototype instanceof CloudTrailServiceException);
assert(CloudWatchLogsDeliveryUnavailableException.prototype instanceof CloudTrailServiceException);
assert(ConcurrentModificationException.prototype instanceof CloudTrailServiceException);
assert(ConflictException.prototype instanceof CloudTrailServiceException);
assert(DelegatedAdminAccountLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreFederationEnabledException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreHasOngoingImportException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreMaxLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreNotFoundException.prototype instanceof CloudTrailServiceException);
assert(EventDataStoreTerminationProtectedException.prototype instanceof CloudTrailServiceException);
assert(GenerateResponseException.prototype instanceof CloudTrailServiceException);
assert(ImportNotFoundException.prototype instanceof CloudTrailServiceException);
assert(InactiveEventDataStoreException.prototype instanceof CloudTrailServiceException);
assert(InactiveQueryException.prototype instanceof CloudTrailServiceException);
assert(InsightNotEnabledException.prototype instanceof CloudTrailServiceException);
assert(InsufficientDependencyServiceAccessPermissionException.prototype instanceof CloudTrailServiceException);
assert(InsufficientEncryptionPolicyException.prototype instanceof CloudTrailServiceException);
assert(InsufficientIAMAccessPermissionException.prototype instanceof CloudTrailServiceException);
assert(InsufficientS3BucketPolicyException.prototype instanceof CloudTrailServiceException);
assert(InsufficientSnsTopicPolicyException.prototype instanceof CloudTrailServiceException);
assert(InvalidCloudWatchLogsLogGroupArnException.prototype instanceof CloudTrailServiceException);
assert(InvalidCloudWatchLogsRoleArnException.prototype instanceof CloudTrailServiceException);
assert(InvalidDateRangeException.prototype instanceof CloudTrailServiceException);
assert(InvalidEventCategoryException.prototype instanceof CloudTrailServiceException);
assert(InvalidEventDataStoreCategoryException.prototype instanceof CloudTrailServiceException);
assert(InvalidEventDataStoreStatusException.prototype instanceof CloudTrailServiceException);
assert(InvalidEventSelectorsException.prototype instanceof CloudTrailServiceException);
assert(InvalidHomeRegionException.prototype instanceof CloudTrailServiceException);
assert(InvalidImportSourceException.prototype instanceof CloudTrailServiceException);
assert(InvalidInsightSelectorsException.prototype instanceof CloudTrailServiceException);
assert(InvalidKmsKeyIdException.prototype instanceof CloudTrailServiceException);
assert(InvalidLookupAttributesException.prototype instanceof CloudTrailServiceException);
assert(InvalidMaxResultsException.prototype instanceof CloudTrailServiceException);
assert(InvalidNextTokenException.prototype instanceof CloudTrailServiceException);
assert(InvalidParameterCombinationException.prototype instanceof CloudTrailServiceException);
assert(InvalidParameterException.prototype instanceof CloudTrailServiceException);
assert(InvalidQueryStatementException.prototype instanceof CloudTrailServiceException);
assert(InvalidQueryStatusException.prototype instanceof CloudTrailServiceException);
assert(InvalidS3BucketNameException.prototype instanceof CloudTrailServiceException);
assert(InvalidS3PrefixException.prototype instanceof CloudTrailServiceException);
assert(InvalidSnsTopicNameException.prototype instanceof CloudTrailServiceException);
assert(InvalidSourceException.prototype instanceof CloudTrailServiceException);
assert(InvalidTagParameterException.prototype instanceof CloudTrailServiceException);
assert(InvalidTimeRangeException.prototype instanceof CloudTrailServiceException);
assert(InvalidTokenException.prototype instanceof CloudTrailServiceException);
assert(InvalidTrailNameException.prototype instanceof CloudTrailServiceException);
assert(KmsException.prototype instanceof CloudTrailServiceException);
assert(KmsKeyDisabledException.prototype instanceof CloudTrailServiceException);
assert(KmsKeyNotFoundException.prototype instanceof CloudTrailServiceException);
assert(MaxConcurrentQueriesException.prototype instanceof CloudTrailServiceException);
assert(MaximumNumberOfTrailsExceededException.prototype instanceof CloudTrailServiceException);
assert(NoManagementAccountSLRExistsException.prototype instanceof CloudTrailServiceException);
assert(NotOrganizationManagementAccountException.prototype instanceof CloudTrailServiceException);
assert(NotOrganizationMasterAccountException.prototype instanceof CloudTrailServiceException);
assert(OperationNotPermittedException.prototype instanceof CloudTrailServiceException);
assert(OrganizationNotInAllFeaturesModeException.prototype instanceof CloudTrailServiceException);
assert(OrganizationsNotInUseException.prototype instanceof CloudTrailServiceException);
assert(QueryIdNotFoundException.prototype instanceof CloudTrailServiceException);
assert(ResourceARNNotValidException.prototype instanceof CloudTrailServiceException);
assert(ResourceNotFoundException.prototype instanceof CloudTrailServiceException);
assert(ResourcePolicyNotFoundException.prototype instanceof CloudTrailServiceException);
assert(ResourcePolicyNotValidException.prototype instanceof CloudTrailServiceException);
assert(ResourceTypeNotSupportedException.prototype instanceof CloudTrailServiceException);
assert(S3BucketDoesNotExistException.prototype instanceof CloudTrailServiceException);
assert(ServiceQuotaExceededException.prototype instanceof CloudTrailServiceException);
assert(TagsLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(ThrottlingException.prototype instanceof CloudTrailServiceException);
assert(TrailAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(TrailNotFoundException.prototype instanceof CloudTrailServiceException);
assert(TrailNotProvidedException.prototype instanceof CloudTrailServiceException);
assert(UnsupportedOperationException.prototype instanceof CloudTrailServiceException);
assert(CloudTrailServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResults === "function");
assert(typeof paginateListChannels === "function");
assert(typeof paginateListEventDataStores === "function");
assert(typeof paginateListImportFailures === "function");
assert(typeof paginateListImports === "function");
assert(typeof paginateListInsightsData === "function");
assert(typeof paginateListInsightsMetricData === "function");
assert(typeof paginateListPublicKeys === "function");
assert(typeof paginateListQueries === "function");
assert(typeof paginateListTags === "function");
assert(typeof paginateListTrails === "function");
assert(typeof paginateLookupEvents === "function");
console.log(`CloudTrail index test passed.`);
