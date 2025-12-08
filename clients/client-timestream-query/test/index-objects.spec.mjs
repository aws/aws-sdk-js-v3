import {
  AccessDeniedException,
  CancelQueryCommand,
  ComputeMode,
  ConflictException,
  CreateScheduledQueryCommand,
  DeleteScheduledQueryCommand,
  DescribeAccountSettingsCommand,
  DescribeEndpointsCommand,
  DescribeScheduledQueryCommand,
  DimensionValueType,
  ExecuteScheduledQueryCommand,
  InternalServerException,
  InvalidEndpointException,
  LastUpdateStatus,
  ListScheduledQueriesCommand,
  ListTagsForResourceCommand,
  MeasureValueType,
  PrepareQueryCommand,
  QueryCommand,
  QueryExecutionException,
  QueryInsightsMode,
  QueryPricingModel,
  ResourceNotFoundException,
  S3EncryptionOption,
  ScalarMeasureValueType,
  ScalarType,
  ScheduledQueryInsightsMode,
  ScheduledQueryRunStatus,
  ScheduledQueryState,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  TimestreamQuery,
  TimestreamQueryClient,
  TimestreamQueryServiceException,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateScheduledQueryCommand,
  ValidationException,
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
assert(typeof CreateScheduledQueryCommand === "function");
assert(typeof DeleteScheduledQueryCommand === "function");
assert(typeof DescribeAccountSettingsCommand === "function");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeScheduledQueryCommand === "function");
assert(typeof ExecuteScheduledQueryCommand === "function");
assert(typeof ListScheduledQueriesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PrepareQueryCommand === "function");
assert(typeof QueryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateScheduledQueryCommand === "function");
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
assert(ConflictException.prototype instanceof TimestreamQueryServiceException);
assert(InternalServerException.prototype instanceof TimestreamQueryServiceException);
assert(InvalidEndpointException.prototype instanceof TimestreamQueryServiceException);
assert(QueryExecutionException.prototype instanceof TimestreamQueryServiceException);
assert(ResourceNotFoundException.prototype instanceof TimestreamQueryServiceException);
assert(ServiceQuotaExceededException.prototype instanceof TimestreamQueryServiceException);
assert(ThrottlingException.prototype instanceof TimestreamQueryServiceException);
assert(ValidationException.prototype instanceof TimestreamQueryServiceException);
assert(TimestreamQueryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListScheduledQueries === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateQuery === "function");
console.log(`TimestreamQuery index test passed.`);
