// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgentStatus = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
} as const;
/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * @public
 * @enum
 */
export const Atime = {
  BEST_EFFORT: "BEST_EFFORT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Atime = (typeof Atime)[keyof typeof Atime];

/**
 * @public
 * @enum
 */
export const AzureAccessTier = {
  ARCHIVE: "ARCHIVE",
  COOL: "COOL",
  HOT: "HOT",
} as const;
/**
 * @public
 */
export type AzureAccessTier = (typeof AzureAccessTier)[keyof typeof AzureAccessTier];

/**
 * @public
 * @enum
 */
export const AzureBlobAuthenticationType = {
  NONE: "NONE",
  SAS: "SAS",
} as const;
/**
 * @public
 */
export type AzureBlobAuthenticationType =
  (typeof AzureBlobAuthenticationType)[keyof typeof AzureBlobAuthenticationType];

/**
 * @public
 * @enum
 */
export const AzureBlobType = {
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type AzureBlobType = (typeof AzureBlobType)[keyof typeof AzureBlobType];

/**
 * @public
 * @enum
 */
export const EfsInTransitEncryption = {
  NONE: "NONE",
  TLS1_2: "TLS1_2",
} as const;
/**
 * @public
 */
export type EfsInTransitEncryption = (typeof EfsInTransitEncryption)[keyof typeof EfsInTransitEncryption];

/**
 * @public
 * @enum
 */
export const NfsVersion = {
  AUTOMATIC: "AUTOMATIC",
  NFS3: "NFS3",
  NFS4_0: "NFS4_0",
  NFS4_1: "NFS4_1",
} as const;
/**
 * @public
 */
export type NfsVersion = (typeof NfsVersion)[keyof typeof NfsVersion];

/**
 * @public
 * @enum
 */
export const SmbVersion = {
  AUTOMATIC: "AUTOMATIC",
  SMB1: "SMB1",
  SMB2: "SMB2",
  SMB2_0: "SMB2_0",
  SMB3: "SMB3",
} as const;
/**
 * @public
 */
export type SmbVersion = (typeof SmbVersion)[keyof typeof SmbVersion];

/**
 * @public
 * @enum
 */
export const HdfsAuthenticationType = {
  KERBEROS: "KERBEROS",
  SIMPLE: "SIMPLE",
} as const;
/**
 * @public
 */
export type HdfsAuthenticationType = (typeof HdfsAuthenticationType)[keyof typeof HdfsAuthenticationType];

/**
 * @public
 * @enum
 */
export const HdfsDataTransferProtection = {
  AUTHENTICATION: "AUTHENTICATION",
  DISABLED: "DISABLED",
  INTEGRITY: "INTEGRITY",
  PRIVACY: "PRIVACY",
} as const;
/**
 * @public
 */
export type HdfsDataTransferProtection = (typeof HdfsDataTransferProtection)[keyof typeof HdfsDataTransferProtection];

/**
 * @public
 * @enum
 */
export const HdfsRpcProtection = {
  AUTHENTICATION: "AUTHENTICATION",
  DISABLED: "DISABLED",
  INTEGRITY: "INTEGRITY",
  PRIVACY: "PRIVACY",
} as const;
/**
 * @public
 */
export type HdfsRpcProtection = (typeof HdfsRpcProtection)[keyof typeof HdfsRpcProtection];

/**
 * @public
 * @enum
 */
export const ObjectStorageServerProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;
/**
 * @public
 */
export type ObjectStorageServerProtocol =
  (typeof ObjectStorageServerProtocol)[keyof typeof ObjectStorageServerProtocol];

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_INSTANT_RETRIEVAL: "GLACIER_INSTANT_RETRIEVAL",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

/**
 * @public
 * @enum
 */
export const SmbAuthenticationType = {
  KERBEROS: "KERBEROS",
  NTLM: "NTLM",
} as const;
/**
 * @public
 */
export type SmbAuthenticationType = (typeof SmbAuthenticationType)[keyof typeof SmbAuthenticationType];

/**
 * @public
 * @enum
 */
export const FilterType = {
  SIMPLE_PATTERN: "SIMPLE_PATTERN",
} as const;
/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * @enum
 */
export const ManifestAction = {
  TRANSFER: "TRANSFER",
} as const;
/**
 * @public
 */
export type ManifestAction = (typeof ManifestAction)[keyof typeof ManifestAction];

/**
 * @public
 * @enum
 */
export const ManifestFormat = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type ManifestFormat = (typeof ManifestFormat)[keyof typeof ManifestFormat];

/**
 * @public
 * @enum
 */
export const Gid = {
  BOTH: "BOTH",
  INT_VALUE: "INT_VALUE",
  NAME: "NAME",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Gid = (typeof Gid)[keyof typeof Gid];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  BASIC: "BASIC",
  OFF: "OFF",
  TRANSFER: "TRANSFER",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const Mtime = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;
/**
 * @public
 */
export type Mtime = (typeof Mtime)[keyof typeof Mtime];

/**
 * @public
 * @enum
 */
export const ObjectTags = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;
/**
 * @public
 */
export type ObjectTags = (typeof ObjectTags)[keyof typeof ObjectTags];

/**
 * @public
 * @enum
 */
export const OverwriteMode = {
  ALWAYS: "ALWAYS",
  NEVER: "NEVER",
} as const;
/**
 * @public
 */
export type OverwriteMode = (typeof OverwriteMode)[keyof typeof OverwriteMode];

/**
 * @public
 * @enum
 */
export const PosixPermissions = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;
/**
 * @public
 */
export type PosixPermissions = (typeof PosixPermissions)[keyof typeof PosixPermissions];

/**
 * @public
 * @enum
 */
export const PreserveDeletedFiles = {
  PRESERVE: "PRESERVE",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type PreserveDeletedFiles = (typeof PreserveDeletedFiles)[keyof typeof PreserveDeletedFiles];

/**
 * @public
 * @enum
 */
export const PreserveDevices = {
  NONE: "NONE",
  PRESERVE: "PRESERVE",
} as const;
/**
 * @public
 */
export type PreserveDevices = (typeof PreserveDevices)[keyof typeof PreserveDevices];

/**
 * @public
 * @enum
 */
export const SmbSecurityDescriptorCopyFlags = {
  NONE: "NONE",
  OWNER_DACL: "OWNER_DACL",
  OWNER_DACL_SACL: "OWNER_DACL_SACL",
} as const;
/**
 * @public
 */
export type SmbSecurityDescriptorCopyFlags =
  (typeof SmbSecurityDescriptorCopyFlags)[keyof typeof SmbSecurityDescriptorCopyFlags];

/**
 * @public
 * @enum
 */
export const TaskQueueing = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TaskQueueing = (typeof TaskQueueing)[keyof typeof TaskQueueing];

/**
 * @public
 * @enum
 */
export const TransferMode = {
  ALL: "ALL",
  CHANGED: "CHANGED",
} as const;
/**
 * @public
 */
export type TransferMode = (typeof TransferMode)[keyof typeof TransferMode];

/**
 * @public
 * @enum
 */
export const Uid = {
  BOTH: "BOTH",
  INT_VALUE: "INT_VALUE",
  NAME: "NAME",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Uid = (typeof Uid)[keyof typeof Uid];

/**
 * @public
 * @enum
 */
export const VerifyMode = {
  NONE: "NONE",
  ONLY_FILES_TRANSFERRED: "ONLY_FILES_TRANSFERRED",
  POINT_IN_TIME_CONSISTENT: "POINT_IN_TIME_CONSISTENT",
} as const;
/**
 * @public
 */
export type VerifyMode = (typeof VerifyMode)[keyof typeof VerifyMode];

/**
 * @public
 * @enum
 */
export const ScheduleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * @public
 * @enum
 */
export const TaskMode = {
  BASIC: "BASIC",
  ENHANCED: "ENHANCED",
} as const;
/**
 * @public
 */
export type TaskMode = (typeof TaskMode)[keyof typeof TaskMode];

/**
 * @public
 * @enum
 */
export const ObjectVersionIds = {
  INCLUDE: "INCLUDE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ObjectVersionIds = (typeof ObjectVersionIds)[keyof typeof ObjectVersionIds];

/**
 * @public
 * @enum
 */
export const ReportOutputType = {
  STANDARD: "STANDARD",
  SUMMARY_ONLY: "SUMMARY_ONLY",
} as const;
/**
 * @public
 */
export type ReportOutputType = (typeof ReportOutputType)[keyof typeof ReportOutputType];

/**
 * @public
 * @enum
 */
export const ReportLevel = {
  ERRORS_ONLY: "ERRORS_ONLY",
  SUCCESSES_AND_ERRORS: "SUCCESSES_AND_ERRORS",
} as const;
/**
 * @public
 */
export type ReportLevel = (typeof ReportLevel)[keyof typeof ReportLevel];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  FIPS: "FIPS",
  FIPS_PRIVATE_LINK: "FIPS_PRIVATE_LINK",
  PRIVATE_LINK: "PRIVATE_LINK",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const ScheduleDisabledBy = {
  SERVICE: "SERVICE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ScheduleDisabledBy = (typeof ScheduleDisabledBy)[keyof typeof ScheduleDisabledBy];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const PhaseStatus = {
  ERROR: "ERROR",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type PhaseStatus = (typeof PhaseStatus)[keyof typeof PhaseStatus];

/**
 * @public
 * @enum
 */
export const TaskExecutionStatus = {
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  LAUNCHING: "LAUNCHING",
  PREPARING: "PREPARING",
  QUEUED: "QUEUED",
  SUCCESS: "SUCCESS",
  TRANSFERRING: "TRANSFERRING",
  VERIFYING: "VERIFYING",
} as const;
/**
 * @public
 */
export type TaskExecutionStatus = (typeof TaskExecutionStatus)[keyof typeof TaskExecutionStatus];

/**
 * @public
 * @enum
 */
export const LocationFilterName = {
  CreationTime: "CreationTime",
  LocationType: "LocationType",
  LocationUri: "LocationUri",
} as const;
/**
 * @public
 */
export type LocationFilterName = (typeof LocationFilterName)[keyof typeof LocationFilterName];

/**
 * @public
 * @enum
 */
export const Operator = {
  BEGINS_WITH: "BeginsWith",
  CONTAINS: "Contains",
  EQ: "Equals",
  GE: "GreaterThanOrEqual",
  GT: "GreaterThan",
  IN: "In",
  LE: "LessThanOrEqual",
  LT: "LessThan",
  NE: "NotEquals",
  NOT_CONTAINS: "NotContains",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const TaskFilterName = {
  CreationTime: "CreationTime",
  LocationId: "LocationId",
} as const;
/**
 * @public
 */
export type TaskFilterName = (typeof TaskFilterName)[keyof typeof TaskFilterName];
