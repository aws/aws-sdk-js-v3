import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountSettingsNotificationConfiguration$,
  CancelQuery$,
  CancelQueryCommand,
  CancelQueryRequest$,
  CancelQueryResponse$,
  ColumnInfo$,
  ComputeMode,
  ConflictException,
  ConflictException$,
  CreateScheduledQuery$,
  CreateScheduledQueryCommand,
  CreateScheduledQueryRequest$,
  CreateScheduledQueryResponse$,
  Datum$,
  DeleteScheduledQuery$,
  DeleteScheduledQueryCommand,
  DeleteScheduledQueryRequest$,
  DescribeAccountSettings$,
  DescribeAccountSettingsCommand,
  DescribeAccountSettingsRequest$,
  DescribeAccountSettingsResponse$,
  DescribeEndpoints$,
  DescribeEndpointsCommand,
  DescribeEndpointsRequest$,
  DescribeEndpointsResponse$,
  DescribeScheduledQuery$,
  DescribeScheduledQueryCommand,
  DescribeScheduledQueryRequest$,
  DescribeScheduledQueryResponse$,
  DimensionMapping$,
  DimensionValueType,
  Endpoint$,
  ErrorReportConfiguration$,
  ErrorReportLocation$,
  ExecuteScheduledQuery$,
  ExecuteScheduledQueryCommand,
  ExecuteScheduledQueryRequest$,
  ExecutionStats$,
  InternalServerException,
  InternalServerException$,
  InvalidEndpointException,
  InvalidEndpointException$,
  LastUpdate$,
  LastUpdateStatus,
  ListScheduledQueries$,
  ListScheduledQueriesCommand,
  ListScheduledQueriesRequest$,
  ListScheduledQueriesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MeasureValueType,
  MixedMeasureMapping$,
  MultiMeasureAttributeMapping$,
  MultiMeasureMappings$,
  NotificationConfiguration$,
  ParameterMapping$,
  PrepareQuery$,
  PrepareQueryCommand,
  PrepareQueryRequest$,
  PrepareQueryResponse$,
  ProvisionedCapacityRequest$,
  ProvisionedCapacityResponse$,
  Query$,
  QueryCommand,
  QueryComputeRequest$,
  QueryComputeResponse$,
  QueryExecutionException,
  QueryExecutionException$,
  QueryInsights$,
  QueryInsightsMode,
  QueryInsightsResponse$,
  QueryPricingModel,
  QueryRequest$,
  QueryResponse$,
  QuerySpatialCoverage$,
  QuerySpatialCoverageMax$,
  QueryStatus$,
  QueryTemporalRange$,
  QueryTemporalRangeMax$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Row$,
  S3Configuration$,
  S3EncryptionOption,
  S3ReportLocation$,
  ScalarMeasureValueType,
  ScalarType,
  ScheduleConfiguration$,
  ScheduledQuery$,
  ScheduledQueryDescription$,
  ScheduledQueryInsights$,
  ScheduledQueryInsightsMode,
  ScheduledQueryInsightsResponse$,
  ScheduledQueryRunStatus,
  ScheduledQueryRunSummary$,
  ScheduledQueryState,
  SelectColumn$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnsConfiguration$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetConfiguration$,
  TargetDestination$,
  ThrottlingException,
  ThrottlingException$,
  TimeSeriesDataPoint$,
  TimestreamConfiguration$,
  TimestreamDestination$,
  TimestreamQuery,
  TimestreamQueryClient,
  TimestreamQueryServiceException,
  Type$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsRequest$,
  UpdateAccountSettingsResponse$,
  UpdateScheduledQuery$,
  UpdateScheduledQueryCommand,
  UpdateScheduledQueryRequest$,
  ValidationException,
  ValidationException$,
  paginateListScheduledQueries,
  paginateListTagsForResource,
  paginateQuery,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TimestreamQueryClient === "function");
assert(typeof TimestreamQuery === "function");
// commands
assert(typeof CancelQueryCommand === "function");
assert(typeof CancelQuery$ === "object");
assert(typeof CreateScheduledQueryCommand === "function");
assert(typeof CreateScheduledQuery$ === "object");
assert(typeof DeleteScheduledQueryCommand === "function");
assert(typeof DeleteScheduledQuery$ === "object");
assert(typeof DescribeAccountSettingsCommand === "function");
assert(typeof DescribeAccountSettings$ === "object");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeEndpoints$ === "object");
assert(typeof DescribeScheduledQueryCommand === "function");
assert(typeof DescribeScheduledQuery$ === "object");
assert(typeof ExecuteScheduledQueryCommand === "function");
assert(typeof ExecuteScheduledQuery$ === "object");
assert(typeof ListScheduledQueriesCommand === "function");
assert(typeof ListScheduledQueries$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PrepareQueryCommand === "function");
assert(typeof PrepareQuery$ === "object");
assert(typeof QueryCommand === "function");
assert(typeof Query$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateScheduledQueryCommand === "function");
assert(typeof UpdateScheduledQuery$ === "object");
// structural schemas
assert(typeof AccountSettingsNotificationConfiguration$ === "object");
assert(typeof CancelQueryRequest$ === "object");
assert(typeof CancelQueryResponse$ === "object");
assert(typeof ColumnInfo$ === "object");
assert(typeof CreateScheduledQueryRequest$ === "object");
assert(typeof CreateScheduledQueryResponse$ === "object");
assert(typeof Datum$ === "object");
assert(typeof DeleteScheduledQueryRequest$ === "object");
assert(typeof DescribeAccountSettingsRequest$ === "object");
assert(typeof DescribeAccountSettingsResponse$ === "object");
assert(typeof DescribeEndpointsRequest$ === "object");
assert(typeof DescribeEndpointsResponse$ === "object");
assert(typeof DescribeScheduledQueryRequest$ === "object");
assert(typeof DescribeScheduledQueryResponse$ === "object");
assert(typeof DimensionMapping$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ErrorReportConfiguration$ === "object");
assert(typeof ErrorReportLocation$ === "object");
assert(typeof ExecuteScheduledQueryRequest$ === "object");
assert(typeof ExecutionStats$ === "object");
assert(typeof LastUpdate$ === "object");
assert(typeof ListScheduledQueriesRequest$ === "object");
assert(typeof ListScheduledQueriesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MixedMeasureMapping$ === "object");
assert(typeof MultiMeasureAttributeMapping$ === "object");
assert(typeof MultiMeasureMappings$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof ParameterMapping$ === "object");
assert(typeof PrepareQueryRequest$ === "object");
assert(typeof PrepareQueryResponse$ === "object");
assert(typeof ProvisionedCapacityRequest$ === "object");
assert(typeof ProvisionedCapacityResponse$ === "object");
assert(typeof QueryComputeRequest$ === "object");
assert(typeof QueryComputeResponse$ === "object");
assert(typeof QueryInsights$ === "object");
assert(typeof QueryInsightsResponse$ === "object");
assert(typeof QueryRequest$ === "object");
assert(typeof QueryResponse$ === "object");
assert(typeof QuerySpatialCoverage$ === "object");
assert(typeof QuerySpatialCoverageMax$ === "object");
assert(typeof QueryStatus$ === "object");
assert(typeof QueryTemporalRange$ === "object");
assert(typeof QueryTemporalRangeMax$ === "object");
assert(typeof Row$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3ReportLocation$ === "object");
assert(typeof ScheduleConfiguration$ === "object");
assert(typeof ScheduledQuery$ === "object");
assert(typeof ScheduledQueryDescription$ === "object");
assert(typeof ScheduledQueryInsights$ === "object");
assert(typeof ScheduledQueryInsightsResponse$ === "object");
assert(typeof ScheduledQueryRunSummary$ === "object");
assert(typeof SelectColumn$ === "object");
assert(typeof SnsConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetConfiguration$ === "object");
assert(typeof TargetDestination$ === "object");
assert(typeof TimeSeriesDataPoint$ === "object");
assert(typeof TimestreamConfiguration$ === "object");
assert(typeof TimestreamDestination$ === "object");
assert(typeof Type$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountSettingsRequest$ === "object");
assert(typeof UpdateAccountSettingsResponse$ === "object");
assert(typeof UpdateScheduledQueryRequest$ === "object");
// enums
assert(typeof ComputeMode === "object");
assert(typeof DimensionValueType === "object");
assert(typeof LastUpdateStatus === "object");
assert(typeof MeasureValueType === "object");
assert(typeof QueryInsightsMode === "object");
assert(typeof QueryPricingModel === "object");
assert(typeof S3EncryptionOption === "object");
assert(typeof ScalarMeasureValueType === "object");
assert(typeof ScalarType === "object");
assert(typeof ScheduledQueryInsightsMode === "object");
assert(typeof ScheduledQueryRunStatus === "object");
assert(typeof ScheduledQueryState === "object");
// errors
assert(AccessDeniedException.prototype instanceof TimestreamQueryServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof TimestreamQueryServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof TimestreamQueryServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidEndpointException.prototype instanceof TimestreamQueryServiceException);
assert(typeof InvalidEndpointException$ === "object");
assert(QueryExecutionException.prototype instanceof TimestreamQueryServiceException);
assert(typeof QueryExecutionException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TimestreamQueryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof TimestreamQueryServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof TimestreamQueryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof TimestreamQueryServiceException);
assert(typeof ValidationException$ === "object");
assert(TimestreamQueryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListScheduledQueries === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateQuery === "function");
console.log(`TimestreamQuery index test passed.`);
