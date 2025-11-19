// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApproximateCreationDateTimePrecision = {
  MICROSECOND: "MICROSECOND",
  MILLISECOND: "MILLISECOND",
} as const;
/**
 * @public
 */
export type ApproximateCreationDateTimePrecision =
  (typeof ApproximateCreationDateTimePrecision)[keyof typeof ApproximateCreationDateTimePrecision];

/**
 * @public
 * @enum
 */
export const AttributeAction = {
  ADD: "ADD",
  DELETE: "DELETE",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type AttributeAction = (typeof AttributeAction)[keyof typeof AttributeAction];

/**
 * @public
 * @enum
 */
export const ScalarAttributeType = {
  B: "B",
  N: "N",
  S: "S",
} as const;
/**
 * @public
 */
export type ScalarAttributeType = (typeof ScalarAttributeType)[keyof typeof ScalarAttributeType];

/**
 * @public
 * @enum
 */
export const BackupStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
} as const;
/**
 * @public
 */
export type BackupStatus = (typeof BackupStatus)[keyof typeof BackupStatus];

/**
 * @public
 * @enum
 */
export const BackupType = {
  AWS_BACKUP: "AWS_BACKUP",
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type BackupType = (typeof BackupType)[keyof typeof BackupType];

/**
 * @public
 * @enum
 */
export const BillingMode = {
  PAY_PER_REQUEST: "PAY_PER_REQUEST",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type BillingMode = (typeof BillingMode)[keyof typeof BillingMode];

/**
 * @public
 * @enum
 */
export const KeyType = {
  HASH: "HASH",
  RANGE: "RANGE",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const ProjectionType = {
  ALL: "ALL",
  INCLUDE: "INCLUDE",
  KEYS_ONLY: "KEYS_ONLY",
} as const;
/**
 * @public
 */
export type ProjectionType = (typeof ProjectionType)[keyof typeof ProjectionType];

/**
 * @public
 * @enum
 */
export const SSEType = {
  AES256: "AES256",
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];

/**
 * @public
 * @enum
 */
export const SSEStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type SSEStatus = (typeof SSEStatus)[keyof typeof SSEStatus];

/**
 * @public
 * @enum
 */
export const StreamViewType = {
  KEYS_ONLY: "KEYS_ONLY",
  NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
  NEW_IMAGE: "NEW_IMAGE",
  OLD_IMAGE: "OLD_IMAGE",
} as const;
/**
 * @public
 */
export type StreamViewType = (typeof StreamViewType)[keyof typeof StreamViewType];

/**
 * @public
 * @enum
 */
export const TimeToLiveStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type TimeToLiveStatus = (typeof TimeToLiveStatus)[keyof typeof TimeToLiveStatus];

/**
 * @public
 * @enum
 */
export const BackupTypeFilter = {
  ALL: "ALL",
  AWS_BACKUP: "AWS_BACKUP",
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type BackupTypeFilter = (typeof BackupTypeFilter)[keyof typeof BackupTypeFilter];

/**
 * @public
 * @enum
 */
export const ReturnConsumedCapacity = {
  INDEXES: "INDEXES",
  NONE: "NONE",
  TOTAL: "TOTAL",
} as const;
/**
 * @public
 */
export type ReturnConsumedCapacity = (typeof ReturnConsumedCapacity)[keyof typeof ReturnConsumedCapacity];

/**
 * @public
 * @enum
 */
export const ReturnValuesOnConditionCheckFailure = {
  ALL_OLD: "ALL_OLD",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ReturnValuesOnConditionCheckFailure =
  (typeof ReturnValuesOnConditionCheckFailure)[keyof typeof ReturnValuesOnConditionCheckFailure];

/**
 * @public
 * @enum
 */
export const BatchStatementErrorCodeEnum = {
  AccessDenied: "AccessDenied",
  ConditionalCheckFailed: "ConditionalCheckFailed",
  DuplicateItem: "DuplicateItem",
  InternalServerError: "InternalServerError",
  ItemCollectionSizeLimitExceeded: "ItemCollectionSizeLimitExceeded",
  ProvisionedThroughputExceeded: "ProvisionedThroughputExceeded",
  RequestLimitExceeded: "RequestLimitExceeded",
  ResourceNotFound: "ResourceNotFound",
  ThrottlingError: "ThrottlingError",
  TransactionConflict: "TransactionConflict",
  ValidationError: "ValidationError",
} as const;
/**
 * @public
 */
export type BatchStatementErrorCodeEnum =
  (typeof BatchStatementErrorCodeEnum)[keyof typeof BatchStatementErrorCodeEnum];

/**
 * @public
 * @enum
 */
export const ReturnItemCollectionMetrics = {
  NONE: "NONE",
  SIZE: "SIZE",
} as const;
/**
 * @public
 */
export type ReturnItemCollectionMetrics =
  (typeof ReturnItemCollectionMetrics)[keyof typeof ReturnItemCollectionMetrics];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  IN: "IN",
  LE: "LE",
  LT: "LT",
  NE: "NE",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_NULL: "NOT_NULL",
  NULL: "NULL",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const ConditionalOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type ConditionalOperator = (typeof ConditionalOperator)[keyof typeof ConditionalOperator];

/**
 * @public
 * @enum
 */
export const ContinuousBackupsStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ContinuousBackupsStatus = (typeof ContinuousBackupsStatus)[keyof typeof ContinuousBackupsStatus];

/**
 * @public
 * @enum
 */
export const PointInTimeRecoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];

/**
 * @public
 * @enum
 */
export const ContributorInsightsAction = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type ContributorInsightsAction = (typeof ContributorInsightsAction)[keyof typeof ContributorInsightsAction];

/**
 * @public
 * @enum
 */
export const ContributorInsightsMode = {
  ACCESSED_AND_THROTTLED_KEYS: "ACCESSED_AND_THROTTLED_KEYS",
  THROTTLED_KEYS: "THROTTLED_KEYS",
} as const;
/**
 * @public
 */
export type ContributorInsightsMode = (typeof ContributorInsightsMode)[keyof typeof ContributorInsightsMode];

/**
 * @public
 * @enum
 */
export const ContributorInsightsStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ContributorInsightsStatus = (typeof ContributorInsightsStatus)[keyof typeof ContributorInsightsStatus];

/**
 * @public
 * @enum
 */
export const GlobalTableStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type GlobalTableStatus = (typeof GlobalTableStatus)[keyof typeof GlobalTableStatus];

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const ReplicaStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  ARCHIVING: "ARCHIVING",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  REGION_DISABLED: "REGION_DISABLED",
  REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ReplicaStatus = (typeof ReplicaStatus)[keyof typeof ReplicaStatus];

/**
 * @public
 * @enum
 */
export const TableClass = {
  STANDARD: "STANDARD",
  STANDARD_INFREQUENT_ACCESS: "STANDARD_INFREQUENT_ACCESS",
} as const;
/**
 * @public
 */
export type TableClass = (typeof TableClass)[keyof typeof TableClass];

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  ARCHIVING: "ARCHIVING",
  CREATING: "CREATING",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  REPLICATION_NOT_AUTHORIZED: "REPLICATION_NOT_AUTHORIZED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

/**
 * @public
 * @enum
 */
export const WitnessStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type WitnessStatus = (typeof WitnessStatus)[keyof typeof WitnessStatus];

/**
 * @public
 * @enum
 */
export const MultiRegionConsistency = {
  EVENTUAL: "EVENTUAL",
  STRONG: "STRONG",
} as const;
/**
 * @public
 */
export type MultiRegionConsistency = (typeof MultiRegionConsistency)[keyof typeof MultiRegionConsistency];

/**
 * @public
 * @enum
 */
export const ReturnValue = {
  ALL_NEW: "ALL_NEW",
  ALL_OLD: "ALL_OLD",
  NONE: "NONE",
  UPDATED_NEW: "UPDATED_NEW",
  UPDATED_OLD: "UPDATED_OLD",
} as const;
/**
 * @public
 */
export type ReturnValue = (typeof ReturnValue)[keyof typeof ReturnValue];

/**
 * @public
 * @enum
 */
export const ExportFormat = {
  DYNAMODB_JSON: "DYNAMODB_JSON",
  ION: "ION",
} as const;
/**
 * @public
 */
export type ExportFormat = (typeof ExportFormat)[keyof typeof ExportFormat];

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const ExportType = {
  FULL_EXPORT: "FULL_EXPORT",
  INCREMENTAL_EXPORT: "INCREMENTAL_EXPORT",
} as const;
/**
 * @public
 */
export type ExportType = (typeof ExportType)[keyof typeof ExportType];

/**
 * @public
 * @enum
 */
export const ExportViewType = {
  NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
  NEW_IMAGE: "NEW_IMAGE",
} as const;
/**
 * @public
 */
export type ExportViewType = (typeof ExportViewType)[keyof typeof ExportViewType];

/**
 * @public
 * @enum
 */
export const S3SseAlgorithm = {
  AES256: "AES256",
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type S3SseAlgorithm = (typeof S3SseAlgorithm)[keyof typeof S3SseAlgorithm];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const InputCompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type InputCompressionType = (typeof InputCompressionType)[keyof typeof InputCompressionType];

/**
 * @public
 * @enum
 */
export const InputFormat = {
  CSV: "CSV",
  DYNAMODB_JSON: "DYNAMODB_JSON",
  ION: "ION",
} as const;
/**
 * @public
 */
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat];

/**
 * @public
 * @enum
 */
export const DestinationStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLE_FAILED: "ENABLE_FAILED",
  ENABLING: "ENABLING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DestinationStatus = (typeof DestinationStatus)[keyof typeof DestinationStatus];

/**
 * @public
 * @enum
 */
export const Select = {
  ALL_ATTRIBUTES: "ALL_ATTRIBUTES",
  ALL_PROJECTED_ATTRIBUTES: "ALL_PROJECTED_ATTRIBUTES",
  COUNT: "COUNT",
  SPECIFIC_ATTRIBUTES: "SPECIFIC_ATTRIBUTES",
} as const;
/**
 * @public
 */
export type Select = (typeof Select)[keyof typeof Select];
