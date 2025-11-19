// smithy-typescript generated code
import {
  AdminStatus,
  AllowListStatusCode,
  AllowsUnencryptedObjectUploads,
  AutoEnableMode,
  AutomatedDiscoveryAccountStatus,
  AutomatedDiscoveryAccountUpdateErrorCode,
  AutomatedDiscoveryMonitoringStatus,
  AutomatedDiscoveryStatus,
  AvailabilityCode,
  BucketMetadataErrorCode,
  ClassificationScopeUpdateOperation,
  Currency,
  DataIdentifierSeverity,
  DataIdentifierType,
  DayOfWeek,
  EffectivePermission,
  EncryptionType,
  ErrorCode,
  FindingActionType,
  FindingCategory,
  FindingPublishingFrequency,
  FindingsFilterAction,
  FindingStatisticsSortAttributeName,
  FindingType,
  GroupBy,
  IsDefinedInJob,
  IsMonitoredByJob,
  JobComparator,
  JobStatus,
  JobType,
  LastRunErrorStatusCode,
  ListJobsFilterKey,
  ListJobsSortAttributeName,
  MacieStatus,
  ManagedDataIdentifierSelector,
  OrderBy,
  OriginType,
  RelationshipStatus,
  RetrievalMode,
  RevealRequestStatus,
  RevealStatus,
  ScopeFilterKey,
  SearchResourcesComparator,
  SearchResourcesSimpleCriterionKey,
  SearchResourcesSortAttributeName,
  SensitiveDataItemCategory,
  SeverityDescription,
  SharedAccess,
  SimpleCriterionKeyForJob,
  StorageClass,
  TagTarget,
  TimeRange,
  Type,
  UnavailabilityReasonCode,
  Unit,
  UsageStatisticsFilterComparator,
  UsageStatisticsFilterKey,
  UsageStatisticsSortKey,
  UsageType,
  UserIdentityType,
} from "./enums";

/**
 * <p>Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.</p>
 * @public
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The current status of the account as the delegated Amazon Macie administrator account for the organization.</p>
   * @public
   */
  status?: AdminStatus | undefined;
}

/**
 * <p>Provides a subset of information about an allow list.</p>
 * @public
 */
export interface AllowListSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The custom description of the allow list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the allow list.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the allow list.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Provides information about the status of automated sensitive data discovery for an Amazon Macie account.</p>
 * @public
 */
export interface AutomatedDiscoveryAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The current status of automated sensitive data discovery for the account. Possible values are: ENABLED, perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.</p>
   * @public
   */
  status?: AutomatedDiscoveryAccountStatus | undefined;
}

/**
 * <p>Changes the status of automated sensitive data discovery for an Amazon Macie account.</p>
 * @public
 */
export interface AutomatedDiscoveryAccountUpdate {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The new status of automated sensitive data discovery for the account. Valid values are: ENABLED, perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.</p>
   * @public
   */
  status?: AutomatedDiscoveryAccountStatus | undefined;
}

/**
 * <p>Provides information about a request that failed to change the status of automated sensitive data discovery for an Amazon Macie account.</p>
 * @public
 */
export interface AutomatedDiscoveryAccountUpdateError {
  /**
   * <p>The Amazon Web Services account ID for the account that the request applied to.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The error code for the error that caused the request to fail for the account (accountId). Possible values are: ACCOUNT_NOT_FOUND, the account doesn’t exist or you're not the Amazon Macie administrator for the account; and, ACCOUNT_PAUSED, Macie isn’t enabled for the account in the current Amazon Web Services Region.</p>
   * @public
   */
  errorCode?: AutomatedDiscoveryAccountUpdateErrorCode | undefined;
}

/**
 * <p>Provides information about a custom data identifier.</p>
 * @public
 */
export interface BatchGetCustomDataIdentifierSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>The custom description of the custom data identifier.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the custom data identifier.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in an S3 bucket, and, if so, the details of the job that ran most recently.</p>
 * @public
 */
export interface JobDetails {
  /**
   * <p>Specifies whether any one-time or recurring jobs are configured to analyze objects in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more jobs and at least one of those jobs has a status other than CANCELLED. Or the bucket matched the bucket criteria (S3BucketCriteriaForJob) for at least one job that previously ran.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any jobs, all the jobs that explicitly include the bucket in their bucket definitions have a status of CANCELLED, or the bucket didn't match the bucket criteria (S3BucketCriteriaForJob) for any jobs that previously ran.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>
   * @public
   */
  isDefinedInJob?: IsDefinedInJob | undefined;

  /**
   * <p>Specifies whether any recurring jobs are configured to analyze objects in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more recurring jobs or the bucket matches the bucket criteria (S3BucketCriteriaForJob) for one or more recurring jobs. At least one of those jobs has a status other than CANCELLED.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any recurring jobs, the bucket doesn't match the bucket criteria (S3BucketCriteriaForJob) for any recurring jobs, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>
   * @public
   */
  isMonitoredByJob?: IsMonitoredByJob | undefined;

  /**
   * <p>The unique identifier for the job that ran most recently and is configured to analyze objects in the bucket, either the latest run of a recurring job or the only run of a one-time job.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   * @public
   */
  lastJobId?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   * @public
   */
  lastJobRunTime?: Date | undefined;
}

/**
 * <p>Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.</p>
 * @public
 */
export interface ObjectCountByEncryptionType {
  /**
   * <p>The total number of objects that are encrypted with customer-provided keys. The objects use server-side encryption with customer-provided keys (SSE-C).</p>
   * @public
   */
  customerManaged?: number | undefined;

  /**
   * <p>The total number of objects that are encrypted with KMS keys, either Amazon Web Services managed keys or customer managed keys. The objects use dual-layer server-side encryption or server-side encryption with KMS keys (DSSE-KMS or SSE-KMS).</p>
   * @public
   */
  kmsManaged?: number | undefined;

  /**
   * <p>The total number of objects that are encrypted with Amazon S3 managed keys. The objects use server-side encryption with Amazon S3 managed keys (SSE-S3).</p>
   * @public
   */
  s3Managed?: number | undefined;

  /**
   * <p>The total number of objects that use client-side encryption or aren't encrypted.</p>
   * @public
   */
  unencrypted?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the encryption settings for these objects.</p>
   * @public
   */
  unknown?: number | undefined;
}

/**
 * <p>Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface BlockPublicAccess {
  /**
   * <p>Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.</p>
   * @public
   */
  blockPublicAcls?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 blocks public bucket policies for the bucket.</p>
   * @public
   */
  blockPublicPolicy?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.</p>
   * @public
   */
  ignorePublicAcls?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 restricts public bucket policies for the bucket.</p>
   * @public
   */
  restrictPublicBuckets?: boolean | undefined;
}

/**
 * <p>Provides information about the account-level permissions settings that apply to an S3 bucket.</p>
 * @public
 */
export interface AccountLevelPermissions {
  /**
   * <p>The block public access settings for the Amazon Web Services account that owns the bucket.</p>
   * @public
   */
  blockPublicAccess?: BlockPublicAccess | undefined;
}

/**
 * <p>Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.</p>
 * @public
 */
export interface AccessControlList {
  /**
   * <p>Specifies whether the ACL grants the general public with read access permissions for the bucket.</p>
   * @public
   */
  allowsPublicReadAccess?: boolean | undefined;

  /**
   * <p>Specifies whether the ACL grants the general public with write access permissions for the bucket.</p>
   * @public
   */
  allowsPublicWriteAccess?: boolean | undefined;
}

/**
 * <p>Provides information about the permissions settings of the bucket policy for an S3 bucket.</p>
 * @public
 */
export interface BucketPolicy {
  /**
   * <p>Specifies whether the bucket policy allows the general public to have read access to the bucket.</p>
   * @public
   */
  allowsPublicReadAccess?: boolean | undefined;

  /**
   * <p>Specifies whether the bucket policy allows the general public to have write access to the bucket.</p>
   * @public
   */
  allowsPublicWriteAccess?: boolean | undefined;
}

/**
 * <p>Provides information about the bucket-level permissions settings for an S3 bucket.</p>
 * @public
 */
export interface BucketLevelPermissions {
  /**
   * <p>The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.</p>
   * @public
   */
  accessControlList?: AccessControlList | undefined;

  /**
   * <p>The block public access settings for the bucket.</p>
   * @public
   */
  blockPublicAccess?: BlockPublicAccess | undefined;

  /**
   * <p>The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.</p>
   * @public
   */
  bucketPolicy?: BucketPolicy | undefined;
}

/**
 * <p>Provides information about the account-level and bucket-level permissions settings for an S3 bucket.</p>
 * @public
 */
export interface BucketPermissionConfiguration {
  /**
   * <p>The account-level permissions settings that apply to the bucket.</p>
   * @public
   */
  accountLevelPermissions?: AccountLevelPermissions | undefined;

  /**
   * <p>The bucket-level permissions settings for the bucket.</p>
   * @public
   */
  bucketLevelPermissions?: BucketLevelPermissions | undefined;
}

/**
 * <p>Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.</p>
 * @public
 */
export interface BucketPublicAccess {
  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are:</p> <ul><li><p>NOT_PUBLIC - The bucket isn't publicly accessible.</p></li> <li><p>PUBLIC - The bucket is publicly accessible.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.</p></li></ul>
   * @public
   */
  effectivePermission?: EffectivePermission | undefined;

  /**
   * <p>The account-level and bucket-level permissions settings for the bucket.</p>
   * @public
   */
  permissionConfiguration?: BucketPermissionConfiguration | undefined;
}

/**
 * <p>Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.</p>
 * @public
 */
export interface ReplicationDetails {
  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to any destination.</p>
   * @public
   */
  replicated?: boolean | undefined;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to a bucket for an Amazon Web Services account that isn't part of your Amazon Macie organization. An <i>Amazon Macie organization</i> is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.</p>
   * @public
   */
  replicatedExternally?: boolean | undefined;

  /**
   * <p>An array of Amazon Web Services account IDs, one for each Amazon Web Services account that owns a bucket that the bucket is configured to replicate one or more objects to.</p>
   * @public
   */
  replicationAccounts?: string[] | undefined;
}

/**
 * <p>Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface BucketServerSideEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used by default to encrypt objects that are added to the bucket. This value is null if the bucket is configured to use an Amazon S3 managed key to encrypt new objects.</p>
   * @public
   */
  kmsMasterKeyId?: string | undefined;

  /**
   * <p>The server-side encryption algorithm that's used by default to encrypt objects that are added to the bucket. Possible values are:</p> <ul><li><p>AES256 - New objects use SSE-S3 encryption. They're encrypted with an Amazon S3 managed key.</p></li> <li><p>aws:kms - New objects use SSE-KMS encryption. They're encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key.</p></li> <li><p>aws:kms:dsse - New objects use DSSE-KMS encryption. They're encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key.</p></li> <li><p>NONE - The bucket's default encryption settings don't specify server-side encryption behavior for new objects.</p></li></ul>
   * @public
   */
  type?: Type | undefined;
}

/**
 * <p>Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.</p>
 * @public
 */
export interface KeyValuePair {
  /**
   * <p>One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket.</p>
 * @public
 */
export interface ObjectLevelStatistics {
  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  fileType?: number | undefined;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.</p>
   * @public
   */
  storageClass?: number | undefined;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error or issue prevents Macie from retrieving and processing metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null or UNKNOWN. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause, refer to the errorCode and errorMessage values.</p>
 * @public
 */
export interface BucketMetadata {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the bucket.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>
   * @public
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | undefined;

  /**
   * <p>Specifies whether automated sensitive data discovery is currently configured to analyze objects in the bucket. Possible values are: MONITORED, the bucket is included in analyses; and, NOT_MONITORED, the bucket is excluded from analyses. If automated sensitive data discovery is disabled for your account, this value is NOT_MONITORED.</p>
   * @public
   */
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket.</p>
   * @public
   */
  bucketCreatedAt?: Date | undefined;

  /**
   * <p>The name of the bucket.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * <p>The code for an error or issue that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. Possible values are:</p> <ul><li><p>ACCESS_DENIED - Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request.</p></li> <li><p>BUCKET_COUNT_EXCEEDS_QUOTA - Retrieving and processing the information would exceed the quota for the number of buckets that Macie monitors for an account (10,000).</p></li></ul> <p>If this value is null, Macie was able to retrieve and process the information.</p>
   * @public
   */
  errorCode?: BucketMetadataErrorCode | undefined;

  /**
   * <p>A brief description of the error or issue (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.</p>
   * @public
   */
  jobDetails?: JobDetails | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed objects in the bucket while performing automated sensitive data discovery. This value is null if this analysis hasn't occurred.</p>
   * @public
   */
  lastAutomatedDiscoveryTime?: Date | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the bucket.</p>
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * <p>The total number of objects in the bucket.</p>
   * @public
   */
  objectCount?: number | undefined;

  /**
   * <p>The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   * @public
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType | undefined;

  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket, and provides information about those settings.</p>
   * @public
   */
  publicAccess?: BucketPublicAccess | undefined;

  /**
   * <p>The Amazon Web Services Region that hosts the bucket.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to buckets for other Amazon Web Services accounts and, if so, which accounts.</p>
   * @public
   */
  replicationDetails?: ReplicationDetails | undefined;

  /**
   * <p>The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive).</p><p>If automated sensitive data discovery has never been enabled for your account or it's been disabled for your organization or standalone account for more than 30 days, possible values are: 1, the bucket is empty; or, 50, the bucket stores objects but it's been excluded from recent analyses.</p>
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * <p>The default server-side encryption settings for the bucket.</p>
   * @public
   */
  serverSideEncryption?: BucketServerSideEncryption | undefined;

  /**
   * <p>Specifies whether the bucket is shared with another Amazon Web Services account, an Amazon CloudFront origin access identity (OAI), or a CloudFront origin access control (OAC). Possible values are:</p> <ul><li><p>EXTERNAL - The bucket is shared with one or more of the following or any combination of the following: a CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't part of your Amazon Macie organization.</p></li> <li><p>INTERNAL - The bucket is shared with one or more Amazon Web Services accounts that are part of your Amazon Macie organization. It isn't shared with a CloudFront OAI or OAC.</p></li> <li><p>NOT_SHARED - The bucket isn't shared with another Amazon Web Services account, a CloudFront OAI, or a CloudFront OAC.</p></li> <li><p>UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.</p></li></ul> <p>An <i>Amazon Macie organization</i> is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.</p>
   * @public
   */
  sharedAccess?: SharedAccess | undefined;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * <p>An array that specifies the tags (keys and values) that are associated with the bucket.</p>
   * @public
   */
  tags?: KeyValuePair[] | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics | undefined;

  /**
   * <p>Specifies whether versioning is enabled for the bucket.</p>
   * @public
   */
  versioning?: boolean | undefined;
}

/**
 * <p>Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account.</p>
 * @public
 */
export interface ClassificationScopeSummary {
  /**
   * <p>The unique identifier for the classification scope.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the classification scope: automated-sensitive-data-discovery.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.</p>
 * @public
 */
export interface SimpleCriterionForJob {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * <p>The property to use in the condition.</p>
   * @public
   */
  key?: SimpleCriterionKeyForJob | undefined;

  /**
   * <p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the bucket.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of a bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of a bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of a bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in these values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
 * @public
 */
export interface TagCriterionPairForJob {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value to use in the condition.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.</p>
 * @public
 */
export interface TagCriterionForJob {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * <p>The tag keys, tag values, or tag key and value pairs to use in the condition.</p>
   * @public
   */
  tagValues?: TagCriterionPairForJob[] | undefined;
}

/**
 * <p>Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.</p>
 * @public
 */
export interface CriteriaForJob {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding buckets from the job.</p>
   * @public
   */
  simpleCriterion?: SimpleCriterionForJob | undefined;

  /**
   * <p>A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding buckets from the job.</p>
   * @public
   */
  tagCriterion?: TagCriterionForJob | undefined;
}

/**
 * <p>Provides information about a custom data identifier.</p>
 * @public
 */
export interface CustomDataIdentifierSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The custom description of the custom data identifier.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the custom data identifier.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding.</p>
 * @public
 */
export interface DetectedDataDetails {
  /**
   * <p>An occurrence of the specified type of sensitive data. Each occurrence contains 1-128 characters.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for an account. The information also specifies the custom or managed data identifier that detected the data. This information is available only if automated sensitive data discovery has been enabled for the account.</p>
 * @public
 */
export interface Detection {
  /**
   * <p>If the sensitive data was detected by a custom data identifier, the Amazon Resource Name (ARN) of the custom data identifier that detected the data. Otherwise, this value is null.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The total number of occurrences of the sensitive data.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The unique identifier for the custom data identifier or managed data identifier that detected the sensitive data. For additional details about a specified managed data identifier, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the custom data identifier or managed data identifier that detected the sensitive data. For a managed data identifier, this value is the same as the unique identifier (id).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies whether occurrences of this type of sensitive data are excluded (true) or included (false) in the bucket's sensitivity score, if the score is calculated by Amazon Macie.</p>
   * @public
   */
  suppressed?: boolean | undefined;

  /**
   * <p>The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.</p>
   * @public
   */
  type?: DataIdentifierType | undefined;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.</p>
 * @public
 */
export interface Cell {
  /**
   * <p>The location of the cell, as an absolute cell reference, that contains the sensitive data, for example Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.</p>
   * @public
   */
  cellReference?: string | undefined;

  /**
   * <p>The column number of the column that contains the sensitive data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier, for example: 1 for column A, 2 for column B, and so on.</p>
   * @public
   */
  column?: number | undefined;

  /**
   * <p>The name of the column that contains the sensitive data, if available.</p>
   * @public
   */
  columnName?: string | undefined;

  /**
   * <p>The row number of the row that contains the sensitive data.</p>
   * @public
   */
  row?: number | undefined;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The number of lines from the beginning of the file to the end of the sensitive data.</p>
   * @public
   */
  end?: number | undefined;

  /**
   * <p>The number of lines from the beginning of the file to the beginning of the sensitive data.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>The number of characters, with spaces and starting from 1, from the beginning of the first line that contains the sensitive data (start) to the beginning of the sensitive data.</p>
   * @public
   */
  startColumn?: number | undefined;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.</p>
 * @public
 */
export interface Page {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  lineRange?: Range | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  offsetRange?: Range | undefined;

  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   * @public
   */
  pageNumber?: number | undefined;
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the sensitive data. For an Avro object container or Parquet file, this is the path to the field in the record (recordIndex) that contains the data. For a JSON or JSON Lines file, this is the path to the field or array that contains the data. If the data is a value in an array, the path also indicates which value contains the data.</p> <p>If Amazon Macie detects sensitive data in the name of any element in the path, Macie omits this field. If the name of an element exceeds 240 characters, Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.</p>
   * @public
   */
  jsonPath?: string | undefined;

  /**
   * <p>For an Avro object container or Parquet file, the record index, starting from 0, for the record that contains the sensitive data. For a JSON Lines file, the line index, starting from 0, for the line that contains the sensitive data. This value is always 0 for JSON files.</p>
   * @public
   */
  recordIndex?: number | undefined;
}

/**
 * <p>Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.</p>
 * @public
 */
export interface Occurrences {
  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. This value is null for all other types of files.</p> <p>Each Cell object specifies a cell or field that contains the sensitive data.</p>
   * @public
   */
  cells?: Cell[] | undefined;

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file. Each Range object specifies a line or inclusive range of lines that contains the sensitive data, and the position of the data on the specified line or lines.</p> <p>This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the location of sensitive data in: unstructured sections of an otherwise structured file, such as a comment in a file; a malformed file that Amazon Macie analyzes as plain text; and, a CSV or TSV file that has any column names that contain sensitive data.</p>
   * @public
   */
  lineRanges?: Range[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  offsetRanges?: Range[] | undefined;

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. This value is null for all other types of files.</p> <p>Each Page object specifies a page that contains the sensitive data.</p>
   * @public
   */
  pages?: Page[] | undefined;

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. This value is null for all other types of files.</p> <p>For an Avro object container or Parquet file, each Record object specifies a record index and the path to a field in a record that contains the sensitive data. For a JSON or JSON Lines file, each Record object specifies the path to a field or array that contains the sensitive data. For a JSON Lines file, it also specifies the index of the line that contains the data.</p>
   * @public
   */
  records?: _Record[] | undefined;
}

/**
 * <p>Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.</p>
 * @public
 */
export interface CustomDetection {
  /**
   * <p>The unique identifier for the custom data identifier.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The total number of occurrences of the sensitive data that the custom data identifier detected.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The name of the custom data identifier.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   * @public
   */
  occurrences?: Occurrences | undefined;
}

/**
 * <p>Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.</p>
 * @public
 */
export interface CustomDataIdentifiers {
  /**
   * <p>The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.</p>
   * @public
   */
  detections?: CustomDetection[] | undefined;

  /**
   * <p>The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.</p>
   * @public
   */
  totalCount?: number | undefined;
}

/**
 * <p>Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.</p>
 * @public
 */
export interface DefaultDetection {
  /**
   * <p>The total number of occurrences of the type of sensitive data that was detected.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   * @public
   */
  occurrences?: Occurrences | undefined;

  /**
   * <p>The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.</p>
 * @public
 */
export interface SensitiveDataItem {
  /**
   * <p>The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
   * @public
   */
  category?: SensitiveDataItemCategory | undefined;

  /**
   * <p>An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.</p>
   * @public
   */
  detections?: DefaultDetection[] | undefined;

  /**
   * <p>The total number of occurrences of the sensitive data that was detected.</p>
   * @public
   */
  totalCount?: number | undefined;
}

/**
 * <p>Provides information about the status of a sensitive data finding.</p>
 * @public
 */
export interface ClassificationResultStatus {
  /**
   * <p>The status of the finding. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the S3 object that the finding applies to.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of the data in the S3 object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the S3 object that the finding applies to. For example, the object is a file that uses an unsupported format.</p></li></ul>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>A brief description of the status of the finding. This value is null if the status (code) of the finding is COMPLETE.</p> <p>Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding and the affected S3 object. Possible values are:</p> <ul><li><p>ARCHIVE_CONTAINS_UNPROCESSED_FILES - The object is an archive file and Macie extracted and analyzed only some or none of the files in the archive. To determine which files Macie analyzed, if any, refer to the corresponding sensitive data discovery result for the finding (classificationDetails.detailedResultsLocation).</p></li> <li><p>ARCHIVE_EXCEEDS_SIZE_LIMIT - The object is an archive file whose total storage size exceeds the size quota for this type of archive.</p></li> <li><p>ARCHIVE_NESTING_LEVEL_OVER_LIMIT - The object is an archive file whose nested depth exceeds the quota for the maximum number of nested levels that Macie analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_BYTES_EXTRACTED_OVER_LIMIT - The object is an archive file that exceeds the quota for the maximum amount of data that Macie extracts and analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_DOCUMENTS_PROCESSED_OVER_LIMIT - The object is an archive file that contains more than the maximum number of files that Macie extracts and analyzes for this type of archive.</p></li> <li><p>FILE_EXCEEDS_SIZE_LIMIT - The storage size of the object exceeds the size quota for this type of file.</p></li> <li><p>INVALID_ENCRYPTION - The object is encrypted using server-side encryption but Macie isn't allowed to use the key. Macie can't decrypt and analyze the object.</p></li> <li><p>INVALID_KMS_KEY - The object is encrypted with an KMS key that was disabled or is being deleted. Macie can't decrypt and analyze the object.</p></li> <li><p>INVALID_OBJECT_STATE - The object doesn't use a supported Amazon S3 storage class.</p></li> <li><p>JSON_NESTING_LEVEL_OVER_LIMIT - The object contains JSON data and the nested depth of the data exceeds the quota for the number of nested levels that Macie analyzes for this type of file.</p></li> <li><p>MALFORMED_FILE - The object is a malformed or corrupted file. An error occurred when Macie attempted to detect the file's type or extract data from the file.</p></li> <li><p>MALFORMED_OR_FILE_SIZE_EXCEEDS_LIMIT - The object is a Microsoft Office file that is malformed or exceeds the size quota for this type of file. If the file is malformed, an error occurred when Macie attempted to extract data from the file.</p></li> <li><p>NO_SUCH_BUCKET_AVAILABLE - The object was in a bucket that was deleted shortly before or when Macie attempted to analyze the object.</p></li> <li><p>OBJECT_VERSION_MISMATCH - The object was changed while Macie was analyzing it.</p></li> <li><p>OOXML_UNCOMPRESSED_RATIO_EXCEEDS_LIMIT - The object is an Office Open XML file whose compression ratio exceeds the compression quota for this type of file.</p></li> <li><p>OOXML_UNCOMPRESSED_SIZE_EXCEEDS_LIMIT - The object is an Office Open XML file that exceeds the size quota for this type of file.</p></li> <li><p>PERMISSION_DENIED - Macie isn't allowed to access the object. The object's permissions settings prevent Macie from analyzing the object.</p></li> <li><p>SOURCE_OBJECT_NO_LONGER_AVAILABLE - The object was deleted shortly before or when Macie attempted to analyze it.</p></li> <li><p>TIME_CUT_OFF_REACHED - Macie started analyzing the object but additional analysis would exceed the time quota for analyzing an object.</p></li> <li><p>UNABLE_TO_PARSE_FILE - The object is a file that contains structured data and an error occurred when Macie attempted to parse the data.</p></li> <li><p>UNSUPPORTED_FILE_TYPE_EXCEPTION - The object is a file that uses an unsupported file or storage format.</p></li></ul> <p>For information about quotas, supported storage classes, and supported file and storage formats, see <a href="https://docs.aws.amazon.com/macie/latest/user/macie-quotas.html">Quotas</a> and <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-supported-storage.html">Supported storage classes and formats</a> in the <i>Amazon Macie User Guide</i>.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.</p>
 * @public
 */
export interface ClassificationResult {
  /**
   * <p>Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p> <p>This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (classificationDetails.detailedResultsLocation).</p>
   * @public
   */
  additionalOccurrences?: boolean | undefined;

  /**
   * <p>The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.</p>
   * @public
   */
  customDataIdentifiers?: CustomDataIdentifiers | undefined;

  /**
   * <p>The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.</p>
   * @public
   */
  mimeType?: string | undefined;

  /**
   * <p>The category, types, and number of occurrences of the sensitive data that produced the finding.</p>
   * @public
   */
  sensitiveData?: SensitiveDataItem[] | undefined;

  /**
   * <p>The total size, in bytes, of the data that the finding applies to.</p>
   * @public
   */
  sizeClassified?: number | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status?: ClassificationResultStatus | undefined;
}

/**
 * <p>Provides information about a sensitive data finding and the details of the finding.</p>
 * @public
 */
export interface ClassificationDetails {
  /**
   * <p>The path to the folder or file in Amazon S3 that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.</p>
   * @public
   */
  detailedResultsLocation?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The unique identifier for the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Specifies how Amazon Macie found the sensitive data that produced the finding. Possible values are: SENSITIVE_DATA_DISCOVERY_JOB, for a classification job; and, AUTOMATED_SENSITIVE_DATA_DISCOVERY, for automated sensitive data discovery.</p>
   * @public
   */
  originType?: OriginType | undefined;

  /**
   * <p>The status and other details of the finding.</p>
   * @public
   */
  result?: ClassificationResult | undefined;
}

/**
 * <p>Provides information about an API operation that an entity invoked for an affected resource.</p>
 * @public
 */
export interface ApiCallDetails {
  /**
   * <p>The name of the operation that was invoked most recently and produced the finding.</p>
   * @public
   */
  api?: string | undefined;

  /**
   * <p>The URL of the Amazon Web Services service that provides the operation, for example: s3.amazonaws.com.</p>
   * @public
   */
  apiServiceName?: string | undefined;

  /**
   * <p>The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.</p>
   * @public
   */
  firstSeen?: Date | undefined;

  /**
   * <p>The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.</p>
   * @public
   */
  lastSeen?: Date | undefined;
}

/**
 * <p>Provides information about an action that occurred for a resource and produced a policy finding.</p>
 * @public
 */
export interface FindingAction {
  /**
   * <p>The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.</p>
   * @public
   */
  actionType?: FindingActionType | undefined;

  /**
   * <p>The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.</p>
   * @public
   */
  apiCallDetails?: ApiCallDetails | undefined;
}

/**
 * <p>Provides information about the domain name of the device that an entity used to perform an action on an affected resource.</p>
 * @public
 */
export interface DomainDetails {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  domainName?: string | undefined;
}

/**
 * <p>Provides information about the city that an IP address originated from.</p>
 * @public
 */
export interface IpCity {
  /**
   * <p>The name of the city.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Provides information about the country that an IP address originated from.</p>
 * @public
 */
export interface IpCountry {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The name of the country that the IP address originated from.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Provides geographic coordinates that indicate where a specified IP address originated from.</p>
 * @public
 */
export interface IpGeoLocation {
  /**
   * <p>The latitude coordinate of the location, rounded to four decimal places.</p>
   * @public
   */
  lat?: number | undefined;

  /**
   * <p>The longitude coordinate of the location, rounded to four decimal places.</p>
   * @public
   */
  lon?: number | undefined;
}

/**
 * <p>Provides information about the registered owner of an IP address.</p>
 * @public
 */
export interface IpOwner {
  /**
   * <p>The autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   * @public
   */
  asn?: string | undefined;

  /**
   * <p>The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   * @public
   */
  asnOrg?: string | undefined;

  /**
   * <p>The name of the internet service provider (ISP) that owned the IP address.</p>
   * @public
   */
  isp?: string | undefined;

  /**
   * <p>The name of the organization that owned the IP address.</p>
   * @public
   */
  org?: string | undefined;
}

/**
 * <p>Provides information about the IP address of the device that an entity used to perform an action on an affected resource.</p>
 * @public
 */
export interface IpAddressDetails {
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the device.</p>
   * @public
   */
  ipAddressV4?: string | undefined;

  /**
   * <p>The city that the IP address originated from.</p>
   * @public
   */
  ipCity?: IpCity | undefined;

  /**
   * <p>The country that the IP address originated from.</p>
   * @public
   */
  ipCountry?: IpCountry | undefined;

  /**
   * <p>The geographic coordinates of the location that the IP address originated from.</p>
   * @public
   */
  ipGeoLocation?: IpGeoLocation | undefined;

  /**
   * <p>The registered owner of the IP address.</p>
   * @public
   */
  ipOwner?: IpOwner | undefined;
}

/**
 * <p>Provides information about the context in which temporary security credentials were issued to an entity.</p>
 * @public
 */
export interface SessionContextAttributes {
  /**
   * <p>The date and time, in UTC and ISO 8601 format, when the credentials were issued.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   * @public
   */
  mfaAuthenticated?: boolean | undefined;
}

/**
 * <p>Provides information about the source and type of temporary security credentials that were issued to an entity.</p>
 * @public
 */
export interface SessionIssuer {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source account, Identity and Access Management (IAM) user, or role that was used to get the credentials.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The source of the temporary security credentials, such as Root, IAMUser, or Role.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.</p>
   * @public
   */
  userName?: string | undefined;
}

/**
 * <p>Provides information about a session that was created for an entity that performed an action by using temporary security credentials.</p>
 * @public
 */
export interface SessionContext {
  /**
   * <p>The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   * @public
   */
  attributes?: SessionContextAttributes | undefined;

  /**
   * <p>The source and type of credentials that were issued to the entity.</p>
   * @public
   */
  sessionIssuer?: SessionIssuer | undefined;
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.</p>
 * @public
 */
export interface AssumedRole {
  /**
   * <p>The Amazon Web Services access key ID that identifies the credentials.</p>
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   * @public
   */
  sessionContext?: SessionContext | undefined;
}

/**
 * <p>Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.</p>
 * @public
 */
export interface AwsAccount {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   * @public
   */
  principalId?: string | undefined;
}

/**
 * <p>Provides information about an Amazon Web Service that performed an action on an affected resource.</p>
 * @public
 */
export interface AwsService {
  /**
   * <p>The name of the Amazon Web Service that performed the action.</p>
   * @public
   */
  invokedBy?: string | undefined;
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.</p>
 * @public
 */
export interface FederatedUser {
  /**
   * <p>The Amazon Web Services access key ID that identifies the credentials.</p>
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   * @public
   */
  sessionContext?: SessionContext | undefined;
}

/**
 * <p>Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.</p>
 * @public
 */
export interface IamUser {
  /**
   * <p>The unique identifier for the Amazon Web Services account that's associated with the IAM user who performed the action.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the IAM user who performed the action.</p>
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The username of the IAM user who performed the action.</p>
   * @public
   */
  userName?: string | undefined;
}

/**
 * <p>Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.</p>
 * @public
 */
export interface UserIdentityRoot {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   * @public
   */
  principalId?: string | undefined;
}

/**
 * <p>Provides information about the type and other characteristics of an entity that performed an action on an affected resource.</p>
 * @public
 */
export interface UserIdentity {
  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.</p>
   * @public
   */
  assumedRole?: AssumedRole | undefined;

  /**
   * <p>If the action was performed using the credentials for another Amazon Web Services account, the details of that account.</p>
   * @public
   */
  awsAccount?: AwsAccount | undefined;

  /**
   * <p>If the action was performed by an Amazon Web Services account that belongs to an Amazon Web Services service, the name of the service.</p>
   * @public
   */
  awsService?: AwsService | undefined;

  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.</p>
   * @public
   */
  federatedUser?: FederatedUser | undefined;

  /**
   * <p>If the action was performed using the credentials for an Identity and Access Management (IAM) user, the name and other details about the user.</p>
   * @public
   */
  iamUser?: IamUser | undefined;

  /**
   * <p>If the action was performed using the credentials for your Amazon Web Services account, the details of your account.</p>
   * @public
   */
  root?: UserIdentityRoot | undefined;

  /**
   * <p>The type of entity that performed the action.</p>
   * @public
   */
  type?: UserIdentityType | undefined;
}

/**
 * <p>Provides information about an entity that performed an action that produced a policy finding for a resource.</p>
 * @public
 */
export interface FindingActor {
  /**
   * <p>The domain name of the device that the entity used to perform the action on the affected resource.</p>
   * @public
   */
  domainDetails?: DomainDetails | undefined;

  /**
   * <p>The IP address and related details about the device that the entity used to perform the action on the affected resource. The details can include information such as the owner and geographic location of the IP address.</p>
   * @public
   */
  ipAddressDetails?: IpAddressDetails | undefined;

  /**
   * <p>The type and other characteristics of the entity that performed the action on the affected resource. This value is null if the action was performed by an anonymous (unauthenticated) entity.</p>
   * @public
   */
  userIdentity?: UserIdentity | undefined;
}

/**
 * <p>Provides the details of a policy finding.</p>
 * @public
 */
export interface PolicyDetails {
  /**
   * <p>The action that produced the finding.</p>
   * @public
   */
  action?: FindingAction | undefined;

  /**
   * <p>The entity that performed the action that produced the finding.</p>
   * @public
   */
  actor?: FindingActor | undefined;
}

/**
 * <p>Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object.</p>
 * @public
 */
export interface ServerSideEncryption {
  /**
   * <p>The server-side encryption algorithm that's used when storing data in the bucket or object. If default encryption settings aren't configured for the bucket or the object isn't encrypted using server-side encryption, this value is NONE.</p>
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used to encrypt data in the bucket or the object. This value is null if an KMS key isn't used to encrypt the data.</p>
   * @public
   */
  kmsMasterKeyId?: string | undefined;
}

/**
 * <p>Provides information about the Amazon Web Services account that owns an S3 bucket.</p>
 * @public
 */
export interface S3BucketOwner {
  /**
   * <p>The display name of the account that owns the bucket.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The canonical user ID for the account that owns the bucket.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>Provides information about the S3 bucket that a finding applies to. If a quota prevented Amazon Macie from retrieving and processing all the bucket's information prior to generating the finding, the following values are UNKNOWN or null: allowsUnencryptedObjectUploads, defaultServerSideEncryption, publicAccess, and tags.</p>
 * @public
 */
export interface S3Bucket {
  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>
   * @public
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket, relative to when the finding was created or last updated.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The default server-side encryption settings for the bucket.</p>
   * @public
   */
  defaultServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>The name of the bucket.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The display name and canonical user ID for the Amazon Web Services account that owns the bucket.</p>
   * @public
   */
  owner?: S3BucketOwner | undefined;

  /**
   * <p>The permissions settings that determine whether the bucket is publicly accessible.</p>
   * @public
   */
  publicAccess?: BucketPublicAccess | undefined;

  /**
   * <p>The tags that are associated with the bucket.</p>
   * @public
   */
  tags?: KeyValuePair[] | undefined;
}

/**
 * <p>Provides information about the S3 object that a finding applies to.</p>
 * @public
 */
export interface S3Object {
  /**
   * <p>The Amazon Resource Name (ARN) of the bucket that contains the object.</p>
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * <p>The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.</p>
   * @public
   */
  eTag?: string | undefined;

  /**
   * <p>The file name extension of the object. If the object doesn't have a file name extension, this value is "".</p>
   * @public
   */
  extension?: string | undefined;

  /**
   * <p>The full name (<i>key</i>) of the object, including the object's prefix if applicable.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the object was last modified.</p>
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * <p>The full path to the affected object, including the name of the affected bucket and the object's name (key).</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.</p>
   * @public
   */
  publicAccess?: boolean | undefined;

  /**
   * <p>The type of server-side encryption that was used to encrypt the object.</p>
   * @public
   */
  serverSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>The total storage size, in bytes, of the object.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>The storage class of the object.</p>
   * @public
   */
  storageClass?: StorageClass | undefined;

  /**
   * <p>The tags that are associated with the object.</p>
   * @public
   */
  tags?: KeyValuePair[] | undefined;

  /**
   * <p>The identifier for the affected version of the object.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>Provides information about the resources that a finding applies to.</p>
 * @public
 */
export interface ResourcesAffected {
  /**
   * <p>The details of the S3 bucket that the finding applies to.</p>
   * @public
   */
  s3Bucket?: S3Bucket | undefined;

  /**
   * <p>The details of the S3 object that the finding applies to.</p>
   * @public
   */
  s3Object?: S3Object | undefined;
}

/**
 * <p>Provides the numerical and qualitative representations of a finding's severity.</p>
 * @public
 */
export interface Severity {
  /**
   * <p>The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).</p>
   * @public
   */
  description?: SeverityDescription | undefined;

  /**
   * <p>The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>Provides the details of a finding.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The unique identifier for the Amazon Web Services account that the finding applies to. This is typically the account that owns the affected resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Specifies whether the finding is archived (suppressed).</p>
   * @public
   */
  archived?: boolean | undefined;

  /**
   * <p>The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.</p>
   * @public
   */
  category?: FindingCategory | undefined;

  /**
   * <p>The details of a sensitive data finding. This value is null for a policy finding.</p>
   * @public
   */
  classificationDetails?: ClassificationDetails | undefined;

  /**
   * <p>The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered unique.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie created the finding.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Web Services partition that Amazon Macie created the finding in.</p>
   * @public
   */
  partition?: string | undefined;

  /**
   * <p>The details of a policy finding. This value is null for a sensitive data finding.</p>
   * @public
   */
  policyDetails?: PolicyDetails | undefined;

  /**
   * <p>The Amazon Web Services Region that Amazon Macie created the finding in.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The resources that the finding applies to.</p>
   * @public
   */
  resourcesAffected?: ResourcesAffected | undefined;

  /**
   * <p>Specifies whether the finding is a sample finding. A <i>sample finding</i> is a finding that uses example data to demonstrate what a finding might contain.</p>
   * @public
   */
  sample?: boolean | undefined;

  /**
   * <p>The version of the schema that was used to define the data structures in the finding.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The severity level and score for the finding.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>The brief description of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The type of the finding.</p>
   * @public
   */
  type?: FindingType | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last updated the finding. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Provides information about a findings filter.</p>
 * @public
 */
export interface FindingsFilterListItem {
  /**
   * <p>The action that's performed on findings that match the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the filter.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Provides a group of results for a query that retrieved aggregated statistical data about findings.</p>
 * @public
 */
export interface GroupCount {
  /**
   * <p>The total number of findings in the group of query results.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.</p>
   * @public
   */
  groupKey?: string | undefined;
}

/**
 * <p>Provides information about an Amazon Macie membership invitation.</p>
 * @public
 */
export interface Invitation {
  /**
   * <p>The Amazon Web Services account ID for the account that sent the invitation.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The unique identifier for the invitation.</p>
   * @public
   */
  invitationId?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</p>
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * <p>The status of the relationship between the account that sent the invitation and the account that received the invitation.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;
}

/**
 * <p>Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.</p>
 * @public
 */
export interface SimpleScopeTerm {
  /**
   * <p>The operator to use in the condition. Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - EQ (equals) or NE (not equals)</p></li> <li><p>OBJECT_KEY - STARTS_WITH</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - EQ (equals), GT (greater than), GTE (greater than or equals), LT (less than), LTE (less than or equals), or NE (not equals)</p></li> <li><p>OBJECT_SIZE - EQ (equals), GT (greater than), GTE (greater than or equals), LT (less than), LTE (less than or equals), or NE (not equals)</p></li></ul>
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * <p>The object property to use in the condition.</p>
   * @public
   */
  key?: ScopeFilterKey | undefined;

  /**
   * <p>An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION or OBJECT_KEY, this array can specify multiple values and Amazon Macie uses OR logic to join the values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: docx or pdf</p></li> <li><p>OBJECT_KEY - A string that represents the key prefix (folder name or path) of an object. For example: logs or awslogs/eventlogs. This value applies a condition to objects whose keys (names) begin with the specified value.</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2023-09-24T14:31:13Z</p></li> <li><p>OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object.</p></li></ul> <p>Macie doesn't support use of wildcard characters in these values. Also, string values are case sensitive.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
 * @public
 */
export interface TagValuePair {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.</p>
 * @public
 */
export interface TagScopeTerm {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) or NE (not equals).</p>
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * <p>The object property to use in the condition. The only valid value is TAG.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag keys or tag key and value pairs to use in the condition. To specify only tag keys in a condition, specify the keys in this array and set the value for each associated tag value to an empty string.</p>
   * @public
   */
  tagValues?: TagValuePair[] | undefined;

  /**
   * <p>The type of object to apply the condition to.</p>
   * @public
   */
  target?: TagTarget | undefined;
}

/**
 * <p>Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.</p>
 * @public
 */
export interface JobScopeTerm {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding objects from the job.</p>
   * @public
   */
  simpleScopeTerm?: SimpleScopeTerm | undefined;

  /**
   * <p>A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding objects from the job.</p>
   * @public
   */
  tagScopeTerm?: TagScopeTerm | undefined;
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.</p>
 * @public
 */
export interface CriteriaBlockForJob {
  /**
   * <p>An array of conditions, one for each condition that determines which buckets to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   * @public
   */
  and?: CriteriaForJob[] | undefined;
}

/**
 * <p>Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.</p>
 * @public
 */
export interface S3BucketCriteriaForJob {
  /**
   * <p>The property- and tag-based conditions that determine which buckets to exclude from the job.</p>
   * @public
   */
  excludes?: CriteriaBlockForJob | undefined;

  /**
   * <p>The property- and tag-based conditions that determine which buckets to include in the job.</p>
   * @public
   */
  includes?: CriteriaBlockForJob | undefined;
}

/**
 * <p>Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.</p>
 * @public
 */
export interface S3BucketDefinitionForJob {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the buckets.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>An array that lists the names of the buckets.</p>
   * @public
   */
  buckets: string[] | undefined;
}

/**
 * <p>Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface LastRunErrorStatus {
  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are:</p> <ul><li><p>ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job.</p></li> <li><p>NONE - No errors occurred. Macie processed all the data specified for the job.</p></li></ul>
   * @public
   */
  code?: LastRunErrorStatusCode | undefined;
}

/**
 * <p>Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.</p>
 * @public
 */
export interface UserPausedDetails {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job or job run will expire and be cancelled if you don't resume it first.</p>
   * @public
   */
  jobExpiresAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Health event that Amazon Macie sent to notify you of the job or job run's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.</p>
   * @public
   */
  jobImminentExpirationHealthEventArn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when you paused the job.</p>
   * @public
   */
  jobPausedAt?: Date | undefined;
}

/**
 * <p>Provides information about a classification job, including the current status of the job.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   * @public
   */
  bucketCriteria?: S3BucketCriteriaForJob | undefined;

  /**
   * <p>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets for the job to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</p>
   * @public
   */
  bucketDefinitions?: S3BucketDefinitionForJob[] | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis.</p></li></ul>
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   * @public
   */
  lastRunErrorStatus?: LastRunErrorStatus | undefined;

  /**
   * <p>The custom name of the job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   * @public
   */
  userPausedDetails?: UserPausedDetails | undefined;
}

/**
 * <p>Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.</p>
 * @public
 */
export interface ListJobsFilterTerm {
  /**
   * <p>The operator to use to filter the results.</p>
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * <p>The property to use to filter the results.</p>
   * @public
   */
  key?: ListJobsFilterKey | undefined;

  /**
   * <p>An array that lists one or more values to use to filter the results.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface ManagedDataIdentifierSummary {
  /**
   * <p>The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
   * @public
   */
  category?: SensitiveDataItemCategory | undefined;

  /**
   * <p>The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error or issue prevents Macie from retrieving and processing information about the bucket or the bucket's objects, the value for many of these properties is null. Key exceptions are accountId and bucketName. To identify the cause, refer to the errorCode and errorMessage values.</p>
 * @public
 */
export interface MatchingBucket {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the bucket.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Specifies whether automated sensitive data discovery is currently configured to analyze objects in the bucket. Possible values are: MONITORED, the bucket is included in analyses; and, NOT_MONITORED, the bucket is excluded from analyses. If automated sensitive data discovery is disabled for your account, this value is NOT_MONITORED.</p>
   * @public
   */
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus | undefined;

  /**
   * <p>The name of the bucket.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * <p>The code for an error or issue that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. Possible values are:</p> <ul><li><p>ACCESS_DENIED - Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request.</p></li> <li><p>BUCKET_COUNT_EXCEEDS_QUOTA - Retrieving and processing the information would exceed the quota for the number of buckets that Macie monitors for an account (10,000).</p></li></ul> <p>If this value is null, Macie was able to retrieve and process the information.</p>
   * @public
   */
  errorCode?: BucketMetadataErrorCode | undefined;

  /**
   * <p>A brief description of the error or issue (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.</p>
   * @public
   */
  jobDetails?: JobDetails | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed objects in the bucket while performing automated sensitive data discovery. This value is null if this analysis hasn't occurred.</p>
   * @public
   */
  lastAutomatedDiscoveryTime?: Date | undefined;

  /**
   * <p>The total number of objects in the bucket.</p>
   * @public
   */
  objectCount?: number | undefined;

  /**
   * <p>The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   * @public
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType | undefined;

  /**
   * <p>The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive).</p><p>If automated sensitive data discovery has never been enabled for your account or it's been disabled for your organization or standalone account for more than 30 days, possible values are: 1, the bucket is empty; or, 50, the bucket stores objects but it's been excluded from recent analyses.</p>
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics | undefined;
}

/**
 * <p>Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account.</p>
 * @public
 */
export interface MatchingResource {
  /**
   * <p>The details of an S3 bucket that Amazon Macie monitors and analyzes for your account.</p>
   * @public
   */
  matchingBucket?: MatchingBucket | undefined;
}

/**
 * <p>Provides information about an account that's associated with an Amazon Macie administrator account.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the administrator account.</p>
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The email address for the account. This value is null if the account is associated with the administrator account through Organizations.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.</p>
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   * @public
   */
  masterAccountId?: string | undefined;

  /**
   * <p>The current status of the relationship between the account and the administrator account.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an account, and the status and results of the analysis. This information is available only if automated sensitive data discovery has been enabled for the account.</p>
 * @public
 */
export interface ResourceProfileArtifact {
  /**
   * <p>The Amazon Resource Name (ARN) of the object.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the analysis. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the object.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of data in the object. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the object. For example, the object is a malformed file.</p></li></ul>
   * @public
   */
  classificationResultStatus: string | undefined;

  /**
   * <p>Specifies whether Amazon Macie found sensitive data in the object.</p>
   * @public
   */
  sensitive?: boolean | undefined;
}

/**
 * <p>Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.</p>
 * @public
 */
export interface SearchResourcesSimpleCriterion {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   * @public
   */
  comparator?: SearchResourcesComparator | undefined;

  /**
   * <p>The property to use in the condition.</p>
   * @public
   */
  key?: SearchResourcesSimpleCriterionKey | undefined;

  /**
   * <p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the resource.</p></li> <li><p>AUTOMATED_DISCOVERY_MONITORING_STATUS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-automateddiscoverymonitoringstatus">BucketMetadata.automatedDiscoveryMonitoringStatus</a> property of an S3 bucket.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of an S3 bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of an S3 bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of an S3 bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.</p>
 * @public
 */
export interface SearchResourcesTagCriterionPair {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag value to use in the condition.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.</p>
 * @public
 */
export interface SearchResourcesTagCriterion {
  /**
   * <p>The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).</p>
   * @public
   */
  comparator?: SearchResourcesComparator | undefined;

  /**
   * <p>The tag keys, tag values, or tag key and value pairs to use in the condition.</p>
   * @public
   */
  tagValues?: SearchResourcesTagCriterionPair[] | undefined;
}

/**
 * <p>Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.</p>
 * @public
 */
export interface SearchResourcesCriteria {
  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding resources from the results.</p>
   * @public
   */
  simpleCriterion?: SearchResourcesSimpleCriterion | undefined;

  /**
   * <p>A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding resources from the results.</p>
   * @public
   */
  tagCriterion?: SearchResourcesTagCriterion | undefined;
}

/**
 * <p>Provides information about the sensitivity inspection template for an Amazon Macie account.</p>
 * @public
 */
export interface SensitivityInspectionTemplatesEntry {
  /**
   * <p>The unique identifier for the sensitivity inspection template.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the sensitivity inspection template: automated-sensitive-data-discovery.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to exclude from an S3 bucket's sensitivity score.</p>
 * @public
 */
export interface SuppressDataIdentifier {
  /**
   * <p>The unique identifier for the custom data identifier or managed data identifier that detected the type of sensitive data to exclude from the score.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.</p>
   * @public
   */
  type?: DataIdentifierType | undefined;
}

/**
 * <p>Provides information about an account-related request that hasn't been processed.</p>
 * @public
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account ID for the account that the request applies to.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The source of the issue or delay in processing the request.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>The reason why the request hasn't been processed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Specifies a current quota for an Amazon Macie account.</p>
 * @public
 */
export interface ServiceLimit {
  /**
   * <p>Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.</p>
   * @public
   */
  isServiceLimited?: boolean | undefined;

  /**
   * <p>The unit of measurement for the value specified by the value field.</p>
   * @public
   */
  unit?: Unit | undefined;

  /**
   * <p>The value for the metric specified by the UsageByAccount.type field in the response.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.</p>
 * @public
 */
export interface UsageByAccount {
  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>The estimated value for the metric.</p>
   * @public
   */
  estimatedCost?: string | undefined;

  /**
   * <p>The current value for the quota that corresponds to the metric specified by the type field.</p>
   * @public
   */
  serviceLimit?: ServiceLimit | undefined;

  /**
   * <p>The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.</p>
   * @public
   */
  type?: UsageType | undefined;
}

/**
 * <p>Provides quota and aggregated usage data for an Amazon Macie account.</p>
 * @public
 */
export interface UsageRecord {
  /**
   * <p>The unique identifier for the Amazon Web Services account that the data applies to.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the free trial of automated sensitive data discovery started for the account. This value is null if automated sensitive data discovery hasn't been enabled for the account.</p>
   * @public
   */
  automatedDiscoveryFreeTrialStartDate?: Date | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for the account.</p>
   * @public
   */
  freeTrialStartDate?: Date | undefined;

  /**
   * <p>An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.</p>
   * @public
   */
  usage?: UsageByAccount[] | undefined;
}

/**
 * <p>Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.</p>
 * @public
 */
export interface UsageStatisticsFilter {
  /**
   * <p>The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.</p>
   * @public
   */
  comparator?: UsageStatisticsFilterComparator | undefined;

  /**
   * <p>The field to use in the condition.</p>
   * @public
   */
  key?: UsageStatisticsFilterKey | undefined;

  /**
   * <p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an Amazon Web Services account.</p></li> <li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for an account.</p></li> <li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li> <li><p>total - A string that represents the current estimated cost for an account.</p></li></ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.</p>
 * @public
 */
export interface UsageTotal {
  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>The estimated value for the metric.</p>
   * @public
   */
  estimatedCost?: string | undefined;

  /**
   * <p>The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.</p>
   * @public
   */
  type?: UsageType | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that sent the invitation.</p>
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * <p>The unique identifier for the invitation to accept.</p>
   * @public
   */
  invitationId: string | undefined;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   * @public
   */
  masterAccount?: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * <p>Specifies the details of an account to associate with an Amazon Macie administrator account.</p>
 * @public
 */
export interface AccountDetail {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The email address for the account.</p>
   * @public
   */
  email: string | undefined;
}

/**
 * <p>Provides information about an S3 object that lists specific text to ignore.</p>
 * @public
 */
export interface S3WordsList {
  /**
   * <p>The full name of the S3 bucket that contains the object.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The full name (key) of the object.</p>
   * @public
   */
  objectKey: string | undefined;
}

/**
 * <p>Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.</p>
 * @public
 */
export interface AllowListCriteria {
  /**
   * <p>The regular expression (<i>regex</i>) that defines the text pattern to ignore. The expression can contain as many as 512 characters.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>The location and name of the S3 object that lists specific text to ignore.</p>
   * @public
   */
  s3WordsList?: S3WordsList | undefined;
}

/**
 * <p>Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.</p>
 * @public
 */
export interface AllowListStatus {
  /**
   * <p>The current status of the allow list. If the list's criteria specify a regular expression (regex), this value is typically OK. Amazon Macie can compile the expression.</p> <p>If the list's criteria specify an S3 object, possible values are:</p> <ul><li><p>OK - Macie can retrieve and parse the contents of the object.</p></li> <li><p>S3_OBJECT_ACCESS_DENIED - Macie isn't allowed to access the object or the object is encrypted with a customer managed KMS key that Macie isn't allowed to use. Check the bucket policy and other permissions settings for the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that Macie is allowed to use.</p></li> <li><p>S3_OBJECT_EMPTY - Macie can retrieve the object but the object doesn't contain any content. Ensure that the object contains the correct entries. Also ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_NOT_FOUND - The object doesn't exist in Amazon S3. Ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_OVERSIZE - Macie can retrieve the object. However, the object contains too many entries or its storage size exceeds the quota for an allow list. Try breaking the list into multiple files and ensure that each file doesn't exceed any quotas. Then configure list settings in Macie for each file.</p></li> <li><p>S3_THROTTLED - Amazon S3 throttled the request to retrieve the object. Wait a few minutes and then try again.</p></li> <li><p>S3_USER_ACCESS_DENIED - Amazon S3 denied the request to retrieve the object. If the specified object exists, you're not allowed to access it or it's encrypted with an KMS key that you're not allowed to use. Work with your Amazon Web Services administrator to ensure that the list's criteria specify the correct bucket and object names, and you have read access to the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that you're allowed to use.</p></li> <li><p>UNKNOWN_ERROR - A transient or internal error occurred when Macie attempted to retrieve or parse the object. Wait a few minutes and then try again. A list can also have this status if it's encrypted with a key that Amazon S3 and Macie can't access or use.</p></li></ul>
   * @public
   */
  code: AllowListStatusCode | undefined;

  /**
   * <p>A brief description of the status of the allow list. Amazon Macie uses this value to provide additional information about an error that occurred when Macie tried to access and use the list's criteria.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.</p>
   * @public
   */
  ids?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier that matches the criteria specified in the request.</p>
   * @public
   */
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[] | undefined;

  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier that was specified in the request but doesn't correlate to an existing custom data identifier.</p>
   * @public
   */
  notFoundIdentifierIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomatedDiscoveryAccountsRequest {
  /**
   * <p>An array of objects, one for each account to change the status of automated sensitive data discovery for. Each object specifies the Amazon Web Services account ID for an account and a new status for that account.</p>
   * @public
   */
  accounts?: AutomatedDiscoveryAccountUpdate[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomatedDiscoveryAccountsResponse {
  /**
   * <p>An array of objects, one for each account whose status wasn’t changed. Each object identifies the account and explains why the status of automated sensitive data discovery wasn’t changed for the account. This value is null if the request succeeded for all specified accounts.</p>
   * @public
   */
  errors?: AutomatedDiscoveryAccountUpdateError[] | undefined;
}

/**
 * <p>Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket.</p>
 * @public
 */
export interface BucketCountByEffectivePermission {
  /**
   * <p>The total number of buckets that allow the general public to have read or write access to the bucket.</p>
   * @public
   */
  publiclyAccessible?: number | undefined;

  /**
   * <p>The total number of buckets that allow the general public to have read access to the bucket.</p>
   * @public
   */
  publiclyReadable?: number | undefined;

  /**
   * <p>The total number of buckets that allow the general public to have write access to the bucket.</p>
   * @public
   */
  publiclyWritable?: number | undefined;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. For example, the buckets' policies or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether the buckets are publicly accessible.</p>
   * @public
   */
  unknown?: number | undefined;
}

/**
 * <p>Provides information about the number of S3 buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface BucketCountByEncryptionType {
  /**
   * <p>The total number of buckets whose default encryption settings are configured to encrypt new objects with an KMS key, either an Amazon Web Services managed key or a customer managed key. By default, these buckets encrypt new objects automatically using DSSE-KMS or SSE-KMS encryption.</p>
   * @public
   */
  kmsManaged?: number | undefined;

  /**
   * <p>The total number of buckets whose default encryption settings are configured to encrypt new objects with an Amazon S3 managed key. By default, these buckets encrypt new objects automatically using SSE-S3 encryption.</p>
   * @public
   */
  s3Managed?: number | undefined;

  /**
   * <p>The total number of buckets that don't specify default server-side encryption behavior for new objects. Default encryption settings aren't configured for these buckets.</p>
   * @public
   */
  unencrypted?: number | undefined;

  /**
   * <p>The total number of buckets that Amazon Macie doesn't have current encryption metadata for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the default encryption settings for the buckets.</p>
   * @public
   */
  unknown?: number | undefined;
}

/**
 * <p>Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.</p>
 * @public
 */
export interface BucketCountBySharedAccessType {
  /**
   * <p>The total number of buckets that are shared with one or more of the following or any combination of the following: an Amazon CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't in the same Amazon Macie organization.</p>
   * @public
   */
  external?: number | undefined;

  /**
   * <p>The total number of buckets that are shared with one or more Amazon Web Services accounts in the same Amazon Macie organization. These buckets aren't shared with Amazon CloudFront OAIs or OACs.</p>
   * @public
   */
  internal?: number | undefined;

  /**
   * <p>The total number of buckets that aren't shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.</p>
   * @public
   */
  notShared?: number | undefined;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether the buckets are shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.</p>
   * @public
   */
  unknown?: number | undefined;
}

/**
 * <p>Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.</p>
 * @public
 */
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * <p>The total number of buckets that don't have a bucket policy or have a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, the policy doesn't require PutObject requests to include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.</p>
   * @public
   */
  allowsUnencryptedObjectUploads?: number | undefined;

  /**
   * <p>The total number of buckets whose bucket policies require server-side encryption of new objects. PutObject requests for these buckets must include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.</p>
   * @public
   */
  deniesUnencryptedObjectUploads?: number | undefined;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate server-side encryption requirements for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether bucket policies for the buckets require server-side encryption of new objects.</p>
   * @public
   */
  unknown?: number | undefined;
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.</p>
 * @public
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * <p>The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.</p>
   * @public
   */
  eq?: string[] | undefined;

  /**
   * <p>The value for the property is greater than the specified value.</p>
   * @public
   */
  gt?: number | undefined;

  /**
   * <p>The value for the property is greater than or equal to the specified value.</p>
   * @public
   */
  gte?: number | undefined;

  /**
   * <p>The value for the property is less than the specified value.</p>
   * @public
   */
  lt?: number | undefined;

  /**
   * <p>The value for the property is less than or equal to the specified value.</p>
   * @public
   */
  lte?: number | undefined;

  /**
   * <p>The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.</p>
   * @public
   */
  neq?: string[] | undefined;

  /**
   * <p>The name of the bucket begins with the specified value.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about S3 buckets.</p>
 * @public
 */
export interface BucketSortCriteria {
  /**
   * <p>The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, sensitivityScore, or sizeInBytes.</p>
   * @public
   */
  attributeName?: string | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * <p>Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for most fields is 0.</p>
 * @public
 */
export interface SensitivityAggregations {
  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * <p>The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.</p>
   * @public
   */
  publiclyAccessibleCount?: number | undefined;

  /**
   * <p>The total number of buckets.</p>
   * @public
   */
  totalCount?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>
   * @public
   */
  totalSizeInBytes?: number | undefined;
}

/**
 * <p>Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for most of these metrics is 0.</p>
 * @public
 */
export interface BucketStatisticsBySensitivity {
  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of -1.</p>
   * @public
   */
  classificationError?: SensitivityAggregations | undefined;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 50.</p>
   * @public
   */
  notClassified?: SensitivityAggregations | undefined;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 1-49.</p>
   * @public
   */
  notSensitive?: SensitivityAggregations | undefined;

  /**
   * <p>The aggregated statistical data for all buckets that have a sensitivity score of 51-100.</p>
   * @public
   */
  sensitive?: SensitivityAggregations | undefined;
}

/**
 * <p>Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>The name of the bucket. This must be the name of an existing general purpose bucket.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key to use for encryption of the results. This must be the ARN of an existing, symmetric encryption KMS key that's enabled in the same Amazon Web Services Region as the bucket.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * <p>Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 general purpose bucket.</p>
 * @public
 */
export interface ClassificationExportConfiguration {
  /**
   * <p>The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 */
export interface CreateAllowListRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.</p>
   * @public
   */
  criteria: AllowListCriteria | undefined;

  /**
   * <p>A custom description of the allow list. The description can contain as many as 512 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A custom name for the allow list. The name can contain as many as 128 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the allow list.</p> <p>An allow list can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the allow list.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.</p>
 * @public
 */
export interface JobScopingBlock {
  /**
   * <p>An array of conditions, one for each property- or tag-based condition that determines which objects to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   * @public
   */
  and?: JobScopeTerm[] | undefined;
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.</p>
 * @public
 */
export interface Scoping {
  /**
   * <p>The property- and tag-based conditions that determine which objects to exclude from the analysis.</p>
   * @public
   */
  excludes?: JobScopingBlock | undefined;

  /**
   * <p>The property- and tag-based conditions that determine which objects to include in the analysis.</p>
   * @public
   */
  includes?: JobScopingBlock | undefined;
}

/**
 * <p>Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.</p>
 * @public
 */
export interface S3JobDefinition {
  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   * @public
   */
  bucketCriteria?: S3BucketCriteriaForJob | undefined;

  /**
   * <p>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</p>
   * @public
   */
  bucketDefinitions?: S3BucketDefinitionForJob[] | undefined;

  /**
   * <p>The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.</p>
   * @public
   */
  scoping?: Scoping | undefined;
}

/**
 * <p>Specifies that a classification job runs once a day, every day. This is an empty object.</p>
 * @public
 */
export interface DailySchedule {}

/**
 * <p>Specifies a monthly recurrence pattern for running a classification job.</p>
 * @public
 */
export interface MonthlySchedule {
  /**
   * <p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.</p> <p>If this value exceeds the number of days in a certain month, Macie doesn't run the job that month. Macie runs the job only during months that have the specified day. For example, if this value is 31 and a month has only 30 days, Macie doesn't run the job that month. To run the job every month, specify a value that's less than 29.</p>
   * @public
   */
  dayOfMonth?: number | undefined;
}

/**
 * <p>Specifies a weekly recurrence pattern for running a classification job.</p>
 * @public
 */
export interface WeeklySchedule {
  /**
   * <p>The day of the week when Amazon Macie runs the job.</p>
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;
}

/**
 * <p>Specifies the recurrence pattern for running a classification job.</p>
 * @public
 */
export interface JobScheduleFrequency {
  /**
   * <p>Specifies a daily recurrence pattern for running the job.</p>
   * @public
   */
  dailySchedule?: DailySchedule | undefined;

  /**
   * <p>Specifies a monthly recurrence pattern for running the job.</p>
   * @public
   */
  monthlySchedule?: MonthlySchedule | undefined;

  /**
   * <p>Specifies a weekly recurrence pattern for running the job.</p>
   * @public
   */
  weeklySchedule?: WeeklySchedule | undefined;
}

/**
 * @public
 */
export interface CreateClassificationJobRequest {
  /**
   * <p>An array of unique identifiers, one for each allow list for the job to use when it analyzes data.</p>
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.</p>
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * <p>A custom description of the job. The description can contain as many as 200 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>
   * @public
   */
  initialRun?: boolean | undefined;

  /**
   * <p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to specify the recurrence pattern for the job.</p></li></ul>
   * @public
   */
  jobType: JobType | undefined;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;

  /**
   * <p>The selection type to apply when determining which managed data identifiers the job uses to analyze data. Valid values are:</p> <ul><li><p>ALL - Use all managed data identifiers. If you specify this value, don't specify any values for the managedDataIdentifierIds property.</p></li> <li><p>EXCLUDE - Use all managed data identifiers except the ones specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers. If you specify this value, specify at least one value for the customDataIdentifierIds property and don't specify any values for the managedDataIdentifierIds property.</p></li> <li><p>RECOMMENDED (default) - Use the recommended set of managed data identifiers. If you specify this value, don't specify any values for the managedDataIdentifierIds property.</p></li></ul> <p>If you don't specify a value for this property, the job uses the recommended set of managed data identifiers.</p> <p>If the job is a recurring job and you specify ALL or EXCLUDE, each job run automatically uses new managed data identifiers that are released. If you don't specify a value for this property or you specify RECOMMENDED for a recurring job, each job run automatically uses all the managed data identifiers that are in the recommended set when the run starts.</p> <p>To learn about individual managed data identifiers or determine which ones are in the recommended set, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> or <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-mdis-recommended.html">Recommended managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
   * @public
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | undefined;

  /**
   * <p>A custom name for the job. The name can contain as many as 500 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   * @public
   */
  s3JobDefinition: S3JobDefinition | undefined;

  /**
   * <p>The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.</p>
   * @public
   */
  samplingPercentage?: number | undefined;

  /**
   * <p>The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.</p>
   * @public
   */
  scheduleFrequency?: JobScheduleFrequency | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the job.</p> <p>A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateClassificationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  jobId?: string | undefined;
}

/**
 * <p>Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that match the custom data identifier's detection criteria.</p>
 * @public
 */
export interface SeverityLevel {
  /**
   * <p>The minimum number of occurrences of text that must match the custom data identifier's detection criteria in order to produce a finding with the specified severity (severity).</p>
   * @public
   */
  occurrencesThreshold: number | undefined;

  /**
   * <p>The severity to assign to a finding: if the number of occurrences is greater than or equal to the specified threshold (occurrencesThreshold); and, if applicable, the number of occurrences is less than the threshold for the next consecutive severity level for the custom data identifier, moving from LOW to HIGH.</p>
   * @public
   */
  severity: DataIdentifierSeverity | undefined;
}

/**
 * @public
 */
export interface CreateCustomDataIdentifierRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.</p>
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   * @public
   */
  regex: string | undefined;

  /**
   * <p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that match the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.</p>
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomDataIdentifierResponse {
  /**
   * <p>The unique identifier for the custom data identifier that was created.</p>
   * @public
   */
  customDataIdentifierId?: string | undefined;
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface CriterionAdditionalProperties {
  /**
   * <p>The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.</p>
   * @public
   */
  eq?: string[] | undefined;

  /**
   * <p>The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.</p> <p>You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.</p>
   * @public
   */
  eqExactMatch?: string[] | undefined;

  /**
   * <p>The value for the property is greater than the specified value.</p>
   * @public
   */
  gt?: number | undefined;

  /**
   * <p>The value for the property is greater than or equal to the specified value.</p>
   * @public
   */
  gte?: number | undefined;

  /**
   * <p>The value for the property is less than the specified value.</p>
   * @public
   */
  lt?: number | undefined;

  /**
   * <p>The value for the property is less than or equal to the specified value.</p>
   * @public
   */
  lte?: number | undefined;

  /**
   * <p>The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Macie uses OR logic to join the values.</p>
   * @public
   */
  neq?: string[] | undefined;
}

/**
 * <p>Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.</p>
 * @public
 */
export interface FindingCriteria {
  /**
   * <p>A condition that specifies the property, operator, and one or more values to use to filter the results.</p>
   * @public
   */
  criterion?: Record<string, CriterionAdditionalProperties> | undefined;
}

/**
 * @public
 */
export interface CreateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   * @public
   */
  action: FindingsFilterAction | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The criteria to use to filter findings.</p>
   * @public
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   * @public
   */
  position?: number | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was created.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the filter that was created.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.</p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p>Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.</p>
   * @public
   */
  disableEmailNotification?: boolean | undefined;

  /**
   * <p>Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.</p>
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface CreateMemberRequest {
  /**
   * <p>The details of the account to associate with the administrator account.</p>
   * @public
   */
  account: AccountDetail | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMemberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that was associated with the administrator account.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsRequest {
  /**
   * <p>An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.</p>
   * @public
   */
  findingTypes?: FindingType[] | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsResponse {}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.</p>
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteAllowListRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.</p> <p>When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</p>
   * @public
   */
  ignoreJobChecks?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAllowListResponse {}

/**
 * @public
 */
export interface DeleteCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDataIdentifierResponse {}

/**
 * @public
 */
export interface DeleteFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingsFilterResponse {}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.</p>
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemberResponse {}

/**
 * @public
 */
export interface DescribeBucketsRequest {
  /**
   * <p>The criteria to use to filter the query results.</p>
   * @public
   */
  criteria?: Record<string, BucketCriteriaAdditionalProperties> | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria to use to sort the query results.</p>
   * @public
   */
  sortCriteria?: BucketSortCriteria | undefined;
}

/**
 * @public
 */
export interface DescribeBucketsResponse {
  /**
   * <p>An array of objects, one for each bucket that matches the filter criteria specified in the request.</p>
   * @public
   */
  buckets?: BucketMetadata[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Provides processing statistics for a classification job.</p>
 * @public
 */
export interface Statistics {
  /**
   * <p>The approximate number of objects that the job has yet to process during its current run.</p>
   * @public
   */
  approximateNumberOfObjectsToProcess?: number | undefined;

  /**
   * <p>The number of times that the job has run.</p>
   * @public
   */
  numberOfRuns?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClassificationJobResponse {
  /**
   * <p>An array of unique identifiers, one for each allow list that the job is configured to use when it analyzes data.</p>
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * <p>The token that was provided to ensure the idempotency of the request to create the job.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier that the job is configured to use when it analyzes data. This value is null if the job is configured to use only managed data identifiers to analyze data.</p>
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * <p>The custom description of the job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>For a recurring job, specifies whether you configured the job to analyze all existing, eligible objects immediately after the job was created (true). If you configured the job to analyze only those objects that were created or changed after the job was created and before the job's first scheduled run, this value is false. This value is also false for a one-time job.</p>
   * @public
   */
  initialRun?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.</p></li></ul>
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   * @public
   */
  lastRunErrorStatus?: LastRunErrorStatus | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started or, if the job hasn't run yet, when the job was created.</p>
   * @public
   */
  lastRunTime?: Date | undefined;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier that the job is explicitly configured to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type specified for the job (managedDataIdentifierSelector).</p><p>This value is null if the job's managed data identifier selection type is ALL, NONE, or RECOMMENDED.</p>
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;

  /**
   * <p>The selection type that determines which managed data identifiers the job uses when it analyzes data. Possible values are:</p> <ul><li><p>ALL - Use all managed data identifiers.</p></li> <li><p>EXCLUDE - Use all managed data identifiers except the ones specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers. Use only custom data identifiers (customDataIdentifierIds).</p></li> <li><p>RECOMMENDED (default) - Use the recommended set of managed data identifiers.</p></li></ul> <p>If this value is null, the job uses the recommended set of managed data identifiers.</p> <p>If the job is a recurring job and this value is ALL or EXCLUDE, each job run automatically uses new managed data identifiers that are released. If this value is null or RECOMMENDED for a recurring job, each job run uses all the managed data identifiers that are in the recommended set when the run starts.</p> <p>To learn about individual managed data identifiers or determine which ones are in the recommended set, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> or <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-mdis-recommended.html">Recommended managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
   * @public
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | undefined;

  /**
   * <p>The custom name of the job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   * @public
   */
  s3JobDefinition?: S3JobDefinition | undefined;

  /**
   * <p>The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.</p>
   * @public
   */
  samplingPercentage?: number | undefined;

  /**
   * <p>The recurrence pattern for running the job. This value is null if the job is configured to run only once.</p>
   * @public
   */
  scheduleFrequency?: JobScheduleFrequency | undefined;

  /**
   * <p>The number of times that the job has run and processing statistics for the job's current run.</p>
   * @public
   */
  statistics?: Statistics | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   * @public
   */
  userPausedDetails?: UserPausedDetails | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Specifies whether Amazon Macie is enabled automatically for accounts that are added to the organization.</p>
   * @public
   */
  autoEnable?: boolean | undefined;

  /**
   * <p>Specifies whether the maximum number of Amazon Macie member accounts are part of the organization.</p>
   * @public
   */
  maxAccountLimitReached?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableMacieRequest {}

/**
 * @public
 */
export interface DisableMacieResponse {}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the delegated Amazon Macie administrator account.</p>
   * @public
   */
  adminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberResponse {}

/**
 * @public
 */
export interface EnableMacieRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>Specifies the new status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to ENABLED.</p>
   * @public
   */
  status?: MacieStatus | undefined;
}

/**
 * @public
 */
export interface EnableMacieResponse {}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.</p>
   * @public
   */
  adminAccountId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * <p>Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.</p>
 * @public
 */
export interface FindingStatisticsSortCriteria {
  /**
   * <p>The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.</p>
   * @public
   */
  attributeName?: FindingStatisticsSortAttributeName | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>The Amazon Web Services account ID for the administrator account. If the accounts are associated by an Amazon Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   * @public
   */
  administrator?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetAllowListRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.</p>
   * @public
   */
  criteria?: AllowListCriteria | undefined;

  /**
   * <p>The custom description of the allow list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the allow list.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the allow list.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the allow list, which indicates whether Amazon Macie can access and use the list's criteria.</p>
   * @public
   */
  status?: AllowListStatus | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the allow list.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedDiscoveryConfigurationRequest {}

/**
 * @public
 */
export interface GetAutomatedDiscoveryConfigurationResponse {
  /**
   * <p>Specifies whether automated sensitive data discovery is enabled automatically for accounts in the organization. Possible values are: ALL, enable it for all existing accounts and new member accounts; NEW, enable it only for new member accounts; and, NONE, don't enable it for any accounts.</p>
   * @public
   */
  autoEnableOrganizationMembers?: AutoEnableMode | undefined;

  /**
   * <p>The unique identifier for the classification scope that's used when performing automated sensitive data discovery. The classification scope specifies S3 buckets to exclude from analyses.</p>
   * @public
   */
  classificationScopeId?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently disabled. This value is null if automated sensitive data discovery is currently enabled.</p>
   * @public
   */
  disabledAt?: Date | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was initially enabled. This value is null if automated sensitive data discovery has never been enabled.</p>
   * @public
   */
  firstEnabledAt?: Date | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the configuration settings or status of automated sensitive data discovery was most recently changed.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the sensitivity inspection template that's used when performing automated sensitive data discovery. The template specifies which allow lists, custom data identifiers, and managed data identifiers to use when analyzing data.</p>
   * @public
   */
  sensitivityInspectionTemplateId?: string | undefined;

  /**
   * <p>The current status of automated sensitive data discovery for the organization or account. Possible values are: ENABLED, use the specified settings to perform automated sensitive data discovery activities; and, DISABLED, don't perform automated sensitive data discovery activities.</p>
   * @public
   */
  status?: AutomatedDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketStatisticsRequest {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketStatisticsResponse {
  /**
   * <p>The total number of buckets.</p>
   * @public
   */
  bucketCount?: number | undefined;

  /**
   * <p>The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.</p>
   * @public
   */
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission | undefined;

  /**
   * <p>The total number of buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets.</p>
   * @public
   */
  bucketCountByEncryptionType?: BucketCountByEncryptionType | undefined;

  /**
   * <p>The total number of buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.</p>
   * @public
   */
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads | undefined;

  /**
   * <p>The total number of buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs).</p>
   * @public
   */
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType | undefined;

  /**
   * <p>The aggregated sensitive data discovery statistics for the buckets. If automated sensitive data discovery is currently disabled for your account, the value for most statistics is 0.</p>
   * @public
   */
  bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the buckets.</p>
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * <p>The total number of objects in the buckets.</p>
   * @public
   */
  objectCount?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.</p>
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   * @public
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics | undefined;
}

/**
 * @public
 */
export interface GetClassificationExportConfigurationRequest {}

/**
 * @public
 */
export interface GetClassificationExportConfigurationResponse {
  /**
   * <p>The location where data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   * @public
   */
  configuration?: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface GetClassificationScopeRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery.</p>
 * @public
 */
export interface S3ClassificationScopeExclusion {
  /**
   * <p>An array of strings, one for each S3 bucket that is excluded. Each string is the full name of an excluded bucket.</p>
   * @public
   */
  bucketNames: string[] | undefined;
}

/**
 * <p>Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.</p>
 * @public
 */
export interface S3ClassificationScope {
  /**
   * <p>The S3 buckets that are excluded.</p>
   * @public
   */
  excludes: S3ClassificationScopeExclusion | undefined;
}

/**
 * @public
 */
export interface GetClassificationScopeResponse {
  /**
   * <p>The unique identifier for the classification scope.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the classification scope: automated-sensitive-data-discovery.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The S3 buckets that are excluded from automated sensitive data discovery.</p>
   * @public
   */
  s3?: S3ClassificationScope | undefined;
}

/**
 * @public
 */
export interface GetCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetCustomDataIdentifierResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>The custom description of the custom data identifier.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.</p>
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.</p>
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. Otherwise, Macie excludes the result.</p>
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * <p>The custom name of the custom data identifier.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>Specifies the severity that's assigned to findings that the custom data identifier produces, based on the number of occurrences of text that match the custom data identifier's detection criteria. By default, Amazon Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.</p>
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Specifies criteria for sorting the results of a request for findings.</p>
 * @public
 */
export interface SortCriteria {
  /**
   * <p>The name of the property to sort the results by. Valid values are: count, createdAt, policyDetails.action.apiCallDetails.firstSeen, policyDetails.action.apiCallDetails.lastSeen, resourcesAffected, severity.score, type, and updatedAt.</p>
   * @public
   */
  attributeName?: string | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.</p>
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * <p>The criteria for sorting the results of the request.</p>
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>An array of objects, one for each finding that matches the criteria specified in the request.</p>
   * @public
   */
  findings?: Finding[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsFilterResponse {
  /**
   * <p>The action that's performed on findings that match the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The custom description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The criteria that's used to filter findings.</p>
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * <p>The unique identifier for the filter.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The custom name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   * @public
   */
  position?: number | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFindingsPublicationConfigurationRequest {}

/**
 * <p>Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Evaluating findings with Security Hub</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface SecurityHubConfiguration {
  /**
   * <p>Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.</p>
   * @public
   */
  publishClassificationFindings: boolean | undefined;

  /**
   * <p>Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.</p>
   * @public
   */
  publishPolicyFindings: boolean | undefined;
}

/**
 * @public
 */
export interface GetFindingsPublicationConfigurationResponse {
  /**
   * <p>The configuration settings that determine which findings are published to Security Hub.</p>
   * @public
   */
  securityHubConfiguration?: SecurityHubConfiguration | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsRequest {
  /**
   * <p>The criteria to use to filter the query results.</p>
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
   * @public
   */
  groupBy: GroupBy | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>The criteria to use to sort the query results.</p>
   * @public
   */
  sortCriteria?: FindingStatisticsSortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsResponse {
  /**
   * <p>An array of objects, one for each group of findings that matches the filter criteria specified in the request.</p>
   * @public
   */
  countsByGroup?: GroupCount[] | undefined;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The total number of invitations that were received by the account, not including the currently accepted invitation.</p>
   * @public
   */
  invitationsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetMacieSessionRequest {}

/**
 * @public
 */
export interface GetMacieSessionResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in Amazon Web Services resources for the account.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Macie activities are enabled for the account.</p>
   * @public
   */
  status?: MacieStatus | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status or configuration settings for the Amazon Macie account.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   * @public
   */
  master?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the administrator account.</p>
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The email address for the account. This value is null if the account is associated with the administrator account through Organizations.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.</p>
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</p>
   * @public
   */
  masterAccountId?: string | undefined;

  /**
   * <p>The current status of the relationship between the account and the administrator account.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for an account, if automated sensitive data discovery has been enabled for the account. The data captures the results of automated sensitive data discovery activities that Macie has performed for the bucket.</p>
 * @public
 */
export interface ResourceStatistics {
  /**
   * <p>The total amount of data, in bytes, that Amazon Macie has analyzed in the bucket.</p>
   * @public
   */
  totalBytesClassified?: number | undefined;

  /**
   * <p>The total number of occurrences of sensitive data that Amazon Macie has found in the bucket's objects. This includes occurrences that are currently suppressed by the sensitivity scoring settings for the bucket (totalDetectionsSuppressed).</p>
   * @public
   */
  totalDetections?: number | undefined;

  /**
   * <p>The total number of occurrences of sensitive data that are currently suppressed by the sensitivity scoring settings for the bucket. These represent occurrences of sensitive data that Amazon Macie found in the bucket's objects, but the occurrences were manually suppressed. By default, suppressed occurrences are excluded from the bucket's sensitivity score.</p>
   * @public
   */
  totalDetectionsSuppressed?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie has analyzed in the bucket.</p>
   * @public
   */
  totalItemsClassified?: number | undefined;

  /**
   * <p>The total number of the bucket's objects that Amazon Macie has found sensitive data in.</p>
   * @public
   */
  totalItemsSensitive?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie wasn't able to analyze in the bucket due to an object-level issue or error. For example, an object is a malformed file. This value includes objects that Macie wasn't able to analyze for reasons reported by other statistics in the ResourceStatistics object.</p>
   * @public
   */
  totalItemsSkipped?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie wasn't able to analyze in the bucket because the objects are encrypted with a key that Macie can't access. The objects use server-side encryption with customer-provided keys (SSE-C).</p>
   * @public
   */
  totalItemsSkippedInvalidEncryption?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie wasn't able to analyze in the bucket because the objects are encrypted with KMS keys that were disabled, are scheduled for deletion, or were deleted.</p>
   * @public
   */
  totalItemsSkippedInvalidKms?: number | undefined;

  /**
   * <p>The total number of objects that Amazon Macie wasn't able to analyze in the bucket due to the permissions settings for the objects or the permissions settings for the keys that were used to encrypt the objects.</p>
   * @public
   */
  totalItemsSkippedPermissionDenied?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceProfileResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently recalculated sensitive data discovery statistics and details for the bucket. If the bucket's sensitivity score is calculated automatically, this includes the score.</p>
   * @public
   */
  profileUpdatedAt?: Date | undefined;

  /**
   * <p>The current sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). By default, this score is calculated automatically based on the amount of data that Amazon Macie has analyzed in the bucket and the amount of sensitive data that Macie has found in the bucket.</p>
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * <p>Specifies whether the bucket's current sensitivity score was set manually. If this value is true, the score was manually changed to 100. If this value is false, the score was calculated automatically by Amazon Macie.</p>
   * @public
   */
  sensitivityScoreOverridden?: boolean | undefined;

  /**
   * <p>The sensitive data discovery statistics for the bucket. The statistics capture the results of automated sensitive data discovery activities that Amazon Macie has performed for the bucket.</p>
   * @public
   */
  statistics?: ResourceStatistics | undefined;
}

/**
 * @public
 */
export interface GetRevealConfigurationRequest {}

/**
 * <p>Specifies the status of the Amazon Macie configuration for retrieving occurrences of sensitive data reported by findings, and the Key Management Service (KMS) key to use to encrypt sensitive data that's retrieved. When you enable the configuration for the first time, your request must specify an KMS key. Otherwise, an error occurs.</p>
 * @public
 */
export interface RevealConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN), ID, or alias of the KMS key to use to encrypt sensitive data that's retrieved. The key must be an existing, customer managed, symmetric encryption key that's enabled in the same Amazon Web Services Region as the Amazon Macie account.</p> <p>If this value specifies an alias, it must include the following prefix: alias/. If this value specifies a key that's owned by another Amazon Web Services account, it must specify the ARN of the key or the ARN of the key's alias.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The status of the configuration for the Amazon Macie account. In a response, possible values are: ENABLED, the configuration is currently enabled for the account; and, DISABLED, the configuration is currently disabled for the account. In a request, valid values are: ENABLED, enable the configuration for the account; and, DISABLED, disable the configuration for the account.</p> <important><p>If you disable the configuration, you also permanently delete current settings that specify how to access affected S3 objects. If your current access method is ASSUME_ROLE, Macie also deletes the external ID and role name currently specified for the configuration. These settings can't be recovered after they're deleted.</p></important>
   * @public
   */
  status: RevealStatus | undefined;
}

/**
 * <p>Provides information about the access method and settings that are used to retrieve occurrences of sensitive data reported by findings.</p>
 * @public
 */
export interface RetrievalConfiguration {
  /**
   * <p>The external ID to specify in the trust policy for the IAM role to assume when retrieving sensitive data from affected S3 objects (roleName). This value is null if the value for retrievalMode is CALLER_CREDENTIALS.</p> <p>This ID is a unique alphanumeric string that Amazon Macie generates automatically after you configure it to assume an IAM role. For a Macie administrator to retrieve sensitive data from an affected S3 object for a member account, the trust policy for the role in the member account must include an sts:ExternalId condition that requires this ID.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The access method that's used to retrieve sensitive data from affected S3 objects. Valid values are: ASSUME_ROLE, assume an IAM role that is in the affected Amazon Web Services account and delegates access to Amazon Macie (roleName); and, CALLER_CREDENTIALS, use the credentials of the IAM user who requests the sensitive data.</p>
   * @public
   */
  retrievalMode: RetrievalMode | undefined;

  /**
   * <p>The name of the IAM role that is in the affected Amazon Web Services account and Amazon Macie is allowed to assume when retrieving sensitive data from affected S3 objects for the account. This value is null if the value for retrievalMode is CALLER_CREDENTIALS.</p>
   * @public
   */
  roleName?: string | undefined;
}

/**
 * @public
 */
export interface GetRevealConfigurationResponse {
  /**
   * <p>The KMS key that's used to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.</p>
   * @public
   */
  configuration?: RevealConfiguration | undefined;

  /**
   * <p>The access method and settings that are used to retrieve the sensitive data.</p>
   * @public
   */
  retrievalConfiguration?: RetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesRequest {
  /**
   * <p>The unique identifier for the finding.</p>
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesResponse {
  /**
   * <p>If an error occurred when Amazon Macie attempted to retrieve occurrences of sensitive data reported by the finding, a description of the error that occurred. This value is null if the status (status) of the request is PROCESSING or SUCCESS.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A map that specifies 1-100 types of sensitive data reported by the finding and, for each type, 1-10 occurrences of sensitive data.</p>
   * @public
   */
  sensitiveDataOccurrences?: Record<string, DetectedDataDetails[]> | undefined;

  /**
   * <p>The status of the request to retrieve occurrences of sensitive data reported by the finding. Possible values are:</p> <ul><li><p>ERROR - An error occurred when Amazon Macie attempted to locate, retrieve, or encrypt the sensitive data. The error value indicates the nature of the error that occurred.</p></li> <li><p>PROCESSING - Macie is processing the request.</p></li> <li><p>SUCCESS - Macie successfully located, retrieved, and encrypted the sensitive data.</p></li></ul>
   * @public
   */
  status?: RevealRequestStatus | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  /**
   * <p>The unique identifier for the finding.</p>
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesAvailabilityResponse {
  /**
   * <p>Specifies whether occurrences of sensitive data can be retrieved for the finding. Possible values are: AVAILABLE, the sensitive data can be retrieved; and, UNAVAILABLE, the sensitive data can't be retrieved. If this value is UNAVAILABLE, the reasons array indicates why the data can't be retrieved.</p>
   * @public
   */
  code?: AvailabilityCode | undefined;

  /**
   * <p>Specifies why occurrences of sensitive data can't be retrieved for the finding. Possible values are:</p> <ul><li><p>ACCOUNT_NOT_IN_ORGANIZATION - The affected account isn't currently part of your organization. Or the account is part of your organization but Macie isn't currently enabled for the account. You're not allowed to access the affected S3 object by using Macie.</p></li> <li><p>INVALID_CLASSIFICATION_RESULT - There isn't a corresponding sensitive data discovery result for the finding. Or the corresponding sensitive data discovery result isn't available in the current Amazon Web Services Region, is malformed or corrupted, or uses an unsupported storage format. Macie can't verify the location of the sensitive data to retrieve.</p></li> <li><p>INVALID_RESULT_SIGNATURE - The corresponding sensitive data discovery result is stored in an S3 object that wasn't signed by Macie. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve.</p></li> <li><p>MEMBER_ROLE_TOO_PERMISSIVE - The trust or permissions policy for the IAM role in the affected member account doesn't meet Macie requirements for restricting access to the role. Or the role's trust policy doesn't specify the correct external ID for your organization. Macie can't assume the role to retrieve the sensitive data.</p></li> <li><p>MISSING_GET_MEMBER_PERMISSION - You're not allowed to retrieve information about the association between your account and the affected account. Macie can't determine whether you’re allowed to access the affected S3 object as the delegated Macie administrator for the affected account.</p></li> <li><p>OBJECT_EXCEEDS_SIZE_QUOTA - The storage size of the affected S3 object exceeds the size quota for retrieving occurrences of sensitive data from this type of file.</p></li> <li><p>OBJECT_UNAVAILABLE - The affected S3 object isn't available. The object was renamed, moved, deleted, or changed after Macie created the finding. Or the object is encrypted with an KMS key that isn’t available. For example, the key is disabled, is scheduled for deletion, or was deleted.</p></li> <li><p>RESULT_NOT_SIGNED - The corresponding sensitive data discovery result is stored in an S3 object that hasn't been signed. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve.</p></li> <li><p>ROLE_TOO_PERMISSIVE - Your account is configured to retrieve occurrences of sensitive data by using an IAM role whose trust or permissions policy doesn't meet Macie requirements for restricting access to the role. Macie can’t assume the role to retrieve the sensitive data.</p></li> <li><p>UNSUPPORTED_FINDING_TYPE - The specified finding isn't a sensitive data finding.</p></li> <li><p>UNSUPPORTED_OBJECT_TYPE - The affected S3 object uses a file or storage format that Macie doesn't support for retrieving occurrences of sensitive data.</p></li></ul> <p>This value is null if sensitive data can be retrieved for the finding.</p>
   * @public
   */
  reasons?: UnavailabilityReasonCode[] | undefined;
}

/**
 * @public
 */
export interface GetSensitivityInspectionTemplateRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface SensitivityInspectionTemplateExcludes {
  /**
   * <p>An array of unique identifiers, one for each managed data identifier to exclude. To retrieve a list of valid values, use the ListManagedDataIdentifiers operation.</p>
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;
}

/**
 * <p>Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface SensitivityInspectionTemplateIncludes {
  /**
   * <p>An array of unique identifiers, one for each allow list to include.</p>
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier to include.</p>
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier to include.</p> <p>Amazon Macie uses these managed data identifiers in addition to managed data identifiers that are subsequently released and recommended for automated sensitive data discovery. To retrieve a list of valid values for the managed data identifiers that are currently available, use the ListManagedDataIdentifiers operation.</p> <para/>
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetSensitivityInspectionTemplateResponse {
  /**
   * <p>The custom description of the template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The managed data identifiers that are explicitly excluded (not used) when performing automated sensitive data discovery.</p>
   * @public
   */
  excludes?: SensitivityInspectionTemplateExcludes | undefined;

  /**
   * <p>The allow lists, custom data identifiers, and managed data identifiers that are explicitly included (used) when performing automated sensitive data discovery.</p>
   * @public
   */
  includes?: SensitivityInspectionTemplateIncludes | undefined;

  /**
   * <p>The name of the template: automated-sensitive-data-discovery.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique identifier for the template.</p>
   * @public
   */
  sensitivityInspectionTemplateId?: string | undefined;
}

/**
 * <p>Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.</p>
 * @public
 */
export interface UsageStatisticsSortBy {
  /**
   * <p>The field to sort the results by.</p>
   * @public
   */
  key?: UsageStatisticsSortKey | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsRequest {
  /**
   * <p>An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.</p>
   * @public
   */
  filterBy?: UsageStatisticsFilter[] | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria to use to sort the query results.</p>
   * @public
   */
  sortBy?: UsageStatisticsSortBy | undefined;

  /**
   * <p>The inclusive time period to query usage data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value, Amazon Macie provides usage data for the preceding 30 days.</p>
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for an account that matches the filter criteria specified in the request.</p>
   * @public
   */
  records?: UsageRecord[] | undefined;

  /**
   * <p>The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.</p>
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * @public
 */
export interface GetUsageTotalsRequest {
  /**
   * <p>The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.</p>
   * @public
   */
  timeRange?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageTotalsResponse {
  /**
   * <p>The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.</p>
   * @public
   */
  timeRange?: TimeRange | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.</p>
   * @public
   */
  usageTotals?: UsageTotal[] | undefined;
}

/**
 * @public
 */
export interface ListAllowListsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAllowListsResponse {
  /**
   * <p>An array of objects, one for each allow list.</p>
   * @public
   */
  allowLists?: AllowListSummary[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedDiscoveryAccountsRequest {
  /**
   * <p>The Amazon Web Services account ID for each account, for as many as 50 accounts. To retrieve the status for multiple accounts, append the accountIds parameter and argument for each account, separated by an ampersand (&amp;). To retrieve the status for all the accounts in an organization, omit this parameter.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedDiscoveryAccountsResponse {
  /**
   * <p>An array of objects, one for each account specified in the request. Each object specifies the Amazon Web Services account ID for an account and the current status of automated sensitive data discovery for that account.</p>
   * @public
   */
  items?: AutomatedDiscoveryAccount[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Specifies criteria for filtering the results of a request for information about classification jobs.</p>
 * @public
 */
export interface ListJobsFilterCriteria {
  /**
   * <p>An array of objects, one for each condition that determines which jobs to exclude from the results.</p>
   * @public
   */
  excludes?: ListJobsFilterTerm[] | undefined;

  /**
   * <p>An array of objects, one for each condition that determines which jobs to include in the results.</p>
   * @public
   */
  includes?: ListJobsFilterTerm[] | undefined;
}

/**
 * <p>Specifies criteria for sorting the results of a request for information about classification jobs.</p>
 * @public
 */
export interface ListJobsSortCriteria {
  /**
   * <p>The property to sort the results by.</p>
   * @public
   */
  attributeName?: ListJobsSortAttributeName | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface ListClassificationJobsRequest {
  /**
   * <p>The criteria to use to filter the results.</p>
   * @public
   */
  filterCriteria?: ListJobsFilterCriteria | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria to use to sort the results.</p>
   * @public
   */
  sortCriteria?: ListJobsSortCriteria | undefined;
}

/**
 * @public
 */
export interface ListClassificationJobsResponse {
  /**
   * <p>An array of objects, one for each job that matches the filter criteria specified in the request.</p>
   * @public
   */
  items?: JobSummary[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClassificationScopesRequest {
  /**
   * <p>The name of the classification scope to retrieve the unique identifier for.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClassificationScopesResponse {
  /**
   * <p>An array that specifies the unique identifier and name of the classification scope for the account.</p>
   * @public
   */
  classificationScopes?: ClassificationScopeSummary[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDataIdentifiersRequest {
  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier.</p>
   * @public
   */
  items?: CustomDataIdentifierSummary[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The criteria to use to filter the results.</p>
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria to use to sort the results.</p>
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>An array of strings, where each string is the unique identifier for a finding that matches the filter criteria specified in the request.</p>
   * @public
   */
  findingIds?: string[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsFiltersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsFiltersResponse {
  /**
   * <p>An array of objects, one for each filter that's associated with the account.</p>
   * @public
   */
  findingsFilterListItems?: FindingsFilterListItem[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>An array of objects, one for each invitation that was received by the account.</p>
   * @public
   */
  invitations?: Invitation[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedDataIdentifiersRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each managed data identifier.</p>
   * @public
   */
  items?: ManagedDataIdentifierSummary[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.</p>
   * @public
   */
  onlyAssociated?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>An array of objects, one for each account that's associated with the administrator account and matches the criteria specified in the request.</p>
   * @public
   */
  members?: Member[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.</p>
   * @public
   */
  adminAccounts?: AdminAccount[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileArtifactsRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileArtifactsResponse {
  /**
   * <p>An array of objects, one for each of 1-100 S3 objects that Amazon Macie selected for analysis.</p> <p>If Macie has analyzed more than 100 objects in the bucket, Macie populates the array based on the value for the ResourceProfileArtifact.sensitive field for an object: true (sensitive), followed by false (not sensitive). Macie then populates any remaining items in the array with information about objects where the value for the ResourceProfileArtifact.classificationResultStatus field is SKIPPED.</p>
   * @public
   */
  artifacts?: ResourceProfileArtifact[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileDetectionsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileDetectionsResponse {
  /**
   * <p>An array of objects, one for each type of sensitive data that Amazon Macie found in the bucket. Each object reports the number of occurrences of the specified type and provides information about the custom data identifier or managed data identifier that detected the data.</p>
   * @public
   */
  detections?: Detection[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensitivityInspectionTemplatesRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensitivityInspectionTemplatesResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array that specifies the unique identifier and name of the sensitivity inspection template for the account.</p>
   * @public
   */
  sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutClassificationExportConfigurationRequest {
  /**
   * <p>The location to store data classification results in, and the encryption settings to use when storing results in that location.</p>
   * @public
   */
  configuration: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface PutClassificationExportConfigurationResponse {
  /**
   * <p>The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   * @public
   */
  configuration?: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface PutFindingsPublicationConfigurationRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration settings that determine which findings to publish to Security Hub.</p>
   * @public
   */
  securityHubConfiguration?: SecurityHubConfiguration | undefined;
}

/**
 * @public
 */
export interface PutFindingsPublicationConfigurationResponse {}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.</p>
 * @public
 */
export interface SearchResourcesCriteriaBlock {
  /**
   * <p>An array of objects, one for each property- or tag-based condition that includes or excludes resources from the query results. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   * @public
   */
  and?: SearchResourcesCriteria[] | undefined;
}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.</p>
 * @public
 */
export interface SearchResourcesBucketCriteria {
  /**
   * <p>The property- and tag-based conditions that determine which buckets to exclude from the results.</p>
   * @public
   */
  excludes?: SearchResourcesCriteriaBlock | undefined;

  /**
   * <p>The property- and tag-based conditions that determine which buckets to include in the results.</p>
   * @public
   */
  includes?: SearchResourcesCriteriaBlock | undefined;
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.</p>
 * @public
 */
export interface SearchResourcesSortCriteria {
  /**
   * <p>The property to sort the results by.</p>
   * @public
   */
  attributeName?: SearchResourcesSortAttributeName | undefined;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface SearchResourcesRequest {
  /**
   * <p>The filter conditions that determine which S3 buckets to include or exclude from the query results.</p>
   * @public
   */
  bucketCriteria?: SearchResourcesBucketCriteria | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria to use to sort the results.</p>
   * @public
   */
  sortCriteria?: SearchResourcesSortCriteria | undefined;
}

/**
 * @public
 */
export interface SearchResourcesResponse {
  /**
   * <p>An array of objects, one for each resource that matches the filter criteria specified in the request.</p>
   * @public
   */
  matchingResources?: MatchingResource[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestCustomDataIdentifierRequest {
  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.</p>
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   * @public
   */
  regex: string | undefined;

  /**
   * <p>The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.</p>
   * @public
   */
  sampleText: string | undefined;
}

/**
 * @public
 */
export interface TestCustomDataIdentifierResponse {
  /**
   * <p>The number of occurrences of sample text that matched the criteria specified by the custom data identifier.</p>
   * @public
   */
  matchCount?: number | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAllowListRequest {
  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression that defines a text pattern to ignore (regex).</p> <p>You can change a list's underlying criteria, such as the name of the S3 object or the regular expression to use. However, you can't change the type from s3WordsList to regex or the other way around.</p>
   * @public
   */
  criteria: AllowListCriteria | undefined;

  /**
   * <p>A custom description of the allow list. The description can contain as many as 512 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A custom name for the allow list. The name can contain as many as 128 characters.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UpdateAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the allow list.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedDiscoveryConfigurationRequest {
  /**
   * <p>Specifies whether to automatically enable automated sensitive data discovery for accounts in the organization. Valid values are: ALL (default), enable it for all existing accounts and new member accounts; NEW, enable it only for new member accounts; and, NONE, don't enable it for any accounts.</p> <p>If you specify NEW or NONE, automated sensitive data discovery continues to be enabled for any existing accounts that it's currently enabled for. To enable or disable it for individual member accounts, specify NEW or NONE, and then enable or disable it for each account by using the BatchUpdateAutomatedDiscoveryAccounts operation.</p>
   * @public
   */
  autoEnableOrganizationMembers?: AutoEnableMode | undefined;

  /**
   * <p>The new status of automated sensitive data discovery for the organization or account. Valid values are: ENABLED, start or resume all automated sensitive data discovery activities; and, DISABLED, stop performing all automated sensitive data discovery activities.</p> <p>If you specify DISABLED for an administrator account, you also disable automated sensitive data discovery for all member accounts in the organization.</p>
   * @public
   */
  status: AutomatedDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedDiscoveryConfigurationResponse {}

/**
 * @public
 */
export interface UpdateClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p> <p>If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.</p> <p>If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * @public
 */
export interface UpdateClassificationJobResponse {}

/**
 * <p>Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.</p>
 * @public
 */
export interface S3ClassificationScopeExclusionUpdate {
  /**
   * <p>Depending on the value specified for the update operation (ClassificationScopeUpdateOperation), an array of strings that: lists the names of buckets to add or remove from the list, or specifies a new set of bucket names that overwrites all existing names in the list. Each string must be the full name of an existing S3 bucket. Values are case sensitive.</p>
   * @public
   */
  bucketNames: string[] | undefined;

  /**
   * <p>Specifies how to apply the changes to the exclusion list. Valid values are:</p> <ul><li><p>ADD - Append the specified bucket names to the current list.</p></li> <li><p>REMOVE - Remove the specified bucket names from the current list.</p></li> <li><p>REPLACE - Overwrite the current list with the specified list of bucket names. If you specify this value, Amazon Macie removes all existing names from the list and adds all the specified names to the list.</p></li></ul>
   * @public
   */
  operation: ClassificationScopeUpdateOperation | undefined;
}

/**
 * <p>Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.</p>
 * @public
 */
export interface S3ClassificationScopeUpdate {
  /**
   * <p>The names of the S3 buckets to add or remove from the list.</p>
   * @public
   */
  excludes: S3ClassificationScopeExclusionUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateClassificationScopeRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The S3 buckets to add or remove from the exclusion list defined by the classification scope.</p>
   * @public
   */
  s3?: S3ClassificationScopeUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateClassificationScopeResponse {}

/**
 * @public
 */
export interface UpdateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The criteria to use to filter findings.</p>
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   * @public
   */
  position?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier for the filter that was updated.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMacieSessionRequest {
  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   * @public
   */
  status?: MacieStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMacieSessionResponse {}

/**
 * @public
 */
export interface UpdateMemberSessionRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   * @public
   */
  status: MacieStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMemberSessionResponse {}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Specifies whether to enable Amazon Macie automatically for accounts that are added to the organization in Organizations.</p>
   * @public
   */
  autoEnable: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdateResourceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.</p>
   * @public
   */
  sensitivityScoreOverride?: number | undefined;
}

/**
 * @public
 */
export interface UpdateResourceProfileResponse {}

/**
 * @public
 */
export interface UpdateResourceProfileDetectionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of objects, one for each custom data identifier or managed data identifier that detected a type of sensitive data to exclude from the bucket's score. To include all sensitive data types in the score, don't specify any values for this array.</p>
   * @public
   */
  suppressDataIdentifiers?: SuppressDataIdentifier[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceProfileDetectionsResponse {}

/**
 * <p>Specifies the access method and settings to use when retrieving occurrences of sensitive data reported by findings. If your request specifies an Identity and Access Management (IAM) role to assume, Amazon Macie verifies that the role exists and the attached policies are configured correctly. If there's an issue, Macie returns an error. For information about addressing the issue, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-retrieve-sd-options.html">Configuration options for retrieving sensitive data samples</a> in the <i>Amazon Macie User Guide</i>.</p>
 * @public
 */
export interface UpdateRetrievalConfiguration {
  /**
   * <p>The access method to use when retrieving sensitive data from affected S3 objects. Valid values are: ASSUME_ROLE, assume an IAM role that is in the affected Amazon Web Services account and delegates access to Amazon Macie; and, CALLER_CREDENTIALS, use the credentials of the IAM user who requests the sensitive data. If you specify ASSUME_ROLE, also specify the name of an existing IAM role for Macie to assume (roleName).</p> <important><p>If you change this value from ASSUME_ROLE to CALLER_CREDENTIALS for an existing configuration, Macie permanently deletes the external ID and role name currently specified for the configuration. These settings can't be recovered after they're deleted.</p></important>
   * @public
   */
  retrievalMode: RetrievalMode | undefined;

  /**
   * <p>The name of the IAM role that is in the affected Amazon Web Services account and Amazon Macie is allowed to assume when retrieving sensitive data from affected S3 objects for the account. The trust and permissions policies for the role must meet all requirements for Macie to assume the role.</p>
   * @public
   */
  roleName?: string | undefined;
}
