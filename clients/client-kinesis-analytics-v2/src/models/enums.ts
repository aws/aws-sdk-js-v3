// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecordFormatType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type RecordFormatType = (typeof RecordFormatType)[keyof typeof RecordFormatType];

/**
 * @public
 * @enum
 */
export const InputStartingPosition = {
  LAST_STOPPED_POINT: "LAST_STOPPED_POINT",
  NOW: "NOW",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type InputStartingPosition = (typeof InputStartingPosition)[keyof typeof InputStartingPosition];

/**
 * @public
 * @enum
 */
export const CodeContentType = {
  PLAINTEXT: "PLAINTEXT",
  ZIPFILE: "ZIPFILE",
} as const;
/**
 * @public
 */
export type CodeContentType = (typeof CodeContentType)[keyof typeof CodeContentType];

/**
 * @public
 * @enum
 */
export const KeyType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const ConfigurationType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const MetricsLevel = {
  APPLICATION: "APPLICATION",
  OPERATOR: "OPERATOR",
  PARALLELISM: "PARALLELISM",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type MetricsLevel = (typeof MetricsLevel)[keyof typeof MetricsLevel];

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  DEPENDENCY_JAR: "DEPENDENCY_JAR",
  UDF: "UDF",
} as const;
/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * @public
 * @enum
 */
export const ApplicationRestoreType = {
  RESTORE_FROM_CUSTOM_SNAPSHOT: "RESTORE_FROM_CUSTOM_SNAPSHOT",
  RESTORE_FROM_LATEST_SNAPSHOT: "RESTORE_FROM_LATEST_SNAPSHOT",
  SKIP_RESTORE_FROM_SNAPSHOT: "SKIP_RESTORE_FROM_SNAPSHOT",
} as const;
/**
 * @public
 */
export type ApplicationRestoreType = (typeof ApplicationRestoreType)[keyof typeof ApplicationRestoreType];

/**
 * @public
 * @enum
 */
export const ApplicationMode = {
  INTERACTIVE: "INTERACTIVE",
  STREAMING: "STREAMING",
} as const;
/**
 * @public
 */
export type ApplicationMode = (typeof ApplicationMode)[keyof typeof ApplicationMode];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  AUTOSCALING: "AUTOSCALING",
  DELETING: "DELETING",
  FORCE_STOPPING: "FORCE_STOPPING",
  MAINTENANCE: "MAINTENANCE",
  READY: "READY",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const RuntimeEnvironment = {
  FLINK_1_11: "FLINK-1_11",
  FLINK_1_13: "FLINK-1_13",
  FLINK_1_15: "FLINK-1_15",
  FLINK_1_18: "FLINK-1_18",
  FLINK_1_19: "FLINK-1_19",
  FLINK_1_20: "FLINK-1_20",
  FLINK_1_6: "FLINK-1_6",
  FLINK_1_8: "FLINK-1_8",
  SQL_1_0: "SQL-1_0",
  ZEPPELIN_FLINK_1_0: "ZEPPELIN-FLINK-1_0",
  ZEPPELIN_FLINK_2_0: "ZEPPELIN-FLINK-2_0",
  ZEPPELIN_FLINK_3_0: "ZEPPELIN-FLINK-3_0",
} as const;
/**
 * @public
 */
export type RuntimeEnvironment = (typeof RuntimeEnvironment)[keyof typeof RuntimeEnvironment];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const UrlType = {
  FLINK_DASHBOARD_URL: "FLINK_DASHBOARD_URL",
  ZEPPELIN_UI_URL: "ZEPPELIN_UI_URL",
} as const;
/**
 * @public
 */
export type UrlType = (typeof UrlType)[keyof typeof UrlType];

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
} as const;
/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];
