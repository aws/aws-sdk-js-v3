// smithy-typescript generated code
export type MetadataDirective = "COPY" | "REPLACE";

export type ObjectLockLegalHoldStatus = "OFF" | "ON";

export type ObjectLockMode = "COMPLIANCE" | "GOVERNANCE";

export type StorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "GLACIER_IR"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

export type TaggingDirective = "COPY" | "REPLACE";

export type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";

export type BucketLocationConstraint =
  | "EU"
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-2"
  | "us-gov-east-1"
  | "us-gov-west-1"
  | "us-west-1"
  | "us-west-2";

export type ObjectOwnership = "BucketOwnerEnforced" | "BucketOwnerPreferred" | "ObjectWriter";

export type AnalyticsS3ExportFileFormat = "CSV";

export type StorageClassAnalysisSchemaVersion = "V_1";

export type IntelligentTieringStatus = "Disabled" | "Enabled";

export type IntelligentTieringAccessTier = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

export type InventoryFormat = "CSV" | "ORC" | "Parquet";

export type InventoryIncludedObjectVersions = "All" | "Current";

export type InventoryFrequency = "Daily" | "Weekly";

export type TransitionStorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "GLACIER_IR"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "STANDARD_IA";

export type ExpirationStatus = "Disabled" | "Enabled";

export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE";

export type FilterRuleName = "prefix" | "suffix";

export type DeleteMarkerReplicationStatus = "Disabled" | "Enabled";

export type MetricsStatus = "Disabled" | "Enabled";

export type ReplicationTimeStatus = "Disabled" | "Enabled";

export type ExistingObjectReplicationStatus = "Disabled" | "Enabled";

export type ReplicaModificationsStatus = "Disabled" | "Enabled";

export type SseKmsEncryptedObjectsStatus = "Disabled" | "Enabled";

export type ReplicationRuleStatus = "Disabled" | "Enabled";

export type Payer = "BucketOwner" | "Requester";

export type MFADeleteStatus = "Disabled" | "Enabled";

export type BucketVersioningStatus = "Enabled" | "Suspended";

export type Protocol = "http" | "https";

export type ReplicationStatus = "COMPLETE" | "FAILED" | "PENDING" | "REPLICA";

export enum ChecksumMode {
  ENABLED = "ENABLED",
}

export enum ObjectAttributes {
  CHECKSUM = "Checksum",
  ETAG = "ETag",
  OBJECT_PARTS = "ObjectParts",
  OBJECT_SIZE = "ObjectSize",
  STORAGE_CLASS = "StorageClass",
}

export type ObjectLockEnabled = "Enabled";

export type ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE";

export type ArchiveStatus = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

export type EncodingType = "url";

export type ObjectStorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "GLACIER_IR"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

export type ObjectVersionStorageClass = "STANDARD";

export type MFADelete = "Disabled" | "Enabled";

export type Tier = "Bulk" | "Expedited" | "Standard";

export type ExpressionType = "SQL";

export type CompressionType = "BZIP2" | "GZIP" | "NONE";

export enum FileHeaderInfo {
  IGNORE = "IGNORE",
  NONE = "NONE",
  USE = "USE",
}

export enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
}

export enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
}

export enum RestoreRequestType {
  SELECT = "SELECT",
}
