// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AllocationType = {
  ELASTIC_IP: "ELASTIC_IP",
  OVERLAY: "OVERLAY",
  UNKNOWN: "UNKNOWN",
  VPC_SUBNET: "VPC_SUBNET",
} as const;
/**
 * @public
 */
export type AllocationType = (typeof AllocationType)[keyof typeof AllocationType];

/**
 * @public
 * @enum
 */
export const ApplicationDiscoveryStatus = {
  DELETING: "DELETING",
  REFRESH_FAILED: "REFRESH_FAILED",
  REGISTERING: "REGISTERING",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ApplicationDiscoveryStatus = (typeof ApplicationDiscoveryStatus)[keyof typeof ApplicationDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  ACTIVATED: "ACTIVATED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  REGISTERING: "REGISTERING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  HANA: "HANA",
  SAP_ABAP: "SAP_ABAP",
} as const;
/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * @enum
 */
export const CredentialType = {
  ADMIN: "ADMIN",
} as const;
/**
 * @public
 */
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType];

/**
 * @public
 * @enum
 */
export const BackintMode = {
  AWSBackup: "AWSBackup",
} as const;
/**
 * @public
 */
export type BackintMode = (typeof BackintMode)[keyof typeof BackintMode];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  MAINTENANCE: "MAINTENANCE",
  NONE: "NONE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const ComponentType = {
  ABAP: "ABAP",
  ASCS: "ASCS",
  DIALOG: "DIALOG",
  ERS: "ERS",
  HANA: "HANA",
  HANA_NODE: "HANA_NODE",
  WD: "WD",
  WEBDISP: "WEBDISP",
} as const;
/**
 * @public
 */
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];

/**
 * @public
 * @enum
 */
export const DatabaseConnectionMethod = {
  DIRECT: "DIRECT",
  OVERLAY: "OVERLAY",
} as const;
/**
 * @public
 */
export type DatabaseConnectionMethod = (typeof DatabaseConnectionMethod)[keyof typeof DatabaseConnectionMethod];

/**
 * @public
 * @enum
 */
export const HostRole = {
  LEADER: "LEADER",
  STANDBY: "STANDBY",
  UNKNOWN: "UNKNOWN",
  WORKER: "WORKER",
} as const;
/**
 * @public
 */
export type HostRole = (typeof HostRole)[keyof typeof HostRole];

/**
 * @public
 * @enum
 */
export const OperationMode = {
  DELTA_DATASHIPPING: "DELTA_DATASHIPPING",
  LOGREPLAY: "LOGREPLAY",
  LOGREPLAY_READACCESS: "LOGREPLAY_READACCESS",
  NONE: "NONE",
  PRIMARY: "PRIMARY",
} as const;
/**
 * @public
 */
export type OperationMode = (typeof OperationMode)[keyof typeof OperationMode];

/**
 * @public
 * @enum
 */
export const ReplicationMode = {
  ASYNC: "ASYNC",
  NONE: "NONE",
  PRIMARY: "PRIMARY",
  SYNC: "SYNC",
  SYNCMEM: "SYNCMEM",
} as const;
/**
 * @public
 */
export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

/**
 * @public
 * @enum
 */
export const ComponentStatus = {
  ACTIVATED: "ACTIVATED",
  RUNNING: "RUNNING",
  RUNNING_WITH_ERROR: "RUNNING_WITH_ERROR",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNDEFINED: "UNDEFINED",
} as const;
/**
 * @public
 */
export type ComponentStatus = (typeof ComponentStatus)[keyof typeof ComponentStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationCheckType = {
  SAP_CHECK_01: "SAP_CHECK_01",
  SAP_CHECK_02: "SAP_CHECK_02",
  SAP_CHECK_03: "SAP_CHECK_03",
} as const;
/**
 * @public
 */
export type ConfigurationCheckType = (typeof ConfigurationCheckType)[keyof typeof ConfigurationCheckType];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  ERROR: "ERROR",
  INPROGRESS: "INPROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationCheckOperationListingMode = {
  ALL_OPERATIONS: "ALL_OPERATIONS",
  LATEST_PER_CHECK: "LATEST_PER_CHECK",
} as const;
/**
 * @public
 */
export type ConfigurationCheckOperationListingMode =
  (typeof ConfigurationCheckOperationListingMode)[keyof typeof ConfigurationCheckOperationListingMode];

/**
 * @public
 * @enum
 */
export const ConnectedEntityType = {
  DBMS: "DBMS",
} as const;
/**
 * @public
 */
export type ConnectedEntityType = (typeof ConnectedEntityType)[keyof typeof ConnectedEntityType];

/**
 * @public
 * @enum
 */
export const DatabaseType = {
  SYSTEM: "SYSTEM",
  TENANT: "TENANT",
} as const;
/**
 * @public
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

/**
 * @public
 * @enum
 */
export const DatabaseStatus = {
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type DatabaseStatus = (typeof DatabaseStatus)[keyof typeof DatabaseStatus];

/**
 * @public
 * @enum
 */
export const PermissionActionType = {
  RESTORE: "RESTORE",
} as const;
/**
 * @public
 */
export type PermissionActionType = (typeof PermissionActionType)[keyof typeof PermissionActionType];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQUALS: "Equals",
  GREATER_THAN_OR_EQUALS: "GreaterThanOrEquals",
  LESS_THAN_OR_EQUALS: "LessThanOrEquals",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * @enum
 */
export const OperationEventStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type OperationEventStatus = (typeof OperationEventStatus)[keyof typeof OperationEventStatus];

/**
 * @public
 * @enum
 */
export const RuleResultStatus = {
  FAILED: "FAILED",
  INFO: "INFO",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type RuleResultStatus = (typeof RuleResultStatus)[keyof typeof RuleResultStatus];
