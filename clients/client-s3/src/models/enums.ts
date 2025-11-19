// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RequestCharged = {
  requester: "requester",
} as const;
/**
 * @public
 */
export type RequestCharged = (typeof RequestCharged)[keyof typeof RequestCharged];

/**
 * @public
 * @enum
 */
export const RequestPayer = {
  requester: "requester",
} as const;
/**
 * @public
 */
export type RequestPayer = (typeof RequestPayer)[keyof typeof RequestPayer];

/**
 * @public
 * @enum
 */
export const BucketAccelerateStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;
/**
 * @public
 */
export type BucketAccelerateStatus = (typeof BucketAccelerateStatus)[keyof typeof BucketAccelerateStatus];

/**
 * @public
 * @enum
 */
export const Type = {
  AmazonCustomerByEmail: "AmazonCustomerByEmail",
  CanonicalUser: "CanonicalUser",
  Group: "Group",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

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
export const ChecksumType = {
  COMPOSITE: "COMPOSITE",
  FULL_OBJECT: "FULL_OBJECT",
} as const;
/**
 * @public
 */
export type ChecksumType = (typeof ChecksumType)[keyof typeof ChecksumType];

/**
 * @public
 * @enum
 */
export const ServerSideEncryption = {
  AES256: "AES256",
  aws_fsx: "aws:fsx",
  aws_kms: "aws:kms",
  aws_kms_dsse: "aws:kms:dsse",
} as const;
/**
 * @public
 */
export type ServerSideEncryption = (typeof ServerSideEncryption)[keyof typeof ServerSideEncryption];

/**
 * @public
 * @enum
 */
export const ObjectCannedACL = {
  authenticated_read: "authenticated-read",
  aws_exec_read: "aws-exec-read",
  bucket_owner_full_control: "bucket-owner-full-control",
  bucket_owner_read: "bucket-owner-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;
/**
 * @public
 */
export type ObjectCannedACL = (typeof ObjectCannedACL)[keyof typeof ObjectCannedACL];

/**
 * @public
 * @enum
 */
export const ChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  CRC64NVME: "CRC64NVME",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const MetadataDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type MetadataDirective = (typeof MetadataDirective)[keyof typeof MetadataDirective];

/**
 * @public
 * @enum
 */
export const ObjectLockLegalHoldStatus = {
  OFF: "OFF",
  ON: "ON",
} as const;
/**
 * @public
 */
export type ObjectLockLegalHoldStatus = (typeof ObjectLockLegalHoldStatus)[keyof typeof ObjectLockLegalHoldStatus];

/**
 * @public
 * @enum
 */
export const ObjectLockMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;
/**
 * @public
 */
export type ObjectLockMode = (typeof ObjectLockMode)[keyof typeof ObjectLockMode];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
  FSX_OPENZFS: "FSX_OPENZFS",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  SNOW: "SNOW",
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
export const TaggingDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type TaggingDirective = (typeof TaggingDirective)[keyof typeof TaggingDirective];

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
export const DataRedundancy = {
  SingleAvailabilityZone: "SingleAvailabilityZone",
  SingleLocalZone: "SingleLocalZone",
} as const;
/**
 * @public
 */
export type DataRedundancy = (typeof DataRedundancy)[keyof typeof DataRedundancy];

/**
 * @public
 * @enum
 */
export const BucketType = {
  Directory: "Directory",
} as const;
/**
 * @public
 */
export type BucketType = (typeof BucketType)[keyof typeof BucketType];

/**
 * @public
 * @enum
 */
export const LocationType = {
  AvailabilityZone: "AvailabilityZone",
  LocalZone: "LocalZone",
} as const;
/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  EU: "EU",
  af_south_1: "af-south-1",
  ap_east_1: "ap-east-1",
  ap_northeast_1: "ap-northeast-1",
  ap_northeast_2: "ap-northeast-2",
  ap_northeast_3: "ap-northeast-3",
  ap_south_1: "ap-south-1",
  ap_south_2: "ap-south-2",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  ap_southeast_3: "ap-southeast-3",
  ap_southeast_4: "ap-southeast-4",
  ap_southeast_5: "ap-southeast-5",
  ca_central_1: "ca-central-1",
  cn_north_1: "cn-north-1",
  cn_northwest_1: "cn-northwest-1",
  eu_central_1: "eu-central-1",
  eu_central_2: "eu-central-2",
  eu_north_1: "eu-north-1",
  eu_south_1: "eu-south-1",
  eu_south_2: "eu-south-2",
  eu_west_1: "eu-west-1",
  eu_west_2: "eu-west-2",
  eu_west_3: "eu-west-3",
  il_central_1: "il-central-1",
  me_central_1: "me-central-1",
  me_south_1: "me-south-1",
  sa_east_1: "sa-east-1",
  us_east_2: "us-east-2",
  us_gov_east_1: "us-gov-east-1",
  us_gov_west_1: "us-gov-west-1",
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
export const ObjectOwnership = {
  BucketOwnerEnforced: "BucketOwnerEnforced",
  BucketOwnerPreferred: "BucketOwnerPreferred",
  ObjectWriter: "ObjectWriter",
} as const;
/**
 * @public
 */
export type ObjectOwnership = (typeof ObjectOwnership)[keyof typeof ObjectOwnership];

/**
 * @public
 * @enum
 */
export const InventoryConfigurationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type InventoryConfigurationState =
  (typeof InventoryConfigurationState)[keyof typeof InventoryConfigurationState];

/**
 * @public
 * @enum
 */
export const TableSseAlgorithm = {
  AES256: "AES256",
  aws_kms: "aws:kms",
} as const;
/**
 * @public
 */
export type TableSseAlgorithm = (typeof TableSseAlgorithm)[keyof typeof TableSseAlgorithm];

/**
 * @public
 * @enum
 */
export const ExpirationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ExpirationState = (typeof ExpirationState)[keyof typeof ExpirationState];

/**
 * @public
 * @enum
 */
export const SessionMode = {
  ReadOnly: "ReadOnly",
  ReadWrite: "ReadWrite",
} as const;
/**
 * @public
 */
export type SessionMode = (typeof SessionMode)[keyof typeof SessionMode];

/**
 * @public
 * @enum
 */
export const AnalyticsS3ExportFileFormat = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type AnalyticsS3ExportFileFormat =
  (typeof AnalyticsS3ExportFileFormat)[keyof typeof AnalyticsS3ExportFileFormat];

/**
 * @public
 * @enum
 */
export const StorageClassAnalysisSchemaVersion = {
  V_1: "V_1",
} as const;
/**
 * @public
 */
export type StorageClassAnalysisSchemaVersion =
  (typeof StorageClassAnalysisSchemaVersion)[keyof typeof StorageClassAnalysisSchemaVersion];

/**
 * @public
 * @enum
 */
export const IntelligentTieringStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type IntelligentTieringStatus = (typeof IntelligentTieringStatus)[keyof typeof IntelligentTieringStatus];

/**
 * @public
 * @enum
 */
export const IntelligentTieringAccessTier = {
  ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
} as const;
/**
 * @public
 */
export type IntelligentTieringAccessTier =
  (typeof IntelligentTieringAccessTier)[keyof typeof IntelligentTieringAccessTier];

/**
 * @public
 * @enum
 */
export const InventoryFormat = {
  CSV: "CSV",
  ORC: "ORC",
  Parquet: "Parquet",
} as const;
/**
 * @public
 */
export type InventoryFormat = (typeof InventoryFormat)[keyof typeof InventoryFormat];

/**
 * @public
 * @enum
 */
export const InventoryIncludedObjectVersions = {
  All: "All",
  Current: "Current",
} as const;
/**
 * @public
 */
export type InventoryIncludedObjectVersions =
  (typeof InventoryIncludedObjectVersions)[keyof typeof InventoryIncludedObjectVersions];

/**
 * @public
 * @enum
 */
export const InventoryOptionalField = {
  BucketKeyStatus: "BucketKeyStatus",
  ChecksumAlgorithm: "ChecksumAlgorithm",
  ETag: "ETag",
  EncryptionStatus: "EncryptionStatus",
  IntelligentTieringAccessTier: "IntelligentTieringAccessTier",
  IsMultipartUploaded: "IsMultipartUploaded",
  LastModifiedDate: "LastModifiedDate",
  ObjectAccessControlList: "ObjectAccessControlList",
  ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus",
  ObjectLockMode: "ObjectLockMode",
  ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate",
  ObjectOwner: "ObjectOwner",
  ReplicationStatus: "ReplicationStatus",
  Size: "Size",
  StorageClass: "StorageClass",
} as const;
/**
 * @public
 */
export type InventoryOptionalField = (typeof InventoryOptionalField)[keyof typeof InventoryOptionalField];

/**
 * @public
 * @enum
 */
export const InventoryFrequency = {
  Daily: "Daily",
  Weekly: "Weekly",
} as const;
/**
 * @public
 */
export type InventoryFrequency = (typeof InventoryFrequency)[keyof typeof InventoryFrequency];

/**
 * @public
 * @enum
 */
export const TransitionStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
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
export const TransitionDefaultMinimumObjectSize = {
  all_storage_classes_128K: "all_storage_classes_128K",
  varies_by_storage_class: "varies_by_storage_class",
} as const;
/**
 * @public
 */
export type TransitionDefaultMinimumObjectSize =
  (typeof TransitionDefaultMinimumObjectSize)[keyof typeof TransitionDefaultMinimumObjectSize];

/**
 * @public
 * @enum
 */
export const BucketLogsPermission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  WRITE: "WRITE",
} as const;
/**
 * @public
 */
export type BucketLogsPermission = (typeof BucketLogsPermission)[keyof typeof BucketLogsPermission];

/**
 * @public
 * @enum
 */
export const PartitionDateSource = {
  DeliveryTime: "DeliveryTime",
  EventTime: "EventTime",
} as const;
/**
 * @public
 */
export type PartitionDateSource = (typeof PartitionDateSource)[keyof typeof PartitionDateSource];

/**
 * @public
 * @enum
 */
export const S3TablesBucketType = {
  aws: "aws",
  customer: "customer",
} as const;
/**
 * @public
 */
export type S3TablesBucketType = (typeof S3TablesBucketType)[keyof typeof S3TablesBucketType];

/**
 * @public
 * @enum
 */
export const Event = {
  s3_IntelligentTiering: "s3:IntelligentTiering",
  s3_LifecycleExpiration_: "s3:LifecycleExpiration:*",
  s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete",
  s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated",
  s3_LifecycleTransition: "s3:LifecycleTransition",
  s3_ObjectAcl_Put: "s3:ObjectAcl:Put",
  s3_ObjectCreated_: "s3:ObjectCreated:*",
  s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload",
  s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy",
  s3_ObjectCreated_Post: "s3:ObjectCreated:Post",
  s3_ObjectCreated_Put: "s3:ObjectCreated:Put",
  s3_ObjectRemoved_: "s3:ObjectRemoved:*",
  s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete",
  s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated",
  s3_ObjectRestore_: "s3:ObjectRestore:*",
  s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed",
  s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete",
  s3_ObjectRestore_Post: "s3:ObjectRestore:Post",
  s3_ObjectTagging_: "s3:ObjectTagging:*",
  s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete",
  s3_ObjectTagging_Put: "s3:ObjectTagging:Put",
  s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject",
  s3_Replication_: "s3:Replication:*",
  s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication",
  s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold",
  s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked",
  s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold",
} as const;
/**
 * @public
 */
export type Event = (typeof Event)[keyof typeof Event];

/**
 * @public
 * @enum
 */
export const FilterRuleName = {
  prefix: "prefix",
  suffix: "suffix",
} as const;
/**
 * @public
 */
export type FilterRuleName = (typeof FilterRuleName)[keyof typeof FilterRuleName];

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
export const Payer = {
  BucketOwner: "BucketOwner",
  Requester: "Requester",
} as const;
/**
 * @public
 */
export type Payer = (typeof Payer)[keyof typeof Payer];

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
export const Protocol = {
  http: "http",
  https: "https",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETE: "COMPLETE",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
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
export const ChecksumMode = {
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ChecksumMode = (typeof ChecksumMode)[keyof typeof ChecksumMode];

/**
 * @public
 * @enum
 */
export const ObjectAttributes = {
  CHECKSUM: "Checksum",
  ETAG: "ETag",
  OBJECT_PARTS: "ObjectParts",
  OBJECT_SIZE: "ObjectSize",
  STORAGE_CLASS: "StorageClass",
} as const;
/**
 * @public
 */
export type ObjectAttributes = (typeof ObjectAttributes)[keyof typeof ObjectAttributes];

/**
 * @public
 * @enum
 */
export const ObjectLockEnabled = {
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ObjectLockEnabled = (typeof ObjectLockEnabled)[keyof typeof ObjectLockEnabled];

/**
 * @public
 * @enum
 */
export const ObjectLockRetentionMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;
/**
 * @public
 */
export type ObjectLockRetentionMode = (typeof ObjectLockRetentionMode)[keyof typeof ObjectLockRetentionMode];

/**
 * @public
 * @enum
 */
export const ArchiveStatus = {
  ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
} as const;
/**
 * @public
 */
export type ArchiveStatus = (typeof ArchiveStatus)[keyof typeof ArchiveStatus];

/**
 * @public
 * @enum
 */
export const EncodingType = {
  url: "url",
} as const;
/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 * @enum
 */
export const ObjectStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
  FSX_OPENZFS: "FSX_OPENZFS",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  SNOW: "SNOW",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type ObjectStorageClass = (typeof ObjectStorageClass)[keyof typeof ObjectStorageClass];

/**
 * @public
 * @enum
 */
export const OptionalObjectAttributes = {
  RESTORE_STATUS: "RestoreStatus",
} as const;
/**
 * @public
 */
export type OptionalObjectAttributes = (typeof OptionalObjectAttributes)[keyof typeof OptionalObjectAttributes];

/**
 * @public
 * @enum
 */
export const ObjectVersionStorageClass = {
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ObjectVersionStorageClass = (typeof ObjectVersionStorageClass)[keyof typeof ObjectVersionStorageClass];

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
export const Tier = {
  Bulk: "Bulk",
  Expedited: "Expedited",
  Standard: "Standard",
} as const;
/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * @public
 * @enum
 */
export const ExpressionType = {
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type ExpressionType = (typeof ExpressionType)[keyof typeof ExpressionType];

/**
 * @public
 * @enum
 */
export const CompressionType = {
  BZIP2: "BZIP2",
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const FileHeaderInfo = {
  IGNORE: "IGNORE",
  NONE: "NONE",
  USE: "USE",
} as const;
/**
 * @public
 */
export type FileHeaderInfo = (typeof FileHeaderInfo)[keyof typeof FileHeaderInfo];

/**
 * @public
 * @enum
 */
export const JSONType = {
  DOCUMENT: "DOCUMENT",
  LINES: "LINES",
} as const;
/**
 * @public
 */
export type JSONType = (typeof JSONType)[keyof typeof JSONType];

/**
 * @public
 * @enum
 */
export const QuoteFields = {
  ALWAYS: "ALWAYS",
  ASNEEDED: "ASNEEDED",
} as const;
/**
 * @public
 */
export type QuoteFields = (typeof QuoteFields)[keyof typeof QuoteFields];

/**
 * @public
 * @enum
 */
export const RestoreRequestType = {
  SELECT: "SELECT",
} as const;
/**
 * @public
 */
export type RestoreRequestType = (typeof RestoreRequestType)[keyof typeof RestoreRequestType];
