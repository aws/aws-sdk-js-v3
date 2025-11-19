// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Permission = {
  ADMINISTRATOR: "ADMINISTRATOR",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const Quality = {
  BAD: "BAD",
  GOOD: "GOOD",
  UNCERTAIN: "UNCERTAIN",
} as const;
/**
 * @public
 */
export type Quality = (typeof Quality)[keyof typeof Quality];

/**
 * @public
 * @enum
 */
export const AggregateType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  MAXIMUM: "MAXIMUM",
  MINIMUM: "MINIMUM",
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type AggregateType = (typeof AggregateType)[keyof typeof AggregateType];

/**
 * @public
 * @enum
 */
export const PropertyDataType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  STRING: "STRING",
  STRUCT: "STRUCT",
} as const;
/**
 * @public
 */
export type PropertyDataType = (typeof PropertyDataType)[keyof typeof PropertyDataType];

/**
 * @public
 * @enum
 */
export const PropertyNotificationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PropertyNotificationState = (typeof PropertyNotificationState)[keyof typeof PropertyNotificationState];

/**
 * @public
 * @enum
 */
export const AssetErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;
/**
 * @public
 */
export type AssetErrorCode = (typeof AssetErrorCode)[keyof typeof AssetErrorCode];

/**
 * @public
 * @enum
 */
export const ForwardingConfigState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ForwardingConfigState = (typeof ForwardingConfigState)[keyof typeof ForwardingConfigState];

/**
 * @public
 * @enum
 */
export const ComputeLocation = {
  CLOUD: "CLOUD",
  EDGE: "EDGE",
} as const;
/**
 * @public
 */
export type ComputeLocation = (typeof ComputeLocation)[keyof typeof ComputeLocation];

/**
 * @public
 * @enum
 */
export const AssetModelState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROPAGATING: "PROPAGATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AssetModelState = (typeof AssetModelState)[keyof typeof AssetModelState];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const DetailedErrorCode = {
  INCOMPATIBLE_COMPUTE_LOCATION: "INCOMPATIBLE_COMPUTE_LOCATION",
  INCOMPATIBLE_FORWARDING_CONFIGURATION: "INCOMPATIBLE_FORWARDING_CONFIGURATION",
} as const;
/**
 * @public
 */
export type DetailedErrorCode = (typeof DetailedErrorCode)[keyof typeof DetailedErrorCode];

/**
 * @public
 * @enum
 */
export const AssetModelType = {
  ASSET_MODEL: "ASSET_MODEL",
  COMPONENT_MODEL: "COMPONENT_MODEL",
  INTERFACE: "INTERFACE",
} as const;
/**
 * @public
 */
export type AssetModelType = (typeof AssetModelType)[keyof typeof AssetModelType];

/**
 * @public
 * @enum
 */
export const AssetModelVersionType = {
  ACTIVE: "ACTIVE",
  LATEST: "LATEST",
} as const;
/**
 * @public
 */
export type AssetModelVersionType = (typeof AssetModelVersionType)[keyof typeof AssetModelVersionType];

/**
 * @public
 * @enum
 */
export const RawValueType = {
  BOOLEAN: "B",
  DOUBLE: "D",
  INTEGER: "I",
  STRING: "S",
  UNKNOWN: "U",
} as const;
/**
 * @public
 */
export type RawValueType = (typeof RawValueType)[keyof typeof RawValueType];

/**
 * @public
 * @enum
 */
export const AssetRelationshipType = {
  HIERARCHY: "HIERARCHY",
} as const;
/**
 * @public
 */
export type AssetRelationshipType = (typeof AssetRelationshipType)[keyof typeof AssetRelationshipType];

/**
 * @public
 * @enum
 */
export const AssetState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AssetState = (typeof AssetState)[keyof typeof AssetState];

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;
/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 * @enum
 */
export const TimeOrdering = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type TimeOrdering = (typeof TimeOrdering)[keyof typeof TimeOrdering];

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyAggregatesErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;
/**
 * @public
 */
export type BatchGetAssetPropertyAggregatesErrorCode =
  (typeof BatchGetAssetPropertyAggregatesErrorCode)[keyof typeof BatchGetAssetPropertyAggregatesErrorCode];

/**
 * @public
 * @enum
 */
export const BatchEntryCompletionStatus = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type BatchEntryCompletionStatus = (typeof BatchEntryCompletionStatus)[keyof typeof BatchEntryCompletionStatus];

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyValueErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;
/**
 * @public
 */
export type BatchGetAssetPropertyValueErrorCode =
  (typeof BatchGetAssetPropertyValueErrorCode)[keyof typeof BatchGetAssetPropertyValueErrorCode];

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyValueHistoryErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;
/**
 * @public
 */
export type BatchGetAssetPropertyValueHistoryErrorCode =
  (typeof BatchGetAssetPropertyValueHistoryErrorCode)[keyof typeof BatchGetAssetPropertyValueHistoryErrorCode];

/**
 * @public
 * @enum
 */
export const BatchPutAssetPropertyValueErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  ConflictingOperationException: "ConflictingOperationException",
  InternalFailureException: "InternalFailureException",
  InvalidRequestException: "InvalidRequestException",
  LimitExceededException: "LimitExceededException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ServiceUnavailableException: "ServiceUnavailableException",
  ThrottlingException: "ThrottlingException",
  TimestampOutOfRangeException: "TimestampOutOfRangeException",
} as const;
/**
 * @public
 */
export type BatchPutAssetPropertyValueErrorCode =
  (typeof BatchPutAssetPropertyValueErrorCode)[keyof typeof BatchPutAssetPropertyValueErrorCode];

/**
 * @public
 * @enum
 */
export const ColumnName = {
  ALIAS: "ALIAS",
  ASSET_ID: "ASSET_ID",
  DATA_TYPE: "DATA_TYPE",
  PROPERTY_ID: "PROPERTY_ID",
  QUALITY: "QUALITY",
  TIMESTAMP_NANO_OFFSET: "TIMESTAMP_NANO_OFFSET",
  TIMESTAMP_SECONDS: "TIMESTAMP_SECONDS",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type ColumnName = (typeof ColumnName)[keyof typeof ColumnName];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const ComputationModelState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ComputationModelState = (typeof ComputationModelState)[keyof typeof ComputationModelState];

/**
 * @public
 * @enum
 */
export const DatasetSourceFormat = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type DatasetSourceFormat = (typeof DatasetSourceFormat)[keyof typeof DatasetSourceFormat];

/**
 * @public
 * @enum
 */
export const DatasetSourceType = {
  KENDRA: "KENDRA",
} as const;
/**
 * @public
 */
export type DatasetSourceType = (typeof DatasetSourceType)[keyof typeof DatasetSourceType];

/**
 * @public
 * @enum
 */
export const DatasetState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DatasetState = (typeof DatasetState)[keyof typeof DatasetState];

/**
 * @public
 * @enum
 */
export const CoreDeviceOperatingSystem = {
  LINUX_AARCH64: "LINUX_AARCH64",
  LINUX_AMD64: "LINUX_AMD64",
  WINDOWS_AMD64: "WINDOWS_AMD64",
} as const;
/**
 * @public
 */
export type CoreDeviceOperatingSystem = (typeof CoreDeviceOperatingSystem)[keyof typeof CoreDeviceOperatingSystem];

/**
 * @public
 * @enum
 */
export const ImageFileType = {
  PNG: "PNG",
} as const;
/**
 * @public
 */
export type ImageFileType = (typeof ImageFileType)[keyof typeof ImageFileType];

/**
 * @public
 * @enum
 */
export const PortalType = {
  SITEWISE_PORTAL_V1: "SITEWISE_PORTAL_V1",
  SITEWISE_PORTAL_V2: "SITEWISE_PORTAL_V2",
} as const;
/**
 * @public
 */
export type PortalType = (typeof PortalType)[keyof typeof PortalType];

/**
 * @public
 * @enum
 */
export const MonitorErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type MonitorErrorCode = (typeof MonitorErrorCode)[keyof typeof MonitorErrorCode];

/**
 * @public
 * @enum
 */
export const PortalState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type PortalState = (typeof PortalState)[keyof typeof PortalState];

/**
 * @public
 * @enum
 */
export const ResolveToResourceType = {
  ASSET: "ASSET",
} as const;
/**
 * @public
 */
export type ResolveToResourceType = (typeof ResolveToResourceType)[keyof typeof ResolveToResourceType];

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ACTIVE: "ACTIVE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS_BASED_ENCRYPTION: "KMS_BASED_ENCRYPTION",
  SITEWISE_DEFAULT_ENCRYPTION: "SITEWISE_DEFAULT_ENCRYPTION",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const ExecutionState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ExecutionState = (typeof ExecutionState)[keyof typeof ExecutionState];

/**
 * @public
 * @enum
 */
export const CapabilitySyncStatus = {
  IN_SYNC: "IN_SYNC",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  OUT_OF_SYNC: "OUT_OF_SYNC",
  SYNC_FAILED: "SYNC_FAILED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type CapabilitySyncStatus = (typeof CapabilitySyncStatus)[keyof typeof CapabilitySyncStatus];

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * @enum
 */
export const DisassociatedDataStorageState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DisassociatedDataStorageState =
  (typeof DisassociatedDataStorageState)[keyof typeof DisassociatedDataStorageState];

/**
 * @public
 * @enum
 */
export const StorageType = {
  MULTI_LAYER_STORAGE: "MULTI_LAYER_STORAGE",
  SITEWISE_DEFAULT_STORAGE: "SITEWISE_DEFAULT_STORAGE",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const WarmTierState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WarmTierState = (typeof WarmTierState)[keyof typeof WarmTierState];

/**
 * @public
 * @enum
 */
export const ScalarType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INT: "INT",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type ScalarType = (typeof ScalarType)[keyof typeof ScalarType];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  GROUP: "GROUP",
  IAM: "IAM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  PORTAL: "PORTAL",
  PROJECT: "PROJECT",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const TargetResourceType = {
  ASSET: "ASSET",
  COMPUTATION_MODEL: "COMPUTATION_MODEL",
} as const;
/**
 * @public
 */
export type TargetResourceType = (typeof TargetResourceType)[keyof typeof TargetResourceType];

/**
 * @public
 * @enum
 */
export const ListAssetModelPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;
/**
 * @public
 */
export type ListAssetModelPropertiesFilter =
  (typeof ListAssetModelPropertiesFilter)[keyof typeof ListAssetModelPropertiesFilter];

/**
 * @public
 * @enum
 */
export const ListAssetPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;
/**
 * @public
 */
export type ListAssetPropertiesFilter = (typeof ListAssetPropertiesFilter)[keyof typeof ListAssetPropertiesFilter];

/**
 * @public
 * @enum
 */
export const TraversalType = {
  PATH_TO_ROOT: "PATH_TO_ROOT",
} as const;
/**
 * @public
 */
export type TraversalType = (typeof TraversalType)[keyof typeof TraversalType];

/**
 * @public
 * @enum
 */
export const ListAssetsFilter = {
  ALL: "ALL",
  TOP_LEVEL: "TOP_LEVEL",
} as const;
/**
 * @public
 */
export type ListAssetsFilter = (typeof ListAssetsFilter)[keyof typeof ListAssetsFilter];

/**
 * @public
 * @enum
 */
export const TraversalDirection = {
  CHILD: "CHILD",
  PARENT: "PARENT",
} as const;
/**
 * @public
 */
export type TraversalDirection = (typeof TraversalDirection)[keyof typeof TraversalDirection];

/**
 * @public
 * @enum
 */
export const ListBulkImportJobsFilter = {
  ALL: "ALL",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ListBulkImportJobsFilter = (typeof ListBulkImportJobsFilter)[keyof typeof ListBulkImportJobsFilter];

/**
 * @public
 * @enum
 */
export const ComputationModelType = {
  ANOMALY_DETECTION: "ANOMALY_DETECTION",
} as const;
/**
 * @public
 */
export type ComputationModelType = (typeof ComputationModelType)[keyof typeof ComputationModelType];

/**
 * @public
 * @enum
 */
export const ListTimeSeriesType = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
} as const;
/**
 * @public
 */
export type ListTimeSeriesType = (typeof ListTimeSeriesType)[keyof typeof ListTimeSeriesType];
