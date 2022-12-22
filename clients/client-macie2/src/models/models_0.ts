// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { Macie2ServiceException as __BaseException } from "./Macie2ServiceException";

export enum AdminStatus {
  DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.</p>
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The current status of the account as the delegated Amazon Macie administrator account for the organization.</p>
   */
  status?: AdminStatus | string;
}

/**
 * <p>Provides a subset of information about an allow list.</p>
 */
export interface AllowListSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</p>
   */
  createdAt?: Date;

  /**
   * <p>The custom description of the allow list.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the allow list.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the allow list.</p>
   */
  name?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</p>
   */
  updatedAt?: Date;
}

/**
 * <p>Provides information about a custom data identifier.</p>
 */
export interface BatchGetCustomDataIdentifierSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;
}

export enum AllowsUnencryptedObjectUploads {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
}

export enum BucketMetadataErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
}

export enum IsDefinedInJob {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
}

export enum IsMonitoredByJob {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.</p>
 */
export interface JobDetails {
  /**
   * <p>Specifies whether any one-time or recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more jobs and at least one of those jobs has a status other than CANCELLED. Or the bucket matched the bucket criteria (S3BucketCriteriaForJob) for at least one job that previously ran.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any jobs, all the jobs that explicitly include the bucket in their bucket definitions have a status of CANCELLED, or the bucket didn't match the bucket criteria (S3BucketCriteriaForJob) for any jobs that previously ran.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>
   */
  isDefinedInJob?: IsDefinedInJob | string;

  /**
   * <p>Specifies whether any recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more recurring jobs or the bucket matches the bucket criteria (S3BucketCriteriaForJob) for one or more recurring jobs. At least one of those jobs has a status other than CANCELLED.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any recurring jobs, the bucket doesn't match the bucket criteria (S3BucketCriteriaForJob) for any recurring jobs, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>
   */
  isMonitoredByJob?: IsMonitoredByJob | string;

  /**
   * <p>The unique identifier for the job that ran most recently and is configured to analyze data in the bucket, either the latest run of a recurring job or the only run of a one-time job.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   */
  lastJobId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   */
  lastJobRunTime?: Date;
}

/**
 * <p>Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.</p>
 */
export interface ObjectCountByEncryptionType {
  /**
   * <p>The total number of objects that are encrypted with a customer-provided key. The objects use customer-provided server-side encryption (SSE-C).</p>
   */
  customerManaged?: number;

  /**
   * <p>The total number of objects that are encrypted with an KMS key, either an Amazon Web Services managed key or a customer managed key. The objects use KMS encryption (SSE-KMS).</p>
   */
  kmsManaged?: number;

  /**
   * <p>The total number of objects that are encrypted with an Amazon S3 managed key. The objects use Amazon S3 managed encryption (SSE-S3).</p>
   */
  s3Managed?: number;

  /**
   * <p>The total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  unencrypted?: number;

  /**
   * <p>The total number of objects that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the encryption settings for these objects.</p>
   */
  unknown?: number;
}

export enum EffectivePermission {
  NOT_PUBLIC = "NOT_PUBLIC",
  PUBLIC = "PUBLIC",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface BlockPublicAccess {
  /**
   * <p>Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.</p>
   */
  blockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 blocks public bucket policies for the bucket.</p>
   */
  blockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.</p>
   */
  ignorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 restricts public bucket policies for the bucket.</p>
   */
  restrictPublicBuckets?: boolean;
}

/**
 * <p>Provides information about the account-level permissions settings that apply to an S3 bucket.</p>
 */
export interface AccountLevelPermissions {
  /**
   * <p>The block public access settings for the Amazon Web Services account that owns the bucket.</p>
   */
  blockPublicAccess?: BlockPublicAccess;
}

/**
 * <p>Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.</p>
 */
export interface AccessControlList {
  /**
   * <p>Specifies whether the ACL grants the general public with read access permissions for the bucket.</p>
   */
  allowsPublicReadAccess?: boolean;

  /**
   * <p>Specifies whether the ACL grants the general public with write access permissions for the bucket.</p>
   */
  allowsPublicWriteAccess?: boolean;
}

/**
 * <p>Provides information about the permissions settings of the bucket policy for an S3 bucket.</p>
 */
export interface BucketPolicy {
  /**
   * <p>Specifies whether the bucket policy allows the general public to have read access to the bucket.</p>
   */
  allowsPublicReadAccess?: boolean;

  /**
   * <p>Specifies whether the bucket policy allows the general public to have write access to the bucket.</p>
   */
  allowsPublicWriteAccess?: boolean;
}

/**
 * <p>Provides information about the bucket-level permissions settings for an S3 bucket.</p>
 */
export interface BucketLevelPermissions {
  /**
   * <p>The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.</p>
   */
  accessControlList?: AccessControlList;

  /**
   * <p>The block public access settings for the bucket.</p>
   */
  blockPublicAccess?: BlockPublicAccess;

  /**
   * <p>The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.</p>
   */
  bucketPolicy?: BucketPolicy;
}

/**
 * <p>Provides information about the account-level and bucket-level permissions settings for an S3 bucket.</p>
 */
export interface BucketPermissionConfiguration {
  /**
   * <p>The account-level permissions settings that apply to the bucket.</p>
   */
  accountLevelPermissions?: AccountLevelPermissions;

  /**
   * <p>The bucket-level permissions settings for the bucket.</p>
   */
  bucketLevelPermissions?: BucketLevelPermissions;
}

/**
 * <p>Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.</p>
 */
export interface BucketPublicAccess {
  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are:</p> <ul><li><p>NOT_PUBLIC - The bucket isn't publicly accessible.</p></li> <li><p>PUBLIC - The bucket is publicly accessible.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.</p></li></ul>
   */
  effectivePermission?: EffectivePermission | string;

  /**
   * <p>The account-level and bucket-level permissions settings for the bucket.</p>
   */
  permissionConfiguration?: BucketPermissionConfiguration;
}

/**
 * <p>Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.</p>
 */
export interface ReplicationDetails {
  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to any destination.</p>
   */
  replicated?: boolean;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to an Amazon Web Services account that isn't part of the same Amazon Macie organization.</p>
   */
  replicatedExternally?: boolean;

  /**
   * <p>An array of Amazon Web Services account IDs, one for each Amazon Web Services account that the bucket is configured to replicate one or more objects to.</p>
   */
  replicationAccounts?: string[];
}

export enum Type {
  AES256 = "AES256",
  NONE = "NONE",
  aws_kms = "aws:kms",
}

/**
 * <p>Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface BucketServerSideEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used by default to encrypt objects that are added to the bucket. This value is null if the bucket uses an Amazon S3 managed key to encrypt new objects or the bucket doesn't encrypt new objects by default.</p>
   */
  kmsMasterKeyId?: string;

  /**
   * <p>The type of server-side encryption that's used by default when storing new objects in the bucket. Possible values are:</p> <ul><li><p>AES256 - New objects are encrypted with an Amazon S3 managed key. They use SSE-S3 encryption.</p></li> <li><p>aws:kms - New objects are encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key. They use SSE-KMS encryption.</p></li> <li><p>NONE - New objects aren't encrypted by default. Default encryption is disabled for the bucket.</p></li></ul>
   */
  type?: Type | string;
}

export enum SharedAccess {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
  NOT_SHARED = "NOT_SHARED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.</p>
 */
export interface KeyValuePair {
  /**
   * <p>One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.</p>
   */
  key?: string;

  /**
   * <p>One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.</p>
   */
  value?: string;
}

/**
 * <p>Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket.</p>
 */
export interface ObjectLevelStatistics {
  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.</p>
   */
  fileType?: number;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.</p>
   */
  storageClass?: number;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  total?: number;
}

/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket and the bucket's objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>
 */
export interface BucketMetadata {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the bucket.</p>
   */
  accountId?: string;

  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are uploaded to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  bucketArn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created, or changes such as edits to the bucket's policy were most recently made to the bucket.</p>
   */
  bucketCreatedAt?: Date;

  /**
   * <p>The name of the bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>Specifies the error code for an error that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. If this value is ACCESS_DENIED, Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request. If this value is null, Macie was able to retrieve and process the information.</p>
   */
  errorCode?: BucketMetadataErrorCode | string;

  /**
   * <p>A brief description of the error (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.</p>
   */
  errorMessage?: string;

  /**
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze data in the bucket, and, if so, the details of the job that ran most recently.</p>
   */
  jobDetails?: JobDetails;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently performed automated sensitive data discovery for the bucket. This value is null if automated sensitive data discovery is currently disabled for your account.</p>
   */
  lastAutomatedDiscoveryTime?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved both bucket and object metadata from Amazon S3 for the bucket.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>The total number of objects in the bucket.</p>
   */
  objectCount?: number;

  /**
   * <p>The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket, and provides information about those settings.</p>
   */
  publicAccess?: BucketPublicAccess;

  /**
   * <p>The Amazon Web Services Region that hosts the bucket.</p>
   */
  region?: string;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to buckets for other Amazon Web Services accounts and, if so, which accounts.</p>
   */
  replicationDetails?: ReplicationDetails;

  /**
   * <p>The sensitivity score for the bucket, ranging from -1 (no analysis due to an error) to 100 (sensitive). This value is null if automated sensitive data discovery is currently disabled for your account.</p>
   */
  sensitivityScore?: number;

  /**
   * <p>Specifies whether the bucket encrypts new objects by default and, if so, the type of server-side encryption that's used.</p>
   */
  serverSideEncryption?: BucketServerSideEncryption;

  /**
   * <p>Specifies whether the bucket is shared with another Amazon Web Services account. Possible values are:</p> <ul><li><p>EXTERNAL - The bucket is shared with an Amazon Web Services account that isn't part of the same Amazon Macie organization.</p></li> <li><p>INTERNAL - The bucket is shared with an Amazon Web Services account that's part of the same Amazon Macie organization.</p></li> <li><p>NOT_SHARED - The bucket isn't shared with other Amazon Web Services accounts.</p></li> <li><p>UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.</p></li></ul>
   */
  sharedAccess?: SharedAccess | string;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>An array that specifies the tags (keys and values) that are associated with the bucket.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

  /**
   * <p>Specifies whether versioning is enabled for the bucket.</p>
   */
  versioning?: boolean;
}

/**
 * <p>Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account.</p>
 */
export interface ClassificationScopeSummary {
  /**
   * <p>The unique identifier for the classification scope.</p>
   */
  id?: string;

  /**
   * <p>The name of the classification scope.</p>
   */
  name?: string;
}

export enum JobComparator {
  CONTAINS = "CONTAINS",
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  NE = "NE",
  STARTS_WITH = "STARTS_WITH",
}

export enum SimpleCriterionKeyForJob {
  ACCOUNT_ID = "ACCOUNT_ID",
  S3_BUCKET_EFFECTIVE_PERMISSION = "S3_BUCKET_EFFECTIVE_PERMISSION",
  S3_BUCKET_NAME = "S3_BUCKET_NAME",
  S3_BUCKET_SHARED_ACCESS = "S3_BUCKET_SHARED_ACCESS",
}

/**
 * <p>Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.</p>
 */
export interface SimpleCriterionForJob {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The property to use in the condition.</p>
   */
  key?: SimpleCriterionKeyForJob | string;

  /**
   * <p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the bucket.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of a bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of a bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of a bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in these values.</p>
   */
  values?: string[];
}

/**
 * <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
 */
export interface TagCriterionPairForJob {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The tag value to use in the condition.</p>
   */
  value?: string;
}

/**
 * <p>Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.</p>
 */
export interface TagCriterionForJob {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The tag keys, tag values, or tag key and value pairs to use in the condition.</p>
   */
  tagValues?: TagCriterionPairForJob[];
}

/**
 * <p>Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.</p>
 */
export interface CriteriaForJob {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding buckets from the job.</p>
   */
  simpleCriterion?: SimpleCriterionForJob;

  /**
   * <p>A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding buckets from the job.</p>
   */
  tagCriterion?: TagCriterionForJob;
}

/**
 * <p>Provides information about a custom data identifier.</p>
 */
export interface CustomDataIdentifierSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;
}

/**
 * <p>Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding.</p>
 */
export interface DetectedDataDetails {
  /**
   * <p>An occurrence of the specified type of sensitive data. Each occurrence can contain 1-128 characters.</p>
   */
  value: string | undefined;
}

export enum DataIdentifierType {
  CUSTOM = "CUSTOM",
  MANAGED = "MANAGED",
}

/**
 * <p>Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account.</p>
 */
export interface Detection {
  /**
   * <p>If the sensitive data was detected by a custom data identifier, the Amazon Resource Name (ARN) of the custom data identifier that detected the data. Otherwise, this value is null.</p>
   */
  arn?: string;

  /**
   * <p>The total number of occurrences of the sensitive data.</p>
   */
  count?: number;

  /**
   * <p>The unique identifier for the custom data identifier or managed data identifier that detected the sensitive data. For additional details about a specified managed data identifier, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
   */
  id?: string;

  /**
   * <p>The name of the custom data identifier or managed data identifier that detected the sensitive data. For a managed data identifier, this value is the same as the unique identifier (id).</p>
   */
  name?: string;

  /**
   * <p>Specifies whether occurrences of this type of sensitive data are excluded (true) or included (false) in the bucket's sensitivity score.</p>
   */
  suppressed?: boolean;

  /**
   * <p>The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.</p>
   */
  type?: DataIdentifierType | string;
}

export enum FindingCategory {
  CLASSIFICATION = "CLASSIFICATION",
  POLICY = "POLICY",
}

export enum OriginType {
  AUTOMATED_SENSITIVE_DATA_DISCOVERY = "AUTOMATED_SENSITIVE_DATA_DISCOVERY",
  SENSITIVE_DATA_DISCOVERY_JOB = "SENSITIVE_DATA_DISCOVERY_JOB",
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.</p>
 */
export interface Cell {
  /**
   * <p>The location of the cell, as an absolute cell reference, that contains the sensitive data, for example Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.</p>
   */
  cellReference?: string;

  /**
   * <p>The column number of the column that contains the sensitive data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier, for example: 1 for column A, 2 for column B, and so on.</p>
   */
  column?: number;

  /**
   * <p>The name of the column that contains the sensitive data, if available.</p>
   */
  columnName?: string;

  /**
   * <p>The row number of the row that contains the sensitive data.</p>
   */
  row?: number;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.</p>
 */
export interface Range {
  /**
   * <p>The number of lines from the beginning of the file to the end of the sensitive data.</p>
   */
  end?: number;

  /**
   * <p>The number of lines from the beginning of the file to the beginning of the sensitive data.</p>
   */
  start?: number;

  /**
   * <p>The number of characters, with spaces and starting from 1, from the beginning of the first line that contains the sensitive data (start) to the beginning of the sensitive data.</p>
   */
  startColumn?: number;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.</p>
 */
export interface Page {
  /**
   * <p>Reserved for future use.</p>
   */
  lineRange?: Range;

  /**
   * <p>Reserved for future use.</p>
   */
  offsetRange?: Range;

  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  pageNumber?: number;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the sensitive data. For an Avro object container or Parquet file, this is the path to the field in the record (recordIndex) that contains the data. For a JSON or JSON Lines file, this is the path to the field or array that contains the data. If the data is a value in an array, the path also indicates which value contains the data.</p> <p>If Amazon Macie detects sensitive data in the name of any element in the path, Macie omits this field. If the name of an element exceeds 20 characters, Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.</p>
   */
  jsonPath?: string;

  /**
   * <p>For an Avro object container or Parquet file, the record index, starting from 0, for the record that contains the sensitive data. For a JSON Lines file, the line index, starting from 0, for the line that contains the sensitive data. This value is always 0 for JSON files.</p>
   */
  recordIndex?: number;
}

/**
 * <p>Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.</p>
 */
export interface Occurrences {
  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. This value is null for all other types of files.</p> <p>Each Cell object specifies a cell or field that contains the sensitive data.</p>
   */
  cells?: Cell[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file. Each Range object specifies a line or inclusive range of lines that contains the sensitive data, and the position of the data on the specified line or lines.</p> <p>This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the location of sensitive data in: unstructured sections of an otherwise structured file, such as a comment in a file; a malformed file that Amazon Macie analyzes as plain text; and, a CSV or TSV file that has any column names that contain sensitive data.</p>
   */
  lineRanges?: Range[];

  /**
   * <p>Reserved for future use.</p>
   */
  offsetRanges?: Range[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. This value is null for all other types of files.</p> <p>Each Page object specifies a page that contains the sensitive data.</p>
   */
  pages?: Page[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. This value is null for all other types of files.</p> <p>For an Avro object container or Parquet file, each Record object specifies a record index and the path to a field in a record that contains the sensitive data. For a JSON or JSON Lines file, each Record object specifies the path to a field or array that contains the sensitive data. For a JSON Lines file, it also specifies the index of the line that contains the data.</p>
   */
  records?: _Record[];
}

/**
 * <p>Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.</p>
 */
export interface CustomDetection {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The total number of occurrences of the sensitive data that the custom data identifier detected.</p>
   */
  count?: number;

  /**
   * <p>The name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   */
  occurrences?: Occurrences;
}

/**
 * <p>Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.</p>
 */
export interface CustomDataIdentifiers {
  /**
   * <p>The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.</p>
   */
  detections?: CustomDetection[];

  /**
   * <p>The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.</p>
   */
  totalCount?: number;
}

export enum SensitiveDataItemCategory {
  CREDENTIALS = "CREDENTIALS",
  CUSTOM_IDENTIFIER = "CUSTOM_IDENTIFIER",
  FINANCIAL_INFORMATION = "FINANCIAL_INFORMATION",
  PERSONAL_INFORMATION = "PERSONAL_INFORMATION",
}

/**
 * <p>Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.</p>
 */
export interface DefaultDetection {
  /**
   * <p>The total number of occurrences of the type of sensitive data that was detected.</p>
   */
  count?: number;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   */
  occurrences?: Occurrences;

  /**
   * <p>The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.</p>
   */
  type?: string;
}

/**
 * <p>Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.</p>
 */
export interface SensitiveDataItem {
  /**
   * <p>The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
   */
  category?: SensitiveDataItemCategory | string;

  /**
   * <p>An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.</p>
   */
  detections?: DefaultDetection[];

  /**
   * <p>The total number of occurrences of the sensitive data that was detected.</p>
   */
  totalCount?: number;
}

/**
 * <p>Provides information about the status of a sensitive data finding.</p>
 */
export interface ClassificationResultStatus {
  /**
   * <p>The status of the finding. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the S3 object that the finding applies to.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of the data in the S3 object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the S3 object that the finding applies to. For example, the object is a file that uses an unsupported format.</p></li></ul>
   */
  code?: string;

  /**
   * <p>A brief description of the status of the finding. This value is null if the status (code) of the finding is COMPLETE.</p> <p>Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding and the affected S3 object. Possible values are:</p> <ul><li><p>ARCHIVE_CONTAINS_UNPROCESSED_FILES - The object is an archive file and Macie extracted and analyzed only some or none of the files in the archive. To determine which files Macie analyzed, if any, you can refer to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).</p></li> <li><p>ARCHIVE_EXCEEDS_SIZE_LIMIT - The object is an archive file whose total storage size exceeds the size quota for this type of archive.</p></li> <li><p>ARCHIVE_NESTING_LEVEL_OVER_LIMIT - The object is an archive file whose nested depth exceeds the quota for the maximum number of nested levels that Macie analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_BYTES_EXTRACTED_OVER_LIMIT - The object is an archive file that exceeds the quota for the maximum amount of data that Macie extracts and analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_DOCUMENTS_PROCESSED_OVER_LIMIT - The object is an archive file that contains more than the maximum number of files that Macie extracts and analyzes for this type of archive.</p></li> <li><p>FILE_EXCEEDS_SIZE_LIMIT - The storage size of the object exceeds the size quota for this type of file.</p></li> <li><p>INVALID_ENCRYPTION - The object is encrypted using server-side encryption but Macie isn’t allowed to use the key. Macie can’t decrypt and analyze the object.</p></li> <li><p>INVALID_KMS_KEY - The object is encrypted with an KMS key that was disabled or is being deleted. Macie can’t decrypt and analyze the object.</p></li> <li><p>INVALID_OBJECT_STATE - The object doesn’t use a supported Amazon S3 storage class. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/data-classification.html">Discovering sensitive data</a> in the <i>Amazon Macie User Guide</i>.</p></li> <li><p>JSON_NESTING_LEVEL_OVER_LIMIT - The object contains JSON data and the nested depth of the data exceeds the quota for the number of nested levels that Macie analyzes for this type of file.</p></li> <li><p>MALFORMED_FILE - The object is a malformed or corrupted file. An error occurred when Macie attempted to detect the file’s type or extract data from the file.</p></li> <li><p>OBJECT_VERSION_MISMATCH - The object was changed while Macie was analyzing it.</p></li> <li><p>NO_SUCH_BUCKET_AVAILABLE - The object was in a bucket that was deleted shortly before or when Macie attempted to analyze the object.</p></li> <li><p>MALFORMED_OR_FILE_SIZE_EXCEEDS_LIMIT - The object is a Microsoft Office file that is malformed or exceeds the size quota for this type of file. If the file is malformed, an error occurred when Macie attempted to extract data from the file.</p></li> <li><p>OOXML_UNCOMPRESSED_SIZE_EXCEEDS_LIMIT - The object is an Office Open XML file that exceeds the size quota for this type of file.</p></li> <li><p>OOXML_UNCOMPRESSED_RATIO_EXCEEDS_LIMIT - The object is an Office Open XML file whose compression ratio exceeds the compression quota for this type of file.</p></li> <li><p>PERMISSION_DENIED - Macie isn’t allowed to access the object. The object’s permissions settings prevent Macie from analyzing the object.</p></li> <li><p>SOURCE_OBJECT_NO_LONGER_AVAILABLE - The object was deleted shortly before or when Macie attempted to analyze it.</p></li> <li><p>UNABLE_TO_PARSE_FILE - The object is a file that contains structured data and an error occurred when Macie attempted to parse the data.</p></li> <li><p>UNSUPPORTED_FILE_TYPE_EXCEPTION - The object is a file that uses an unsupported file or storage format. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-supported-formats.html">Supported file and storage formats</a> in the <i>Amazon Macie User Guide</i>.</p></li></ul> <p>For information about sensitive data discovery quotas for files, see <a href="https://docs.aws.amazon.com/macie/latest/user/macie-quotas.html">Amazon Macie quotas</a> in the <i>Amazon Macie User Guide</i>.</p>
   */
  reason?: string;
}

/**
 * <p>Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.</p>
 */
export interface ClassificationResult {
  /**
   * <p>Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p> <p>This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).</p>
   */
  additionalOccurrences?: boolean;

  /**
   * <p>The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.</p>
   */
  customDataIdentifiers?: CustomDataIdentifiers;

  /**
   * <p>The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.</p>
   */
  mimeType?: string;

  /**
   * <p>The category, types, and number of occurrences of the sensitive data that produced the finding.</p>
   */
  sensitiveData?: SensitiveDataItem[];

  /**
   * <p>The total size, in bytes, of the data that the finding applies to.</p>
   */
  sizeClassified?: number;

  /**
   * <p>The status of the finding.</p>
   */
  status?: ClassificationResultStatus;
}

/**
 * <p>Provides information about a sensitive data finding and the details of the finding.</p>
 */
export interface ClassificationDetails {
  /**
   * <p>The path to the folder or file in Amazon S3 that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.</p>
   */
  detailedResultsLocation?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.</p>
   */
  jobId?: string;

  /**
   * <p>Specifies how Amazon Macie found the sensitive data that produced the finding. Possible values are: SENSITIVE_DATA_DISCOVERY_JOB, for a classification job; and, AUTOMATED_SENSITIVE_DATA_DISCOVERY, for automated sensitive data discovery.</p>
   */
  originType?: OriginType | string;

  /**
   * <p>The status and other details of the finding.</p>
   */
  result?: ClassificationResult;
}

export enum FindingActionType {
  AWS_API_CALL = "AWS_API_CALL",
}

/**
 * <p>Provides information about an API operation that an entity invoked for an affected resource.</p>
 */
export interface ApiCallDetails {
  /**
   * <p>The name of the operation that was invoked most recently and produced the finding.</p>
   */
  api?: string;

  /**
   * <p>The URL of the Amazon Web Service that provides the operation, for example: s3.amazonaws.com.</p>
   */
  apiServiceName?: string;

  /**
   * <p>The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.</p>
   */
  firstSeen?: Date;

  /**
   * <p>The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.</p>
   */
  lastSeen?: Date;
}

/**
 * <p>Provides information about an action that occurred for a resource and produced a policy finding.</p>
 */
export interface FindingAction {
  /**
   * <p>The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.</p>
   */
  actionType?: FindingActionType | string;

  /**
   * <p>The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.</p>
   */
  apiCallDetails?: ApiCallDetails;
}

/**
 * <p>Provides information about the domain name of the device that an entity used to perform an action on an affected resource.</p>
 */
export interface DomainDetails {
  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;
}

/**
 * <p>Provides information about the city that an IP address originated from.</p>
 */
export interface IpCity {
  /**
   * <p>The name of the city.</p>
   */
  name?: string;
}

/**
 * <p>Provides information about the country that an IP address originated from.</p>
 */
export interface IpCountry {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.</p>
   */
  code?: string;

  /**
   * <p>The name of the country that the IP address originated from.</p>
   */
  name?: string;
}

/**
 * <p>Provides geographic coordinates that indicate where a specified IP address originated from.</p>
 */
export interface IpGeoLocation {
  /**
   * <p>The latitude coordinate of the location, rounded to four decimal places.</p>
   */
  lat?: number;

  /**
   * <p>The longitude coordinate of the location, rounded to four decimal places.</p>
   */
  lon?: number;
}

/**
 * <p>Provides information about the registered owner of an IP address.</p>
 */
export interface IpOwner {
  /**
   * <p>The autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asn?: string;

  /**
   * <p>The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asnOrg?: string;

  /**
   * <p>The name of the internet service provider (ISP) that owned the IP address.</p>
   */
  isp?: string;

  /**
   * <p>The name of the organization that owned the IP address.</p>
   */
  org?: string;
}

/**
 * <p>Provides information about the IP address of the device that an entity used to perform an action on an affected resource.</p>
 */
export interface IpAddressDetails {
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the device.</p>
   */
  ipAddressV4?: string;

  /**
   * <p>The city that the IP address originated from.</p>
   */
  ipCity?: IpCity;

  /**
   * <p>The country that the IP address originated from.</p>
   */
  ipCountry?: IpCountry;

  /**
   * <p>The geographic coordinates of the location that the IP address originated from.</p>
   */
  ipGeoLocation?: IpGeoLocation;

  /**
   * <p>The registered owner of the IP address.</p>
   */
  ipOwner?: IpOwner;
}

/**
 * <p>Provides information about the context in which temporary security credentials were issued to an entity.</p>
 */
export interface SessionContextAttributes {
  /**
   * <p>The date and time, in UTC and ISO 8601 format, when the credentials were issued.</p>
   */
  creationDate?: Date;

  /**
   * <p>Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   */
  mfaAuthenticated?: boolean;
}

/**
 * <p>Provides information about the source and type of temporary security credentials that were issued to an entity.</p>
 */
export interface SessionIssuer {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source account, IAM user, or role that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The source of the temporary security credentials, such as Root, IAMUser, or Role.</p>
   */
  type?: string;

  /**
   * <p>The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.</p>
   */
  userName?: string;
}

/**
 * <p>Provides information about a session that was created for an entity that performed an action by using temporary security credentials.</p>
 */
export interface SessionContext {
  /**
   * <p>The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   */
  attributes?: SessionContextAttributes;

  /**
   * <p>The source and type of credentials that were issued to the entity.</p>
   */
  sessionIssuer?: SessionIssuer;
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.</p>
 */
export interface AssumedRole {
  /**
   * <p>The Amazon Web Services access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;
}

/**
 * <p>Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.</p>
 */
export interface AwsAccount {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   */
  accountId?: string;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;
}

/**
 * <p>Provides information about an Amazon Web Service that performed an action on an affected resource.</p>
 */
export interface AwsService {
  /**
   * <p>The name of the Amazon Web Service that performed the action.</p>
   */
  invokedBy?: string;
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.</p>
 */
export interface FederatedUser {
  /**
   * <p>The Amazon Web Services access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;
}

/**
 * <p>Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.</p>
 */
export interface IamUser {
  /**
   * <p>The unique identifier for the Amazon Web Services account that's associated with the IAM user who performed the action.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the IAM user who performed the action.</p>
   */
  principalId?: string;

  /**
   * <p>The user name of the IAM user who performed the action.</p>
   */
  userName?: string;
}

/**
 * <p>Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.</p>
 */
export interface UserIdentityRoot {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;
}

export enum UserIdentityType {
  AWSAccount = "AWSAccount",
  AWSService = "AWSService",
  AssumedRole = "AssumedRole",
  FederatedUser = "FederatedUser",
  IAMUser = "IAMUser",
  Root = "Root",
}

/**
 * <p>Provides information about the type and other characteristics of an entity that performed an action on an affected resource.</p>
 */
export interface UserIdentity {
  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.</p>
   */
  assumedRole?: AssumedRole;

  /**
   * <p>If the action was performed using the credentials for another Amazon Web Services account, the details of that account.</p>
   */
  awsAccount?: AwsAccount;

  /**
   * <p>If the action was performed by an Amazon Web Services account that belongs to an Amazon Web Service, the name of the service.</p>
   */
  awsService?: AwsService;

  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.</p>
   */
  federatedUser?: FederatedUser;

  /**
   * <p>If the action was performed using the credentials for an Identity and Access Management (IAM) user, the name and other details about the user.</p>
   */
  iamUser?: IamUser;

  /**
   * <p>If the action was performed using the credentials for your Amazon Web Services account, the details of your account.</p>
   */
  root?: UserIdentityRoot;

  /**
   * <p>The type of entity that performed the action.</p>
   */
  type?: UserIdentityType | string;
}

/**
 * <p>Provides information about an entity that performed an action that produced a policy finding for a resource.</p>
 */
export interface FindingActor {
  /**
   * <p>The domain name of the device that the entity used to perform the action on the affected resource.</p>
   */
  domainDetails?: DomainDetails;

  /**
   * <p>The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographic location for the IP address.</p>
   */
  ipAddressDetails?: IpAddressDetails;

  /**
   * <p>The type and other characteristics of the entity that performed the action on the affected resource.</p>
   */
  userIdentity?: UserIdentity;
}

/**
 * <p>Provides the details of a policy finding.</p>
 */
export interface PolicyDetails {
  /**
   * <p>The action that produced the finding.</p>
   */
  action?: FindingAction;

  /**
   * <p>The entity that performed the action that produced the finding.</p>
   */
  actor?: FindingActor;
}

export enum EncryptionType {
  AES256 = "AES256",
  NONE = "NONE",
  UNKNOWN = "UNKNOWN",
  aws_kms = "aws:kms",
}

/**
 * <p>Provides information about the server-side encryption settings for an S3 bucket or S3 object.</p>
 */
export interface ServerSideEncryption {
  /**
   * <p>The server-side encryption algorithm that's used when storing data in the bucket or object. If default encryption is disabled for the bucket or the object isn't encrypted using server-side encryption, this value is NONE.</p>
   */
  encryptionType?: EncryptionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used to encrypt data in the bucket or the object. This value is null if an KMS key isn't used to encrypt the data.</p>
   */
  kmsMasterKeyId?: string;
}

/**
 * <p>Provides information about the Amazon Web Services account that owns an S3 bucket.</p>
 */
export interface S3BucketOwner {
  /**
   * <p>The display name of the account that owns the bucket.</p>
   */
  displayName?: string;

  /**
   * <p>The canonical user ID for the account that owns the bucket.</p>
   */
  id?: string;
}

/**
 * <p>Provides information about the S3 bucket that a finding applies to.</p>
 */
export interface S3Bucket {
  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are uploaded to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The type of server-side encryption that's used by default to encrypt objects in the bucket.</p>
   */
  defaultServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>The name of the bucket.</p>
   */
  name?: string;

  /**
   * <p>The display name and canonical user ID for the Amazon Web Services account that owns the bucket.</p>
   */
  owner?: S3BucketOwner;

  /**
   * <p>The permissions settings that determine whether the bucket is publicly accessible.</p>
   */
  publicAccess?: BucketPublicAccess;

  /**
   * <p>The tags that are associated with the bucket.</p>
   */
  tags?: KeyValuePair[];
}

export enum StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  OUTPOSTS = "OUTPOSTS",
  REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>Provides information about the S3 object that a finding applies to.</p>
 */
export interface S3Object {
  /**
   * <p>The Amazon Resource Name (ARN) of the bucket that contains the object.</p>
   */
  bucketArn?: string;

  /**
   * <p>The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.</p>
   */
  eTag?: string;

  /**
   * <p>The file name extension of the object. If the object doesn't have a file name extension, this value is "".</p>
   */
  extension?: string;

  /**
   * <p>The full key (name) that's assigned to the object.</p>
   */
  key?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the object was last modified.</p>
   */
  lastModified?: Date;

  /**
   * <p>The path to the object, including the full key (name).</p>
   */
  path?: string;

  /**
   * <p>Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.</p>
   */
  publicAccess?: boolean;

  /**
   * <p>The type of server-side encryption that's used to encrypt the object.</p>
   */
  serverSideEncryption?: ServerSideEncryption;

  /**
   * <p>The total storage size, in bytes, of the object.</p>
   */
  size?: number;

  /**
   * <p>The storage class of the object.</p>
   */
  storageClass?: StorageClass | string;

  /**
   * <p>The tags that are associated with the object.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>The identifier for the affected version of the object.</p>
   */
  versionId?: string;
}

/**
 * <p>Provides information about the resources that a finding applies to.</p>
 */
export interface ResourcesAffected {
  /**
   * <p>The details of the S3 bucket that the finding applies to.</p>
   */
  s3Bucket?: S3Bucket;

  /**
   * <p>The details of the S3 object that the finding applies to.</p>
   */
  s3Object?: S3Object;
}

export enum SeverityDescription {
  High = "High",
  Low = "Low",
  Medium = "Medium",
}

/**
 * <p>Provides the numerical and qualitative representations of a finding's severity.</p>
 */
export interface Severity {
  /**
   * <p>The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).</p>
   */
  description?: SeverityDescription | string;

  /**
   * <p>The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).</p>
   */
  score?: number;
}

export enum FindingType {
  Policy_IAMUser_S3BlockPublicAccessDisabled = "Policy:IAMUser/S3BlockPublicAccessDisabled",
  Policy_IAMUser_S3BucketEncryptionDisabled = "Policy:IAMUser/S3BucketEncryptionDisabled",
  Policy_IAMUser_S3BucketPublic = "Policy:IAMUser/S3BucketPublic",
  Policy_IAMUser_S3BucketReplicatedExternally = "Policy:IAMUser/S3BucketReplicatedExternally",
  Policy_IAMUser_S3BucketSharedExternally = "Policy:IAMUser/S3BucketSharedExternally",
  SensitiveData_S3Object_Credentials = "SensitiveData:S3Object/Credentials",
  SensitiveData_S3Object_CustomIdentifier = "SensitiveData:S3Object/CustomIdentifier",
  SensitiveData_S3Object_Financial = "SensitiveData:S3Object/Financial",
  SensitiveData_S3Object_Multiple = "SensitiveData:S3Object/Multiple",
  SensitiveData_S3Object_Personal = "SensitiveData:S3Object/Personal",
}

/**
 * <p>Provides the details of a finding.</p>
 */
export interface Finding {
  /**
   * <p>The unique identifier for the Amazon Web Services account that the finding applies to. This is typically the account that owns the affected resource.</p>
   */
  accountId?: string;

  /**
   * <p>Specifies whether the finding is archived (suppressed).</p>
   */
  archived?: boolean;

  /**
   * <p>The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.</p>
   */
  category?: FindingCategory | string;

  /**
   * <p>The details of a sensitive data finding. This value is null for a policy finding.</p>
   */
  classificationDetails?: ClassificationDetails;

  /**
   * <p>The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered unique.</p>
   */
  count?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie created the finding.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Web Services partition that Amazon Macie created the finding in.</p>
   */
  partition?: string;

  /**
   * <p>The details of a policy finding. This value is null for a sensitive data finding.</p>
   */
  policyDetails?: PolicyDetails;

  /**
   * <p>The Amazon Web Services Region that Amazon Macie created the finding in.</p>
   */
  region?: string;

  /**
   * <p>The resources that the finding applies to.</p>
   */
  resourcesAffected?: ResourcesAffected;

  /**
   * <p>Specifies whether the finding is a sample finding. A <i>sample finding</i> is a finding that uses example data to demonstrate what a finding might contain.</p>
   */
  sample?: boolean;

  /**
   * <p>The version of the schema that was used to define the data structures in the finding.</p>
   */
  schemaVersion?: string;

  /**
   * <p>The severity level and score for the finding.</p>
   */
  severity?: Severity;

  /**
   * <p>The brief description of the finding.</p>
   */
  title?: string;

  /**
   * <p>The type of the finding.</p>
   */
  type?: FindingType | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last updated the finding. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new.</p>
   */
  updatedAt?: Date;
}

export enum FindingsFilterAction {
  ARCHIVE = "ARCHIVE",
  NOOP = "NOOP",
}

/**
 * <p>Provides information about a findings filter.</p>
 */
export interface FindingsFilterListItem {
  /**
   * <p>The action that's performed on findings that match the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Provides a group of results for a query that retrieved aggregated statistical data about findings.</p>
 */
export interface GroupCount {
  /**
   * <p>The total number of findings in the group of query results.</p>
   */
  count?: number;

  /**
   * <p>The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.</p>
   */
  groupKey?: string;
}

export enum RelationshipStatus {
  AccountSuspended = "AccountSuspended",
  Created = "Created",
  EmailVerificationFailed = "EmailVerificationFailed",
  EmailVerificationInProgress = "EmailVerificationInProgress",
  Enabled = "Enabled",
  Invited = "Invited",
  Paused = "Paused",
  RegionDisabled = "RegionDisabled",
  Removed = "Removed",
  Resigned = "Resigned",
}

/**
 * <p>Provides information about an Amazon Macie membership invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The Amazon Web Services account ID for the account that sent the invitation.</p>
   */
  accountId?: string;

  /**
   * <p>The unique identifier for the invitation.</p>
   */
  invitationId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The status of the relationship between the account that sent the invitation and the account that received the invitation.</p>
   */
  relationshipStatus?: RelationshipStatus | string;
}

export enum ScopeFilterKey {
  OBJECT_EXTENSION = "OBJECT_EXTENSION",
  OBJECT_KEY = "OBJECT_KEY",
  OBJECT_LAST_MODIFIED_DATE = "OBJECT_LAST_MODIFIED_DATE",
  OBJECT_SIZE = "OBJECT_SIZE",
}

/**
 * <p>Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.</p>
 */
export interface SimpleScopeTerm {
  /**
   * <p>The operator to use in the condition. Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - EQ (equals) or NE (not equals)</p></li> <li><p>OBJECT_KEY - STARTS_WITH</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - Any operator except CONTAINS</p></li> <li><p>OBJECT_SIZE - Any operator except CONTAINS</p></li></ul>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The object property to use in the condition.</p>
   */
  key?: ScopeFilterKey | string;

  /**
   * <p>An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION or OBJECT_KEY, this array can specify multiple values and Amazon Macie uses OR logic to join the values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: docx or pdf</p></li> <li><p>OBJECT_KEY - A string that represents the key prefix (folder name or path) of an object. For example: logs or awslogs/eventlogs. This value applies a condition to objects whose keys (names) begin with the specified value.</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2020-09-28T14:31:13Z</p></li> <li><p>OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object.</p></li></ul> <p>Macie doesn't support use of wildcard characters in these values. Also, string values are case sensitive.</p>
   */
  values?: string[];
}

/**
 * <p>Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
 */
export interface TagValuePair {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.</p>
   */
  value?: string;
}

export enum TagTarget {
  S3_OBJECT = "S3_OBJECT",
}

/**
 * <p>Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.</p>
 */
export interface TagScopeTerm {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) or NE (not equals).</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The object property to use in the condition. The only valid value is TAG.</p>
   */
  key?: string;

  /**
   * <p>The tag keys or tag key and value pairs to use in the condition. To specify only tag keys in a condition, specify the keys in this array and set the value for each associated tag value to an empty string.</p>
   */
  tagValues?: TagValuePair[];

  /**
   * <p>The type of object to apply the condition to.</p>
   */
  target?: TagTarget | string;
}

/**
 * <p>Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.</p>
 */
export interface JobScopeTerm {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding objects from the job.</p>
   */
  simpleScopeTerm?: SimpleScopeTerm;

  /**
   * <p>A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding objects from the job.</p>
   */
  tagScopeTerm?: TagScopeTerm;
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.</p>
 */
export interface CriteriaBlockForJob {
  /**
   * <p>An array of conditions, one for each condition that determines which buckets to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   */
  and?: CriteriaForJob[];
}

/**
 * <p>Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.</p>
 */
export interface S3BucketCriteriaForJob {
  /**
   * <p>The property- and tag-based conditions that determine which buckets to exclude from the job.</p>
   */
  excludes?: CriteriaBlockForJob;

  /**
   * <p>The property- and tag-based conditions that determine which buckets to include in the job.</p>
   */
  includes?: CriteriaBlockForJob;
}

/**
 * <p>Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.</p>
 */
export interface S3BucketDefinitionForJob {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the buckets.</p>
   */
  accountId: string | undefined;

  /**
   * <p>An array that lists the names of the buckets.</p>
   */
  buckets: string[] | undefined;
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  COMPLETE = "COMPLETE",
  IDLE = "IDLE",
  PAUSED = "PAUSED",
  RUNNING = "RUNNING",
  USER_PAUSED = "USER_PAUSED",
}

export enum JobType {
  ONE_TIME = "ONE_TIME",
  SCHEDULED = "SCHEDULED",
}

export enum LastRunErrorStatusCode {
  ERROR = "ERROR",
  NONE = "NONE",
}

/**
 * <p>Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface LastRunErrorStatus {
  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are:</p> <ul><li><p>ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job.</p></li> <li><p>NONE - No errors occurred. Macie processed all the data specified for the job.</p></li></ul>
   */
  code?: LastRunErrorStatusCode | string;
}

/**
 * <p>Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.</p>
 */
export interface UserPausedDetails {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job or job run will expire and be cancelled if you don't resume it first.</p>
   */
  jobExpiresAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Health event that Amazon Macie sent to notify you of the job or job run's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.</p>
   */
  jobImminentExpirationHealthEventArn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when you paused the job.</p>
   */
  jobPausedAt?: Date;
}

/**
 * <p>Provides information about a classification job, including the current status of the job.</p>
 */
export interface JobSummary {
  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   */
  bucketCriteria?: S3BucketCriteriaForJob;

  /**
   * <p>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets for the job to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   */
  lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   */
  userPausedDetails?: UserPausedDetails;
}

export enum ListJobsFilterKey {
  createdAt = "createdAt",
  jobStatus = "jobStatus",
  jobType = "jobType",
  name = "name",
}

/**
 * <p>Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.</p>
 */
export interface ListJobsFilterTerm {
  /**
   * <p>The operator to use to filter the results.</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The property to use to filter the results.</p>
   */
  key?: ListJobsFilterKey | string;

  /**
   * <p>An array that lists one or more values to use to filter the results.</p>
   */
  values?: string[];
}

/**
 * <p>Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface ManagedDataIdentifierSummary {
  /**
   * <p>The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
   */
  category?: SensitiveDataItemCategory | string;

  /**
   * <p>The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.</p>
   */
  id?: string;
}

/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket's objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>
 */
export interface MatchingBucket {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the bucket.</p>
   */
  accountId?: string;

  /**
   * <p>The name of the bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>Specifies the error code for an error that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. If this value is ACCESS_DENIED, Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request. If this value is null, Macie was able to retrieve and process the information.</p>
   */
  errorCode?: BucketMetadataErrorCode | string;

  /**
   * <p>A brief description of the error (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.</p>
   */
  errorMessage?: string;

  /**
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.</p>
   */
  jobDetails?: JobDetails;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently performed automated sensitive data discovery for the bucket. This value is null if automated sensitive data discovery is currently disabled for your account.</p>
   */
  lastAutomatedDiscoveryTime?: Date;

  /**
   * <p>The total number of objects in the bucket.</p>
   */
  objectCount?: number;

  /**
   * <p>The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * <p>The current sensitivity score for the bucket, ranging from -1 (no analysis due to an error) to 100 (sensitive). This value is null if automated sensitive data discovery is currently disabled for your account.</p>
   */
  sensitivityScore?: number;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}

/**
 * <p>Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account.</p>
 */
export interface MatchingResource {
  /**
   * <p>The details of an S3 bucket that Amazon Macie monitors and analyzes.</p>
   */
  matchingBucket?: MatchingBucket;
}

/**
 * <p>Provides information about an account that's associated with an Amazon Macie administrator account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Web Services account ID for the administrator account.</p>
   */
  administratorAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   */
  arn?: string;

  /**
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if an invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   */
  masterAccountId?: string;

  /**
   * <p>The current status of the relationship between the account and the administrator account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   */
  updatedAt?: Date;
}

/**
 * <p>Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account.</p>
 */
export interface ResourceProfileArtifact {
  /**
   * <p>The Amazon Resource Name (ARN) of the object.</p>
   */
  arn: string | undefined;

  /**
   * <p>The status of the analysis. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the object.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of data in the object. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the object. For example, the object is a malformed file.</p></li></ul>
   */
  classificationResultStatus: string | undefined;

  /**
   * <p>Specifies whether Amazon Macie found sensitive data in the object.</p>
   */
  sensitive?: boolean;
}

export enum SearchResourcesComparator {
  EQ = "EQ",
  NE = "NE",
}

export enum SearchResourcesSimpleCriterionKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  S3_BUCKET_EFFECTIVE_PERMISSION = "S3_BUCKET_EFFECTIVE_PERMISSION",
  S3_BUCKET_NAME = "S3_BUCKET_NAME",
  S3_BUCKET_SHARED_ACCESS = "S3_BUCKET_SHARED_ACCESS",
}

/**
 * <p>Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.</p>
 */
export interface SearchResourcesSimpleCriterion {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   */
  comparator?: SearchResourcesComparator | string;

  /**
   * <p>The property to use in the condition.</p>
   */
  key?: SearchResourcesSimpleCriterionKey | string;

  /**
   * <p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the resource.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of an S3 bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of an S3 bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of an S3 bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in values.</p>
   */
  values?: string[];
}

/**
 * <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.</p>
 */
export interface SearchResourcesTagCriterionPair {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The tag value to use in the condition.</p>
   */
  value?: string;
}

/**
 * <p>Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.</p>
 */
export interface SearchResourcesTagCriterion {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   */
  comparator?: SearchResourcesComparator | string;

  /**
   * <p>The tag keys, tag values, or tag key and value pairs to use in the condition.</p>
   */
  tagValues?: SearchResourcesTagCriterionPair[];
}

/**
 * <p>Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.</p>
 */
export interface SearchResourcesCriteria {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding resources from the results.</p>
   */
  simpleCriterion?: SearchResourcesSimpleCriterion;

  /**
   * <p>A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding resources from the results.</p>
   */
  tagCriterion?: SearchResourcesTagCriterion;
}

/**
 * <p>Provides information about the sensitivity inspection template for an Amazon Macie account. Macie uses the template's settings when it performs automated sensitive data discovery for the account.</p>
 */
export interface SensitivityInspectionTemplatesEntry {
  /**
   * <p>The unique identifier for the sensitivity inspection template for the account.</p>
   */
  id?: string;

  /**
   * <p>The name of the sensitivity inspection template for the account.</p>
   */
  name?: string;
}

/**
 * <p>Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score.</p>
 */
export interface SuppressDataIdentifier {
  /**
   * <p>The unique identifier for the custom data identifier or managed data identifier that detected the type of sensitive data to exclude or include in the score.</p>
   */
  id?: string;

  /**
   * <p>The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.</p>
   */
  type?: DataIdentifierType | string;
}

export enum UnavailabilityReasonCode {
  INVALID_CLASSIFICATION_RESULT = "INVALID_CLASSIFICATION_RESULT",
  OBJECT_EXCEEDS_SIZE_QUOTA = "OBJECT_EXCEEDS_SIZE_QUOTA",
  OBJECT_UNAVAILABLE = "OBJECT_UNAVAILABLE",
  UNSUPPORTED_FINDING_TYPE = "UNSUPPORTED_FINDING_TYPE",
  UNSUPPORTED_OBJECT_TYPE = "UNSUPPORTED_OBJECT_TYPE",
}

export enum ErrorCode {
  ClientError = "ClientError",
  InternalError = "InternalError",
}

/**
 * <p>Provides information about an account-related request that hasn't been processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account ID for the account that the request applies to.</p>
   */
  accountId?: string;

  /**
   * <p>The source of the issue or delay in processing the request.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>The reason why the request hasn't been processed.</p>
   */
  errorMessage?: string;
}

export enum Currency {
  USD = "USD",
}

export enum Unit {
  TERABYTES = "TERABYTES",
}

/**
 * <p>Specifies a current quota for an Amazon Macie account.</p>
 */
export interface ServiceLimit {
  /**
   * <p>Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.</p>
   */
  isServiceLimited?: boolean;

  /**
   * <p>The unit of measurement for the value specified by the value field.</p>
   */
  unit?: Unit | string;

  /**
   * <p>The value for the metric specified by the UsageByAccount.type field in the response.</p>
   */
  value?: number;
}

export enum UsageType {
  AUTOMATED_OBJECT_MONITORING = "AUTOMATED_OBJECT_MONITORING",
  AUTOMATED_SENSITIVE_DATA_DISCOVERY = "AUTOMATED_SENSITIVE_DATA_DISCOVERY",
  DATA_INVENTORY_EVALUATION = "DATA_INVENTORY_EVALUATION",
  SENSITIVE_DATA_DISCOVERY = "SENSITIVE_DATA_DISCOVERY",
}

/**
 * <p>Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.</p>
 */
export interface UsageByAccount {
  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The estimated value for the metric.</p>
   */
  estimatedCost?: string;

  /**
   * <p>The current value for the quota that corresponds to the metric specified by the type field.</p>
   */
  serviceLimit?: ServiceLimit;

  /**
   * <p>The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.</p>
   */
  type?: UsageType | string;
}

/**
 * <p>Provides quota and aggregated usage data for an Amazon Macie account.</p>
 */
export interface UsageRecord {
  /**
   * <p>The unique identifier for the Amazon Web Services account that the data applies to.</p>
   */
  accountId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the free trial of automated sensitive data discovery started for the account. If the account is a member account in an organization, this value is the same as the value for the organization's Amazon Macie administrator account.</p>
   */
  automatedDiscoveryFreeTrialStartDate?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for the account.</p>
   */
  freeTrialStartDate?: Date;

  /**
   * <p>An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.</p>
   */
  usage?: UsageByAccount[];
}

export enum UsageStatisticsFilterComparator {
  CONTAINS = "CONTAINS",
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  NE = "NE",
}

export enum UsageStatisticsFilterKey {
  accountId = "accountId",
  freeTrialStartDate = "freeTrialStartDate",
  serviceLimit = "serviceLimit",
  total = "total",
}

/**
 * <p>Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.</p>
 */
export interface UsageStatisticsFilter {
  /**
   * <p>The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.</p>
   */
  comparator?: UsageStatisticsFilterComparator | string;

  /**
   * <p>The field to use in the condition.</p>
   */
  key?: UsageStatisticsFilterKey | string;

  /**
   * <p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an Amazon Web Services account.</p></li> <li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for an account.</p></li> <li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li> <li><p>total - A string that represents the current estimated cost for an account.</p></li></ul>
   */
  values?: string[];
}

/**
 * <p>Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.</p>
 */
export interface UsageTotal {
  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The estimated value for the metric.</p>
   */
  estimatedCost?: string;

  /**
   * <p>The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.</p>
   */
  type?: UsageType | string;
}

export interface AcceptInvitationRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that sent the invitation.</p>
   */
  administratorAccountId?: string;

  /**
   * <p>The unique identifier for the invitation to accept.</p>
   */
  invitationId: string | undefined;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   */
  masterAccount?: string;
}

export interface AcceptInvitationResponse {}

/**
 * <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Specifies the details of an account to associate with an Amazon Macie administrator account.</p>
 */
export interface AccountDetail {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The email address for the account.</p>
   */
  email: string | undefined;
}

/**
 * <p>Provides information about an S3 object that lists specific text to ignore.</p>
 */
export interface S3WordsList {
  /**
   * <p>The full name of the S3 bucket that contains the object.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The full name (key) of the object.</p>
   */
  objectKey: string | undefined;
}

/**
 * <p>Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.</p>
 */
export interface AllowListCriteria {
  /**
   * <p>The regular expression (<i>regex</i>) that defines the text pattern to ignore. The expression can contain as many as 512 characters.</p>
   */
  regex?: string;

  /**
   * <p>The location and name of the S3 object that lists specific text to ignore.</p>
   */
  s3WordsList?: S3WordsList;
}

export enum AllowListStatusCode {
  OK = "OK",
  S3_OBJECT_ACCESS_DENIED = "S3_OBJECT_ACCESS_DENIED",
  S3_OBJECT_EMPTY = "S3_OBJECT_EMPTY",
  S3_OBJECT_NOT_FOUND = "S3_OBJECT_NOT_FOUND",
  S3_OBJECT_OVERSIZE = "S3_OBJECT_OVERSIZE",
  S3_THROTTLED = "S3_THROTTLED",
  S3_USER_ACCESS_DENIED = "S3_USER_ACCESS_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/**
 * <p>Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.</p>
 */
export interface AllowListStatus {
  /**
   * <p>The current status of the allow list. If the list's criteria specify a regular expression (regex), this value is typically OK. Amazon Macie can compile the expression.</p> <p>If the list's criteria specify an S3 object, possible values are:</p> <ul><li><p>OK - Macie can retrieve and parse the contents of the object.</p></li> <li><p>S3_OBJECT_ACCESS_DENIED - Macie isn't allowed to access the object or the object is encrypted with a customer managed KMS key that Macie isn't allowed to use. Check the bucket policy and other permissions settings for the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that Macie is allowed to use.</p></li> <li><p>S3_OBJECT_EMPTY - Macie can retrieve the object but the object doesn't contain any content. Ensure that the object contains the correct entries. Also ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_NOT_FOUND - The object doesn't exist in Amazon S3. Ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_OVERSIZE - Macie can retrieve the object. However, the object contains too many entries or its storage size exceeds the quota for an allow list. Try breaking the list into multiple files and ensure that each file doesn't exceed any quotas. Then configure list settings in Macie for each file.</p></li> <li><p>S3_THROTTLED - Amazon S3 throttled the request to retrieve the object. Wait a few minutes and then try again.</p></li> <li><p>S3_USER_ACCESS_DENIED - Amazon S3 denied the request to retrieve the object. If the specified object exists, you're not allowed to access it or it's encrypted with an KMS key that you're not allowed to use. Work with your Amazon Web Services administrator to ensure that the list's criteria specify the correct bucket and object names, and you have read access to the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that you're allowed to use.</p></li> <li><p>UNKNOWN_ERROR - A transient or internal error occurred when Macie attempted to retrieve or parse the object. Wait a few minutes and then try again. A list can also have this status if it's encrypted with a key that Amazon S3 and Macie can't access or use.</p></li></ul>
   */
  code: AllowListStatusCode | string | undefined;

  /**
   * <p>A brief description of the status of the allow list. Amazon Macie uses this value to provide additional information about an error that occurred when Macie tried to access and use the list's criteria.</p>
   */
  description?: string;
}

export enum AutomatedDiscoveryStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AvailabilityCode {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.</p>
   */
  ids?: string[];
}

export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier that matches the criteria specified in the request.</p>
   */
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier that was specified in the request but doesn't correlate to an existing custom data identifier.</p>
   */
  notFoundIdentifierIds?: string[];
}

/**
 * <p>Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
 */
export interface BucketCountByEffectivePermission {
  /**
   * <p>The total number of buckets that allow the general public to have read or write access to the bucket.</p>
   */
  publiclyAccessible?: number;

  /**
   * <p>The total number of buckets that allow the general public to have read access to the bucket.</p>
   */
  publiclyReadable?: number;

  /**
   * <p>The total number of buckets that allow the general public to have write access to the bucket.</p>
   */
  publiclyWritable?: number;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. Macie can't determine whether these buckets are publicly accessible.</p>
   */
  unknown?: number;
}

/**
 * <p>Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface BucketCountByEncryptionType {
  /**
   * <p>The total number of buckets that use an KMS key to encrypt new objects by default, either an Amazon Web Services managed key or a customer managed key. These buckets use KMS encryption (SSE-KMS) by default.</p>
   */
  kmsManaged?: number;

  /**
   * <p>The total number of buckets that use an Amazon S3 managed key to encrypt new objects by default. These buckets use Amazon S3 managed encryption (SSE-S3) by default.</p>
   */
  s3Managed?: number;

  /**
   * <p>The total number of buckets that don't encrypt new objects by default. Default encryption is disabled for these buckets.</p>
   */
  unencrypted?: number;

  /**
   * <p>The total number of buckets that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the default encryption settings for these buckets.</p>
   */
  unknown?: number;
}

/**
 * <p>Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.</p>
 */
export interface BucketCountBySharedAccessType {
  /**
   * <p>The total number of buckets that are shared with an Amazon Web Services account that isn't part of the same Amazon Macie organization.</p>
   */
  external?: number;

  /**
   * <p>The total number of buckets that are shared with an Amazon Web Services account that's part of the same Amazon Macie organization.</p>
   */
  internal?: number;

  /**
   * <p>The total number of buckets that aren't shared with other Amazon Web Services accounts.</p>
   */
  notShared?: number;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. Macie can't determine whether these buckets are shared with other Amazon Web Services accounts.</p>
   */
  unknown?: number;
}

/**
 * <p>Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.</p>
 */
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * <p>The total number of buckets that don't have a bucket policy or have a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, the policy doesn't require PutObject requests to include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.</p>
   */
  allowsUnencryptedObjectUploads?: number;

  /**
   * <p>The total number of buckets whose bucket policies require server-side encryption of new objects. PutObject requests for these buckets must include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.</p>
   */
  deniesUnencryptedObjectUploads?: number;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate server-side encryption requirements for. Macie can't determine whether the bucket policies for these buckets require server-side encryption of new objects.</p>
   */
  unknown?: number;
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.</p>
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * <p>The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.</p>
   */
  eq?: string[];

  /**
   * <p>The value for the property is greater than the specified value.</p>
   */
  gt?: number;

  /**
   * <p>The value for the property is greater than or equal to the specified value.</p>
   */
  gte?: number;

  /**
   * <p>The value for the property is less than the specified value.</p>
   */
  lt?: number;

  /**
   * <p>The value for the property is less than or equal to the specified value.</p>
   */
  lte?: number;

  /**
   * <p>The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.</p>
   */
  neq?: string[];

  /**
   * <p>The name of the bucket begins with the specified value.</p>
   */
  prefix?: string;
}

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about S3 buckets.</p>
 */
export interface BucketSortCriteria {
  /**
   * <p>The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, sensitivityScore, or sizeInBytes.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

/**
 * <p>Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0.</p>
 */
export interface SensitivityAggregations {
  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>The total number of buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
   */
  publiclyAccessibleCount?: number;

  /**
   * <p>The total number of buckets.</p>
   */
  totalCount?: number;

  /**
   * <p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>
   */
  totalSizeInBytes?: number;
}

/**
 * <p>Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0.</p>
 */
export interface BucketStatisticsBySensitivity {
  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of -1.</p>
   */
  classificationError?: SensitivityAggregations;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 50.</p>
   */
  notClassified?: SensitivityAggregations;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 0-49.</p>
   */
  notSensitive?: SensitivityAggregations;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 51-100.</p>
   */
  sensitive?: SensitivityAggregations;
}

/**
 * <p>Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
 */
export interface S3Destination {
  /**
   * <p>The name of the bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key to use for encryption of the results. This must be the ARN of an existing, symmetric encryption KMS key that's in the same Amazon Web Services Region as the bucket.</p>
   */
  kmsKeyArn: string | undefined;
}

/**
 * <p>Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.</p>
 */
export interface ClassificationExportConfiguration {
  /**
   * <p>The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
   */
  s3Destination?: S3Destination;
}

export enum ClassificationScopeUpdateOperation {
  ADD = "ADD",
  REMOVE = "REMOVE",
  REPLACE = "REPLACE",
}

export interface CreateAllowListRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.</p>
   */
  criteria: AllowListCriteria | undefined;

  /**
   * <p>A custom description of the allow list. The description can contain as many as 512 characters.</p>
   */
  description?: string;

  /**
   * <p>A custom name for the allow list. The name can contain as many as 128 characters.</p>
   */
  name: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the allow list.</p> <p>An allow list can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the allow list.</p>
   */
  id?: string;
}

export enum ManagedDataIdentifierSelector {
  ALL = "ALL",
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
  NONE = "NONE",
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.</p>
 */
export interface JobScopingBlock {
  /**
   * <p>An array of conditions, one for each property- or tag-based condition that determines which objects to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   */
  and?: JobScopeTerm[];
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.</p>
 */
export interface Scoping {
  /**
   * <p>The property- and tag-based conditions that determine which objects to exclude from the analysis.</p>
   */
  excludes?: JobScopingBlock;

  /**
   * <p>The property- and tag-based conditions that determine which objects to include in the analysis.</p>
   */
  includes?: JobScopingBlock;
}

/**
 * <p>Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.</p>
 */
export interface S3JobDefinition {
  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   */
  bucketCriteria?: S3BucketCriteriaForJob;

  /**
   * <p>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * <p>The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.</p>
   */
  scoping?: Scoping;
}

/**
 * <p>Specifies that a classification job runs once a day, every day. This is an empty object.</p>
 */
export interface DailySchedule {}

/**
 * <p>Specifies a monthly recurrence pattern for running a classification job.</p>
 */
export interface MonthlySchedule {
  /**
   * <p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.</p> <p>If this value exceeds the number of days in a certain month, Macie doesn't run the job that month. Macie runs the job only during months that have the specified day. For example, if this value is 31 and a month has only 30 days, Macie doesn't run the job that month. To run the job every month, specify a value that's less than 29.</p>
   */
  dayOfMonth?: number;
}

export enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

/**
 * <p>Specifies a weekly recurrence pattern for running a classification job.</p>
 */
export interface WeeklySchedule {
  /**
   * <p>The day of the week when Amazon Macie runs the job.</p>
   */
  dayOfWeek?: DayOfWeek | string;
}

/**
 * <p>Specifies the recurrence pattern for running a classification job.</p>
 */
export interface JobScheduleFrequency {
  /**
   * <p>Specifies a daily recurrence pattern for running the job.</p>
   */
  dailySchedule?: DailySchedule;

  /**
   * <p>Specifies a monthly recurrence pattern for running the job.</p>
   */
  monthlySchedule?: MonthlySchedule;

  /**
   * <p>Specifies a weekly recurrence pattern for running the job.</p>
   */
  weeklySchedule?: WeeklySchedule;
}

export interface CreateClassificationJobRequest {
  /**
   * <p>An array of unique identifiers, one for each allow list for the job to use when it analyzes data.</p>
   */
  allowListIds?: string[];

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>A custom description of the job. The description can contain as many as 200 characters.</p>
   */
  description?: string;

  /**
   * <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.</p></li></ul>
   */
  jobType: JobType | string | undefined;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>
   */
  managedDataIdentifierIds?: string[];

  /**
   * <p>The selection type to apply when determining which managed data identifiers the job uses to analyze data. Valid values are:</p> <ul><li><p>ALL - Use all the managed data identifiers that Amazon Macie provides. If you specify this value, don't specify any values for the managedDataIdentifierIds property.</p></li> <li><p>EXCLUDE - Use all the managed data identifiers that Macie provides except the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers. If you specify this value, specify at least one custom data identifier for the job (customDataIdentifierIds) and don't specify any values for the managedDataIdentifierIds property.</p></li></ul> <p>If you don't specify a value for this property, the job uses all managed data identifiers. If you don't specify a value for this property or you specify ALL or EXCLUDE for a recurring job, the job also uses new managed data identifiers as they are released.</p>
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | string;

  /**
   * <p>A custom name for the job. The name can contain as many as 500 characters.</p>
   */
  name: string | undefined;

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition: S3JobDefinition | undefined;

  /**
   * <p>The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.</p>
   */
  samplingPercentage?: number;

  /**
   * <p>The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the job.</p> <p>A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateClassificationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;
}

export enum DataIdentifierSeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that matches the custom data identifier's detection criteria.</p>
 */
export interface SeverityLevel {
  /**
   * <p>The minimum number of occurrences of text that must match the custom data identifier's detection criteria in order to produce a finding with the specified severity (severity).</p>
   */
  occurrencesThreshold: number | undefined;

  /**
   * <p>The severity to assign to a finding: if the number of occurrences is greater than or equal to the specified threshold (occurrencesThreshold); and, if applicable, the number of occurrences is less than the threshold for the next consecutive severity level for the custom data identifier, moving from LOW to HIGH.</p>
   */
  severity: DataIdentifierSeverity | string | undefined;
}

export interface CreateCustomDataIdentifierRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name: string | undefined;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex: string | undefined;

  /**
   * <p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.</p>
   */
  severityLevels?: SeverityLevel[];

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateCustomDataIdentifierResponse {
  /**
   * <p>The unique identifier for the custom data identifier that was created.</p>
   */
  customDataIdentifierId?: string;
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface CriterionAdditionalProperties {
  /**
   * <p>The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.</p>
   */
  eq?: string[];

  /**
   * <p>The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.</p> <p>You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.</p>
   */
  eqExactMatch?: string[];

  /**
   * <p>The value for the property is greater than the specified value.</p>
   */
  gt?: number;

  /**
   * <p>The value for the property is greater than or equal to the specified value.</p>
   */
  gte?: number;

  /**
   * <p>The value for the property is less than the specified value.</p>
   */
  lt?: number;

  /**
   * <p>The value for the property is less than or equal to the specified value.</p>
   */
  lte?: number;

  /**
   * <p>The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Macie uses OR logic to join the values.</p>
   */
  neq?: string[];
}

/**
 * <p>Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.</p>
 */
export interface FindingCriteria {
  /**
   * <p>A condition that specifies the property, operator, and one or more values to use to filter the results.</p>
   */
  criterion?: Record<string, CriterionAdditionalProperties>;
}

export interface CreateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action: FindingsFilterAction | string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was created.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was created.</p>
   */
  id?: string;
}

export interface CreateInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.</p>
   */
  accountIds: string[] | undefined;

  /**
   * <p>Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.</p>
   */
  disableEmailNotification?: boolean;

  /**
   * <p>Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.</p>
   */
  message?: string;
}

export interface CreateInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export interface CreateMemberRequest {
  /**
   * <p>The details of the account to associate with the administrator account.</p>
   */
  account: AccountDetail | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateMemberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that was associated with the administrator account.</p>
   */
  arn?: string;
}

export interface CreateSampleFindingsRequest {
  /**
   * <p>An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.</p>
   */
  findingTypes?: (FindingType | string)[];
}

export interface CreateSampleFindingsResponse {}

export interface DeclineInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.</p>
   */
  accountIds: string[] | undefined;
}

export interface DeclineInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export interface DeleteAllowListRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.</p> <p>When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</p>
   */
  ignoreJobChecks?: string;
}

export interface DeleteAllowListResponse {}

export interface DeleteCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface DeleteCustomDataIdentifierResponse {}

export interface DeleteFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface DeleteFindingsFilterResponse {}

export interface DeleteInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.</p>
   */
  accountIds: string[] | undefined;
}

export interface DeleteInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export interface DeleteMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface DeleteMemberResponse {}

export interface DescribeBucketsRequest {
  /**
   * <p>The criteria to use to filter the query results.</p>
   */
  criteria?: Record<string, BucketCriteriaAdditionalProperties>;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: BucketSortCriteria;
}

export interface DescribeBucketsResponse {
  /**
   * <p>An array of objects, one for each bucket that matches the filter criteria specified in the request.</p>
   */
  buckets?: BucketMetadata[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface DescribeClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;
}

/**
 * <p>Provides processing statistics for a classification job.</p>
 */
export interface Statistics {
  /**
   * <p>The approximate number of objects that the job has yet to process during its current run.</p>
   */
  approximateNumberOfObjectsToProcess?: number;

  /**
   * <p>The number of times that the job has run.</p>
   */
  numberOfRuns?: number;
}

export interface DescribeClassificationJobResponse {
  /**
   * <p>An array of unique identifiers, one for each allow list that the job uses when it analyzes data.</p>
   */
  allowListIds?: string[];

  /**
   * <p>The token that was provided to ensure the idempotency of the request to create the job.</p>
   */
  clientToken?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier that the job uses when it analyzes data. This value is null if the job uses only managed data identifiers to analyze data.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>The custom description of the job.</p>
   */
  description?: string;

  /**
   * <p>For a recurring job, specifies whether you configured the job to analyze all existing, eligible objects immediately after the job was created (true). If you configured the job to analyze only those objects that were created or changed after the job was created and before the job's first scheduled run, this value is false. This value is also false for a one-time job.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   */
  lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started or, if the job hasn't run yet, when the job was created.</p>
   */
  lastRunTime?: Date;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier that the job is explicitly configured to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type specified for the job (managedDataIdentifierSelector). This value is null if the job's managed data identifier selection type is ALL or the job uses only custom data identifiers (customDataIdentifierIds) to analyze data.</p>
   */
  managedDataIdentifierIds?: string[];

  /**
   * <p>The selection type that determines which managed data identifiers the job uses to analyze data. Possible values are:</p> <ul><li><p>ALL - Use all the managed data identifiers that Amazon Macie provides.</p></li> <li><p>EXCLUDE - Use all the managed data identifiers that Macie provides except the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers.</p></li></ul> <p>If this value is null, the job uses all managed data identifiers. If this value is null, ALL, or EXCLUDE for a recurring job, the job also uses new managed data identifiers as they are released.</p>
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | string;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition?: S3JobDefinition;

  /**
   * <p>The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.</p>
   */
  samplingPercentage?: number;

  /**
   * <p>The recurrence pattern for running the job. This value is null if the job is configured to run only once.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>The number of times that the job has run and processing statistics for the job's current run.</p>
   */
  statistics?: Statistics;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the classification job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   */
  userPausedDetails?: UserPausedDetails;
}

export interface DescribeOrganizationConfigurationRequest {}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Specifies whether Amazon Macie is enabled automatically for accounts that are added to the organization.</p>
   */
  autoEnable?: boolean;

  /**
   * <p>Specifies whether the maximum number of Amazon Macie member accounts are part of the organization.</p>
   */
  maxAccountLimitReached?: boolean;
}

export interface DisableMacieRequest {}

export interface DisableMacieResponse {}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the delegated Amazon Macie administrator account.</p>
   */
  adminAccountId: string | undefined;
}

export interface DisableOrganizationAdminAccountResponse {}

export interface DisassociateFromAdministratorAccountRequest {}

export interface DisassociateFromAdministratorAccountResponse {}

export interface DisassociateFromMasterAccountRequest {}

export interface DisassociateFromMasterAccountResponse {}

export interface DisassociateMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface DisassociateMemberResponse {}

export enum FindingPublishingFrequency {
  FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
  ONE_HOUR = "ONE_HOUR",
  SIX_HOURS = "SIX_HOURS",
}

export enum MacieStatus {
  ENABLED = "ENABLED",
  PAUSED = "PAUSED",
}

export interface EnableMacieRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies the new status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to ENABLED.</p>
   */
  status?: MacieStatus | string;
}

export interface EnableMacieResponse {}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.</p>
   */
  adminAccountId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export interface EnableOrganizationAdminAccountResponse {}

export enum FindingStatisticsSortAttributeName {
  count = "count",
  groupKey = "groupKey",
}

/**
 * <p>Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.</p>
 */
export interface FindingStatisticsSortCriteria {
  /**
   * <p>The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.</p>
   */
  attributeName?: FindingStatisticsSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export interface GetAdministratorAccountRequest {}

export interface GetAdministratorAccountResponse {
  /**
   * <p>The Amazon Web Services account ID for the administrator account. If the accounts are associated by an Amazon Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   */
  administrator?: Invitation;
}

export interface GetAllowListRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface GetAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</p>
   */
  createdAt?: Date;

  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.</p>
   */
  criteria?: AllowListCriteria;

  /**
   * <p>The custom description of the allow list.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the allow list.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the allow list.</p>
   */
  name?: string;

  /**
   * <p>The current status of the allow list, which indicates whether Amazon Macie can access and use the list's criteria.</p>
   */
  status?: AllowListStatus;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the allow list.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</p>
   */
  updatedAt?: Date;
}

export interface GetAutomatedDiscoveryConfigurationRequest {}

export interface GetAutomatedDiscoveryConfigurationResponse {
  /**
   * <p>The unique identifier for the classification scope that's used when performing automated sensitive data discovery for the account. The classification scope specifies S3 buckets to exclude from automated sensitive data discovery.</p>
   */
  classificationScopeId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently disabled for the account. This value is null if automated sensitive data discovery wasn't enabled and subsequently disabled for the account.</p>
   */
  disabledAt?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was initially enabled for the account. This value is null if automated sensitive data discovery has never been enabled for the account.</p>
   */
  firstEnabledAt?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently enabled or disabled for the account.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The unique identifier for the sensitivity inspection template that's used when performing automated sensitive data discovery for the account. The template specifies which allow lists, custom data identifiers, and managed data identifiers to use when analyzing data.</p>
   */
  sensitivityInspectionTemplateId?: string;

  /**
   * <p>The current status of the automated sensitive data discovery configuration for the account. Possible values are: ENABLED, use the specified settings to perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.</p>
   */
  status?: AutomatedDiscoveryStatus | string;
}

export interface GetBucketStatisticsRequest {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   */
  accountId?: string;
}

export interface GetBucketStatisticsResponse {
  /**
   * <p>The total number of buckets.</p>
   */
  bucketCount?: number;

  /**
   * <p>The total number of buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
   */
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  /**
   * <p>The total number of buckets that use certain types of server-side encryption to encrypt new objects by default. This object also reports the total number of buckets that don't encrypt new objects by default.</p>
   */
  bucketCountByEncryptionType?: BucketCountByEncryptionType;

  /**
   * <p>The total number of buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.</p>
   */
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;

  /**
   * <p>The total number of buckets that are or aren't shared with another Amazon Web Services account.</p>
   */
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  /**
   * <p>The aggregated sensitive data discovery statistics for the buckets. If automated sensitive data discovery is currently disabled for your account, the value for each statistic is 0.</p>
   */
  bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved both bucket and object metadata from Amazon S3 for the buckets.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>The total number of objects in the buckets.</p>
   */
  objectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}

export interface GetClassificationExportConfigurationRequest {}

export interface GetClassificationExportConfigurationResponse {
  /**
   * <p>The location where data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export interface GetClassificationScopeRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

/**
 * <p>Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery.</p>
 */
export interface S3ClassificationScopeExclusion {
  /**
   * <p>An array of strings, one for each S3 bucket that is excluded. Each string is the full name of an excluded bucket.</p>
   */
  bucketNames: string[] | undefined;
}

/**
 * <p>Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.</p>
 */
export interface S3ClassificationScope {
  /**
   * <p>The S3 buckets that are excluded.</p>
   */
  excludes: S3ClassificationScopeExclusion | undefined;
}

export interface GetClassificationScopeResponse {
  /**
   * <p>The unique identifier for the classification scope.</p>
   */
  id?: string;

  /**
   * <p>The name of the classification scope.</p>
   */
  name?: string;

  /**
   * <p>The S3 buckets that are excluded from automated sensitive data discovery.</p>
   */
  s3?: S3ClassificationScope;
}

export interface GetCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface GetCustomDataIdentifierResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. Otherwise, Macie excludes the result.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match.</p>
   */
  regex?: string;

  /**
   * <p>Specifies the severity that's assigned to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. By default, Amazon Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.</p>
   */
  severityLevels?: SeverityLevel[];

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Specifies criteria for sorting the results of a request for findings.</p>
 */
export interface SortCriteria {
  /**
   * <p>The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export interface GetFindingsRequest {
  /**
   * <p>An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.</p>
   */
  findingIds: string[] | undefined;

  /**
   * <p>The criteria for sorting the results of the request.</p>
   */
  sortCriteria?: SortCriteria;
}

export interface GetFindingsResponse {
  /**
   * <p>An array of objects, one for each finding that matches the criteria specified in the request.</p>
   */
  findings?: Finding[];
}

export interface GetFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface GetFindingsFilterResponse {
  /**
   * <p>The action that's performed on findings that match the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The custom description of the filter.</p>
   */
  description?: string;

  /**
   * <p>The criteria that's used to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</p>
   */
  tags?: Record<string, string>;
}

export interface GetFindingsPublicationConfigurationRequest {}

/**
 * <p>Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface SecurityHubConfiguration {
  /**
   * <p>Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.</p>
   */
  publishClassificationFindings: boolean | undefined;

  /**
   * <p>Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.</p>
   */
  publishPolicyFindings: boolean | undefined;
}

export interface GetFindingsPublicationConfigurationResponse {
  /**
   * <p>The configuration settings that determine which findings are published to Security Hub.</p>
   */
  securityHubConfiguration?: SecurityHubConfiguration;
}

export enum GroupBy {
  classificationDetails_jobId = "classificationDetails.jobId",
  resourcesAffected_s3Bucket_name = "resourcesAffected.s3Bucket.name",
  severity_description = "severity.description",
  type = "type",
}

export interface GetFindingStatisticsRequest {
  /**
   * <p>The criteria to use to filter the query results.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
   */
  groupBy: GroupBy | string | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  size?: number;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: FindingStatisticsSortCriteria;
}

export interface GetFindingStatisticsResponse {
  /**
   * <p>An array of objects, one for each group of findings that matches the filter criteria specified in the request.</p>
   */
  countsByGroup?: GroupCount[];
}

export interface GetInvitationsCountRequest {}

export interface GetInvitationsCountResponse {
  /**
   * <p>The total number of invitations that were received by the account, not including the currently accepted invitation.</p>
   */
  invitationsCount?: number;
}

export interface GetMacieSessionRequest {}

export interface GetMacieSessionResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in Amazon Web Services resources for the account.</p>
   */
  serviceRole?: string;

  /**
   * <p>The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Macie activities are enabled for the account.</p>
   */
  status?: MacieStatus | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Amazon Macie account.</p>
   */
  updatedAt?: Date;
}

export interface GetMasterAccountRequest {}

export interface GetMasterAccountResponse {
  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   */
  master?: Invitation;
}

export interface GetMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

export interface GetMemberResponse {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Web Services account ID for the administrator account.</p>
   */
  administratorAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   */
  arn?: string;

  /**
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if an invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   */
  masterAccountId?: string;

  /**
   * <p>The current status of the relationship between the account and the administrator account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   */
  updatedAt?: Date;
}

export interface GetResourceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   */
  resourceArn: string | undefined;
}

/**
 * <p>Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account.</p>
 */
export interface ResourceStatistics {
  /**
   * <p>The total amount of data, in bytes, that Amazon Macie has analyzed in the bucket.</p>
   */
  totalBytesClassified?: number;

  /**
   * <p>The total number of occurrences of sensitive data that Amazon Macie has found in the bucket's objects. This includes occurrences that are currently suppressed by the sensitivity scoring settings for the bucket (totalDetectionsSuppressed).</p>
   */
  totalDetections?: number;

  /**
   * <p>The total number of occurrences of sensitive data that are currently suppressed by the sensitivity scoring settings for the bucket. These represent occurrences of sensitive data that Amazon Macie found in the bucket's objects, but the occurrences were manually suppressed. By default, suppressed occurrences are excluded from the bucket's sensitivity score.</p>
   */
  totalDetectionsSuppressed?: number;

  /**
   * <p>The total number of objects that Amazon Macie has analyzed in the bucket.</p>
   */
  totalItemsClassified?: number;

  /**
   * <p>The total number of the bucket's objects that Amazon Macie has found sensitive data in.</p>
   */
  totalItemsSensitive?: number;

  /**
   * <p>The total number of objects that Amazon Macie hasn't analyzed in the bucket due to an error or issue. For example, the object is a malformed file. This value includes objects that Macie hasn't analyzed for reasons reported by other statistics in the ResourceStatistics object.</p>
   */
  totalItemsSkipped?: number;

  /**
   * <p>The total number of objects that Amazon Macie hasn't analyzed in the bucket because the objects are encrypted with a key that Macie isn't allowed to use.</p>
   */
  totalItemsSkippedInvalidEncryption?: number;

  /**
   * <p>The total number of objects that Amazon Macie hasn't analyzed in the bucket because the objects are encrypted with an KMS key that was disabled or deleted.</p>
   */
  totalItemsSkippedInvalidKms?: number;

  /**
   * <p>The total number of objects that Amazon Macie hasn't analyzed in the bucket because Macie isn't allowed to access the objects.</p>
   */
  totalItemsSkippedPermissionDenied?: number;
}

export interface GetResourceProfileResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently recalculated sensitive data discovery statistics and details for the bucket. If the bucket's sensitivity score is calculated automatically, this includes the score.</p>
   */
  profileUpdatedAt?: Date;

  /**
   * <p>The current sensitivity score for the bucket, ranging from -1 (no analysis due to an error) to 100 (sensitive). By default, this score is calculated automatically based on the amount of data that Amazon Macie has analyzed in the bucket and the amount of sensitive data that Macie has found in the bucket.</p>
   */
  sensitivityScore?: number;

  /**
   * <p>Specifies whether the bucket's current sensitivity score was set manually. If this value is true, the score was manually changed to 100. If this value is false, the score was calculated automatically by Amazon Macie.</p>
   */
  sensitivityScoreOverridden?: boolean;

  /**
   * <p>The sensitive data discovery statistics for the bucket. The statistics capture the results of automated sensitive data discovery activities that Amazon Macie has performed for the bucket.</p>
   */
  statistics?: ResourceStatistics;
}

export interface GetRevealConfigurationRequest {}

export enum RevealStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.</p>
 */
export interface RevealConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN), ID, or alias of the KMS key to use to encrypt sensitive data that's retrieved. The key must be an existing, customer managed, symmetric encryption key that's in the same Amazon Web Services Region as the Amazon Macie account.</p> <p>If this value specifies an alias, it must include the following prefix: alias/. If this value specifies a key that's owned by another Amazon Web Services account, it must specify the ARN of the key or the ARN of the key's alias.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The status of the configuration for the Amazon Macie account. In a request, valid values are: ENABLED, enable the configuration for the account; and, DISABLED, disable the configuration for the account. In a response, possible values are: ENABLED, the configuration is currently enabled for the account; and, DISABLED, the configuration is currently disabled for the account.</p>
   */
  status: RevealStatus | string | undefined;
}

export interface GetRevealConfigurationResponse {
  /**
   * <p>The current configuration settings and the status of the configuration for the account.</p>
   */
  configuration?: RevealConfiguration;
}

export interface GetSensitiveDataOccurrencesRequest {
  /**
   * <p>The unique identifier for the finding.</p>
   */
  findingId: string | undefined;
}

export enum RevealRequestStatus {
  ERROR = "ERROR",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
}

export interface GetSensitiveDataOccurrencesResponse {
  /**
   * <p>If an error occurred when Amazon Macie attempted to retrieve occurrences of sensitive data reported by the finding, a description of the error that occurred. This value is null if the status (status) of the request is PROCESSING or SUCCESS.</p>
   */
  error?: string;

  /**
   * <p>A map that specifies 1-100 types of sensitive data reported by the finding and, for each type, 1-10 occurrences of sensitive data.</p>
   */
  sensitiveDataOccurrences?: Record<string, DetectedDataDetails[]>;

  /**
   * <p>The status of the request to retrieve occurrences of sensitive data reported by the finding. Possible values are:</p> <ul><li><p>ERROR - An error occurred when Amazon Macie attempted to locate, retrieve, or encrypt the sensitive data. The error value indicates the nature of the error that occurred.</p></li> <li><p>PROCESSING - Macie is processing the request.</p></li> <li><p>SUCCESS - Macie successfully located, retrieved, and encrypted the sensitive data.</p></li></ul>
   */
  status?: RevealRequestStatus | string;
}

/**
 * <p>Provides information about an error that occurred due to an unprocessable entity.</p>
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
  }
}

export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  /**
   * <p>The unique identifier for the finding.</p>
   */
  findingId: string | undefined;
}

export interface GetSensitiveDataOccurrencesAvailabilityResponse {
  /**
   * <p>Specifies whether occurrences of sensitive data can be retrieved for the finding. Possible values are: AVAILABLE, the sensitive data can be retrieved; and, UNAVAILABLE, the sensitive data can't be retrieved. If this value is UNAVAILABLE, the reasons array indicates why the data can't be retrieved.</p>
   */
  code?: AvailabilityCode | string;

  /**
   * <p>Specifies why occurrences of sensitive data can't be retrieved for the finding. Possible values are:</p> <ul><li><p>INVALID_CLASSIFICATION_RESULT - Amazon Macie can't verify the location of the sensitive data to retrieve. There isn't a corresponding sensitive data discovery result for the finding. Or the sensitive data discovery result specified by the ClassificationDetails.detailedResultsLocation field of the finding isn't available, is malformed or corrupted, or uses an unsupported storage format.</p></li> <li><p>OBJECT_EXCEEDS_SIZE_QUOTA - The storage size of the affected S3 object exceeds the size quota for retrieving occurrences of sensitive data.</p></li> <li><p>OBJECT_UNAVAILABLE - The affected S3 object isn't available. The object might have been renamed, moved, or deleted. Or the object was changed after Macie created the finding.</p></li> <li><p>UNSUPPORTED_FINDING_TYPE - The specified finding isn't a sensitive data finding.</p></li> <li><p>UNSUPPORTED_OBJECT_TYPE - The affected S3 object uses a file or storage format that Macie doesn't support for retrieving occurrences of sensitive data.</p></li></ul> <p>This value is null if sensitive data can be retrieved for the finding.</p>
   */
  reasons?: (UnavailabilityReasonCode | string)[];
}

export interface GetSensitivityInspectionTemplateRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;
}

/**
 * <p>Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface SensitivityInspectionTemplateExcludes {
  /**
   * <p>An array of unique identifiers, one for each managed data identifier to exclude. To retrieve a list of valid values, use the ListManagedDataIdentifiers operation.</p>
   */
  managedDataIdentifierIds?: string[];
}

/**
 * <p>Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface SensitivityInspectionTemplateIncludes {
  /**
   * <p>An array of unique identifiers, one for each allow list to include.</p>
   */
  allowListIds?: string[];

  /**
   * <p>An array of unique identifiers, one for each custom data identifier to include.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>An array of unique identifiers, one for each managed data identifier to include.</p> <p>Amazon Macie uses these managed data identifiers in addition to managed data identifiers that are subsequently released and recommended for automated sensitive data discovery. To retrieve a list of valid values for the managed data identifiers that are currently available, use the ListManagedDataIdentifiers operation.</p> <para/>
   */
  managedDataIdentifierIds?: string[];
}

export interface GetSensitivityInspectionTemplateResponse {
  /**
   * <p>The custom description of the template.</p>
   */
  description?: string;

  /**
   * <p>The managed data identifiers that are explicitly excluded (not used) when analyzing data.</p>
   */
  excludes?: SensitivityInspectionTemplateExcludes;

  /**
   * <p>The allow lists, custom data identifiers, and managed data identifiers that are included (used) when analyzing data.</p>
   */
  includes?: SensitivityInspectionTemplateIncludes;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * <p>The unique identifier for the template.</p>
   */
  sensitivityInspectionTemplateId?: string;
}

export enum UsageStatisticsSortKey {
  accountId = "accountId",
  freeTrialStartDate = "freeTrialStartDate",
  serviceLimitValue = "serviceLimitValue",
  total = "total",
}

/**
 * <p>Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.</p>
 */
export interface UsageStatisticsSortBy {
  /**
   * <p>The field to sort the results by.</p>
   */
  key?: UsageStatisticsSortKey | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export enum TimeRange {
  MONTH_TO_DATE = "MONTH_TO_DATE",
  PAST_30_DAYS = "PAST_30_DAYS",
}

export interface GetUsageStatisticsRequest {
  /**
   * <p>An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.</p>
   */
  filterBy?: UsageStatisticsFilter[];

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortBy?: UsageStatisticsSortBy;

  /**
   * <p>The inclusive time period to query usage data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value, Amazon Macie provides usage data for the preceding 30 days.</p>
   */
  timeRange?: TimeRange | string;
}

export interface GetUsageStatisticsResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for an account that matches the filter criteria specified in the request.</p>
   */
  records?: UsageRecord[];

  /**
   * <p>The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.</p>
   */
  timeRange?: TimeRange | string;
}

export interface GetUsageTotalsRequest {
  /**
   * <p>The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.</p>
   */
  timeRange?: string;
}

export interface GetUsageTotalsResponse {
  /**
   * <p>The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.</p>
   */
  timeRange?: TimeRange | string;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.</p>
   */
  usageTotals?: UsageTotal[];
}

export interface ListAllowListsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListAllowListsResponse {
  /**
   * <p>An array of objects, one for each allow list.</p>
   */
  allowLists?: AllowListSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

/**
 * <p>Specifies criteria for filtering the results of a request for information about classification jobs.</p>
 */
export interface ListJobsFilterCriteria {
  /**
   * <p>An array of objects, one for each condition that determines which jobs to exclude from the results.</p>
   */
  excludes?: ListJobsFilterTerm[];

  /**
   * <p>An array of objects, one for each condition that determines which jobs to include in the results.</p>
   */
  includes?: ListJobsFilterTerm[];
}

export enum ListJobsSortAttributeName {
  createdAt = "createdAt",
  jobStatus = "jobStatus",
  jobType = "jobType",
  name = "name",
}

/**
 * <p>Specifies criteria for sorting the results of a request for information about classification jobs.</p>
 */
export interface ListJobsSortCriteria {
  /**
   * <p>The property to sort the results by.</p>
   */
  attributeName?: ListJobsSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export interface ListClassificationJobsRequest {
  /**
   * <p>The criteria to use to filter the results.</p>
   */
  filterCriteria?: ListJobsFilterCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: ListJobsSortCriteria;
}

export interface ListClassificationJobsResponse {
  /**
   * <p>An array of objects, one for each job that matches the filter criteria specified in the request.</p>
   */
  items?: JobSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListClassificationScopesRequest {
  /**
   * <p>The name of the classification scope to retrieve the unique identifier for.</p>
   */
  name?: string;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListClassificationScopesResponse {
  /**
   * <p>An array that specifies the unique identifier and name of the classification scope for the account.</p>
   */
  classificationScopes?: ClassificationScopeSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListCustomDataIdentifiersRequest {
  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier.</p>
   */
  items?: CustomDataIdentifierSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListFindingsRequest {
  /**
   * <p>The criteria to use to filter the results.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: SortCriteria;
}

export interface ListFindingsResponse {
  /**
   * <p>An array of strings, where each string is the unique identifier for a finding that matches the filter criteria specified in the request.</p>
   */
  findingIds?: string[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListFindingsFiltersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListFindingsFiltersResponse {
  /**
   * <p>An array of objects, one for each filter that's associated with the account.</p>
   */
  findingsFilterListItems?: FindingsFilterListItem[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const AdminAccountFilterSensitiveLog = (obj: AdminAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowListSummaryFilterSensitiveLog = (obj: AllowListSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCustomDataIdentifierSummaryFilterSensitiveLog = (
  obj: BatchGetCustomDataIdentifierSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDetailsFilterSensitiveLog = (obj: JobDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectCountByEncryptionTypeFilterSensitiveLog = (obj: ObjectCountByEncryptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlockPublicAccessFilterSensitiveLog = (obj: BlockPublicAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountLevelPermissionsFilterSensitiveLog = (obj: AccountLevelPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessControlListFilterSensitiveLog = (obj: AccessControlList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketPolicyFilterSensitiveLog = (obj: BucketPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketLevelPermissionsFilterSensitiveLog = (obj: BucketLevelPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketPermissionConfigurationFilterSensitiveLog = (obj: BucketPermissionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketPublicAccessFilterSensitiveLog = (obj: BucketPublicAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationDetailsFilterSensitiveLog = (obj: ReplicationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketServerSideEncryptionFilterSensitiveLog = (obj: BucketServerSideEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyValuePairFilterSensitiveLog = (obj: KeyValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectLevelStatisticsFilterSensitiveLog = (obj: ObjectLevelStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketMetadataFilterSensitiveLog = (obj: BucketMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationScopeSummaryFilterSensitiveLog = (obj: ClassificationScopeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimpleCriterionForJobFilterSensitiveLog = (obj: SimpleCriterionForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagCriterionPairForJobFilterSensitiveLog = (obj: TagCriterionPairForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagCriterionForJobFilterSensitiveLog = (obj: TagCriterionForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CriteriaForJobFilterSensitiveLog = (obj: CriteriaForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomDataIdentifierSummaryFilterSensitiveLog = (obj: CustomDataIdentifierSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedDataDetailsFilterSensitiveLog = (obj: DetectedDataDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectionFilterSensitiveLog = (obj: Detection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CellFilterSensitiveLog = (obj: Cell): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RangeFilterSensitiveLog = (obj: Range): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PageFilterSensitiveLog = (obj: Page): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _RecordFilterSensitiveLog = (obj: _Record): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OccurrencesFilterSensitiveLog = (obj: Occurrences): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomDetectionFilterSensitiveLog = (obj: CustomDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomDataIdentifiersFilterSensitiveLog = (obj: CustomDataIdentifiers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultDetectionFilterSensitiveLog = (obj: DefaultDetection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitiveDataItemFilterSensitiveLog = (obj: SensitiveDataItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationResultStatusFilterSensitiveLog = (obj: ClassificationResultStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationResultFilterSensitiveLog = (obj: ClassificationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationDetailsFilterSensitiveLog = (obj: ClassificationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApiCallDetailsFilterSensitiveLog = (obj: ApiCallDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingActionFilterSensitiveLog = (obj: FindingAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDetailsFilterSensitiveLog = (obj: DomainDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpCityFilterSensitiveLog = (obj: IpCity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpCountryFilterSensitiveLog = (obj: IpCountry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpGeoLocationFilterSensitiveLog = (obj: IpGeoLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpOwnerFilterSensitiveLog = (obj: IpOwner): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpAddressDetailsFilterSensitiveLog = (obj: IpAddressDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionContextAttributesFilterSensitiveLog = (obj: SessionContextAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionIssuerFilterSensitiveLog = (obj: SessionIssuer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionContextFilterSensitiveLog = (obj: SessionContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssumedRoleFilterSensitiveLog = (obj: AssumedRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsAccountFilterSensitiveLog = (obj: AwsAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsServiceFilterSensitiveLog = (obj: AwsService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FederatedUserFilterSensitiveLog = (obj: FederatedUser): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamUserFilterSensitiveLog = (obj: IamUser): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdentityRootFilterSensitiveLog = (obj: UserIdentityRoot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdentityFilterSensitiveLog = (obj: UserIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingActorFilterSensitiveLog = (obj: FindingActor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyDetailsFilterSensitiveLog = (obj: PolicyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerSideEncryptionFilterSensitiveLog = (obj: ServerSideEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketOwnerFilterSensitiveLog = (obj: S3BucketOwner): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketFilterSensitiveLog = (obj: S3Bucket): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectFilterSensitiveLog = (obj: S3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcesAffectedFilterSensitiveLog = (obj: ResourcesAffected): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SeverityFilterSensitiveLog = (obj: Severity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingFilterSensitiveLog = (obj: Finding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingsFilterListItemFilterSensitiveLog = (obj: FindingsFilterListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupCountFilterSensitiveLog = (obj: GroupCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvitationFilterSensitiveLog = (obj: Invitation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimpleScopeTermFilterSensitiveLog = (obj: SimpleScopeTerm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagValuePairFilterSensitiveLog = (obj: TagValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagScopeTermFilterSensitiveLog = (obj: TagScopeTerm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobScopeTermFilterSensitiveLog = (obj: JobScopeTerm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CriteriaBlockForJobFilterSensitiveLog = (obj: CriteriaBlockForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketCriteriaForJobFilterSensitiveLog = (obj: S3BucketCriteriaForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketDefinitionForJobFilterSensitiveLog = (obj: S3BucketDefinitionForJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LastRunErrorStatusFilterSensitiveLog = (obj: LastRunErrorStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPausedDetailsFilterSensitiveLog = (obj: UserPausedDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSummaryFilterSensitiveLog = (obj: JobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsFilterTermFilterSensitiveLog = (obj: ListJobsFilterTerm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedDataIdentifierSummaryFilterSensitiveLog = (obj: ManagedDataIdentifierSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MatchingBucketFilterSensitiveLog = (obj: MatchingBucket): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MatchingResourceFilterSensitiveLog = (obj: MatchingResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceProfileArtifactFilterSensitiveLog = (obj: ResourceProfileArtifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesSimpleCriterionFilterSensitiveLog = (obj: SearchResourcesSimpleCriterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesTagCriterionPairFilterSensitiveLog = (obj: SearchResourcesTagCriterionPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesTagCriterionFilterSensitiveLog = (obj: SearchResourcesTagCriterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesCriteriaFilterSensitiveLog = (obj: SearchResourcesCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitivityInspectionTemplatesEntryFilterSensitiveLog = (
  obj: SensitivityInspectionTemplatesEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuppressDataIdentifierFilterSensitiveLog = (obj: SuppressDataIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedAccountFilterSensitiveLog = (obj: UnprocessedAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceLimitFilterSensitiveLog = (obj: ServiceLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageByAccountFilterSensitiveLog = (obj: UsageByAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageRecordFilterSensitiveLog = (obj: UsageRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageStatisticsFilterFilterSensitiveLog = (obj: UsageStatisticsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageTotalFilterSensitiveLog = (obj: UsageTotal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInvitationRequestFilterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInvitationResponseFilterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountDetailFilterSensitiveLog = (obj: AccountDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3WordsListFilterSensitiveLog = (obj: S3WordsList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowListCriteriaFilterSensitiveLog = (obj: AllowListCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowListStatusFilterSensitiveLog = (obj: AllowListStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCustomDataIdentifiersRequestFilterSensitiveLog = (
  obj: BatchGetCustomDataIdentifiersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCustomDataIdentifiersResponseFilterSensitiveLog = (
  obj: BatchGetCustomDataIdentifiersResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketCountByEffectivePermissionFilterSensitiveLog = (obj: BucketCountByEffectivePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketCountByEncryptionTypeFilterSensitiveLog = (obj: BucketCountByEncryptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketCountBySharedAccessTypeFilterSensitiveLog = (obj: BucketCountBySharedAccessType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketCountPolicyAllowsUnencryptedObjectUploadsFilterSensitiveLog = (
  obj: BucketCountPolicyAllowsUnencryptedObjectUploads
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketCriteriaAdditionalPropertiesFilterSensitiveLog = (obj: BucketCriteriaAdditionalProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketSortCriteriaFilterSensitiveLog = (obj: BucketSortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitivityAggregationsFilterSensitiveLog = (obj: SensitivityAggregations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketStatisticsBySensitivityFilterSensitiveLog = (obj: BucketStatisticsBySensitivity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationFilterSensitiveLog = (obj: S3Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassificationExportConfigurationFilterSensitiveLog = (obj: ClassificationExportConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAllowListRequestFilterSensitiveLog = (obj: CreateAllowListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAllowListResponseFilterSensitiveLog = (obj: CreateAllowListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobScopingBlockFilterSensitiveLog = (obj: JobScopingBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScopingFilterSensitiveLog = (obj: Scoping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3JobDefinitionFilterSensitiveLog = (obj: S3JobDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DailyScheduleFilterSensitiveLog = (obj: DailySchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonthlyScheduleFilterSensitiveLog = (obj: MonthlySchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WeeklyScheduleFilterSensitiveLog = (obj: WeeklySchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobScheduleFrequencyFilterSensitiveLog = (obj: JobScheduleFrequency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClassificationJobRequestFilterSensitiveLog = (obj: CreateClassificationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClassificationJobResponseFilterSensitiveLog = (obj: CreateClassificationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SeverityLevelFilterSensitiveLog = (obj: SeverityLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomDataIdentifierRequestFilterSensitiveLog = (obj: CreateCustomDataIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomDataIdentifierResponseFilterSensitiveLog = (obj: CreateCustomDataIdentifierResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CriterionAdditionalPropertiesFilterSensitiveLog = (obj: CriterionAdditionalProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingCriteriaFilterSensitiveLog = (obj: FindingCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFindingsFilterRequestFilterSensitiveLog = (obj: CreateFindingsFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFindingsFilterResponseFilterSensitiveLog = (obj: CreateFindingsFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInvitationsRequestFilterSensitiveLog = (obj: CreateInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInvitationsResponseFilterSensitiveLog = (obj: CreateInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMemberRequestFilterSensitiveLog = (obj: CreateMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMemberResponseFilterSensitiveLog = (obj: CreateMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSampleFindingsRequestFilterSensitiveLog = (obj: CreateSampleFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSampleFindingsResponseFilterSensitiveLog = (obj: CreateSampleFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsRequestFilterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsResponseFilterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAllowListRequestFilterSensitiveLog = (obj: DeleteAllowListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAllowListResponseFilterSensitiveLog = (obj: DeleteAllowListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomDataIdentifierRequestFilterSensitiveLog = (obj: DeleteCustomDataIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomDataIdentifierResponseFilterSensitiveLog = (obj: DeleteCustomDataIdentifierResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFindingsFilterRequestFilterSensitiveLog = (obj: DeleteFindingsFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFindingsFilterResponseFilterSensitiveLog = (obj: DeleteFindingsFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsRequestFilterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsResponseFilterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMemberRequestFilterSensitiveLog = (obj: DeleteMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMemberResponseFilterSensitiveLog = (obj: DeleteMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBucketsRequestFilterSensitiveLog = (obj: DescribeBucketsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBucketsResponseFilterSensitiveLog = (obj: DescribeBucketsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClassificationJobRequestFilterSensitiveLog = (obj: DescribeClassificationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatisticsFilterSensitiveLog = (obj: Statistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClassificationJobResponseFilterSensitiveLog = (obj: DescribeClassificationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableMacieRequestFilterSensitiveLog = (obj: DisableMacieRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableMacieResponseFilterSensitiveLog = (obj: DisableMacieResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMemberRequestFilterSensitiveLog = (obj: DisassociateMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMemberResponseFilterSensitiveLog = (obj: DisassociateMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableMacieRequestFilterSensitiveLog = (obj: EnableMacieRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableMacieResponseFilterSensitiveLog = (obj: EnableMacieResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingStatisticsSortCriteriaFilterSensitiveLog = (obj: FindingStatisticsSortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountRequestFilterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountResponseFilterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAllowListRequestFilterSensitiveLog = (obj: GetAllowListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAllowListResponseFilterSensitiveLog = (obj: GetAllowListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAutomatedDiscoveryConfigurationRequestFilterSensitiveLog = (
  obj: GetAutomatedDiscoveryConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAutomatedDiscoveryConfigurationResponseFilterSensitiveLog = (
  obj: GetAutomatedDiscoveryConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketStatisticsRequestFilterSensitiveLog = (obj: GetBucketStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBucketStatisticsResponseFilterSensitiveLog = (obj: GetBucketStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClassificationExportConfigurationRequestFilterSensitiveLog = (
  obj: GetClassificationExportConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClassificationExportConfigurationResponseFilterSensitiveLog = (
  obj: GetClassificationExportConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClassificationScopeRequestFilterSensitiveLog = (obj: GetClassificationScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ClassificationScopeExclusionFilterSensitiveLog = (obj: S3ClassificationScopeExclusion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ClassificationScopeFilterSensitiveLog = (obj: S3ClassificationScope): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClassificationScopeResponseFilterSensitiveLog = (obj: GetClassificationScopeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomDataIdentifierRequestFilterSensitiveLog = (obj: GetCustomDataIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomDataIdentifierResponseFilterSensitiveLog = (obj: GetCustomDataIdentifierResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortCriteriaFilterSensitiveLog = (obj: SortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsRequestFilterSensitiveLog = (obj: GetFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsResponseFilterSensitiveLog = (obj: GetFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsFilterRequestFilterSensitiveLog = (obj: GetFindingsFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsFilterResponseFilterSensitiveLog = (obj: GetFindingsFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsPublicationConfigurationRequestFilterSensitiveLog = (
  obj: GetFindingsPublicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityHubConfigurationFilterSensitiveLog = (obj: SecurityHubConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsPublicationConfigurationResponseFilterSensitiveLog = (
  obj: GetFindingsPublicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingStatisticsRequestFilterSensitiveLog = (obj: GetFindingStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingStatisticsResponseFilterSensitiveLog = (obj: GetFindingStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountRequestFilterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountResponseFilterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMacieSessionRequestFilterSensitiveLog = (obj: GetMacieSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMacieSessionResponseFilterSensitiveLog = (obj: GetMacieSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountRequestFilterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountResponseFilterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberRequestFilterSensitiveLog = (obj: GetMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberResponseFilterSensitiveLog = (obj: GetMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceProfileRequestFilterSensitiveLog = (obj: GetResourceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceStatisticsFilterSensitiveLog = (obj: ResourceStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceProfileResponseFilterSensitiveLog = (obj: GetResourceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRevealConfigurationRequestFilterSensitiveLog = (obj: GetRevealConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevealConfigurationFilterSensitiveLog = (obj: RevealConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRevealConfigurationResponseFilterSensitiveLog = (obj: GetRevealConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitiveDataOccurrencesRequestFilterSensitiveLog = (obj: GetSensitiveDataOccurrencesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitiveDataOccurrencesResponseFilterSensitiveLog = (
  obj: GetSensitiveDataOccurrencesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitiveDataOccurrencesAvailabilityRequestFilterSensitiveLog = (
  obj: GetSensitiveDataOccurrencesAvailabilityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitiveDataOccurrencesAvailabilityResponseFilterSensitiveLog = (
  obj: GetSensitiveDataOccurrencesAvailabilityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitivityInspectionTemplateRequestFilterSensitiveLog = (
  obj: GetSensitivityInspectionTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitivityInspectionTemplateExcludesFilterSensitiveLog = (
  obj: SensitivityInspectionTemplateExcludes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensitivityInspectionTemplateIncludesFilterSensitiveLog = (
  obj: SensitivityInspectionTemplateIncludes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSensitivityInspectionTemplateResponseFilterSensitiveLog = (
  obj: GetSensitivityInspectionTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageStatisticsSortByFilterSensitiveLog = (obj: UsageStatisticsSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageStatisticsRequestFilterSensitiveLog = (obj: GetUsageStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageStatisticsResponseFilterSensitiveLog = (obj: GetUsageStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageTotalsRequestFilterSensitiveLog = (obj: GetUsageTotalsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageTotalsResponseFilterSensitiveLog = (obj: GetUsageTotalsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAllowListsRequestFilterSensitiveLog = (obj: ListAllowListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAllowListsResponseFilterSensitiveLog = (obj: ListAllowListsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsFilterCriteriaFilterSensitiveLog = (obj: ListJobsFilterCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsSortCriteriaFilterSensitiveLog = (obj: ListJobsSortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClassificationJobsRequestFilterSensitiveLog = (obj: ListClassificationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClassificationJobsResponseFilterSensitiveLog = (obj: ListClassificationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClassificationScopesRequestFilterSensitiveLog = (obj: ListClassificationScopesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClassificationScopesResponseFilterSensitiveLog = (obj: ListClassificationScopesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomDataIdentifiersRequestFilterSensitiveLog = (obj: ListCustomDataIdentifiersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomDataIdentifiersResponseFilterSensitiveLog = (obj: ListCustomDataIdentifiersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsRequestFilterSensitiveLog = (obj: ListFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsResponseFilterSensitiveLog = (obj: ListFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsFiltersRequestFilterSensitiveLog = (obj: ListFindingsFiltersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsFiltersResponseFilterSensitiveLog = (obj: ListFindingsFiltersResponse): any => ({
  ...obj,
});
