// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CompressionCodec = {
  GZIP: "gzip",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
  ZSTD: "zstd",
} as const;
/**
 * @public
 */
export type CompressionCodec = (typeof CompressionCodec)[keyof typeof CompressionCodec];

/**
 * @public
 * @enum
 */
export const SSEAlgorithm = {
  AES256: "AES256",
  AWS_KMS: "aws:kms",
} as const;
/**
 * @public
 */
export type SSEAlgorithm = (typeof SSEAlgorithm)[keyof typeof SSEAlgorithm];

/**
 * @public
 * @enum
 */
export const OpenTableFormat = {
  ICEBERG: "ICEBERG",
} as const;
/**
 * @public
 */
export type OpenTableFormat = (typeof OpenTableFormat)[keyof typeof OpenTableFormat];

/**
 * @public
 * @enum
 */
export const SchemaV2FieldType = {
  STRUCT: "struct",
} as const;
/**
 * @public
 */
export type SchemaV2FieldType = (typeof SchemaV2FieldType)[keyof typeof SchemaV2FieldType];

/**
 * @public
 * @enum
 */
export const IcebergSortDirection = {
  ASC: "asc",
  DESC: "desc",
} as const;
/**
 * @public
 */
export type IcebergSortDirection = (typeof IcebergSortDirection)[keyof typeof IcebergSortDirection];

/**
 * @public
 * @enum
 */
export const IcebergNullOrder = {
  NULLS_FIRST: "nulls-first",
  NULLS_LAST: "nulls-last",
} as const;
/**
 * @public
 */
export type IcebergNullOrder = (typeof IcebergNullOrder)[keyof typeof IcebergNullOrder];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const DataFileFormat = {
  PARQUET: "parquet",
} as const;
/**
 * @public
 */
export type DataFileFormat = (typeof DataFileFormat)[keyof typeof DataFileFormat];

/**
 * @public
 * @enum
 */
export const IcebergCompactionStrategy = {
  AUTO: "auto",
  BINPACK: "binpack",
  SORT: "sort",
  ZORDER: "z-order",
} as const;
/**
 * @public
 */
export type IcebergCompactionStrategy = (typeof IcebergCompactionStrategy)[keyof typeof IcebergCompactionStrategy];

/**
 * @public
 * @enum
 */
export const IncompatibleValuesPolicy = {
  FAIL: "fail",
  SET_NULL: "setNull",
} as const;
/**
 * @public
 */
export type IncompatibleValuesPolicy = (typeof IncompatibleValuesPolicy)[keyof typeof IncompatibleValuesPolicy];

/**
 * @public
 * @enum
 */
export const UnmatchedSourceFieldsPolicy = {
  DROP: "drop",
  FAIL: "fail",
} as const;
/**
 * @public
 */
export type UnmatchedSourceFieldsPolicy =
  (typeof UnmatchedSourceFieldsPolicy)[keyof typeof UnmatchedSourceFieldsPolicy];

/**
 * @public
 * @enum
 */
export const FindingCategory = {
  ACCESS: "access",
  DATA: "data",
  INTERNAL: "internal",
  METADATA: "metadata",
} as const;
/**
 * @public
 */
export type FindingCategory = (typeof FindingCategory)[keyof typeof FindingCategory];

/**
 * @public
 * @enum
 */
export const TableType = {
  AWS: "aws",
  CUSTOMER: "customer",
} as const;
/**
 * @public
 */
export type TableType = (typeof TableType)[keyof typeof TableType];

/**
 * @public
 * @enum
 */
export const TableBucketType = {
  AWS: "aws",
  CUSTOMER: "customer",
} as const;
/**
 * @public
 */
export type TableBucketType = (typeof TableBucketType)[keyof typeof TableBucketType];

/**
 * @public
 * @enum
 */
export const PartitionDateSource = {
  DELIVERY_TIME: "DeliveryTime",
  EVENT_TIME: "EventTime",
} as const;
/**
 * @public
 */
export type PartitionDateSource = (typeof PartitionDateSource)[keyof typeof PartitionDateSource];

/**
 * @public
 * @enum
 */
export const TableBucketMaintenanceType = {
  ICEBERG_UNREFERENCED_FILE_REMOVAL: "icebergUnreferencedFileRemoval",
} as const;
/**
 * @public
 */
export type TableBucketMaintenanceType = (typeof TableBucketMaintenanceType)[keyof typeof TableBucketMaintenanceType];

/**
 * @public
 * @enum
 */
export const MaintenanceStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

/**
 * @public
 * @enum
 */
export const TableMaintenanceType = {
  ICEBERG_COMPACTION: "icebergCompaction",
  ICEBERG_SNAPSHOT_MANAGEMENT: "icebergSnapshotManagement",
} as const;
/**
 * @public
 */
export type TableMaintenanceType = (typeof TableMaintenanceType)[keyof typeof TableMaintenanceType];

/**
 * @public
 * @enum
 */
export const TableMaintenanceJobType = {
  ICEBERG_COMPACTION: "icebergCompaction",
  ICEBERG_SNAPSHOT_MANAGEMENT: "icebergSnapshotManagement",
  ICEBERG_UNREFERENCED_FILE_REMOVAL: "icebergUnreferencedFileRemoval",
} as const;
/**
 * @public
 */
export type TableMaintenanceJobType = (typeof TableMaintenanceJobType)[keyof typeof TableMaintenanceJobType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  DISABLED: "Disabled",
  FAILED: "Failed",
  NOT_YET_RUN: "Not_Yet_Run",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const MigrationFailureCode = {
  DESTINATION_PERMISSIONS: "destinationPermissions",
  INTERNAL_ERROR: "internalError",
  OBJECT_COMPATIBILITY_REPORT: "objectCompatibilityReport",
  OBJECT_MIGRATION_REPORT: "objectMigrationReport",
  REPORT_BUCKET_NOT_SUPPORTED: "reportBucketNotSupported",
  RESOURCE_NOT_FOUND: "resourceNotFound",
  ROLE_PERMISSIONS: "rolePermissions",
  SOURCE_NOT_SUPPORTED: "sourceNotSupported",
  SOURCE_PERMISSIONS: "sourcePermissions",
  TABLE_COMPATIBILITY_REPORT: "tableCompatibilityReport",
} as const;
/**
 * @public
 */
export type MigrationFailureCode = (typeof MigrationFailureCode)[keyof typeof MigrationFailureCode];

/**
 * @public
 * @enum
 */
export const MigrationSourceType = {
  GLUE_TABLE: "glueTable",
} as const;
/**
 * @public
 */
export type MigrationSourceType = (typeof MigrationSourceType)[keyof typeof MigrationSourceType];

/**
 * @public
 * @enum
 */
export const MigrationState = {
  CANCELLED: "cancelled",
  CANCELLING: "cancelling",
  FAILED: "failed",
  MIGRATING: "migrating",
  NEW: "new",
  PENDING_REVIEW: "pendingReview",
  PLANNING: "planning",
  QUEUED: "queued",
  SUCCEEDED: "succeeded",
} as const;
/**
 * @public
 */
export type MigrationState = (typeof MigrationState)[keyof typeof MigrationState];

/**
 * @public
 * @enum
 */
export const MigrationType = {
  START: "start",
  SYNC: "sync",
} as const;
/**
 * @public
 */
export type MigrationType = (typeof MigrationType)[keyof typeof MigrationType];

/**
 * @public
 * @enum
 */
export const TableRecordExpirationStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type TableRecordExpirationStatus =
  (typeof TableRecordExpirationStatus)[keyof typeof TableRecordExpirationStatus];

/**
 * @public
 * @enum
 */
export const TableRecordExpirationJobStatus = {
  DISABLED: "Disabled",
  FAILED: "Failed",
  NOT_YET_RUN: "NotYetRun",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type TableRecordExpirationJobStatus =
  (typeof TableRecordExpirationJobStatus)[keyof typeof TableRecordExpirationJobStatus];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETED: "completed",
  FAILED: "failed",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * @enum
 */
export const MigrationRequestedState = {
  CANCELLED: "cancelled",
  QUEUED: "queued",
} as const;
/**
 * @public
 */
export type MigrationRequestedState = (typeof MigrationRequestedState)[keyof typeof MigrationRequestedState];
