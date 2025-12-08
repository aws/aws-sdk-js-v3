import {
  ApproximateCreationDateTimePrecision,
  AttributeAction,
  BackupInUseException,
  BackupNotFoundException,
  BackupStatus,
  BackupType,
  BackupTypeFilter,
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchStatementErrorCodeEnum,
  BatchWriteItemCommand,
  BillingMode,
  ComparisonOperator,
  ConditionalCheckFailedException,
  ConditionalOperator,
  ContinuousBackupsStatus,
  ContinuousBackupsUnavailableException,
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
  DuplicateItemException,
  DynamoDB,
  DynamoDBClient,
  DynamoDBServiceException,
  EnableKinesisStreamingDestinationCommand,
  ExecuteStatementCommand,
  ExecuteTransactionCommand,
  ExportConflictException,
  ExportFormat,
  ExportNotFoundException,
  ExportStatus,
  ExportTableToPointInTimeCommand,
  ExportType,
  ExportViewType,
  GetItemCommand,
  GetResourcePolicyCommand,
  GlobalTableAlreadyExistsException,
  GlobalTableNotFoundException,
  GlobalTableStatus,
  IdempotentParameterMismatchException,
  ImportConflictException,
  ImportNotFoundException,
  ImportStatus,
  ImportTableCommand,
  IndexNotFoundException,
  IndexStatus,
  InputCompressionType,
  InputFormat,
  InternalServerError,
  InvalidEndpointException,
  InvalidExportTimeException,
  InvalidRestoreTimeException,
  ItemCollectionSizeLimitExceededException,
  KeyType,
  LimitExceededException,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  MultiRegionConsistency,
  PointInTimeRecoveryStatus,
  PointInTimeRecoveryUnavailableException,
  PolicyNotFoundException,
  ProjectionType,
  ProvisionedThroughputExceededException,
  PutItemCommand,
  PutResourcePolicyCommand,
  QueryCommand,
  ReplicaAlreadyExistsException,
  ReplicaNotFoundException,
  ReplicaStatus,
  ReplicatedWriteConflictException,
  RequestLimitExceeded,
  ResourceInUseException,
  ResourceNotFoundException,
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
  TableAlreadyExistsException,
  TableClass,
  TableInUseException,
  TableNotFoundException,
  TableStatus,
  TagResourceCommand,
  ThrottlingException,
  TimeToLiveStatus,
  TransactGetItemsCommand,
  TransactWriteItemsCommand,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
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
assert(BackupInUseException.prototype instanceof DynamoDBServiceException);
assert(BackupNotFoundException.prototype instanceof DynamoDBServiceException);
assert(ConditionalCheckFailedException.prototype instanceof DynamoDBServiceException);
assert(ContinuousBackupsUnavailableException.prototype instanceof DynamoDBServiceException);
assert(DuplicateItemException.prototype instanceof DynamoDBServiceException);
assert(ExportConflictException.prototype instanceof DynamoDBServiceException);
assert(ExportNotFoundException.prototype instanceof DynamoDBServiceException);
assert(GlobalTableAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(GlobalTableNotFoundException.prototype instanceof DynamoDBServiceException);
assert(IdempotentParameterMismatchException.prototype instanceof DynamoDBServiceException);
assert(ImportConflictException.prototype instanceof DynamoDBServiceException);
assert(ImportNotFoundException.prototype instanceof DynamoDBServiceException);
assert(IndexNotFoundException.prototype instanceof DynamoDBServiceException);
assert(InternalServerError.prototype instanceof DynamoDBServiceException);
assert(InvalidEndpointException.prototype instanceof DynamoDBServiceException);
assert(InvalidExportTimeException.prototype instanceof DynamoDBServiceException);
assert(InvalidRestoreTimeException.prototype instanceof DynamoDBServiceException);
assert(ItemCollectionSizeLimitExceededException.prototype instanceof DynamoDBServiceException);
assert(LimitExceededException.prototype instanceof DynamoDBServiceException);
assert(PointInTimeRecoveryUnavailableException.prototype instanceof DynamoDBServiceException);
assert(PolicyNotFoundException.prototype instanceof DynamoDBServiceException);
assert(ProvisionedThroughputExceededException.prototype instanceof DynamoDBServiceException);
assert(ReplicaAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(ReplicaNotFoundException.prototype instanceof DynamoDBServiceException);
assert(ReplicatedWriteConflictException.prototype instanceof DynamoDBServiceException);
assert(RequestLimitExceeded.prototype instanceof DynamoDBServiceException);
assert(ResourceInUseException.prototype instanceof DynamoDBServiceException);
assert(ResourceNotFoundException.prototype instanceof DynamoDBServiceException);
assert(TableAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(TableInUseException.prototype instanceof DynamoDBServiceException);
assert(TableNotFoundException.prototype instanceof DynamoDBServiceException);
assert(ThrottlingException.prototype instanceof DynamoDBServiceException);
assert(TransactionCanceledException.prototype instanceof DynamoDBServiceException);
assert(TransactionConflictException.prototype instanceof DynamoDBServiceException);
assert(TransactionInProgressException.prototype instanceof DynamoDBServiceException);
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
