// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OwnerOverride = {
  Destination: "Destination",
} as const;
/**
 * @public
 */
export type OwnerOverride = (typeof OwnerOverride)[keyof typeof OwnerOverride];

/**
 * @public
 * @enum
 */
export const GranteeType = {
  DIRECTORY_GROUP: "DIRECTORY_GROUP",
  DIRECTORY_USER: "DIRECTORY_USER",
  IAM: "IAM",
} as const;
/**
 * @public
 */
export type GranteeType = (typeof GranteeType)[keyof typeof GranteeType];

/**
 * @public
 * @enum
 */
export const Permission = {
  READ: "READ",
  READWRITE: "READWRITE",
  WRITE: "WRITE",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const NetworkOrigin = {
  Internet: "Internet",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type NetworkOrigin = (typeof NetworkOrigin)[keyof typeof NetworkOrigin];

/**
 * @public
 * @enum
 */
export const AsyncOperationName = {
  CreateMultiRegionAccessPoint: "CreateMultiRegionAccessPoint",
  DeleteMultiRegionAccessPoint: "DeleteMultiRegionAccessPoint",
  PutMultiRegionAccessPointPolicy: "PutMultiRegionAccessPointPolicy",
} as const;
/**
 * @public
 */
export type AsyncOperationName = (typeof AsyncOperationName)[keyof typeof AsyncOperationName];

/**
 * @public
 * @enum
 */
export const S3PrefixType = {
  Object: "Object",
} as const;
/**
 * @public
 */
export type S3PrefixType = (typeof S3PrefixType)[keyof typeof S3PrefixType];

/**
 * @public
 * @enum
 */
export const ScopePermission = {
  AbortMultipartUpload: "AbortMultipartUpload",
  DeleteObject: "DeleteObject",
  GetObject: "GetObject",
  GetObjectAttributes: "GetObjectAttributes",
  ListBucket: "ListBucket",
  ListBucketMultipartUploads: "ListBucketMultipartUploads",
  ListMultipartUploadParts: "ListMultipartUploadParts",
  PutObject: "PutObject",
} as const;
/**
 * @public
 */
export type ScopePermission = (typeof ScopePermission)[keyof typeof ScopePermission];

/**
 * @public
 * @enum
 */
export const ObjectLambdaAllowedFeature = {
  GetObjectPartNumber: "GetObject-PartNumber",
  GetObjectRange: "GetObject-Range",
  HeadObjectPartNumber: "HeadObject-PartNumber",
  HeadObjectRange: "HeadObject-Range",
} as const;
/**
 * @public
 */
export type ObjectLambdaAllowedFeature = (typeof ObjectLambdaAllowedFeature)[keyof typeof ObjectLambdaAllowedFeature];

/**
 * @public
 * @enum
 */
export const ObjectLambdaTransformationConfigurationAction = {
  GetObject: "GetObject",
  HeadObject: "HeadObject",
  ListObjects: "ListObjects",
  ListObjectsV2: "ListObjectsV2",
} as const;
/**
 * @public
 */
export type ObjectLambdaTransformationConfigurationAction =
  (typeof ObjectLambdaTransformationConfigurationAction)[keyof typeof ObjectLambdaTransformationConfigurationAction];

/**
 * @public
 * @enum
 */
export const ObjectLambdaAccessPointAliasStatus = {
  PROVISIONING: "PROVISIONING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ObjectLambdaAccessPointAliasStatus =
  (typeof ObjectLambdaAccessPointAliasStatus)[keyof typeof ObjectLambdaAccessPointAliasStatus];

/**
 * @public
 * @enum
 */
export const BucketCannedACL = {
  authenticated_read: "authenticated-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;
/**
 * @public
 */
export type BucketCannedACL = (typeof BucketCannedACL)[keyof typeof BucketCannedACL];

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  EU: "EU",
  ap_northeast_1: "ap-northeast-1",
  ap_south_1: "ap-south-1",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  cn_north_1: "cn-north-1",
  eu_central_1: "eu-central-1",
  eu_west_1: "eu-west-1",
  sa_east_1: "sa-east-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];

/**
 * @public
 * @enum
 */
export const JobManifestFieldName = {
  Bucket: "Bucket",
  Ignore: "Ignore",
  Key: "Key",
  VersionId: "VersionId",
} as const;
/**
 * @public
 */
export type JobManifestFieldName = (typeof JobManifestFieldName)[keyof typeof JobManifestFieldName];

/**
 * @public
 * @enum
 */
export const JobManifestFormat = {
  S3BatchOperations_CSV_20180820: "S3BatchOperations_CSV_20180820",
  S3InventoryReport_CSV_20161130: "S3InventoryReport_CSV_20161130",
} as const;
/**
 * @public
 */
export type JobManifestFormat = (typeof JobManifestFormat)[keyof typeof JobManifestFormat];

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
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
export const ReplicationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  NONE: "NONE",
  REPLICA: "REPLICA",
} as const;
/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * @enum
 */
export const GeneratedManifestFormat = {
  S3InventoryReport_CSV_20211130: "S3InventoryReport_CSV_20211130",
} as const;
/**
 * @public
 */
export type GeneratedManifestFormat = (typeof GeneratedManifestFormat)[keyof typeof GeneratedManifestFormat];

/**
 * @public
 * @enum
 */
export const ComputeObjectChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  CRC64NVME: "CRC64NVME",
  MD5: "MD5",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type ComputeObjectChecksumAlgorithm =
  (typeof ComputeObjectChecksumAlgorithm)[keyof typeof ComputeObjectChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const ComputeObjectChecksumType = {
  COMPOSITE: "COMPOSITE",
  FULL_OBJECT: "FULL_OBJECT",
} as const;
/**
 * @public
 */
export type ComputeObjectChecksumType = (typeof ComputeObjectChecksumType)[keyof typeof ComputeObjectChecksumType];

/**
 * @public
 * @enum
 */
export const S3GlacierJobTier = {
  BULK: "BULK",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type S3GlacierJobTier = (typeof S3GlacierJobTier)[keyof typeof S3GlacierJobTier];

/**
 * @public
 * @enum
 */
export const S3GranteeTypeIdentifier = {
  CANONICAL: "id",
  EMAIL_ADDRESS: "emailAddress",
  GROUP: "uri",
} as const;
/**
 * @public
 */
export type S3GranteeTypeIdentifier = (typeof S3GranteeTypeIdentifier)[keyof typeof S3GranteeTypeIdentifier];

/**
 * @public
 * @enum
 */
export const S3Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;
/**
 * @public
 */
export type S3Permission = (typeof S3Permission)[keyof typeof S3Permission];

/**
 * @public
 * @enum
 */
export const S3CannedAccessControlList = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;
/**
 * @public
 */
export type S3CannedAccessControlList = (typeof S3CannedAccessControlList)[keyof typeof S3CannedAccessControlList];

/**
 * @public
 * @enum
 */
export const S3ChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  CRC64NVME: "CRC64NVME",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type S3ChecksumAlgorithm = (typeof S3ChecksumAlgorithm)[keyof typeof S3ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const S3MetadataDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type S3MetadataDirective = (typeof S3MetadataDirective)[keyof typeof S3MetadataDirective];

/**
 * @public
 * @enum
 */
export const S3SSEAlgorithm = {
  AES256: "AES256",
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type S3SSEAlgorithm = (typeof S3SSEAlgorithm)[keyof typeof S3SSEAlgorithm];

/**
 * @public
 * @enum
 */
export const S3ObjectLockLegalHoldStatus = {
  OFF: "OFF",
  ON: "ON",
} as const;
/**
 * @public
 */
export type S3ObjectLockLegalHoldStatus =
  (typeof S3ObjectLockLegalHoldStatus)[keyof typeof S3ObjectLockLegalHoldStatus];

/**
 * @public
 * @enum
 */
export const S3ObjectLockMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;
/**
 * @public
 */
export type S3ObjectLockMode = (typeof S3ObjectLockMode)[keyof typeof S3ObjectLockMode];

/**
 * @public
 * @enum
 */
export const S3ObjectLockRetentionMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;
/**
 * @public
 */
export type S3ObjectLockRetentionMode = (typeof S3ObjectLockRetentionMode)[keyof typeof S3ObjectLockRetentionMode];

/**
 * @public
 * @enum
 */
export const JobReportFormat = {
  Report_CSV_20180820: "Report_CSV_20180820",
} as const;
/**
 * @public
 */
export type JobReportFormat = (typeof JobReportFormat)[keyof typeof JobReportFormat];

/**
 * @public
 * @enum
 */
export const JobReportScope = {
  AllTasks: "AllTasks",
  FailedTasksOnly: "FailedTasksOnly",
} as const;
/**
 * @public
 */
export type JobReportScope = (typeof JobReportScope)[keyof typeof JobReportScope];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  Active: "Active",
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Complete: "Complete",
  Completing: "Completing",
  Failed: "Failed",
  Failing: "Failing",
  New: "New",
  Paused: "Paused",
  Pausing: "Pausing",
  Preparing: "Preparing",
  Ready: "Ready",
  Suspended: "Suspended",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const TransitionStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];

/**
 * @public
 * @enum
 */
export const ExpirationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ExpirationStatus = (typeof ExpirationStatus)[keyof typeof ExpirationStatus];

/**
 * @public
 * @enum
 */
export const DeleteMarkerReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type DeleteMarkerReplicationStatus =
  (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * @public
 * @enum
 */
export const ReplicationTimeStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];

/**
 * @public
 * @enum
 */
export const ReplicationStorageClass = {
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
export type ReplicationStorageClass = (typeof ReplicationStorageClass)[keyof typeof ReplicationStorageClass];

/**
 * @public
 * @enum
 */
export const ExistingObjectReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ExistingObjectReplicationStatus =
  (typeof ExistingObjectReplicationStatus)[keyof typeof ExistingObjectReplicationStatus];

/**
 * @public
 * @enum
 */
export const ReplicaModificationsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];

/**
 * @public
 * @enum
 */
export const SseKmsEncryptedObjectsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type SseKmsEncryptedObjectsStatus =
  (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];

/**
 * @public
 * @enum
 */
export const ReplicationRuleStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];

/**
 * @public
 * @enum
 */
export const MFADeleteStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type MFADeleteStatus = (typeof MFADeleteStatus)[keyof typeof MFADeleteStatus];

/**
 * @public
 * @enum
 */
export const BucketVersioningStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;
/**
 * @public
 */
export type BucketVersioningStatus = (typeof BucketVersioningStatus)[keyof typeof BucketVersioningStatus];

/**
 * @public
 * @enum
 */
export const Privilege = {
  Default: "Default",
  Minimal: "Minimal",
} as const;
/**
 * @public
 */
export type Privilege = (typeof Privilege)[keyof typeof Privilege];

/**
 * @public
 * @enum
 */
export const MultiRegionAccessPointStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  INCONSISTENT_ACROSS_REGIONS: "INCONSISTENT_ACROSS_REGIONS",
  PARTIALLY_CREATED: "PARTIALLY_CREATED",
  PARTIALLY_DELETED: "PARTIALLY_DELETED",
  READY: "READY",
} as const;
/**
 * @public
 */
export type MultiRegionAccessPointStatus =
  (typeof MultiRegionAccessPointStatus)[keyof typeof MultiRegionAccessPointStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  Parquet: "Parquet",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const OutputSchemaVersion = {
  V_1: "V_1",
} as const;
/**
 * @public
 */
export type OutputSchemaVersion = (typeof OutputSchemaVersion)[keyof typeof OutputSchemaVersion];

/**
 * @public
 * @enum
 */
export const OperationName = {
  LambdaInvoke: "LambdaInvoke",
  S3ComputeObjectChecksum: "S3ComputeObjectChecksum",
  S3DeleteObjectTagging: "S3DeleteObjectTagging",
  S3InitiateRestoreObject: "S3InitiateRestoreObject",
  S3PutObjectAcl: "S3PutObjectAcl",
  S3PutObjectCopy: "S3PutObjectCopy",
  S3PutObjectLegalHold: "S3PutObjectLegalHold",
  S3PutObjectRetention: "S3PutObjectRetention",
  S3PutObjectTagging: "S3PutObjectTagging",
  S3ReplicateObject: "S3ReplicateObject",
} as const;
/**
 * @public
 */
export type OperationName = (typeof OperationName)[keyof typeof OperationName];

/**
 * @public
 * @enum
 */
export const MFADelete = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type MFADelete = (typeof MFADelete)[keyof typeof MFADelete];

/**
 * @public
 * @enum
 */
export const RequestedJobStatus = {
  Cancelled: "Cancelled",
  Ready: "Ready",
} as const;
/**
 * @public
 */
export type RequestedJobStatus = (typeof RequestedJobStatus)[keyof typeof RequestedJobStatus];
