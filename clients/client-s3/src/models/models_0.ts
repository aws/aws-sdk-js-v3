// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  AnalyticsS3ExportFileFormat,
  AnnotationConfigurationState,
  AnnotationDirective,
  ArchiveStatus,
  BucketAbacStatus,
  BucketAccelerateStatus,
  BucketCannedACL,
  BucketLocationConstraint,
  BucketLogsPermission,
  BucketNamespace,
  BucketType,
  BucketVersioningStatus,
  ChecksumAlgorithm,
  ChecksumMode,
  ChecksumType,
  DataRedundancy,
  DeleteMarkerReplicationStatus,
  EncodingType,
  EncryptionType,
  Event,
  ExistingObjectReplicationStatus,
  ExpirationState,
  ExpirationStatus,
  FilterRuleName,
  IntelligentTieringAccessTier,
  IntelligentTieringStatus,
  InventoryConfigurationState,
  InventoryFormat,
  InventoryFrequency,
  InventoryIncludedObjectVersions,
  InventoryOptionalField,
  LocationType,
  MetadataDirective,
  MetricsStatus,
  MFADelete,
  MFADeleteStatus,
  ObjectAttributes,
  ObjectCannedACL,
  ObjectLockEnabled,
  ObjectLockEventHold,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetentionMode,
  ObjectOwnership,
  ObjectStorageClass,
  ObjectVersionStorageClass,
  OptionalObjectAttributes,
  OwnerOverride,
  PartitionDateSource,
  Payer,
  Permission,
  Protocol,
  ReplicaModificationsStatus,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationTimeStatus,
  RequestCharged,
  RequestPayer,
  S3TablesBucketType,
  ServerSideEncryption,
  SessionMode,
  SseKmsEncryptedObjectsStatus,
  StorageClass,
  StorageClassAnalysisSchemaVersion,
  TableSseAlgorithm,
  TaggingDirective,
  TransitionDefaultMinimumObjectSize,
  TransitionStorageClass,
  Type,
} from "./enums";

/**
 * The ABAC status of the general purpose bucket. When ABAC is enabled for the general purpose bucket, you can use tags to manage access to the general purpose buckets as well as for cost tracking purposes. When ABAC is disabled for the general purpose buckets, you can only use tags for cost tracking purposes. For more information, see [Using tags with S3 general purpose buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging.html).
 *
 * @public
 */
export interface AbacStatus {
  /**
   * The ABAC status of the general purpose bucket.
   *
   * @public
   */
  Status?: BucketAbacStatus | undefined;
}

/**
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
   *
   * @public
   */
  DaysAfterInitiation?: number | undefined;
}

/**
 * @public
 */
export interface AbortMultipartUploadOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface AbortMultipartUploadRequest {
  /**
   * The bucket name to which the upload was taking place.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Key of the object for which the multipart upload was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Upload ID that identifies the multipart upload.
   *
   * @public
   */
  UploadId: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * If present, this header aborts an in progress multipart upload only if it was initiated on the provided timestamp. If the initiated timestamp of the multipart upload does not match the provided value, the operation returns a `412 Precondition Failed` error. If the initiated timestamp matches or if the multipart upload doesn’t exist, the operation returns a `204 Success (No Content)` response.
   *
   * > **Note:** This functionality is only supported for directory buckets.
   *
   * @public
   */
  IfMatchInitiatedTime?: Date | undefined;
}

/**
 * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AccelerateConfiguration {
  /**
   * Specifies the transfer acceleration status of the bucket.
   *
   * @public
   */
  Status?: BucketAccelerateStatus | undefined;
}

/**
 * Container for the person being granted permissions.
 *
 * @public
 */
export interface Grantee {
  /**
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The canonical user ID of the grantee.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * URI of the grantee group.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * Type of grantee
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * Container for grant information.
 *
 * @public
 */
export interface Grant {
  /**
   * The person being granted permissions.
   *
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * Specifies the permission given to the grantee.
   *
   * @public
   */
  Permission?: Permission | undefined;
}

/**
 * Container for the owner's display name and ID.
 *
 * @public
 */
export interface Owner {
  /**
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Container for the ID of the owner.
   *
   * @public
   */
  ID?: string | undefined;
}

/**
 * Contains the elements that set the ACL permissions for an object per grantee.
 *
 * @public
 */
export interface AccessControlPolicy {
  /**
   * A list of grants.
   *
   * @public
   */
  Grants?: Grant[] | undefined;

  /**
   * Container for the bucket owner's display name and ID.
   *
   * @public
   */
  Owner?: Owner | undefined;
}

/**
 * A container for information about access control for replicas.
 *
 * @public
 */
export interface AccessControlTranslation {
  /**
   * Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the *Amazon S3 API Reference*.
   *
   * @public
   */
  Owner: OwnerOverride | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartUploadOutput {
  /**
   * The URI that identifies the newly created object.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The name of the bucket that contains the newly created object. Does not return the access point ARN or access point alias if used.
   *
   * > **Note:** Access points are not supported by directory buckets.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The object key of the newly created object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * If the object expiration is configured, this will contain the expiration date (`expiry-date`) and rule ID (`rule-id`). The value of `rule-id` is URL-encoded.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Entity tag that identifies the newly created object's data. Objects with different object data will have different entity tags. The entity tag is an opaque string. The entity tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5 digest of the object data, it will contain one or more nonhexadecimal characters and/or will consist of less than 32 or more than 32 hexadecimal digits. For more information about how the entity tag is calculated, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32 checksum` of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `CRC64NVME` checksum of the object. The `CRC64NVME` checksum is always a full object checksum. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The checksum type, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. You can use this header as a data integrity check to verify that the checksum type that is received is the same checksum type that was specified during the `CreateMultipartUpload` request. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * Version ID of the newly created object, in case the bucket has versioning turned on.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * Details of the parts that were uploaded.
 *
 * @public
 */
export interface CompletedPart {
  /**
   * Entity tag returned when the part was uploaded.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC32` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC32C` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC64NVME` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` checksum of the part. This checksum is present if the multipart upload request was created with the `SHA1` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` checksum of the part. This checksum is present if the multipart upload request was created with the `SHA256` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the part. This checksum is present if the multipart upload request was created with the `SHA512` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the part. This checksum is present if the multipart upload request was created with the `MD5` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * Part number that identifies the part. This is a positive integer between 1 and 10,000.
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - In `CompleteMultipartUpload`, when a additional checksum (including `x-amz-checksum-crc32`, `x-amz-checksum-crc32c`, `x-amz-checksum-sha1`, or `x-amz-checksum-sha256`) is applied to each part, the `PartNumber` must start at 1 and the part numbers must be consecutive. Otherwise, Amazon S3 generates an HTTP `400 Bad Request` status code and an `InvalidPartOrder` error code.
   * > - **Directory buckets** - In `CompleteMultipartUpload`, the `PartNumber` must start at 1 and the part numbers must be consecutive.
   *
   * @public
   */
  PartNumber?: number | undefined;
}

/**
 * The container for the completed multipart upload details.
 *
 * @public
 */
export interface CompletedMultipartUpload {
  /**
   * Array of CompletedPart data types.
   *
   * If you do not supply a valid `Part` with your request, the service sends back an HTTP 400 response.
   *
   * @public
   */
  Parts?: CompletedPart[] | undefined;
}

/**
 * @public
 */
export interface CompleteMultipartUploadRequest {
  /**
   * Name of the bucket to which the multipart upload was initiated.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The container for the multipart upload request information.
   *
   * @public
   */
  MultipartUpload?: CompletedMultipartUpload | undefined;

  /**
   * ID for the initiated multipart upload.
   *
   * @public
   */
  UploadId: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit `CRC32` checksum of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit `CRC32C` checksum of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `CRC64NVME` checksum of the object. The `CRC64NVME` checksum is always a full object checksum. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 160-bit `SHA1` digest of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 256-bit `SHA256` digest of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit `SHA512` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `MD5` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH64` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH3` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `XXHASH128` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * This header specifies the checksum type of the object, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. You can use this header as a data integrity check to verify that the checksum type that is received is the same checksum that was specified. If the checksum type doesn’t match the checksum type that was specified for the object during the `CreateMultipartUpload` request, it’ll result in a `BadDigest` error. For more information, see Checking object integrity in the Amazon S3 User Guide.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The expected total object size of the multipart upload request. If there’s a mismatch between the specified object size value and the actual object size value, it results in an `HTTP 400 InvalidRequest` error.
   *
   * @public
   */
  MpuObjectSize?: number | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a `412 Precondition Failed` error.
   *
   * If a conflicting operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should fetch the object's ETag, re-initiate the multipart upload with `CreateMultipartUpload`, and re-upload each part.
   *
   * Expects the ETag value as a string.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232), or [Conditional requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a `412 Precondition Failed` error.
   *
   * If a conflicting operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should re-initiate the multipart upload with `CreateMultipartUpload` and re-upload each part.
   *
   * Expects the '*' (asterisk) character.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232), or [Conditional requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  IfNoneMatch?: string | undefined;

  /**
   * The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is required only when the object was created using a checksum algorithm or if your bucket policy requires the use of SSE-C. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html#ssec-require-condition-key) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;
}

/**
 * Container for all response elements.
 *
 * @public
 */
export interface CopyObjectResult {
  /**
   * Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not its metadata.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Creation date of the object.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The checksum type that is used to calculate the object’s checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the object. This checksum is present if the object being copied was uploaded with the `CRC64NVME` checksum algorithm, or if the object was uploaded without a checksum (and Amazon S3 added the default checksum, `CRC64NVME`, to the uploaded object). For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. This checksum is only present if the object was uploaded with the `SHA512` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. This checksum is only present if the object was uploaded with the `MD5` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. This checksum is only present if the object was uploaded with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. This checksum is only present if the object was uploaded with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. This checksum is only present if the object was uploaded with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;
}

/**
 * @public
 */
export interface CopyObjectOutput {
  /**
   * Container for all response elements.
   *
   * @public
   */
  CopyObjectResult?: CopyObjectResult | undefined;

  /**
   * If the object expiration is configured, the response includes this header.
   *
   * > **Note:** Object expiration information is not returned in directory buckets and this header returns the value "`NotImplemented`" in all responses for directory buckets.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Version ID of the source object that was copied.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceVersionId?: string | undefined;

  /**
   * Version ID of the newly created copy.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to confirm the encryption algorithm that's used.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide the round-trip message integrity verification of the customer-provided encryption key.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Indicates whether the copied object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface CopyObjectRequest {
  /**
   * The canned access control list (ACL) to apply to the object.
   *
   * When you copy an object, the ACL metadata is not preserved and is set to `private` by default. Only the owner has full access control. To override the default ACL setting, specify a new ACL when you generate a copy request. For more information, see [Using ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html).
   *
   * If the destination bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept `PUT` requests that don't specify an ACL or `PUT` requests that specify bucket owner full control ACLs, such as the `bucket-owner-full-control` canned ACL or an equivalent form of this ACL expressed in the XML format. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:**
   * >
   * > - If your destination bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  ACL?: ObjectCannedACL | undefined;

  /**
   * The name of the destination bucket.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP `400 Bad Request` error with the error code `InvalidRequest`.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must use the Outpost bucket access point ARN or the access point alias for the destination bucket. You can only copy objects within the same Outpost bucket. It's not supported to copy objects across different Amazon Web Services Outposts, between buckets on the same Outposts, or between Outposts buckets and any other bucket types. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *S3 on Outposts guide*. When you use this action with S3 on Outposts through the REST API, you must direct requests to the S3 on Outposts hostname, in the format `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. The hostname isn't required when you use the Amazon Web Services CLI or SDKs.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Specifies the caching behavior along the request/reply chain.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * When you copy an object, if the source object has a checksum, that checksum value will be copied to the new object by default. If the `CopyObject` request does not include this `x-amz-checksum-algorithm` header, the checksum algorithm will be copied from the source object to the destination object (if it's present on the source object). You can optionally specify a different checksum algorithm to use with the `x-amz-checksum-algorithm` header. Unrecognized or unsupported values will respond with the HTTP status code `400 Bad Request`.
   *
   * > **Note:** For directory buckets, when you use Amazon Web Services SDKs, `CRC32` is the default checksum algorithm that's used for performance.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Specifies presentational information for the object. Indicates whether an object should be displayed in a web browser or downloaded as a file. It allows specifying the desired filename for the downloaded file.
   *
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   *
   * > **Note:** For directory buckets, only the `aws-chunked` value is supported in this header field.
   *
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * The language the content is in.
   *
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * A standard MIME type that describes the format of the object data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Specifies the source object for the copy operation. The source object can be up to 5 GB. If the source object is an object that was uploaded by using a multipart upload, the object copy will be a single part object after the source object is copied to the destination bucket.
   *
   * You specify the value of the copy source in one of two formats, depending on whether you want to access the source object through an [access point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html):
   *
   * - For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object `reports/january.pdf` from the general purpose bucket `awsexamplebucket`, use `awsexamplebucket/reports/january.pdf`. The value must be URL-encoded. To copy the object `reports/january.pdf` from the directory bucket `awsexamplebucket--use1-az5--x-s3`, use `awsexamplebucket--use1-az5--x-s3/reports/january.pdf`. The value must be URL-encoded.
   * - For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, to copy the object `reports/january.pdf` through access point `my-access-point` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf`. The value must be URL encoded.
   *
   *   > **Note:**
   *   >
   *   > - Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.
   *   > - Access points are not supported by directory buckets.
   *
   *   Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>`. For example, to copy the object `reports/january.pdf` through outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf`. The value must be URL-encoded.
   *
   * If your source bucket versioning is enabled, the `x-amz-copy-source` header by default identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the `versionId` query parameter. Specifically, append `?versionId=<version-id>` to the value (for example, `awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893`). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.
   *
   * If you enable versioning on the destination bucket, Amazon S3 generates a unique version ID for the copied object. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the `x-amz-version-id` response header in the response.
   *
   * If you do not enable versioning or suspend it on the destination bucket, the version ID that Amazon S3 generates in the `x-amz-version-id` response header is always null.
   *
   * > **Note:** **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets.
   *
   * @public
   */
  CopySource: string | undefined;

  /**
   * Copies the object if its entity tag (ETag) matches the specified tag.
   *
   * If both the `x-amz-copy-source-if-match` and `x-amz-copy-source-if-unmodified-since` headers are present in the request and evaluate as follows, Amazon S3 returns `200 OK` and copies the data:
   *
   * - `x-amz-copy-source-if-match` condition evaluates to true
   * - `x-amz-copy-source-if-unmodified-since` condition evaluates to false
   *
   * @public
   */
  CopySourceIfMatch?: string | undefined;

  /**
   * Copies the object if it has been modified since the specified time.
   *
   * If both the `x-amz-copy-source-if-none-match` and `x-amz-copy-source-if-modified-since` headers are present in the request and evaluate as follows, Amazon S3 returns the `412 Precondition Failed` response code:
   *
   * - `x-amz-copy-source-if-none-match` condition evaluates to false
   * - `x-amz-copy-source-if-modified-since` condition evaluates to true
   *
   * @public
   */
  CopySourceIfModifiedSince?: Date | undefined;

  /**
   * Copies the object if its entity tag (ETag) is different than the specified ETag.
   *
   * If both the `x-amz-copy-source-if-none-match` and `x-amz-copy-source-if-modified-since` headers are present in the request and evaluate as follows, Amazon S3 returns the `412 Precondition Failed` response code:
   *
   * - `x-amz-copy-source-if-none-match` condition evaluates to false
   * - `x-amz-copy-source-if-modified-since` condition evaluates to true
   *
   * @public
   */
  CopySourceIfNoneMatch?: string | undefined;

  /**
   * Copies the object if it hasn't been modified since the specified time.
   *
   * If both the `x-amz-copy-source-if-match` and `x-amz-copy-source-if-unmodified-since` headers are present in the request and evaluate as follows, Amazon S3 returns `200 OK` and copies the data:
   *
   * - `x-amz-copy-source-if-match` condition evaluates to true
   * - `x-amz-copy-source-if-unmodified-since` condition evaluates to false
   *
   * @public
   */
  CopySourceIfUnmodifiedSince?: Date | undefined;

  /**
   * The date and time at which the object is no longer cacheable.
   *
   * @public
   */
  Expires?: Date | undefined;

  /**
   * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to read the object data and its metadata.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the object ACL.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable object.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Copies the object if the entity tag (ETag) of the destination object matches the specified tag. If the ETag values do not match, the operation returns a `412 Precondition Failed` error. If a concurrent operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should fetch the object's ETag and retry the upload.
   *
   * Expects the ETag value as a string.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * Copies the object only if the object key name at the destination does not already exist in the bucket specified. Otherwise, Amazon S3 returns a `412 Precondition Failed` error. If a concurrent operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should retry the upload.
   *
   * Expects the '*' (asterisk) character.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfNoneMatch?: string | undefined;

  /**
   * The key of the destination object.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * Specifies whether the metadata is copied from the source object or replaced with metadata that's provided in the request. When copying an object, you can preserve all metadata (the default) or specify new metadata. If this header isn’t specified, `COPY` is the default behavior.
   *
   * **General purpose bucket** - For general purpose buckets, when you grant permissions, you can use the `s3:x-amz-metadata-directive` condition key to enforce certain metadata behavior when objects are uploaded. For more information, see [Amazon S3 condition key examples](https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** `x-amz-website-redirect-location` is unique to each object and is not copied when using the `x-amz-metadata-directive` header. To copy the value, you must specify `x-amz-website-redirect-location` in the request header.
   *
   * @public
   */
  MetadataDirective?: MetadataDirective | undefined;

  /**
   * Specifies whether the object tag-set is copied from the source object or replaced with the tag-set that's provided in the request.
   *
   * The default value is `COPY`.
   *
   * > **Note:**
   * >
   * > **Directory buckets** - For directory buckets in a `CopyObject` operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a `501 Not Implemented` status code. When the destination bucket is a directory bucket, you will receive a `501 Not Implemented` response in any of the following situations:
   * >
   * > - When you attempt to `COPY` the tag-set from an S3 source object that has non-empty tags.
   * > - When you attempt to `REPLACE` the tag-set of a source object and set a non-empty value to `x-amz-tagging`.
   * > - When you don't set the `x-amz-tagging-directive` header and the source object has non-empty tags. This is because the default value of `x-amz-tagging-directive` is `COPY`.
   * >
   * > Because only the empty tag-set is supported for directory buckets in a `CopyObject` operation, the following situations are allowed:
   * >
   * > - When you attempt to `COPY` the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object.
   * > - When you attempt to `REPLACE` the tag-set of a directory bucket source object and set the `x-amz-tagging` value of the directory bucket destination object to empty.
   * > - When you attempt to `REPLACE` the tag-set of a general purpose bucket source object that has non-empty tags and set the `x-amz-tagging` value of the directory bucket destination object to empty.
   * > - When you attempt to `REPLACE` the tag-set of a directory bucket source object and don't set the `x-amz-tagging` value of the directory bucket destination object. This is because the default value of `x-amz-tagging` is the empty value.
   *
   * @public
   */
  TaggingDirective?: TaggingDirective | undefined;

  /**
   * Specifies whether you want to copy annotations from the source object or exclude them. If this header isn't specified, `COPY` is the default behavior.
   *
   * Valid Values: `COPY | EXCLUDE`
   *
   * You can specify this directive as either an HTTP header (`x-amz-object-annotation-directive`) or as a query string parameter. Use the query string form when generating presigned URLs that need to control annotation copy behavior.
   *
   * When set to `COPY`, you must have `s3:GetObjectAnnotation` permission on the source object and `s3:PutObjectAnnotation` permission on the destination. Each annotation copied is billed as a separate PUT request. If annotations on the source are modified during the copy, Amazon S3 returns a retryable error.
   *
   * > **Note:** For directory buckets, annotations are not supported. Use `EXCLUDE` to copy objects to directory buckets without errors. If you specify `COPY` for a directory bucket, the request returns HTTP 501 (Not Implemented).
   *
   * > **Note:** When you copy objects using multipart upload (for example, when the Amazon Web Services CLI or Amazon Web Services SDKs use Transfer Manager for objects larger than approximately 8 MB), annotations are not copied by default. To include annotations, specify `--copy-props default` in the Amazon Web Services CLI or the equivalent SDK configuration. With this opt-in, the SDK reads source annotations, completes the multipart upload, and then writes each annotation to the destination. Between the upload completion and the last annotation write, the destination object exists without all its annotations.
   *
   * @public
   */
  AnnotationDirective?: AnnotationDirective | undefined;

  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3. Unrecognized or unsupported values won’t write a destination object and will receive a `400 Bad Request` response.
   *
   * Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a different default encryption configuration, Amazon S3 uses the corresponding encryption key to encrypt the target object copy.
   *
   * With server-side encryption, Amazon S3 encrypts your data as it writes your data to disks in its data centers and decrypts the data when you access it. For more information about server-side encryption, see [Using Server-Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html) in the *Amazon S3 User Guide*.
   *
   * **General purpose buckets**
   *
   * - For general purpose buckets, there are the following supported options for server-side encryption: server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), and server-side encryption with customer-provided encryption keys (SSE-C). Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy.
   * - When you perform a `CopyObject` operation, if you want to use a different type of encryption setting for the target object, you can specify appropriate encryption-related headers to encrypt the target object with an Amazon S3 managed key, a KMS key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence.
   *
   * **Directory buckets**
   *
   * - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your `CreateSession` requests or `PUT` object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*. For more information about the encryption overriding behaviors in directory buckets, see [Specifying server-side encryption with KMS for new object uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html).
   * - To encrypt new object copies to a directory bucket with SSE-KMS, we recommend you specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk)). The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported. Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket for the lifetime of the bucket. After you specify a customer managed key for SSE-KMS, you can't override the customer managed key for the bucket's SSE-KMS configuration. Then, when you perform a `CopyObject` operation and want to specify server-side encryption settings for new object copies with SSE-KMS in the encryption-related request headers, you must ensure the encryption key is the same customer managed key that you specified for the directory bucket's default encryption configuration.
   * - **S3 access points for Amazon FSx** - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If the `x-amz-storage-class` header is not used, the copied object will be stored in the `STANDARD` Storage Class by default. The `STANDARD` storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class.
   *
   * > **Note:**
   * >
   * > - **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones. Unsupported storage class values won't write a destination object and will respond with the HTTP status code `400 Bad Request`.
   * > - **Amazon S3 on Outposts** - S3 on Outposts only uses the `OUTPOSTS` Storage Class.
   *
   * You can use the `CopyObject` action to change the storage class of an object that is already stored in Amazon S3 by using the `x-amz-storage-class` header. For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html) in the *Amazon S3 User Guide*.
   *
   * Before using an object as a source object for the copy operation, you must restore a copy of it if it meets any of the following conditions:
   *
   * - The storage class of the source object is `GLACIER` or `DEEP_ARCHIVE`.
   * - The storage class of the source object is `INTELLIGENT_TIERING` and it's [S3 Intelligent-Tiering access tier](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html#intel-tiering-tier-definition) is `Archive Access` or `Deep Archive Access`.
   *
   * For more information, see [RestoreObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html) and [Copying Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjectsExamples.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If the destination bucket is configured as a website, redirects requests for this object copy to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This value is unique to each object and is not copied when using the `x-amz-metadata-directive` header. Instead, you may opt to provide this header in combination with the `x-amz-metadata-directive` header.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, `AES256`).
   *
   * When you perform a `CopyObject` operation, if you want to use a different type of encryption setting for the target object, you can specify appropriate encryption-related headers to encrypt the target object with an Amazon S3 managed key, a KMS key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence.
   *
   * > **Note:** This functionality is not supported when the destination bucket is a directory bucket.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded. Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * > **Note:** This functionality is not supported when the destination bucket is a directory bucket.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * > **Note:** This functionality is not supported when the destination bucket is a directory bucket.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. All GET and PUT requests for an object protected by KMS will fail if they're not made via SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see [Specifying the Signature Version in Request Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version) in the *Amazon S3 User Guide*.
   *
   * **Directory buckets** - To encrypt data using SSE-KMS, it's recommended to specify the `x-amz-server-side-encryption` header to `aws:kms`. Then, the `x-amz-server-side-encryption-aws-kms-key-id` header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the `x-amz-server-side-encryption-aws-kms-key-id` header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported. Incorrect key specification results in an HTTP `400 Bad Request` error.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for the destination object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   *
   * **General purpose buckets** - This value must be explicitly added to specify encryption context for `CopyObject` requests if you want an additional encryption context for your destination object. The additional encryption context of the source object won't be copied to the destination object. For more information, see [Encryption context](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context) in the *Amazon S3 User Guide*.
   *
   * **Directory buckets** - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object.
   *
   * Setting this header to `true` causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a COPY action doesn’t affect bucket-level settings for S3 Bucket Key.
   *
   * For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** **Directory buckets** - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Specifies the algorithm to use when decrypting the source object (for example, `AES256`).
   *
   * If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceSSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be the same one that was used when the source object was created.
   *
   * If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceSSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceSSECustomerKeyMD5?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The tag-set for the object copy in the destination bucket. This value must be used in conjunction with the `x-amz-tagging-directive` if you choose `REPLACE` for the `x-amz-tagging-directive`. If you choose `COPY` for the `x-amz-tagging-directive`, you don't need to set the `x-amz-tagging` header, because the tag-set will be copied from the source object directly. The tag-set must be encoded as URL Query parameters.
   *
   * The default value is the empty value.
   *
   * > **Note:**
   * >
   * > **Directory buckets** - For directory buckets in a `CopyObject` operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a `501 Not Implemented` status code. When the destination bucket is a directory bucket, you will receive a `501 Not Implemented` response in any of the following situations:
   * >
   * > - When you attempt to `COPY` the tag-set from an S3 source object that has non-empty tags.
   * > - When you attempt to `REPLACE` the tag-set of a source object and set a non-empty value to `x-amz-tagging`.
   * > - When you don't set the `x-amz-tagging-directive` header and the source object has non-empty tags. This is because the default value of `x-amz-tagging-directive` is `COPY`.
   * >
   * > Because only the empty tag-set is supported for directory buckets in a `CopyObject` operation, the following situations are allowed:
   * >
   * > - When you attempt to `COPY` the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object.
   * > - When you attempt to `REPLACE` the tag-set of a directory bucket source object and set the `x-amz-tagging` value of the directory bucket destination object to empty.
   * > - When you attempt to `REPLACE` the tag-set of a general purpose bucket source object that has non-empty tags and set the `x-amz-tagging` value of the directory bucket destination object to empty.
   * > - When you attempt to `REPLACE` the tag-set of a directory bucket source object and don't set the `x-amz-tagging` value of the directory bucket destination object. This is because the default value of `x-amz-tagging` is the empty value.
   *
   * @public
   */
  Tagging?: string | undefined;

  /**
   * The Object Lock mode that you want to apply to the object copy.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * The date and time when you want the Object Lock of the object copy to expire.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Specifies whether you want to apply a legal hold to the object copy.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * The event hold status to apply to the object copy. Set to `ON` to enable or `OFF` to disable.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: ObjectLockEventHold | undefined;

  /**
   * The event hold duration in days to apply to the object copy. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationDays?: number | undefined;

  /**
   * The event hold duration in years to apply to the object copy. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationYears?: number | undefined;

  /**
   * The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedSourceBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateBucketOutput {
  /**
   * A forward slash followed by the name of the bucket for all account regional namespace buckets and all global general purpose buckets created in us-east-1. For example, `/amzn-s3-demo-bucket`. For global general purpose buckets created in other Amazon Web Services Regions, the Location field is the global endpoint URL. For example, `http://amzn-s3-demo-bucket.s3.amazonaws.com/`.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all of Amazon Web Services.
   *
   * > **Note:** This parameter is only supported for S3 directory buckets. For more information, see [Using tags with directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html).
   *
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * Specifies the information about the bucket that will be created. For more information about directory buckets, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** This functionality is only supported by directory buckets.
 *
 * @public
 */
export interface BucketInfo {
  /**
   * The number of Zone (Availability Zone or Local Zone) that's used for redundancy for the bucket.
   *
   * @public
   */
  DataRedundancy?: DataRedundancy | undefined;

  /**
   * The type of bucket.
   *
   * @public
   */
  Type?: BucketType | undefined;
}

/**
 * Specifies the location where the bucket will be created.
 *
 * For directory buckets, the location type is Availability Zone or Local Zone. For more information about directory buckets, see [Working with directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** This functionality is only supported by directory buckets.
 *
 * @public
 */
export interface LocationInfo {
  /**
   * The type of location where the bucket will be created.
   *
   * @public
   */
  Type?: LocationType | undefined;

  /**
   * The name of the location where the bucket will be created.
   *
   * For directory buckets, the name of the location is the Zone ID of the Availability Zone (AZ) or Local Zone (LZ) where the bucket will be created. An example AZ ID value is `usw2-az1`.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A container of a key value name pair.
 *
 * @public
 */
export interface Tag {
  /**
   * Name of the object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The configuration information for the bucket.
 *
 * @public
 */
export interface CreateBucketConfiguration {
  /**
   * Specifies the Region where the bucket will be created. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region.
   *
   * If you don't specify a Region, the bucket is created in the US East (N. Virginia) Region (us-east-1) by default. Configurations using the value `EU` will create a bucket in `eu-west-1`.
   *
   * For a list of the valid values for all of the Amazon Web Services Regions, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  LocationConstraint?: BucketLocationConstraint | undefined;

  /**
   * Specifies the location where the bucket will be created.
   *
   * **Directory buckets** - The location type is Availability Zone or Local Zone. To use the Local Zone location type, your account must be enabled for Local Zones. Otherwise, you get an HTTP `403 Forbidden` error with the error code `AccessDenied`. To learn more, see [Enable accounts for Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/opt-in-directory-bucket-lz.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is only supported by directory buckets.
   *
   * @public
   */
  Location?: LocationInfo | undefined;

  /**
   * Specifies the information about the bucket that will be created.
   *
   * > **Note:** This functionality is only supported by directory buckets.
   *
   * @public
   */
  Bucket?: BucketInfo | undefined;

  /**
   * An array of tags that you can apply to the bucket that you're creating. Tags are key-value pairs of metadata used to categorize and organize your buckets, track costs, and control access.
   *
   * You must have the `s3:TagResource` permission to create a general purpose bucket with tags or the `s3express:TagResource` permission to create a directory bucket with tags.
   *
   * When creating buckets with tags, note that tag-based conditions using `aws:ResourceTag` and `s3:BucketTag` condition keys are applicable only after ABAC is enabled on the bucket. To learn more, see [Enabling ABAC in general purpose buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging-enable-abac.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * The canned ACL to apply to the bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ACL?: BucketCannedACL | undefined;

  /**
   * The name of the bucket to create.
   *
   * **General purpose buckets** - For information about bucket naming restrictions, see [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon S3 User Guide*.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The configuration information for the bucket.
   *
   * @public
   */
  CreateBucketConfiguration?: CreateBucketConfiguration | undefined;

  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to list the objects in the bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the bucket ACL.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to create new objects in the bucket.
   *
   * For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Specifies whether you want S3 Object Lock to be enabled for the new bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEnabledForBucket?: boolean | undefined;

  /**
   * The container element for object ownership for a bucket's ownership controls.
   *
   * `BucketOwnerPreferred` - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the `bucket-owner-full-control` canned ACL.
   *
   * `ObjectWriter` - The uploading account will own the object if the object is uploaded with the `bucket-owner-full-control` canned ACL.
   *
   * `BucketOwnerEnforced` - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or specify bucket owner full control ACLs (such as the predefined `bucket-owner-full-control` canned ACL or a custom ACL in XML format that grants the same permissions).
   *
   * By default, `ObjectOwnership` is set to `BucketOwnerEnforced` and ACLs are disabled. We recommend keeping ACLs disabled, except in uncommon use cases where you must control access for each object individually. For more information about S3 Object Ownership, see [Controlling ownership of objects and disabling ACLs for your bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets. Directory buckets use the bucket owner enforced setting for S3 Object Ownership.
   *
   * @public
   */
  ObjectOwnership?: ObjectOwnership | undefined;

  /**
   * Specifies the namespace where you want to create your general purpose bucket. When you create a general purpose bucket, you can choose to create a bucket in the shared global namespace or you can choose to create a bucket in your account regional namespace. Your account regional namespace is a subdivision of the global namespace that only your account can create buckets in. For more information on bucket namespaces, see [Namespaces for general purpose buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html).
   *
   * General purpose buckets in your account regional namespace must follow a specific naming convention. These buckets consist of a bucket name prefix that you create, and a suffix that contains your 12-digit Amazon Web Services Account ID, the Amazon Web Services Region code, and ends with `-an`. Bucket names must follow the format `bucket-name-prefix-accountId-region-an` (for example, `amzn-s3-demo-bucket-111122223333-us-west-2-an`). For information about bucket naming restrictions, see [Account regional namespace naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html#account-regional-naming-rules) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  BucketNamespace?: BucketNamespace | undefined;
}

/**
 * The encryption settings for an S3 Metadata journal table or inventory table configuration.
 *
 * @public
 */
export interface MetadataTableEncryptionConfiguration {
  /**
   * The encryption type specified for a metadata table. To specify server-side encryption with Key Management Service (KMS) keys (SSE-KMS), use the `aws:kms` value. To specify server-side encryption with Amazon S3 managed keys (SSE-S3), use the `AES256` value.
   *
   * @public
   */
  SseAlgorithm: TableSseAlgorithm | undefined;

  /**
   * If server-side encryption with Key Management Service (KMS) keys (SSE-KMS) is specified, you must also specify the KMS key Amazon Resource Name (ARN). You must specify a customer-managed KMS key that's located in the same Region as the general purpose bucket that corresponds to the metadata table configuration.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Specifies the configuration for the annotation table associated with a bucket's Amazon S3 Metadata configuration. The annotation table is an Iceberg table that records annotation events for objects in the bucket.
 *
 * @public
 */
export interface AnnotationTableConfiguration {
  /**
   * The state of the annotation table. Valid values are `ENABLED` and `DISABLED`.
   *
   * @public
   */
  ConfigurationState: AnnotationConfigurationState | undefined;

  /**
   * The encryption settings for an S3 Metadata journal table or inventory table configuration.
   *
   * @public
   */
  EncryptionConfiguration?: MetadataTableEncryptionConfiguration | undefined;

  /**
   * The ARN of the IAM role used to manage the annotation table.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * The inventory table configuration for an S3 Metadata configuration.
 *
 * @public
 */
export interface InventoryTableConfiguration {
  /**
   * The configuration state of the inventory table, indicating whether the inventory table is enabled or disabled.
   *
   * @public
   */
  ConfigurationState: InventoryConfigurationState | undefined;

  /**
   * The encryption configuration for the inventory table.
   *
   * @public
   */
  EncryptionConfiguration?: MetadataTableEncryptionConfiguration | undefined;
}

/**
 * The journal table record expiration settings for a journal table in an S3 Metadata configuration.
 *
 * @public
 */
export interface RecordExpiration {
  /**
   * Specifies whether journal table record expiration is enabled or disabled.
   *
   * @public
   */
  Expiration: ExpirationState | undefined;

  /**
   * If you enable journal table record expiration, you can set the number of days to retain your journal table records. Journal table records must be retained for a minimum of 7 days. To set this value, specify any whole number from `7` to `2147483647`. For example, to retain your journal table records for one year, set this value to `365`.
   *
   * @public
   */
  Days?: number | undefined;
}

/**
 * The journal table configuration for an S3 Metadata configuration.
 *
 * @public
 */
export interface JournalTableConfiguration {
  /**
   * The journal table record expiration settings for the journal table.
   *
   * @public
   */
  RecordExpiration: RecordExpiration | undefined;

  /**
   * The encryption configuration for the journal table.
   *
   * @public
   */
  EncryptionConfiguration?: MetadataTableEncryptionConfiguration | undefined;
}

/**
 * The S3 Metadata configuration for a general purpose bucket.
 *
 * @public
 */
export interface MetadataConfiguration {
  /**
   * The journal table configuration for a metadata configuration.
   *
   * @public
   */
  JournalTableConfiguration: JournalTableConfiguration | undefined;

  /**
   * The inventory table configuration for a metadata configuration.
   *
   * @public
   */
  InventoryTableConfiguration?: InventoryTableConfiguration | undefined;

  /**
   * Optional annotation table configuration to include with the metadata configuration.
   *
   * @public
   */
  AnnotationTableConfiguration?: AnnotationTableConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateBucketMetadataConfigurationRequest {
  /**
   * The general purpose bucket that you want to create the metadata configuration for.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `Content-MD5` header for the metadata configuration.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * The checksum algorithm to use with your metadata configuration.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The contents of your metadata configuration.
   *
   * @public
   */
  MetadataConfiguration: MetadataConfiguration | undefined;

  /**
   * The expected owner of the general purpose bucket that corresponds to your metadata configuration.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The destination information for a V1 S3 Metadata configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface S3TablesDestination {
  /**
   * The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket.
   *
   * @public
   */
  TableBucketArn: string | undefined;

  /**
   * The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * The V1 S3 Metadata configuration for a general purpose bucket.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface MetadataTableConfiguration {
  /**
   * The destination information for the metadata table configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
   *
   * @public
   */
  S3TablesDestination: S3TablesDestination | undefined;
}

/**
 * @public
 */
export interface CreateBucketMetadataTableConfigurationRequest {
  /**
   * The general purpose bucket that you want to create the metadata table configuration for.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `Content-MD5` header for the metadata table configuration.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * The checksum algorithm to use with your metadata table configuration.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The contents of your metadata table configuration.
   *
   * @public
   */
  MetadataTableConfiguration: MetadataTableConfiguration | undefined;

  /**
   * The expected owner of the general purpose bucket that corresponds to your metadata table configuration.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateMultipartUploadOutput {
  /**
   * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, the response includes this header. The header indicates when the initiated multipart upload becomes eligible for an abort operation. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the *Amazon S3 User Guide*.
   *
   * The response also includes the `x-amz-abort-rule-id` header that provides the ID of the lifecycle configuration rule that defines the abort action.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  AbortDate?: Date | undefined;

  /**
   * This header is returned along with the `x-amz-abort-date` header. It identifies the applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  AbortRuleId?: string | undefined;

  /**
   * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used.
   *
   * > **Note:** Access points are not supported by directory buckets.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * ID for the initiated multipart upload.
   *
   * @public
   */
  UploadId?: string | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to confirm the encryption algorithm that's used.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide the round-trip message integrity verification of the customer-provided encryption key.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * The algorithm that was used to create a checksum of the object.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum value. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * @public
 */
export interface CreateMultipartUploadRequest {
  /**
   * The canned ACL to apply to the object. Amazon S3 supports a set of predefined ACLs, known as *canned ACLs*. Each canned ACL has a predefined set of grantees and permissions. For more information, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL) in the *Amazon S3 User Guide*.
   *
   * By default, all objects are private. Only the owner has full access control. When uploading an object, you can grant access permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the new object. For more information, see [Using ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html). One way to grant the permissions using the request headers is to specify a canned ACL with the `x-amz-acl` request header.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  ACL?: ObjectCannedACL | undefined;

  /**
   * The name of the bucket where the multipart upload is initiated and where the object is uploaded.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Specifies caching behavior along the request/reply chain.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Specifies presentational information for the object.
   *
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   *
   * > **Note:** For directory buckets, only the `aws-chunked` value is supported in this header field.
   *
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * The language that the content is in.
   *
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * A standard MIME type describing the format of the object data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The date and time at which the object is no longer cacheable.
   *
   * @public
   */
  Expires?: Date | undefined;

  /**
   * Specify access permissions explicitly to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
   *
   * By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) in the *Amazon S3 User Guide*.
   *
   * You specify each grantee as a type=value pair, where the type is one of the following:
   *
   * - `id` – if the value specified is the canonical user ID of an Amazon Web Services account
   * - `uri` – if you are granting permissions to a predefined group
   * - `emailAddress` – if the value specified is the email address of an Amazon Web Services account
   *
   *   > **Note:**
   *   >
   *   > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
   *   >
   *   > - US East (N. Virginia)
   *   > - US West (N. California)
   *   > - US West (Oregon)
   *   > - Asia Pacific (Singapore)
   *   > - Asia Pacific (Sydney)
   *   > - Asia Pacific (Tokyo)
   *   > - Europe (Ireland)
   *   > - South America (São Paulo)
   *   >
   *   > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
   *
   * For example, the following `x-amz-grant-read` header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:
   *
   * `x-amz-grant-read: id="11112222333", id="444455556666"`
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Specify access permissions explicitly to allow grantee to read the object data and its metadata.
   *
   * By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) in the *Amazon S3 User Guide*.
   *
   * You specify each grantee as a type=value pair, where the type is one of the following:
   *
   * - `id` – if the value specified is the canonical user ID of an Amazon Web Services account
   * - `uri` – if you are granting permissions to a predefined group
   * - `emailAddress` – if the value specified is the email address of an Amazon Web Services account
   *
   *   > **Note:**
   *   >
   *   > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
   *   >
   *   > - US East (N. Virginia)
   *   > - US West (N. California)
   *   > - US West (Oregon)
   *   > - Asia Pacific (Singapore)
   *   > - Asia Pacific (Sydney)
   *   > - Asia Pacific (Tokyo)
   *   > - Europe (Ireland)
   *   > - South America (São Paulo)
   *   >
   *   > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
   *
   * For example, the following `x-amz-grant-read` header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:
   *
   * `x-amz-grant-read: id="11112222333", id="444455556666"`
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Specify access permissions explicitly to allows grantee to read the object ACL.
   *
   * By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) in the *Amazon S3 User Guide*.
   *
   * You specify each grantee as a type=value pair, where the type is one of the following:
   *
   * - `id` – if the value specified is the canonical user ID of an Amazon Web Services account
   * - `uri` – if you are granting permissions to a predefined group
   * - `emailAddress` – if the value specified is the email address of an Amazon Web Services account
   *
   *   > **Note:**
   *   >
   *   > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
   *   >
   *   > - US East (N. Virginia)
   *   > - US West (N. California)
   *   > - US West (Oregon)
   *   > - Asia Pacific (Singapore)
   *   > - Asia Pacific (Sydney)
   *   > - Asia Pacific (Tokyo)
   *   > - Europe (Ireland)
   *   > - South America (São Paulo)
   *   >
   *   > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
   *
   * For example, the following `x-amz-grant-read` header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:
   *
   * `x-amz-grant-read: id="11112222333", id="444455556666"`
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Specify access permissions explicitly to allows grantee to allow grantee to write the ACL for the applicable object.
   *
   * By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) in the *Amazon S3 User Guide*.
   *
   * You specify each grantee as a type=value pair, where the type is one of the following:
   *
   * - `id` – if the value specified is the canonical user ID of an Amazon Web Services account
   * - `uri` – if you are granting permissions to a predefined group
   * - `emailAddress` – if the value specified is the email address of an Amazon Web Services account
   *
   *   > **Note:**
   *   >
   *   > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
   *   >
   *   > - US East (N. Virginia)
   *   > - US West (N. California)
   *   > - US West (Oregon)
   *   > - Asia Pacific (Singapore)
   *   > - Asia Pacific (Sydney)
   *   > - Asia Pacific (Tokyo)
   *   > - Europe (Ireland)
   *   > - South America (São Paulo)
   *   >
   *   > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
   *
   * For example, the following `x-amz-grant-read` header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:
   *
   * `x-amz-grant-read: id="11112222333", id="444455556666"`
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Object key for which the multipart upload is to be initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * - **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your `CreateSession` requests or `PUT` object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*. For more information about the encryption overriding behaviors in directory buckets, see [Specifying server-side encryption with KMS for new object uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html).
   *
   *   In the Zonal endpoint API calls (except [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) and [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)) using the REST API, the encryption request headers must match the encryption settings that are specified in the `CreateSession` request. You can't override the values of the encryption settings (`x-amz-server-side-encryption`, `x-amz-server-side-encryption-aws-kms-key-id`, `x-amz-server-side-encryption-context`, and `x-amz-server-side-encryption-bucket-key-enabled`) that are specified in the `CreateSession` request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the `CreateSession` request to protect new objects in the directory bucket.
   *
   *   > **Note:** When you use the CLI or the Amazon Web Services SDKs, for `CreateSession`, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the `CreateSession` request. It's not supported to override the encryption settings values in the `CreateSession` request. So in the Zonal endpoint API calls (except [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) and [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)), the encryption request headers must match the default encryption configuration of the directory bucket.
   * - **S3 access points for Amazon FSx** - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:**
   * >
   * > - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   * > - Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, AES256).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID.
   *
   * **General purpose buckets** - If you specify `x-amz-server-side-encryption` with `aws:kms` or `aws:kms:dsse`, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify `x-amz-server-side-encryption:aws:kms` or `x-amz-server-side-encryption:aws:kms:dsse`, but do not provide `x-amz-server-side-encryption-aws-kms-key-id`, Amazon S3 uses the Amazon Web Services managed key (`aws/s3`) to protect the data.
   *
   * **Directory buckets** - To encrypt data using SSE-KMS, it's recommended to specify the `x-amz-server-side-encryption` header to `aws:kms`. Then, the `x-amz-server-side-encryption-aws-kms-key-id` header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the `x-amz-server-side-encryption-aws-kms-key-id` header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported. Incorrect key specification results in an HTTP `400 Bad Request` error.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
   *
   * **Directory buckets** - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).
   *
   * **General purpose buckets** - Setting this header to `true` causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.
   *
   * **Directory buckets** - S3 Bucket Keys are always enabled for `GET` and `PUT` operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The tag-set for the object. The tag-set must be encoded as URL Query parameters.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  Tagging?: string | undefined;

  /**
   * Specifies the Object Lock mode that you want to apply to the uploaded object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * Specifies the date and time when you want the Object Lock to expire.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Specifies whether you want to apply a legal hold to the uploaded object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * Specifies the event hold status to apply to the uploaded object. Set to `ON` to enable or `OFF` to disable.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: ObjectLockEventHold | undefined;

  /**
   * Specifies the event hold duration in days to apply to the uploaded object. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationDays?: number | undefined;

  /**
   * Specifies the event hold duration in years to apply to the uploaded object. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationYears?: number | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Indicates the checksum type that you want Amazon S3 to use to calculate the object’s checksum value. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * The established temporary security credentials of the session.
 *
 * > **Note:** **Directory buckets** - These session credentials are only supported for the authentication and authorization of Zonal endpoint API operations on directory buckets.
 *
 * @public
 */
export interface SessionCredentials {
  /**
   * A unique identifier that's associated with a secret access key. The access key ID and the secret access key are used together to sign programmatic Amazon Web Services requests cryptographically.
   *
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * A key that's used with the access key ID to cryptographically sign programmatic Amazon Web Services requests. Signing a request identifies the sender and prevents the request from being altered.
   *
   * @public
   */
  SecretAccessKey: string | undefined;

  /**
   * A part of the temporary security credentials. The session token is used to validate the temporary security credentials.
   *
   * @public
   */
  SessionToken: string | undefined;

  /**
   * Temporary security credentials expire after a specified interval. After temporary credentials expire, any calls that you make with those credentials will fail. So you must generate a new set of temporary credentials. Temporary credentials cannot be extended or refreshed beyond the original specified interval.
   *
   * @public
   */
  Expiration: Date | undefined;
}

/**
 * @public
 */
export interface CreateSessionOutput {
  /**
   * The server-side encryption algorithm used when you store objects in the directory bucket.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If you specify `x-amz-server-side-encryption` with `aws:kms`, this header indicates the ID of the KMS symmetric encryption customer managed key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future `GetObject` operations on this object.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Indicates whether to use an S3 Bucket Key for server-side encryption with KMS keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * The established temporary security credentials for the created session.
   *
   * @public
   */
  Credentials: SessionCredentials | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * Specifies the mode of the session that will be created, either `ReadWrite` or `ReadOnly`. If no session mode is specified, the default behavior attempts to create a session with the maximum allowable privilege. It will first attempt to create a `ReadWrite` session, and if that is not allowed by permissions, it will attempt to create a `ReadOnly` session. If neither session type is allowed, the request will return an Access Denied error. A `ReadWrite` session is capable of executing all the Zonal endpoint API operations on a directory bucket. A `ReadOnly` session is constrained to execute the following Zonal endpoint API operations: `GetObject`, `HeadObject`, `ListObjectsV2`, `GetObjectAttributes`, `ListParts`, and `ListMultipartUploads`.
   *
   * @public
   */
  SessionMode?: SessionMode | undefined;

  /**
   * The name of the bucket that you create a session for.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The server-side encryption algorithm to use when you store objects in the directory bucket.
   *
   * For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). By default, Amazon S3 encrypts data with SSE-S3. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html) in the *Amazon S3 User Guide*.
   *
   * **S3 access points for Amazon FSx** - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If you specify `x-amz-server-side-encryption` with `aws:kms`, you must specify the `x-amz-server-side-encryption-aws-kms-key-id` header with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP `400 Bad Request` error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Also, if the KMS key doesn't exist in the same account that't issuing the command, you must use the full Key ARN not the Key ID.
   *
   * Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future `GetObject` operations on this object.
   *
   * **General purpose buckets** - This value must be explicitly added during `CopyObject` operations if you want an additional encryption context for your object. For more information, see [Encryption context](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context) in the *Amazon S3 User Guide*.
   *
   * **Directory buckets** - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS).
   *
   * S3 Bucket Keys are always enabled for `GET` and `PUT` operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * Specifies the bucket being deleted.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket from which an analytics configuration is deleted.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID that identifies the analytics configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketCorsRequest {
  /**
   * Specifies the bucket whose `cors` configuration is being deleted.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketEncryptionRequest {
  /**
   * The name of the bucket containing the server-side encryption configuration to delete.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket containing the inventory configuration to delete.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the inventory configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketLifecycleRequest {
  /**
   * The bucket name of the lifecycle to delete.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketMetadataConfigurationRequest {
  /**
   * The general purpose bucket that you want to remove the metadata configuration from.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The expected bucket owner of the general purpose bucket that you want to remove the metadata table configuration from.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketMetadataTableConfigurationRequest {
  /**
   * The general purpose bucket that you want to remove the metadata table configuration from.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The expected bucket owner of the general purpose bucket that you want to remove the metadata table configuration from.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket containing the metrics configuration to delete.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketOwnershipControlsRequest {
  /**
   * The Amazon S3 bucket whose `OwnershipControls` you want to delete.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketPolicyRequest {
  /**
   * The bucket name.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketReplicationRequest {
  /**
   * The bucket name.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketTaggingRequest {
  /**
   * The bucket that has the tag set to be removed.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketWebsiteRequest {
  /**
   * The bucket name for which you want to remove the website configuration.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectOutput {
  /**
   * Indicates whether the specified object version that was permanently deleted was (true) or was not (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or not (false) the current version of the object is a delete marker. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * Returns the version ID of the delete marker created as a result of the DELETE operation.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * The bucket name of the bucket containing the object.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Key name of the object to delete.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  MFA?: string | undefined;

  /**
   * Version ID used to reference a specific version of the object.
   *
   * > **Note:** For directory buckets in this API operation, only the `null` value of the version ID is supported.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation. To use this header, you must have the `s3:BypassGovernanceRetention` permission.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Deletes the object if the ETag (entity tag) value provided during the delete operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a `412 Precondition Failed` error.
   *
   * Expects the ETag value as a string. `If-Match` does accept a string value of an '*' (asterisk) character to denote a match of any ETag.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * If present, the object is deleted only if its modification times matches the provided `Timestamp`. If the `Timestamp` values do not match, the operation returns a `412 Precondition Failed` error. If the `Timestamp` matches or if the object doesn’t exist, the operation returns a `204 Success (No Content)` response.
   *
   * > **Note:** This functionality is only supported for directory buckets.
   *
   * @public
   */
  IfMatchLastModifiedTime?: Date | undefined;

  /**
   * If present, the object is deleted only if its size matches the provided size in bytes. If the `Size` value does not match, the operation returns a `412 Precondition Failed` error. If the `Size` matches or if the object doesn’t exist, the operation returns a `204 Success (No Content)` response.
   *
   * > **Note:** This functionality is only supported for directory buckets.
   *
   * > **Important:** You can use the `If-Match`, `x-amz-if-match-last-modified-time` and `x-amz-if-match-size` conditional headers in conjunction with each-other or individually.
   *
   * @public
   */
  IfMatchSize?: number | undefined;
}

/**
 * @public
 */
export interface DeleteObjectAnnotationOutput {
  /**
   * The version ID of the object that the annotation was deleted from.
   *
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface DeleteObjectAnnotationRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The name of the annotation to delete. Annotation names are UTF-8 encoded and cannot start with `aws` or `s3` (case-insensitive).
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512 bytes.
   *
   * @public
   */
  AnnotationName: string | undefined;

  /**
   * The version ID of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * If specified, the operation only succeeds if the object's ETag matches the provided value.
   *
   * @public
   */
  ObjectIfMatch?: string | undefined;
}

/**
 * Information about the deleted object.
 *
 * @public
 */
export interface DeletedObject {
  /**
   * The name of the deleted object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The version ID of the deleted object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Indicates whether the specified object version that was permanently deleted was (true) or was not (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or not (false) the current version of the object is a delete marker. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * The version ID of the delete marker created as a result of the DELETE operation. If you delete a specific object version, the value returned by this header is the version ID of the object version deleted.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DeleteMarkerVersionId?: string | undefined;
}

/**
 * > **Note:** For information about using the Amazon S3 API—including error handling—see the [Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/Welcome.html).
 *
 * Container for all error elements.
 *
 * @public
 */
export interface _Error {
  /**
   * The error key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The version ID of the error.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The error code is a string that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type. The following is a list of Amazon S3 error codes. For more information, see [Error responses](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html).
   *
   * - - *Code:* AccessDenied
   *   - *Description:* Access Denied
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* AccountProblem
   *   - *Description:* There is a problem with your Amazon Web Services account that prevents the action from completing successfully. Contact Amazon Web Services Support for further assistance.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* AllAccessDisabled
   *   - *Description:* All access to this Amazon S3 resource has been disabled. Contact Amazon Web Services Support for further assistance.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* AmbiguousGrantByEmailAddress
   *   - *Description:* The email address you provided is associated with more than one account.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* AuthorizationHeaderMalformed
   *   - *Description:* The authorization header you provided is invalid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *HTTP Status Code:* N/A
   * - - *Code:* BadDigest
   *   - *Description:* The Content-MD5 you specified did not match what we received.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* BucketAlreadyExists
   *   - *Description:* The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.
   *   - *HTTP Status Code:* 409 Conflict
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* BucketAlreadyOwnedByYou
   *   - *Description:* The bucket you tried to create already exists, and you own it. Amazon S3 returns this error in all Amazon Web Services Regions except in the North Virginia Region. For legacy compatibility, if you re-create an existing bucket that you already own in the North Virginia Region, Amazon S3 returns 200 OK and resets the bucket access control lists (ACLs).
   *   - *Code:* 409 Conflict (in all Regions except the North Virginia Region)
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* BucketNotEmpty
   *   - *Description:* The bucket you tried to delete is not empty.
   *   - *HTTP Status Code:* 409 Conflict
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* CredentialsNotSupported
   *   - *Description:* This request does not support credentials.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* CrossLocationLoggingProhibited
   *   - *Description:* Cross-location logging not allowed. Buckets in one geographic location cannot log information to a bucket in another location.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* EntityTooSmall
   *   - *Description:* Your proposed upload is smaller than the minimum allowed object size.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* EntityTooLarge
   *   - *Description:* Your proposed upload exceeds the maximum allowed object size.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* ExpiredToken
   *   - *Description:* The provided token has expired.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* IllegalVersioningConfigurationException
   *   - *Description:* Indicates that the versioning configuration specified in the request is invalid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* IncompleteBody
   *   - *Description:* You did not provide the number of bytes specified by the Content-Length HTTP header
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* IncorrectNumberOfFilesInPostRequest
   *   - *Description:* POST requires exactly one file upload per request.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InlineDataTooLarge
   *   - *Description:* Inline data exceeds the maximum allowed size.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InternalError
   *   - *Description:* We encountered an internal error. Please try again.
   *   - *HTTP Status Code:* 500 Internal Server Error
   *   - *SOAP Fault Code Prefix:* Server
   * - - *Code:* InvalidAccessKeyId
   *   - *Description:* The Amazon Web Services access key ID you provided does not exist in our records.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidAddressingHeader
   *   - *Description:* You must specify the Anonymous role.
   *   - *HTTP Status Code:* N/A
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidArgument
   *   - *Description:* Invalid Argument
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidBucketName
   *   - *Description:* The specified bucket is not valid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidBucketState
   *   - *Description:* The request is not valid with the current state of the bucket.
   *   - *HTTP Status Code:* 409 Conflict
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidDigest
   *   - *Description:* The Content-MD5 you specified is not valid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidEncryptionAlgorithmError
   *   - *Description:* The encryption request you specified is not valid. The valid value is AES256.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidLocationConstraint
   *   - *Description:* The specified location constraint is not valid. For more information about Regions, see [How to Select a Region for Your Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro).
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidObjectState
   *   - *Description:* The action is not valid for the current state of the object.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidPart
   *   - *Description:* One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidPartOrder
   *   - *Description:* The list of parts was not in ascending order. Parts list must be specified in order by part number.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidPayer
   *   - *Description:* All access to this object has been disabled. Please contact Amazon Web Services Support for further assistance.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidPolicyDocument
   *   - *Description:* The content of the form does not meet the conditions specified in the policy document.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidRange
   *   - *Description:* The requested range cannot be satisfied.
   *   - *HTTP Status Code:* 416 Requested Range Not Satisfiable
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidRequest
   *   - *Description:* Please use `AWS4-HMAC-SHA256`.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* SOAP requests must be made over an HTTPS connection.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Acceleration is not supported for buckets with non-DNS compliant names.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Acceleration is not supported for buckets with periods (.) in their names.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Accelerate endpoint only supports virtual style requests.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Accelerate is not configured on this bucket.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Accelerate is disabled on this bucket.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Acceleration is not supported on this bucket. Contact Amazon Web Services Support for more information.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidRequest
   *   - *Description:* Amazon S3 Transfer Acceleration cannot be enabled on this bucket. Contact Amazon Web Services Support for more information.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *Code:* N/A
   * - - *Code:* InvalidSecurity
   *   - *Description:* The provided security credentials are not valid.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidSOAPRequest
   *   - *Description:* The SOAP request body is invalid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidStorageClass
   *   - *Description:* The storage class you specified is not valid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidTargetBucketForLogging
   *   - *Description:* The target bucket for logging does not exist, is not owned by you, or does not have the appropriate grants for the log-delivery group.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidToken
   *   - *Description:* The provided token is malformed or otherwise invalid.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* InvalidURI
   *   - *Description:* Couldn't parse the specified URI.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* KeyTooLongError
   *   - *Description:* Your key is too long.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MalformedACLError
   *   - *Description:* The XML you provided was not well-formed or did not validate against our published schema.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MalformedPOSTRequest
   *   - *Description:* The body of your POST request is not well-formed multipart/form-data.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MalformedXML
   *   - *Description:* This happens when the user sends malformed XML (XML that doesn't conform to the published XSD) for the configuration. The error message is, "The XML you provided was not well-formed or did not validate against our published schema."
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MaxMessageLengthExceeded
   *   - *Description:* Your request was too big.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MaxPostPreDataLengthExceededError
   *   - *Description:* Your POST request fields preceding the upload file were too large.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MetadataTooLarge
   *   - *Description:* Your metadata headers exceed the maximum allowed metadata size.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MethodNotAllowed
   *   - *Description:* The specified method is not allowed against this resource.
   *   - *HTTP Status Code:* 405 Method Not Allowed
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MissingAttachment
   *   - *Description:* A SOAP attachment was expected, but none were found.
   *   - *HTTP Status Code:* N/A
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MissingContentLength
   *   - *Description:* You must provide the Content-Length HTTP header.
   *   - *HTTP Status Code:* 411 Length Required
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MissingRequestBodyError
   *   - *Description:* This happens when the user sends an empty XML document as a request. The error message is, "Request body is empty."
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MissingSecurityElement
   *   - *Description:* The SOAP 1.1 request is missing a security element.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* MissingSecurityHeader
   *   - *Description:* Your request is missing a required header.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoLoggingStatusForKey
   *   - *Description:* There is no such thing as a logging status subresource for a key.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchBucket
   *   - *Description:* The specified bucket does not exist.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchBucketPolicy
   *   - *Description:* The specified bucket does not have a bucket policy.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchKey
   *   - *Description:* The specified key does not exist.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchLifecycleConfiguration
   *   - *Description:* The lifecycle configuration does not exist.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchUpload
   *   - *Description:* The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NoSuchVersion
   *   - *Description:* Indicates that the version ID specified in the request does not match an existing version.
   *   - *HTTP Status Code:* 404 Not Found
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* NotImplemented
   *   - *Description:* A header you provided implies functionality that is not implemented.
   *   - *HTTP Status Code:* 501 Not Implemented
   *   - *SOAP Fault Code Prefix:* Server
   * - - *Code:* NotSignedUp
   *   - *Description:* Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: [Amazon S3](http://aws.amazon.com/s3)
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* OperationAborted
   *   - *Description:* A conflicting conditional action is currently in progress against this resource. Try again.
   *   - *HTTP Status Code:* 409 Conflict
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* PermanentRedirect
   *   - *Description:* The bucket you are attempting to access must be addressed using the specified endpoint. Send all future requests to this endpoint.
   *   - *HTTP Status Code:* 301 Moved Permanently
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* PreconditionFailed
   *   - *Description:* At least one of the preconditions you specified did not hold.
   *   - *HTTP Status Code:* 412 Precondition Failed
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* Redirect
   *   - *Description:* Temporary redirect.
   *   - *HTTP Status Code:* 307 Moved Temporarily
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* RestoreAlreadyInProgress
   *   - *Description:* Object restore is already in progress.
   *   - *HTTP Status Code:* 409 Conflict
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* RequestIsNotMultiPartContent
   *   - *Description:* Bucket POST must be of the enclosure-type multipart/form-data.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* RequestTimeout
   *   - *Description:* Your socket connection to the server was not read from or written to within the timeout period.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* RequestTimeTooSkewed
   *   - *Description:* The difference between the request time and the server's time is too large.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* RequestTorrentOfBucketError
   *   - *Description:* Requesting the torrent file of a bucket is not permitted.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* SignatureDoesNotMatch
   *   - *Description:* The request signature we calculated does not match the signature you provided. Check your Amazon Web Services secret access key and signing method. For more information, see [REST Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html) and [SOAP Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html) for details.
   *   - *HTTP Status Code:* 403 Forbidden
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* ServiceUnavailable
   *   - *Description:* Service is unable to handle request.
   *   - *HTTP Status Code:* 503 Service Unavailable
   *   - *SOAP Fault Code Prefix:* Server
   * - - *Code:* SlowDown
   *   - *Description:* Reduce your request rate.
   *   - *HTTP Status Code:* 503 Slow Down
   *   - *SOAP Fault Code Prefix:* Server
   * - - *Code:* TemporaryRedirect
   *   - *Description:* You are being redirected to the bucket while DNS updates.
   *   - *HTTP Status Code:* 307 Moved Temporarily
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* TokenRefreshRequired
   *   - *Description:* The provided token must be refreshed.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* TooManyBuckets
   *   - *Description:* You have attempted to create more buckets than allowed.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* UnexpectedContent
   *   - *Description:* This request does not support content.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* UnresolvableGrantByEmailAddress
   *   - *Description:* The email address you provided does not match any account on record.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   * - - *Code:* UserKeyMustBeSpecified
   *   - *Description:* The bucket POST must contain the specified field name. If it is specified, check the order of the fields.
   *   - *HTTP Status Code:* 400 Bad Request
   *   - *SOAP Fault Code Prefix:* Client
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle. Sophisticated programs with more exhaustive error handling and proper internationalization are more likely to ignore the error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOutput {
  /**
   * Container element for a successful delete. It identifies the object that was successfully deleted.
   *
   * @public
   */
  Deleted?: DeletedObject[] | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * Container for a failed delete action that describes the object that Amazon S3 attempted to delete and the error it encountered.
   *
   * @public
   */
  Errors?: _Error[] | undefined;
}

/**
 * Object Identifier is unique value to identify objects.
 *
 * @public
 */
export interface ObjectIdentifier {
  /**
   * Key name of the object.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Version ID for the specific version of the object to delete.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * An entity tag (ETag) is an identifier assigned by a web server to a specific version of a resource found at a URL. This header field makes the request method conditional on `ETags`.
   *
   * > **Note:** Entity tags (ETags) for S3 Express One Zone are random alphanumeric strings unique to the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * If present, the objects are deleted only if its modification times matches the provided `Timestamp`.
   *
   * > **Note:** This functionality is only supported for directory buckets.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * If present, the objects are deleted only if its size matches the provided size in bytes.
   *
   * > **Note:** This functionality is only supported for directory buckets.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * Container for the objects to delete.
 *
 * @public
 */
export interface Delete {
  /**
   * The object to delete.
   *
   * > **Note:** **Directory buckets** - For directory buckets, an object that's composed entirely of whitespace characters is not supported by the `DeleteObjects` API operation. The request will receive a `400 Bad Request` error and none of the objects in the request will be deleted.
   *
   * @public
   */
  Objects: ObjectIdentifier[] | undefined;

  /**
   * Element to enable quiet mode for the request. When you add this element, you must set its value to `true`.
   *
   * @public
   */
  Quiet?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsRequest {
  /**
   * The bucket name containing the objects to delete.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Container for the request.
   *
   * @public
   */
  Delete: Delete | undefined;

  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.
   *
   * When performing the `DeleteObjects` operation on an MFA delete enabled bucket, which attempts to delete the specified versioned objects, you must include an MFA token. If you don't provide an MFA token, the entire request will fail, even if there are non-versioned objects that you are trying to delete. If you provide an invalid token, whether there are versioned object keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see [MFA Delete](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  MFA?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the `s3:BypassGovernanceRetention` permission.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum-algorithm` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`.
   *
   * For the `x-amz-checksum-algorithm` header, replace `algorithm` with the supported algorithm from the following list:
   *
   * - `CRC32`
   * - `CRC32C`
   * - `CRC64NVME`
   * - `MD5`
   * - `SHA1`
   * - `SHA256`
   * - `SHA512`
   * - `XXHASH3`
   * - `XXHASH64`
   * - `XXHASH128`
   *
   * For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If the individual checksum value you provide through `x-amz-checksum-algorithm` doesn't match the checksum algorithm you set through `x-amz-sdk-checksum-algorithm`, Amazon S3 fails the request with a `BadDigest` error.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface DeleteObjectTaggingOutput {
  /**
   * The versionId of the object the tag-set was removed from.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectTaggingRequest {
  /**
   * The bucket name containing the objects from which to remove the tags.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key that identifies the object in the bucket from which to remove all tags.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The versionId of the object that the tag-set will be removed from.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * The Amazon S3 bucket whose `PublicAccessBlock` configuration you want to delete.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketAbacOutput {
  /**
   * The ABAC status of the general purpose bucket.
   *
   * @public
   */
  AbacStatus?: AbacStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketAbacRequest {
  /**
   * The name of the general purpose bucket.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon Web Services account ID of the general purpose bucket's owner.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketAccelerateConfigurationOutput {
  /**
   * The accelerate configuration of the bucket.
   *
   * @public
   */
  Status?: BucketAccelerateStatus | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface GetBucketAccelerateConfigurationRequest {
  /**
   * The name of the bucket for which the accelerate configuration is retrieved.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;
}

/**
 * @public
 */
export interface GetBucketAclOutput {
  /**
   * Container for the bucket owner's ID.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * A list of grants.
   *
   * @public
   */
  Grants?: Grant[] | undefined;
}

/**
 * @public
 */
export interface GetBucketAclRequest {
  /**
   * Specifies the S3 bucket whose ACL is being requested.
   *
   * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
   *
   * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.
 *
 * @public
 */
export interface AnalyticsAndOperator {
  /**
   * The prefix to use when evaluating an AND predicate: The prefix that an object must have to be included in the metrics results.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The list of tags to use when evaluating an AND predicate.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
 *
 * @public
 */
export type AnalyticsFilter =
  | AnalyticsFilter.AndMember
  | AnalyticsFilter.PrefixMember
  | AnalyticsFilter.TagMember
  | AnalyticsFilter.$UnknownMember;

/**
 * @public
 */
export namespace AnalyticsFilter {
  /**
   * The prefix to use when evaluating an analytics filter.
   *
   * @public
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * The tag to use when evaluating an analytics filter.
   *
   * @public
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.
   *
   * @public
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: AnalyticsAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: AnalyticsAndOperator) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about where to publish the analytics results.
 *
 * @public
 */
export interface AnalyticsS3BucketDestination {
  /**
   * Specifies the file format used when exporting data to Amazon S3.
   *
   * @public
   */
  Format: AnalyticsS3ExportFileFormat | undefined;

  /**
   * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
   *
   * > **Note:** Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
   *
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket to which data is exported.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix to use when exporting data. The prefix is prepended to all results.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Where to publish the analytics results.
 *
 * @public
 */
export interface AnalyticsExportDestination {
  /**
   * A destination signifying output to an S3 bucket.
   *
   * @public
   */
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}

/**
 * Container for data related to the storage class analysis for an Amazon S3 bucket for export.
 *
 * @public
 */
export interface StorageClassAnalysisDataExport {
  /**
   * The version of the output schema to use when exporting data. Must be `V_1`.
   *
   * @public
   */
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | undefined;

  /**
   * The place to store the data for an analysis.
   *
   * @public
   */
  Destination: AnalyticsExportDestination | undefined;
}

/**
 * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
 *
 * @public
 */
export interface StorageClassAnalysis {
  /**
   * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
   *
   * @public
   */
  DataExport?: StorageClassAnalysisDataExport | undefined;
}

/**
 * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
 *
 * @public
 */
export interface AnalyticsConfiguration {
  /**
   * The ID that identifies the analytics configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
   *
   * @public
   */
  Filter?: AnalyticsFilter | undefined;

  /**
   * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
   *
   * @public
   */
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}

/**
 * @public
 */
export interface GetBucketAnalyticsConfigurationOutput {
  /**
   * The configuration and any analyses for the analytics filter.
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket from which an analytics configuration is retrieved.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID that identifies the analytics configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies a cross-origin access rule for an Amazon S3 bucket.
 *
 * @public
 */
export interface CORSRule {
  /**
   * Unique identifier for the rule. The value cannot be longer than 255 characters.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * Headers that are specified in the `Access-Control-Request-Headers` header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
   *
   * @public
   */
  AllowedHeaders?: string[] | undefined;

  /**
   * An HTTP method that you allow the origin to execute. Valid values are `GET`, `PUT`, `HEAD`, `POST`, and `DELETE`.
   *
   * @public
   */
  AllowedMethods: string[] | undefined;

  /**
   * One or more origins you want customers to be able to access the bucket from.
   *
   * @public
   */
  AllowedOrigins: string[] | undefined;

  /**
   * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * The time in seconds that your browser is to cache the preflight response for the specified resource.
   *
   * @public
   */
  MaxAgeSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetBucketCorsOutput {
  /**
   * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
   *
   * @public
   */
  CORSRules?: CORSRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketCorsRequest {
  /**
   * The bucket name for which to get the cors configuration.
   *
   * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
   *
   * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see [PutBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html).
 *
 * > **Note:**
 * >
 * > - **General purpose buckets** - If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an Amazon Web Services KMS key (`aws/s3`) in your Amazon Web Services account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS.
 * > - **Directory buckets** - Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported.
 * > - **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS.
 *
 * @public
 */
export interface ServerSideEncryptionByDefault {
  /**
   * Server-side encryption algorithm to use for the default encryption.
   *
   * > **Note:** For directory buckets, there are only two supported values for server-side encryption: `AES256` and `aws:kms`.
   *
   * @public
   */
  SSEAlgorithm: ServerSideEncryption | undefined;

  /**
   * Amazon Web Services Key Management Service (KMS) customer managed key ID to use for the default encryption.
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms` or `aws:kms:dsse`.
   * > - **Directory buckets** - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms`.
   *
   * You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key Alias: `alias/alias-name`
   *
   * If you are using encryption with cross-account or Amazon Web Services service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log.
   * > - **Directory buckets** - When you specify an [KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
   *
   * > **Important:** Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KMSMasterKeyID?: string | undefined;
}

/**
 * A bucket-level setting for Amazon S3 general purpose buckets used to prevent the upload of new objects encrypted with the specified server-side encryption type. For example, blocking an encryption type will block `PutObject`, `CopyObject`, `PostObject`, multipart upload, and replication requests to the bucket for objects with the specified encryption type. However, you can continue to read and list any pre-existing objects already encrypted with the specified encryption type. For more information, see [Blocking or unblocking SSE-C for a general purpose bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/blocking-unblocking-s3-c-encryption-gpb.html).
 *
 * This data type is used with the following actions:
 *
 * - [PutBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html)
 * - [GetBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html)
 * - [DeleteBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html)
 *
 * - **Permissions**
 *
 *   You must have the `s3:PutEncryptionConfiguration` permission to block or unblock an encryption type for a bucket.
 *
 *   You must have the `s3:GetEncryptionConfiguration` permission to view a bucket's encryption type.
 *
 * @public
 */
export interface BlockedEncryptionTypes {
  /**
   * The object encryption type that you want to block or unblock for an Amazon S3 general purpose bucket.
   *
   * > **Note:** Currently, this parameter only supports blocking or unblocking server side encryption with customer-provided keys (SSE-C). For more information about SSE-C, see [Using server-side encryption with customer-provided keys (SSE-C)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html).
   *
   * @public
   */
  EncryptionType?: EncryptionType[] | undefined;
}

/**
 * Specifies the default server-side encryption configuration.
 *
 * > **Note:**
 * >
 * > - **General purpose buckets** - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
 * > - **Directory buckets** - When you specify an [KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
 *
 * @public
 */
export interface ServerSideEncryptionRule {
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   *
   * @public
   */
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the `BucketKeyEnabled` element to `true` causes Amazon S3 to use an S3 Bucket Key.
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - By default, S3 Bucket Key is not enabled. For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide*.
   * > - **Directory buckets** - S3 Bucket Keys are always enabled for `GET` and `PUT` operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * A bucket-level setting for Amazon S3 general purpose buckets used to prevent the upload of new objects encrypted with the specified server-side encryption type. For example, blocking an encryption type will block `PutObject`, `CopyObject`, `PostObject`, multipart upload, and replication requests to the bucket for objects with the specified encryption type. However, you can continue to read and list any pre-existing objects already encrypted with the specified encryption type. For more information, see [Blocking or unblocking SSE-C for a general purpose bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/blocking-unblocking-s3-c-encryption-gpb.html).
   *
   * > **Note:** Currently, this parameter only supports blocking or unblocking server-side encryption with customer-provided keys (SSE-C). For more information about SSE-C, see [Using server-side encryption with customer-provided keys (SSE-C)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html).
   *
   * @public
   */
  BlockedEncryptionTypes?: BlockedEncryptionTypes | undefined;
}

/**
 * Specifies the default server-side-encryption configuration.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * Container for information about a particular server-side encryption configuration rule.
   *
   * @public
   */
  Rules: ServerSideEncryptionRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketEncryptionOutput {
  /**
   * Specifies the default server-side-encryption configuration.
   *
   * @public
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketEncryptionRequest {
  /**
   * The name of the bucket from which the server-side encryption configuration is retrieved.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * A container for specifying S3 Intelligent-Tiering filters. The filters determine the subset of objects to which the rule applies.
 *
 * @public
 */
export interface IntelligentTieringAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects to which the configuration applies.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * All of these tags must exist in the object's tag set in order for the configuration to apply.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The `Filter` is used to identify objects that the S3 Intelligent-Tiering configuration applies to.
 *
 * @public
 */
export interface IntelligentTieringFilter {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A container of a key value name pair.
   *
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
   *
   * @public
   */
  And?: IntelligentTieringAndOperator | undefined;
}

/**
 * The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.
 *
 * @public
 */
export interface Tiering {
  /**
   * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
   *
   * @public
   */
  Days: number | undefined;

  /**
   * S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
   *
   * @public
   */
  AccessTier: IntelligentTieringAccessTier | undefined;
}

/**
 * Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
 *
 * For information about the S3 Intelligent-Tiering storage class, see [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access).
 *
 * @public
 */
export interface IntelligentTieringConfiguration {
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies a bucket filter. The configuration only includes objects that meet the filter's criteria.
   *
   * @public
   */
  Filter?: IntelligentTieringFilter | undefined;

  /**
   * Specifies the status of the configuration.
   *
   * @public
   */
  Status: IntelligentTieringStatus | undefined;

  /**
   * Specifies the S3 Intelligent-Tiering storage class tier of the configuration.
   *
   * @public
   */
  Tierings: Tiering[] | undefined;
}

/**
 * @public
 */
export interface GetBucketIntelligentTieringConfigurationOutput {
  /**
   * Container for S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies the use of SSE-KMS to encrypt delivered inventory reports.
 *
 * @public
 */
export interface SSEKMS {
  /**
   * Specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key to use for encrypting inventory reports.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * Specifies the use of SSE-S3 to encrypt delivered inventory reports.
 *
 * @public
 */
export interface SSES3 {}

/**
 * Contains the type of server-side encryption used to encrypt the S3 Inventory results.
 *
 * @public
 */
export interface InventoryEncryption {
  /**
   * Specifies the use of SSE-S3 to encrypt delivered inventory reports.
   *
   * @public
   */
  SSES3?: SSES3 | undefined;

  /**
   * Specifies the use of SSE-KMS to encrypt delivered inventory reports.
   *
   * @public
   */
  SSEKMS?: SSEKMS | undefined;
}

/**
 * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where S3 Inventory results are published.
 *
 * @public
 */
export interface InventoryS3BucketDestination {
  /**
   * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
   *
   * > **Note:** Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket where inventory results will be published.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Specifies the output format of the inventory results.
   *
   * @public
   */
  Format: InventoryFormat | undefined;

  /**
   * The prefix that is prepended to all inventory results.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Contains the type of server-side encryption used to encrypt the inventory results.
   *
   * @public
   */
  Encryption?: InventoryEncryption | undefined;
}

/**
 * Specifies the S3 Inventory configuration for an Amazon S3 bucket.
 *
 * @public
 */
export interface InventoryDestination {
  /**
   * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
   *
   * @public
   */
  S3BucketDestination: InventoryS3BucketDestination | undefined;
}

/**
 * Specifies an S3 Inventory filter. The inventory only includes objects that meet the filter's criteria.
 *
 * @public
 */
export interface InventoryFilter {
  /**
   * The prefix that an object must have to be included in the inventory results.
   *
   * @public
   */
  Prefix: string | undefined;
}

/**
 * Specifies the schedule for generating S3 Inventory results.
 *
 * @public
 */
export interface InventorySchedule {
  /**
   * Specifies how frequently inventory results are produced.
   *
   * @public
   */
  Frequency: InventoryFrequency | undefined;
}

/**
 * Specifies the S3 Inventory configuration for an Amazon S3 bucket. For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference*.
 *
 * @public
 */
export interface InventoryConfiguration {
  /**
   * Contains information about where to publish the inventory results.
   *
   * @public
   */
  Destination: InventoryDestination | undefined;

  /**
   * Specifies whether the inventory is enabled or disabled. If set to `True`, an inventory list is generated. If set to `False`, no inventory list is generated.
   *
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
   *
   * @public
   */
  Filter?: InventoryFilter | undefined;

  /**
   * The ID used to identify the inventory configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Object versions to include in the inventory list. If set to `All`, the list includes all the object versions, which adds the version-related fields `VersionId`, `IsLatest`, and `DeleteMarker` to the list. If set to `Current`, the list does not contain these version-related fields.
   *
   * @public
   */
  IncludedObjectVersions: InventoryIncludedObjectVersions | undefined;

  /**
   * Contains the optional fields that are included in the inventory results.
   *
   * > **Note:** The following optional fields are supported for directory buckets `Size | LastModifiedDate | StorageClass | ETag | IsMultipartUploaded | EncryptionStatus | BucketKeyStatus | ChecksumAlgorithm | LifecycleExpirationDate.` Throws MalformedXML error if unsupported optional field is provided.
   *
   * @public
   */
  OptionalFields?: InventoryOptionalField[] | undefined;

  /**
   * Specifies the schedule for generating inventory results.
   *
   * @public
   */
  Schedule: InventorySchedule | undefined;
}

/**
 * @public
 */
export interface GetBucketInventoryConfigurationOutput {
  /**
   * Specifies the inventory configuration.
   *
   * @public
   */
  InventoryConfiguration?: InventoryConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket containing the inventory configuration to retrieve.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the inventory configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Container for the expiration for the lifecycle of the object.
 *
 * For more information see, [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface LifecycleExpiration {
  /**
   * Indicates at what date the object is to be moved or deleted. The date value must conform to the ISO 8601 format. The time is always midnight UTC.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired; if set to false the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  ExpiredObjectDeleteMarker?: boolean | undefined;
}

/**
 * This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
 *
 * @public
 */
export interface LifecycleRuleAndOperator {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * All of these tags must exist in the object's tag set in order for the rule to apply.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Minimum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * Maximum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeLessThan?: number | undefined;
}

/**
 * The `Filter` is used to identify objects that a Lifecycle Rule applies to. A `Filter` can have exactly one of `Prefix`, `Tag`, `ObjectSizeGreaterThan`, `ObjectSizeLessThan`, or `And` specified. If the `Filter` element is left empty, the Lifecycle Rule applies to all objects in the bucket.
 *
 * @public
 */
export interface LifecycleRuleFilter {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * This tag must exist in the object's tag set in order for the rule to apply.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * Minimum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * Maximum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeLessThan?: number | undefined;

  /**
   * This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
   *
   * @public
   */
  And?: LifecycleRuleAndOperator | undefined;
}

/**
 * Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
 *
 * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
 *
 * @public
 */
export interface NoncurrentVersionExpiration {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. The value must be a non-zero positive integer. For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * Specifies how many noncurrent versions Amazon S3 will retain. You can specify up to 100 noncurrent versions to retain. Amazon S3 will permanently delete any additional noncurrent versions beyond the specified number to retain. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  NewerNoncurrentVersions?: number | undefined;
}

/**
 * Container for the transition rule that describes when noncurrent objects transition to the `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`, `GLACIER`, or `DEEP_ARCHIVE` storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`, `GLACIER`, or `DEEP_ARCHIVE` storage class at a specific period in the object's lifetime.
 *
 * @public
 */
export interface NoncurrentVersionTransition {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * The class of storage used to store the object.
   *
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;

  /**
   * Specifies how many noncurrent versions Amazon S3 will retain in the same storage class before transitioning objects. You can specify up to 100 noncurrent versions to retain. Amazon S3 will transition any additional noncurrent versions beyond the specified number to retain. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  NewerNoncurrentVersions?: number | undefined;
}

/**
 * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see [Transitioning Objects Using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface Transition {
  /**
   * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value can be `0` or any positive integer. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The storage class to which you want the object to transition.
   *
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;
}

/**
 * A lifecycle rule for individual objects in an Amazon S3 bucket.
 *
 * For more information see, [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface LifecycleRule {
  /**
   * Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.
   *
   * @public
   */
  Expiration?: LifecycleExpiration | undefined;

  /**
   * Unique identifier for the rule. The value cannot be longer than 255 characters.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * The general purpose bucket prefix that identifies one or more objects to which the rule applies. We recommend using `Filter` instead of `Prefix` for new PUTs. Previous configurations where a prefix is defined will continue to operate as before.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @deprecated deprecated.
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The `Filter` is used to identify objects that a Lifecycle Rule applies to. A `Filter` must have exactly one of `Prefix`, `Tag`, `ObjectSizeGreaterThan`, `ObjectSizeLessThan`, or `And` specified. `Filter` is required if the `LifecycleRule` does not contain a `Prefix` element.
   *
   * For more information about `Tag` filters, see [Adding filters to Lifecycle rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-filters.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** `Tag` filters are not supported for directory buckets.
   *
   * @public
   */
  Filter?: LifecycleRuleFilter | undefined;

  /**
   * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
   *
   * @public
   */
  Status: ExpirationStatus | undefined;

  /**
   * Specifies when an Amazon S3 object transitions to a specified storage class.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  Transitions?: Transition[] | undefined;

  /**
   * Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[] | undefined;

  /**
   * Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration | undefined;

  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationOutput {
  /**
   * Container for a lifecycle rule.
   *
   * @public
   */
  Rules?: LifecycleRule[] | undefined;

  /**
   * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.
   *
   * - `all_storage_classes_128K` - Objects smaller than 128 KB will not transition to any storage class by default.
   * - `varies_by_storage_class` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.
   *
   * To customize the minimum object size for any transition you can add a filter that specifies a custom `ObjectSizeGreaterThan` or `ObjectSizeLessThan` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
   *
   * @public
   */
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * The name of the bucket for which to get the lifecycle information.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketLocationOutput {
  /**
   * Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported location constraints by Region, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).
   *
   * Buckets in Region `us-east-1` have a LocationConstraint of `null`. Buckets with a LocationConstraint of `EU` reside in `eu-west-1`.
   *
   * @public
   */
  LocationConstraint?: BucketLocationConstraint | undefined;
}

/**
 * @public
 */
export interface GetBucketLocationRequest {
  /**
   * The name of the bucket for which to get the location.
   *
   * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
   *
   * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Container for granting information.
 *
 * Buckets that use the bucket owner enforced setting for Object Ownership don't support target grants. For more information, see [Permissions server access log delivery](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface TargetGrant {
  /**
   * Container for the person being granted permissions.
   *
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * Logging permissions assigned to the grantee for the bucket.
   *
   * @public
   */
  Permission?: BucketLogsPermission | undefined;
}

/**
 * Amazon S3 keys for log objects are partitioned in the following format:
 *
 * `[DestinationPrefix][SourceAccountId]/[SourceRegion]/[SourceBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`
 *
 * PartitionedPrefix defaults to EventTime delivery when server access logs are delivered.
 *
 * @public
 */
export interface PartitionedPrefix {
  /**
   * Specifies the partition date source for the partitioned prefix. `PartitionDateSource` can be `EventTime` or `DeliveryTime`.
   *
   * For `DeliveryTime`, the time in the log file names corresponds to the delivery time for the log files.
   *
   * For `EventTime`, The logs delivered are for a specific day only. The year, month, and day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00 in the key.
   *
   * @public
   */
  PartitionDateSource?: PartitionDateSource | undefined;
}

/**
 * To use simple format for S3 keys for log objects, set SimplePrefix to an empty object.
 *
 * `[DestinationPrefix][YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`
 *
 * @public
 */
export interface SimplePrefix {}

/**
 * Amazon S3 key format for log objects. Only one format, PartitionedPrefix or SimplePrefix, is allowed.
 *
 * @public
 */
export interface TargetObjectKeyFormat {
  /**
   * To use the simple format for S3 keys for log objects. To specify SimplePrefix format, set SimplePrefix to \{\}.
   *
   * @public
   */
  SimplePrefix?: SimplePrefix | undefined;

  /**
   * Partitioned S3 key for log objects.
   *
   * @public
   */
  PartitionedPrefix?: PartitionedPrefix | undefined;
}

/**
 * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see [PUT Bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html) in the *Amazon S3 API Reference*.
 *
 * @public
 */
export interface LoggingEnabled {
  /**
   * Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs delivered to any bucket that you own, including the same bucket that is being logged. You can also configure multiple buckets to deliver their logs to the same target bucket. In this case, you should choose a different `TargetPrefix` for each source bucket so that the delivered log files can be distinguished by key.
   *
   * @public
   */
  TargetBucket: string | undefined;

  /**
   * Container for granting information.
   *
   * Buckets that use the bucket owner enforced setting for Object Ownership don't support target grants. For more information, see [Permissions for server access log delivery](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  TargetGrants?: TargetGrant[] | undefined;

  /**
   * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
   *
   * @public
   */
  TargetPrefix: string | undefined;

  /**
   * Amazon S3 key format for log objects.
   *
   * @public
   */
  TargetObjectKeyFormat?: TargetObjectKeyFormat | undefined;
}

/**
 * @public
 */
export interface GetBucketLoggingOutput {
  /**
   * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see [PUT Bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html) in the *Amazon S3 API Reference*.
   *
   * @public
   */
  LoggingEnabled?: LoggingEnabled | undefined;
}

/**
 * @public
 */
export interface GetBucketLoggingRequest {
  /**
   * The bucket name for which to get the logging information.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * If an S3 Metadata V1 `CreateBucketMetadataTableConfiguration` or V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * If the V1 `CreateBucketMetadataTableConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code. The possible error codes and error messages are as follows:
   *
   * - `AccessDeniedCreatingResources` - You don't have sufficient permissions to create the required resources. Make sure that you have `s3tables:CreateNamespace`, `s3tables:CreateTable`, `s3tables:GetTable` and `s3tables:PutTablePolicy` permissions, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `AccessDeniedWritingToTable` - Unable to write to the metadata table because of missing resource permissions. To fix the resource policy, Amazon S3 needs to create a new metadata table. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `DestinationTableNotFound` - The destination table doesn't exist. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `ServerInternalError` - An internal error has occurred. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `TableAlreadyExists` - The table that you specified already exists in the table bucket's namespace. Specify a different table name. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `TableBucketNotFound` - The table bucket that you specified doesn't exist in this Amazon Web Services Region and account. Create or choose a different table bucket. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   *
   * If the V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code. The possible error codes and error messages are as follows:
   *
   * - `AccessDeniedCreatingResources` - You don't have sufficient permissions to create the required resources. Make sure that you have `s3tables:CreateTableBucket`, `s3tables:CreateNamespace`, `s3tables:CreateTable`, `s3tables:GetTable`, `s3tables:PutTablePolicy`, `kms:DescribeKey`, and `s3tables:PutTableEncryption` permissions. Additionally, ensure that the KMS key used to encrypt the table still exists, is active and has a resource policy granting access to the S3 service principals '`maintenance.s3tables.amazonaws.com`' and '`metadata.s3.amazonaws.com`'. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `AccessDeniedWritingToTable` - Unable to write to the metadata table because of missing resource permissions. To fix the resource policy, Amazon S3 needs to create a new metadata table. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `DestinationTableNotFound` - The destination table doesn't exist. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `ServerInternalError` - An internal error has occurred. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `JournalTableAlreadyExists` - A journal table already exists in the Amazon Web Services managed table bucket's namespace. Delete the journal table, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `InventoryTableAlreadyExists` - An inventory table already exists in the Amazon Web Services managed table bucket's namespace. Delete the inventory table, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `JournalTableNotAvailable` - The journal table that the inventory table relies on has a `FAILED` status. An inventory table requires a journal table with an `ACTIVE` status. To create a new journal or inventory table, you must delete the metadata configuration for this bucket, along with any journal or inventory tables, and then create a new metadata configuration.
   * - `NoSuchBucket` - The specified general purpose bucket does not exist.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * If the V1 `CreateBucketMetadataTableConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error message. The possible error codes and error messages are as follows:
   *
   * - `AccessDeniedCreatingResources` - You don't have sufficient permissions to create the required resources. Make sure that you have `s3tables:CreateNamespace`, `s3tables:CreateTable`, `s3tables:GetTable` and `s3tables:PutTablePolicy` permissions, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `AccessDeniedWritingToTable` - Unable to write to the metadata table because of missing resource permissions. To fix the resource policy, Amazon S3 needs to create a new metadata table. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `DestinationTableNotFound` - The destination table doesn't exist. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `ServerInternalError` - An internal error has occurred. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `TableAlreadyExists` - The table that you specified already exists in the table bucket's namespace. Specify a different table name. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `TableBucketNotFound` - The table bucket that you specified doesn't exist in this Amazon Web Services Region and account. Create or choose a different table bucket. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   *
   * If the V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code. The possible error codes and error messages are as follows:
   *
   * - `AccessDeniedCreatingResources` - You don't have sufficient permissions to create the required resources. Make sure that you have `s3tables:CreateTableBucket`, `s3tables:CreateNamespace`, `s3tables:CreateTable`, `s3tables:GetTable`, `s3tables:PutTablePolicy`, `kms:DescribeKey`, and `s3tables:PutTableEncryption` permissions. Additionally, ensure that the KMS key used to encrypt the table still exists, is active and has a resource policy granting access to the S3 service principals '`maintenance.s3tables.amazonaws.com`' and '`metadata.s3.amazonaws.com`'. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `AccessDeniedWritingToTable` - Unable to write to the metadata table because of missing resource permissions. To fix the resource policy, Amazon S3 needs to create a new metadata table. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `DestinationTableNotFound` - The destination table doesn't exist. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `ServerInternalError` - An internal error has occurred. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `JournalTableAlreadyExists` - A journal table already exists in the Amazon Web Services managed table bucket's namespace. Delete the journal table, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `InventoryTableAlreadyExists` - An inventory table already exists in the Amazon Web Services managed table bucket's namespace. Delete the inventory table, and then try again. To create a new metadata table, you must delete the metadata configuration for this bucket, and then create a new metadata configuration.
   * - `JournalTableNotAvailable` - The journal table that the inventory table relies on has a `FAILED` status. An inventory table requires a journal table with an `ACTIVE` status. To create a new journal or inventory table, you must delete the metadata configuration for this bucket, along with any journal or inventory tables, and then create a new metadata configuration.
   * - `NoSuchBucket` - The specified general purpose bucket does not exist.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Contains the current state of the annotation table associated with a bucket's Amazon S3 Metadata configuration, including its provisioning status and identifiers.
 *
 * @public
 */
export interface AnnotationTableConfigurationResult {
  /**
   * The current configuration state of the annotation table.
   *
   * @public
   */
  ConfigurationState: AnnotationConfigurationState | undefined;

  /**
   * The provisioning status of the annotation table. Possible values: `CREATING`, `BACKFILLING`, `ACTIVE`, `FAILED`.
   *
   * @public
   */
  TableStatus?: string | undefined;

  /**
   * If an S3 Metadata V1 `CreateBucketMetadataTableConfiguration` or V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.
   *
   * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;

  /**
   * The name of the annotation table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The ARN of the annotation table.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the annotation table.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * The destination information for the S3 Metadata configuration.
 *
 * @public
 */
export interface DestinationResult {
  /**
   * The type of the table bucket where the metadata configuration is stored. The `aws` value indicates an Amazon Web Services managed table bucket, and the `customer` value indicates a customer-managed table bucket. V2 metadata configurations are stored in Amazon Web Services managed table buckets, and V1 metadata configurations are stored in customer-managed table buckets.
   *
   * @public
   */
  TableBucketType?: S3TablesBucketType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table bucket where the metadata configuration is stored.
   *
   * @public
   */
  TableBucketArn?: string | undefined;

  /**
   * The namespace in the table bucket where the metadata tables for a metadata configuration are stored.
   *
   * @public
   */
  TableNamespace?: string | undefined;
}

/**
 * The inventory table configuration for an S3 Metadata configuration.
 *
 * @public
 */
export interface InventoryTableConfigurationResult {
  /**
   * The configuration state of the inventory table, indicating whether the inventory table is enabled or disabled.
   *
   * @public
   */
  ConfigurationState: InventoryConfigurationState | undefined;

  /**
   * The status of the inventory table. The status values are:
   *
   * - `CREATING` - The inventory table is in the process of being created in the specified Amazon Web Services managed table bucket.
   * - `BACKFILLING` - The inventory table is in the process of being backfilled. When you enable the inventory table for your metadata configuration, the table goes through a process known as backfilling, during which Amazon S3 scans your general purpose bucket to retrieve the initial metadata for all objects in the bucket. Depending on the number of objects in your bucket, this process can take several hours. When the backfilling process is finished, the status of your inventory table changes from `BACKFILLING` to `ACTIVE`. After backfilling is completed, updates to your objects are reflected in the inventory table within one hour.
   * - `ACTIVE` - The inventory table has been created successfully, and records are being delivered to the table.
   * - `FAILED` - Amazon S3 is unable to create the inventory table, or Amazon S3 is unable to deliver records.
   *
   * @public
   */
  TableStatus?: string | undefined;

  /**
   * If an S3 Metadata V1 `CreateBucketMetadataTableConfiguration` or V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.
   *
   * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;

  /**
   * The name of the inventory table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the inventory table.
   *
   * @public
   */
  TableArn?: string | undefined;
}

/**
 * The journal table configuration for the S3 Metadata configuration.
 *
 * @public
 */
export interface JournalTableConfigurationResult {
  /**
   * The status of the journal table. The status values are:
   *
   * - `CREATING` - The journal table is in the process of being created in the specified table bucket.
   * - `ACTIVE` - The journal table has been created successfully, and records are being delivered to the table.
   * - `FAILED` - Amazon S3 is unable to create the journal table, or Amazon S3 is unable to deliver records.
   *
   * @public
   */
  TableStatus: string | undefined;

  /**
   * If an S3 Metadata V1 `CreateBucketMetadataTableConfiguration` or V2 `CreateBucketMetadataConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.
   *
   * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;

  /**
   * The name of the journal table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the journal table.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The journal table record expiration settings for the journal table.
   *
   * @public
   */
  RecordExpiration: RecordExpiration | undefined;
}

/**
 * The S3 Metadata configuration for a general purpose bucket.
 *
 * @public
 */
export interface MetadataConfigurationResult {
  /**
   * The destination settings for a metadata configuration.
   *
   * @public
   */
  DestinationResult: DestinationResult | undefined;

  /**
   * The journal table configuration for a metadata configuration.
   *
   * @public
   */
  JournalTableConfigurationResult?: JournalTableConfigurationResult | undefined;

  /**
   * The inventory table configuration for a metadata configuration.
   *
   * @public
   */
  InventoryTableConfigurationResult?: InventoryTableConfigurationResult | undefined;

  /**
   * The annotation table configuration result, if an annotation table is configured.
   *
   * @public
   */
  AnnotationTableConfigurationResult?: AnnotationTableConfigurationResult | undefined;
}

/**
 * The S3 Metadata configuration for a general purpose bucket.
 *
 * @public
 */
export interface GetBucketMetadataConfigurationResult {
  /**
   * The metadata configuration for a general purpose bucket.
   *
   * @public
   */
  MetadataConfigurationResult: MetadataConfigurationResult | undefined;
}

/**
 * @public
 */
export interface GetBucketMetadataConfigurationOutput {
  /**
   * The metadata configuration for the general purpose bucket.
   *
   * @public
   */
  GetBucketMetadataConfigurationResult?: GetBucketMetadataConfigurationResult | undefined;
}

/**
 * @public
 */
export interface GetBucketMetadataConfigurationRequest {
  /**
   * The general purpose bucket that corresponds to the metadata configuration that you want to retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The expected owner of the general purpose bucket that you want to retrieve the metadata table configuration for.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The destination information for a V1 S3 Metadata configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface S3TablesDestinationResult {
  /**
   * The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket.
   *
   * @public
   */
  TableBucketArn: string | undefined;

  /**
   * The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the metadata table in the metadata table configuration. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
   *
   * @public
   */
  TableArn: string | undefined;

  /**
   * The table bucket namespace for the metadata table in your metadata table configuration. This value is always `aws_s3_metadata`.
   *
   * @public
   */
  TableNamespace: string | undefined;
}

/**
 * The V1 S3 Metadata configuration for a general purpose bucket. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface MetadataTableConfigurationResult {
  /**
   * The destination information for the metadata table configuration. The destination table bucket must be in the same Region and Amazon Web Services account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
   *
   * @public
   */
  S3TablesDestinationResult: S3TablesDestinationResult | undefined;
}

/**
 * The V1 S3 Metadata configuration for a general purpose bucket.
 *
 * > **Note:** If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * @public
 */
export interface GetBucketMetadataTableConfigurationResult {
  /**
   * The V1 S3 Metadata configuration for a general purpose bucket.
   *
   * @public
   */
  MetadataTableConfigurationResult: MetadataTableConfigurationResult | undefined;

  /**
   * The status of the metadata table. The status values are:
   *
   * - `CREATING` - The metadata table is in the process of being created in the specified table bucket.
   * - `ACTIVE` - The metadata table has been created successfully, and records are being delivered to the table.
   * - `FAILED` - Amazon S3 is unable to create the metadata table, or Amazon S3 is unable to deliver records. See `ErrorDetails` for details.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * If the `CreateBucketMetadataTableConfiguration` request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetBucketMetadataTableConfigurationOutput {
  /**
   * The metadata table configuration for the general purpose bucket.
   *
   * @public
   */
  GetBucketMetadataTableConfigurationResult?: GetBucketMetadataTableConfigurationResult | undefined;
}

/**
 * @public
 */
export interface GetBucketMetadataTableConfigurationRequest {
  /**
   * The general purpose bucket that corresponds to the metadata table configuration that you want to retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The expected owner of the general purpose bucket that you want to retrieve the metadata table configuration for.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
 *
 * @public
 */
export interface MetricsAndOperator {
  /**
   * The prefix used when evaluating an AND predicate.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The list of tags used when evaluating an AND predicate.
   *
   * > **Note:** `Tag` filters are not supported for directory buckets.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The access point ARN used when evaluating an `AND` predicate.
   *
   * @public
   */
  AccessPointArn?: string | undefined;
}

/**
 * Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator). For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html).
 *
 * @public
 */
export type MetricsFilter =
  | MetricsFilter.AccessPointArnMember
  | MetricsFilter.AndMember
  | MetricsFilter.PrefixMember
  | MetricsFilter.TagMember
  | MetricsFilter.$UnknownMember;

/**
 * @public
 */
export namespace MetricsFilter {
  /**
   * The prefix used when evaluating a metrics filter.
   *
   * @public
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * The tag used when evaluating a metrics filter.
   *
   * > **Note:** `Tag` filters are not supported for directory buckets.
   *
   * @public
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * The access point ARN used when evaluating a metrics filter.
   *
   * @public
   */
  export interface AccessPointArnMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn: string;
    And?: never;
    $unknown?: never;
  }

  /**
   * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
   *
   * @public
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And: MetricsAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    AccessPointArn: (value: string) => T;
    And: (value: MetricsAndOperator) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html).
 *
 * @public
 */
export interface MetricsConfiguration {
  /**
   * The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator).
   *
   * > **Note:** Metrics configurations for directory buckets do not support tag filters.
   *
   * @public
   */
  Filter?: MetricsFilter | undefined;
}

/**
 * @public
 */
export interface GetBucketMetricsConfigurationOutput {
  /**
   * Specifies the metrics configuration.
   *
   * @public
   */
  MetricsConfiguration?: MetricsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket containing the metrics configuration to retrieve.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketNotificationConfigurationRequest {
  /**
   * The name of the bucket for which to get the notification configuration.
   *
   * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
   *
   * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * A container for specifying the configuration for Amazon EventBridge.
 *
 * @public
 */
export interface EventBridgeConfiguration {}

/**
 * Specifies the Amazon S3 object key name to filter on. An object key name is the name assigned to an object in your Amazon S3 bucket. You specify whether to filter on the suffix or prefix of the object key name. A prefix is a specific string of characters at the beginning of an object key name, which you can use to organize objects. For example, you can start the key names of related objects with a prefix, such as `2023-` or `engineering/`. Then, you can use `FilterRule` to find objects in a bucket with key names that have the same prefix. A suffix is similar to a prefix, but it is at the end of the object key name instead of at the beginning.
 *
 * @public
 */
export interface FilterRule {
  /**
   * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name?: FilterRuleName | undefined;

  /**
   * The value that the filter searches for in object key names.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A container for object key name prefix and suffix filtering rules.
 *
 * @public
 */
export interface S3KeyFilter {
  /**
   * A list of containers for the key-value pair that defines the criteria for the filter rule.
   *
   * @public
   */
  FilterRules?: FilterRule[] | undefined;
}

/**
 * Specifies object key name filtering rules. For information about key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface NotificationConfigurationFilter {
  /**
   * A container for object key name prefix and suffix filtering rules.
   *
   * @public
   */
  Key?: S3KeyFilter | undefined;
}

/**
 * A container for specifying the configuration for Lambda notifications.
 *
 * @public
 */
export interface LambdaFunctionConfiguration {
  /**
   * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the specified event type occurs.
   *
   * @public
   */
  LambdaFunctionArn: string | undefined;

  /**
   * The Amazon S3 bucket event for which to invoke the Lambda function. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Events: Event[] | undefined;

  /**
   * Specifies object key name filtering rules. For information about key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Filter?: NotificationConfigurationFilter | undefined;
}

/**
 * Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.
 *
 * @public
 */
export interface QueueConfiguration {
  /**
   * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
   *
   * @public
   */
  QueueArn: string | undefined;

  /**
   * A collection of bucket events for which to send notifications
   *
   * @public
   */
  Events: Event[] | undefined;

  /**
   * Specifies object key name filtering rules. For information about key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Filter?: NotificationConfigurationFilter | undefined;
}

/**
 * A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.
 *
 * @public
 */
export interface TopicConfiguration {
  /**
   * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * The Amazon S3 bucket event about which to send notifications. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Events: Event[] | undefined;

  /**
   * Specifies object key name filtering rules. For information about key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Filter?: NotificationConfigurationFilter | undefined;
}

/**
 * A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * The topic to which notifications are sent and the events for which notifications are generated.
   *
   * @public
   */
  TopicConfigurations?: TopicConfiguration[] | undefined;

  /**
   * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
   *
   * @public
   */
  QueueConfigurations?: QueueConfiguration[] | undefined;

  /**
   * Describes the Lambda functions to invoke and the events for which to invoke them.
   *
   * @public
   */
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[] | undefined;

  /**
   * Enables delivery of events to Amazon EventBridge.
   *
   * @public
   */
  EventBridgeConfiguration?: EventBridgeConfiguration | undefined;
}

/**
 * The container element for an ownership control rule.
 *
 * @public
 */
export interface OwnershipControlsRule {
  /**
   * The container element for object ownership for a bucket's ownership controls.
   *
   * `BucketOwnerPreferred` - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the `bucket-owner-full-control` canned ACL.
   *
   * `ObjectWriter` - The uploading account will own the object if the object is uploaded with the `bucket-owner-full-control` canned ACL.
   *
   * `BucketOwnerEnforced` - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or specify bucket owner full control ACLs (such as the predefined `bucket-owner-full-control` canned ACL or a custom ACL in XML format that grants the same permissions).
   *
   * By default, `ObjectOwnership` is set to `BucketOwnerEnforced` and ACLs are disabled. We recommend keeping ACLs disabled, except in uncommon use cases where you must control access for each object individually. For more information about S3 Object Ownership, see [Controlling ownership of objects and disabling ACLs for your bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets. Directory buckets use the bucket owner enforced setting for S3 Object Ownership.
   *
   * @public
   */
  ObjectOwnership: ObjectOwnership | undefined;
}

/**
 * The container element for a bucket's ownership controls.
 *
 * @public
 */
export interface OwnershipControls {
  /**
   * The container element for an ownership control rule.
   *
   * @public
   */
  Rules: OwnershipControlsRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketOwnershipControlsOutput {
  /**
   * The `OwnershipControls` (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter) currently in effect for this Amazon S3 bucket.
   *
   * @public
   */
  OwnershipControls?: OwnershipControls | undefined;
}

/**
 * @public
 */
export interface GetBucketOwnershipControlsRequest {
  /**
   * The name of the Amazon S3 bucket whose `OwnershipControls` you want to retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyOutput {
  /**
   * The bucket policy as a JSON document.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyRequest {
  /**
   * The bucket name to get the bucket policy for.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * **Access points** - When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
   *
   * **Object Lambda access points** - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The container element for a bucket's policy status.
 *
 * @public
 */
export interface PolicyStatus {
  /**
   * The policy status for this bucket. `TRUE` indicates that this bucket is public. `FALSE` indicates that the bucket is not public.
   *
   * @public
   */
  IsPublic?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyStatusOutput {
  /**
   * The policy status for the specified bucket.
   *
   * @public
   */
  PolicyStatus?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyStatusRequest {
  /**
   * The name of the Amazon S3 bucket whose policy status you want to retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies whether Amazon S3 replicates delete markers. If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config).
 *
 * For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html).
 *
 * > **Note:** If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
 *
 * @public
 */
export interface DeleteMarkerReplication {
  /**
   * Indicates whether to replicate delete markers.
   *
   * > **Note:** Indicates whether to replicate delete markers.
   *
   * @public
   */
  Status?: DeleteMarkerReplicationStatus | undefined;
}

/**
 * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
 *
 * > **Note:** If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Specifies the ID (Key ARN or Alias ARN) of the customer managed Amazon Web Services KMS key stored in Amazon Web Services Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  ReplicaKmsKeyID?: string | undefined;
}

/**
 * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics `EventThreshold`.
 *
 * @public
 */
export interface ReplicationTimeValue {
  /**
   * Contains an integer specifying time in minutes.
   *
   * Valid value: 15
   *
   * @public
   */
  Minutes?: number | undefined;
}

/**
 * A container specifying replication metrics-related settings enabling replication metrics and events.
 *
 * @public
 */
export interface Metrics {
  /**
   * Specifies whether the replication metrics are enabled.
   *
   * @public
   */
  Status: MetricsStatus | undefined;

  /**
   * A container specifying the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event.
   *
   * @public
   */
  EventThreshold?: ReplicationTimeValue | undefined;
}

/**
 * A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
 *
 * @public
 */
export interface ReplicationTime {
  /**
   * Specifies whether the replication time is enabled.
   *
   * @public
   */
  Status: ReplicationTimeStatus | undefined;

  /**
   * A container specifying the time by which replication should be complete for all objects and operations on objects.
   *
   * @public
   */
  Time: ReplicationTimeValue | undefined;
}

/**
 * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
 *
 * @public
 */
export interface Destination {
  /**
   * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the Amazon Web Services account that owns the destination bucket by specifying the `AccessControlTranslation` property, this is the account ID of the destination bucket owner. For more information, see [Replication Additional Configuration: Changing the Replica Owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.
   *
   * For valid values, see the `StorageClass` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference*.
   *
   * `FSX_OPENZFS` is not an accepted value when replicating objects.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the Amazon Web Services account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same Amazon Web Services account that owns the source object.
   *
   * @public
   */
  AccessControlTranslation?: AccessControlTranslation | undefined;

  /**
   * A container that provides information about encryption. If `SourceSelectionCriteria` is specified, you must specify this element.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
   *
   * @public
   */
  ReplicationTime?: ReplicationTime | undefined;

  /**
   * A container specifying replication metrics-related settings enabling replication metrics and events.
   *
   * @public
   */
  Metrics?: Metrics | undefined;
}

/**
 * Optional configuration to replicate existing source bucket objects.
 *
 * > **Note:** This parameter is no longer supported. To replicate existing objects, see [Replicating existing objects with S3 Batch Replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface ExistingObjectReplication {
  /**
   * Specifies whether Amazon S3 replicates existing source bucket objects.
   *
   * @public
   */
  Status: ExistingObjectReplicationStatus | undefined;
}

/**
 * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter.
 *
 * For example:
 *
 * - If you specify both a `Prefix` and a `Tag` filter, wrap these filters in an `And` tag.
 * - If you specify a filter based on multiple tags, wrap the `Tag` elements in an `And` tag.
 *
 * @public
 */
export interface ReplicationRuleAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * An array of tags containing key and value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` must specify exactly one `Prefix`, `Tag`, or an `And` child element.
 *
 * @public
 */
export interface ReplicationRuleFilter {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A container for specifying a tag key and value.
   *
   * The rule applies only to objects that have the tag in their tag set.
   *
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:
   *
   * - If you specify both a `Prefix` and a `Tag` filter, wrap these filters in an `And` tag.
   * - If you specify a filter based on multiple tags, wrap the `Tag` elements in an `And` tag.
   *
   * @public
   */
  And?: ReplicationRuleAndOperator | undefined;
}

/**
 * A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `Filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas.
 *
 * > **Note:** If you don't specify the `Filter` element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, this element is not allowed.
 *
 * @public
 */
export interface ReplicaModifications {
  /**
   * Specifies whether Amazon S3 replicates modifications on replicas.
   *
   * @public
   */
  Status: ReplicaModificationsStatus | undefined;
}

/**
 * A container for filter information for the selection of S3 objects encrypted with Amazon Web Services KMS.
 *
 * @public
 */
export interface SseKmsEncryptedObjects {
  /**
   * Specifies whether Amazon S3 replicates objects created with server-side encryption using an Amazon Web Services KMS key stored in Amazon Web Services Key Management Service.
   *
   * @public
   */
  Status: SseKmsEncryptedObjectsStatus | undefined;
}

/**
 * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service (SSE-KMS).
 *
 * @public
 */
export interface SourceSelectionCriteria {
  /**
   * A container for filter information for the selection of Amazon S3 objects encrypted with Amazon Web Services KMS. If you include `SourceSelectionCriteria` in the replication configuration, this element is required.
   *
   * @public
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects | undefined;

  /**
   * A filter that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `Filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas.
   *
   * > **Note:** If you don't specify the `Filter` element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, this element is not allowed
   *
   * @public
   */
  ReplicaModifications?: ReplicaModifications | undefined;
}

/**
 * Specifies which Amazon S3 objects to replicate and where to store the replicas.
 *
 * @public
 */
export interface ReplicationRule {
  /**
   * A unique identifier for the rule. The maximum value is 255 characters.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.
   *
   * For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @deprecated deprecated.
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` must specify exactly one `Prefix`, `Tag`, or an `And` child element.
   *
   * @public
   */
  Filter?: ReplicationRuleFilter | undefined;

  /**
   * Specifies whether the rule is enabled.
   *
   * @public
   */
  Status: ReplicationRuleStatus | undefined;

  /**
   * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service (SSE-KMS).
   *
   * @public
   */
  SourceSelectionCriteria?: SourceSelectionCriteria | undefined;

  /**
   * Optional configuration to replicate existing source bucket objects.
   *
   * > **Note:** This parameter is no longer supported. To replicate existing objects, see [Replicating existing objects with S3 Batch Replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ExistingObjectReplication?: ExistingObjectReplication | undefined;

  /**
   * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * Specifies whether Amazon S3 replicates delete markers. If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config).
   *
   * For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html).
   *
   * > **Note:** If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
   *
   * @public
   */
  DeleteMarkerReplication?: DeleteMarkerReplication | undefined;
}

/**
 * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
 *
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
   *
   * @public
   */
  Rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationOutput {
  /**
   * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
   *
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationRequest {
  /**
   * The bucket name for which to get the replication information.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketRequestPaymentOutput {
  /**
   * Specifies who pays for the download and request fees.
   *
   * @public
   */
  Payer?: Payer | undefined;
}

/**
 * @public
 */
export interface GetBucketRequestPaymentRequest {
  /**
   * The name of the bucket for which to get the payment request configuration
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingOutput {
  /**
   * Contains the tag set.
   *
   * @public
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingRequest {
  /**
   * The name of the bucket for which to get the tagging information.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningOutput {
  /**
   * The versioning state of the bucket.
   *
   * @public
   */
  Status?: BucketVersioningStatus | undefined;

  /**
   * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
   *
   * @public
   */
  MFADelete?: MFADeleteStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningRequest {
  /**
   * The name of the bucket for which to get the versioning information.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The error information.
 *
 * @public
 */
export interface ErrorDocument {
  /**
   * The object key name to use when a 4XX class error occurs.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * Container for the `Suffix` element.
 *
 * @public
 */
export interface IndexDocument {
  /**
   * A suffix that is appended to a request that is for a directory on the website endpoint. (For example, if the suffix is `index.html` and you make a request to `samplebucket/images/`, the data that is returned will be for the object with the key name `images/index.html`.) The suffix must not be empty and must not include a slash character.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  Suffix: string | undefined;
}

/**
 * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
 *
 * @public
 */
export interface RedirectAllRequestsTo {
  /**
   * Name of the host where requests are redirected.
   *
   * @public
   */
  HostName: string | undefined;

  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   *
   * @public
   */
  Protocol?: Protocol | undefined;
}

/**
 * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
 *
 * @public
 */
export interface Condition {
  /**
   * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element `Condition` is specified and sibling `KeyPrefixEquals` is not specified. If both are specified, then both must be true for the redirect to be applied.
   *
   * @public
   */
  HttpErrorCodeReturnedEquals?: string | undefined;

  /**
   * The object key name prefix when the redirect is applied. For example, to redirect requests for `ExamplePage.html`, the key prefix will be `ExamplePage.html`. To redirect request for all pages with the prefix `docs/`, the key prefix will be `/docs`, which identifies all objects in the `docs/` folder. Required when the parent element `Condition` is specified and sibling `HttpErrorCodeReturnedEquals` is not specified. If both conditions are specified, both must be true for the redirect to be applied.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  KeyPrefixEquals?: string | undefined;
}

/**
 * Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.
 *
 * @public
 */
export interface Redirect {
  /**
   * The host name to use in the redirect request.
   *
   * @public
   */
  HostName?: string | undefined;

  /**
   * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
   *
   * @public
   */
  HttpRedirectCode?: string | undefined;

  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a condition block with `KeyPrefixEquals` set to `docs/` and in the Redirect set `ReplaceKeyPrefixWith` to `/documents`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyWith` is not provided.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  ReplaceKeyPrefixWith?: string | undefined;

  /**
   * The specific object key to use in the redirect request. For example, redirect request to `error.html`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyPrefixWith` is not provided.
   *
   * > **Important:** Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * @public
   */
  ReplaceKeyWith?: string | undefined;
}

/**
 * Specifies the redirect behavior and when a redirect is applied. For more information about routing rules, see [Configuring advanced conditional redirects](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface RoutingRule {
  /**
   * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
   *
   * @public
   */
  Redirect: Redirect | undefined;
}

/**
 * @public
 */
export interface GetBucketWebsiteOutput {
  /**
   * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
   *
   * @public
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo | undefined;

  /**
   * The name of the index document for the website (for example `index.html`).
   *
   * @public
   */
  IndexDocument?: IndexDocument | undefined;

  /**
   * The object key name of the website error document to use for 4XX class errors.
   *
   * @public
   */
  ErrorDocument?: ErrorDocument | undefined;

  /**
   * Rules that define when a redirect is applied and the redirect behavior.
   *
   * @public
   */
  RoutingRules?: RoutingRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketWebsiteRequest {
  /**
   * The bucket name for which to get the website configuration.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetObjectOutput {
  /**
   * Object data.
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * Indicates whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
   *
   * > **Note:**
   * >
   * > - If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes `x-amz-delete-marker: true` in the response.
   * > - If the specified version in the request is a delete marker, the response returns a `405 Method Not Allowed` error and the `Last-Modified: timestamp` response header.
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * Indicates that a range of bytes was specified in the request.
   *
   * @public
   */
  AcceptRanges?: string | undefined;

  /**
   * If the object expiration is configured (see [`PutBucketLifecycleConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)), the response includes this header. It includes the `expiry-date` and `rule-id` key-value pairs providing object expiration information. The value of the `rule-id` is URL-encoded.
   *
   * > **Note:** Object expiration information is not returned in directory buckets and this header returns the value "`NotImplemented`" in all responses for directory buckets.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Provides information about object restoration action and expiration time of the restored object copy.
   *
   * > **Note:** This functionality is not supported for directory buckets. Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  Restore?: string | undefined;

  /**
   * Date and time when the object was last modified.
   *
   * **General purpose buckets** - When you specify a `versionId` of the object in your request, if the specified version in the request is a delete marker, the response returns a `405 Method Not Allowed` error and the `Last-Modified: timestamp` response header.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Size of the body in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The checksum type, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. You can use this header response to verify that the checksum type that is received is the same checksum type that was specified in the `CreateMultipartUpload` request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * This is set to the number of metadata entries not returned in the headers that are prefixed with `x-amz-meta-`. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  MissingMeta?: number | undefined;

  /**
   * Version ID of the object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies caching behavior along the request/reply chain.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Specifies presentational information for the object.
   *
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * Indicates what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   *
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * The language the content is in.
   *
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * The portion of the object returned in the response.
   *
   * @public
   */
  ContentRange?: string | undefined;

  /**
   * A standard MIME type describing the format of the object data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Deprecated in favor of ExpiresString.
   *
   * @deprecated deprecated.
   * @public
   */
  Expires?: Date | undefined;

  /**
   * The date and time at which the object is no longer cacheable.
   *
   * @public
   */
  ExpiresString?: string | undefined;

  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to confirm the encryption algorithm that's used.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide the round-trip message integrity verification of the customer-provided encryption key.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Indicates whether the object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * Amazon S3 can return this if your request involves a bucket that is either a source or destination in a replication rule.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * The count of parts this object has. This value is only returned if you specify `partNumber` in your request and the object was uploaded as a multipart upload.
   *
   * @public
   */
  PartsCount?: number | undefined;

  /**
   * The number of tags, if any, on the object, when you have the relevant permission to read object tags.
   *
   * You can use [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html) to retrieve the tag set associated with an object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  TagCount?: number | undefined;

  /**
   * The Object Lock mode that's currently in place for this object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * The date and time when this object's Object Lock will expire.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Indicates whether this object has an active legal hold. This field is only returned if you have permission to view an object's legal hold status.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * The event hold status for this object. This header is only returned if the requester has the `s3:GetObjectRetention` permission.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: ObjectLockEventHold | undefined;

  /**
   * The event hold duration in days for this object. Only returned when the event hold is enabled.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationDays?: number | undefined;

  /**
   * The event hold duration in years for this object. Only returned when the event hold is enabled.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationYears?: number | undefined;
}

/**
 * @public
 */
export interface GetObjectRequest {
  /**
   * The bucket name containing the object.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **Object Lambda access points** - When you use this action with an Object Lambda access point, you must direct requests to the Object Lambda access point hostname. The Object Lambda access point hostname takes the form *AccessPointName*-*AccountId*.s3-object-lambda.*Region*.amazonaws.com.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Return the object only if its entity tag (ETag) is the same as the one specified in this header; otherwise, return a `412 Precondition Failed` error.
   *
   * If both of the `If-Match` and `If-Unmodified-Since` headers are present in the request as follows: `If-Match` condition evaluates to `true`, and; `If-Unmodified-Since` condition evaluates to `false`; then, S3 returns `200 OK` and the data requested.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * Return the object only if it has been modified since the specified time; otherwise, return a `304 Not Modified` error.
   *
   * If both of the `If-None-Match` and `If-Modified-Since` headers are present in the request as follows:`If-None-Match` condition evaluates to `false`, and; `If-Modified-Since` condition evaluates to `true`; then, S3 returns `304 Not Modified` status code.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfModifiedSince?: Date | undefined;

  /**
   * Return the object only if its entity tag (ETag) is different from the one specified in this header; otherwise, return a `304 Not Modified` error.
   *
   * If both of the `If-None-Match` and `If-Modified-Since` headers are present in the request as follows:`If-None-Match` condition evaluates to `false`, and; `If-Modified-Since` condition evaluates to `true`; then, S3 returns `304 Not Modified` HTTP status code.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfNoneMatch?: string | undefined;

  /**
   * Return the object only if it has not been modified since the specified time; otherwise, return a `412 Precondition Failed` error.
   *
   * If both of the `If-Match` and `If-Unmodified-Since` headers are present in the request as follows: `If-Match` condition evaluates to `true`, and; `If-Unmodified-Since` condition evaluates to `false`; then, S3 returns `200 OK` and the data requested.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfUnmodifiedSince?: Date | undefined;

  /**
   * Key of the object to get.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Downloads the specified byte range of an object. For more information about the HTTP Range header, see [https://www.rfc-editor.org/rfc/rfc9110.html#name-range](https://www.rfc-editor.org/rfc/rfc9110.html#name-range).
   *
   * > **Note:** Amazon S3 doesn't support retrieving multiple ranges of data per `GET` request.
   *
   * @public
   */
  Range?: string | undefined;

  /**
   * Sets the `Cache-Control` header of the response.
   *
   * @public
   */
  ResponseCacheControl?: string | undefined;

  /**
   * Sets the `Content-Disposition` header of the response.
   *
   * @public
   */
  ResponseContentDisposition?: string | undefined;

  /**
   * Sets the `Content-Encoding` header of the response.
   *
   * @public
   */
  ResponseContentEncoding?: string | undefined;

  /**
   * Sets the `Content-Language` header of the response.
   *
   * @public
   */
  ResponseContentLanguage?: string | undefined;

  /**
   * Sets the `Content-Type` header of the response.
   *
   * @public
   */
  ResponseContentType?: string | undefined;

  /**
   * Sets the `Expires` header of the response.
   *
   * @public
   */
  ResponseExpires?: Date | undefined;

  /**
   * Version ID used to reference a specific version of the object.
   *
   * By default, the `GetObject` operation returns the current version of an object. To return a different version, use the `versionId` subresource.
   *
   * > **Note:**
   * >
   * > - If you include a `versionId` in your request header, you must have the `s3:GetObjectVersion` permission to access a specific version of an object. The `s3:GetObject` permission is not required in this scenario.
   * > - If you request the current version of an object without a specific `versionId` in the request header, only the `s3:GetObject` permission is required. The `s3:GetObjectVersion` permission is not required in this scenario.
   * > - **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the `null` value of the version ID is supported by directory buckets. You can only specify `null` to the `versionId` query parameter in the request.
   *
   * For more information about versioning, see [PutBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html).
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies the algorithm to use when decrypting the object (for example, `AES256`).
   *
   * If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:
   *
   * - `x-amz-server-side-encryption-customer-algorithm`
   * - `x-amz-server-side-encryption-customer-key`
   * - `x-amz-server-side-encryption-customer-key-MD5`
   *
   * For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key that you originally provided for Amazon S3 to encrypt the data before storing it. This value is used to decrypt the object when recovering it and must match the one used when storing the data. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:
   *
   * - `x-amz-server-side-encryption-customer-algorithm`
   * - `x-amz-server-side-encryption-customer-key`
   * - `x-amz-server-side-encryption-customer-key-MD5`
   *
   * For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:
   *
   * - `x-amz-server-side-encryption-customer-algorithm`
   * - `x-amz-server-side-encryption-customer-key`
   * - `x-amz-server-side-encryption-customer-key-MD5`
   *
   * For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
   *
   * @public
   */
  PartNumber?: number | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * To retrieve the checksum, this mode must be enabled.
   *
   * @public
   */
  ChecksumMode?: ChecksumMode | undefined;
}

/**
 * @public
 */
export interface GetObjectAclOutput {
  /**
   * Container for the bucket owner's ID.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * A list of grants.
   *
   * @public
   */
  Grants?: Grant[] | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface GetObjectAclRequest {
  /**
   * The bucket name that contains the object for which to get the ACL information.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key of the object for which to get the ACL information.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Version ID used to reference a specific version of the object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetObjectAnnotationOutput {
  /**
   * The annotation payload.
   *
   * @public
   */
  AnnotationPayload?: StreamingBlobTypes | undefined;

  /**
   * The version ID of the object that the annotation is attached to.
   *
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * The date and time the annotation was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The size of the annotation payload, in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The entity tag of the annotation.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The CRC32 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The CRC32C checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The CRC64NVME checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The SHA1 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The SHA256 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The SHA512 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The MD5 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The XXHASH64 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The XXHASH3 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The XXHASH128 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The type of checksum used.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The server-side encryption algorithm used.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * The replication status of the annotation. Possible values include `PENDING`, `COMPLETED`, `FAILED`, and `REPLICA`.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;
}

/**
 * @public
 */
export interface GetObjectAnnotationRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The name of the annotation to retrieve.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512 bytes.
   *
   * @public
   */
  AnnotationName: string | undefined;

  /**
   * The version ID of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with an HTTP 403 (Access Denied) error.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Set to `ENABLED` to validate the checksum of the annotation payload on retrieval.
   *
   * @public
   */
  ChecksumMode?: ChecksumMode | undefined;
}

/**
 * Contains all the possible checksum or digest values for an object.
 *
 * @public
 */
export interface Checksum {
  /**
   * The Base64 encoded, 32-bit `CRC32 checksum` of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the object. This checksum is present if the object was uploaded with the `CRC64NVME` checksum algorithm, or if the object was uploaded without a checksum (and Amazon S3 added the default checksum, `CRC64NVME`, to the uploaded object). For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. This checksum is present if the object was uploaded with the `SHA512` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. This checksum is present if the object was uploaded with the `MD5` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. This checksum is present if the object was uploaded with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. This checksum is present if the object was uploaded with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. This checksum is present if the object was uploaded with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The checksum type that is used to calculate the object’s checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * A container for elements related to an individual part.
 *
 * @public
 */
export interface ObjectPart {
  /**
   * The part number identifying the part. This value is a positive integer between 1 and 10,000.
   *
   * @public
   */
  PartNumber?: number | undefined;

  /**
   * The size of the uploaded part in bytes.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC32` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC32C` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC64NVME` checksum algorithm, or if the object was uploaded without a checksum (and Amazon S3 added the default checksum, `CRC64NVME`, to the uploaded object). For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` checksum of the part. This checksum is present if the multipart upload request was created with the `SHA1` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` checksum of the part. This checksum is present if the multipart upload request was created with the `SHA256` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the part. This checksum is present if the multipart upload request was created with the `SHA512` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the part. This checksum is present if the multipart upload request was created with the `MD5` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;
}

/**
 * A collection of parts associated with a multipart upload.
 *
 * @public
 */
export interface GetObjectAttributesParts {
  /**
   * The total number of parts.
   *
   * @public
   */
  TotalPartsCount?: number | undefined;

  /**
   * The marker for the current part.
   *
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the `PartNumberMarker` request parameter in a subsequent request.
   *
   * @public
   */
  NextPartNumberMarker?: string | undefined;

  /**
   * The maximum number of parts allowed in the response.
   *
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * Indicates whether the returned list of parts is truncated. A value of `true` indicates that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned in the `MaxParts` element.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * A container for elements related to a particular part. A response can contain zero or more `Parts` elements.
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - For `GetObjectAttributes`, if an additional checksum (including `x-amz-checksum-crc32`, `x-amz-checksum-crc32c`, `x-amz-checksum-sha1`, or `x-amz-checksum-sha256`) isn't applied to the object specified in the request, the response doesn't return the `Part` element.
   * > - **Directory buckets** - For `GetObjectAttributes`, regardless of whether an additional checksum is applied to the object specified in the request, the response returns the `Part` element.
   *
   * @public
   */
  Parts?: ObjectPart[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesOutput {
  /**
   * Specifies whether the object retrieved was (`true`) or was not (`false`) a delete marker. If `false`, this response header does not appear in the response. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * Date and time when the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The version ID of the object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The checksum or digest of the object.
   *
   * @public
   */
  Checksum?: Checksum | undefined;

  /**
   * A collection of parts associated with a multipart upload.
   *
   * @public
   */
  ObjectParts?: GetObjectAttributesParts | undefined;

  /**
   * Provides the storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   *
   * For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html).
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * The size of the object in bytes.
   *
   * @public
   */
  ObjectSize?: number | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID used to reference a specific version of the object.
   *
   * > **Note:** S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the `null` value of the version ID is supported by directory buckets. You can only specify `null` to the `versionId` query parameter in the request.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Sets the maximum number of parts to return. For more information, see [Uploading and copying objects using multipart upload in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html) in the *Amazon Simple Storage Service user guide*.
   *
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * Specifies the part after which listing should begin. Only parts with higher part numbers will be listed. For more information, see [Uploading and copying objects using multipart upload in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html) in the *Amazon Simple Storage Service user guide*.
   *
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, AES256).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Specifies the fields at the root level that you want returned in the response. Fields that you do not specify are not returned.
   *
   * @public
   */
  ObjectAttributes: ObjectAttributes[] | undefined;
}

/**
 * A legal hold configuration for an object.
 *
 * @public
 */
export interface ObjectLockLegalHold {
  /**
   * Indicates whether the specified object has a legal hold in place.
   *
   * @public
   */
  Status?: ObjectLockLegalHoldStatus | undefined;
}

/**
 * @public
 */
export interface GetObjectLegalHoldOutput {
  /**
   * The current legal hold status for the specified object.
   *
   * @public
   */
  LegalHold?: ObjectLockLegalHold | undefined;
}

/**
 * @public
 */
export interface GetObjectLegalHoldRequest {
  /**
   * The bucket name containing the object whose legal hold status you want to retrieve.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key name for the object whose legal hold status you want to retrieve.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID of the object whose legal hold status you want to retrieve.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Contains the event hold duration configuration, specified in either days or years.
 *
 * @public
 */
export interface EventHoldDuration {
  /**
   * The number of days for the event hold duration. The minimum value is 1 and the maximum value is 36,500.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The number of years for the event hold duration. The minimum value is 1 and the maximum value is 100.
   *
   * @public
   */
  Years?: number | undefined;
}

/**
 * The container element for optionally specifying the default Object Lock retention settings for new objects placed in the specified bucket.
 *
 * > **Note:**
 * >
 * > - The `DefaultRetention` settings require both a mode and a period.
 * > - The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
 *
 * @public
 */
export interface DefaultRetention {
  /**
   * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Must be used with either `Days` or `Years`.
   *
   * @public
   */
  Mode?: ObjectLockRetentionMode | undefined;

  /**
   * The number of days that you want to specify for the default retention period. Must be used with `Mode`.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The number of years that you want to specify for the default retention period. Must be used with `Mode`.
   *
   * @public
   */
  Years?: number | undefined;

  /**
   * The default event hold duration to be applied to new objects placed in the specified bucket. When configured, new objects will automatically have an event hold enabled with this duration.
   *
   * @public
   */
  DefaultEventHold?: EventHoldDuration | undefined;
}

/**
 * The container element for an Object Lock rule.
 *
 * @public
 */
export interface ObjectLockRule {
  /**
   * The default Object Lock retention settings for new objects in this bucket. You can specify:
   *
   * - A default retention period, by using `Days` or `Years`.
   * - A default event hold duration, by using `DefaultEventHold`. This setting also uses days or years.
   *
   * You can set one or both. You cannot use days and years in the same setting.
   *
   * @public
   */
  DefaultRetention?: DefaultRetention | undefined;
}

/**
 * The container element for Object Lock configuration parameters.
 *
 * @public
 */
export interface ObjectLockConfiguration {
  /**
   * Indicates whether this bucket has an Object Lock configuration enabled. Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
   *
   * @public
   */
  ObjectLockEnabled?: ObjectLockEnabled | undefined;

  /**
   * Specifies the Object Lock rule for the specified object. Enable the this rule when you apply `ObjectLockConfiguration` to a bucket. Bucket settings require both a mode and a period. The period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
   *
   * @public
   */
  Rule?: ObjectLockRule | undefined;
}

/**
 * @public
 */
export interface GetObjectLockConfigurationOutput {
  /**
   * The specified bucket's Object Lock configuration.
   *
   * @public
   */
  ObjectLockConfiguration?: ObjectLockConfiguration | undefined;
}

/**
 * @public
 */
export interface GetObjectLockConfigurationRequest {
  /**
   * The bucket whose Object Lock configuration you want to retrieve.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * A Retention configuration for an object.
 *
 * @public
 */
export interface ObjectLockRetention {
  /**
   * Indicates the Retention mode for the specified object.
   *
   * @public
   */
  Mode?: ObjectLockRetentionMode | undefined;

  /**
   * The date on which this Object Lock Retention will expire.
   *
   * @public
   */
  RetainUntilDate?: Date | undefined;

  /**
   * The event hold status for the object. Set to `ON` to enable an event hold or `OFF` to disable it.
   *
   * @public
   */
  EventHold?: ObjectLockEventHold | undefined;

  /**
   * The event hold duration for the object. Specifies how long the object remains protected after the event hold is released.
   *
   * @public
   */
  EventHoldDuration?: EventHoldDuration | undefined;
}

/**
 * @public
 */
export interface GetObjectRetentionOutput {
  /**
   * The container element for an object's retention settings.
   *
   * @public
   */
  Retention?: ObjectLockRetention | undefined;
}

/**
 * @public
 */
export interface GetObjectRetentionRequest {
  /**
   * The bucket name containing the object whose retention settings you want to retrieve.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key name for the object whose retention settings you want to retrieve.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID for the object whose retention settings you want to retrieve.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetObjectTaggingOutput {
  /**
   * The versionId of the object for which you got the tagging information.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Contains the tag set.
   *
   * @public
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetObjectTaggingRequest {
  /**
   * The bucket name containing the object for which to get the tagging information.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Object key for which to get the tagging information.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The versionId of the object for which to get the tagging information.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;
}

/**
 * @public
 */
export interface GetObjectTorrentOutput {
  /**
   * A Bencoded dictionary as defined by the BitTorrent specification
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface GetObjectTorrentRequest {
  /**
   * The name of the bucket containing the object for which to get the torrent files.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key for which to get the information.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. Bucket-level settings work alongside account-level settings (which may inherit from organization-level policies). For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface PublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
   *
   * - PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
   * - PUT Object calls fail if the request includes a public ACL.
   * - PUT Bucket calls fail if the request includes a public ACL.
   *
   * Enabling this setting doesn't affect existing policies or ACLs.
   *
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
   *
   * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   *
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   *
   * Enabling this setting doesn't affect existing bucket policies.
   *
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only Amazon Web Services service principals and authorized users within this account if the bucket has a public policy.
   *
   * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   *
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockOutput {
  /**
   * The `PublicAccessBlock` configuration currently in effect for this Amazon S3 bucket.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockRequest {
  /**
   * The name of the Amazon S3 bucket whose `PublicAccessBlock` configuration you want to retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface HeadBucketOutput {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all of Amazon Web Services.
   *
   * > **Note:** This parameter is only supported for S3 directory buckets. For more information, see [Using tags with directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html).
   *
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * The type of location where the bucket is created.
   *
   * > **Note:** This functionality is only supported by directory buckets.
   *
   * @public
   */
  BucketLocationType?: LocationType | undefined;

  /**
   * The name of the location where the bucket will be created.
   *
   * For directory buckets, the Zone ID of the Availability Zone or the Local Zone where the bucket is created. An example Zone ID value for an Availability Zone is `usw2-az1`.
   *
   * > **Note:** This functionality is only supported by directory buckets.
   *
   * @public
   */
  BucketLocationName?: string | undefined;

  /**
   * The Region that the bucket is located.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * Indicates whether the bucket name used in the request is an access point alias.
   *
   * > **Note:** For directory buckets, the value of this field is `false`.
   *
   * @public
   */
  AccessPointAlias?: boolean | undefined;
}

/**
 * @public
 */
export interface HeadBucketRequest {
  /**
   * The bucket name.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **Object Lambda access points** - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface HeadObjectOutput {
  /**
   * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * Indicates that a range of bytes was specified.
   *
   * @public
   */
  AcceptRanges?: string | undefined;

  /**
   * If the object expiration is configured (see [`PutBucketLifecycleConfiguration`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)), the response includes this header. It includes the `expiry-date` and `rule-id` key-value pairs providing object expiration information. The value of the `rule-id` is URL-encoded.
   *
   * > **Note:** Object expiration information is not returned in directory buckets and this header returns the value "`NotImplemented`" in all responses for directory buckets.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see [RestoreObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html) or an archive copy is already restored.
   *
   * If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:
   *
   * `x-amz-restore: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"`
   *
   * If the object restoration is in progress, the header returns the value `ongoing-request="true"`.
   *
   * For more information about archiving objects, see [Transitioning Objects: General Considerations](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations).
   *
   * > **Note:** This functionality is not supported for directory buckets. Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  Restore?: string | undefined;

  /**
   * The archive state of the head object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ArchiveStatus?: ArchiveStatus | undefined;

  /**
   * Date and time when the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Size of the body in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32 checksum` of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The checksum type, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. You can use this header response to verify that the checksum type that is received is the same checksum type that was specified in `CreateMultipartUpload` request. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * An entity tag (ETag) is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * This is set to the number of metadata entries not returned in `x-amz-meta` headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  MissingMeta?: number | undefined;

  /**
   * Version ID of the object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies caching behavior along the request/reply chain.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Specifies presentational information for the object.
   *
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * Indicates what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   *
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * The language the content is in.
   *
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * A standard MIME type describing the format of the object data.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The portion of the object returned in the response for a `GET` request.
   *
   * @public
   */
  ContentRange?: string | undefined;

  /**
   * Deprecated in favor of ExpiresString.
   *
   * @deprecated deprecated.
   * @public
   */
  Expires?: Date | undefined;

  /**
   * The date and time at which the object is no longer cacheable.
   *
   * @public
   */
  ExpiresString?: string | undefined;

  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to confirm the encryption algorithm that's used.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide the round-trip message integrity verification of the customer-provided encryption key.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Indicates whether the object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   *
   * For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html).
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * Amazon S3 can return this header if your request involves a bucket that is either a source or a destination in a replication rule.
   *
   * In replication, you have a source bucket on which you configure replication and destination bucket or buckets where Amazon S3 stores object replicas. When you request an object (`GetObject`) or object metadata (`HeadObject`) from these buckets, Amazon S3 will return the `x-amz-replication-status` header in the response as follows:
   *
   * - **If requesting an object from the source bucket**, Amazon S3 will return the `x-amz-replication-status` header if the object in your request is eligible for replication.
   *
   *   For example, suppose that in your replication configuration, you specify object prefix `TaxDocs` requesting Amazon S3 to replicate objects with key prefix `TaxDocs`. Any objects you upload with this key name prefix, for example `TaxDocs/document1.pdf`, are eligible for replication. For any object request with this key name prefix, Amazon S3 will return the `x-amz-replication-status` header with value PENDING, COMPLETED or FAILED indicating object replication status.
   * - **If requesting an object from a destination bucket**, Amazon S3 will return the `x-amz-replication-status` header with value REPLICA if the object in your request is a replica that Amazon S3 created and there is no replica modification replication in progress.
   * - **When replicating objects to multiple destination buckets**, the `x-amz-replication-status` header acts differently. The header of the source object will only return a value of COMPLETED when replication is successful to all destinations. The header will remain at value PENDING until replication has completed for all destinations. If one or more destinations fails replication the header will return FAILED.
   *
   * For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * The count of parts this object has. This value is only returned if you specify `partNumber` in your request and the object was uploaded as a multipart upload.
   *
   * @public
   */
  PartsCount?: number | undefined;

  /**
   * The number of tags, if any, on the object, when you have the relevant permission to read object tags.
   *
   * You can use [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html) to retrieve the tag set associated with an object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  TagCount?: number | undefined;

  /**
   * The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the `s3:GetObjectRetention` permission. For more information about S3 Object Lock, see [Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * The date and time when the Object Lock retention period expires. This header is only returned if the requester has the `s3:GetObjectRetention` permission.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the `s3:GetObjectLegalHold` permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see [Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * The event hold status for this object. This header is only returned if the requester has the `s3:GetObjectRetention` permission.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: ObjectLockEventHold | undefined;

  /**
   * The event hold duration in days for this object. Only returned when the event hold is enabled.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationDays?: number | undefined;

  /**
   * The event hold duration in years for this object. Only returned when the event hold is enabled.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationYears?: number | undefined;
}

/**
 * @public
 */
export interface HeadObjectRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error.
   *
   * If both of the `If-Match` and `If-Unmodified-Since` headers are present in the request as follows:
   *
   * - `If-Match` condition evaluates to `true`, and;
   * - `If-Unmodified-Since` condition evaluates to `false`;
   *
   * Then Amazon S3 returns `200 OK` and the data requested.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error.
   *
   * If both of the `If-None-Match` and `If-Modified-Since` headers are present in the request as follows:
   *
   * - `If-None-Match` condition evaluates to `false`, and;
   * - `If-Modified-Since` condition evaluates to `true`;
   *
   * Then Amazon S3 returns the `304 Not Modified` response code.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfModifiedSince?: Date | undefined;

  /**
   * Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error.
   *
   * If both of the `If-None-Match` and `If-Modified-Since` headers are present in the request as follows:
   *
   * - `If-None-Match` condition evaluates to `false`, and;
   * - `If-Modified-Since` condition evaluates to `true`;
   *
   * Then Amazon S3 returns the `304 Not Modified` response code.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfNoneMatch?: string | undefined;

  /**
   * Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error.
   *
   * If both of the `If-Match` and `If-Unmodified-Since` headers are present in the request as follows:
   *
   * - `If-Match` condition evaluates to `true`, and;
   * - `If-Unmodified-Since` condition evaluates to `false`;
   *
   * Then Amazon S3 returns `200 OK` and the data requested.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
   *
   * @public
   */
  IfUnmodifiedSince?: Date | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * HeadObject returns only the metadata for an object. If the Range is satisfiable, only the `ContentLength` is affected in the response. If the Range is not satisfiable, S3 returns a `416 - Requested Range Not Satisfiable` error.
   *
   * @public
   */
  Range?: string | undefined;

  /**
   * Sets the `Cache-Control` header of the response.
   *
   * @public
   */
  ResponseCacheControl?: string | undefined;

  /**
   * Sets the `Content-Disposition` header of the response.
   *
   * @public
   */
  ResponseContentDisposition?: string | undefined;

  /**
   * Sets the `Content-Encoding` header of the response.
   *
   * @public
   */
  ResponseContentEncoding?: string | undefined;

  /**
   * Sets the `Content-Language` header of the response.
   *
   * @public
   */
  ResponseContentLanguage?: string | undefined;

  /**
   * Sets the `Content-Type` header of the response.
   *
   * @public
   */
  ResponseContentType?: string | undefined;

  /**
   * Sets the `Expires` header of the response.
   *
   * @public
   */
  ResponseExpires?: Date | undefined;

  /**
   * Version ID used to reference a specific version of the object.
   *
   * > **Note:** For directory buckets in this API operation, only the `null` value of the version ID is supported.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, AES256).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.
   *
   * @public
   */
  PartNumber?: number | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * To retrieve the checksum, this parameter must be enabled.
   *
   * **General purpose buckets** - If you enable checksum mode and the object is uploaded with a [checksum](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Checksum.html) and encrypted with an Key Management Service (KMS) key, you must have permission to use the `kms:Decrypt` action to retrieve the checksum.
   *
   * **Directory buckets** - If you enable `ChecksumMode` and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object.
   *
   * @public
   */
  ChecksumMode?: ChecksumMode | undefined;
}

/**
 * @public
 */
export interface ListBucketAnalyticsConfigurationsOutput {
  /**
   * Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * The marker that is used as a starting point for this analytics configuration list response. This value is present if it was sent in the request.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * `NextContinuationToken` is sent when `isTruncated` is true, which indicates that there are more analytics configurations to list. The next request must include this `NextContinuationToken`. The token is obfuscated and is not a usable value.
   *
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * The list of analytics configurations for a bucket.
   *
   * @public
   */
  AnalyticsConfigurationList?: AnalyticsConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * The name of the bucket from which analytics configurations are retrieved.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `ContinuationToken` that represents a placeholder from where this request should begin.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * Indicates whether the returned list of analytics configurations is complete. A value of `true` indicates that the list is not complete and the `NextContinuationToken` will be provided for a subsequent request.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * The `ContinuationToken` that represents a placeholder from where this request should begin.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The marker used to continue this inventory configuration listing. Use the `NextContinuationToken` from this response to continue the listing in a subsequent request. The continuation token is an opaque value that Amazon S3 understands.
   *
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * The list of S3 Intelligent-Tiering configurations for a bucket.
   *
   * @public
   */
  IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `ContinuationToken` that represents a placeholder from where this request should begin.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketInventoryConfigurationsOutput {
  /**
   * If sent in the request, the marker that is used as a starting point for this inventory configuration list response.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The list of inventory configurations for a bucket.
   *
   * @public
   */
  InventoryConfigurationList?: InventoryConfiguration[] | undefined;

  /**
   * Tells whether the returned list of inventory configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken is provided for a subsequent request.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * The marker used to continue this inventory configuration listing. Use the `NextContinuationToken` from this response to continue the listing in a subsequent request. The continuation token is an opaque value that Amazon S3 understands.
   *
   * @public
   */
  NextContinuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketInventoryConfigurationsRequest {
  /**
   * The name of the bucket containing the inventory configurations to retrieve.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The marker used to continue an inventory configuration listing that has been truncated. Use the `NextContinuationToken` from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketMetricsConfigurationsOutput {
  /**
   * Indicates whether the returned list of metrics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * The marker that is used as a starting point for this metrics configuration list response. This value is present if it was sent in the request.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The marker used to continue a metrics configuration listing that has been truncated. Use the `NextContinuationToken` from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   *
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * The list of metrics configurations for a bucket.
   *
   * @public
   */
  MetricsConfigurationList?: MetricsConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListBucketMetricsConfigurationsRequest {
  /**
   * The name of the bucket containing the metrics configurations to retrieve.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The marker that is used to continue a metrics configuration listing that has been truncated. Use the `NextContinuationToken` from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * In terms of implementation, a Bucket is a resource.
 *
 * @public
 */
export interface Bucket {
  /**
   * The name of the bucket.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * `BucketRegion` indicates the Amazon Web Services region where the bucket is located. If the request contains at least one valid parameter, it is included in the response.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket. ARNs uniquely identify Amazon Web Services resources across all of Amazon Web Services.
   *
   * > **Note:** This parameter is only supported for S3 directory buckets. For more information, see [Using tags with directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html).
   *
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketsOutput {
  /**
   * The list of buckets owned by the requester.
   *
   * @public
   */
  Buckets?: Bucket[] | undefined;

  /**
   * The owner of the buckets listed.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * `ContinuationToken` is included in the response when there are more buckets that can be listed with pagination. The next `ListBuckets` request to Amazon S3 can be continued with this `ContinuationToken`. `ContinuationToken` is obfuscated and is not a real bucket.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * If `Prefix` was sent with the request, it is included in the response.
   *
   * All bucket names in the response begin with the specified bucket name prefix.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * @public
 */
export interface ListBucketsRequest {
  /**
   * Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response.
   *
   * @public
   */
  MaxBuckets?: number | undefined;

  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on this bucket with a token. `ContinuationToken` is obfuscated and is not a real key. You can use this `ContinuationToken` for pagination of the list results.
   *
   * Length Constraints: Minimum length of 0. Maximum length of 1024.
   *
   * Required: No.
   *
   * > **Note:** If you specify the `bucket-region`, `prefix`, or `continuation-token` query parameters without using `max-buckets` to set the maximum number of buckets returned in the response, Amazon S3 applies a default page size of 10,000 and provides a continuation token if there are more buckets.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * Limits the response to bucket names that begin with the specified bucket name prefix.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Limits the response to buckets that are located in the specified Amazon Web Services Region. The Amazon Web Services Region must be expressed according to the Amazon Web Services Region code, such as `us-west-2` for the US West (Oregon) Region. For a list of the valid values for all of the Amazon Web Services Regions, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region).
   *
   * > **Note:** Requests made to a Regional endpoint that is different from the `bucket-region` parameter are not supported. For example, if you want to limit the response to your buckets in Region `us-west-2`, the request must be made to an endpoint in Region `us-west-2`.
   *
   * @public
   */
  BucketRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDirectoryBucketsOutput {
  /**
   * The list of buckets owned by the requester.
   *
   * @public
   */
  Buckets?: Bucket[] | undefined;

  /**
   * If `ContinuationToken` was sent with the request, it is included in the response. You can use the returned `ContinuationToken` for pagination of the list response.
   *
   * @public
   */
  ContinuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDirectoryBucketsRequest {
  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on buckets in this account with a token. `ContinuationToken` is obfuscated and is not a real bucket name. You can use this `ContinuationToken` for the pagination of the list results.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response.
   *
   * @public
   */
  MaxDirectoryBuckets?: number | undefined;
}

/**
 * Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/.
 *
 * @public
 */
export interface CommonPrefix {
  /**
   * Container for the specified common prefix.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Container element that identifies who initiated the multipart upload.
 *
 * @public
 */
export interface Initiator {
  /**
   * If the principal is an Amazon Web Services account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
   *
   * > **Note:** **Directory buckets** - If the principal is an Amazon Web Services account, it provides the Amazon Web Services account ID. If the principal is an IAM User, it provides a user ARN value.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * Container for the `MultipartUpload` for the Amazon S3 object.
 *
 * @public
 */
export interface MultipartUpload {
  /**
   * Upload ID that identifies the multipart upload.
   *
   * @public
   */
  UploadId?: string | undefined;

  /**
   * Key of the object for which the multipart upload was initiated.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Date and time at which the multipart upload was initiated.
   *
   * @public
   */
  Initiated?: Date | undefined;

  /**
   * The class of storage used to store the object.
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * Specifies the owner of the object that is part of the multipart upload.
   *
   * > **Note:** **Directory buckets** - The bucket owner is returned as the object owner for all the objects.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * Identifies who initiated the multipart upload.
   *
   * @public
   */
  Initiator?: Initiator | undefined;

  /**
   * The algorithm that was used to create a checksum of the object.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The checksum type that is used to calculate the object’s checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * @public
 */
export interface ListMultipartUploadsOutput {
  /**
   * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key at or after which the listing began.
   *
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified `upload-id-marker`.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  UploadIdMarker?: string | undefined;

  /**
   * When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.
   *
   * @public
   */
  NextKeyMarker?: string | undefined;

  /**
   * When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.
   *
   * > **Note:** **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Contains the delimiter you specified in the request. If you don't specify a delimiter in your request, this element is absent from the response.
   *
   * > **Note:** **Directory buckets** - For directory buckets, `/` is the only supported delimiter.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * When a list is truncated, this element specifies the value that should be used for the `upload-id-marker` request parameter in a subsequent request.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  NextUploadIdMarker?: string | undefined;

  /**
   * Maximum number of multipart uploads that could have been included in the response.
   *
   * @public
   */
  MaxUploads?: number | undefined;

  /**
   * Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * Container for elements related to a particular multipart upload. A response can contain zero or more `Upload` elements.
   *
   * @public
   */
  Uploads?: MultipartUpload[] | undefined;

  /**
   * If you specify a delimiter in the request, then the result returns each distinct key prefix containing the delimiter in a `CommonPrefixes` element. The distinct key prefixes are returned in the `Prefix` child element.
   *
   * > **Note:** **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   *
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * Encoding type used by Amazon S3 to encode object keys in the response.
   *
   * If you specify the `encoding-type` request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:
   *
   * `Delimiter`, `KeyMarker`, `Prefix`, `NextKeyMarker`, `Key`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListMultipartUploadsRequest {
  /**
   * The name of the bucket to which the multipart upload was initiated.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Character you use to group keys.
   *
   * All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, `CommonPrefixes`. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under `CommonPrefixes` result element are not returned elsewhere in the response.
   *
   * `CommonPrefixes` is filtered out from results if it is not lexicographically greater than the key-marker.
   *
   * > **Note:** **Directory buckets** - For directory buckets, `/` is the only supported delimiter.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Encoding type used by Amazon S3 to encode the [object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see [Object key naming guidelines](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).
   *
   * > **Note:** When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object `test_file(3).png` will appear as `test_file%283%29.png`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * Specifies the multipart upload after which listing should begin.
   *
   * > **Note:**
   * >
   * > - **General purpose buckets** - For general purpose buckets, `key-marker` is an object key. Together with `upload-id-marker`, this parameter specifies the multipart upload after which listing should begin.
   * >
   * >   If `upload-id-marker` is not specified, only the keys lexicographically greater than the specified `key-marker` will be included in the list.
   * >
   * >   If `upload-id-marker` is specified, any multipart uploads for a key equal to the `key-marker` might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified `upload-id-marker`.
   * > - **Directory buckets** - For directory buckets, `key-marker` is obfuscated and isn't a real object key. The `upload-id-marker` parameter isn't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of `key-marker` to the `NextKeyMarker` value from the previous response.
   * >
   * >   In the `ListMultipartUploads` response, the multipart uploads aren't sorted lexicographically based on the object keys.
   *
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.
   *
   * @public
   */
  MaxUploads?: number | undefined;

  /**
   * Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using `prefix` to make groups in the same way that you'd use a folder in a file system.)
   *
   * > **Note:** **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified `upload-id-marker`.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  UploadIdMarker?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;
}

/**
 * Describes a single annotation attached to an object, including its name, last modified time, size, ETag, checksum algorithm, and replication status. Returned in the response from `ListObjectAnnotations`.
 *
 * @public
 */
export interface AnnotationEntry {
  /**
   * The name of the annotation.
   *
   * @public
   */
  AnnotationName: string | undefined;

  /**
   * The date and time the annotation was last modified.
   *
   * @public
   */
  LastModified: Date | undefined;

  /**
   * The entity tag of the annotation.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The checksum algorithm used for the annotation.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;

  /**
   * The size of the annotation payload, in bytes.
   *
   * @public
   */
  Size: number | undefined;

  /**
   * The replication status of the annotation.
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;
}

/**
 * @public
 */
export interface ListObjectAnnotationsOutput {
  /**
   * The list of annotations attached to the object.
   *
   * @public
   */
  Annotations?: AnnotationEntry[] | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The version ID of the object.
   *
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * The prefix used to filter the response.
   *
   * @public
   */
  AnnotationPrefix?: string | undefined;

  /**
   * The maximum number of annotations returned in the response.
   *
   * @public
   */
  MaxAnnotationResults?: number | undefined;

  /**
   * The number of annotations returned.
   *
   * @public
   */
  AnnotationCount?: number | undefined;

  /**
   * The continuation token used in this request.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The continuation token to use to retrieve the next page of results.
   *
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectAnnotationsRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The maximum number of annotations to return in the response. Maximum is 1,000.
   *
   * @public
   */
  MaxAnnotationResults?: number | undefined;

  /**
   * Filter results to annotations whose name begins with the specified prefix.
   *
   * @public
   */
  AnnotationPrefix?: string | undefined;

  /**
   * Continuation token returned by a previous request to retrieve the next page.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see [Working with archived objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** This functionality is not supported for directory buckets. Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
 *
 * @public
 */
export interface RestoreStatus {
  /**
   * Specifies whether the object is currently being restored. If the object restoration is in progress, the header returns the value `TRUE`. For example:
   *
   * `x-amz-optional-object-attributes: IsRestoreInProgress="true"`
   *
   * If the object restoration has completed, the header returns the value `FALSE`. For example:
   *
   * `x-amz-optional-object-attributes: IsRestoreInProgress="false", RestoreExpiryDate="2012-12-21T00:00:00.000Z"`
   *
   * If the object hasn't been restored, there is no header response.
   *
   * @public
   */
  IsRestoreInProgress?: boolean | undefined;

  /**
   * Indicates when the restored copy will expire. This value is populated only if the object has already been restored. For example:
   *
   * `x-amz-optional-object-attributes: IsRestoreInProgress="false", RestoreExpiryDate="2012-12-21T00:00:00.000Z"`
   *
   * @public
   */
  RestoreExpiryDate?: Date | undefined;
}

/**
 * An object consists of data and its descriptive metadata.
 *
 * @public
 */
export interface _Object {
  /**
   * The name that you assign to an object. You use the object key to retrieve the object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Creation date of the object.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is depends on how the object was created and how it is encrypted as described below:
   *
   * - Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of their object data.
   * - Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of their object data.
   * - If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest.
   *
   * > **Note:** **Directory buckets** - MD5 is not supported by directory buckets.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The algorithm that was used to create a checksum of the object.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;

  /**
   * The checksum type that is used to calculate the object’s checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * Size in bytes of the object
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The class of storage used to store the object.
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: ObjectStorageClass | undefined;

  /**
   * The owner of the object
   *
   * > **Note:** **Directory buckets** - The bucket owner is returned as the object owner.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see [Working with archived objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets. Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;
}

/**
 * @public
 */
export interface ListObjectsOutput {
  /**
   * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * Indicates where in the bucket listing begins. Marker is included in the response if it was sent with the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * When the response is truncated (the `IsTruncated` element value in the response is `true`), you can use the key name in this field as the `marker` parameter in the subsequent request to get the next set of objects. Amazon S3 lists objects in alphabetical order.
   *
   * > **Note:** This element is returned only if you have the `delimiter` request parameter specified. If the response does not include the `NextMarker` element and it is truncated, you can use the value of the last `Key` element in the response as the `marker` parameter in the subsequent request to get the next set of object keys.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Metadata about each object returned.
   *
   * @public
   */
  Contents?: _Object[] | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Keys that begin with the indicated prefix.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the `CommonPrefixes` collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the `MaxKeys` value.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The maximum number of keys returned in the response body.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * All of the keys (up to 1,000) rolled up in a common prefix count as a single return when calculating the number of returns.
   *
   * A response can contain `CommonPrefixes` only if you specify a delimiter.
   *
   * `CommonPrefixes` contains all (if there are any) keys between `Prefix` and the next occurrence of the string specified by the delimiter.
   *
   * `CommonPrefixes` lists keys that act like subdirectories in the directory specified by `Prefix`.
   *
   * For example, if the prefix is `notes/` and the delimiter is a slash (`/`), as in `notes/summer/july`, the common prefix is `notes/summer/`. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.
   *
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * Encoding type used by Amazon S3 to encode the [object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see [Object key naming guidelines](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).
   *
   * > **Note:** When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object `test_file(3).png` will appear as `test_file%283%29.png`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectsRequest {
  /**
   * The name of the bucket containing the objects.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A delimiter is a character that you use to group keys.
   *
   * `CommonPrefixes` is filtered out from results if it is not lexicographically greater than the key-marker.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Encoding type used by Amazon S3 to encode the [object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see [Object key naming guidelines](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).
   *
   * > **Note:** When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object `test_file(3).png` will appear as `test_file%283%29.png`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. Marker can be any key in the bucket.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * Limits the response to keys that begin with the specified prefix.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Confirms that the requester knows that she or he will be charged for the list objects request. Bucket owners need not specify this parameter in their requests.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.
   *
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * @public
 */
export interface ListObjectsV2Output {
  /**
   * Set to `false` if all of the results were returned. Set to `true` if more keys are available to return. If the number of results exceeds that specified by `MaxKeys`, all of the results might not be returned.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * Metadata about each object returned.
   *
   * @public
   */
  Contents?: _Object[] | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Keys that begin with the indicated prefix.
   *
   * > **Note:** **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Causes keys that contain the same string between the `prefix` and the first occurrence of the delimiter to be rolled up into a single result element in the `CommonPrefixes` collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the `MaxKeys` value.
   *
   * > **Note:** **Directory buckets** - For directory buckets, `/` is the only supported delimiter.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * All of the keys (up to 1,000) that share the same prefix are grouped together. When counting the total numbers of returns by this API operation, this group of keys is considered as one item.
   *
   * A response can contain `CommonPrefixes` only if you specify a delimiter.
   *
   * `CommonPrefixes` contains all (if there are any) keys between `Prefix` and the next occurrence of the string specified by a delimiter.
   *
   * `CommonPrefixes` lists keys that act like subdirectories in the directory specified by `Prefix`.
   *
   * For example, if the prefix is `notes/` and the delimiter is a slash (`/`) as in `notes/summer/july`, the common prefix is `notes/summer/`. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.
   *
   * > **Note:**
   * >
   * > - **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   * > - **Directory buckets** - When you query `ListObjectsV2` with a delimiter during in-progress multipart uploads, the `CommonPrefixes` response parameter contains the prefixes that are associated with the in-progress multipart uploads. For more information about multipart uploads, see [Multipart Upload Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * Encoding type used by Amazon S3 to encode object key names in the XML response.
   *
   * If you specify the `encoding-type` request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:
   *
   * `Delimiter, Prefix, Key,` and `StartAfter`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * `KeyCount` is the number of keys returned with this request. `KeyCount` will always be less than or equal to the `MaxKeys` field. For example, if you ask for 50 keys, your result will include 50 keys or fewer.
   *
   * @public
   */
  KeyCount?: number | undefined;

  /**
   * If `ContinuationToken` was sent with the request, it is included in the response. You can use the returned `ContinuationToken` for pagination of the list response.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * `NextContinuationToken` is sent when `isTruncated` is true, which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this `NextContinuationToken`. `NextContinuationToken` is obfuscated and is not a real key
   *
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * If StartAfter was sent with the request, it is included in the response.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  StartAfter?: string | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectsV2Request {
  /**
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A delimiter is a character that you use to group keys.
   *
   * `CommonPrefixes` is filtered out from results if it is not lexicographically greater than the `StartAfter` value.
   *
   * > **Note:**
   * >
   * > - **Directory buckets** - For directory buckets, `/` is the only supported delimiter.
   * > - **Directory buckets** - When you query `ListObjectsV2` with a delimiter during in-progress multipart uploads, the `CommonPrefixes` response parameter contains the prefixes that are associated with the in-progress multipart uploads. For more information about multipart uploads, see [Multipart Upload Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Encoding type used by Amazon S3 to encode the [object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see [Object key naming guidelines](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).
   *
   * > **Note:** When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object `test_file(3).png` will appear as `test_file%283%29.png`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * Limits the response to keys that begin with the specified prefix.
   *
   * > **Note:** **Directory buckets** - For directory buckets, only prefixes that end in a delimiter (`/`) are supported.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * `ContinuationToken` indicates to Amazon S3 that the list is being continued on this bucket with a token. `ContinuationToken` is obfuscated and is not a real key. You can use this `ContinuationToken` for pagination of the list results.
   *
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * The owner field is not present in `ListObjectsV2` by default. If you want to return the owner field with each key in the result, then set the `FetchOwner` field to `true`.
   *
   * > **Note:** **Directory buckets** - For directory buckets, the bucket owner is returned as the object owner for all objects.
   *
   * @public
   */
  FetchOwner?: boolean | undefined;

  /**
   * StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  StartAfter?: string | undefined;

  /**
   * Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * Information about the delete marker.
 *
 * @public
 */
export interface DeleteMarkerEntry {
  /**
   * The account that created the delete marker.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Version ID of an object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies whether the object is (true) or is not (false) the latest version of an object.
   *
   * @public
   */
  IsLatest?: boolean | undefined;

  /**
   * Date and time when the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * The version of an object.
 *
 * @public
 */
export interface ObjectVersion {
  /**
   * The entity tag is an MD5 hash of that version of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The algorithm that was used to create a checksum of the object.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;

  /**
   * The checksum type that is used to calculate the object’s checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * Size in bytes of the object.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The class of storage used to store the object.
   *
   * @public
   */
  StorageClass?: ObjectVersionStorageClass | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Version ID of an object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies whether the object is (true) or is not (false) the latest version of an object.
   *
   * @public
   */
  IsLatest?: boolean | undefined;

  /**
   * Date and time when the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Specifies the owner of the object.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see [Working with archived objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;
}

/**
 * @public
 */
export interface ListObjectVersionsOutput {
  /**
   * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria. If your results were truncated, you can make a follow-up paginated request by using the `NextKeyMarker` and `NextVersionIdMarker` response parameters as a starting place in another request to return the rest of the results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * Marks the last key returned in a truncated response.
   *
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * Marks the last version of the key returned in a truncated response.
   *
   * @public
   */
  VersionIdMarker?: string | undefined;

  /**
   * When the number of responses exceeds the value of `MaxKeys`, `NextKeyMarker` specifies the first key not returned that satisfies the search criteria. Use this value for the key-marker request parameter in a subsequent request.
   *
   * @public
   */
  NextKeyMarker?: string | undefined;

  /**
   * When the number of responses exceeds the value of `MaxKeys`, `NextVersionIdMarker` specifies the first object version not returned that satisfies the search criteria. Use this value for the `version-id-marker` request parameter in a subsequent request.
   *
   * @public
   */
  NextVersionIdMarker?: string | undefined;

  /**
   * Container for version information.
   *
   * @public
   */
  Versions?: ObjectVersion[] | undefined;

  /**
   * Container for an object that is a delete marker. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * @public
   */
  DeleteMarkers?: DeleteMarkerEntry[] | undefined;

  /**
   * The bucket name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Selects objects that start with the value supplied by this parameter.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The delimiter grouping the included keys. A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in `CommonPrefixes`. These groups are counted as one result against the `max-keys` limitation. These keys are not returned elsewhere in the response.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Specifies the maximum number of objects to return.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * All of the keys rolled up into a common prefix count as a single return when calculating the number of returns.
   *
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * Encoding type used by Amazon S3 to encode object key names in the XML response.
   *
   * If you specify the `encoding-type` request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:
   *
   * `KeyMarker, NextKeyMarker, Prefix, Key`, and `Delimiter`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectVersionsRequest {
  /**
   * The bucket name that contains the objects.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A delimiter is a character that you specify to group keys. All keys that contain the same string between the `prefix` and the first occurrence of the delimiter are grouped under a single result element in `CommonPrefixes`. These groups are counted as one result against the `max-keys` limitation. These keys are not returned elsewhere in the response.
   *
   * `CommonPrefixes` is filtered out from results if it is not lexicographically greater than the key-marker.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * Encoding type used by Amazon S3 to encode the [object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see [Object key naming guidelines](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).
   *
   * > **Note:** When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object `test_file(3).png` will appear as `test_file%283%29.png`.
   *
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * Specifies the key to start with when listing objects in a bucket.
   *
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because `max-keys` was exceeded, the response contains `<isTruncated>true</isTruncated>`. To return the additional keys, see `key-marker` and `version-id-marker`.
   *
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using `prefix` to make groups in the same way that you'd use a folder in a file system.) You can use `prefix` with `delimiter` to roll up numerous objects into a single result under `CommonPrefixes`.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Specifies the object version you want to start listing from.
   *
   * @public
   */
  VersionIdMarker?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.
   *
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * Container for elements related to a part.
 *
 * @public
 */
export interface Part {
  /**
   * Part number identifying the part. This is a positive integer between 1 and 10,000.
   *
   * @public
   */
  PartNumber?: number | undefined;

  /**
   * Date and time at which the part was uploaded.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Entity tag returned when the part was uploaded.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Size in bytes of the uploaded part data.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the part. This checksum is present if the object was uploaded with the `CRC32` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the part. This checksum is present if the object was uploaded with the `CRC32C` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the part. This checksum is present if the multipart upload request was created with the `CRC64NVME` checksum algorithm, or if the object was uploaded without a checksum (and Amazon S3 added the default checksum, `CRC64NVME`, to the uploaded object). For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` checksum of the part. This checksum is present if the object was uploaded with the `SHA1` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` checksum of the part. This checksum is present if the object was uploaded with the `SHA256` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the part. This checksum is present if the multipart upload request was created with the `SHA512` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the part. This checksum is present if the multipart upload request was created with the `MD5` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the part. This checksum is present if the multipart upload request was created with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;
}

/**
 * @public
 */
export interface ListPartsOutput {
  /**
   * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, then the response includes this header indicating when the initiated multipart upload will become eligible for abort operation. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config).
   *
   * The response will also include the `x-amz-abort-rule-id` header that will provide the ID of the lifecycle configuration rule that defines this action.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  AbortDate?: Date | undefined;

  /**
   * This header is returned along with the `x-amz-abort-date` header. It identifies applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  AbortRuleId?: string | undefined;

  /**
   * The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or access point alias if used.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Upload ID identifying the multipart upload whose parts are being listed.
   *
   * @public
   */
  UploadId?: string | undefined;

  /**
   * Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.
   *
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the `part-number-marker` request parameter in a subsequent request.
   *
   * @public
   */
  NextPartNumberMarker?: string | undefined;

  /**
   * Maximum number of parts that were allowed in the response.
   *
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * Indicates whether the returned list of parts is truncated. A true value indicates that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts element.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * Container for elements related to a particular part. A response can contain zero or more `Part` elements.
   *
   * @public
   */
  Parts?: Part[] | undefined;

  /**
   * Container element that identifies who initiated the multipart upload. If the initiator is an Amazon Web Services account, this element provides the same information as the `Owner` element. If the initiator is an IAM User, this element provides the user ARN.
   *
   * @public
   */
  Initiator?: Initiator | undefined;

  /**
   * Container element that identifies the object owner, after the object is created. If multipart upload is initiated by an IAM user, this element provides the parent account ID.
   *
   * > **Note:** **Directory buckets** - The bucket owner is returned as the object owner for all the parts.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * The class of storage used to store the uploaded object.
   *
   * > **Note:** **Directory buckets** - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * The algorithm that was used to create a checksum of the object.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The checksum type, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. You can use this header response to verify that the checksum type that is received is the same checksum type that was specified in `CreateMultipartUpload` request. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * @public
 */
export interface ListPartsRequest {
  /**
   * The name of the bucket to which the parts are being uploaded.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Sets the maximum number of parts to return.
   *
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.
   *
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * Upload ID identifying the multipart upload whose parts are being listed.
   *
   * @public
   */
  UploadId: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketAbacRequest {
  /**
   * The name of the general purpose bucket.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The MD5 hash of the `PutBucketAbac` request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm that you want Amazon S3 to use to create the checksum. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The Amazon Web Services account ID of the general purpose bucket's owner.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The ABAC status of the general purpose bucket. When ABAC is enabled for the general purpose bucket, you can use tags to manage access to the general purpose buckets as well as for cost tracking purposes. When ABAC is disabled for the general purpose buckets, you can only use tags for cost tracking purposes. For more information, see [Using tags with S3 general purpose buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging.html).
   *
   * @public
   */
  AbacStatus: AbacStatus | undefined;
}

/**
 * @public
 */
export interface PutBucketAccelerateConfigurationRequest {
  /**
   * The name of the bucket for which the accelerate configuration is set.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Container for setting the transfer acceleration state.
   *
   * @public
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutBucketAclRequest {
  /**
   * The canned ACL to apply to the bucket.
   *
   * @public
   */
  ACL?: BucketCannedACL | undefined;

  /**
   * Contains the elements that set the ACL permissions for an object per grantee.
   *
   * @public
   */
  AccessControlPolicy?: AccessControlPolicy | undefined;

  /**
   * The bucket to which to apply the ACL.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to [RFC 1864.](http://www.ietf.org/rfc/rfc1864.txt)
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to list the objects in the bucket.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the bucket ACL.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to create new objects in the bucket.
   *
   * For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
   *
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable bucket.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * The name of the bucket to which an analytics configuration is stored.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID that identifies the analytics configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The configuration and any analyses for the analytics filter.
   *
   * @public
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface CORSConfiguration {
  /**
   * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
   *
   * @public
   */
  CORSRules: CORSRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketCorsRequest {
  /**
   * Specifies the bucket impacted by the `cors`configuration.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to [RFC 1864.](http://www.ietf.org/rfc/rfc1864.txt)
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketEncryptionRequest {
  /**
   * Specifies default encryption for a bucket using server-side encryption with different key options.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the server-side encryption configuration.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * > **Note:** For directory buckets, when you use Amazon Web Services SDKs, `CRC32` is the default checksum algorithm that's used for performance.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Specifies the default server-side-encryption configuration.
   *
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Container for S3 Intelligent-Tiering configuration.
   *
   * @public
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

/**
 * @public
 */
export interface PutBucketInventoryConfigurationRequest {
  /**
   * The name of the bucket where the inventory configuration will be stored.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the inventory configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies the inventory configuration.
   *
   * @public
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationOutput {
  /**
   * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * - `all_storage_classes_128K` - Objects smaller than 128 KB will not transition to any storage class by default.
   * - `varies_by_storage_class` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.
   *
   * To customize the minimum object size for any transition you can add a filter that specifies a custom `ObjectSizeGreaterThan` or `ObjectSizeLessThan` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
   *
   * @public
   */
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}

/**
 * Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface BucketLifecycleConfiguration {
  /**
   * A lifecycle rule for individual objects in an Amazon S3 bucket.
   *
   * @public
   */
  Rules: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * The name of the bucket for which to set the configuration.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Container for lifecycle rules. You can add as many as 1,000 rules.
   *
   * @public
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
   *
   * > **Note:** This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.
   *
   * - `all_storage_classes_128K` - Objects smaller than 128 KB will not transition to any storage class by default.
   * - `varies_by_storage_class` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.
   *
   * To customize the minimum object size for any transition you can add a filter that specifies a custom `ObjectSizeGreaterThan` or `ObjectSizeLessThan` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
   *
   * @public
   */
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}

/**
 * Container for logging status information.
 *
 * @public
 */
export interface BucketLoggingStatus {
  /**
   * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see [PUT Bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html) in the *Amazon S3 API Reference*.
   *
   * @public
   */
  LoggingEnabled?: LoggingEnabled | undefined;
}

/**
 * @public
 */
export interface PutBucketLoggingRequest {
  /**
   * The name of the bucket for which to set the logging parameters.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Container for logging status information.
   *
   * @public
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * The MD5 hash of the `PutBucketLogging` request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketMetricsConfigurationRequest {
  /**
   * The name of the bucket for which the metrics configuration is set.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies the metrics configuration.
   *
   * @public
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketNotificationConfigurationRequest {
  /**
   * The name of the bucket.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.
   *
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations. True or false value.
   *
   * @public
   */
  SkipDestinationValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface PutBucketOwnershipControlsRequest {
  /**
   * The name of the Amazon S3 bucket whose `OwnershipControls` you want to set.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The MD5 hash of the `OwnershipControls` request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The `OwnershipControls` (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter) that you want to apply to this Amazon S3 bucket.
   *
   * @public
   */
  OwnershipControls: OwnershipControls | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum-algorithm` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * The name of the bucket.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format `bucket-base-name--zone-id--x-s3` (for example, `DOC-EXAMPLE-BUCKET--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The MD5 hash of the request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum-algorithm` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`.
   *
   * For the `x-amz-checksum-algorithm` header, replace `algorithm` with the supported algorithm from the following list:
   *
   * - `CRC32`
   * - `CRC32C`
   * - `CRC64NVME`
   * - `MD5`
   * - `SHA1`
   * - `SHA256`
   * - `SHA512`
   * - `XXHASH3`
   * - `XXHASH64`
   * - `XXHASH128`
   *
   * For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If the individual checksum value you provide through `x-amz-checksum-algorithm` doesn't match the checksum algorithm you set through `x-amz-sdk-checksum-algorithm`, Amazon S3 fails the request with a `BadDigest` error.
   *
   * > **Note:** For directory buckets, when you use Amazon Web Services SDKs, `CRC32` is the default checksum algorithm that's used for performance.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ConfirmRemoveSelfBucketAccess?: boolean | undefined;

  /**
   * The bucket policy as a JSON document.
   *
   * For directory buckets, the only IAM action supported in the bucket policy is `s3express:CreateSession`.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * > **Note:** For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code `501 Not Implemented`.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * The name of the bucket
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see [RFC 1864](http://www.ietf.org/rfc/rfc1864.txt).
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
   *
   * @public
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * A token to allow Object Lock to be enabled for an existing bucket.
   *
   * @public
   */
  Token?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Container for Payer.
 *
 * @public
 */
export interface RequestPaymentConfiguration {
  /**
   * Specifies who pays for the download and request fees.
   *
   * @public
   */
  Payer: Payer | undefined;
}

/**
 * @public
 */
export interface PutBucketRequestPaymentRequest {
  /**
   * The bucket name.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see [RFC 1864](http://www.ietf.org/rfc/rfc1864.txt).
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Container for Payer.
   *
   * @public
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Container for `TagSet` elements.
 *
 * @public
 */
export interface Tagging {
  /**
   * A collection for a set of tags
   *
   * @public
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * The bucket name.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see [RFC 1864](http://www.ietf.org/rfc/rfc1864.txt).
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Container for the `TagSet` and `Tag` elements.
   *
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Describes the versioning state of an Amazon S3 bucket. For more information, see [PUT Bucket versioning](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html) in the *Amazon S3 API Reference*.
 *
 * @public
 */
export interface VersioningConfiguration {
  /**
   * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
   *
   * @public
   */
  MFADelete?: MFADelete | undefined;

  /**
   * The versioning state of the bucket.
   *
   * @public
   */
  Status?: BucketVersioningStatus | undefined;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * The bucket name.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * >The Base64 encoded 128-bit `MD5` digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see [RFC 1864](http://www.ietf.org/rfc/rfc1864.txt).
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. The serial number is the number that uniquely identifies the MFA device. For physical MFA devices, this is the unique serial number that's provided with the device. For virtual MFA devices, the serial number is the device ARN. For more information, see [Enabling versioning on buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html) and [Configuring MFA delete](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  MFA?: string | undefined;

  /**
   * Container for setting the versioning state.
   *
   * @public
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies website configuration parameters for an Amazon S3 bucket.
 *
 * @public
 */
export interface WebsiteConfiguration {
  /**
   * The name of the error document for the website.
   *
   * @public
   */
  ErrorDocument?: ErrorDocument | undefined;

  /**
   * The name of the index document for the website.
   *
   * @public
   */
  IndexDocument?: IndexDocument | undefined;

  /**
   * The redirect behavior for every request to this bucket's website endpoint.
   *
   * > **Important:** If you specify this property, you can't specify any other property.
   *
   * @public
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo | undefined;

  /**
   * Rules that define when a redirect is applied and the redirect behavior.
   *
   * @public
   */
  RoutingRules?: RoutingRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketWebsiteRequest {
  /**
   * The bucket name.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see [RFC 1864](http://www.ietf.org/rfc/rfc1864.txt).
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Container for the request.
   *
   * @public
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * If the expiration is configured for the object (see [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)) in the *Amazon S3 User Guide*, the response includes this header. It includes the `expiry-date` and `rule-id` key-value pairs that provide information about object expiration. The value of the `rule-id` is URL-encoded.
   *
   * > **Note:** Object expiration information is not returned in directory buckets and this header returns the value "`NotImplemented`" in all responses for directory buckets.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * Entity tag for the uploaded object.
   *
   * **General purpose buckets** - To ensure that data is not corrupted traversing the network, for objects where the ETag is the MD5 digest of the object, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5 value.
   *
   * **Directory buckets** - The ETag for the object in a directory bucket isn't the MD5 digest of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32 checksum` of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the object. This header is present if the object was uploaded with the `CRC64NVME` checksum algorithm, or if it was uploaded without a checksum (and Amazon S3 added the default checksum, `CRC64NVME`, to the uploaded object). For more information about how checksums are calculated with multipart uploads, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the object. This checksum is only present if the checksum was uploaded with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated with multipart uploads, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` digest of the object. This header is present if the object was uploaded with the `SHA512` checksum algorithm. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` digest of the object. This header is present if the object was uploaded with the `MD5` checksum algorithm. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the object. This header is present if the object was uploaded with the `XXHASH64` checksum algorithm. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the object. This header is present if the object was uploaded with the `XXHASH3` checksum algorithm. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the object. This header is present if the object was uploaded with the `XXHASH128` checksum algorithm. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * This header specifies the checksum type of the object, which determines how part-level checksums are combined to create an object-level checksum for multipart objects. For `PutObject` uploads, the checksum type is always `FULL_OBJECT`. You can use this header as a data integrity check to verify that the checksum type that is received is the same checksum that was specified. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * Version ID of the object.
   *
   * If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects. For more information about versioning, see [Adding Objects to Versioning-Enabled Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html) in the *Amazon S3 User Guide*. For information about returning the versioning state of a bucket, see [GetBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to confirm the encryption algorithm that's used.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide the round-trip message integrity verification of the customer-provided encryption key.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * If present, indicates the ID of the KMS key that was used for object encryption.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future `GetObject` operations on this object.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * The size of the object in bytes. This value is only be present if you append to an object.
   *
   * > **Note:** This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectRequest {
  /**
   * The canned ACL to apply to the object. For more information, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL) in the *Amazon S3 User Guide*.
   *
   * When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) and [Managing ACLs Using the REST API](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html) in the *Amazon S3 User Guide*.
   *
   * If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the `bucket-owner-full-control` canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a `400` error with the error code `AccessControlListNotSupported`. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  ACL?: ObjectCannedACL | undefined;

  /**
   * Object data.
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * The bucket name to which the PUT action was initiated.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Object Lambda access points are not supported by directory buckets.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Can be used to specify caching behavior along the request/reply chain. For more information, see [http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Specifies presentational information for the object. For more information, see [https://www.rfc-editor.org/rfc/rfc6266#section-4](https://www.rfc-editor.org/rfc/rfc6266#section-4).
   *
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see [https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding).
   *
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * The language the content is in.
   *
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see [https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length](https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length).
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see [REST Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html).
   *
   * > **Note:** The `Content-MD5` or `x-amz-sdk-checksum-algorithm` header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see [Uploading objects to an Object Lock enabled bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-put-object) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * A standard MIME type describing the format of the contents. For more information, see [https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type](https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type).
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum-algorithm` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`.
   *
   * For the `x-amz-checksum-algorithm` header, replace `algorithm` with the supported algorithm from the following list:
   *
   * - `CRC32`
   * - `CRC32C`
   * - `CRC64NVME`
   * - `MD5`
   * - `SHA1`
   * - `SHA256`
   * - `SHA512`
   * - `XXHASH3`
   * - `XXHASH64`
   * - `XXHASH128`
   *
   * For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If the individual checksum value you provide through `x-amz-checksum-algorithm` doesn't match the checksum algorithm you set through `x-amz-sdk-checksum-algorithm`, Amazon S3 fails the request with a `BadDigest` error.
   *
   * > **Note:** The `Content-MD5` or `x-amz-sdk-checksum-algorithm` header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see [Uploading objects to an Object Lock enabled bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-put-object) in the *Amazon S3 User Guide*.
   *
   * For directory buckets, when you use Amazon Web Services SDKs, `CRC32` is the default checksum algorithm that's used for performance.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit `CRC32` checksum of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 32-bit `CRC32C` checksum of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `CRC64NVME` checksum of the object. The `CRC64NVME` checksum is always a full object checksum. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 160-bit `SHA1` digest of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 256-bit `SHA256` digest of the object. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit `SHA512` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `MD5` digest of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH64` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH3` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `XXHASH128` checksum of the object. For more information, see [Checking object integrity in the Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html).
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The date and time at which the object is no longer cacheable. For more information, see [https://www.rfc-editor.org/rfc/rfc7234#section-5.3](https://www.rfc-editor.org/rfc/rfc7234#section-5.3).
   *
   * @public
   */
  Expires?: Date | undefined;

  /**
   * Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a `412 Precondition Failed` error.
   *
   * If a conflicting operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should fetch the object's ETag and retry the upload.
   *
   * Expects the ETag value as a string.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232), or [Conditional requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a `412 Precondition Failed` error.
   *
   * If a conflicting operation occurs during the upload S3 returns a `409 ConditionalRequestConflict` response. On a 409 failure you should retry the upload.
   *
   * Expects the '*' (asterisk) character.
   *
   * For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232), or [Conditional requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  IfNoneMatch?: string | undefined;

  /**
   * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to read the object data and its metadata.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the object ACL.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable object.
   *
   * > **Note:**
   * >
   * > - This functionality is not supported for directory buckets.
   * > - This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Object key for which the PUT action was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Specifies the offset for appending data to existing objects in bytes. The offset must be equal to the size of the existing object being appended to. If no object exists, setting this header to 0 will create a new object.
   *
   * > **Note:** This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets.
   *
   * @public
   */
  WriteOffsetBytes?: number | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * The server-side encryption algorithm that was used when you store this object in Amazon S3 or Amazon FSx.
   *
   * - **General purpose buckets** - You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see [Using Server-Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) in the *Amazon S3 User Guide*.
   * - **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your `CreateSession` requests or `PUT` object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*. For more information about the encryption overriding behaviors in directory buckets, see [Specifying server-side encryption with KMS for new object uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html).
   *
   *   In the Zonal endpoint API calls (except [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) and [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)) using the REST API, the encryption request headers must match the encryption settings that are specified in the `CreateSession` request. You can't override the values of the encryption settings (`x-amz-server-side-encryption`, `x-amz-server-side-encryption-aws-kms-key-id`, `x-amz-server-side-encryption-context`, and `x-amz-server-side-encryption-bucket-key-enabled`) that are specified in the `CreateSession` request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the `CreateSession` request to protect new objects in the directory bucket.
   *
   *   > **Note:** When you use the CLI or the Amazon Web Services SDKs, for `CreateSession`, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the `CreateSession` request. It's not supported to override the encryption settings values in the `CreateSession` request. So in the Zonal endpoint API calls (except [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) and [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html)), the encryption request headers must match the default encryption configuration of the directory bucket.
   * - **S3 access points for Amazon FSx** - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:**
   * >
   * > - Directory buckets only support `EXPRESS_ONEZONE` (the S3 Express One Zone storage class) in Availability Zones and `ONEZONE_IA` (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.
   * > - Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see [Object Key and Metadata](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html) in the *Amazon S3 User Guide*.
   *
   * In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:
   *
   * `x-amz-website-redirect-location: /anotherPage.html`
   *
   * In the following example, the request header sets the object redirect to another website:
   *
   * `x-amz-website-redirect-location: http://www.example.com/`
   *
   * For more information about website hosting in Amazon S3, see [Hosting Websites on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) and [How to Configure Website Page Redirects](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, `AES256`).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID.
   *
   * **General purpose buckets** - If you specify `x-amz-server-side-encryption` with `aws:kms` or `aws:kms:dsse`, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify `x-amz-server-side-encryption:aws:kms` or `x-amz-server-side-encryption:aws:kms:dsse`, but do not provide `x-amz-server-side-encryption-aws-kms-key-id`, Amazon S3 uses the Amazon Web Services managed key (`aws/s3`) to protect the data.
   *
   * **Directory buckets** - To encrypt data using SSE-KMS, it's recommended to specify the `x-amz-server-side-encryption` header to `aws:kms`. Then, the `x-amz-server-side-encryption-aws-kms-key-id` header implicitly uses the bucket's default KMS customer managed key ID. If you want to explicitly set the `x-amz-server-side-encryption-aws-kms-key-id` header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported. Incorrect key specification results in an HTTP `400 Bad Request` error.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future `GetObject` operations on this object.
   *
   * **General purpose buckets** - This value must be explicitly added during `CopyObject` operations if you want an additional encryption context for your object. For more information, see [Encryption context](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context) in the *Amazon S3 User Guide*.
   *
   * **Directory buckets** - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
   *
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).
   *
   * **General purpose buckets** - Setting this header to `true` causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.
   *
   * **Directory buckets** - S3 Bucket Keys are always enabled for `GET` and `PUT` operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  Tagging?: string | undefined;

  /**
   * The Object Lock mode that you want to apply to this object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see [Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * Specifies the event hold status to apply to this object. Set to `ON` to enable or `OFF` to disable.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: ObjectLockEventHold | undefined;

  /**
   * Specifies the event hold duration in days to apply to this object. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationDays?: number | undefined;

  /**
   * Specifies the event hold duration in years to apply to this object. You cannot specify a duration in both days and years.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDurationYears?: number | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectAclOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectAclRequest {
  /**
   * The canned ACL to apply to the object. For more information, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL).
   *
   * @public
   */
  ACL?: ObjectCannedACL | undefined;

  /**
   * Contains the elements that set the ACL permissions for an object per grantee.
   *
   * @public
   */
  AccessControlPolicy?: AccessControlPolicy | undefined;

  /**
   * The bucket name that contains the object to which you want to attach the ACL.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Base64 encoded 128-bit `MD5` digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to [RFC 1864.>](http://www.ietf.org/rfc/rfc1864.txt)
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   *
   * This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to list the objects in the bucket.
   *
   * This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the bucket ACL.
   *
   * This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to create new objects in the bucket.
   *
   * For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
   *
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable bucket.
   *
   * This functionality is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Key for which the PUT action was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * Version ID used to reference a specific version of the object.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectAnnotationOutput {
  /**
   * The object key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The name of the annotation.
   *
   * @public
   */
  AnnotationName?: string | undefined;

  /**
   * The version ID of the object that the annotation was attached to.
   *
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * The entity tag of the annotation.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The CRC32 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The CRC32C checksum of the stored annotation.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The CRC64NVME checksum of the stored annotation.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The SHA1 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The SHA256 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The SHA512 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The MD5 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The XXHASH64 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The XXHASH3 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The XXHASH128 checksum of the stored annotation.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * The type of checksum used.
   *
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * The server-side encryption algorithm used to encrypt the annotation.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectAnnotationRequest {
  /**
   * The name of the bucket that contains the object.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID of the object to attach the annotation to.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The name of the annotation.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512 bytes.
   *
   * @public
   */
  AnnotationName: string | undefined;

  /**
   * The annotation payload. Must be between 1 byte and 1 MiB in size, and must be valid UTF-8 encoded text. If the payload contains invalid UTF-8 bytes, the request fails with HTTP 415 (Unsupported Media Type). To store binary data, encode the payload using Base64 before uploading.
   *
   * @public
   */
  AnnotationPayload: StreamingBlobTypes | undefined;

  /**
   * If specified, the operation only succeeds if the object's ETag matches the provided value.
   *
   * @public
   */
  ObjectIfMatch?: string | undefined;

  /**
   * The checksum algorithm to use. Supported values: `CRC32`, `CRC32C`, `CRC64NVME`, `SHA1`, `SHA256`, `SHA512`, `MD5`, `XXHASH64`, `XXHASH3`, `XXHASH128`.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Base64-encoded CRC32 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * Base64-encoded CRC32C checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * Base64-encoded CRC64NVME checksum of the annotation payload.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * Base64-encoded SHA1 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * Base64-encoded SHA256 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * Base64-encoded SHA512 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * Base64-encoded MD5 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * Base64-encoded XXHASH64 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * Base64-encoded XXHASH3 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * Base64-encoded XXHASH128 checksum of the annotation payload.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * Base64-encoded MD5 digest of the message.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with an HTTP 403 (Access Denied) error.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectLegalHoldOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectLegalHoldRequest {
  /**
   * The bucket name containing the object that you want to place a legal hold on.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key name for the object that you want to place a legal hold on.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Container element for the legal hold configuration you want to apply to the specified object.
   *
   * @public
   */
  LegalHold?: ObjectLockLegalHold | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The version ID of the object that you want to place a legal hold on.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The MD5 hash for the request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationRequest {
  /**
   * The bucket whose Object Lock configuration you want to create or replace.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Object Lock configuration that you want to apply to the specified bucket.
   *
   * @public
   */
  ObjectLockConfiguration?: ObjectLockConfiguration | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * A token to allow Object Lock to be enabled for an existing bucket.
   *
   * @public
   */
  Token?: string | undefined;

  /**
   * The MD5 hash for the request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectRetentionOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectRetentionRequest {
  /**
   * The bucket name that contains the object you want to apply this Object Retention configuration to.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key name for the object that you want to apply this Object Retention configuration to.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The container element for the Object Retention configuration.
   *
   * @public
   */
  Retention?: ObjectLockRetention | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The version ID for the object that you want to apply this Object Retention configuration to.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Indicates whether this action should bypass Governance-mode restrictions.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * The MD5 hash for the request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectTaggingOutput {
  /**
   * The versionId of the object the tag-set was added to.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectTaggingRequest {
  /**
   * The bucket name containing the object.
   *
   * **Access points** - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form *AccessPointName*-*AccountId*.s3-accesspoint.*Region*.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) in the *Amazon S3 User Guide*.
   *
   * **S3 on Outposts** - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see [What is S3 on Outposts?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Name of the object key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The versionId of the object that the tag-set will be added to.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The MD5 hash for the request body.
   *
   * For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * Container for the `TagSet` and `Tag` elements
   *
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Confirms that the requester knows that she or he will be charged for the tagging object request. Bucket owners need not specify this parameter in their requests.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;
}
