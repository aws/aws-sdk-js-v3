// smithy-typescript generated code
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
