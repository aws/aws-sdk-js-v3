import {
  BatchLoadDataFormat,
  BatchLoadStatus,
  CreateBatchLoadTaskCommand,
  CreateDatabaseCommand,
  CreateTableCommand,
  DeleteDatabaseCommand,
  DeleteTableCommand,
  DescribeBatchLoadTaskCommand,
  DescribeDatabaseCommand,
  DescribeEndpointsCommand,
  DescribeTableCommand,
  DimensionValueType,
  ListBatchLoadTasksCommand,
  ListDatabasesCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  MeasureValueType,
  PartitionKeyEnforcementLevel,
  PartitionKeyType,
  ResumeBatchLoadTaskCommand,
  S3EncryptionOption,
  ScalarMeasureValueType,
  TableStatus,
  TagResourceCommand,
  TimeUnit,
  TimestreamWrite,
  TimestreamWriteClient,
  TimestreamWriteServiceException,
  UntagResourceCommand,
  UpdateDatabaseCommand,
  UpdateTableCommand,
  WriteRecordsCommand,
  paginateListBatchLoadTasks,
  paginateListDatabases,
  paginateListTables,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TimestreamWriteClient === "function")
assert(typeof TimestreamWrite === "function")
// commands
assert(typeof CreateBatchLoadTaskCommand === "function")
assert(typeof CreateDatabaseCommand === "function")
assert(typeof CreateTableCommand === "function")
assert(typeof DeleteDatabaseCommand === "function")
assert(typeof DeleteTableCommand === "function")
assert(typeof DescribeBatchLoadTaskCommand === "function")
assert(typeof DescribeDatabaseCommand === "function")
assert(typeof DescribeEndpointsCommand === "function")
assert(typeof DescribeTableCommand === "function")
assert(typeof ListBatchLoadTasksCommand === "function")
assert(typeof ListDatabasesCommand === "function")
assert(typeof ListTablesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ResumeBatchLoadTaskCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDatabaseCommand === "function")
assert(typeof UpdateTableCommand === "function")
assert(typeof WriteRecordsCommand === "function")
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
assert(TimestreamWriteServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBatchLoadTasks === "function")
assert(typeof paginateListDatabases === "function")
assert(typeof paginateListTables === "function")
console.log(`TimestreamWrite index test passed.`);
