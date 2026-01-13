import {
  ApproximateCreationDateTimePrecision,
  ArchivalSummary$,
  AttributeAction,
  AttributeDefinition$,
  AttributeValue$,
  AttributeValueUpdate$,
  AutoScalingPolicyDescription$,
  AutoScalingPolicyUpdate$,
  AutoScalingSettingsDescription$,
  AutoScalingSettingsUpdate$,
  AutoScalingTargetTrackingScalingPolicyConfigurationDescription$,
  AutoScalingTargetTrackingScalingPolicyConfigurationUpdate$,
  BackupDescription$,
  BackupDetails$,
  BackupInUseException,
  BackupInUseException$,
  BackupNotFoundException,
  BackupNotFoundException$,
  BackupStatus,
  BackupSummary$,
  BackupType,
  BackupTypeFilter,
  BatchExecuteStatement$,
  BatchExecuteStatementCommand,
  BatchExecuteStatementInput$,
  BatchExecuteStatementOutput$,
  BatchGetItem$,
  BatchGetItemCommand,
  BatchGetItemInput$,
  BatchGetItemOutput$,
  BatchStatementError$,
  BatchStatementErrorCodeEnum,
  BatchStatementRequest$,
  BatchStatementResponse$,
  BatchWriteItem$,
  BatchWriteItemCommand,
  BatchWriteItemInput$,
  BatchWriteItemOutput$,
  BillingMode,
  BillingModeSummary$,
  CancellationReason$,
  Capacity$,
  ComparisonOperator,
  Condition$,
  ConditionalCheckFailedException,
  ConditionalCheckFailedException$,
  ConditionalOperator,
  ConditionCheck$,
  ConsumedCapacity$,
  ContinuousBackupsDescription$,
  ContinuousBackupsStatus,
  ContinuousBackupsUnavailableException,
  ContinuousBackupsUnavailableException$,
  ContributorInsightsAction,
  ContributorInsightsMode,
  ContributorInsightsStatus,
  ContributorInsightsSummary$,
  CreateBackup$,
  CreateBackupCommand,
  CreateBackupInput$,
  CreateBackupOutput$,
  CreateGlobalSecondaryIndexAction$,
  CreateGlobalTable$,
  CreateGlobalTableCommand,
  CreateGlobalTableInput$,
  CreateGlobalTableOutput$,
  CreateGlobalTableWitnessGroupMemberAction$,
  CreateReplicaAction$,
  CreateReplicationGroupMemberAction$,
  CreateTable$,
  CreateTableCommand,
  CreateTableInput$,
  CreateTableOutput$,
  CsvOptions$,
  Delete$,
  DeleteBackup$,
  DeleteBackupCommand,
  DeleteBackupInput$,
  DeleteBackupOutput$,
  DeleteGlobalSecondaryIndexAction$,
  DeleteGlobalTableWitnessGroupMemberAction$,
  DeleteItem$,
  DeleteItemCommand,
  DeleteItemInput$,
  DeleteItemOutput$,
  DeleteReplicaAction$,
  DeleteReplicationGroupMemberAction$,
  DeleteRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyInput$,
  DeleteResourcePolicyOutput$,
  DeleteTable$,
  DeleteTableCommand,
  DeleteTableInput$,
  DeleteTableOutput$,
  DescribeBackup$,
  DescribeBackupCommand,
  DescribeBackupInput$,
  DescribeBackupOutput$,
  DescribeContinuousBackups$,
  DescribeContinuousBackupsCommand,
  DescribeContinuousBackupsInput$,
  DescribeContinuousBackupsOutput$,
  DescribeContributorInsights$,
  DescribeContributorInsightsCommand,
  DescribeContributorInsightsInput$,
  DescribeContributorInsightsOutput$,
  DescribeEndpoints$,
  DescribeEndpointsCommand,
  DescribeEndpointsRequest$,
  DescribeEndpointsResponse$,
  DescribeExport$,
  DescribeExportCommand,
  DescribeExportInput$,
  DescribeExportOutput$,
  DescribeGlobalTable$,
  DescribeGlobalTableCommand,
  DescribeGlobalTableInput$,
  DescribeGlobalTableOutput$,
  DescribeGlobalTableSettings$,
  DescribeGlobalTableSettingsCommand,
  DescribeGlobalTableSettingsInput$,
  DescribeGlobalTableSettingsOutput$,
  DescribeImport$,
  DescribeImportCommand,
  DescribeImportInput$,
  DescribeImportOutput$,
  DescribeKinesisStreamingDestination$,
  DescribeKinesisStreamingDestinationCommand,
  DescribeKinesisStreamingDestinationInput$,
  DescribeKinesisStreamingDestinationOutput$,
  DescribeLimits$,
  DescribeLimitsCommand,
  DescribeLimitsInput$,
  DescribeLimitsOutput$,
  DescribeTable$,
  DescribeTableCommand,
  DescribeTableInput$,
  DescribeTableOutput$,
  DescribeTableReplicaAutoScaling$,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTableReplicaAutoScalingInput$,
  DescribeTableReplicaAutoScalingOutput$,
  DescribeTimeToLive$,
  DescribeTimeToLiveCommand,
  DescribeTimeToLiveInput$,
  DescribeTimeToLiveOutput$,
  DestinationStatus,
  DisableKinesisStreamingDestination$,
  DisableKinesisStreamingDestinationCommand,
  DuplicateItemException,
  DuplicateItemException$,
  DynamoDB,
  DynamoDBClient,
  DynamoDBServiceException,
  EnableKinesisStreamingConfiguration$,
  EnableKinesisStreamingDestination$,
  EnableKinesisStreamingDestinationCommand,
  Endpoint$,
  ExecuteStatement$,
  ExecuteStatementCommand,
  ExecuteStatementInput$,
  ExecuteStatementOutput$,
  ExecuteTransaction$,
  ExecuteTransactionCommand,
  ExecuteTransactionInput$,
  ExecuteTransactionOutput$,
  ExpectedAttributeValue$,
  ExportConflictException,
  ExportConflictException$,
  ExportDescription$,
  ExportFormat,
  ExportNotFoundException,
  ExportNotFoundException$,
  ExportStatus,
  ExportSummary$,
  ExportTableToPointInTime$,
  ExportTableToPointInTimeCommand,
  ExportTableToPointInTimeInput$,
  ExportTableToPointInTimeOutput$,
  ExportType,
  ExportViewType,
  FailureException$,
  Get$,
  GetItem$,
  GetItemCommand,
  GetItemInput$,
  GetItemOutput$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  GlobalSecondaryIndex$,
  GlobalSecondaryIndexAutoScalingUpdate$,
  GlobalSecondaryIndexDescription$,
  GlobalSecondaryIndexInfo$,
  GlobalSecondaryIndexUpdate$,
  GlobalSecondaryIndexWarmThroughputDescription$,
  GlobalTable$,
  GlobalTableAlreadyExistsException,
  GlobalTableAlreadyExistsException$,
  GlobalTableDescription$,
  GlobalTableGlobalSecondaryIndexSettingsUpdate$,
  GlobalTableNotFoundException,
  GlobalTableNotFoundException$,
  GlobalTableStatus,
  GlobalTableWitnessDescription$,
  GlobalTableWitnessGroupUpdate$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  ImportConflictException,
  ImportConflictException$,
  ImportNotFoundException,
  ImportNotFoundException$,
  ImportStatus,
  ImportSummary$,
  ImportTable$,
  ImportTableCommand,
  ImportTableDescription$,
  ImportTableInput$,
  ImportTableOutput$,
  IncrementalExportSpecification$,
  IndexNotFoundException,
  IndexNotFoundException$,
  IndexStatus,
  InputCompressionType,
  InputFormat,
  InputFormatOptions$,
  InternalServerError,
  InternalServerError$,
  InvalidEndpointException,
  InvalidEndpointException$,
  InvalidExportTimeException,
  InvalidExportTimeException$,
  InvalidRestoreTimeException,
  InvalidRestoreTimeException$,
  ItemCollectionMetrics$,
  ItemCollectionSizeLimitExceededException,
  ItemCollectionSizeLimitExceededException$,
  ItemResponse$,
  KeysAndAttributes$,
  KeySchemaElement$,
  KeyType,
  KinesisDataStreamDestination$,
  KinesisStreamingDestinationInput$,
  KinesisStreamingDestinationOutput$,
  LimitExceededException,
  LimitExceededException$,
  ListBackups$,
  ListBackupsCommand,
  ListBackupsInput$,
  ListBackupsOutput$,
  ListContributorInsights$,
  ListContributorInsightsCommand,
  ListContributorInsightsInput$,
  ListContributorInsightsOutput$,
  ListExports$,
  ListExportsCommand,
  ListExportsInput$,
  ListExportsOutput$,
  ListGlobalTables$,
  ListGlobalTablesCommand,
  ListGlobalTablesInput$,
  ListGlobalTablesOutput$,
  ListImports$,
  ListImportsCommand,
  ListImportsInput$,
  ListImportsOutput$,
  ListTables$,
  ListTablesCommand,
  ListTablesInput$,
  ListTablesOutput$,
  ListTagsOfResource$,
  ListTagsOfResourceCommand,
  ListTagsOfResourceInput$,
  ListTagsOfResourceOutput$,
  LocalSecondaryIndex$,
  LocalSecondaryIndexDescription$,
  LocalSecondaryIndexInfo$,
  MultiRegionConsistency,
  OnDemandThroughput$,
  OnDemandThroughputOverride$,
  paginateListContributorInsights,
  paginateListExports,
  paginateListImports,
  paginateListTables,
  paginateQuery,
  paginateScan,
  ParameterizedStatement$,
  PointInTimeRecoveryDescription$,
  PointInTimeRecoverySpecification$,
  PointInTimeRecoveryStatus,
  PointInTimeRecoveryUnavailableException,
  PointInTimeRecoveryUnavailableException$,
  PolicyNotFoundException,
  PolicyNotFoundException$,
  Projection$,
  ProjectionType,
  ProvisionedThroughput$,
  ProvisionedThroughputDescription$,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputExceededException$,
  ProvisionedThroughputOverride$,
  Put$,
  PutItem$,
  PutItemCommand,
  PutItemInput$,
  PutItemOutput$,
  PutRequest$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyInput$,
  PutResourcePolicyOutput$,
  Query$,
  QueryCommand,
  QueryInput$,
  QueryOutput$,
  Replica$,
  ReplicaAlreadyExistsException,
  ReplicaAlreadyExistsException$,
  ReplicaAutoScalingDescription$,
  ReplicaAutoScalingUpdate$,
  ReplicaDescription$,
  ReplicaGlobalSecondaryIndex$,
  ReplicaGlobalSecondaryIndexAutoScalingDescription$,
  ReplicaGlobalSecondaryIndexAutoScalingUpdate$,
  ReplicaGlobalSecondaryIndexDescription$,
  ReplicaGlobalSecondaryIndexSettingsDescription$,
  ReplicaGlobalSecondaryIndexSettingsUpdate$,
  ReplicaNotFoundException,
  ReplicaNotFoundException$,
  ReplicaSettingsDescription$,
  ReplicaSettingsUpdate$,
  ReplicaStatus,
  ReplicatedWriteConflictException,
  ReplicatedWriteConflictException$,
  ReplicationGroupUpdate$,
  ReplicaUpdate$,
  RequestLimitExceeded,
  RequestLimitExceeded$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreSummary$,
  RestoreTableFromBackup$,
  RestoreTableFromBackupCommand,
  RestoreTableFromBackupInput$,
  RestoreTableFromBackupOutput$,
  RestoreTableToPointInTime$,
  RestoreTableToPointInTimeCommand,
  RestoreTableToPointInTimeInput$,
  RestoreTableToPointInTimeOutput$,
  ReturnConsumedCapacity,
  ReturnItemCollectionMetrics,
  ReturnValue,
  ReturnValuesOnConditionCheckFailure,
  S3BucketSource$,
  S3SseAlgorithm,
  ScalarAttributeType,
  Scan$,
  ScanCommand,
  ScanInput$,
  ScanOutput$,
  Select,
  SourceTableDetails$,
  SourceTableFeatureDetails$,
  SSEDescription$,
  SSESpecification$,
  SSEStatus,
  SSEType,
  StreamSpecification$,
  StreamViewType,
  TableAlreadyExistsException,
  TableAlreadyExistsException$,
  TableAutoScalingDescription$,
  TableClass,
  TableClassSummary$,
  TableCreationParameters$,
  TableDescription$,
  TableInUseException,
  TableInUseException$,
  TableNotFoundException,
  TableNotFoundException$,
  TableStatus,
  TableWarmThroughputDescription$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  ThrottlingException,
  ThrottlingException$,
  ThrottlingReason$,
  TimeToLiveDescription$,
  TimeToLiveSpecification$,
  TimeToLiveStatus,
  TransactGetItem$,
  TransactGetItems$,
  TransactGetItemsCommand,
  TransactGetItemsInput$,
  TransactGetItemsOutput$,
  TransactionCanceledException,
  TransactionCanceledException$,
  TransactionConflictException,
  TransactionConflictException$,
  TransactionInProgressException,
  TransactionInProgressException$,
  TransactWriteItem$,
  TransactWriteItems$,
  TransactWriteItemsCommand,
  TransactWriteItemsInput$,
  TransactWriteItemsOutput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  Update$,
  UpdateContinuousBackups$,
  UpdateContinuousBackupsCommand,
  UpdateContinuousBackupsInput$,
  UpdateContinuousBackupsOutput$,
  UpdateContributorInsights$,
  UpdateContributorInsightsCommand,
  UpdateContributorInsightsInput$,
  UpdateContributorInsightsOutput$,
  UpdateGlobalSecondaryIndexAction$,
  UpdateGlobalTable$,
  UpdateGlobalTableCommand,
  UpdateGlobalTableInput$,
  UpdateGlobalTableOutput$,
  UpdateGlobalTableSettings$,
  UpdateGlobalTableSettingsCommand,
  UpdateGlobalTableSettingsInput$,
  UpdateGlobalTableSettingsOutput$,
  UpdateItem$,
  UpdateItemCommand,
  UpdateItemInput$,
  UpdateItemOutput$,
  UpdateKinesisStreamingConfiguration$,
  UpdateKinesisStreamingDestination$,
  UpdateKinesisStreamingDestinationCommand,
  UpdateKinesisStreamingDestinationInput$,
  UpdateKinesisStreamingDestinationOutput$,
  UpdateReplicationGroupMemberAction$,
  UpdateTable$,
  UpdateTableCommand,
  UpdateTableInput$,
  UpdateTableOutput$,
  UpdateTableReplicaAutoScaling$,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTableReplicaAutoScalingInput$,
  UpdateTableReplicaAutoScalingOutput$,
  UpdateTimeToLive$,
  UpdateTimeToLiveCommand,
  UpdateTimeToLiveInput$,
  UpdateTimeToLiveOutput$,
  waitForTableExists,
  waitForTableNotExists,
  waitUntilTableExists,
  waitUntilTableNotExists,
  WarmThroughput$,
  WitnessStatus,
  WriteRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DynamoDBClient === "function");
assert(typeof DynamoDB === "function");
// commands
assert(typeof BatchExecuteStatementCommand === "function");
assert(typeof BatchExecuteStatement$ === "object");
assert(typeof BatchGetItemCommand === "function");
assert(typeof BatchGetItem$ === "object");
assert(typeof BatchWriteItemCommand === "function");
assert(typeof BatchWriteItem$ === "object");
assert(typeof CreateBackupCommand === "function");
assert(typeof CreateBackup$ === "object");
assert(typeof CreateGlobalTableCommand === "function");
assert(typeof CreateGlobalTable$ === "object");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTable$ === "object");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteBackup$ === "object");
assert(typeof DeleteItemCommand === "function");
assert(typeof DeleteItem$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTable$ === "object");
assert(typeof DescribeBackupCommand === "function");
assert(typeof DescribeBackup$ === "object");
assert(typeof DescribeContinuousBackupsCommand === "function");
assert(typeof DescribeContinuousBackups$ === "object");
assert(typeof DescribeContributorInsightsCommand === "function");
assert(typeof DescribeContributorInsights$ === "object");
assert(typeof DescribeEndpointsCommand === "function");
assert(typeof DescribeEndpoints$ === "object");
assert(typeof DescribeExportCommand === "function");
assert(typeof DescribeExport$ === "object");
assert(typeof DescribeGlobalTableCommand === "function");
assert(typeof DescribeGlobalTable$ === "object");
assert(typeof DescribeGlobalTableSettingsCommand === "function");
assert(typeof DescribeGlobalTableSettings$ === "object");
assert(typeof DescribeImportCommand === "function");
assert(typeof DescribeImport$ === "object");
assert(typeof DescribeKinesisStreamingDestinationCommand === "function");
assert(typeof DescribeKinesisStreamingDestination$ === "object");
assert(typeof DescribeLimitsCommand === "function");
assert(typeof DescribeLimits$ === "object");
assert(typeof DescribeTableCommand === "function");
assert(typeof DescribeTable$ === "object");
assert(typeof DescribeTableReplicaAutoScalingCommand === "function");
assert(typeof DescribeTableReplicaAutoScaling$ === "object");
assert(typeof DescribeTimeToLiveCommand === "function");
assert(typeof DescribeTimeToLive$ === "object");
assert(typeof DisableKinesisStreamingDestinationCommand === "function");
assert(typeof DisableKinesisStreamingDestination$ === "object");
assert(typeof EnableKinesisStreamingDestinationCommand === "function");
assert(typeof EnableKinesisStreamingDestination$ === "object");
assert(typeof ExecuteStatementCommand === "function");
assert(typeof ExecuteStatement$ === "object");
assert(typeof ExecuteTransactionCommand === "function");
assert(typeof ExecuteTransaction$ === "object");
assert(typeof ExportTableToPointInTimeCommand === "function");
assert(typeof ExportTableToPointInTime$ === "object");
assert(typeof GetItemCommand === "function");
assert(typeof GetItem$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ImportTableCommand === "function");
assert(typeof ImportTable$ === "object");
assert(typeof ListBackupsCommand === "function");
assert(typeof ListBackups$ === "object");
assert(typeof ListContributorInsightsCommand === "function");
assert(typeof ListContributorInsights$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof ListGlobalTablesCommand === "function");
assert(typeof ListGlobalTables$ === "object");
assert(typeof ListImportsCommand === "function");
assert(typeof ListImports$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
assert(typeof ListTagsOfResourceCommand === "function");
assert(typeof ListTagsOfResource$ === "object");
assert(typeof PutItemCommand === "function");
assert(typeof PutItem$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof QueryCommand === "function");
assert(typeof Query$ === "object");
assert(typeof RestoreTableFromBackupCommand === "function");
assert(typeof RestoreTableFromBackup$ === "object");
assert(typeof RestoreTableToPointInTimeCommand === "function");
assert(typeof RestoreTableToPointInTime$ === "object");
assert(typeof ScanCommand === "function");
assert(typeof Scan$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TransactGetItemsCommand === "function");
assert(typeof TransactGetItems$ === "object");
assert(typeof TransactWriteItemsCommand === "function");
assert(typeof TransactWriteItems$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateContinuousBackupsCommand === "function");
assert(typeof UpdateContinuousBackups$ === "object");
assert(typeof UpdateContributorInsightsCommand === "function");
assert(typeof UpdateContributorInsights$ === "object");
assert(typeof UpdateGlobalTableCommand === "function");
assert(typeof UpdateGlobalTable$ === "object");
assert(typeof UpdateGlobalTableSettingsCommand === "function");
assert(typeof UpdateGlobalTableSettings$ === "object");
assert(typeof UpdateItemCommand === "function");
assert(typeof UpdateItem$ === "object");
assert(typeof UpdateKinesisStreamingDestinationCommand === "function");
assert(typeof UpdateKinesisStreamingDestination$ === "object");
assert(typeof UpdateTableCommand === "function");
assert(typeof UpdateTable$ === "object");
assert(typeof UpdateTableReplicaAutoScalingCommand === "function");
assert(typeof UpdateTableReplicaAutoScaling$ === "object");
assert(typeof UpdateTimeToLiveCommand === "function");
assert(typeof UpdateTimeToLive$ === "object");
// structural schemas
assert(typeof ArchivalSummary$ === "object");
assert(typeof AttributeDefinition$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof AttributeValueUpdate$ === "object");
assert(typeof AutoScalingPolicyDescription$ === "object");
assert(typeof AutoScalingPolicyUpdate$ === "object");
assert(typeof AutoScalingSettingsDescription$ === "object");
assert(typeof AutoScalingSettingsUpdate$ === "object");
assert(typeof AutoScalingTargetTrackingScalingPolicyConfigurationDescription$ === "object");
assert(typeof AutoScalingTargetTrackingScalingPolicyConfigurationUpdate$ === "object");
assert(typeof BackupDescription$ === "object");
assert(typeof BackupDetails$ === "object");
assert(typeof BackupSummary$ === "object");
assert(typeof BatchExecuteStatementInput$ === "object");
assert(typeof BatchExecuteStatementOutput$ === "object");
assert(typeof BatchGetItemInput$ === "object");
assert(typeof BatchGetItemOutput$ === "object");
assert(typeof BatchStatementError$ === "object");
assert(typeof BatchStatementRequest$ === "object");
assert(typeof BatchStatementResponse$ === "object");
assert(typeof BatchWriteItemInput$ === "object");
assert(typeof BatchWriteItemOutput$ === "object");
assert(typeof BillingModeSummary$ === "object");
assert(typeof CancellationReason$ === "object");
assert(typeof Capacity$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionCheck$ === "object");
assert(typeof ConsumedCapacity$ === "object");
assert(typeof ContinuousBackupsDescription$ === "object");
assert(typeof ContributorInsightsSummary$ === "object");
assert(typeof CreateBackupInput$ === "object");
assert(typeof CreateBackupOutput$ === "object");
assert(typeof CreateGlobalSecondaryIndexAction$ === "object");
assert(typeof CreateGlobalTableInput$ === "object");
assert(typeof CreateGlobalTableOutput$ === "object");
assert(typeof CreateGlobalTableWitnessGroupMemberAction$ === "object");
assert(typeof CreateReplicaAction$ === "object");
assert(typeof CreateReplicationGroupMemberAction$ === "object");
assert(typeof CreateTableInput$ === "object");
assert(typeof CreateTableOutput$ === "object");
assert(typeof CsvOptions$ === "object");
assert(typeof Delete$ === "object");
assert(typeof DeleteBackupInput$ === "object");
assert(typeof DeleteBackupOutput$ === "object");
assert(typeof DeleteGlobalSecondaryIndexAction$ === "object");
assert(typeof DeleteGlobalTableWitnessGroupMemberAction$ === "object");
assert(typeof DeleteItemInput$ === "object");
assert(typeof DeleteItemOutput$ === "object");
assert(typeof DeleteReplicaAction$ === "object");
assert(typeof DeleteReplicationGroupMemberAction$ === "object");
assert(typeof DeleteRequest$ === "object");
assert(typeof DeleteResourcePolicyInput$ === "object");
assert(typeof DeleteResourcePolicyOutput$ === "object");
assert(typeof DeleteTableInput$ === "object");
assert(typeof DeleteTableOutput$ === "object");
assert(typeof DescribeBackupInput$ === "object");
assert(typeof DescribeBackupOutput$ === "object");
assert(typeof DescribeContinuousBackupsInput$ === "object");
assert(typeof DescribeContinuousBackupsOutput$ === "object");
assert(typeof DescribeContributorInsightsInput$ === "object");
assert(typeof DescribeContributorInsightsOutput$ === "object");
assert(typeof DescribeEndpointsRequest$ === "object");
assert(typeof DescribeEndpointsResponse$ === "object");
assert(typeof DescribeExportInput$ === "object");
assert(typeof DescribeExportOutput$ === "object");
assert(typeof DescribeGlobalTableInput$ === "object");
assert(typeof DescribeGlobalTableOutput$ === "object");
assert(typeof DescribeGlobalTableSettingsInput$ === "object");
assert(typeof DescribeGlobalTableSettingsOutput$ === "object");
assert(typeof DescribeImportInput$ === "object");
assert(typeof DescribeImportOutput$ === "object");
assert(typeof DescribeKinesisStreamingDestinationInput$ === "object");
assert(typeof DescribeKinesisStreamingDestinationOutput$ === "object");
assert(typeof DescribeLimitsInput$ === "object");
assert(typeof DescribeLimitsOutput$ === "object");
assert(typeof DescribeTableInput$ === "object");
assert(typeof DescribeTableOutput$ === "object");
assert(typeof DescribeTableReplicaAutoScalingInput$ === "object");
assert(typeof DescribeTableReplicaAutoScalingOutput$ === "object");
assert(typeof DescribeTimeToLiveInput$ === "object");
assert(typeof DescribeTimeToLiveOutput$ === "object");
assert(typeof EnableKinesisStreamingConfiguration$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ExecuteStatementInput$ === "object");
assert(typeof ExecuteStatementOutput$ === "object");
assert(typeof ExecuteTransactionInput$ === "object");
assert(typeof ExecuteTransactionOutput$ === "object");
assert(typeof ExpectedAttributeValue$ === "object");
assert(typeof ExportDescription$ === "object");
assert(typeof ExportSummary$ === "object");
assert(typeof ExportTableToPointInTimeInput$ === "object");
assert(typeof ExportTableToPointInTimeOutput$ === "object");
assert(typeof FailureException$ === "object");
assert(typeof Get$ === "object");
assert(typeof GetItemInput$ === "object");
assert(typeof GetItemOutput$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof GlobalSecondaryIndex$ === "object");
assert(typeof GlobalSecondaryIndexAutoScalingUpdate$ === "object");
assert(typeof GlobalSecondaryIndexDescription$ === "object");
assert(typeof GlobalSecondaryIndexInfo$ === "object");
assert(typeof GlobalSecondaryIndexUpdate$ === "object");
assert(typeof GlobalSecondaryIndexWarmThroughputDescription$ === "object");
assert(typeof GlobalTable$ === "object");
assert(typeof GlobalTableDescription$ === "object");
assert(typeof GlobalTableGlobalSecondaryIndexSettingsUpdate$ === "object");
assert(typeof GlobalTableWitnessDescription$ === "object");
assert(typeof GlobalTableWitnessGroupUpdate$ === "object");
assert(typeof ImportSummary$ === "object");
assert(typeof ImportTableDescription$ === "object");
assert(typeof ImportTableInput$ === "object");
assert(typeof ImportTableOutput$ === "object");
assert(typeof IncrementalExportSpecification$ === "object");
assert(typeof InputFormatOptions$ === "object");
assert(typeof ItemCollectionMetrics$ === "object");
assert(typeof ItemResponse$ === "object");
assert(typeof KeysAndAttributes$ === "object");
assert(typeof KeySchemaElement$ === "object");
assert(typeof KinesisDataStreamDestination$ === "object");
assert(typeof KinesisStreamingDestinationInput$ === "object");
assert(typeof KinesisStreamingDestinationOutput$ === "object");
assert(typeof ListBackupsInput$ === "object");
assert(typeof ListBackupsOutput$ === "object");
assert(typeof ListContributorInsightsInput$ === "object");
assert(typeof ListContributorInsightsOutput$ === "object");
assert(typeof ListExportsInput$ === "object");
assert(typeof ListExportsOutput$ === "object");
assert(typeof ListGlobalTablesInput$ === "object");
assert(typeof ListGlobalTablesOutput$ === "object");
assert(typeof ListImportsInput$ === "object");
assert(typeof ListImportsOutput$ === "object");
assert(typeof ListTablesInput$ === "object");
assert(typeof ListTablesOutput$ === "object");
assert(typeof ListTagsOfResourceInput$ === "object");
assert(typeof ListTagsOfResourceOutput$ === "object");
assert(typeof LocalSecondaryIndex$ === "object");
assert(typeof LocalSecondaryIndexDescription$ === "object");
assert(typeof LocalSecondaryIndexInfo$ === "object");
assert(typeof OnDemandThroughput$ === "object");
assert(typeof OnDemandThroughputOverride$ === "object");
assert(typeof ParameterizedStatement$ === "object");
assert(typeof PointInTimeRecoveryDescription$ === "object");
assert(typeof PointInTimeRecoverySpecification$ === "object");
assert(typeof Projection$ === "object");
assert(typeof ProvisionedThroughput$ === "object");
assert(typeof ProvisionedThroughputDescription$ === "object");
assert(typeof ProvisionedThroughputOverride$ === "object");
assert(typeof Put$ === "object");
assert(typeof PutItemInput$ === "object");
assert(typeof PutItemOutput$ === "object");
assert(typeof PutRequest$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof PutResourcePolicyOutput$ === "object");
assert(typeof QueryInput$ === "object");
assert(typeof QueryOutput$ === "object");
assert(typeof Replica$ === "object");
assert(typeof ReplicaAutoScalingDescription$ === "object");
assert(typeof ReplicaAutoScalingUpdate$ === "object");
assert(typeof ReplicaDescription$ === "object");
assert(typeof ReplicaGlobalSecondaryIndex$ === "object");
assert(typeof ReplicaGlobalSecondaryIndexAutoScalingDescription$ === "object");
assert(typeof ReplicaGlobalSecondaryIndexAutoScalingUpdate$ === "object");
assert(typeof ReplicaGlobalSecondaryIndexDescription$ === "object");
assert(typeof ReplicaGlobalSecondaryIndexSettingsDescription$ === "object");
assert(typeof ReplicaGlobalSecondaryIndexSettingsUpdate$ === "object");
assert(typeof ReplicaSettingsDescription$ === "object");
assert(typeof ReplicaSettingsUpdate$ === "object");
assert(typeof ReplicationGroupUpdate$ === "object");
assert(typeof ReplicaUpdate$ === "object");
assert(typeof RestoreSummary$ === "object");
assert(typeof RestoreTableFromBackupInput$ === "object");
assert(typeof RestoreTableFromBackupOutput$ === "object");
assert(typeof RestoreTableToPointInTimeInput$ === "object");
assert(typeof RestoreTableToPointInTimeOutput$ === "object");
assert(typeof S3BucketSource$ === "object");
assert(typeof ScanInput$ === "object");
assert(typeof ScanOutput$ === "object");
assert(typeof SourceTableDetails$ === "object");
assert(typeof SourceTableFeatureDetails$ === "object");
assert(typeof SSEDescription$ === "object");
assert(typeof SSESpecification$ === "object");
assert(typeof StreamSpecification$ === "object");
assert(typeof TableAutoScalingDescription$ === "object");
assert(typeof TableClassSummary$ === "object");
assert(typeof TableCreationParameters$ === "object");
assert(typeof TableDescription$ === "object");
assert(typeof TableWarmThroughputDescription$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof ThrottlingReason$ === "object");
assert(typeof TimeToLiveDescription$ === "object");
assert(typeof TimeToLiveSpecification$ === "object");
assert(typeof TransactGetItem$ === "object");
assert(typeof TransactGetItemsInput$ === "object");
assert(typeof TransactGetItemsOutput$ === "object");
assert(typeof TransactWriteItem$ === "object");
assert(typeof TransactWriteItemsInput$ === "object");
assert(typeof TransactWriteItemsOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof Update$ === "object");
assert(typeof UpdateContinuousBackupsInput$ === "object");
assert(typeof UpdateContinuousBackupsOutput$ === "object");
assert(typeof UpdateContributorInsightsInput$ === "object");
assert(typeof UpdateContributorInsightsOutput$ === "object");
assert(typeof UpdateGlobalSecondaryIndexAction$ === "object");
assert(typeof UpdateGlobalTableInput$ === "object");
assert(typeof UpdateGlobalTableOutput$ === "object");
assert(typeof UpdateGlobalTableSettingsInput$ === "object");
assert(typeof UpdateGlobalTableSettingsOutput$ === "object");
assert(typeof UpdateItemInput$ === "object");
assert(typeof UpdateItemOutput$ === "object");
assert(typeof UpdateKinesisStreamingConfiguration$ === "object");
assert(typeof UpdateKinesisStreamingDestinationInput$ === "object");
assert(typeof UpdateKinesisStreamingDestinationOutput$ === "object");
assert(typeof UpdateReplicationGroupMemberAction$ === "object");
assert(typeof UpdateTableInput$ === "object");
assert(typeof UpdateTableOutput$ === "object");
assert(typeof UpdateTableReplicaAutoScalingInput$ === "object");
assert(typeof UpdateTableReplicaAutoScalingOutput$ === "object");
assert(typeof UpdateTimeToLiveInput$ === "object");
assert(typeof UpdateTimeToLiveOutput$ === "object");
assert(typeof WarmThroughput$ === "object");
assert(typeof WriteRequest$ === "object");
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
assert(typeof BackupInUseException$ === "object");
assert(BackupNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof BackupNotFoundException$ === "object");
assert(ConditionalCheckFailedException.prototype instanceof DynamoDBServiceException);
assert(typeof ConditionalCheckFailedException$ === "object");
assert(ContinuousBackupsUnavailableException.prototype instanceof DynamoDBServiceException);
assert(typeof ContinuousBackupsUnavailableException$ === "object");
assert(DuplicateItemException.prototype instanceof DynamoDBServiceException);
assert(typeof DuplicateItemException$ === "object");
assert(ExportConflictException.prototype instanceof DynamoDBServiceException);
assert(typeof ExportConflictException$ === "object");
assert(ExportNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof ExportNotFoundException$ === "object");
assert(GlobalTableAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(typeof GlobalTableAlreadyExistsException$ === "object");
assert(GlobalTableNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof GlobalTableNotFoundException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof DynamoDBServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(ImportConflictException.prototype instanceof DynamoDBServiceException);
assert(typeof ImportConflictException$ === "object");
assert(ImportNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof ImportNotFoundException$ === "object");
assert(IndexNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof IndexNotFoundException$ === "object");
assert(InternalServerError.prototype instanceof DynamoDBServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidEndpointException.prototype instanceof DynamoDBServiceException);
assert(typeof InvalidEndpointException$ === "object");
assert(InvalidExportTimeException.prototype instanceof DynamoDBServiceException);
assert(typeof InvalidExportTimeException$ === "object");
assert(InvalidRestoreTimeException.prototype instanceof DynamoDBServiceException);
assert(typeof InvalidRestoreTimeException$ === "object");
assert(ItemCollectionSizeLimitExceededException.prototype instanceof DynamoDBServiceException);
assert(typeof ItemCollectionSizeLimitExceededException$ === "object");
assert(LimitExceededException.prototype instanceof DynamoDBServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PointInTimeRecoveryUnavailableException.prototype instanceof DynamoDBServiceException);
assert(typeof PointInTimeRecoveryUnavailableException$ === "object");
assert(PolicyNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof PolicyNotFoundException$ === "object");
assert(ProvisionedThroughputExceededException.prototype instanceof DynamoDBServiceException);
assert(typeof ProvisionedThroughputExceededException$ === "object");
assert(ReplicaAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(typeof ReplicaAlreadyExistsException$ === "object");
assert(ReplicaNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof ReplicaNotFoundException$ === "object");
assert(ReplicatedWriteConflictException.prototype instanceof DynamoDBServiceException);
assert(typeof ReplicatedWriteConflictException$ === "object");
assert(RequestLimitExceeded.prototype instanceof DynamoDBServiceException);
assert(typeof RequestLimitExceeded$ === "object");
assert(ResourceInUseException.prototype instanceof DynamoDBServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TableAlreadyExistsException.prototype instanceof DynamoDBServiceException);
assert(typeof TableAlreadyExistsException$ === "object");
assert(TableInUseException.prototype instanceof DynamoDBServiceException);
assert(typeof TableInUseException$ === "object");
assert(TableNotFoundException.prototype instanceof DynamoDBServiceException);
assert(typeof TableNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof DynamoDBServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TransactionCanceledException.prototype instanceof DynamoDBServiceException);
assert(typeof TransactionCanceledException$ === "object");
assert(TransactionConflictException.prototype instanceof DynamoDBServiceException);
assert(typeof TransactionConflictException$ === "object");
assert(TransactionInProgressException.prototype instanceof DynamoDBServiceException);
assert(typeof TransactionInProgressException$ === "object");
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
