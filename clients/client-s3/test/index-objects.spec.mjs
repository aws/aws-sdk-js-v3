import {
  _Error$,
  _Object$,
  AbacStatus$,
  AbortIncompleteMultipartUpload$,
  AbortMultipartUpload$,
  AbortMultipartUploadCommand,
  AbortMultipartUploadOutput$,
  AbortMultipartUploadRequest$,
  AccelerateConfiguration$,
  AccessControlPolicy$,
  AccessControlTranslation$,
  AnalyticsAndOperator$,
  AnalyticsConfiguration$,
  AnalyticsExportDestination$,
  AnalyticsFilter$,
  AnalyticsS3BucketDestination$,
  AnalyticsS3ExportFileFormat,
  ArchiveStatus,
  BlockedEncryptionTypes$,
  Bucket$,
  BucketAbacStatus,
  BucketAccelerateStatus,
  BucketAlreadyExists,
  BucketAlreadyExists$,
  BucketAlreadyOwnedByYou,
  BucketAlreadyOwnedByYou$,
  BucketCannedACL,
  BucketInfo$,
  BucketLifecycleConfiguration$,
  BucketLocationConstraint,
  BucketLoggingStatus$,
  BucketLogsPermission,
  BucketType,
  BucketVersioningStatus,
  Checksum$,
  ChecksumAlgorithm,
  ChecksumMode,
  ChecksumType,
  CommonPrefix$,
  CompletedMultipartUpload$,
  CompletedPart$,
  CompleteMultipartUpload$,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadOutput$,
  CompleteMultipartUploadRequest$,
  CompressionType,
  Condition$,
  ContinuationEvent$,
  CopyObject$,
  CopyObjectCommand,
  CopyObjectOutput$,
  CopyObjectRequest$,
  CopyObjectResult$,
  CopyPartResult$,
  CORSConfiguration$,
  CORSRule$,
  CreateBucket$,
  CreateBucketCommand,
  CreateBucketConfiguration$,
  CreateBucketMetadataConfiguration$,
  CreateBucketMetadataConfigurationCommand,
  CreateBucketMetadataConfigurationRequest$,
  CreateBucketMetadataTableConfiguration$,
  CreateBucketMetadataTableConfigurationCommand,
  CreateBucketMetadataTableConfigurationRequest$,
  CreateBucketOutput$,
  CreateBucketRequest$,
  CreateMultipartUpload$,
  CreateMultipartUploadCommand,
  CreateMultipartUploadOutput$,
  CreateMultipartUploadRequest$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionOutput$,
  CreateSessionRequest$,
  CSVInput$,
  CSVOutput$,
  DataRedundancy,
  DefaultRetention$,
  Delete$,
  DeleteBucket$,
  DeleteBucketAnalyticsConfiguration$,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketAnalyticsConfigurationRequest$,
  DeleteBucketCommand,
  DeleteBucketCors$,
  DeleteBucketCorsCommand,
  DeleteBucketCorsRequest$,
  DeleteBucketEncryption$,
  DeleteBucketEncryptionCommand,
  DeleteBucketEncryptionRequest$,
  DeleteBucketIntelligentTieringConfiguration$,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketIntelligentTieringConfigurationRequest$,
  DeleteBucketInventoryConfiguration$,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketInventoryConfigurationRequest$,
  DeleteBucketLifecycle$,
  DeleteBucketLifecycleCommand,
  DeleteBucketLifecycleRequest$,
  DeleteBucketMetadataConfiguration$,
  DeleteBucketMetadataConfigurationCommand,
  DeleteBucketMetadataConfigurationRequest$,
  DeleteBucketMetadataTableConfiguration$,
  DeleteBucketMetadataTableConfigurationCommand,
  DeleteBucketMetadataTableConfigurationRequest$,
  DeleteBucketMetricsConfiguration$,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketMetricsConfigurationRequest$,
  DeleteBucketOwnershipControls$,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketOwnershipControlsRequest$,
  DeleteBucketPolicy$,
  DeleteBucketPolicyCommand,
  DeleteBucketPolicyRequest$,
  DeleteBucketReplication$,
  DeleteBucketReplicationCommand,
  DeleteBucketReplicationRequest$,
  DeleteBucketRequest$,
  DeleteBucketTagging$,
  DeleteBucketTaggingCommand,
  DeleteBucketTaggingRequest$,
  DeleteBucketWebsite$,
  DeleteBucketWebsiteCommand,
  DeleteBucketWebsiteRequest$,
  DeletedObject$,
  DeleteMarkerEntry$,
  DeleteMarkerReplication$,
  DeleteMarkerReplicationStatus,
  DeleteObject$,
  DeleteObjectCommand,
  DeleteObjectOutput$,
  DeleteObjectRequest$,
  DeleteObjects$,
  DeleteObjectsCommand,
  DeleteObjectsOutput$,
  DeleteObjectsRequest$,
  DeleteObjectTagging$,
  DeleteObjectTaggingCommand,
  DeleteObjectTaggingOutput$,
  DeleteObjectTaggingRequest$,
  DeletePublicAccessBlock$,
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockRequest$,
  Destination$,
  DestinationResult$,
  EncodingType,
  Encryption$,
  EncryptionConfiguration$,
  EncryptionType,
  EncryptionTypeMismatch,
  EncryptionTypeMismatch$,
  EndEvent$,
  ErrorDetails$,
  ErrorDocument$,
  Event,
  EventBridgeConfiguration$,
  ExistingObjectReplication$,
  ExistingObjectReplicationStatus,
  ExpirationState,
  ExpirationStatus,
  ExpressionType,
  FileHeaderInfo,
  FilterRule$,
  FilterRuleName,
  GetBucketAbac$,
  GetBucketAbacCommand,
  GetBucketAbacOutput$,
  GetBucketAbacRequest$,
  GetBucketAccelerateConfiguration$,
  GetBucketAccelerateConfigurationCommand,
  GetBucketAccelerateConfigurationOutput$,
  GetBucketAccelerateConfigurationRequest$,
  GetBucketAcl$,
  GetBucketAclCommand,
  GetBucketAclOutput$,
  GetBucketAclRequest$,
  GetBucketAnalyticsConfiguration$,
  GetBucketAnalyticsConfigurationCommand,
  GetBucketAnalyticsConfigurationOutput$,
  GetBucketAnalyticsConfigurationRequest$,
  GetBucketCors$,
  GetBucketCorsCommand,
  GetBucketCorsOutput$,
  GetBucketCorsRequest$,
  GetBucketEncryption$,
  GetBucketEncryptionCommand,
  GetBucketEncryptionOutput$,
  GetBucketEncryptionRequest$,
  GetBucketIntelligentTieringConfiguration$,
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketIntelligentTieringConfigurationOutput$,
  GetBucketIntelligentTieringConfigurationRequest$,
  GetBucketInventoryConfiguration$,
  GetBucketInventoryConfigurationCommand,
  GetBucketInventoryConfigurationOutput$,
  GetBucketInventoryConfigurationRequest$,
  GetBucketLifecycleConfiguration$,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLifecycleConfigurationOutput$,
  GetBucketLifecycleConfigurationRequest$,
  GetBucketLocation$,
  GetBucketLocationCommand,
  GetBucketLocationOutput$,
  GetBucketLocationRequest$,
  GetBucketLogging$,
  GetBucketLoggingCommand,
  GetBucketLoggingOutput$,
  GetBucketLoggingRequest$,
  GetBucketMetadataConfiguration$,
  GetBucketMetadataConfigurationCommand,
  GetBucketMetadataConfigurationOutput$,
  GetBucketMetadataConfigurationRequest$,
  GetBucketMetadataConfigurationResult$,
  GetBucketMetadataTableConfiguration$,
  GetBucketMetadataTableConfigurationCommand,
  GetBucketMetadataTableConfigurationOutput$,
  GetBucketMetadataTableConfigurationRequest$,
  GetBucketMetadataTableConfigurationResult$,
  GetBucketMetricsConfiguration$,
  GetBucketMetricsConfigurationCommand,
  GetBucketMetricsConfigurationOutput$,
  GetBucketMetricsConfigurationRequest$,
  GetBucketNotificationConfiguration$,
  GetBucketNotificationConfigurationCommand,
  GetBucketNotificationConfigurationRequest$,
  GetBucketOwnershipControls$,
  GetBucketOwnershipControlsCommand,
  GetBucketOwnershipControlsOutput$,
  GetBucketOwnershipControlsRequest$,
  GetBucketPolicy$,
  GetBucketPolicyCommand,
  GetBucketPolicyOutput$,
  GetBucketPolicyRequest$,
  GetBucketPolicyStatus$,
  GetBucketPolicyStatusCommand,
  GetBucketPolicyStatusOutput$,
  GetBucketPolicyStatusRequest$,
  GetBucketReplication$,
  GetBucketReplicationCommand,
  GetBucketReplicationOutput$,
  GetBucketReplicationRequest$,
  GetBucketRequestPayment$,
  GetBucketRequestPaymentCommand,
  GetBucketRequestPaymentOutput$,
  GetBucketRequestPaymentRequest$,
  GetBucketTagging$,
  GetBucketTaggingCommand,
  GetBucketTaggingOutput$,
  GetBucketTaggingRequest$,
  GetBucketVersioning$,
  GetBucketVersioningCommand,
  GetBucketVersioningOutput$,
  GetBucketVersioningRequest$,
  GetBucketWebsite$,
  GetBucketWebsiteCommand,
  GetBucketWebsiteOutput$,
  GetBucketWebsiteRequest$,
  GetObject$,
  GetObjectAcl$,
  GetObjectAclCommand,
  GetObjectAclOutput$,
  GetObjectAclRequest$,
  GetObjectAttributes$,
  GetObjectAttributesCommand,
  GetObjectAttributesOutput$,
  GetObjectAttributesParts$,
  GetObjectAttributesRequest$,
  GetObjectCommand,
  GetObjectLegalHold$,
  GetObjectLegalHoldCommand,
  GetObjectLegalHoldOutput$,
  GetObjectLegalHoldRequest$,
  GetObjectLockConfiguration$,
  GetObjectLockConfigurationCommand,
  GetObjectLockConfigurationOutput$,
  GetObjectLockConfigurationRequest$,
  GetObjectOutput$,
  GetObjectRequest$,
  GetObjectRetention$,
  GetObjectRetentionCommand,
  GetObjectRetentionOutput$,
  GetObjectRetentionRequest$,
  GetObjectTagging$,
  GetObjectTaggingCommand,
  GetObjectTaggingOutput$,
  GetObjectTaggingRequest$,
  GetObjectTorrent$,
  GetObjectTorrentCommand,
  GetObjectTorrentOutput$,
  GetObjectTorrentRequest$,
  GetPublicAccessBlock$,
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockOutput$,
  GetPublicAccessBlockRequest$,
  GlacierJobParameters$,
  Grant$,
  Grantee$,
  HeadBucket$,
  HeadBucketCommand,
  HeadBucketOutput$,
  HeadBucketRequest$,
  HeadObject$,
  HeadObjectCommand,
  HeadObjectOutput$,
  HeadObjectRequest$,
  IdempotencyParameterMismatch,
  IdempotencyParameterMismatch$,
  IndexDocument$,
  Initiator$,
  InputSerialization$,
  IntelligentTieringAccessTier,
  IntelligentTieringAndOperator$,
  IntelligentTieringConfiguration$,
  IntelligentTieringFilter$,
  IntelligentTieringStatus,
  InvalidObjectState,
  InvalidObjectState$,
  InvalidRequest,
  InvalidRequest$,
  InvalidWriteOffset,
  InvalidWriteOffset$,
  InventoryConfiguration$,
  InventoryConfigurationState,
  InventoryDestination$,
  InventoryEncryption$,
  InventoryFilter$,
  InventoryFormat,
  InventoryFrequency,
  InventoryIncludedObjectVersions,
  InventoryOptionalField,
  InventoryS3BucketDestination$,
  InventorySchedule$,
  InventoryTableConfiguration$,
  InventoryTableConfigurationResult$,
  InventoryTableConfigurationUpdates$,
  JournalTableConfiguration$,
  JournalTableConfigurationResult$,
  JournalTableConfigurationUpdates$,
  JSONInput$,
  JSONOutput$,
  JSONType,
  LambdaFunctionConfiguration$,
  LifecycleExpiration$,
  LifecycleRule$,
  LifecycleRuleAndOperator$,
  LifecycleRuleFilter$,
  ListBucketAnalyticsConfigurations$,
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketAnalyticsConfigurationsOutput$,
  ListBucketAnalyticsConfigurationsRequest$,
  ListBucketIntelligentTieringConfigurations$,
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsOutput$,
  ListBucketIntelligentTieringConfigurationsRequest$,
  ListBucketInventoryConfigurations$,
  ListBucketInventoryConfigurationsCommand,
  ListBucketInventoryConfigurationsOutput$,
  ListBucketInventoryConfigurationsRequest$,
  ListBucketMetricsConfigurations$,
  ListBucketMetricsConfigurationsCommand,
  ListBucketMetricsConfigurationsOutput$,
  ListBucketMetricsConfigurationsRequest$,
  ListBuckets$,
  ListBucketsCommand,
  ListBucketsOutput$,
  ListBucketsRequest$,
  ListDirectoryBuckets$,
  ListDirectoryBucketsCommand,
  ListDirectoryBucketsOutput$,
  ListDirectoryBucketsRequest$,
  ListMultipartUploads$,
  ListMultipartUploadsCommand,
  ListMultipartUploadsOutput$,
  ListMultipartUploadsRequest$,
  ListObjects$,
  ListObjectsCommand,
  ListObjectsOutput$,
  ListObjectsRequest$,
  ListObjectsV2$,
  ListObjectsV2Command,
  ListObjectsV2Output$,
  ListObjectsV2Request$,
  ListObjectVersions$,
  ListObjectVersionsCommand,
  ListObjectVersionsOutput$,
  ListObjectVersionsRequest$,
  ListParts$,
  ListPartsCommand,
  ListPartsOutput$,
  ListPartsRequest$,
  LocationInfo$,
  LocationType,
  LoggingEnabled$,
  MetadataConfiguration$,
  MetadataConfigurationResult$,
  MetadataDirective,
  MetadataEntry$,
  MetadataTableConfiguration$,
  MetadataTableConfigurationResult$,
  MetadataTableEncryptionConfiguration$,
  Metrics$,
  MetricsAndOperator$,
  MetricsConfiguration$,
  MetricsFilter$,
  MetricsStatus,
  MFADelete,
  MFADeleteStatus,
  MultipartUpload$,
  NoncurrentVersionExpiration$,
  NoncurrentVersionTransition$,
  NoSuchBucket,
  NoSuchBucket$,
  NoSuchKey,
  NoSuchKey$,
  NoSuchUpload,
  NoSuchUpload$,
  NotFound,
  NotFound$,
  NotificationConfiguration$,
  NotificationConfigurationFilter$,
  ObjectAlreadyInActiveTierError,
  ObjectAlreadyInActiveTierError$,
  ObjectAttributes,
  ObjectCannedACL,
  ObjectIdentifier$,
  ObjectLockConfiguration$,
  ObjectLockEnabled,
  ObjectLockLegalHold$,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention$,
  ObjectLockRetentionMode,
  ObjectLockRule$,
  ObjectNotInActiveTierError,
  ObjectNotInActiveTierError$,
  ObjectOwnership,
  ObjectPart$,
  ObjectStorageClass,
  ObjectVersion$,
  ObjectVersionStorageClass,
  OptionalObjectAttributes,
  OutputLocation$,
  OutputSerialization$,
  Owner$,
  OwnerOverride,
  OwnershipControls$,
  OwnershipControlsRule$,
  paginateListBuckets,
  paginateListDirectoryBuckets,
  paginateListObjectsV2,
  paginateListParts,
  ParquetInput$,
  Part$,
  PartitionDateSource,
  PartitionedPrefix$,
  Payer,
  Permission,
  PolicyStatus$,
  Progress$,
  ProgressEvent$,
  Protocol,
  PublicAccessBlockConfiguration$,
  PutBucketAbac$,
  PutBucketAbacCommand,
  PutBucketAbacRequest$,
  PutBucketAccelerateConfiguration$,
  PutBucketAccelerateConfigurationCommand,
  PutBucketAccelerateConfigurationRequest$,
  PutBucketAcl$,
  PutBucketAclCommand,
  PutBucketAclRequest$,
  PutBucketAnalyticsConfiguration$,
  PutBucketAnalyticsConfigurationCommand,
  PutBucketAnalyticsConfigurationRequest$,
  PutBucketCors$,
  PutBucketCorsCommand,
  PutBucketCorsRequest$,
  PutBucketEncryption$,
  PutBucketEncryptionCommand,
  PutBucketEncryptionRequest$,
  PutBucketIntelligentTieringConfiguration$,
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketIntelligentTieringConfigurationRequest$,
  PutBucketInventoryConfiguration$,
  PutBucketInventoryConfigurationCommand,
  PutBucketInventoryConfigurationRequest$,
  PutBucketLifecycleConfiguration$,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLifecycleConfigurationOutput$,
  PutBucketLifecycleConfigurationRequest$,
  PutBucketLogging$,
  PutBucketLoggingCommand,
  PutBucketLoggingRequest$,
  PutBucketMetricsConfiguration$,
  PutBucketMetricsConfigurationCommand,
  PutBucketMetricsConfigurationRequest$,
  PutBucketNotificationConfiguration$,
  PutBucketNotificationConfigurationCommand,
  PutBucketNotificationConfigurationRequest$,
  PutBucketOwnershipControls$,
  PutBucketOwnershipControlsCommand,
  PutBucketOwnershipControlsRequest$,
  PutBucketPolicy$,
  PutBucketPolicyCommand,
  PutBucketPolicyRequest$,
  PutBucketReplication$,
  PutBucketReplicationCommand,
  PutBucketReplicationRequest$,
  PutBucketRequestPayment$,
  PutBucketRequestPaymentCommand,
  PutBucketRequestPaymentRequest$,
  PutBucketTagging$,
  PutBucketTaggingCommand,
  PutBucketTaggingRequest$,
  PutBucketVersioning$,
  PutBucketVersioningCommand,
  PutBucketVersioningRequest$,
  PutBucketWebsite$,
  PutBucketWebsiteCommand,
  PutBucketWebsiteRequest$,
  PutObject$,
  PutObjectAcl$,
  PutObjectAclCommand,
  PutObjectAclOutput$,
  PutObjectAclRequest$,
  PutObjectCommand,
  PutObjectLegalHold$,
  PutObjectLegalHoldCommand,
  PutObjectLegalHoldOutput$,
  PutObjectLegalHoldRequest$,
  PutObjectLockConfiguration$,
  PutObjectLockConfigurationCommand,
  PutObjectLockConfigurationOutput$,
  PutObjectLockConfigurationRequest$,
  PutObjectOutput$,
  PutObjectRequest$,
  PutObjectRetention$,
  PutObjectRetentionCommand,
  PutObjectRetentionOutput$,
  PutObjectRetentionRequest$,
  PutObjectTagging$,
  PutObjectTaggingCommand,
  PutObjectTaggingOutput$,
  PutObjectTaggingRequest$,
  PutPublicAccessBlock$,
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockRequest$,
  QueueConfiguration$,
  QuoteFields,
  RecordExpiration$,
  RecordsEvent$,
  Redirect$,
  RedirectAllRequestsTo$,
  RenameObject$,
  RenameObjectCommand,
  RenameObjectOutput$,
  RenameObjectRequest$,
  ReplicaModifications$,
  ReplicaModificationsStatus,
  ReplicationConfiguration$,
  ReplicationRule$,
  ReplicationRuleAndOperator$,
  ReplicationRuleFilter$,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationTime$,
  ReplicationTimeStatus,
  ReplicationTimeValue$,
  RequestCharged,
  RequestPayer,
  RequestPaymentConfiguration$,
  RequestProgress$,
  RestoreObject$,
  RestoreObjectCommand,
  RestoreObjectOutput$,
  RestoreObjectRequest$,
  RestoreRequest$,
  RestoreRequestType,
  RestoreStatus$,
  RoutingRule$,
  S3,
  S3Client,
  S3KeyFilter$,
  S3Location$,
  S3ServiceException,
  S3TablesBucketType,
  S3TablesDestination$,
  S3TablesDestinationResult$,
  ScanRange$,
  SelectObjectContent$,
  SelectObjectContentCommand,
  SelectObjectContentEventStream$,
  SelectObjectContentOutput$,
  SelectObjectContentRequest$,
  SelectParameters$,
  ServerSideEncryption,
  ServerSideEncryptionByDefault$,
  ServerSideEncryptionConfiguration$,
  ServerSideEncryptionRule$,
  SessionCredentials$,
  SessionMode,
  SimplePrefix$,
  SourceSelectionCriteria$,
  SSEKMS$,
  SseKmsEncryptedObjects$,
  SseKmsEncryptedObjectsStatus,
  SSES3$,
  Stats$,
  StatsEvent$,
  StorageClass,
  StorageClassAnalysis$,
  StorageClassAnalysisDataExport$,
  StorageClassAnalysisSchemaVersion,
  TableSseAlgorithm,
  Tag$,
  Tagging$,
  TaggingDirective,
  TargetGrant$,
  TargetObjectKeyFormat$,
  Tier,
  Tiering$,
  TooManyParts,
  TooManyParts$,
  TopicConfiguration$,
  Transition$,
  TransitionDefaultMinimumObjectSize,
  TransitionStorageClass,
  Type,
  UpdateBucketMetadataInventoryTableConfiguration$,
  UpdateBucketMetadataInventoryTableConfigurationCommand,
  UpdateBucketMetadataInventoryTableConfigurationRequest$,
  UpdateBucketMetadataJournalTableConfiguration$,
  UpdateBucketMetadataJournalTableConfigurationCommand,
  UpdateBucketMetadataJournalTableConfigurationRequest$,
  UploadPart$,
  UploadPartCommand,
  UploadPartCopy$,
  UploadPartCopyCommand,
  UploadPartCopyOutput$,
  UploadPartCopyRequest$,
  UploadPartOutput$,
  UploadPartRequest$,
  VersioningConfiguration$,
  waitForBucketExists,
  waitForBucketNotExists,
  waitForObjectExists,
  waitForObjectNotExists,
  waitUntilBucketExists,
  waitUntilBucketNotExists,
  waitUntilObjectExists,
  waitUntilObjectNotExists,
  WebsiteConfiguration$,
  WriteGetObjectResponse$,
  WriteGetObjectResponseCommand,
  WriteGetObjectResponseRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3Client === "function");
assert(typeof S3 === "function");
// commands
assert(typeof AbortMultipartUploadCommand === "function");
assert(typeof AbortMultipartUpload$ === "object");
assert(typeof CompleteMultipartUploadCommand === "function");
assert(typeof CompleteMultipartUpload$ === "object");
assert(typeof CopyObjectCommand === "function");
assert(typeof CopyObject$ === "object");
assert(typeof CreateBucketCommand === "function");
assert(typeof CreateBucket$ === "object");
assert(typeof CreateBucketMetadataConfigurationCommand === "function");
assert(typeof CreateBucketMetadataConfiguration$ === "object");
assert(typeof CreateBucketMetadataTableConfigurationCommand === "function");
assert(typeof CreateBucketMetadataTableConfiguration$ === "object");
assert(typeof CreateMultipartUploadCommand === "function");
assert(typeof CreateMultipartUpload$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof DeleteBucketCommand === "function");
assert(typeof DeleteBucket$ === "object");
assert(typeof DeleteBucketAnalyticsConfigurationCommand === "function");
assert(typeof DeleteBucketAnalyticsConfiguration$ === "object");
assert(typeof DeleteBucketCorsCommand === "function");
assert(typeof DeleteBucketCors$ === "object");
assert(typeof DeleteBucketEncryptionCommand === "function");
assert(typeof DeleteBucketEncryption$ === "object");
assert(typeof DeleteBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof DeleteBucketIntelligentTieringConfiguration$ === "object");
assert(typeof DeleteBucketInventoryConfigurationCommand === "function");
assert(typeof DeleteBucketInventoryConfiguration$ === "object");
assert(typeof DeleteBucketLifecycleCommand === "function");
assert(typeof DeleteBucketLifecycle$ === "object");
assert(typeof DeleteBucketMetadataConfigurationCommand === "function");
assert(typeof DeleteBucketMetadataConfiguration$ === "object");
assert(typeof DeleteBucketMetadataTableConfigurationCommand === "function");
assert(typeof DeleteBucketMetadataTableConfiguration$ === "object");
assert(typeof DeleteBucketMetricsConfigurationCommand === "function");
assert(typeof DeleteBucketMetricsConfiguration$ === "object");
assert(typeof DeleteBucketOwnershipControlsCommand === "function");
assert(typeof DeleteBucketOwnershipControls$ === "object");
assert(typeof DeleteBucketPolicyCommand === "function");
assert(typeof DeleteBucketPolicy$ === "object");
assert(typeof DeleteBucketReplicationCommand === "function");
assert(typeof DeleteBucketReplication$ === "object");
assert(typeof DeleteBucketTaggingCommand === "function");
assert(typeof DeleteBucketTagging$ === "object");
assert(typeof DeleteBucketWebsiteCommand === "function");
assert(typeof DeleteBucketWebsite$ === "object");
assert(typeof DeleteObjectCommand === "function");
assert(typeof DeleteObject$ === "object");
assert(typeof DeleteObjectsCommand === "function");
assert(typeof DeleteObjects$ === "object");
assert(typeof DeleteObjectTaggingCommand === "function");
assert(typeof DeleteObjectTagging$ === "object");
assert(typeof DeletePublicAccessBlockCommand === "function");
assert(typeof DeletePublicAccessBlock$ === "object");
assert(typeof GetBucketAbacCommand === "function");
assert(typeof GetBucketAbac$ === "object");
assert(typeof GetBucketAccelerateConfigurationCommand === "function");
assert(typeof GetBucketAccelerateConfiguration$ === "object");
assert(typeof GetBucketAclCommand === "function");
assert(typeof GetBucketAcl$ === "object");
assert(typeof GetBucketAnalyticsConfigurationCommand === "function");
assert(typeof GetBucketAnalyticsConfiguration$ === "object");
assert(typeof GetBucketCorsCommand === "function");
assert(typeof GetBucketCors$ === "object");
assert(typeof GetBucketEncryptionCommand === "function");
assert(typeof GetBucketEncryption$ === "object");
assert(typeof GetBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof GetBucketIntelligentTieringConfiguration$ === "object");
assert(typeof GetBucketInventoryConfigurationCommand === "function");
assert(typeof GetBucketInventoryConfiguration$ === "object");
assert(typeof GetBucketLifecycleConfigurationCommand === "function");
assert(typeof GetBucketLifecycleConfiguration$ === "object");
assert(typeof GetBucketLocationCommand === "function");
assert(typeof GetBucketLocation$ === "object");
assert(typeof GetBucketLoggingCommand === "function");
assert(typeof GetBucketLogging$ === "object");
assert(typeof GetBucketMetadataConfigurationCommand === "function");
assert(typeof GetBucketMetadataConfiguration$ === "object");
assert(typeof GetBucketMetadataTableConfigurationCommand === "function");
assert(typeof GetBucketMetadataTableConfiguration$ === "object");
assert(typeof GetBucketMetricsConfigurationCommand === "function");
assert(typeof GetBucketMetricsConfiguration$ === "object");
assert(typeof GetBucketNotificationConfigurationCommand === "function");
assert(typeof GetBucketNotificationConfiguration$ === "object");
assert(typeof GetBucketOwnershipControlsCommand === "function");
assert(typeof GetBucketOwnershipControls$ === "object");
assert(typeof GetBucketPolicyCommand === "function");
assert(typeof GetBucketPolicy$ === "object");
assert(typeof GetBucketPolicyStatusCommand === "function");
assert(typeof GetBucketPolicyStatus$ === "object");
assert(typeof GetBucketReplicationCommand === "function");
assert(typeof GetBucketReplication$ === "object");
assert(typeof GetBucketRequestPaymentCommand === "function");
assert(typeof GetBucketRequestPayment$ === "object");
assert(typeof GetBucketTaggingCommand === "function");
assert(typeof GetBucketTagging$ === "object");
assert(typeof GetBucketVersioningCommand === "function");
assert(typeof GetBucketVersioning$ === "object");
assert(typeof GetBucketWebsiteCommand === "function");
assert(typeof GetBucketWebsite$ === "object");
assert(typeof GetObjectCommand === "function");
assert(typeof GetObject$ === "object");
assert(typeof GetObjectAclCommand === "function");
assert(typeof GetObjectAcl$ === "object");
assert(typeof GetObjectAttributesCommand === "function");
assert(typeof GetObjectAttributes$ === "object");
assert(typeof GetObjectLegalHoldCommand === "function");
assert(typeof GetObjectLegalHold$ === "object");
assert(typeof GetObjectLockConfigurationCommand === "function");
assert(typeof GetObjectLockConfiguration$ === "object");
assert(typeof GetObjectRetentionCommand === "function");
assert(typeof GetObjectRetention$ === "object");
assert(typeof GetObjectTaggingCommand === "function");
assert(typeof GetObjectTagging$ === "object");
assert(typeof GetObjectTorrentCommand === "function");
assert(typeof GetObjectTorrent$ === "object");
assert(typeof GetPublicAccessBlockCommand === "function");
assert(typeof GetPublicAccessBlock$ === "object");
assert(typeof HeadBucketCommand === "function");
assert(typeof HeadBucket$ === "object");
assert(typeof HeadObjectCommand === "function");
assert(typeof HeadObject$ === "object");
assert(typeof ListBucketAnalyticsConfigurationsCommand === "function");
assert(typeof ListBucketAnalyticsConfigurations$ === "object");
assert(typeof ListBucketIntelligentTieringConfigurationsCommand === "function");
assert(typeof ListBucketIntelligentTieringConfigurations$ === "object");
assert(typeof ListBucketInventoryConfigurationsCommand === "function");
assert(typeof ListBucketInventoryConfigurations$ === "object");
assert(typeof ListBucketMetricsConfigurationsCommand === "function");
assert(typeof ListBucketMetricsConfigurations$ === "object");
assert(typeof ListBucketsCommand === "function");
assert(typeof ListBuckets$ === "object");
assert(typeof ListDirectoryBucketsCommand === "function");
assert(typeof ListDirectoryBuckets$ === "object");
assert(typeof ListMultipartUploadsCommand === "function");
assert(typeof ListMultipartUploads$ === "object");
assert(typeof ListObjectsCommand === "function");
assert(typeof ListObjects$ === "object");
assert(typeof ListObjectsV2Command === "function");
assert(typeof ListObjectsV2$ === "object");
assert(typeof ListObjectVersionsCommand === "function");
assert(typeof ListObjectVersions$ === "object");
assert(typeof ListPartsCommand === "function");
assert(typeof ListParts$ === "object");
assert(typeof PutBucketAbacCommand === "function");
assert(typeof PutBucketAbac$ === "object");
assert(typeof PutBucketAccelerateConfigurationCommand === "function");
assert(typeof PutBucketAccelerateConfiguration$ === "object");
assert(typeof PutBucketAclCommand === "function");
assert(typeof PutBucketAcl$ === "object");
assert(typeof PutBucketAnalyticsConfigurationCommand === "function");
assert(typeof PutBucketAnalyticsConfiguration$ === "object");
assert(typeof PutBucketCorsCommand === "function");
assert(typeof PutBucketCors$ === "object");
assert(typeof PutBucketEncryptionCommand === "function");
assert(typeof PutBucketEncryption$ === "object");
assert(typeof PutBucketIntelligentTieringConfigurationCommand === "function");
assert(typeof PutBucketIntelligentTieringConfiguration$ === "object");
assert(typeof PutBucketInventoryConfigurationCommand === "function");
assert(typeof PutBucketInventoryConfiguration$ === "object");
assert(typeof PutBucketLifecycleConfigurationCommand === "function");
assert(typeof PutBucketLifecycleConfiguration$ === "object");
assert(typeof PutBucketLoggingCommand === "function");
assert(typeof PutBucketLogging$ === "object");
assert(typeof PutBucketMetricsConfigurationCommand === "function");
assert(typeof PutBucketMetricsConfiguration$ === "object");
assert(typeof PutBucketNotificationConfigurationCommand === "function");
assert(typeof PutBucketNotificationConfiguration$ === "object");
assert(typeof PutBucketOwnershipControlsCommand === "function");
assert(typeof PutBucketOwnershipControls$ === "object");
assert(typeof PutBucketPolicyCommand === "function");
assert(typeof PutBucketPolicy$ === "object");
assert(typeof PutBucketReplicationCommand === "function");
assert(typeof PutBucketReplication$ === "object");
assert(typeof PutBucketRequestPaymentCommand === "function");
assert(typeof PutBucketRequestPayment$ === "object");
assert(typeof PutBucketTaggingCommand === "function");
assert(typeof PutBucketTagging$ === "object");
assert(typeof PutBucketVersioningCommand === "function");
assert(typeof PutBucketVersioning$ === "object");
assert(typeof PutBucketWebsiteCommand === "function");
assert(typeof PutBucketWebsite$ === "object");
assert(typeof PutObjectCommand === "function");
assert(typeof PutObject$ === "object");
assert(typeof PutObjectAclCommand === "function");
assert(typeof PutObjectAcl$ === "object");
assert(typeof PutObjectLegalHoldCommand === "function");
assert(typeof PutObjectLegalHold$ === "object");
assert(typeof PutObjectLockConfigurationCommand === "function");
assert(typeof PutObjectLockConfiguration$ === "object");
assert(typeof PutObjectRetentionCommand === "function");
assert(typeof PutObjectRetention$ === "object");
assert(typeof PutObjectTaggingCommand === "function");
assert(typeof PutObjectTagging$ === "object");
assert(typeof PutPublicAccessBlockCommand === "function");
assert(typeof PutPublicAccessBlock$ === "object");
assert(typeof RenameObjectCommand === "function");
assert(typeof RenameObject$ === "object");
assert(typeof RestoreObjectCommand === "function");
assert(typeof RestoreObject$ === "object");
assert(typeof SelectObjectContentCommand === "function");
assert(typeof SelectObjectContent$ === "object");
assert(typeof UpdateBucketMetadataInventoryTableConfigurationCommand === "function");
assert(typeof UpdateBucketMetadataInventoryTableConfiguration$ === "object");
assert(typeof UpdateBucketMetadataJournalTableConfigurationCommand === "function");
assert(typeof UpdateBucketMetadataJournalTableConfiguration$ === "object");
assert(typeof UploadPartCommand === "function");
assert(typeof UploadPart$ === "object");
assert(typeof UploadPartCopyCommand === "function");
assert(typeof UploadPartCopy$ === "object");
assert(typeof WriteGetObjectResponseCommand === "function");
assert(typeof WriteGetObjectResponse$ === "object");
// structural schemas
assert(typeof AbacStatus$ === "object");
assert(typeof AbortIncompleteMultipartUpload$ === "object");
assert(typeof AbortMultipartUploadOutput$ === "object");
assert(typeof AbortMultipartUploadRequest$ === "object");
assert(typeof AccelerateConfiguration$ === "object");
assert(typeof AccessControlPolicy$ === "object");
assert(typeof AccessControlTranslation$ === "object");
assert(typeof AnalyticsAndOperator$ === "object");
assert(typeof AnalyticsConfiguration$ === "object");
assert(typeof AnalyticsExportDestination$ === "object");
assert(typeof AnalyticsFilter$ === "object");
assert(typeof AnalyticsS3BucketDestination$ === "object");
assert(typeof BlockedEncryptionTypes$ === "object");
assert(typeof Bucket$ === "object");
assert(typeof BucketInfo$ === "object");
assert(typeof BucketLifecycleConfiguration$ === "object");
assert(typeof BucketLoggingStatus$ === "object");
assert(typeof Checksum$ === "object");
assert(typeof CommonPrefix$ === "object");
assert(typeof CompletedMultipartUpload$ === "object");
assert(typeof CompletedPart$ === "object");
assert(typeof CompleteMultipartUploadOutput$ === "object");
assert(typeof CompleteMultipartUploadRequest$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ContinuationEvent$ === "object");
assert(typeof CopyObjectOutput$ === "object");
assert(typeof CopyObjectRequest$ === "object");
assert(typeof CopyObjectResult$ === "object");
assert(typeof CopyPartResult$ === "object");
assert(typeof CORSConfiguration$ === "object");
assert(typeof CORSRule$ === "object");
assert(typeof CreateBucketConfiguration$ === "object");
assert(typeof CreateBucketMetadataConfigurationRequest$ === "object");
assert(typeof CreateBucketMetadataTableConfigurationRequest$ === "object");
assert(typeof CreateBucketOutput$ === "object");
assert(typeof CreateBucketRequest$ === "object");
assert(typeof CreateMultipartUploadOutput$ === "object");
assert(typeof CreateMultipartUploadRequest$ === "object");
assert(typeof CreateSessionOutput$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CSVInput$ === "object");
assert(typeof CSVOutput$ === "object");
assert(typeof DefaultRetention$ === "object");
assert(typeof Delete$ === "object");
assert(typeof DeleteBucketAnalyticsConfigurationRequest$ === "object");
assert(typeof DeleteBucketCorsRequest$ === "object");
assert(typeof DeleteBucketEncryptionRequest$ === "object");
assert(typeof DeleteBucketIntelligentTieringConfigurationRequest$ === "object");
assert(typeof DeleteBucketInventoryConfigurationRequest$ === "object");
assert(typeof DeleteBucketLifecycleRequest$ === "object");
assert(typeof DeleteBucketMetadataConfigurationRequest$ === "object");
assert(typeof DeleteBucketMetadataTableConfigurationRequest$ === "object");
assert(typeof DeleteBucketMetricsConfigurationRequest$ === "object");
assert(typeof DeleteBucketOwnershipControlsRequest$ === "object");
assert(typeof DeleteBucketPolicyRequest$ === "object");
assert(typeof DeleteBucketReplicationRequest$ === "object");
assert(typeof DeleteBucketRequest$ === "object");
assert(typeof DeleteBucketTaggingRequest$ === "object");
assert(typeof DeleteBucketWebsiteRequest$ === "object");
assert(typeof DeletedObject$ === "object");
assert(typeof DeleteMarkerEntry$ === "object");
assert(typeof DeleteMarkerReplication$ === "object");
assert(typeof DeleteObjectOutput$ === "object");
assert(typeof DeleteObjectRequest$ === "object");
assert(typeof DeleteObjectsOutput$ === "object");
assert(typeof DeleteObjectsRequest$ === "object");
assert(typeof DeleteObjectTaggingOutput$ === "object");
assert(typeof DeleteObjectTaggingRequest$ === "object");
assert(typeof DeletePublicAccessBlockRequest$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DestinationResult$ === "object");
assert(typeof Encryption$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EndEvent$ === "object");
assert(typeof _Error$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ErrorDocument$ === "object");
assert(typeof EventBridgeConfiguration$ === "object");
assert(typeof ExistingObjectReplication$ === "object");
assert(typeof FilterRule$ === "object");
assert(typeof GetBucketAbacOutput$ === "object");
assert(typeof GetBucketAbacRequest$ === "object");
assert(typeof GetBucketAccelerateConfigurationOutput$ === "object");
assert(typeof GetBucketAccelerateConfigurationRequest$ === "object");
assert(typeof GetBucketAclOutput$ === "object");
assert(typeof GetBucketAclRequest$ === "object");
assert(typeof GetBucketAnalyticsConfigurationOutput$ === "object");
assert(typeof GetBucketAnalyticsConfigurationRequest$ === "object");
assert(typeof GetBucketCorsOutput$ === "object");
assert(typeof GetBucketCorsRequest$ === "object");
assert(typeof GetBucketEncryptionOutput$ === "object");
assert(typeof GetBucketEncryptionRequest$ === "object");
assert(typeof GetBucketIntelligentTieringConfigurationOutput$ === "object");
assert(typeof GetBucketIntelligentTieringConfigurationRequest$ === "object");
assert(typeof GetBucketInventoryConfigurationOutput$ === "object");
assert(typeof GetBucketInventoryConfigurationRequest$ === "object");
assert(typeof GetBucketLifecycleConfigurationOutput$ === "object");
assert(typeof GetBucketLifecycleConfigurationRequest$ === "object");
assert(typeof GetBucketLocationOutput$ === "object");
assert(typeof GetBucketLocationRequest$ === "object");
assert(typeof GetBucketLoggingOutput$ === "object");
assert(typeof GetBucketLoggingRequest$ === "object");
assert(typeof GetBucketMetadataConfigurationOutput$ === "object");
assert(typeof GetBucketMetadataConfigurationRequest$ === "object");
assert(typeof GetBucketMetadataConfigurationResult$ === "object");
assert(typeof GetBucketMetadataTableConfigurationOutput$ === "object");
assert(typeof GetBucketMetadataTableConfigurationRequest$ === "object");
assert(typeof GetBucketMetadataTableConfigurationResult$ === "object");
assert(typeof GetBucketMetricsConfigurationOutput$ === "object");
assert(typeof GetBucketMetricsConfigurationRequest$ === "object");
assert(typeof GetBucketNotificationConfigurationRequest$ === "object");
assert(typeof GetBucketOwnershipControlsOutput$ === "object");
assert(typeof GetBucketOwnershipControlsRequest$ === "object");
assert(typeof GetBucketPolicyOutput$ === "object");
assert(typeof GetBucketPolicyRequest$ === "object");
assert(typeof GetBucketPolicyStatusOutput$ === "object");
assert(typeof GetBucketPolicyStatusRequest$ === "object");
assert(typeof GetBucketReplicationOutput$ === "object");
assert(typeof GetBucketReplicationRequest$ === "object");
assert(typeof GetBucketRequestPaymentOutput$ === "object");
assert(typeof GetBucketRequestPaymentRequest$ === "object");
assert(typeof GetBucketTaggingOutput$ === "object");
assert(typeof GetBucketTaggingRequest$ === "object");
assert(typeof GetBucketVersioningOutput$ === "object");
assert(typeof GetBucketVersioningRequest$ === "object");
assert(typeof GetBucketWebsiteOutput$ === "object");
assert(typeof GetBucketWebsiteRequest$ === "object");
assert(typeof GetObjectAclOutput$ === "object");
assert(typeof GetObjectAclRequest$ === "object");
assert(typeof GetObjectAttributesOutput$ === "object");
assert(typeof GetObjectAttributesParts$ === "object");
assert(typeof GetObjectAttributesRequest$ === "object");
assert(typeof GetObjectLegalHoldOutput$ === "object");
assert(typeof GetObjectLegalHoldRequest$ === "object");
assert(typeof GetObjectLockConfigurationOutput$ === "object");
assert(typeof GetObjectLockConfigurationRequest$ === "object");
assert(typeof GetObjectOutput$ === "object");
assert(typeof GetObjectRequest$ === "object");
assert(typeof GetObjectRetentionOutput$ === "object");
assert(typeof GetObjectRetentionRequest$ === "object");
assert(typeof GetObjectTaggingOutput$ === "object");
assert(typeof GetObjectTaggingRequest$ === "object");
assert(typeof GetObjectTorrentOutput$ === "object");
assert(typeof GetObjectTorrentRequest$ === "object");
assert(typeof GetPublicAccessBlockOutput$ === "object");
assert(typeof GetPublicAccessBlockRequest$ === "object");
assert(typeof GlacierJobParameters$ === "object");
assert(typeof Grant$ === "object");
assert(typeof Grantee$ === "object");
assert(typeof HeadBucketOutput$ === "object");
assert(typeof HeadBucketRequest$ === "object");
assert(typeof HeadObjectOutput$ === "object");
assert(typeof HeadObjectRequest$ === "object");
assert(typeof IndexDocument$ === "object");
assert(typeof Initiator$ === "object");
assert(typeof InputSerialization$ === "object");
assert(typeof IntelligentTieringAndOperator$ === "object");
assert(typeof IntelligentTieringConfiguration$ === "object");
assert(typeof IntelligentTieringFilter$ === "object");
assert(typeof InventoryConfiguration$ === "object");
assert(typeof InventoryDestination$ === "object");
assert(typeof InventoryEncryption$ === "object");
assert(typeof InventoryFilter$ === "object");
assert(typeof InventoryS3BucketDestination$ === "object");
assert(typeof InventorySchedule$ === "object");
assert(typeof InventoryTableConfiguration$ === "object");
assert(typeof InventoryTableConfigurationResult$ === "object");
assert(typeof InventoryTableConfigurationUpdates$ === "object");
assert(typeof JournalTableConfiguration$ === "object");
assert(typeof JournalTableConfigurationResult$ === "object");
assert(typeof JournalTableConfigurationUpdates$ === "object");
assert(typeof JSONInput$ === "object");
assert(typeof JSONOutput$ === "object");
assert(typeof LambdaFunctionConfiguration$ === "object");
assert(typeof LifecycleExpiration$ === "object");
assert(typeof LifecycleRule$ === "object");
assert(typeof LifecycleRuleAndOperator$ === "object");
assert(typeof LifecycleRuleFilter$ === "object");
assert(typeof ListBucketAnalyticsConfigurationsOutput$ === "object");
assert(typeof ListBucketAnalyticsConfigurationsRequest$ === "object");
assert(typeof ListBucketIntelligentTieringConfigurationsOutput$ === "object");
assert(typeof ListBucketIntelligentTieringConfigurationsRequest$ === "object");
assert(typeof ListBucketInventoryConfigurationsOutput$ === "object");
assert(typeof ListBucketInventoryConfigurationsRequest$ === "object");
assert(typeof ListBucketMetricsConfigurationsOutput$ === "object");
assert(typeof ListBucketMetricsConfigurationsRequest$ === "object");
assert(typeof ListBucketsOutput$ === "object");
assert(typeof ListBucketsRequest$ === "object");
assert(typeof ListDirectoryBucketsOutput$ === "object");
assert(typeof ListDirectoryBucketsRequest$ === "object");
assert(typeof ListMultipartUploadsOutput$ === "object");
assert(typeof ListMultipartUploadsRequest$ === "object");
assert(typeof ListObjectsOutput$ === "object");
assert(typeof ListObjectsRequest$ === "object");
assert(typeof ListObjectsV2Output$ === "object");
assert(typeof ListObjectsV2Request$ === "object");
assert(typeof ListObjectVersionsOutput$ === "object");
assert(typeof ListObjectVersionsRequest$ === "object");
assert(typeof ListPartsOutput$ === "object");
assert(typeof ListPartsRequest$ === "object");
assert(typeof LocationInfo$ === "object");
assert(typeof LoggingEnabled$ === "object");
assert(typeof MetadataConfiguration$ === "object");
assert(typeof MetadataConfigurationResult$ === "object");
assert(typeof MetadataEntry$ === "object");
assert(typeof MetadataTableConfiguration$ === "object");
assert(typeof MetadataTableConfigurationResult$ === "object");
assert(typeof MetadataTableEncryptionConfiguration$ === "object");
assert(typeof Metrics$ === "object");
assert(typeof MetricsAndOperator$ === "object");
assert(typeof MetricsConfiguration$ === "object");
assert(typeof MetricsFilter$ === "object");
assert(typeof MultipartUpload$ === "object");
assert(typeof NoncurrentVersionExpiration$ === "object");
assert(typeof NoncurrentVersionTransition$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof NotificationConfigurationFilter$ === "object");
assert(typeof _Object$ === "object");
assert(typeof ObjectIdentifier$ === "object");
assert(typeof ObjectLockConfiguration$ === "object");
assert(typeof ObjectLockLegalHold$ === "object");
assert(typeof ObjectLockRetention$ === "object");
assert(typeof ObjectLockRule$ === "object");
assert(typeof ObjectPart$ === "object");
assert(typeof ObjectVersion$ === "object");
assert(typeof OutputLocation$ === "object");
assert(typeof OutputSerialization$ === "object");
assert(typeof Owner$ === "object");
assert(typeof OwnershipControls$ === "object");
assert(typeof OwnershipControlsRule$ === "object");
assert(typeof ParquetInput$ === "object");
assert(typeof Part$ === "object");
assert(typeof PartitionedPrefix$ === "object");
assert(typeof PolicyStatus$ === "object");
assert(typeof Progress$ === "object");
assert(typeof ProgressEvent$ === "object");
assert(typeof PublicAccessBlockConfiguration$ === "object");
assert(typeof PutBucketAbacRequest$ === "object");
assert(typeof PutBucketAccelerateConfigurationRequest$ === "object");
assert(typeof PutBucketAclRequest$ === "object");
assert(typeof PutBucketAnalyticsConfigurationRequest$ === "object");
assert(typeof PutBucketCorsRequest$ === "object");
assert(typeof PutBucketEncryptionRequest$ === "object");
assert(typeof PutBucketIntelligentTieringConfigurationRequest$ === "object");
assert(typeof PutBucketInventoryConfigurationRequest$ === "object");
assert(typeof PutBucketLifecycleConfigurationOutput$ === "object");
assert(typeof PutBucketLifecycleConfigurationRequest$ === "object");
assert(typeof PutBucketLoggingRequest$ === "object");
assert(typeof PutBucketMetricsConfigurationRequest$ === "object");
assert(typeof PutBucketNotificationConfigurationRequest$ === "object");
assert(typeof PutBucketOwnershipControlsRequest$ === "object");
assert(typeof PutBucketPolicyRequest$ === "object");
assert(typeof PutBucketReplicationRequest$ === "object");
assert(typeof PutBucketRequestPaymentRequest$ === "object");
assert(typeof PutBucketTaggingRequest$ === "object");
assert(typeof PutBucketVersioningRequest$ === "object");
assert(typeof PutBucketWebsiteRequest$ === "object");
assert(typeof PutObjectAclOutput$ === "object");
assert(typeof PutObjectAclRequest$ === "object");
assert(typeof PutObjectLegalHoldOutput$ === "object");
assert(typeof PutObjectLegalHoldRequest$ === "object");
assert(typeof PutObjectLockConfigurationOutput$ === "object");
assert(typeof PutObjectLockConfigurationRequest$ === "object");
assert(typeof PutObjectOutput$ === "object");
assert(typeof PutObjectRequest$ === "object");
assert(typeof PutObjectRetentionOutput$ === "object");
assert(typeof PutObjectRetentionRequest$ === "object");
assert(typeof PutObjectTaggingOutput$ === "object");
assert(typeof PutObjectTaggingRequest$ === "object");
assert(typeof PutPublicAccessBlockRequest$ === "object");
assert(typeof QueueConfiguration$ === "object");
assert(typeof RecordExpiration$ === "object");
assert(typeof RecordsEvent$ === "object");
assert(typeof Redirect$ === "object");
assert(typeof RedirectAllRequestsTo$ === "object");
assert(typeof RenameObjectOutput$ === "object");
assert(typeof RenameObjectRequest$ === "object");
assert(typeof ReplicaModifications$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationRule$ === "object");
assert(typeof ReplicationRuleAndOperator$ === "object");
assert(typeof ReplicationRuleFilter$ === "object");
assert(typeof ReplicationTime$ === "object");
assert(typeof ReplicationTimeValue$ === "object");
assert(typeof RequestPaymentConfiguration$ === "object");
assert(typeof RequestProgress$ === "object");
assert(typeof RestoreObjectOutput$ === "object");
assert(typeof RestoreObjectRequest$ === "object");
assert(typeof RestoreRequest$ === "object");
assert(typeof RestoreStatus$ === "object");
assert(typeof RoutingRule$ === "object");
assert(typeof S3KeyFilter$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3TablesDestination$ === "object");
assert(typeof S3TablesDestinationResult$ === "object");
assert(typeof ScanRange$ === "object");
assert(typeof SelectObjectContentEventStream$ === "object");
assert(typeof SelectObjectContentOutput$ === "object");
assert(typeof SelectObjectContentRequest$ === "object");
assert(typeof SelectParameters$ === "object");
assert(typeof ServerSideEncryptionByDefault$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof ServerSideEncryptionRule$ === "object");
assert(typeof SessionCredentials$ === "object");
assert(typeof SimplePrefix$ === "object");
assert(typeof SourceSelectionCriteria$ === "object");
assert(typeof SSEKMS$ === "object");
assert(typeof SseKmsEncryptedObjects$ === "object");
assert(typeof SSES3$ === "object");
assert(typeof Stats$ === "object");
assert(typeof StatsEvent$ === "object");
assert(typeof StorageClassAnalysis$ === "object");
assert(typeof StorageClassAnalysisDataExport$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Tagging$ === "object");
assert(typeof TargetGrant$ === "object");
assert(typeof TargetObjectKeyFormat$ === "object");
assert(typeof Tiering$ === "object");
assert(typeof TopicConfiguration$ === "object");
assert(typeof Transition$ === "object");
assert(typeof UpdateBucketMetadataInventoryTableConfigurationRequest$ === "object");
assert(typeof UpdateBucketMetadataJournalTableConfigurationRequest$ === "object");
assert(typeof UploadPartCopyOutput$ === "object");
assert(typeof UploadPartCopyRequest$ === "object");
assert(typeof UploadPartOutput$ === "object");
assert(typeof UploadPartRequest$ === "object");
assert(typeof VersioningConfiguration$ === "object");
assert(typeof WebsiteConfiguration$ === "object");
assert(typeof WriteGetObjectResponseRequest$ === "object");
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
assert(typeof BucketAlreadyExists$ === "object");
assert(BucketAlreadyOwnedByYou.prototype instanceof S3ServiceException);
assert(typeof BucketAlreadyOwnedByYou$ === "object");
assert(EncryptionTypeMismatch.prototype instanceof S3ServiceException);
assert(typeof EncryptionTypeMismatch$ === "object");
assert(IdempotencyParameterMismatch.prototype instanceof S3ServiceException);
assert(typeof IdempotencyParameterMismatch$ === "object");
assert(InvalidObjectState.prototype instanceof S3ServiceException);
assert(typeof InvalidObjectState$ === "object");
assert(InvalidRequest.prototype instanceof S3ServiceException);
assert(typeof InvalidRequest$ === "object");
assert(InvalidWriteOffset.prototype instanceof S3ServiceException);
assert(typeof InvalidWriteOffset$ === "object");
assert(NoSuchBucket.prototype instanceof S3ServiceException);
assert(typeof NoSuchBucket$ === "object");
assert(NoSuchKey.prototype instanceof S3ServiceException);
assert(typeof NoSuchKey$ === "object");
assert(NoSuchUpload.prototype instanceof S3ServiceException);
assert(typeof NoSuchUpload$ === "object");
assert(NotFound.prototype instanceof S3ServiceException);
assert(typeof NotFound$ === "object");
assert(ObjectAlreadyInActiveTierError.prototype instanceof S3ServiceException);
assert(typeof ObjectAlreadyInActiveTierError$ === "object");
assert(ObjectNotInActiveTierError.prototype instanceof S3ServiceException);
assert(typeof ObjectNotInActiveTierError$ === "object");
assert(TooManyParts.prototype instanceof S3ServiceException);
assert(typeof TooManyParts$ === "object");
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
