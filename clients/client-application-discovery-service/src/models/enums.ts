// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgentStatus = {
  BLACKLISTED: "BLACKLISTED",
  HEALTHY: "HEALTHY",
  RUNNING: "RUNNING",
  SHUTDOWN: "SHUTDOWN",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * @public
 * @enum
 */
export const DeleteAgentErrorCode = {
  AGENT_IN_USE: "AGENT_IN_USE",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type DeleteAgentErrorCode = (typeof DeleteAgentErrorCode)[keyof typeof DeleteAgentErrorCode];

/**
 * @public
 * @enum
 */
export const BatchDeleteImportDataErrorCode = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
  OVER_LIMIT: "OVER_LIMIT",
} as const;
/**
 * @public
 */
export type BatchDeleteImportDataErrorCode =
  (typeof BatchDeleteImportDataErrorCode)[keyof typeof BatchDeleteImportDataErrorCode];

/**
 * @public
 * @enum
 */
export const DeletionConfigurationItemType = {
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type DeletionConfigurationItemType =
  (typeof DeletionConfigurationItemType)[keyof typeof DeletionConfigurationItemType];

/**
 * @public
 * @enum
 */
export const BatchDeleteConfigurationTaskStatus = {
  COMPLETED: "COMPLETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type BatchDeleteConfigurationTaskStatus =
  (typeof BatchDeleteConfigurationTaskStatus)[keyof typeof BatchDeleteConfigurationTaskStatus];

/**
 * @public
 * @enum
 */
export const DataSource = {
  AGENT: "AGENT",
} as const;
/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * @public
 * @enum
 */
export const ContinuousExportStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  START_FAILED: "START_FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
  STOP_FAILED: "STOP_FAILED",
  STOP_IN_PROGRESS: "STOP_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ContinuousExportStatus = (typeof ContinuousExportStatus)[keyof typeof ContinuousExportStatus];

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const ImportTaskFilterName = {
  FILE_CLASSIFICATION: "FILE_CLASSIFICATION",
  IMPORT_TASK_ID: "IMPORT_TASK_ID",
  NAME: "NAME",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ImportTaskFilterName = (typeof ImportTaskFilterName)[keyof typeof ImportTaskFilterName];

/**
 * @public
 * @enum
 */
export const FileClassification = {
  IMPORT_TEMPLATE: "IMPORT_TEMPLATE",
  MODELIZEIT_EXPORT: "MODELIZEIT_EXPORT",
  RVTOOLS_EXPORT: "RVTOOLS_EXPORT",
  VMWARE_NSX_EXPORT: "VMWARE_NSX_EXPORT",
} as const;
/**
 * @public
 */
export type FileClassification = (typeof FileClassification)[keyof typeof FileClassification];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_FAILED_LIMIT_EXCEEDED: "DELETE_FAILED_LIMIT_EXCEEDED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_COMPLETE_WITH_ERRORS: "IMPORT_COMPLETE_WITH_ERRORS",
  IMPORT_FAILED: "IMPORT_FAILED",
  IMPORT_FAILED_RECORD_LIMIT_EXCEEDED: "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED",
  IMPORT_FAILED_SERVER_LIMIT_EXCEEDED: "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED",
  IMPORT_FAILED_UNSUPPORTED_FILE_TYPE: "IMPORT_FAILED_UNSUPPORTED_FILE_TYPE",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationItemType = {
  APPLICATION: "APPLICATION",
  CONNECTIONS: "CONNECTION",
  PROCESS: "PROCESS",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type ConfigurationItemType = (typeof ConfigurationItemType)[keyof typeof ConfigurationItemType];

/**
 * @public
 * @enum
 */
export const OrderString = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type OrderString = (typeof OrderString)[keyof typeof OrderString];

/**
 * @public
 * @enum
 */
export const ExportDataFormat = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type ExportDataFormat = (typeof ExportDataFormat)[keyof typeof ExportDataFormat];

/**
 * @public
 * @enum
 */
export const OfferingClass = {
  CONVERTIBLE: "CONVERTIBLE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type OfferingClass = (typeof OfferingClass)[keyof typeof OfferingClass];

/**
 * @public
 * @enum
 */
export const PurchasingOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;
/**
 * @public
 */
export type PurchasingOption = (typeof PurchasingOption)[keyof typeof PurchasingOption];

/**
 * @public
 * @enum
 */
export const TermLength = {
  ONE_YEAR: "ONE_YEAR",
  THREE_YEAR: "THREE_YEAR",
} as const;
/**
 * @public
 */
export type TermLength = (typeof TermLength)[keyof typeof TermLength];

/**
 * @public
 * @enum
 */
export const Tenancy = {
  DEDICATED: "DEDICATED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];
