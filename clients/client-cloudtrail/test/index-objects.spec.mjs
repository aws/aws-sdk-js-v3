import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountHasOngoingImportException,
  AccountHasOngoingImportException$,
  AccountNotFoundException,
  AccountNotFoundException$,
  AccountNotRegisteredException,
  AccountNotRegisteredException$,
  AccountRegisteredException,
  AccountRegisteredException$,
  AddTags$,
  AddTagsCommand,
  AddTagsRequest$,
  AddTagsResponse$,
  AdvancedEventSelector$,
  AdvancedFieldSelector$,
  AggregationConfiguration$,
  BillingMode,
  CancelQuery$,
  CancelQueryCommand,
  CancelQueryRequest$,
  CancelQueryResponse$,
  CannotDelegateManagementAccountException,
  CannotDelegateManagementAccountException$,
  Channel$,
  ChannelAlreadyExistsException,
  ChannelAlreadyExistsException$,
  ChannelARNInvalidException,
  ChannelARNInvalidException$,
  ChannelExistsForEDSException,
  ChannelExistsForEDSException$,
  ChannelMaxLimitExceededException,
  ChannelMaxLimitExceededException$,
  ChannelNotFoundException,
  ChannelNotFoundException$,
  CloudTrail,
  CloudTrailAccessNotEnabledException,
  CloudTrailAccessNotEnabledException$,
  CloudTrailARNInvalidException,
  CloudTrailARNInvalidException$,
  CloudTrailClient,
  CloudTrailInvalidClientTokenIdException,
  CloudTrailInvalidClientTokenIdException$,
  CloudTrailServiceException,
  CloudWatchLogsDeliveryUnavailableException,
  CloudWatchLogsDeliveryUnavailableException$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  ContextKeySelector$,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateDashboard$,
  CreateDashboardCommand,
  CreateDashboardRequest$,
  CreateDashboardResponse$,
  CreateEventDataStore$,
  CreateEventDataStoreCommand,
  CreateEventDataStoreRequest$,
  CreateEventDataStoreResponse$,
  CreateTrail$,
  CreateTrailCommand,
  CreateTrailRequest$,
  CreateTrailResponse$,
  DashboardDetail$,
  DashboardStatus,
  DashboardType,
  DataResource$,
  DelegatedAdminAccountLimitExceededException,
  DelegatedAdminAccountLimitExceededException$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelRequest$,
  DeleteChannelResponse$,
  DeleteDashboard$,
  DeleteDashboardCommand,
  DeleteDashboardRequest$,
  DeleteDashboardResponse$,
  DeleteEventDataStore$,
  DeleteEventDataStoreCommand,
  DeleteEventDataStoreRequest$,
  DeleteEventDataStoreResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteTrail$,
  DeleteTrailCommand,
  DeleteTrailRequest$,
  DeleteTrailResponse$,
  DeliveryStatus,
  DeregisterOrganizationDelegatedAdmin$,
  DeregisterOrganizationDelegatedAdminCommand,
  DeregisterOrganizationDelegatedAdminRequest$,
  DeregisterOrganizationDelegatedAdminResponse$,
  DescribeQuery$,
  DescribeQueryCommand,
  DescribeQueryRequest$,
  DescribeQueryResponse$,
  DescribeTrails$,
  DescribeTrailsCommand,
  DescribeTrailsRequest$,
  DescribeTrailsResponse$,
  Destination$,
  DestinationType,
  DisableFederation$,
  DisableFederationCommand,
  DisableFederationRequest$,
  DisableFederationResponse$,
  EnableFederation$,
  EnableFederationCommand,
  EnableFederationRequest$,
  EnableFederationResponse$,
  Event$,
  EventCategory,
  EventCategoryAggregation,
  EventDataStore$,
  EventDataStoreAlreadyExistsException,
  EventDataStoreAlreadyExistsException$,
  EventDataStoreARNInvalidException,
  EventDataStoreARNInvalidException$,
  EventDataStoreFederationEnabledException,
  EventDataStoreFederationEnabledException$,
  EventDataStoreHasOngoingImportException,
  EventDataStoreHasOngoingImportException$,
  EventDataStoreMaxLimitExceededException,
  EventDataStoreMaxLimitExceededException$,
  EventDataStoreNotFoundException,
  EventDataStoreNotFoundException$,
  EventDataStoreStatus,
  EventDataStoreTerminationProtectedException,
  EventDataStoreTerminationProtectedException$,
  EventSelector$,
  FederationStatus,
  GenerateQuery$,
  GenerateQueryCommand,
  GenerateQueryRequest$,
  GenerateQueryResponse$,
  GenerateResponseException,
  GenerateResponseException$,
  GetChannel$,
  GetChannelCommand,
  GetChannelRequest$,
  GetChannelResponse$,
  GetDashboard$,
  GetDashboardCommand,
  GetDashboardRequest$,
  GetDashboardResponse$,
  GetEventConfiguration$,
  GetEventConfigurationCommand,
  GetEventConfigurationRequest$,
  GetEventConfigurationResponse$,
  GetEventDataStore$,
  GetEventDataStoreCommand,
  GetEventDataStoreRequest$,
  GetEventDataStoreResponse$,
  GetEventSelectors$,
  GetEventSelectorsCommand,
  GetEventSelectorsRequest$,
  GetEventSelectorsResponse$,
  GetImport$,
  GetImportCommand,
  GetImportRequest$,
  GetImportResponse$,
  GetInsightSelectors$,
  GetInsightSelectorsCommand,
  GetInsightSelectorsRequest$,
  GetInsightSelectorsResponse$,
  GetQueryResults$,
  GetQueryResultsCommand,
  GetQueryResultsRequest$,
  GetQueryResultsResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetTrail$,
  GetTrailCommand,
  GetTrailRequest$,
  GetTrailResponse$,
  GetTrailStatus$,
  GetTrailStatusCommand,
  GetTrailStatusRequest$,
  GetTrailStatusResponse$,
  ImportFailureListItem$,
  ImportFailureStatus,
  ImportNotFoundException,
  ImportNotFoundException$,
  ImportsListItem$,
  ImportSource$,
  ImportStatistics$,
  ImportStatus,
  InactiveEventDataStoreException,
  InactiveEventDataStoreException$,
  InactiveQueryException,
  InactiveQueryException$,
  IngestionStatus$,
  InsightNotEnabledException,
  InsightNotEnabledException$,
  InsightSelector$,
  InsightsMetricDataType,
  InsightType,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientDependencyServiceAccessPermissionException$,
  InsufficientEncryptionPolicyException,
  InsufficientEncryptionPolicyException$,
  InsufficientIAMAccessPermissionException,
  InsufficientIAMAccessPermissionException$,
  InsufficientS3BucketPolicyException,
  InsufficientS3BucketPolicyException$,
  InsufficientSnsTopicPolicyException,
  InsufficientSnsTopicPolicyException$,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsLogGroupArnException$,
  InvalidCloudWatchLogsRoleArnException,
  InvalidCloudWatchLogsRoleArnException$,
  InvalidDateRangeException,
  InvalidDateRangeException$,
  InvalidEventCategoryException,
  InvalidEventCategoryException$,
  InvalidEventDataStoreCategoryException,
  InvalidEventDataStoreCategoryException$,
  InvalidEventDataStoreStatusException,
  InvalidEventDataStoreStatusException$,
  InvalidEventSelectorsException,
  InvalidEventSelectorsException$,
  InvalidHomeRegionException,
  InvalidHomeRegionException$,
  InvalidImportSourceException,
  InvalidImportSourceException$,
  InvalidInsightSelectorsException,
  InvalidInsightSelectorsException$,
  InvalidKmsKeyIdException,
  InvalidKmsKeyIdException$,
  InvalidLookupAttributesException,
  InvalidLookupAttributesException$,
  InvalidMaxResultsException,
  InvalidMaxResultsException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidQueryStatementException,
  InvalidQueryStatementException$,
  InvalidQueryStatusException,
  InvalidQueryStatusException$,
  InvalidS3BucketNameException,
  InvalidS3BucketNameException$,
  InvalidS3PrefixException,
  InvalidS3PrefixException$,
  InvalidSnsTopicNameException,
  InvalidSnsTopicNameException$,
  InvalidSourceException,
  InvalidSourceException$,
  InvalidTagParameterException,
  InvalidTagParameterException$,
  InvalidTimeRangeException,
  InvalidTimeRangeException$,
  InvalidTokenException,
  InvalidTokenException$,
  InvalidTrailNameException,
  InvalidTrailNameException$,
  KmsException,
  KmsException$,
  KmsKeyDisabledException,
  KmsKeyDisabledException$,
  KmsKeyNotFoundException,
  KmsKeyNotFoundException$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListDashboards$,
  ListDashboardsCommand,
  ListDashboardsRequest$,
  ListDashboardsResponse$,
  ListEventDataStores$,
  ListEventDataStoresCommand,
  ListEventDataStoresRequest$,
  ListEventDataStoresResponse$,
  ListImportFailures$,
  ListImportFailuresCommand,
  ListImportFailuresRequest$,
  ListImportFailuresResponse$,
  ListImports$,
  ListImportsCommand,
  ListImportsRequest$,
  ListImportsResponse$,
  ListInsightsData$,
  ListInsightsDataCommand,
  ListInsightsDataDimensionKey,
  ListInsightsDataRequest$,
  ListInsightsDataResponse$,
  ListInsightsDataType,
  ListInsightsMetricData$,
  ListInsightsMetricDataCommand,
  ListInsightsMetricDataRequest$,
  ListInsightsMetricDataResponse$,
  ListPublicKeys$,
  ListPublicKeysCommand,
  ListPublicKeysRequest$,
  ListPublicKeysResponse$,
  ListQueries$,
  ListQueriesCommand,
  ListQueriesRequest$,
  ListQueriesResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListTrails$,
  ListTrailsCommand,
  ListTrailsRequest$,
  ListTrailsResponse$,
  LookupAttribute$,
  LookupAttributeKey,
  LookupEvents$,
  LookupEventsCommand,
  LookupEventsRequest$,
  LookupEventsResponse$,
  MaxConcurrentQueriesException,
  MaxConcurrentQueriesException$,
  MaxEventSize,
  MaximumNumberOfTrailsExceededException,
  MaximumNumberOfTrailsExceededException$,
  NoManagementAccountSLRExistsException,
  NoManagementAccountSLRExistsException$,
  NotOrganizationManagementAccountException,
  NotOrganizationManagementAccountException$,
  NotOrganizationMasterAccountException,
  NotOrganizationMasterAccountException$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  OrganizationNotInAllFeaturesModeException,
  OrganizationNotInAllFeaturesModeException$,
  OrganizationsNotInUseException,
  OrganizationsNotInUseException$,
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
  PartitionKey$,
  PublicKey$,
  PutEventConfiguration$,
  PutEventConfigurationCommand,
  PutEventConfigurationRequest$,
  PutEventConfigurationResponse$,
  PutEventSelectors$,
  PutEventSelectorsCommand,
  PutEventSelectorsRequest$,
  PutEventSelectorsResponse$,
  PutInsightSelectors$,
  PutInsightSelectorsCommand,
  PutInsightSelectorsRequest$,
  PutInsightSelectorsResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  Query$,
  QueryIdNotFoundException,
  QueryIdNotFoundException$,
  QueryStatistics$,
  QueryStatisticsForDescribeQuery$,
  QueryStatus,
  ReadWriteType,
  RefreshSchedule$,
  RefreshScheduleFrequency$,
  RefreshScheduleFrequencyUnit,
  RefreshScheduleStatus,
  RegisterOrganizationDelegatedAdmin$,
  RegisterOrganizationDelegatedAdminCommand,
  RegisterOrganizationDelegatedAdminRequest$,
  RegisterOrganizationDelegatedAdminResponse$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsRequest$,
  RemoveTagsResponse$,
  RequestWidget$,
  Resource$,
  ResourceARNNotValidException,
  ResourceARNNotValidException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotFoundException$,
  ResourcePolicyNotValidException,
  ResourcePolicyNotValidException$,
  ResourceTag$,
  ResourceTypeNotSupportedException,
  ResourceTypeNotSupportedException$,
  RestoreEventDataStore$,
  RestoreEventDataStoreCommand,
  RestoreEventDataStoreRequest$,
  RestoreEventDataStoreResponse$,
  S3BucketDoesNotExistException,
  S3BucketDoesNotExistException$,
  S3ImportSource$,
  SearchSampleQueries$,
  SearchSampleQueriesCommand,
  SearchSampleQueriesRequest$,
  SearchSampleQueriesResponse$,
  SearchSampleQueriesSearchResult$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceConfig$,
  SourceEventCategory,
  StartDashboardRefresh$,
  StartDashboardRefreshCommand,
  StartDashboardRefreshRequest$,
  StartDashboardRefreshResponse$,
  StartEventDataStoreIngestion$,
  StartEventDataStoreIngestionCommand,
  StartEventDataStoreIngestionRequest$,
  StartEventDataStoreIngestionResponse$,
  StartImport$,
  StartImportCommand,
  StartImportRequest$,
  StartImportResponse$,
  StartLogging$,
  StartLoggingCommand,
  StartLoggingRequest$,
  StartLoggingResponse$,
  StartQuery$,
  StartQueryCommand,
  StartQueryRequest$,
  StartQueryResponse$,
  StopEventDataStoreIngestion$,
  StopEventDataStoreIngestionCommand,
  StopEventDataStoreIngestionRequest$,
  StopEventDataStoreIngestionResponse$,
  StopImport$,
  StopImportCommand,
  StopImportRequest$,
  StopImportResponse$,
  StopLogging$,
  StopLoggingCommand,
  StopLoggingRequest$,
  StopLoggingResponse$,
  Tag$,
  TagsLimitExceededException,
  TagsLimitExceededException$,
  Template,
  ThrottlingException,
  ThrottlingException$,
  Trail$,
  TrailAlreadyExistsException,
  TrailAlreadyExistsException$,
  TrailInfo$,
  TrailNotFoundException,
  TrailNotFoundException$,
  TrailNotProvidedException,
  TrailNotProvidedException$,
  Type,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdateDashboard$,
  UpdateDashboardCommand,
  UpdateDashboardRequest$,
  UpdateDashboardResponse$,
  UpdateEventDataStore$,
  UpdateEventDataStoreCommand,
  UpdateEventDataStoreRequest$,
  UpdateEventDataStoreResponse$,
  UpdateTrail$,
  UpdateTrailCommand,
  UpdateTrailRequest$,
  UpdateTrailResponse$,
  Widget$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudTrailClient === "function");
assert(typeof CloudTrail === "function");
// commands
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof CancelQueryCommand === "function");
assert(typeof CancelQuery$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateDashboardCommand === "function");
assert(typeof CreateDashboard$ === "object");
assert(typeof CreateEventDataStoreCommand === "function");
assert(typeof CreateEventDataStore$ === "object");
assert(typeof CreateTrailCommand === "function");
assert(typeof CreateTrail$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteDashboardCommand === "function");
assert(typeof DeleteDashboard$ === "object");
assert(typeof DeleteEventDataStoreCommand === "function");
assert(typeof DeleteEventDataStore$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteTrailCommand === "function");
assert(typeof DeleteTrail$ === "object");
assert(typeof DeregisterOrganizationDelegatedAdminCommand === "function");
assert(typeof DeregisterOrganizationDelegatedAdmin$ === "object");
assert(typeof DescribeQueryCommand === "function");
assert(typeof DescribeQuery$ === "object");
assert(typeof DescribeTrailsCommand === "function");
assert(typeof DescribeTrails$ === "object");
assert(typeof DisableFederationCommand === "function");
assert(typeof DisableFederation$ === "object");
assert(typeof EnableFederationCommand === "function");
assert(typeof EnableFederation$ === "object");
assert(typeof GenerateQueryCommand === "function");
assert(typeof GenerateQuery$ === "object");
assert(typeof GetChannelCommand === "function");
assert(typeof GetChannel$ === "object");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetDashboard$ === "object");
assert(typeof GetEventConfigurationCommand === "function");
assert(typeof GetEventConfiguration$ === "object");
assert(typeof GetEventDataStoreCommand === "function");
assert(typeof GetEventDataStore$ === "object");
assert(typeof GetEventSelectorsCommand === "function");
assert(typeof GetEventSelectors$ === "object");
assert(typeof GetImportCommand === "function");
assert(typeof GetImport$ === "object");
assert(typeof GetInsightSelectorsCommand === "function");
assert(typeof GetInsightSelectors$ === "object");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryResults$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetTrailCommand === "function");
assert(typeof GetTrail$ === "object");
assert(typeof GetTrailStatusCommand === "function");
assert(typeof GetTrailStatus$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListDashboards$ === "object");
assert(typeof ListEventDataStoresCommand === "function");
assert(typeof ListEventDataStores$ === "object");
assert(typeof ListImportFailuresCommand === "function");
assert(typeof ListImportFailures$ === "object");
assert(typeof ListImportsCommand === "function");
assert(typeof ListImports$ === "object");
assert(typeof ListInsightsDataCommand === "function");
assert(typeof ListInsightsData$ === "object");
assert(typeof ListInsightsMetricDataCommand === "function");
assert(typeof ListInsightsMetricData$ === "object");
assert(typeof ListPublicKeysCommand === "function");
assert(typeof ListPublicKeys$ === "object");
assert(typeof ListQueriesCommand === "function");
assert(typeof ListQueries$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListTrailsCommand === "function");
assert(typeof ListTrails$ === "object");
assert(typeof LookupEventsCommand === "function");
assert(typeof LookupEvents$ === "object");
assert(typeof PutEventConfigurationCommand === "function");
assert(typeof PutEventConfiguration$ === "object");
assert(typeof PutEventSelectorsCommand === "function");
assert(typeof PutEventSelectors$ === "object");
assert(typeof PutInsightSelectorsCommand === "function");
assert(typeof PutInsightSelectors$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterOrganizationDelegatedAdminCommand === "function");
assert(typeof RegisterOrganizationDelegatedAdmin$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof RestoreEventDataStoreCommand === "function");
assert(typeof RestoreEventDataStore$ === "object");
assert(typeof SearchSampleQueriesCommand === "function");
assert(typeof SearchSampleQueries$ === "object");
assert(typeof StartDashboardRefreshCommand === "function");
assert(typeof StartDashboardRefresh$ === "object");
assert(typeof StartEventDataStoreIngestionCommand === "function");
assert(typeof StartEventDataStoreIngestion$ === "object");
assert(typeof StartImportCommand === "function");
assert(typeof StartImport$ === "object");
assert(typeof StartLoggingCommand === "function");
assert(typeof StartLogging$ === "object");
assert(typeof StartQueryCommand === "function");
assert(typeof StartQuery$ === "object");
assert(typeof StopEventDataStoreIngestionCommand === "function");
assert(typeof StopEventDataStoreIngestion$ === "object");
assert(typeof StopImportCommand === "function");
assert(typeof StopImport$ === "object");
assert(typeof StopLoggingCommand === "function");
assert(typeof StopLogging$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateDashboardCommand === "function");
assert(typeof UpdateDashboard$ === "object");
assert(typeof UpdateEventDataStoreCommand === "function");
assert(typeof UpdateEventDataStore$ === "object");
assert(typeof UpdateTrailCommand === "function");
assert(typeof UpdateTrail$ === "object");
// structural schemas
assert(typeof AddTagsRequest$ === "object");
assert(typeof AddTagsResponse$ === "object");
assert(typeof AdvancedEventSelector$ === "object");
assert(typeof AdvancedFieldSelector$ === "object");
assert(typeof AggregationConfiguration$ === "object");
assert(typeof CancelQueryRequest$ === "object");
assert(typeof CancelQueryResponse$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ContextKeySelector$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateDashboardRequest$ === "object");
assert(typeof CreateDashboardResponse$ === "object");
assert(typeof CreateEventDataStoreRequest$ === "object");
assert(typeof CreateEventDataStoreResponse$ === "object");
assert(typeof CreateTrailRequest$ === "object");
assert(typeof CreateTrailResponse$ === "object");
assert(typeof DashboardDetail$ === "object");
assert(typeof DataResource$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteChannelResponse$ === "object");
assert(typeof DeleteDashboardRequest$ === "object");
assert(typeof DeleteDashboardResponse$ === "object");
assert(typeof DeleteEventDataStoreRequest$ === "object");
assert(typeof DeleteEventDataStoreResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteTrailRequest$ === "object");
assert(typeof DeleteTrailResponse$ === "object");
assert(typeof DeregisterOrganizationDelegatedAdminRequest$ === "object");
assert(typeof DeregisterOrganizationDelegatedAdminResponse$ === "object");
assert(typeof DescribeQueryRequest$ === "object");
assert(typeof DescribeQueryResponse$ === "object");
assert(typeof DescribeTrailsRequest$ === "object");
assert(typeof DescribeTrailsResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DisableFederationRequest$ === "object");
assert(typeof DisableFederationResponse$ === "object");
assert(typeof EnableFederationRequest$ === "object");
assert(typeof EnableFederationResponse$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventDataStore$ === "object");
assert(typeof EventSelector$ === "object");
assert(typeof GenerateQueryRequest$ === "object");
assert(typeof GenerateQueryResponse$ === "object");
assert(typeof GetChannelRequest$ === "object");
assert(typeof GetChannelResponse$ === "object");
assert(typeof GetDashboardRequest$ === "object");
assert(typeof GetDashboardResponse$ === "object");
assert(typeof GetEventConfigurationRequest$ === "object");
assert(typeof GetEventConfigurationResponse$ === "object");
assert(typeof GetEventDataStoreRequest$ === "object");
assert(typeof GetEventDataStoreResponse$ === "object");
assert(typeof GetEventSelectorsRequest$ === "object");
assert(typeof GetEventSelectorsResponse$ === "object");
assert(typeof GetImportRequest$ === "object");
assert(typeof GetImportResponse$ === "object");
assert(typeof GetInsightSelectorsRequest$ === "object");
assert(typeof GetInsightSelectorsResponse$ === "object");
assert(typeof GetQueryResultsRequest$ === "object");
assert(typeof GetQueryResultsResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetTrailRequest$ === "object");
assert(typeof GetTrailResponse$ === "object");
assert(typeof GetTrailStatusRequest$ === "object");
assert(typeof GetTrailStatusResponse$ === "object");
assert(typeof ImportFailureListItem$ === "object");
assert(typeof ImportsListItem$ === "object");
assert(typeof ImportSource$ === "object");
assert(typeof ImportStatistics$ === "object");
assert(typeof IngestionStatus$ === "object");
assert(typeof InsightSelector$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListDashboardsRequest$ === "object");
assert(typeof ListDashboardsResponse$ === "object");
assert(typeof ListEventDataStoresRequest$ === "object");
assert(typeof ListEventDataStoresResponse$ === "object");
assert(typeof ListImportFailuresRequest$ === "object");
assert(typeof ListImportFailuresResponse$ === "object");
assert(typeof ListImportsRequest$ === "object");
assert(typeof ListImportsResponse$ === "object");
assert(typeof ListInsightsDataRequest$ === "object");
assert(typeof ListInsightsDataResponse$ === "object");
assert(typeof ListInsightsMetricDataRequest$ === "object");
assert(typeof ListInsightsMetricDataResponse$ === "object");
assert(typeof ListPublicKeysRequest$ === "object");
assert(typeof ListPublicKeysResponse$ === "object");
assert(typeof ListQueriesRequest$ === "object");
assert(typeof ListQueriesResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListTrailsRequest$ === "object");
assert(typeof ListTrailsResponse$ === "object");
assert(typeof LookupAttribute$ === "object");
assert(typeof LookupEventsRequest$ === "object");
assert(typeof LookupEventsResponse$ === "object");
assert(typeof PartitionKey$ === "object");
assert(typeof PublicKey$ === "object");
assert(typeof PutEventConfigurationRequest$ === "object");
assert(typeof PutEventConfigurationResponse$ === "object");
assert(typeof PutEventSelectorsRequest$ === "object");
assert(typeof PutEventSelectorsResponse$ === "object");
assert(typeof PutInsightSelectorsRequest$ === "object");
assert(typeof PutInsightSelectorsResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof Query$ === "object");
assert(typeof QueryStatistics$ === "object");
assert(typeof QueryStatisticsForDescribeQuery$ === "object");
assert(typeof RefreshSchedule$ === "object");
assert(typeof RefreshScheduleFrequency$ === "object");
assert(typeof RegisterOrganizationDelegatedAdminRequest$ === "object");
assert(typeof RegisterOrganizationDelegatedAdminResponse$ === "object");
assert(typeof RemoveTagsRequest$ === "object");
assert(typeof RemoveTagsResponse$ === "object");
assert(typeof RequestWidget$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof RestoreEventDataStoreRequest$ === "object");
assert(typeof RestoreEventDataStoreResponse$ === "object");
assert(typeof S3ImportSource$ === "object");
assert(typeof SearchSampleQueriesRequest$ === "object");
assert(typeof SearchSampleQueriesResponse$ === "object");
assert(typeof SearchSampleQueriesSearchResult$ === "object");
assert(typeof SourceConfig$ === "object");
assert(typeof StartDashboardRefreshRequest$ === "object");
assert(typeof StartDashboardRefreshResponse$ === "object");
assert(typeof StartEventDataStoreIngestionRequest$ === "object");
assert(typeof StartEventDataStoreIngestionResponse$ === "object");
assert(typeof StartImportRequest$ === "object");
assert(typeof StartImportResponse$ === "object");
assert(typeof StartLoggingRequest$ === "object");
assert(typeof StartLoggingResponse$ === "object");
assert(typeof StartQueryRequest$ === "object");
assert(typeof StartQueryResponse$ === "object");
assert(typeof StopEventDataStoreIngestionRequest$ === "object");
assert(typeof StopEventDataStoreIngestionResponse$ === "object");
assert(typeof StopImportRequest$ === "object");
assert(typeof StopImportResponse$ === "object");
assert(typeof StopLoggingRequest$ === "object");
assert(typeof StopLoggingResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Trail$ === "object");
assert(typeof TrailInfo$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdateDashboardRequest$ === "object");
assert(typeof UpdateDashboardResponse$ === "object");
assert(typeof UpdateEventDataStoreRequest$ === "object");
assert(typeof UpdateEventDataStoreResponse$ === "object");
assert(typeof UpdateTrailRequest$ === "object");
assert(typeof UpdateTrailResponse$ === "object");
assert(typeof Widget$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AccountHasOngoingImportException.prototype instanceof CloudTrailServiceException);
assert(typeof AccountHasOngoingImportException$ === "object");
assert(AccountNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof AccountNotFoundException$ === "object");
assert(AccountNotRegisteredException.prototype instanceof CloudTrailServiceException);
assert(typeof AccountNotRegisteredException$ === "object");
assert(AccountRegisteredException.prototype instanceof CloudTrailServiceException);
assert(typeof AccountRegisteredException$ === "object");
assert(CannotDelegateManagementAccountException.prototype instanceof CloudTrailServiceException);
assert(typeof CannotDelegateManagementAccountException$ === "object");
assert(ChannelAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(typeof ChannelAlreadyExistsException$ === "object");
assert(ChannelARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(typeof ChannelARNInvalidException$ === "object");
assert(ChannelExistsForEDSException.prototype instanceof CloudTrailServiceException);
assert(typeof ChannelExistsForEDSException$ === "object");
assert(ChannelMaxLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof ChannelMaxLimitExceededException$ === "object");
assert(ChannelNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof ChannelNotFoundException$ === "object");
assert(CloudTrailAccessNotEnabledException.prototype instanceof CloudTrailServiceException);
assert(typeof CloudTrailAccessNotEnabledException$ === "object");
assert(CloudTrailARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(typeof CloudTrailARNInvalidException$ === "object");
assert(CloudTrailInvalidClientTokenIdException.prototype instanceof CloudTrailServiceException);
assert(typeof CloudTrailInvalidClientTokenIdException$ === "object");
assert(CloudWatchLogsDeliveryUnavailableException.prototype instanceof CloudTrailServiceException);
assert(typeof CloudWatchLogsDeliveryUnavailableException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CloudTrailServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof CloudTrailServiceException);
assert(typeof ConflictException$ === "object");
assert(DelegatedAdminAccountLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof DelegatedAdminAccountLimitExceededException$ === "object");
assert(EventDataStoreAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreAlreadyExistsException$ === "object");
assert(EventDataStoreARNInvalidException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreARNInvalidException$ === "object");
assert(EventDataStoreFederationEnabledException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreFederationEnabledException$ === "object");
assert(EventDataStoreHasOngoingImportException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreHasOngoingImportException$ === "object");
assert(EventDataStoreMaxLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreMaxLimitExceededException$ === "object");
assert(EventDataStoreNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreNotFoundException$ === "object");
assert(EventDataStoreTerminationProtectedException.prototype instanceof CloudTrailServiceException);
assert(typeof EventDataStoreTerminationProtectedException$ === "object");
assert(GenerateResponseException.prototype instanceof CloudTrailServiceException);
assert(typeof GenerateResponseException$ === "object");
assert(ImportNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof ImportNotFoundException$ === "object");
assert(InactiveEventDataStoreException.prototype instanceof CloudTrailServiceException);
assert(typeof InactiveEventDataStoreException$ === "object");
assert(InactiveQueryException.prototype instanceof CloudTrailServiceException);
assert(typeof InactiveQueryException$ === "object");
assert(InsightNotEnabledException.prototype instanceof CloudTrailServiceException);
assert(typeof InsightNotEnabledException$ === "object");
assert(InsufficientDependencyServiceAccessPermissionException.prototype instanceof CloudTrailServiceException);
assert(typeof InsufficientDependencyServiceAccessPermissionException$ === "object");
assert(InsufficientEncryptionPolicyException.prototype instanceof CloudTrailServiceException);
assert(typeof InsufficientEncryptionPolicyException$ === "object");
assert(InsufficientIAMAccessPermissionException.prototype instanceof CloudTrailServiceException);
assert(typeof InsufficientIAMAccessPermissionException$ === "object");
assert(InsufficientS3BucketPolicyException.prototype instanceof CloudTrailServiceException);
assert(typeof InsufficientS3BucketPolicyException$ === "object");
assert(InsufficientSnsTopicPolicyException.prototype instanceof CloudTrailServiceException);
assert(typeof InsufficientSnsTopicPolicyException$ === "object");
assert(InvalidCloudWatchLogsLogGroupArnException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidCloudWatchLogsLogGroupArnException$ === "object");
assert(InvalidCloudWatchLogsRoleArnException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidCloudWatchLogsRoleArnException$ === "object");
assert(InvalidDateRangeException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidDateRangeException$ === "object");
assert(InvalidEventCategoryException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidEventCategoryException$ === "object");
assert(InvalidEventDataStoreCategoryException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidEventDataStoreCategoryException$ === "object");
assert(InvalidEventDataStoreStatusException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidEventDataStoreStatusException$ === "object");
assert(InvalidEventSelectorsException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidEventSelectorsException$ === "object");
assert(InvalidHomeRegionException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidHomeRegionException$ === "object");
assert(InvalidImportSourceException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidImportSourceException$ === "object");
assert(InvalidInsightSelectorsException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidInsightSelectorsException$ === "object");
assert(InvalidKmsKeyIdException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidKmsKeyIdException$ === "object");
assert(InvalidLookupAttributesException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidLookupAttributesException$ === "object");
assert(InvalidMaxResultsException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidMaxResultsException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidQueryStatementException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidQueryStatementException$ === "object");
assert(InvalidQueryStatusException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidQueryStatusException$ === "object");
assert(InvalidS3BucketNameException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidS3BucketNameException$ === "object");
assert(InvalidS3PrefixException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidS3PrefixException$ === "object");
assert(InvalidSnsTopicNameException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidSnsTopicNameException$ === "object");
assert(InvalidSourceException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidSourceException$ === "object");
assert(InvalidTagParameterException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidTagParameterException$ === "object");
assert(InvalidTimeRangeException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidTimeRangeException$ === "object");
assert(InvalidTokenException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidTokenException$ === "object");
assert(InvalidTrailNameException.prototype instanceof CloudTrailServiceException);
assert(typeof InvalidTrailNameException$ === "object");
assert(KmsException.prototype instanceof CloudTrailServiceException);
assert(typeof KmsException$ === "object");
assert(KmsKeyDisabledException.prototype instanceof CloudTrailServiceException);
assert(typeof KmsKeyDisabledException$ === "object");
assert(KmsKeyNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof KmsKeyNotFoundException$ === "object");
assert(MaxConcurrentQueriesException.prototype instanceof CloudTrailServiceException);
assert(typeof MaxConcurrentQueriesException$ === "object");
assert(MaximumNumberOfTrailsExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof MaximumNumberOfTrailsExceededException$ === "object");
assert(NoManagementAccountSLRExistsException.prototype instanceof CloudTrailServiceException);
assert(typeof NoManagementAccountSLRExistsException$ === "object");
assert(NotOrganizationManagementAccountException.prototype instanceof CloudTrailServiceException);
assert(typeof NotOrganizationManagementAccountException$ === "object");
assert(NotOrganizationMasterAccountException.prototype instanceof CloudTrailServiceException);
assert(typeof NotOrganizationMasterAccountException$ === "object");
assert(OperationNotPermittedException.prototype instanceof CloudTrailServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(OrganizationNotInAllFeaturesModeException.prototype instanceof CloudTrailServiceException);
assert(typeof OrganizationNotInAllFeaturesModeException$ === "object");
assert(OrganizationsNotInUseException.prototype instanceof CloudTrailServiceException);
assert(typeof OrganizationsNotInUseException$ === "object");
assert(QueryIdNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof QueryIdNotFoundException$ === "object");
assert(ResourceARNNotValidException.prototype instanceof CloudTrailServiceException);
assert(typeof ResourceARNNotValidException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourcePolicyNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof ResourcePolicyNotFoundException$ === "object");
assert(ResourcePolicyNotValidException.prototype instanceof CloudTrailServiceException);
assert(typeof ResourcePolicyNotValidException$ === "object");
assert(ResourceTypeNotSupportedException.prototype instanceof CloudTrailServiceException);
assert(typeof ResourceTypeNotSupportedException$ === "object");
assert(S3BucketDoesNotExistException.prototype instanceof CloudTrailServiceException);
assert(typeof S3BucketDoesNotExistException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TagsLimitExceededException.prototype instanceof CloudTrailServiceException);
assert(typeof TagsLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CloudTrailServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TrailAlreadyExistsException.prototype instanceof CloudTrailServiceException);
assert(typeof TrailAlreadyExistsException$ === "object");
assert(TrailNotFoundException.prototype instanceof CloudTrailServiceException);
assert(typeof TrailNotFoundException$ === "object");
assert(TrailNotProvidedException.prototype instanceof CloudTrailServiceException);
assert(typeof TrailNotProvidedException$ === "object");
assert(UnsupportedOperationException.prototype instanceof CloudTrailServiceException);
assert(typeof UnsupportedOperationException$ === "object");
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
