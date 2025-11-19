// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ScanFinding = {
  MALWARE: "MALWARE",
} as const;
/**
 * @public
 */
export type ScanFinding = (typeof ScanFinding)[keyof typeof ScanFinding];

/**
 * @public
 * @enum
 */
export const AggregationPeriod = {
  FOURTEEN_DAYS: "FOURTEEN_DAYS",
  ONE_DAY: "ONE_DAY",
  SEVEN_DAYS: "SEVEN_DAYS",
} as const;
/**
 * @public
 */
export type AggregationPeriod = (typeof AggregationPeriod)[keyof typeof AggregationPeriod];

/**
 * @public
 * @enum
 */
export const LifecycleDeleteAfterEvent = {
  DELETE_AFTER_COPY: "DELETE_AFTER_COPY",
} as const;
/**
 * @public
 */
export type LifecycleDeleteAfterEvent = (typeof LifecycleDeleteAfterEvent)[keyof typeof LifecycleDeleteAfterEvent];

/**
 * @public
 * @enum
 */
export const BackupJobState = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type BackupJobState = (typeof BackupJobState)[keyof typeof BackupJobState];

/**
 * @public
 * @enum
 */
export const BackupJobStatus = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type BackupJobStatus = (typeof BackupJobStatus)[keyof typeof BackupJobStatus];

/**
 * @public
 * @enum
 */
export const MalwareScanner = {
  GUARDDUTY: "GUARDDUTY",
} as const;
/**
 * @public
 */
export type MalwareScanner = (typeof MalwareScanner)[keyof typeof MalwareScanner];

/**
 * @public
 * @enum
 */
export const ScanMode = {
  FULL_SCAN: "FULL_SCAN",
  INCREMENTAL_SCAN: "INCREMENTAL_SCAN",
} as const;
/**
 * @public
 */
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode];

/**
 * @public
 * @enum
 */
export const ConditionType = {
  STRINGEQUALS: "STRINGEQUALS",
} as const;
/**
 * @public
 */
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

/**
 * @public
 * @enum
 */
export const BackupVaultEvent = {
  BACKUP_JOB_COMPLETED: "BACKUP_JOB_COMPLETED",
  BACKUP_JOB_EXPIRED: "BACKUP_JOB_EXPIRED",
  BACKUP_JOB_FAILED: "BACKUP_JOB_FAILED",
  BACKUP_JOB_STARTED: "BACKUP_JOB_STARTED",
  BACKUP_JOB_SUCCESSFUL: "BACKUP_JOB_SUCCESSFUL",
  BACKUP_PLAN_CREATED: "BACKUP_PLAN_CREATED",
  BACKUP_PLAN_MODIFIED: "BACKUP_PLAN_MODIFIED",
  CONTINUOUS_BACKUP_INTERRUPTED: "CONTINUOUS_BACKUP_INTERRUPTED",
  COPY_JOB_FAILED: "COPY_JOB_FAILED",
  COPY_JOB_STARTED: "COPY_JOB_STARTED",
  COPY_JOB_SUCCESSFUL: "COPY_JOB_SUCCESSFUL",
  RECOVERY_POINT_INDEXING_FAILED: "RECOVERY_POINT_INDEXING_FAILED",
  RECOVERY_POINT_INDEX_COMPLETED: "RECOVERY_POINT_INDEX_COMPLETED",
  RECOVERY_POINT_INDEX_DELETED: "RECOVERY_POINT_INDEX_DELETED",
  RECOVERY_POINT_MODIFIED: "RECOVERY_POINT_MODIFIED",
  RESTORE_JOB_COMPLETED: "RESTORE_JOB_COMPLETED",
  RESTORE_JOB_FAILED: "RESTORE_JOB_FAILED",
  RESTORE_JOB_STARTED: "RESTORE_JOB_STARTED",
  RESTORE_JOB_SUCCESSFUL: "RESTORE_JOB_SUCCESSFUL",
  S3_BACKUP_OBJECT_FAILED: "S3_BACKUP_OBJECT_FAILED",
  S3_RESTORE_OBJECT_FAILED: "S3_RESTORE_OBJECT_FAILED",
} as const;
/**
 * @public
 */
export type BackupVaultEvent = (typeof BackupVaultEvent)[keyof typeof BackupVaultEvent];

/**
 * @public
 * @enum
 */
export const EncryptionKeyType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionKeyType = (typeof EncryptionKeyType)[keyof typeof EncryptionKeyType];

/**
 * @public
 * @enum
 */
export const VaultState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type VaultState = (typeof VaultState)[keyof typeof VaultState];

/**
 * @public
 * @enum
 */
export const VaultType = {
  BACKUP_VAULT: "BACKUP_VAULT",
  LOGICALLY_AIR_GAPPED_BACKUP_VAULT: "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
  RESTORE_ACCESS_BACKUP_VAULT: "RESTORE_ACCESS_BACKUP_VAULT",
} as const;
/**
 * @public
 */
export type VaultType = (typeof VaultType)[keyof typeof VaultType];

/**
 * @public
 * @enum
 */
export const CopyJobState = {
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type CopyJobState = (typeof CopyJobState)[keyof typeof CopyJobState];

/**
 * @public
 * @enum
 */
export const CopyJobStatus = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  COMPLETING: "COMPLETING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  FAILING: "FAILING",
  PARTIAL: "PARTIAL",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type CopyJobStatus = (typeof CopyJobStatus)[keyof typeof CopyJobStatus];

/**
 * @public
 * @enum
 */
export const LegalHoldStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  CREATING: "CREATING",
} as const;
/**
 * @public
 */
export type LegalHoldStatus = (typeof LegalHoldStatus)[keyof typeof LegalHoldStatus];

/**
 * @public
 * @enum
 */
export const RestoreTestingRecoveryPointSelectionAlgorithm = {
  LATEST_WITHIN_WINDOW: "LATEST_WITHIN_WINDOW",
  RANDOM_WITHIN_WINDOW: "RANDOM_WITHIN_WINDOW",
} as const;
/**
 * @public
 */
export type RestoreTestingRecoveryPointSelectionAlgorithm =
  (typeof RestoreTestingRecoveryPointSelectionAlgorithm)[keyof typeof RestoreTestingRecoveryPointSelectionAlgorithm];

/**
 * @public
 * @enum
 */
export const RestoreTestingRecoveryPointType = {
  CONTINUOUS: "CONTINUOUS",
  SNAPSHOT: "SNAPSHOT",
} as const;
/**
 * @public
 */
export type RestoreTestingRecoveryPointType =
  (typeof RestoreTestingRecoveryPointType)[keyof typeof RestoreTestingRecoveryPointType];

/**
 * @public
 * @enum
 */
export const MpaSessionStatus = {
  APPROVED: "APPROVED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MpaSessionStatus = (typeof MpaSessionStatus)[keyof typeof MpaSessionStatus];

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const ScanJobState = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ISSUES: "COMPLETED_WITH_ISSUES",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ScanJobState = (typeof ScanJobState)[keyof typeof ScanJobState];

/**
 * @public
 * @enum
 */
export const RecoveryPointStatus = {
  AVAILABLE: "AVAILABLE",
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  EXPIRED: "EXPIRED",
  PARTIAL: "PARTIAL",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type RecoveryPointStatus = (typeof RecoveryPointStatus)[keyof typeof RecoveryPointStatus];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  COLD: "COLD",
  DELETED: "DELETED",
  WARM: "WARM",
} as const;
/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const RestoreDeletionStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type RestoreDeletionStatus = (typeof RestoreDeletionStatus)[keyof typeof RestoreDeletionStatus];

/**
 * @public
 * @enum
 */
export const RestoreJobStatus = {
  ABORTED: "ABORTED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type RestoreJobStatus = (typeof RestoreJobStatus)[keyof typeof RestoreJobStatus];

/**
 * @public
 * @enum
 */
export const RestoreValidationStatus = {
  FAILED: "FAILED",
  SUCCESSFUL: "SUCCESSFUL",
  TIMED_OUT: "TIMED_OUT",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type RestoreValidationStatus = (typeof RestoreValidationStatus)[keyof typeof RestoreValidationStatus];

/**
 * @public
 * @enum
 */
export const ScanResourceType = {
  EBS: "EBS",
  EC2: "EC2",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ScanResourceType = (typeof ScanResourceType)[keyof typeof ScanResourceType];

/**
 * @public
 * @enum
 */
export const ScanResultStatus = {
  NO_THREATS_FOUND: "NO_THREATS_FOUND",
  THREATS_FOUND: "THREATS_FOUND",
} as const;
/**
 * @public
 */
export type ScanResultStatus = (typeof ScanResultStatus)[keyof typeof ScanResultStatus];

/**
 * @public
 * @enum
 */
export const ScanState = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ISSUES: "COMPLETED_WITH_ISSUES",
  CREATED: "CREATED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ScanState = (typeof ScanState)[keyof typeof ScanState];

/**
 * @public
 * @enum
 */
export const RuleExecutionType = {
  CONTINUOUS: "CONTINUOUS",
  CONTINUOUS_AND_SNAPSHOTS: "CONTINUOUS_AND_SNAPSHOTS",
  SNAPSHOTS: "SNAPSHOTS",
} as const;
/**
 * @public
 */
export type RuleExecutionType = (typeof RuleExecutionType)[keyof typeof RuleExecutionType];

/**
 * @public
 * @enum
 */
export const MpaRevokeSessionStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MpaRevokeSessionStatus = (typeof MpaRevokeSessionStatus)[keyof typeof MpaRevokeSessionStatus];

/**
 * @public
 * @enum
 */
export const RestoreJobState = {
  ABORTED: "ABORTED",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type RestoreJobState = (typeof RestoreJobState)[keyof typeof RestoreJobState];

/**
 * @public
 * @enum
 */
export const ScanJobStatus = {
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ISSUES: "COMPLETED_WITH_ISSUES",
  CREATED: "CREATED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ScanJobStatus = (typeof ScanJobStatus)[keyof typeof ScanJobStatus];

/**
 * @public
 * @enum
 */
export const Index = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Index = (typeof Index)[keyof typeof Index];
