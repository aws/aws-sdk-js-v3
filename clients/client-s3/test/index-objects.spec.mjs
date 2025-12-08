import {
  AbortMultipartUploadCommand,
  AnalyticsS3ExportFileFormat,
  ArchiveStatus,
  BucketAbacStatus,
  BucketAccelerateStatus,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketCannedACL,
  BucketLocationConstraint,
  BucketLogsPermission,
  BucketType,
  BucketVersioningStatus,
  ChecksumAlgorithm,
  ChecksumMode,
  ChecksumType,
  CompleteMultipartUploadCommand,
  CompressionType,
  CopyObjectCommand,
  CreateBucketCommand,
  CreateBucketMetadataConfigurationCommand,
  CreateBucketMetadataTableConfigurationCommand,
  CreateMultipartUploadCommand,
  CreateSessionCommand,
  DataRedundancy,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketCommand,
  DeleteBucketCorsCommand,
  DeleteBucketEncryptionCommand,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketLifecycleCommand,
  DeleteBucketMetadataConfigurationCommand,
  DeleteBucketMetadataTableConfigurationCommand,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteBucketWebsiteCommand,
  DeleteMarkerReplicationStatus,
  DeleteObjectCommand,
  DeleteObjectTaggingCommand,
  DeleteObjectsCommand,
  DeletePublicAccessBlockCommand,
  EncodingType,
  EncryptionType,
  EncryptionTypeMismatch,
  Event,
  ExistingObjectReplicationStatus,
  ExpirationState,
  ExpirationStatus,
  ExpressionType,
  FileHeaderInfo,
  FilterRuleName,
  GetBucketAbacCommand,
  GetBucketAccelerateConfigurationCommand,
  GetBucketAclCommand,
  GetBucketAnalyticsConfigurationCommand,
  GetBucketCorsCommand,
  GetBucketEncryptionCommand,
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketInventoryConfigurationCommand,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLocationCommand,
  GetBucketLoggingCommand,
  GetBucketMetadataConfigurationCommand,
  GetBucketMetadataTableConfigurationCommand,
  GetBucketMetricsConfigurationCommand,
  GetBucketNotificationConfigurationCommand,
  GetBucketOwnershipControlsCommand,
  GetBucketPolicyCommand,
  GetBucketPolicyStatusCommand,
  GetBucketReplicationCommand,
  GetBucketRequestPaymentCommand,
  GetBucketTaggingCommand,
  GetBucketVersioningCommand,
  GetBucketWebsiteCommand,
  GetObjectAclCommand,
  GetObjectAttributesCommand,
  GetObjectCommand,
  GetObjectLegalHoldCommand,
  GetObjectLockConfigurationCommand,
  GetObjectRetentionCommand,
  GetObjectTaggingCommand,
  GetObjectTorrentCommand,
  GetPublicAccessBlockCommand,
  HeadBucketCommand,
  HeadObjectCommand,
  IdempotencyParameterMismatch,
  IntelligentTieringAccessTier,
  IntelligentTieringStatus,
  InvalidObjectState,
  InvalidRequest,
  InvalidWriteOffset,
  InventoryConfigurationState,
  InventoryFormat,
  InventoryFrequency,
  InventoryIncludedObjectVersions,
  InventoryOptionalField,
  JSONType,
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketInventoryConfigurationsCommand,
  ListBucketMetricsConfigurationsCommand,
  ListBucketsCommand,
  ListDirectoryBucketsCommand,
  ListMultipartUploadsCommand,
  ListObjectVersionsCommand,
  ListObjectsCommand,
  ListObjectsV2Command,
  ListPartsCommand,
  LocationType,
  MFADelete,
  MFADeleteStatus,
  MetadataDirective,
  MetricsStatus,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NotFound,
  ObjectAlreadyInActiveTierError,
  ObjectAttributes,
  ObjectCannedACL,
  ObjectLockEnabled,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetentionMode,
  ObjectNotInActiveTierError,
  ObjectOwnership,
  ObjectStorageClass,
  ObjectVersionStorageClass,
  OptionalObjectAttributes,
  OwnerOverride,
  PartitionDateSource,
  Payer,
  Permission,
  Protocol,
  PutBucketAbacCommand,
  PutBucketAccelerateConfigurationCommand,
  PutBucketAclCommand,
  PutBucketAnalyticsConfigurationCommand,
  PutBucketCorsCommand,
  PutBucketEncryptionCommand,
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketInventoryConfigurationCommand,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLoggingCommand,
  PutBucketMetricsConfigurationCommand,
  PutBucketNotificationConfigurationCommand,
  PutBucketOwnershipControlsCommand,
  PutBucketPolicyCommand,
  PutBucketReplicationCommand,
  PutBucketRequestPaymentCommand,
  PutBucketTaggingCommand,
  PutBucketVersioningCommand,
  PutBucketWebsiteCommand,
  PutObjectAclCommand,
  PutObjectCommand,
  PutObjectLegalHoldCommand,
  PutObjectLockConfigurationCommand,
  PutObjectRetentionCommand,
  PutObjectTaggingCommand,
  PutPublicAccessBlockCommand,
  QuoteFields,
  RenameObjectCommand,
  ReplicaModificationsStatus,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationTimeStatus,
  RequestCharged,
  RequestPayer,
  RestoreObjectCommand,
  RestoreRequestType,
  S3,
  S3Client,
  S3ServiceException,
  S3TablesBucketType,
  SelectObjectContentCommand,
  ServerSideEncryption,
  SessionMode,
  SseKmsEncryptedObjectsStatus,
  StorageClass,
  StorageClassAnalysisSchemaVersion,
  TableSseAlgorithm,
  TaggingDirective,
  Tier,
  TooManyParts,
  TransitionDefaultMinimumObjectSize,
  TransitionStorageClass,
  Type,
  UpdateBucketMetadataInventoryTableConfigurationCommand,
  UpdateBucketMetadataJournalTableConfigurationCommand,
  UploadPartCommand,
  UploadPartCopyCommand,
  WriteGetObjectResponseCommand,
  paginateListBuckets,
  paginateListDirectoryBuckets,
  paginateListObjectsV2,
  paginateListParts,
  waitForBucketExists,
  waitForBucketNotExists,
  waitForObjectExists,
  waitForObjectNotExists,
  waitUntilBucketExists,
  waitUntilBucketNotExists,
  waitUntilObjectExists,
  waitUntilObjectNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3Client === "function");
assert(typeof S3 === "function");
// commands
assert(typeof AbortMultipartUploadCommand === "function");
assert(typeof CompleteMultipartUploadCommand === "function");
assert(typeof CopyObjectCommand === "function");
assert(typeof CreateBucketCommand === "function");
assert(typeof CreateBucketMetadataConfigurationCommand === "function");
assert(typeof CreateBucketMetadataTableConfigurationCommand === "function");
assert(typeof CreateMultipartUploadCommand === "function");
assert(typeof CreateSessionCommand === "function");
assert(typeof DeleteBucketCommand === "function");
assert(typeof DeleteBucketAnalyticsConfigurationCommand === "function");
assert(typeof DeleteBucketCorsCommand === "function");
assert(typeof DeleteBucketEncryptionCommand === "function");
assert(typeof DeleteBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof DeleteBucketInventoryConfigurationCommand === "function");
assert(typeof DeleteBucketLifecycleCommand === "function");
assert(typeof DeleteBucketMetadataConfigurationCommand === "function");
assert(typeof DeleteBucketMetadataTableConfigurationCommand === "function");
assert(typeof DeleteBucketMetricsConfigurationCommand === "function");
assert(typeof DeleteBucketOwnershipControlsCommand === "function");
assert(typeof DeleteBucketPolicyCommand === "function");
assert(typeof DeleteBucketReplicationCommand === "function");
assert(typeof DeleteBucketTaggingCommand === "function");
assert(typeof DeleteBucketWebsiteCommand === "function");
assert(typeof DeleteObjectCommand === "function");
assert(typeof DeleteObjectsCommand === "function");
assert(typeof DeleteObjectTaggingCommand === "function");
assert(typeof DeletePublicAccessBlockCommand === "function");
assert(typeof GetBucketAbacCommand === "function");
assert(typeof GetBucketAccelerateConfigurationCommand === "function");
assert(typeof GetBucketAclCommand === "function");
assert(typeof GetBucketAnalyticsConfigurationCommand === "function");
assert(typeof GetBucketCorsCommand === "function");
assert(typeof GetBucketEncryptionCommand === "function");
assert(typeof GetBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof GetBucketInventoryConfigurationCommand === "function");
assert(typeof GetBucketLifecycleConfigurationCommand === "function");
assert(typeof GetBucketLocationCommand === "function");
assert(typeof GetBucketLoggingCommand === "function");
assert(typeof GetBucketMetadataConfigurationCommand === "function");
assert(typeof GetBucketMetadataTableConfigurationCommand === "function");
assert(typeof GetBucketMetricsConfigurationCommand === "function");
assert(typeof GetBucketNotificationConfigurationCommand === "function");
assert(typeof GetBucketOwnershipControlsCommand === "function");
assert(typeof GetBucketPolicyCommand === "function");
assert(typeof GetBucketPolicyStatusCommand === "function");
assert(typeof GetBucketReplicationCommand === "function");
assert(typeof GetBucketRequestPaymentCommand === "function");
assert(typeof GetBucketTaggingCommand === "function");
assert(typeof GetBucketVersioningCommand === "function");
assert(typeof GetBucketWebsiteCommand === "function");
assert(typeof GetObjectCommand === "function");
assert(typeof GetObjectAclCommand === "function");
assert(typeof GetObjectAttributesCommand === "function");
assert(typeof GetObjectLegalHoldCommand === "function");
assert(typeof GetObjectLockConfigurationCommand === "function");
assert(typeof GetObjectRetentionCommand === "function");
assert(typeof GetObjectTaggingCommand === "function");
assert(typeof GetObjectTorrentCommand === "function");
assert(typeof GetPublicAccessBlockCommand === "function");
assert(typeof HeadBucketCommand === "function");
assert(typeof HeadObjectCommand === "function");
assert(typeof ListBucketAnalyticsConfigurationsCommand === "function");
assert(typeof ListBucketIntelligentTieringConfigurationsCommand === "function");
assert(typeof ListBucketInventoryConfigurationsCommand === "function");
assert(typeof ListBucketMetricsConfigurationsCommand === "function");
assert(typeof ListBucketsCommand === "function");
assert(typeof ListDirectoryBucketsCommand === "function");
assert(typeof ListMultipartUploadsCommand === "function");
assert(typeof ListObjectsCommand === "function");
assert(typeof ListObjectsV2Command === "function");
assert(typeof ListObjectVersionsCommand === "function");
assert(typeof ListPartsCommand === "function");
assert(typeof PutBucketAbacCommand === "function");
assert(typeof PutBucketAccelerateConfigurationCommand === "function");
assert(typeof PutBucketAclCommand === "function");
assert(typeof PutBucketAnalyticsConfigurationCommand === "function");
assert(typeof PutBucketCorsCommand === "function");
assert(typeof PutBucketEncryptionCommand === "function");
assert(typeof PutBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof PutBucketInventoryConfigurationCommand === "function");
assert(typeof PutBucketLifecycleConfigurationCommand === "function");
assert(typeof PutBucketLoggingCommand === "function");
assert(typeof PutBucketMetricsConfigurationCommand === "function");
assert(typeof PutBucketNotificationConfigurationCommand === "function");
assert(typeof PutBucketOwnershipControlsCommand === "function");
assert(typeof PutBucketPolicyCommand === "function");
assert(typeof PutBucketReplicationCommand === "function");
assert(typeof PutBucketRequestPaymentCommand === "function");
assert(typeof PutBucketTaggingCommand === "function");
assert(typeof PutBucketVersioningCommand === "function");
assert(typeof PutBucketWebsiteCommand === "function");
assert(typeof PutObjectCommand === "function");
assert(typeof PutObjectAclCommand === "function");
assert(typeof PutObjectLegalHoldCommand === "function");
assert(typeof PutObjectLockConfigurationCommand === "function");
assert(typeof PutObjectRetentionCommand === "function");
assert(typeof PutObjectTaggingCommand === "function");
assert(typeof PutPublicAccessBlockCommand === "function");
assert(typeof RenameObjectCommand === "function");
assert(typeof RestoreObjectCommand === "function");
assert(typeof SelectObjectContentCommand === "function");
assert(typeof UpdateBucketMetadataInventoryTableConfigurationCommand === "function");
assert(typeof UpdateBucketMetadataJournalTableConfigurationCommand === "function");
assert(typeof UploadPartCommand === "function");
assert(typeof UploadPartCopyCommand === "function");
assert(typeof WriteGetObjectResponseCommand === "function");
// enums
assert(typeof AnalyticsS3ExportFileFormat === "object");
assert(typeof ArchiveStatus === "object");
assert(typeof BucketAbacStatus === "object");
assert(typeof BucketAccelerateStatus === "object");
assert(typeof BucketCannedACL === "object");
assert(typeof BucketLocationConstraint === "object");
assert(typeof BucketLogsPermission === "object");
assert(typeof BucketType === "object");
assert(typeof BucketVersioningStatus === "object");
assert(typeof ChecksumAlgorithm === "object");
assert(typeof ChecksumMode === "object");
assert(typeof ChecksumType === "object");
assert(typeof CompressionType === "object");
assert(typeof DataRedundancy === "object");
assert(typeof DeleteMarkerReplicationStatus === "object");
assert(typeof EncodingType === "object");
assert(typeof EncryptionType === "object");
assert(typeof Event === "object");
assert(typeof ExistingObjectReplicationStatus === "object");
assert(typeof ExpirationState === "object");
assert(typeof ExpirationStatus === "object");
assert(typeof ExpressionType === "object");
assert(typeof FileHeaderInfo === "object");
assert(typeof FilterRuleName === "object");
assert(typeof IntelligentTieringAccessTier === "object");
assert(typeof IntelligentTieringStatus === "object");
assert(typeof InventoryConfigurationState === "object");
assert(typeof InventoryFormat === "object");
assert(typeof InventoryFrequency === "object");
assert(typeof InventoryIncludedObjectVersions === "object");
assert(typeof InventoryOptionalField === "object");
assert(typeof JSONType === "object");
assert(typeof LocationType === "object");
assert(typeof MetadataDirective === "object");
assert(typeof MetricsStatus === "object");
assert(typeof MFADelete === "object");
assert(typeof MFADeleteStatus === "object");
assert(typeof ObjectAttributes === "object");
assert(typeof ObjectCannedACL === "object");
assert(typeof ObjectLockEnabled === "object");
assert(typeof ObjectLockLegalHoldStatus === "object");
assert(typeof ObjectLockMode === "object");
assert(typeof ObjectLockRetentionMode === "object");
assert(typeof ObjectOwnership === "object");
assert(typeof ObjectStorageClass === "object");
assert(typeof ObjectVersionStorageClass === "object");
assert(typeof OptionalObjectAttributes === "object");
assert(typeof OwnerOverride === "object");
assert(typeof PartitionDateSource === "object");
assert(typeof Payer === "object");
assert(typeof Permission === "object");
assert(typeof Protocol === "object");
assert(typeof QuoteFields === "object");
assert(typeof ReplicaModificationsStatus === "object");
assert(typeof ReplicationRuleStatus === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof ReplicationTimeStatus === "object");
assert(typeof RequestCharged === "object");
assert(typeof RequestPayer === "object");
assert(typeof RestoreRequestType === "object");
assert(typeof S3TablesBucketType === "object");
assert(typeof ServerSideEncryption === "object");
assert(typeof SessionMode === "object");
assert(typeof SseKmsEncryptedObjectsStatus === "object");
assert(typeof StorageClass === "object");
assert(typeof StorageClassAnalysisSchemaVersion === "object");
assert(typeof TableSseAlgorithm === "object");
assert(typeof TaggingDirective === "object");
assert(typeof Tier === "object");
assert(typeof TransitionDefaultMinimumObjectSize === "object");
assert(typeof TransitionStorageClass === "object");
assert(typeof Type === "object");
// errors
assert(BucketAlreadyExists.prototype instanceof S3ServiceException);
assert(BucketAlreadyOwnedByYou.prototype instanceof S3ServiceException);
assert(EncryptionTypeMismatch.prototype instanceof S3ServiceException);
assert(IdempotencyParameterMismatch.prototype instanceof S3ServiceException);
assert(InvalidObjectState.prototype instanceof S3ServiceException);
assert(InvalidRequest.prototype instanceof S3ServiceException);
assert(InvalidWriteOffset.prototype instanceof S3ServiceException);
assert(NoSuchBucket.prototype instanceof S3ServiceException);
assert(NoSuchKey.prototype instanceof S3ServiceException);
assert(NoSuchUpload.prototype instanceof S3ServiceException);
assert(NotFound.prototype instanceof S3ServiceException);
assert(ObjectAlreadyInActiveTierError.prototype instanceof S3ServiceException);
assert(ObjectNotInActiveTierError.prototype instanceof S3ServiceException);
assert(TooManyParts.prototype instanceof S3ServiceException);
assert(S3ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForBucketExists === "function");
assert(typeof waitForBucketNotExists === "function");
assert(typeof waitForObjectExists === "function");
assert(typeof waitForObjectNotExists === "function");
assert(typeof waitUntilBucketExists === "function");
assert(typeof waitUntilBucketNotExists === "function");
assert(typeof waitUntilObjectExists === "function");
assert(typeof waitUntilObjectNotExists === "function");
// paginators
assert(typeof paginateListBuckets === "function");
assert(typeof paginateListDirectoryBuckets === "function");
assert(typeof paginateListObjectsV2 === "function");
assert(typeof paginateListParts === "function");
console.log(`S3 index test passed.`);
