// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdminStatus = {
  DISABLING_IN_PROGRESS: "DISABLING_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus];

/**
 * @public
 * @enum
 */
export const AutomatedDiscoveryAccountStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutomatedDiscoveryAccountStatus =
  (typeof AutomatedDiscoveryAccountStatus)[keyof typeof AutomatedDiscoveryAccountStatus];

/**
 * @public
 * @enum
 */
export const AutomatedDiscoveryAccountUpdateErrorCode = {
  ACCOUNT_NOT_FOUND: "ACCOUNT_NOT_FOUND",
  ACCOUNT_PAUSED: "ACCOUNT_PAUSED",
} as const;
/**
 * @public
 */
export type AutomatedDiscoveryAccountUpdateErrorCode =
  (typeof AutomatedDiscoveryAccountUpdateErrorCode)[keyof typeof AutomatedDiscoveryAccountUpdateErrorCode];

/**
 * @public
 * @enum
 */
export const AllowsUnencryptedObjectUploads = {
  FALSE: "FALSE",
  TRUE: "TRUE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type AllowsUnencryptedObjectUploads =
  (typeof AllowsUnencryptedObjectUploads)[keyof typeof AllowsUnencryptedObjectUploads];

/**
 * @public
 * @enum
 */
export const AutomatedDiscoveryMonitoringStatus = {
  MONITORED: "MONITORED",
  NOT_MONITORED: "NOT_MONITORED",
} as const;
/**
 * @public
 */
export type AutomatedDiscoveryMonitoringStatus =
  (typeof AutomatedDiscoveryMonitoringStatus)[keyof typeof AutomatedDiscoveryMonitoringStatus];

/**
 * @public
 * @enum
 */
export const BucketMetadataErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  BUCKET_COUNT_EXCEEDS_QUOTA: "BUCKET_COUNT_EXCEEDS_QUOTA",
} as const;
/**
 * @public
 */
export type BucketMetadataErrorCode = (typeof BucketMetadataErrorCode)[keyof typeof BucketMetadataErrorCode];

/**
 * @public
 * @enum
 */
export const IsDefinedInJob = {
  FALSE: "FALSE",
  TRUE: "TRUE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type IsDefinedInJob = (typeof IsDefinedInJob)[keyof typeof IsDefinedInJob];

/**
 * @public
 * @enum
 */
export const IsMonitoredByJob = {
  FALSE: "FALSE",
  TRUE: "TRUE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type IsMonitoredByJob = (typeof IsMonitoredByJob)[keyof typeof IsMonitoredByJob];

/**
 * @public
 * @enum
 */
export const EffectivePermission = {
  NOT_PUBLIC: "NOT_PUBLIC",
  PUBLIC: "PUBLIC",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type EffectivePermission = (typeof EffectivePermission)[keyof typeof EffectivePermission];

/**
 * @public
 * @enum
 */
export const Type = {
  AES256: "AES256",
  NONE: "NONE",
  aws_kms: "aws:kms",
  aws_kms_dsse: "aws:kms:dsse",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const SharedAccess = {
  EXTERNAL: "EXTERNAL",
  INTERNAL: "INTERNAL",
  NOT_SHARED: "NOT_SHARED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type SharedAccess = (typeof SharedAccess)[keyof typeof SharedAccess];

/**
 * @public
 * @enum
 */
export const JobComparator = {
  CONTAINS: "CONTAINS",
  EQ: "EQ",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
  NE: "NE",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type JobComparator = (typeof JobComparator)[keyof typeof JobComparator];

/**
 * @public
 * @enum
 */
export const SimpleCriterionKeyForJob = {
  ACCOUNT_ID: "ACCOUNT_ID",
  S3_BUCKET_EFFECTIVE_PERMISSION: "S3_BUCKET_EFFECTIVE_PERMISSION",
  S3_BUCKET_NAME: "S3_BUCKET_NAME",
  S3_BUCKET_SHARED_ACCESS: "S3_BUCKET_SHARED_ACCESS",
} as const;
/**
 * @public
 */
export type SimpleCriterionKeyForJob = (typeof SimpleCriterionKeyForJob)[keyof typeof SimpleCriterionKeyForJob];

/**
 * @public
 * @enum
 */
export const DataIdentifierType = {
  CUSTOM: "CUSTOM",
  MANAGED: "MANAGED",
} as const;
/**
 * @public
 */
export type DataIdentifierType = (typeof DataIdentifierType)[keyof typeof DataIdentifierType];

/**
 * @public
 * @enum
 */
export const FindingCategory = {
  CLASSIFICATION: "CLASSIFICATION",
  POLICY: "POLICY",
} as const;
/**
 * @public
 */
export type FindingCategory = (typeof FindingCategory)[keyof typeof FindingCategory];

/**
 * @public
 * @enum
 */
export const OriginType = {
  AUTOMATED_SENSITIVE_DATA_DISCOVERY: "AUTOMATED_SENSITIVE_DATA_DISCOVERY",
  SENSITIVE_DATA_DISCOVERY_JOB: "SENSITIVE_DATA_DISCOVERY_JOB",
} as const;
/**
 * @public
 */
export type OriginType = (typeof OriginType)[keyof typeof OriginType];

/**
 * @public
 * @enum
 */
export const SensitiveDataItemCategory = {
  CREDENTIALS: "CREDENTIALS",
  CUSTOM_IDENTIFIER: "CUSTOM_IDENTIFIER",
  FINANCIAL_INFORMATION: "FINANCIAL_INFORMATION",
  PERSONAL_INFORMATION: "PERSONAL_INFORMATION",
} as const;
/**
 * @public
 */
export type SensitiveDataItemCategory = (typeof SensitiveDataItemCategory)[keyof typeof SensitiveDataItemCategory];

/**
 * @public
 * @enum
 */
export const FindingActionType = {
  AWS_API_CALL: "AWS_API_CALL",
} as const;
/**
 * @public
 */
export type FindingActionType = (typeof FindingActionType)[keyof typeof FindingActionType];

/**
 * @public
 * @enum
 */
export const UserIdentityType = {
  AWSAccount: "AWSAccount",
  AWSService: "AWSService",
  AssumedRole: "AssumedRole",
  FederatedUser: "FederatedUser",
  IAMUser: "IAMUser",
  Root: "Root",
} as const;
/**
 * @public
 */
export type UserIdentityType = (typeof UserIdentityType)[keyof typeof UserIdentityType];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AES256: "AES256",
  NONE: "NONE",
  UNKNOWN: "UNKNOWN",
  aws_kms: "aws:kms",
  aws_kms_dsse: "aws:kms:dsse",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const SeverityDescription = {
  High: "High",
  Low: "Low",
  Medium: "Medium",
} as const;
/**
 * @public
 */
export type SeverityDescription = (typeof SeverityDescription)[keyof typeof SeverityDescription];

/**
 * @public
 * @enum
 */
export const FindingType = {
  Policy_IAMUser_S3BlockPublicAccessDisabled: "Policy:IAMUser/S3BlockPublicAccessDisabled",
  Policy_IAMUser_S3BucketEncryptionDisabled: "Policy:IAMUser/S3BucketEncryptionDisabled",
  Policy_IAMUser_S3BucketPublic: "Policy:IAMUser/S3BucketPublic",
  Policy_IAMUser_S3BucketReplicatedExternally: "Policy:IAMUser/S3BucketReplicatedExternally",
  Policy_IAMUser_S3BucketSharedExternally: "Policy:IAMUser/S3BucketSharedExternally",
  Policy_IAMUser_S3BucketSharedWithCloudFront: "Policy:IAMUser/S3BucketSharedWithCloudFront",
  SensitiveData_S3Object_Credentials: "SensitiveData:S3Object/Credentials",
  SensitiveData_S3Object_CustomIdentifier: "SensitiveData:S3Object/CustomIdentifier",
  SensitiveData_S3Object_Financial: "SensitiveData:S3Object/Financial",
  SensitiveData_S3Object_Multiple: "SensitiveData:S3Object/Multiple",
  SensitiveData_S3Object_Personal: "SensitiveData:S3Object/Personal",
} as const;
/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 * @enum
 */
export const FindingsFilterAction = {
  ARCHIVE: "ARCHIVE",
  NOOP: "NOOP",
} as const;
/**
 * @public
 */
export type FindingsFilterAction = (typeof FindingsFilterAction)[keyof typeof FindingsFilterAction];

/**
 * @public
 * @enum
 */
export const RelationshipStatus = {
  AccountSuspended: "AccountSuspended",
  Created: "Created",
  EmailVerificationFailed: "EmailVerificationFailed",
  EmailVerificationInProgress: "EmailVerificationInProgress",
  Enabled: "Enabled",
  Invited: "Invited",
  Paused: "Paused",
  RegionDisabled: "RegionDisabled",
  Removed: "Removed",
  Resigned: "Resigned",
} as const;
/**
 * @public
 */
export type RelationshipStatus = (typeof RelationshipStatus)[keyof typeof RelationshipStatus];

/**
 * @public
 * @enum
 */
export const ScopeFilterKey = {
  OBJECT_EXTENSION: "OBJECT_EXTENSION",
  OBJECT_KEY: "OBJECT_KEY",
  OBJECT_LAST_MODIFIED_DATE: "OBJECT_LAST_MODIFIED_DATE",
  OBJECT_SIZE: "OBJECT_SIZE",
} as const;
/**
 * @public
 */
export type ScopeFilterKey = (typeof ScopeFilterKey)[keyof typeof ScopeFilterKey];

/**
 * @public
 * @enum
 */
export const TagTarget = {
  S3_OBJECT: "S3_OBJECT",
} as const;
/**
 * @public
 */
export type TagTarget = (typeof TagTarget)[keyof typeof TagTarget];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  IDLE: "IDLE",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
  USER_PAUSED: "USER_PAUSED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  ONE_TIME: "ONE_TIME",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const LastRunErrorStatusCode = {
  ERROR: "ERROR",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type LastRunErrorStatusCode = (typeof LastRunErrorStatusCode)[keyof typeof LastRunErrorStatusCode];

/**
 * @public
 * @enum
 */
export const ListJobsFilterKey = {
  createdAt: "createdAt",
  jobStatus: "jobStatus",
  jobType: "jobType",
  name: "name",
} as const;
/**
 * @public
 */
export type ListJobsFilterKey = (typeof ListJobsFilterKey)[keyof typeof ListJobsFilterKey];

/**
 * @public
 * @enum
 */
export const SearchResourcesComparator = {
  EQ: "EQ",
  NE: "NE",
} as const;
/**
 * @public
 */
export type SearchResourcesComparator = (typeof SearchResourcesComparator)[keyof typeof SearchResourcesComparator];

/**
 * @public
 * @enum
 */
export const SearchResourcesSimpleCriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  AUTOMATED_DISCOVERY_MONITORING_STATUS: "AUTOMATED_DISCOVERY_MONITORING_STATUS",
  S3_BUCKET_EFFECTIVE_PERMISSION: "S3_BUCKET_EFFECTIVE_PERMISSION",
  S3_BUCKET_NAME: "S3_BUCKET_NAME",
  S3_BUCKET_SHARED_ACCESS: "S3_BUCKET_SHARED_ACCESS",
} as const;
/**
 * @public
 */
export type SearchResourcesSimpleCriterionKey =
  (typeof SearchResourcesSimpleCriterionKey)[keyof typeof SearchResourcesSimpleCriterionKey];

/**
 * @public
 * @enum
 */
export const UnavailabilityReasonCode = {
  ACCOUNT_NOT_IN_ORGANIZATION: "ACCOUNT_NOT_IN_ORGANIZATION",
  INVALID_CLASSIFICATION_RESULT: "INVALID_CLASSIFICATION_RESULT",
  INVALID_RESULT_SIGNATURE: "INVALID_RESULT_SIGNATURE",
  MEMBER_ROLE_TOO_PERMISSIVE: "MEMBER_ROLE_TOO_PERMISSIVE",
  MISSING_GET_MEMBER_PERMISSION: "MISSING_GET_MEMBER_PERMISSION",
  OBJECT_EXCEEDS_SIZE_QUOTA: "OBJECT_EXCEEDS_SIZE_QUOTA",
  OBJECT_UNAVAILABLE: "OBJECT_UNAVAILABLE",
  RESULT_NOT_SIGNED: "RESULT_NOT_SIGNED",
  ROLE_TOO_PERMISSIVE: "ROLE_TOO_PERMISSIVE",
  UNSUPPORTED_FINDING_TYPE: "UNSUPPORTED_FINDING_TYPE",
  UNSUPPORTED_OBJECT_TYPE: "UNSUPPORTED_OBJECT_TYPE",
} as const;
/**
 * @public
 */
export type UnavailabilityReasonCode = (typeof UnavailabilityReasonCode)[keyof typeof UnavailabilityReasonCode];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ClientError: "ClientError",
  InternalError: "InternalError",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * @public
 * @enum
 */
export const Unit = {
  TERABYTES: "TERABYTES",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const UsageType = {
  AUTOMATED_OBJECT_MONITORING: "AUTOMATED_OBJECT_MONITORING",
  AUTOMATED_SENSITIVE_DATA_DISCOVERY: "AUTOMATED_SENSITIVE_DATA_DISCOVERY",
  DATA_INVENTORY_EVALUATION: "DATA_INVENTORY_EVALUATION",
  SENSITIVE_DATA_DISCOVERY: "SENSITIVE_DATA_DISCOVERY",
} as const;
/**
 * @public
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];

/**
 * @public
 * @enum
 */
export const UsageStatisticsFilterComparator = {
  CONTAINS: "CONTAINS",
  EQ: "EQ",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
  NE: "NE",
} as const;
/**
 * @public
 */
export type UsageStatisticsFilterComparator =
  (typeof UsageStatisticsFilterComparator)[keyof typeof UsageStatisticsFilterComparator];

/**
 * @public
 * @enum
 */
export const UsageStatisticsFilterKey = {
  accountId: "accountId",
  freeTrialStartDate: "freeTrialStartDate",
  serviceLimit: "serviceLimit",
  total: "total",
} as const;
/**
 * @public
 */
export type UsageStatisticsFilterKey = (typeof UsageStatisticsFilterKey)[keyof typeof UsageStatisticsFilterKey];

/**
 * @public
 * @enum
 */
export const AllowListStatusCode = {
  OK: "OK",
  S3_OBJECT_ACCESS_DENIED: "S3_OBJECT_ACCESS_DENIED",
  S3_OBJECT_EMPTY: "S3_OBJECT_EMPTY",
  S3_OBJECT_NOT_FOUND: "S3_OBJECT_NOT_FOUND",
  S3_OBJECT_OVERSIZE: "S3_OBJECT_OVERSIZE",
  S3_THROTTLED: "S3_THROTTLED",
  S3_USER_ACCESS_DENIED: "S3_USER_ACCESS_DENIED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
/**
 * @public
 */
export type AllowListStatusCode = (typeof AllowListStatusCode)[keyof typeof AllowListStatusCode];

/**
 * @public
 * @enum
 */
export const AutoEnableMode = {
  ALL: "ALL",
  NEW: "NEW",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AutoEnableMode = (typeof AutoEnableMode)[keyof typeof AutoEnableMode];

/**
 * @public
 * @enum
 */
export const AutomatedDiscoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutomatedDiscoveryStatus = (typeof AutomatedDiscoveryStatus)[keyof typeof AutomatedDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const AvailabilityCode = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type AvailabilityCode = (typeof AvailabilityCode)[keyof typeof AvailabilityCode];

/**
 * @public
 * @enum
 */
export const OrderBy = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * @public
 * @enum
 */
export const ClassificationScopeUpdateOperation = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type ClassificationScopeUpdateOperation =
  (typeof ClassificationScopeUpdateOperation)[keyof typeof ClassificationScopeUpdateOperation];

/**
 * @public
 * @enum
 */
export const ManagedDataIdentifierSelector = {
  ALL: "ALL",
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
  NONE: "NONE",
  RECOMMENDED: "RECOMMENDED",
} as const;
/**
 * @public
 */
export type ManagedDataIdentifierSelector =
  (typeof ManagedDataIdentifierSelector)[keyof typeof ManagedDataIdentifierSelector];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const DataIdentifierSeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type DataIdentifierSeverity = (typeof DataIdentifierSeverity)[keyof typeof DataIdentifierSeverity];

/**
 * @public
 * @enum
 */
export const FindingPublishingFrequency = {
  FIFTEEN_MINUTES: "FIFTEEN_MINUTES",
  ONE_HOUR: "ONE_HOUR",
  SIX_HOURS: "SIX_HOURS",
} as const;
/**
 * @public
 */
export type FindingPublishingFrequency = (typeof FindingPublishingFrequency)[keyof typeof FindingPublishingFrequency];

/**
 * @public
 * @enum
 */
export const MacieStatus = {
  ENABLED: "ENABLED",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type MacieStatus = (typeof MacieStatus)[keyof typeof MacieStatus];

/**
 * @public
 * @enum
 */
export const FindingStatisticsSortAttributeName = {
  count: "count",
  groupKey: "groupKey",
} as const;
/**
 * @public
 */
export type FindingStatisticsSortAttributeName =
  (typeof FindingStatisticsSortAttributeName)[keyof typeof FindingStatisticsSortAttributeName];

/**
 * @public
 * @enum
 */
export const GroupBy = {
  classificationDetails_jobId: "classificationDetails.jobId",
  resourcesAffected_s3Bucket_name: "resourcesAffected.s3Bucket.name",
  severity_description: "severity.description",
  type: "type",
} as const;
/**
 * @public
 */
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy];

/**
 * @public
 * @enum
 */
export const RevealStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RevealStatus = (typeof RevealStatus)[keyof typeof RevealStatus];

/**
 * @public
 * @enum
 */
export const RetrievalMode = {
  ASSUME_ROLE: "ASSUME_ROLE",
  CALLER_CREDENTIALS: "CALLER_CREDENTIALS",
} as const;
/**
 * @public
 */
export type RetrievalMode = (typeof RetrievalMode)[keyof typeof RetrievalMode];

/**
 * @public
 * @enum
 */
export const RevealRequestStatus = {
  ERROR: "ERROR",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type RevealRequestStatus = (typeof RevealRequestStatus)[keyof typeof RevealRequestStatus];

/**
 * @public
 * @enum
 */
export const UsageStatisticsSortKey = {
  accountId: "accountId",
  freeTrialStartDate: "freeTrialStartDate",
  serviceLimitValue: "serviceLimitValue",
  total: "total",
} as const;
/**
 * @public
 */
export type UsageStatisticsSortKey = (typeof UsageStatisticsSortKey)[keyof typeof UsageStatisticsSortKey];

/**
 * @public
 * @enum
 */
export const TimeRange = {
  MONTH_TO_DATE: "MONTH_TO_DATE",
  PAST_30_DAYS: "PAST_30_DAYS",
} as const;
/**
 * @public
 */
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];

/**
 * @public
 * @enum
 */
export const ListJobsSortAttributeName = {
  createdAt: "createdAt",
  jobStatus: "jobStatus",
  jobType: "jobType",
  name: "name",
} as const;
/**
 * @public
 */
export type ListJobsSortAttributeName = (typeof ListJobsSortAttributeName)[keyof typeof ListJobsSortAttributeName];

/**
 * @public
 * @enum
 */
export const SearchResourcesSortAttributeName = {
  ACCOUNT_ID: "ACCOUNT_ID",
  RESOURCE_NAME: "RESOURCE_NAME",
  S3_CLASSIFIABLE_OBJECT_COUNT: "S3_CLASSIFIABLE_OBJECT_COUNT",
  S3_CLASSIFIABLE_SIZE_IN_BYTES: "S3_CLASSIFIABLE_SIZE_IN_BYTES",
} as const;
/**
 * @public
 */
export type SearchResourcesSortAttributeName =
  (typeof SearchResourcesSortAttributeName)[keyof typeof SearchResourcesSortAttributeName];
