import {
  CreateNamespaceCommand,
  CreateTableBucketCommand,
  CreateTableCommand,
  DeleteNamespaceCommand,
  DeleteTableBucketCommand,
  DeleteTableBucketEncryptionCommand,
  DeleteTableBucketMetricsConfigurationCommand,
  DeleteTableBucketPolicyCommand,
  DeleteTableCommand,
  DeleteTablePolicyCommand,
  GetNamespaceCommand,
  GetTableBucketCommand,
  GetTableBucketEncryptionCommand,
  GetTableBucketMaintenanceConfigurationCommand,
  GetTableBucketMetricsConfigurationCommand,
  GetTableBucketPolicyCommand,
  GetTableCommand,
  GetTableEncryptionCommand,
  GetTableMaintenanceConfigurationCommand,
  GetTableMaintenanceJobStatusCommand,
  GetTableMetadataLocationCommand,
  GetTablePolicyCommand,
  IcebergCompactionStrategy,
  JobStatus,
  ListNamespacesCommand,
  ListTableBucketsCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  MaintenanceStatus,
  OpenTableFormat,
  PutTableBucketEncryptionCommand,
  PutTableBucketMaintenanceConfigurationCommand,
  PutTableBucketMetricsConfigurationCommand,
  PutTableBucketPolicyCommand,
  PutTableMaintenanceConfigurationCommand,
  PutTablePolicyCommand,
  RenameTableCommand,
  S3Tables,
  S3TablesClient,
  S3TablesServiceException,
  SSEAlgorithm,
  TableBucketMaintenanceType,
  TableBucketType,
  TableMaintenanceJobType,
  TableMaintenanceType,
  TableType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateTableMetadataLocationCommand,
  paginateListNamespaces,
  paginateListTableBuckets,
  paginateListTables,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3TablesClient === "function")
assert(typeof S3Tables === "function")
// commands
assert(typeof CreateNamespaceCommand === "function")
assert(typeof CreateTableCommand === "function")
assert(typeof CreateTableBucketCommand === "function")
assert(typeof DeleteNamespaceCommand === "function")
assert(typeof DeleteTableCommand === "function")
assert(typeof DeleteTableBucketCommand === "function")
assert(typeof DeleteTableBucketEncryptionCommand === "function")
assert(typeof DeleteTableBucketMetricsConfigurationCommand === "function")
assert(typeof DeleteTableBucketPolicyCommand === "function")
assert(typeof DeleteTablePolicyCommand === "function")
assert(typeof GetNamespaceCommand === "function")
assert(typeof GetTableCommand === "function")
assert(typeof GetTableBucketCommand === "function")
assert(typeof GetTableBucketEncryptionCommand === "function")
assert(typeof GetTableBucketMaintenanceConfigurationCommand === "function")
assert(typeof GetTableBucketMetricsConfigurationCommand === "function")
assert(typeof GetTableBucketPolicyCommand === "function")
assert(typeof GetTableEncryptionCommand === "function")
assert(typeof GetTableMaintenanceConfigurationCommand === "function")
assert(typeof GetTableMaintenanceJobStatusCommand === "function")
assert(typeof GetTableMetadataLocationCommand === "function")
assert(typeof GetTablePolicyCommand === "function")
assert(typeof ListNamespacesCommand === "function")
assert(typeof ListTableBucketsCommand === "function")
assert(typeof ListTablesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutTableBucketEncryptionCommand === "function")
assert(typeof PutTableBucketMaintenanceConfigurationCommand === "function")
assert(typeof PutTableBucketMetricsConfigurationCommand === "function")
assert(typeof PutTableBucketPolicyCommand === "function")
assert(typeof PutTableMaintenanceConfigurationCommand === "function")
assert(typeof PutTablePolicyCommand === "function")
assert(typeof RenameTableCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateTableMetadataLocationCommand === "function")
// enums
assert(typeof IcebergCompactionStrategy === "object");
assert(typeof JobStatus === "object");
assert(typeof MaintenanceStatus === "object");
assert(typeof OpenTableFormat === "object");
assert(typeof SSEAlgorithm === "object");
assert(typeof TableBucketMaintenanceType === "object");
assert(typeof TableBucketType === "object");
assert(typeof TableMaintenanceJobType === "object");
assert(typeof TableMaintenanceType === "object");
assert(typeof TableType === "object");
// errors
assert(S3TablesServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListNamespaces === "function")
assert(typeof paginateListTableBuckets === "function")
assert(typeof paginateListTables === "function")
console.log(`S3Tables index test passed.`);
