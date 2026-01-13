import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  BatchLoadDataFormat,
  BatchLoadProgressReport$,
  BatchLoadStatus,
  BatchLoadTask$,
  BatchLoadTaskDescription$,
  ConflictException,
  ConflictException$,
  CreateBatchLoadTask$,
  CreateBatchLoadTaskCommand,
  CreateBatchLoadTaskRequest$,
  CreateBatchLoadTaskResponse$,
  CreateDatabase$,
  CreateDatabaseCommand,
  CreateDatabaseRequest$,
  CreateDatabaseResponse$,
  CreateTable$,
  CreateTableCommand,
  CreateTableRequest$,
  CreateTableResponse$,
  CsvConfiguration$,
  Database$,
  DataModel$,
  DataModelConfiguration$,
  DataModelS3Configuration$,
  DataSourceConfiguration$,
  DataSourceS3Configuration$,
  DeleteDatabase$,
  DeleteDatabaseCommand,
  DeleteDatabaseRequest$,
  DeleteTable$,
  DeleteTableCommand,
  DeleteTableRequest$,
  DescribeBatchLoadTask$,
  DescribeBatchLoadTaskCommand,
  DescribeBatchLoadTaskRequest$,
  DescribeBatchLoadTaskResponse$,
  DescribeDatabase$,
  DescribeDatabaseCommand,
  DescribeDatabaseRequest$,
  DescribeDatabaseResponse$,
  DescribeEndpoints$,
  DescribeEndpointsCommand,
  DescribeEndpointsRequest$,
  DescribeEndpointsResponse$,
  DescribeTable$,
  DescribeTableCommand,
  DescribeTableRequest$,
  DescribeTableResponse$,
  Dimension$,
  DimensionMapping$,
  DimensionValueType,
  Endpoint$,
  InternalServerException,
  InternalServerException$,
  InvalidEndpointException,
  InvalidEndpointException$,
  ListBatchLoadTasks$,
  ListBatchLoadTasksCommand,
  ListBatchLoadTasksRequest$,
  ListBatchLoadTasksResponse$,
  ListDatabases$,
  ListDatabasesCommand,
  ListDatabasesRequest$,
  ListDatabasesResponse$,
  ListTables$,
  ListTablesCommand,
  ListTablesRequest$,
  ListTablesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MagneticStoreRejectedDataLocation$,
  MagneticStoreWriteProperties$,
  MeasureValue$,
  MeasureValueType,
  MixedMeasureMapping$,
  MultiMeasureAttributeMapping$,
  MultiMeasureMappings$,
  paginateListBatchLoadTasks,
  paginateListDatabases,
  paginateListTables,
  PartitionKey$,
  PartitionKeyEnforcementLevel,
  PartitionKeyType,
  RecordsIngested$,
  RejectedRecord$,
  RejectedRecordsException,
  RejectedRecordsException$,
  ReportConfiguration$,
  ReportS3Configuration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResumeBatchLoadTask$,
  ResumeBatchLoadTaskCommand,
  ResumeBatchLoadTaskRequest$,
  ResumeBatchLoadTaskResponse$,
  RetentionProperties$,
  S3Configuration$,
  S3EncryptionOption,
  ScalarMeasureValueType,
  Schema$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Table$,
  TableStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimestreamWrite,
  TimestreamWriteClient,
  TimestreamWriteServiceException,
  TimeUnit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDatabase$,
  UpdateDatabaseCommand,
  UpdateDatabaseRequest$,
  UpdateDatabaseResponse$,
  UpdateTable$,
  UpdateTableCommand,
  UpdateTableRequest$,
  UpdateTableResponse$,
  ValidationException,
  ValidationException$,
  WriteRecords$,
  WriteRecordsCommand,
  WriteRecordsRequest$,
  WriteRecordsResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TimestreamWriteClient === "function");
assert(typeof TimestreamWrite === "function");
// commands
assert(typeof CreateBatchLoadTaskCommand === "function");
assert(typeof CreateBatchLoadTask$ === "object");
assert(typeof CreateDatabaseCommand === "function");
assert(typeof CreateDatabase$ === "object");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTable$ === "object");
assert(typeof DeleteDatabaseCommand === "function");
assert(typeof DeleteDatabase$ === "object");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTable$ === "object");
assert(typeof DescribeBatchLoadTaskCommand === "function");
assert(typeof DescribeBatchLoadTask$ === "object");
assert(typeof DescribeDatabaseCommand === "function");
assert(typeof DescribeDatabase$ === "object");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeEndpoints$ === "object");
assert(typeof DescribeTableCommand === "function");
assert(typeof DescribeTable$ === "object");
assert(typeof ListBatchLoadTasksCommand === "function");
assert(typeof ListBatchLoadTasks$ === "object");
assert(typeof ListDatabasesCommand === "function");
assert(typeof ListDatabases$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ResumeBatchLoadTaskCommand === "function");
assert(typeof ResumeBatchLoadTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDatabaseCommand === "function");
assert(typeof UpdateDatabase$ === "object");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTable$ === "object");
assert(typeof WriteRecordsCommand === "function");
assert(typeof WriteRecords$ === "object");
// structural schemas
assert(typeof BatchLoadProgressReport$ === "object");
assert(typeof BatchLoadTask$ === "object");
assert(typeof BatchLoadTaskDescription$ === "object");
assert(typeof CreateBatchLoadTaskRequest$ === "object");
assert(typeof CreateBatchLoadTaskResponse$ === "object");
assert(typeof CreateDatabaseRequest$ === "object");
assert(typeof CreateDatabaseResponse$ === "object");
assert(typeof CreateTableRequest$ === "object");
assert(typeof CreateTableResponse$ === "object");
assert(typeof CsvConfiguration$ === "object");
assert(typeof Database$ === "object");
assert(typeof DataModel$ === "object");
assert(typeof DataModelConfiguration$ === "object");
assert(typeof DataModelS3Configuration$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DataSourceS3Configuration$ === "object");
assert(typeof DeleteDatabaseRequest$ === "object");
assert(typeof DeleteTableRequest$ === "object");
assert(typeof DescribeBatchLoadTaskRequest$ === "object");
assert(typeof DescribeBatchLoadTaskResponse$ === "object");
assert(typeof DescribeDatabaseRequest$ === "object");
assert(typeof DescribeDatabaseResponse$ === "object");
assert(typeof DescribeEndpointsRequest$ === "object");
assert(typeof DescribeEndpointsResponse$ === "object");
assert(typeof DescribeTableRequest$ === "object");
assert(typeof DescribeTableResponse$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DimensionMapping$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ListBatchLoadTasksRequest$ === "object");
assert(typeof ListBatchLoadTasksResponse$ === "object");
assert(typeof ListDatabasesRequest$ === "object");
assert(typeof ListDatabasesResponse$ === "object");
assert(typeof ListTablesRequest$ === "object");
assert(typeof ListTablesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MagneticStoreRejectedDataLocation$ === "object");
assert(typeof MagneticStoreWriteProperties$ === "object");
assert(typeof MeasureValue$ === "object");
assert(typeof MixedMeasureMapping$ === "object");
assert(typeof MultiMeasureAttributeMapping$ === "object");
assert(typeof MultiMeasureMappings$ === "object");
assert(typeof PartitionKey$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RecordsIngested$ === "object");
assert(typeof RejectedRecord$ === "object");
assert(typeof ReportConfiguration$ === "object");
assert(typeof ReportS3Configuration$ === "object");
assert(typeof ResumeBatchLoadTaskRequest$ === "object");
assert(typeof ResumeBatchLoadTaskResponse$ === "object");
assert(typeof RetentionProperties$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof Schema$ === "object");
assert(typeof Table$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDatabaseRequest$ === "object");
assert(typeof UpdateDatabaseResponse$ === "object");
assert(typeof UpdateTableRequest$ === "object");
assert(typeof UpdateTableResponse$ === "object");
assert(typeof WriteRecordsRequest$ === "object");
assert(typeof WriteRecordsResponse$ === "object");
// enums
assert(typeof BatchLoadDataFormat === "object");
assert(typeof BatchLoadStatus === "object");
assert(typeof DimensionValueType === "object");
assert(typeof MeasureValueType === "object");
assert(typeof PartitionKeyEnforcementLevel === "object");
assert(typeof PartitionKeyType === "object");
assert(typeof S3EncryptionOption === "object");
assert(typeof ScalarMeasureValueType === "object");
assert(typeof TableStatus === "object");
assert(typeof TimeUnit === "object");
// errors
assert(AccessDeniedException.prototype instanceof TimestreamWriteServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof TimestreamWriteServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof TimestreamWriteServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidEndpointException.prototype instanceof TimestreamWriteServiceException);
assert(typeof InvalidEndpointException$ === "object");
assert(RejectedRecordsException.prototype instanceof TimestreamWriteServiceException);
assert(typeof RejectedRecordsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TimestreamWriteServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof TimestreamWriteServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof TimestreamWriteServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof TimestreamWriteServiceException);
assert(typeof ValidationException$ === "object");
assert(TimestreamWriteServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBatchLoadTasks === "function");
assert(typeof paginateListDatabases === "function");
assert(typeof paginateListTables === "function");
console.log(`TimestreamWrite index test passed.`);
