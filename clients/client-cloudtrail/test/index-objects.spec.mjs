import {
  AddTagsCommand,
  BillingMode,
  CancelQueryCommand,
  CloudTrail,
  CloudTrailClient,
  CloudTrailServiceException,
  CreateChannelCommand,
  CreateDashboardCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DashboardStatus,
  DashboardType,
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
  EventDataStoreStatus,
  FederationStatus,
  GenerateQueryCommand,
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
  ImportStatus,
  InsightType,
  InsightsMetricDataType,
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
  MaxEventSize,
  PutEventConfigurationCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  QueryStatus,
  ReadWriteType,
  RefreshScheduleFrequencyUnit,
  RefreshScheduleStatus,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  SearchSampleQueriesCommand,
  SourceEventCategory,
  StartDashboardRefreshCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  Template,
  Type,
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
assert(typeof CloudTrailClient === "function")
assert(typeof CloudTrail === "function")
// commands
assert(typeof AddTagsCommand === "function")
assert(typeof CancelQueryCommand === "function")
assert(typeof CreateChannelCommand === "function")
assert(typeof CreateDashboardCommand === "function")
assert(typeof CreateEventDataStoreCommand === "function")
assert(typeof CreateTrailCommand === "function")
assert(typeof DeleteChannelCommand === "function")
assert(typeof DeleteDashboardCommand === "function")
assert(typeof DeleteEventDataStoreCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteTrailCommand === "function")
assert(typeof DeregisterOrganizationDelegatedAdminCommand === "function")
assert(typeof DescribeQueryCommand === "function")
assert(typeof DescribeTrailsCommand === "function")
assert(typeof DisableFederationCommand === "function")
assert(typeof EnableFederationCommand === "function")
assert(typeof GenerateQueryCommand === "function")
assert(typeof GetChannelCommand === "function")
assert(typeof GetDashboardCommand === "function")
assert(typeof GetEventConfigurationCommand === "function")
assert(typeof GetEventDataStoreCommand === "function")
assert(typeof GetEventSelectorsCommand === "function")
assert(typeof GetImportCommand === "function")
assert(typeof GetInsightSelectorsCommand === "function")
assert(typeof GetQueryResultsCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof GetTrailCommand === "function")
assert(typeof GetTrailStatusCommand === "function")
assert(typeof ListChannelsCommand === "function")
assert(typeof ListDashboardsCommand === "function")
assert(typeof ListEventDataStoresCommand === "function")
assert(typeof ListImportFailuresCommand === "function")
assert(typeof ListImportsCommand === "function")
assert(typeof ListInsightsDataCommand === "function")
assert(typeof ListInsightsMetricDataCommand === "function")
assert(typeof ListPublicKeysCommand === "function")
assert(typeof ListQueriesCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof ListTrailsCommand === "function")
assert(typeof LookupEventsCommand === "function")
assert(typeof PutEventConfigurationCommand === "function")
assert(typeof PutEventSelectorsCommand === "function")
assert(typeof PutInsightSelectorsCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof RegisterOrganizationDelegatedAdminCommand === "function")
assert(typeof RemoveTagsCommand === "function")
assert(typeof RestoreEventDataStoreCommand === "function")
assert(typeof SearchSampleQueriesCommand === "function")
assert(typeof StartDashboardRefreshCommand === "function")
assert(typeof StartEventDataStoreIngestionCommand === "function")
assert(typeof StartImportCommand === "function")
assert(typeof StartLoggingCommand === "function")
assert(typeof StartQueryCommand === "function")
assert(typeof StopEventDataStoreIngestionCommand === "function")
assert(typeof StopImportCommand === "function")
assert(typeof StopLoggingCommand === "function")
assert(typeof UpdateChannelCommand === "function")
assert(typeof UpdateDashboardCommand === "function")
assert(typeof UpdateEventDataStoreCommand === "function")
assert(typeof UpdateTrailCommand === "function")
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
assert(CloudTrailServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetQueryResults === "function")
assert(typeof paginateListChannels === "function")
assert(typeof paginateListEventDataStores === "function")
assert(typeof paginateListImportFailures === "function")
assert(typeof paginateListImports === "function")
assert(typeof paginateListInsightsData === "function")
assert(typeof paginateListInsightsMetricData === "function")
assert(typeof paginateListPublicKeys === "function")
assert(typeof paginateListQueries === "function")
assert(typeof paginateListTags === "function")
assert(typeof paginateListTrails === "function")
assert(typeof paginateLookupEvents === "function")
console.log(`CloudTrail index test passed.`);
