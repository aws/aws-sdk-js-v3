import {
  ApproximateCreationDateTimePrecision,
  AttributeAction,
  BackupStatus,
  BackupType,
  BackupTypeFilter,
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchStatementErrorCodeEnum,
  BatchWriteItemCommand,
  BillingMode,
  ComparisonOperator,
  ConditionalOperator,
  ContinuousBackupsStatus,
  ContributorInsightsAction,
  ContributorInsightsMode,
  ContributorInsightsStatus,
  CreateBackupCommand,
  CreateGlobalTableCommand,
  CreateTableCommand,
  DeleteBackupCommand,
  DeleteItemCommand,
  DeleteResourcePolicyCommand,
  DeleteTableCommand,
  DescribeBackupCommand,
  DescribeContinuousBackupsCommand,
  DescribeContributorInsightsCommand,
  DescribeEndpointsCommand,
  DescribeExportCommand,
  DescribeGlobalTableCommand,
  DescribeGlobalTableSettingsCommand,
  DescribeImportCommand,
  DescribeKinesisStreamingDestinationCommand,
  DescribeLimitsCommand,
  DescribeTableCommand,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTimeToLiveCommand,
  DestinationStatus,
  DisableKinesisStreamingDestinationCommand,
  DynamoDB,
  DynamoDBClient,
  DynamoDBServiceException,
  EnableKinesisStreamingDestinationCommand,
  ExecuteStatementCommand,
  ExecuteTransactionCommand,
  ExportFormat,
  ExportStatus,
  ExportTableToPointInTimeCommand,
  ExportType,
  ExportViewType,
  GetItemCommand,
  GetResourcePolicyCommand,
  GlobalTableStatus,
  ImportStatus,
  ImportTableCommand,
  IndexStatus,
  InputCompressionType,
  InputFormat,
  KeyType,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  MultiRegionConsistency,
  PointInTimeRecoveryStatus,
  ProjectionType,
  PutItemCommand,
  PutResourcePolicyCommand,
  QueryCommand,
  ReplicaStatus,
  RestoreTableFromBackupCommand,
  RestoreTableToPointInTimeCommand,
  ReturnConsumedCapacity,
  ReturnItemCollectionMetrics,
  ReturnValue,
  ReturnValuesOnConditionCheckFailure,
  S3SseAlgorithm,
  SSEStatus,
  SSEType,
  ScalarAttributeType,
  ScanCommand,
  Select,
  StreamViewType,
  TableClass,
  TableStatus,
  TagResourceCommand,
  TimeToLiveStatus,
  TransactGetItemsCommand,
  TransactWriteItemsCommand,
  UntagResourceCommand,
  UpdateContinuousBackupsCommand,
  UpdateContributorInsightsCommand,
  UpdateGlobalTableCommand,
  UpdateGlobalTableSettingsCommand,
  UpdateItemCommand,
  UpdateKinesisStreamingDestinationCommand,
  UpdateTableCommand,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTimeToLiveCommand,
  WitnessStatus,
  paginateListContributorInsights,
  paginateListExports,
  paginateListImports,
  paginateListTables,
  paginateQuery,
  paginateScan,
  waitForTableExists,
  waitForTableNotExists,
  waitUntilTableExists,
  waitUntilTableNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DynamoDBClient === "function");
assert(typeof DynamoDB === "function");
// commands
assert(typeof BatchExecuteStatementCommand === "function");
assert(typeof BatchGetItemCommand === "function");
assert(typeof BatchWriteItemCommand === "function");
assert(typeof CreateBackupCommand === "function");
assert(typeof CreateGlobalTableCommand === "function");
assert(typeof CreateTableCommand === "function");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteItemCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteTableCommand === "function");
assert(typeof DescribeBackupCommand === "function");
assert(typeof DescribeContinuousBackupsCommand === "function");
assert(typeof DescribeContributorInsightsCommand === "function");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeExportCommand === "function");
assert(typeof DescribeGlobalTableCommand === "function");
assert(typeof DescribeGlobalTableSettingsCommand === "function");
assert(typeof DescribeImportCommand === "function");
assert(typeof DescribeKinesisStreamingDestinationCommand === "function");
assert(typeof DescribeLimitsCommand === "function");
assert(typeof DescribeTableCommand === "function");
assert(typeof DescribeTableReplicaAutoScalingCommand === "function");
assert(typeof DescribeTimeToLiveCommand === "function");
assert(typeof DisableKinesisStreamingDestinationCommand === "function");
assert(typeof EnableKinesisStreamingDestinationCommand === "function");
assert(typeof ExecuteStatementCommand === "function");
assert(typeof ExecuteTransactionCommand === "function");
assert(typeof ExportTableToPointInTimeCommand === "function");
assert(typeof GetItemCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ImportTableCommand === "function");
assert(typeof ListBackupsCommand === "function");
assert(typeof ListContributorInsightsCommand === "function");
assert(typeof ListExportsCommand === "function");
assert(typeof ListGlobalTablesCommand === "function");
assert(typeof ListImportsCommand === "function");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTagsOfResourceCommand === "function");
assert(typeof PutItemCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof QueryCommand === "function");
assert(typeof RestoreTableFromBackupCommand === "function");
assert(typeof RestoreTableToPointInTimeCommand === "function");
assert(typeof ScanCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TransactGetItemsCommand === "function");
assert(typeof TransactWriteItemsCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateContinuousBackupsCommand === "function");
assert(typeof UpdateContributorInsightsCommand === "function");
assert(typeof UpdateGlobalTableCommand === "function");
assert(typeof UpdateGlobalTableSettingsCommand === "function");
assert(typeof UpdateItemCommand === "function");
assert(typeof UpdateKinesisStreamingDestinationCommand === "function");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTableReplicaAutoScalingCommand === "function");
assert(typeof UpdateTimeToLiveCommand === "function");
// enums
assert(typeof ApproximateCreationDateTimePrecision === "object");
assert(typeof AttributeAction === "object");
assert(typeof BackupStatus === "object");
assert(typeof BackupType === "object");
assert(typeof BackupTypeFilter === "object");
assert(typeof BatchStatementErrorCodeEnum === "object");
assert(typeof BillingMode === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ConditionalOperator === "object");
assert(typeof ContinuousBackupsStatus === "object");
assert(typeof ContributorInsightsAction === "object");
assert(typeof ContributorInsightsMode === "object");
assert(typeof ContributorInsightsStatus === "object");
assert(typeof DestinationStatus === "object");
assert(typeof ExportFormat === "object");
assert(typeof ExportStatus === "object");
assert(typeof ExportType === "object");
assert(typeof ExportViewType === "object");
assert(typeof GlobalTableStatus === "object");
assert(typeof ImportStatus === "object");
assert(typeof IndexStatus === "object");
assert(typeof InputCompressionType === "object");
assert(typeof InputFormat === "object");
assert(typeof KeyType === "object");
assert(typeof MultiRegionConsistency === "object");
assert(typeof PointInTimeRecoveryStatus === "object");
assert(typeof ProjectionType === "object");
assert(typeof ReplicaStatus === "object");
assert(typeof ReturnConsumedCapacity === "object");
assert(typeof ReturnItemCollectionMetrics === "object");
assert(typeof ReturnValue === "object");
assert(typeof ReturnValuesOnConditionCheckFailure === "object");
assert(typeof S3SseAlgorithm === "object");
assert(typeof ScalarAttributeType === "object");
assert(typeof Select === "object");
assert(typeof SSEStatus === "object");
assert(typeof SSEType === "object");
assert(typeof StreamViewType === "object");
assert(typeof TableClass === "object");
assert(typeof TableStatus === "object");
assert(typeof TimeToLiveStatus === "object");
assert(typeof WitnessStatus === "object");
// errors
assert(DynamoDBServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForTableExists === "function");
assert(typeof waitForTableNotExists === "function");
assert(typeof waitUntilTableExists === "function");
assert(typeof waitUntilTableNotExists === "function");
// paginators
assert(typeof paginateListContributorInsights === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListImports === "function");
assert(typeof paginateListTables === "function");
assert(typeof paginateQuery === "function");
assert(typeof paginateScan === "function");
console.log(`DynamoDB index test passed.`);
