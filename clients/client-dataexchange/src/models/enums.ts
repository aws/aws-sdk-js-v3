// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptanceStateFilterValue = {
  ACCEPTED: "ACCEPTED",
  PENDING_RECEIVER_ACCEPTANCE: "PENDING_RECEIVER_ACCEPTANCE",
} as const;
/**
 * @public
 */
export type AcceptanceStateFilterValue = (typeof AcceptanceStateFilterValue)[keyof typeof AcceptanceStateFilterValue];

/**
 * @public
 * @enum
 */
export const DataGrantAcceptanceState = {
  ACCEPTED: "ACCEPTED",
  PENDING_RECEIVER_ACCEPTANCE: "PENDING_RECEIVER_ACCEPTANCE",
} as const;
/**
 * @public
 */
export type DataGrantAcceptanceState = (typeof DataGrantAcceptanceState)[keyof typeof DataGrantAcceptanceState];

/**
 * @public
 * @enum
 */
export const GrantDistributionScope = {
  AWS_ORGANIZATION: "AWS_ORGANIZATION",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GrantDistributionScope = (typeof GrantDistributionScope)[keyof typeof GrantDistributionScope];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ASSET: "ASSET",
  DATA_GRANT: "DATA_GRANT",
  DATA_SET: "DATA_SET",
  EVENT_ACTION: "EVENT_ACTION",
  JOB: "JOB",
  REVISION: "REVISION",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ExceptionCause = {
  InsufficientS3BucketPolicy: "InsufficientS3BucketPolicy",
  S3AccessDenied: "S3AccessDenied",
} as const;
/**
 * @public
 */
export type ExceptionCause = (typeof ExceptionCause)[keyof typeof ExceptionCause];

/**
 * @public
 * @enum
 */
export const ServerSideEncryptionTypes = {
  AES256: "AES256",
  aws_kms: "aws:kms",
} as const;
/**
 * @public
 */
export type ServerSideEncryptionTypes = (typeof ServerSideEncryptionTypes)[keyof typeof ServerSideEncryptionTypes];

/**
 * @public
 * @enum
 */
export const ProtocolType = {
  REST: "REST",
} as const;
/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * @enum
 */
export const LFResourceType = {
  DATABASE: "DATABASE",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type LFResourceType = (typeof LFResourceType)[keyof typeof LFResourceType];

/**
 * @public
 * @enum
 */
export const LakeFormationDataPermissionType = {
  LFTagPolicy: "LFTagPolicy",
} as const;
/**
 * @public
 */
export type LakeFormationDataPermissionType =
  (typeof LakeFormationDataPermissionType)[keyof typeof LakeFormationDataPermissionType];

/**
 * @public
 * @enum
 */
export const LFPermission = {
  DESCRIBE: "DESCRIBE",
  SELECT: "SELECT",
} as const;
/**
 * @public
 */
export type LFPermission = (typeof LFPermission)[keyof typeof LFPermission];

/**
 * @public
 * @enum
 */
export const AssetType = {
  API_GATEWAY_API: "API_GATEWAY_API",
  LAKE_FORMATION_DATA_PERMISSION: "LAKE_FORMATION_DATA_PERMISSION",
  REDSHIFT_DATA_SHARE: "REDSHIFT_DATA_SHARE",
  S3_DATA_ACCESS: "S3_DATA_ACCESS",
  S3_SNAPSHOT: "S3_SNAPSHOT",
} as const;
/**
 * @public
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

/**
 * @public
 * @enum
 */
export const Code = {
  ACCESS_DENIED_EXCEPTION: "ACCESS_DENIED_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  MALWARE_DETECTED: "MALWARE_DETECTED",
  MALWARE_SCAN_ENCRYPTED_FILE: "MALWARE_SCAN_ENCRYPTED_FILE",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;
/**
 * @public
 */
export type Code = (typeof Code)[keyof typeof Code];

/**
 * @public
 * @enum
 */
export const LimitName = {
  AWS_Lake_Formation_data_permission_assets_per_revision: "AWS Lake Formation data permission assets per revision",
  Active_and_pending_data_grants: "Active and pending data grants",
  Amazon_API_Gateway_API_assets_per_revision: "Amazon API Gateway API assets per revision",
  Amazon_Redshift_datashare_assets_per_import_job_from_Redshift: "Amazon Redshift datashare assets per import job from Redshift",
  Amazon_Redshift_datashare_assets_per_revision: "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision: "Amazon S3 data access assets per revision",
  Asset_per_export_job_from_Amazon_S3: "Asset per export job from Amazon S3",
  Asset_size_in_GB: "Asset size in GB",
  Assets_per_import_job_from_Amazon_S3: "Assets per import job from Amazon S3",
  Assets_per_revision: "Assets per revision",
  Auto_export_event_actions_per_data_set: "Auto export event actions per data set",
  Concurrent_in_progress_jobs_to_create_Amazon_S3_data_access_assets_from_S3_buckets: "Concurrent in progress jobs to create Amazon S3 data access assets from S3 buckets",
  Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3: "Concurrent in progress jobs to export assets to Amazon S3",
  Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL: "Concurrent in progress jobs to export assets to a signed URL",
  Concurrent_in_progress_jobs_to_export_revisions_to_Amazon_S3: "Concurrent in progress jobs to export revisions to Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_Redshift_datashares: "Concurrent in progress jobs to import assets from Amazon Redshift datashares",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3: "Concurrent in progress jobs to import assets from Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL: "Concurrent in progress jobs to import assets from a signed URL",
  Concurrent_in_progress_jobs_to_import_assets_from_an_API_Gateway_API: "Concurrent in progress jobs to import assets from an API Gateway API",
  Concurrent_in_progress_jobs_to_import_assets_from_an_AWS_Lake_Formation_tag_policy: "Concurrent in progress jobs to import assets from an AWS Lake Formation tag policy",
  Data_sets_per_account: "Data sets per account",
  Data_sets_per_product: "Data sets per product",
  Event_actions_per_account: "Event actions per account",
  Pending_data_grants_per_consumer: "Pending data grants per consumer",
  Products_per_account: "Products per account",
  Revisions_per_AWS_Lake_Formation_data_permission_data_set: "Revisions per AWS Lake Formation data permission data set",
  Revisions_per_Amazon_API_Gateway_API_data_set: "Revisions per Amazon API Gateway API data set",
  Revisions_per_Amazon_Redshift_datashare_data_set: "Revisions per Amazon Redshift datashare data set",
  Revisions_per_Amazon_S3_data_access_data_set: "Revisions per Amazon S3 data access data set",
  Revisions_per_data_set: "Revisions per data set",
} as const;
/**
 * @public
 */
export type LimitName = (typeof LimitName)[keyof typeof LimitName];

/**
 * @public
 * @enum
 */
export const Origin = {
  ENTITLED: "ENTITLED",
  OWNED: "OWNED",
} as const;
/**
 * @public
 */
export type Origin = (typeof Origin)[keyof typeof Origin];

/**
 * @public
 * @enum
 */
export const DatabaseLFTagPolicyPermission = {
  DESCRIBE: "DESCRIBE",
} as const;
/**
 * @public
 */
export type DatabaseLFTagPolicyPermission =
  (typeof DatabaseLFTagPolicyPermission)[keyof typeof DatabaseLFTagPolicyPermission];

/**
 * @public
 * @enum
 */
export const TableTagPolicyLFPermission = {
  DESCRIBE: "DESCRIBE",
  SELECT: "SELECT",
} as const;
/**
 * @public
 */
export type TableTagPolicyLFPermission = (typeof TableTagPolicyLFPermission)[keyof typeof TableTagPolicyLFPermission];

/**
 * @public
 * @enum
 */
export const Type = {
  CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET: "CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET",
  EXPORT_ASSETS_TO_S3: "EXPORT_ASSETS_TO_S3",
  EXPORT_ASSET_TO_SIGNED_URL: "EXPORT_ASSET_TO_SIGNED_URL",
  EXPORT_REVISIONS_TO_S3: "EXPORT_REVISIONS_TO_S3",
  IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY: "IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY",
  IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES: "IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES",
  IMPORT_ASSETS_FROM_S3: "IMPORT_ASSETS_FROM_S3",
  IMPORT_ASSET_FROM_API_GATEWAY_API: "IMPORT_ASSET_FROM_API_GATEWAY_API",
  IMPORT_ASSET_FROM_SIGNED_URL: "IMPORT_ASSET_FROM_SIGNED_URL",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const JobErrorLimitName = {
  AWS_Lake_Formation_data_permission_assets_per_revision: "AWS Lake Formation data permission assets per revision",
  Amazon_Redshift_datashare_assets_per_revision: "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision: "Amazon S3 data access assets per revision",
  Asset_size_in_GB: "Asset size in GB",
  Assets_per_revision: "Assets per revision",
} as const;
/**
 * @public
 */
export type JobErrorLimitName = (typeof JobErrorLimitName)[keyof typeof JobErrorLimitName];

/**
 * @public
 * @enum
 */
export const JobErrorResourceTypes = {
  ASSET: "ASSET",
  DATA_SET: "DATA_SET",
  REVISION: "REVISION",
} as const;
/**
 * @public
 */
export type JobErrorResourceTypes = (typeof JobErrorResourceTypes)[keyof typeof JobErrorResourceTypes];

/**
 * @public
 * @enum
 */
export const State = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  TIMED_OUT: "TIMED_OUT",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const SchemaChangeType = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type SchemaChangeType = (typeof SchemaChangeType)[keyof typeof SchemaChangeType];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  DATA_DELAY: "DATA_DELAY",
  DATA_UPDATE: "DATA_UPDATE",
  DEPRECATION: "DEPRECATION",
  SCHEMA_CHANGE: "SCHEMA_CHANGE",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
