import {
  AccessDeniedException,
  AccessDeniedException$,
  BadRequestException,
  BadRequestException$,
  CompleteTableMigration$,
  CompleteTableMigrationCommand,
  CompleteTableMigrationRequest$,
  CompressionCodec,
  ConflictException,
  ConflictException$,
  CreateNamespace$,
  CreateNamespaceCommand,
  CreateNamespaceRequest$,
  CreateNamespaceResponse$,
  CreateTable$,
  CreateTableBucket$,
  CreateTableBucketCommand,
  CreateTableBucketRequest$,
  CreateTableBucketResponse$,
  CreateTableCommand,
  CreateTableRequest$,
  CreateTableResponse$,
  DataFileFormat,
  DataMigrationOverview$,
  DataMigrationSettings$,
  DeleteNamespace$,
  DeleteNamespaceCommand,
  DeleteNamespaceRequest$,
  DeleteTable$,
  DeleteTableBucket$,
  DeleteTableBucketCommand,
  DeleteTableBucketEncryption$,
  DeleteTableBucketEncryptionCommand,
  DeleteTableBucketEncryptionRequest$,
  DeleteTableBucketMetricsConfiguration$,
  DeleteTableBucketMetricsConfigurationCommand,
  DeleteTableBucketMetricsConfigurationRequest$,
  DeleteTableBucketPolicy$,
  DeleteTableBucketPolicyCommand,
  DeleteTableBucketPolicyRequest$,
  DeleteTableBucketReplication$,
  DeleteTableBucketReplicationCommand,
  DeleteTableBucketReplicationRequest$,
  DeleteTableBucketRequest$,
  DeleteTableCommand,
  DeleteTablePolicy$,
  DeleteTablePolicyCommand,
  DeleteTablePolicyRequest$,
  DeleteTableReplication$,
  DeleteTableReplicationCommand,
  DeleteTableReplicationRequest$,
  DeleteTableRequest$,
  DestinationTable$,
  EncryptionConfiguration$,
  FindingCategory,
  ForbiddenException,
  ForbiddenException$,
  GetNamespace$,
  GetNamespaceCommand,
  GetNamespaceRequest$,
  GetNamespaceResponse$,
  GetTable$,
  GetTableBucket$,
  GetTableBucketCommand,
  GetTableBucketEncryption$,
  GetTableBucketEncryptionCommand,
  GetTableBucketEncryptionRequest$,
  GetTableBucketEncryptionResponse$,
  GetTableBucketLogging$,
  GetTableBucketLoggingCommand,
  GetTableBucketLoggingRequest$,
  GetTableBucketLoggingResponse$,
  GetTableBucketMaintenanceConfiguration$,
  GetTableBucketMaintenanceConfigurationCommand,
  GetTableBucketMaintenanceConfigurationRequest$,
  GetTableBucketMaintenanceConfigurationResponse$,
  GetTableBucketMetricsConfiguration$,
  GetTableBucketMetricsConfigurationCommand,
  GetTableBucketMetricsConfigurationRequest$,
  GetTableBucketMetricsConfigurationResponse$,
  GetTableBucketPolicy$,
  GetTableBucketPolicyCommand,
  GetTableBucketPolicyRequest$,
  GetTableBucketPolicyResponse$,
  GetTableBucketReplication$,
  GetTableBucketReplicationCommand,
  GetTableBucketReplicationRequest$,
  GetTableBucketReplicationResponse$,
  GetTableBucketRequest$,
  GetTableBucketResponse$,
  GetTableBucketStorageClass$,
  GetTableBucketStorageClassCommand,
  GetTableBucketStorageClassRequest$,
  GetTableBucketStorageClassResponse$,
  GetTableCommand,
  GetTableEncryption$,
  GetTableEncryptionCommand,
  GetTableEncryptionRequest$,
  GetTableEncryptionResponse$,
  GetTableMaintenanceConfiguration$,
  GetTableMaintenanceConfigurationCommand,
  GetTableMaintenanceConfigurationRequest$,
  GetTableMaintenanceConfigurationResponse$,
  GetTableMaintenanceJobStatus$,
  GetTableMaintenanceJobStatusCommand,
  GetTableMaintenanceJobStatusRequest$,
  GetTableMaintenanceJobStatusResponse$,
  GetTableMetadataLocation$,
  GetTableMetadataLocationCommand,
  GetTableMetadataLocationRequest$,
  GetTableMetadataLocationResponse$,
  GetTableMigration$,
  GetTableMigrationCommand,
  GetTableMigrationRequest$,
  GetTableMigrationResponse$,
  GetTablePolicy$,
  GetTablePolicyCommand,
  GetTablePolicyRequest$,
  GetTablePolicyResponse$,
  GetTableRecordExpirationConfiguration$,
  GetTableRecordExpirationConfigurationCommand,
  GetTableRecordExpirationConfigurationRequest$,
  GetTableRecordExpirationConfigurationResponse$,
  GetTableRecordExpirationJobStatus$,
  GetTableRecordExpirationJobStatusCommand,
  GetTableRecordExpirationJobStatusRequest$,
  GetTableRecordExpirationJobStatusResponse$,
  GetTableReplication$,
  GetTableReplicationCommand,
  GetTableReplicationRequest$,
  GetTableReplicationResponse$,
  GetTableReplicationStatus$,
  GetTableReplicationStatusCommand,
  GetTableReplicationStatusRequest$,
  GetTableReplicationStatusResponse$,
  GetTableRequest$,
  GetTableResponse$,
  GetTableStorageClass$,
  GetTableStorageClassCommand,
  GetTableStorageClassRequest$,
  GetTableStorageClassResponse$,
  GlueTableSource$,
  IcebergCompactionSettings$,
  IcebergCompactionStrategy,
  IcebergMetadata$,
  IcebergNullOrder,
  IcebergPartitionField$,
  IcebergPartitionSpec$,
  IcebergSchema$,
  IcebergSchemaV2$,
  IcebergSnapshotManagementSettings$,
  IcebergSortDirection,
  IcebergSortField$,
  IcebergSortOrder$,
  IcebergUnreferencedFileRemovalSettings$,
  IncompatibleValuesPolicy,
  InternalServerErrorException,
  InternalServerErrorException$,
  JobStatus,
  LastSuccessfulReplicatedUpdate$,
  ListNamespaces$,
  ListNamespacesCommand,
  ListNamespacesRequest$,
  ListNamespacesResponse$,
  ListTableBuckets$,
  ListTableBucketsCommand,
  ListTableBucketsRequest$,
  ListTableBucketsResponse$,
  ListTableMigrations$,
  ListTableMigrationsCommand,
  ListTableMigrationsRequest$,
  ListTableMigrationsResponse$,
  ListTables$,
  ListTablesCommand,
  ListTablesRequest$,
  ListTablesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoggingEnabled$,
  MaintenanceSettings$,
  MaintenanceStatus,
  ManagedTableInformation$,
  MethodNotAllowedException,
  MethodNotAllowedException$,
  MigrationCompactionSettings$,
  MigrationFailureCode,
  MigrationFailureReason$,
  MigrationOutputConfiguration$,
  MigrationOutputOverview$,
  MigrationPolicies$,
  MigrationReportPrefixes$,
  MigrationRequestedState,
  MigrationSnapshotManagementSettings$,
  MigrationSourceType,
  MigrationState,
  MigrationStats$,
  MigrationSummary$,
  MigrationTableProperties$,
  MigrationType,
  NamespaceSummary$,
  NotFoundException,
  NotFoundException$,
  OpenTableFormat,
  paginateListNamespaces,
  paginateListTableBuckets,
  paginateListTableMigrations,
  paginateListTables,
  PartitionDateSource,
  PartitionedPrefix$,
  PlanningStats$,
  PutTableBucketEncryption$,
  PutTableBucketEncryptionCommand,
  PutTableBucketEncryptionRequest$,
  PutTableBucketLogging$,
  PutTableBucketLoggingCommand,
  PutTableBucketLoggingRequest$,
  PutTableBucketMaintenanceConfiguration$,
  PutTableBucketMaintenanceConfigurationCommand,
  PutTableBucketMaintenanceConfigurationRequest$,
  PutTableBucketMetricsConfiguration$,
  PutTableBucketMetricsConfigurationCommand,
  PutTableBucketMetricsConfigurationRequest$,
  PutTableBucketPolicy$,
  PutTableBucketPolicyCommand,
  PutTableBucketPolicyRequest$,
  PutTableBucketReplication$,
  PutTableBucketReplicationCommand,
  PutTableBucketReplicationRequest$,
  PutTableBucketReplicationResponse$,
  PutTableBucketStorageClass$,
  PutTableBucketStorageClassCommand,
  PutTableBucketStorageClassRequest$,
  PutTableMaintenanceConfiguration$,
  PutTableMaintenanceConfigurationCommand,
  PutTableMaintenanceConfigurationRequest$,
  PutTablePolicy$,
  PutTablePolicyCommand,
  PutTablePolicyRequest$,
  PutTableRecordExpirationConfiguration$,
  PutTableRecordExpirationConfigurationCommand,
  PutTableRecordExpirationConfigurationRequest$,
  PutTableReplication$,
  PutTableReplicationCommand,
  PutTableReplicationRequest$,
  PutTableReplicationResponse$,
  RenameTable$,
  RenameTableCommand,
  RenameTableRequest$,
  ReplicationDestination$,
  ReplicationDestinationStatusModel$,
  ReplicationInformation$,
  ReplicationStatus,
  ReportOverview$,
  S3Tables,
  S3TablesClient,
  S3TablesServiceException,
  SchemaField$,
  SchemaV2Field$,
  SchemaV2FieldType,
  SourceConfiguration$,
  SSEAlgorithm,
  StartTableMigration$,
  StartTableMigrationCommand,
  StartTableMigrationRequest$,
  StartTableMigrationResponse$,
  StorageClass,
  StorageClassConfiguration$,
  SyncTableMigration$,
  SyncTableMigrationCommand,
  SyncTableMigrationRequest$,
  SyncTableMigrationResponse$,
  TableBucketLoggingStatus$,
  TableBucketMaintenanceConfigurationValue$,
  TableBucketMaintenanceSettings$,
  TableBucketMaintenanceType,
  TableBucketReplicationConfiguration$,
  TableBucketReplicationRule$,
  TableBucketSummary$,
  TableBucketType,
  TableMaintenanceConfigurationValue$,
  TableMaintenanceJobStatusValue$,
  TableMaintenanceJobType,
  TableMaintenanceSettings$,
  TableMaintenanceType,
  TableMetadata$,
  TableRecordExpirationConfigurationValue$,
  TableRecordExpirationJobMetrics$,
  TableRecordExpirationJobStatus,
  TableRecordExpirationSettings$,
  TableRecordExpirationStatus,
  TableReplicationConfiguration$,
  TableReplicationRule$,
  TableSummary$,
  TableType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetObjectKeyFormat$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnmatchedSourceFieldsPolicy,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateTableMetadataLocation$,
  UpdateTableMetadataLocationCommand,
  UpdateTableMetadataLocationRequest$,
  UpdateTableMetadataLocationResponse$,
  UpdateTableMigration$,
  UpdateTableMigrationCommand,
  UpdateTableMigrationRequest$,
  UpdateTableMigrationResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3TablesClient === "function");
assert(typeof S3Tables === "function");
// commands
assert(typeof CompleteTableMigrationCommand === "function");
assert(typeof CompleteTableMigration$ === "object");
assert(typeof CreateNamespaceCommand === "function");
assert(typeof CreateNamespace$ === "object");
assert(typeof CreateTableCommand === "function");
assert(typeof CreateTable$ === "object");
assert(typeof CreateTableBucketCommand === "function");
assert(typeof CreateTableBucket$ === "object");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteNamespace$ === "object");
assert(typeof DeleteTableCommand === "function");
assert(typeof DeleteTable$ === "object");
assert(typeof DeleteTableBucketCommand === "function");
assert(typeof DeleteTableBucket$ === "object");
assert(typeof DeleteTableBucketEncryptionCommand === "function");
assert(typeof DeleteTableBucketEncryption$ === "object");
assert(typeof DeleteTableBucketMetricsConfigurationCommand === "function");
assert(typeof DeleteTableBucketMetricsConfiguration$ === "object");
assert(typeof DeleteTableBucketPolicyCommand === "function");
assert(typeof DeleteTableBucketPolicy$ === "object");
assert(typeof DeleteTableBucketReplicationCommand === "function");
assert(typeof DeleteTableBucketReplication$ === "object");
assert(typeof DeleteTablePolicyCommand === "function");
assert(typeof DeleteTablePolicy$ === "object");
assert(typeof DeleteTableReplicationCommand === "function");
assert(typeof DeleteTableReplication$ === "object");
assert(typeof GetNamespaceCommand === "function");
assert(typeof GetNamespace$ === "object");
assert(typeof GetTableCommand === "function");
assert(typeof GetTable$ === "object");
assert(typeof GetTableBucketCommand === "function");
assert(typeof GetTableBucket$ === "object");
assert(typeof GetTableBucketEncryptionCommand === "function");
assert(typeof GetTableBucketEncryption$ === "object");
assert(typeof GetTableBucketLoggingCommand === "function");
assert(typeof GetTableBucketLogging$ === "object");
assert(typeof GetTableBucketMaintenanceConfigurationCommand === "function");
assert(typeof GetTableBucketMaintenanceConfiguration$ === "object");
assert(typeof GetTableBucketMetricsConfigurationCommand === "function");
assert(typeof GetTableBucketMetricsConfiguration$ === "object");
assert(typeof GetTableBucketPolicyCommand === "function");
assert(typeof GetTableBucketPolicy$ === "object");
assert(typeof GetTableBucketReplicationCommand === "function");
assert(typeof GetTableBucketReplication$ === "object");
assert(typeof GetTableBucketStorageClassCommand === "function");
assert(typeof GetTableBucketStorageClass$ === "object");
assert(typeof GetTableEncryptionCommand === "function");
assert(typeof GetTableEncryption$ === "object");
assert(typeof GetTableMaintenanceConfigurationCommand === "function");
assert(typeof GetTableMaintenanceConfiguration$ === "object");
assert(typeof GetTableMaintenanceJobStatusCommand === "function");
assert(typeof GetTableMaintenanceJobStatus$ === "object");
assert(typeof GetTableMetadataLocationCommand === "function");
assert(typeof GetTableMetadataLocation$ === "object");
assert(typeof GetTableMigrationCommand === "function");
assert(typeof GetTableMigration$ === "object");
assert(typeof GetTablePolicyCommand === "function");
assert(typeof GetTablePolicy$ === "object");
assert(typeof GetTableRecordExpirationConfigurationCommand === "function");
assert(typeof GetTableRecordExpirationConfiguration$ === "object");
assert(typeof GetTableRecordExpirationJobStatusCommand === "function");
assert(typeof GetTableRecordExpirationJobStatus$ === "object");
assert(typeof GetTableReplicationCommand === "function");
assert(typeof GetTableReplication$ === "object");
assert(typeof GetTableReplicationStatusCommand === "function");
assert(typeof GetTableReplicationStatus$ === "object");
assert(typeof GetTableStorageClassCommand === "function");
assert(typeof GetTableStorageClass$ === "object");
assert(typeof ListNamespacesCommand === "function");
assert(typeof ListNamespaces$ === "object");
assert(typeof ListTableBucketsCommand === "function");
assert(typeof ListTableBuckets$ === "object");
assert(typeof ListTableMigrationsCommand === "function");
assert(typeof ListTableMigrations$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutTableBucketEncryptionCommand === "function");
assert(typeof PutTableBucketEncryption$ === "object");
assert(typeof PutTableBucketLoggingCommand === "function");
assert(typeof PutTableBucketLogging$ === "object");
assert(typeof PutTableBucketMaintenanceConfigurationCommand === "function");
assert(typeof PutTableBucketMaintenanceConfiguration$ === "object");
assert(typeof PutTableBucketMetricsConfigurationCommand === "function");
assert(typeof PutTableBucketMetricsConfiguration$ === "object");
assert(typeof PutTableBucketPolicyCommand === "function");
assert(typeof PutTableBucketPolicy$ === "object");
assert(typeof PutTableBucketReplicationCommand === "function");
assert(typeof PutTableBucketReplication$ === "object");
assert(typeof PutTableBucketStorageClassCommand === "function");
assert(typeof PutTableBucketStorageClass$ === "object");
assert(typeof PutTableMaintenanceConfigurationCommand === "function");
assert(typeof PutTableMaintenanceConfiguration$ === "object");
assert(typeof PutTablePolicyCommand === "function");
assert(typeof PutTablePolicy$ === "object");
assert(typeof PutTableRecordExpirationConfigurationCommand === "function");
assert(typeof PutTableRecordExpirationConfiguration$ === "object");
assert(typeof PutTableReplicationCommand === "function");
assert(typeof PutTableReplication$ === "object");
assert(typeof RenameTableCommand === "function");
assert(typeof RenameTable$ === "object");
assert(typeof StartTableMigrationCommand === "function");
assert(typeof StartTableMigration$ === "object");
assert(typeof SyncTableMigrationCommand === "function");
assert(typeof SyncTableMigration$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateTableMetadataLocationCommand === "function");
assert(typeof UpdateTableMetadataLocation$ === "object");
assert(typeof UpdateTableMigrationCommand === "function");
assert(typeof UpdateTableMigration$ === "object");
// structural schemas
assert(typeof CompleteTableMigrationRequest$ === "object");
assert(typeof CreateNamespaceRequest$ === "object");
assert(typeof CreateNamespaceResponse$ === "object");
assert(typeof CreateTableBucketRequest$ === "object");
assert(typeof CreateTableBucketResponse$ === "object");
assert(typeof CreateTableRequest$ === "object");
assert(typeof CreateTableResponse$ === "object");
assert(typeof DataMigrationOverview$ === "object");
assert(typeof DataMigrationSettings$ === "object");
assert(typeof DeleteNamespaceRequest$ === "object");
assert(typeof DeleteTableBucketEncryptionRequest$ === "object");
assert(typeof DeleteTableBucketMetricsConfigurationRequest$ === "object");
assert(typeof DeleteTableBucketPolicyRequest$ === "object");
assert(typeof DeleteTableBucketReplicationRequest$ === "object");
assert(typeof DeleteTableBucketRequest$ === "object");
assert(typeof DeleteTablePolicyRequest$ === "object");
assert(typeof DeleteTableReplicationRequest$ === "object");
assert(typeof DeleteTableRequest$ === "object");
assert(typeof DestinationTable$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetNamespaceRequest$ === "object");
assert(typeof GetNamespaceResponse$ === "object");
assert(typeof GetTableBucketEncryptionRequest$ === "object");
assert(typeof GetTableBucketEncryptionResponse$ === "object");
assert(typeof GetTableBucketLoggingRequest$ === "object");
assert(typeof GetTableBucketLoggingResponse$ === "object");
assert(typeof GetTableBucketMaintenanceConfigurationRequest$ === "object");
assert(typeof GetTableBucketMaintenanceConfigurationResponse$ === "object");
assert(typeof GetTableBucketMetricsConfigurationRequest$ === "object");
assert(typeof GetTableBucketMetricsConfigurationResponse$ === "object");
assert(typeof GetTableBucketPolicyRequest$ === "object");
assert(typeof GetTableBucketPolicyResponse$ === "object");
assert(typeof GetTableBucketReplicationRequest$ === "object");
assert(typeof GetTableBucketReplicationResponse$ === "object");
assert(typeof GetTableBucketRequest$ === "object");
assert(typeof GetTableBucketResponse$ === "object");
assert(typeof GetTableBucketStorageClassRequest$ === "object");
assert(typeof GetTableBucketStorageClassResponse$ === "object");
assert(typeof GetTableEncryptionRequest$ === "object");
assert(typeof GetTableEncryptionResponse$ === "object");
assert(typeof GetTableMaintenanceConfigurationRequest$ === "object");
assert(typeof GetTableMaintenanceConfigurationResponse$ === "object");
assert(typeof GetTableMaintenanceJobStatusRequest$ === "object");
assert(typeof GetTableMaintenanceJobStatusResponse$ === "object");
assert(typeof GetTableMetadataLocationRequest$ === "object");
assert(typeof GetTableMetadataLocationResponse$ === "object");
assert(typeof GetTableMigrationRequest$ === "object");
assert(typeof GetTableMigrationResponse$ === "object");
assert(typeof GetTablePolicyRequest$ === "object");
assert(typeof GetTablePolicyResponse$ === "object");
assert(typeof GetTableRecordExpirationConfigurationRequest$ === "object");
assert(typeof GetTableRecordExpirationConfigurationResponse$ === "object");
assert(typeof GetTableRecordExpirationJobStatusRequest$ === "object");
assert(typeof GetTableRecordExpirationJobStatusResponse$ === "object");
assert(typeof GetTableReplicationRequest$ === "object");
assert(typeof GetTableReplicationResponse$ === "object");
assert(typeof GetTableReplicationStatusRequest$ === "object");
assert(typeof GetTableReplicationStatusResponse$ === "object");
assert(typeof GetTableRequest$ === "object");
assert(typeof GetTableResponse$ === "object");
assert(typeof GetTableStorageClassRequest$ === "object");
assert(typeof GetTableStorageClassResponse$ === "object");
assert(typeof GlueTableSource$ === "object");
assert(typeof IcebergCompactionSettings$ === "object");
assert(typeof IcebergMetadata$ === "object");
assert(typeof IcebergPartitionField$ === "object");
assert(typeof IcebergPartitionSpec$ === "object");
assert(typeof IcebergSchema$ === "object");
assert(typeof IcebergSchemaV2$ === "object");
assert(typeof IcebergSnapshotManagementSettings$ === "object");
assert(typeof IcebergSortField$ === "object");
assert(typeof IcebergSortOrder$ === "object");
assert(typeof IcebergUnreferencedFileRemovalSettings$ === "object");
assert(typeof LastSuccessfulReplicatedUpdate$ === "object");
assert(typeof ListNamespacesRequest$ === "object");
assert(typeof ListNamespacesResponse$ === "object");
assert(typeof ListTableBucketsRequest$ === "object");
assert(typeof ListTableBucketsResponse$ === "object");
assert(typeof ListTableMigrationsRequest$ === "object");
assert(typeof ListTableMigrationsResponse$ === "object");
assert(typeof ListTablesRequest$ === "object");
assert(typeof ListTablesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoggingEnabled$ === "object");
assert(typeof MaintenanceSettings$ === "object");
assert(typeof ManagedTableInformation$ === "object");
assert(typeof MigrationCompactionSettings$ === "object");
assert(typeof MigrationFailureReason$ === "object");
assert(typeof MigrationOutputConfiguration$ === "object");
assert(typeof MigrationOutputOverview$ === "object");
assert(typeof MigrationPolicies$ === "object");
assert(typeof MigrationReportPrefixes$ === "object");
assert(typeof MigrationSnapshotManagementSettings$ === "object");
assert(typeof MigrationStats$ === "object");
assert(typeof MigrationSummary$ === "object");
assert(typeof MigrationTableProperties$ === "object");
assert(typeof NamespaceSummary$ === "object");
assert(typeof PartitionedPrefix$ === "object");
assert(typeof PlanningStats$ === "object");
assert(typeof PutTableBucketEncryptionRequest$ === "object");
assert(typeof PutTableBucketLoggingRequest$ === "object");
assert(typeof PutTableBucketMaintenanceConfigurationRequest$ === "object");
assert(typeof PutTableBucketMetricsConfigurationRequest$ === "object");
assert(typeof PutTableBucketPolicyRequest$ === "object");
assert(typeof PutTableBucketReplicationRequest$ === "object");
assert(typeof PutTableBucketReplicationResponse$ === "object");
assert(typeof PutTableBucketStorageClassRequest$ === "object");
assert(typeof PutTableMaintenanceConfigurationRequest$ === "object");
assert(typeof PutTablePolicyRequest$ === "object");
assert(typeof PutTableRecordExpirationConfigurationRequest$ === "object");
assert(typeof PutTableReplicationRequest$ === "object");
assert(typeof PutTableReplicationResponse$ === "object");
assert(typeof RenameTableRequest$ === "object");
assert(typeof ReplicationDestination$ === "object");
assert(typeof ReplicationDestinationStatusModel$ === "object");
assert(typeof ReplicationInformation$ === "object");
assert(typeof ReportOverview$ === "object");
assert(typeof SchemaField$ === "object");
assert(typeof SchemaV2Field$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof StartTableMigrationRequest$ === "object");
assert(typeof StartTableMigrationResponse$ === "object");
assert(typeof StorageClassConfiguration$ === "object");
assert(typeof SyncTableMigrationRequest$ === "object");
assert(typeof SyncTableMigrationResponse$ === "object");
assert(typeof TableBucketLoggingStatus$ === "object");
assert(typeof TableBucketMaintenanceConfigurationValue$ === "object");
assert(typeof TableBucketMaintenanceSettings$ === "object");
assert(typeof TableBucketReplicationConfiguration$ === "object");
assert(typeof TableBucketReplicationRule$ === "object");
assert(typeof TableBucketSummary$ === "object");
assert(typeof TableMaintenanceConfigurationValue$ === "object");
assert(typeof TableMaintenanceJobStatusValue$ === "object");
assert(typeof TableMaintenanceSettings$ === "object");
assert(typeof TableMetadata$ === "object");
assert(typeof TableRecordExpirationConfigurationValue$ === "object");
assert(typeof TableRecordExpirationJobMetrics$ === "object");
assert(typeof TableRecordExpirationSettings$ === "object");
assert(typeof TableReplicationConfiguration$ === "object");
assert(typeof TableReplicationRule$ === "object");
assert(typeof TableSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetObjectKeyFormat$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateTableMetadataLocationRequest$ === "object");
assert(typeof UpdateTableMetadataLocationResponse$ === "object");
assert(typeof UpdateTableMigrationRequest$ === "object");
assert(typeof UpdateTableMigrationResponse$ === "object");
// enums
assert(typeof CompressionCodec === "object");
assert(typeof DataFileFormat === "object");
assert(typeof FindingCategory === "object");
assert(typeof IcebergCompactionStrategy === "object");
assert(typeof IcebergNullOrder === "object");
assert(typeof IcebergSortDirection === "object");
assert(typeof IncompatibleValuesPolicy === "object");
assert(typeof JobStatus === "object");
assert(typeof MaintenanceStatus === "object");
assert(typeof MigrationFailureCode === "object");
assert(typeof MigrationRequestedState === "object");
assert(typeof MigrationSourceType === "object");
assert(typeof MigrationState === "object");
assert(typeof MigrationType === "object");
assert(typeof OpenTableFormat === "object");
assert(typeof PartitionDateSource === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof SchemaV2FieldType === "object");
assert(typeof SSEAlgorithm === "object");
assert(typeof StorageClass === "object");
assert(typeof TableBucketMaintenanceType === "object");
assert(typeof TableBucketType === "object");
assert(typeof TableMaintenanceJobType === "object");
assert(typeof TableMaintenanceType === "object");
assert(typeof TableRecordExpirationJobStatus === "object");
assert(typeof TableRecordExpirationStatus === "object");
assert(typeof TableType === "object");
assert(typeof UnmatchedSourceFieldsPolicy === "object");
// errors
assert(AccessDeniedException.prototype instanceof S3TablesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof S3TablesServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof S3TablesServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof S3TablesServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof S3TablesServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(MethodNotAllowedException.prototype instanceof S3TablesServiceException);
assert(typeof MethodNotAllowedException$ === "object");
assert(NotFoundException.prototype instanceof S3TablesServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof S3TablesServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(S3TablesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListNamespaces === "function");
assert(typeof paginateListTableBuckets === "function");
assert(typeof paginateListTableMigrations === "function");
assert(typeof paginateListTables === "function");
console.log(`S3Tables index test passed.`);
