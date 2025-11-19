// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApiAccess = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApiAccess = (typeof ApiAccess)[keyof typeof ApiAccess];

/**
 * @public
 * @enum
 */
export const ApplicationPermission = {
  AccessNotebooks: "AccessNotebooks",
  CreateDataset: "CreateDataset",
  GetTemporaryCredentials: "GetTemporaryCredentials",
  ManageAttributeSets: "ManageAttributeSets",
  ManageClusters: "ManageClusters",
  ManageUsersAndGroups: "ManageUsersAndGroups",
  ViewAuditData: "ViewAuditData",
} as const;
/**
 * @public
 */
export type ApplicationPermission = (typeof ApplicationPermission)[keyof typeof ApplicationPermission];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  APPEND: "APPEND",
  MODIFY: "MODIFY",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const DatasetKind = {
  NON_TABULAR: "NON_TABULAR",
  TABULAR: "TABULAR",
} as const;
/**
 * @public
 */
export type DatasetKind = (typeof DatasetKind)[keyof typeof DatasetKind];

/**
 * @public
 * @enum
 */
export const ColumnDataType = {
  BIGINT: "BIGINT",
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  CHAR: "CHAR",
  DATE: "DATE",
  DATETIME: "DATETIME",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  SMALLINT: "SMALLINT",
  STRING: "STRING",
  TINYINT: "TINYINT",
} as const;
/**
 * @public
 */
export type ColumnDataType = (typeof ColumnDataType)[keyof typeof ColumnDataType];

/**
 * @public
 * @enum
 */
export const ExportFileFormat = {
  DELIMITED_TEXT: "DELIMITED_TEXT",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type ExportFileFormat = (typeof ExportFileFormat)[keyof typeof ExportFileFormat];

/**
 * @public
 * @enum
 */
export const UserType = {
  APP_USER: "APP_USER",
  SUPER_USER: "SUPER_USER",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const ErrorCategory = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CANCELLED: "CANCELLED",
  INTERNAL_SERVICE_EXCEPTION: "INTERNAL_SERVICE_EXCEPTION",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  SERVICE_QUOTA_EXCEEDED: "SERVICE_QUOTA_EXCEEDED",
  THROTTLING: "THROTTLING",
  USER_RECOVERABLE: "USER_RECOVERABLE",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory];

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const DataViewStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_CLEANUP_FAILED: "FAILED_CLEANUP_FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  SUCCESS: "SUCCESS",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type DataViewStatus = (typeof DataViewStatus)[keyof typeof DataViewStatus];

/**
 * @public
 * @enum
 */
export const PermissionGroupMembershipStatus = {
  ADDITION_IN_PROGRESS: "ADDITION_IN_PROGRESS",
  ADDITION_SUCCESS: "ADDITION_SUCCESS",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PermissionGroupMembershipStatus =
  (typeof PermissionGroupMembershipStatus)[keyof typeof PermissionGroupMembershipStatus];

/**
 * @public
 * @enum
 */
export const UserStatus = {
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

/**
 * @public
 * @enum
 */
export const LocationType = {
  INGESTION: "INGESTION",
  SAGEMAKER: "SAGEMAKER",
} as const;
/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];
