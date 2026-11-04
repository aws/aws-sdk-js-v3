// smithy-typescript generated code
import type {
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
 * Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.
 *
 * @public
 */
export interface AdminAccount {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The current status of the account as the delegated Amazon Macie administrator account for the organization.
   *
   * @public
   */
  status?: AdminStatus | undefined;
}

/**
 * Provides a subset of information about an allow list.
 *
 * @public
 */
export interface AllowListSummary {
  /**
   * The Amazon Resource Name (ARN) of the allow list.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The custom description of the allow list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the allow list.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the allow list.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Provides information about the status of automated sensitive data discovery for an Amazon Macie account.
 *
 * @public
 */
export interface AutomatedDiscoveryAccount {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The current status of automated sensitive data discovery for the account. Possible values are: ENABLED, perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.
   *
   * @public
   */
  status?: AutomatedDiscoveryAccountStatus | undefined;
}

/**
 * Changes the status of automated sensitive data discovery for an Amazon Macie account.
 *
 * @public
 */
export interface AutomatedDiscoveryAccountUpdate {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The new status of automated sensitive data discovery for the account. Valid values are: ENABLED, perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.
   *
   * @public
   */
  status?: AutomatedDiscoveryAccountStatus | undefined;
}

/**
 * Provides information about a request that failed to change the status of automated sensitive data discovery for an Amazon Macie account.
 *
 * @public
 */
export interface AutomatedDiscoveryAccountUpdateError {
  /**
   * The Amazon Web Services account ID for the account that the request applied to.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The error code for the error that caused the request to fail for the account (accountId). Possible values are: ACCOUNT_NOT_FOUND, the account doesn't exist or you're not the Amazon Macie administrator for the account; and, ACCOUNT_PAUSED, Macie isn't enabled for the account in the current Amazon Web Services Region.
   *
   * @public
   */
  errorCode?: AutomatedDiscoveryAccountUpdateErrorCode | undefined;
}

/**
 * Provides information about a custom data identifier.
 *
 * @public
 */
export interface BatchGetCustomDataIdentifierSummary {
  /**
   * The Amazon Resource Name (ARN) of the custom data identifier.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * The custom description of the custom data identifier.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the custom data identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the custom data identifier.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Specifies whether any one-time or recurring classification jobs are configured to analyze objects in an S3 bucket, and, if so, the details of the job that ran most recently.
 *
 * @public
 */
export interface JobDetails {
  /**
   * Specifies whether any one-time or recurring jobs are configured to analyze objects in the bucket. Possible values are:
   *
   * - TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more jobs and at least one of those jobs has a status other than CANCELLED. Or the bucket matched the bucket criteria (S3BucketCriteriaForJob) for at least one job that previously ran.
   * - FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any jobs, all the jobs that explicitly include the bucket in their bucket definitions have a status of CANCELLED, or the bucket didn't match the bucket criteria (S3BucketCriteriaForJob) for any jobs that previously ran.
   * - UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.
   *
   * @public
   */
  isDefinedInJob?: IsDefinedInJob | undefined;

  /**
   * Specifies whether any recurring jobs are configured to analyze objects in the bucket. Possible values are:
   *
   * - TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more recurring jobs or the bucket matches the bucket criteria (S3BucketCriteriaForJob) for one or more recurring jobs. At least one of those jobs has a status other than CANCELLED.
   * - FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any recurring jobs, the bucket doesn't match the bucket criteria (S3BucketCriteriaForJob) for any recurring jobs, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED.
   * - UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.
   *
   * @public
   */
  isMonitoredByJob?: IsMonitoredByJob | undefined;

  /**
   * The unique identifier for the job that ran most recently and is configured to analyze objects in the bucket, either the latest run of a recurring job or the only run of a one-time job.
   *
   * This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.
   *
   * @public
   */
  lastJobId?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started.
   *
   * This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.
   *
   * @public
   */
  lastJobRunTime?: Date | undefined;
}

/**
 * Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
 *
 * @public
 */
export interface ObjectCountByEncryptionType {
  /**
   * The total number of objects that are encrypted with customer-provided keys. The objects use server-side encryption with customer-provided keys (SSE-C).
   *
   * @public
   */
  customerManaged?: number | undefined;

  /**
   * The total number of objects that are encrypted with KMS keys, either Amazon Web Services managed keys or customer managed keys. The objects use dual-layer server-side encryption or server-side encryption with KMS keys (DSSE-KMS or SSE-KMS).
   *
   * @public
   */
  kmsManaged?: number | undefined;

  /**
   * The total number of objects that are encrypted with Amazon S3 managed keys. The objects use server-side encryption with Amazon S3 managed keys (SSE-S3).
   *
   * @public
   */
  s3Managed?: number | undefined;

  /**
   * The total number of objects that use client-side encryption or aren't encrypted.
   *
   * @public
   */
  unencrypted?: number | undefined;

  /**
   * The total number of objects that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the encryption settings for these objects.
   *
   * @public
   */
  unknown?: number | undefined;
}

/**
 * Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see [Blocking public access to your Amazon S3 storage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface BlockPublicAccess {
  /**
   * Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.
   *
   * @public
   */
  blockPublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 blocks public bucket policies for the bucket.
   *
   * @public
   */
  blockPublicPolicy?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.
   *
   * @public
   */
  ignorePublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 restricts public bucket policies for the bucket.
   *
   * @public
   */
  restrictPublicBuckets?: boolean | undefined;
}

/**
 * Provides information about the account-level permissions settings that apply to an S3 bucket.
 *
 * @public
 */
export interface AccountLevelPermissions {
  /**
   * The block public access settings for the Amazon Web Services account that owns the bucket.
   *
   * @public
   */
  blockPublicAccess?: BlockPublicAccess | undefined;
}

/**
 * Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
 *
 * @public
 */
export interface AccessControlList {
  /**
   * Specifies whether the ACL grants the general public with read access permissions for the bucket.
   *
   * @public
   */
  allowsPublicReadAccess?: boolean | undefined;

  /**
   * Specifies whether the ACL grants the general public with write access permissions for the bucket.
   *
   * @public
   */
  allowsPublicWriteAccess?: boolean | undefined;
}

/**
 * Provides information about the permissions settings of the bucket policy for an S3 bucket.
 *
 * @public
 */
export interface BucketPolicy {
  /**
   * Specifies whether the bucket policy allows the general public to have read access to the bucket.
   *
   * @public
   */
  allowsPublicReadAccess?: boolean | undefined;

  /**
   * Specifies whether the bucket policy allows the general public to have write access to the bucket.
   *
   * @public
   */
  allowsPublicWriteAccess?: boolean | undefined;
}

/**
 * Provides information about the bucket-level permissions settings for an S3 bucket.
 *
 * @public
 */
export interface BucketLevelPermissions {
  /**
   * The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.
   *
   * @public
   */
  accessControlList?: AccessControlList | undefined;

  /**
   * The block public access settings for the bucket.
   *
   * @public
   */
  blockPublicAccess?: BlockPublicAccess | undefined;

  /**
   * The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.
   *
   * @public
   */
  bucketPolicy?: BucketPolicy | undefined;
}

/**
 * Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
 *
 * @public
 */
export interface BucketPermissionConfiguration {
  /**
   * The account-level permissions settings that apply to the bucket.
   *
   * @public
   */
  accountLevelPermissions?: AccountLevelPermissions | undefined;

  /**
   * The bucket-level permissions settings for the bucket.
   *
   * @public
   */
  bucketLevelPermissions?: BucketLevelPermissions | undefined;
}

/**
 * Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
 *
 * @public
 */
export interface BucketPublicAccess {
  /**
   * Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are:
   *
   * - NOT_PUBLIC - The bucket isn't publicly accessible.
   * - PUBLIC - The bucket is publicly accessible.
   * - UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.
   *
   * @public
   */
  effectivePermission?: EffectivePermission | undefined;

  /**
   * The account-level and bucket-level permissions settings for the bucket.
   *
   * @public
   */
  permissionConfiguration?: BucketPermissionConfiguration | undefined;
}

/**
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
 *
 * @public
 */
export interface ReplicationDetails {
  /**
   * Specifies whether the bucket is configured to replicate one or more objects to any destination.
   *
   * @public
   */
  replicated?: boolean | undefined;

  /**
   * Specifies whether the bucket is configured to replicate one or more objects to a bucket for an Amazon Web Services account that isn't part of your Amazon Macie organization. An *Amazon Macie organization* is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.
   *
   * @public
   */
  replicatedExternally?: boolean | undefined;

  /**
   * An array of Amazon Web Services account IDs, one for each Amazon Web Services account that owns a bucket that the bucket is configured to replicate one or more objects to.
   *
   * @public
   */
  replicationAccounts?: string[] | undefined;
}

/**
 * Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see [Setting default server-side encryption behavior for Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface BucketServerSideEncryption {
  /**
   * The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used by default to encrypt objects that are added to the bucket. This value is null if the bucket is configured to use an Amazon S3 managed key to encrypt new objects.
   *
   * @public
   */
  kmsMasterKeyId?: string | undefined;

  /**
   * The server-side encryption algorithm that's used by default to encrypt objects that are added to the bucket. Possible values are:
   *
   * - AES256 - New objects use SSE-S3 encryption. They're encrypted with an Amazon S3 managed key.
   * - aws:kms - New objects use SSE-KMS encryption. They're encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key.
   * - aws:kms:dsse - New objects use DSSE-KMS encryption. They're encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key.
   * - NONE - The bucket's default encryption settings don't specify server-side encryption behavior for new objects.
   *
   * @public
   */
  type?: Type | undefined;
}

/**
 * Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
 *
 * @public
 */
export interface KeyValuePair {
  /**
   * One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket.
 *
 * @public
 */
export interface ObjectLevelStatistics {
  /**
   * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  fileType?: number | undefined;

  /**
   * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.
   *
   * @public
   */
  storageClass?: number | undefined;

  /**
   * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see [How Macie monitors Amazon S3 data security](https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html) in the *Amazon Macie User Guide*.
 *
 * If an error or issue prevents Macie from retrieving and processing metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null or UNKNOWN. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause, refer to the errorCode and errorMessage values.
 *
 * @public
 */
export interface BucketMetadata {
  /**
   * The unique identifier for the Amazon Web Services account that owns the bucket.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:
   *
   * - FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.
   * - TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.
   * - UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.
   *
   * Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.
   *
   * @public
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | undefined;

  /**
   * Specifies whether automated sensitive data discovery is currently configured to analyze objects in the bucket. Possible values are: MONITORED, the bucket is included in analyses; and, NOT_MONITORED, the bucket is excluded from analyses. If automated sensitive data discovery is disabled for your account, this value is NOT_MONITORED.
   *
   * @public
   */
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket.
   *
   * @public
   */
  bucketCreatedAt?: Date | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.
   *
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * The code for an error or issue that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. Possible values are:
   *
   * - ACCESS_DENIED - Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request.
   * - BUCKET_COUNT_EXCEEDS_QUOTA - Retrieving and processing the information would exceed the quota for the number of buckets that Macie monitors for an account (10,000).
   *
   * If this value is null, Macie was able to retrieve and process the information.
   *
   * @public
   */
  errorCode?: BucketMetadataErrorCode | undefined;

  /**
   * A brief description of the error or issue (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.
   *
   * @public
   */
  jobDetails?: JobDetails | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed objects in the bucket while performing automated sensitive data discovery. This value is null if this analysis hasn't occurred.
   *
   * @public
   */
  lastAutomatedDiscoveryTime?: Date | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the bucket.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * The total number of objects in the bucket.
   *
   * @public
   */
  objectCount?: number | undefined;

  /**
   * The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.
   *
   * @public
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType | undefined;

  /**
   * Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket, and provides information about those settings.
   *
   * @public
   */
  publicAccess?: BucketPublicAccess | undefined;

  /**
   * The Amazon Web Services Region that hosts the bucket.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Specifies whether the bucket is configured to replicate one or more objects to buckets for other Amazon Web Services accounts and, if so, which accounts.
   *
   * @public
   */
  replicationDetails?: ReplicationDetails | undefined;

  /**
   * The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive).
   *
   * If automated sensitive data discovery has never been enabled for your account or it's been disabled for your organization or standalone account for more than 30 days, possible values are: 1, the bucket is empty; or, 50, the bucket stores objects but it's been excluded from recent analyses.
   *
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * The default server-side encryption settings for the bucket.
   *
   * @public
   */
  serverSideEncryption?: BucketServerSideEncryption | undefined;

  /**
   * Specifies whether the bucket is shared with another Amazon Web Services account, an Amazon CloudFront origin access identity (OAI), or a CloudFront origin access control (OAC). Possible values are:
   *
   * - EXTERNAL - The bucket is shared with one or more of the following or any combination of the following: a CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't part of your Amazon Macie organization.
   * - INTERNAL - The bucket is shared with one or more Amazon Web Services accounts that are part of your Amazon Macie organization. It isn't shared with a CloudFront OAI or OAC.
   * - NOT_SHARED - The bucket isn't shared with another Amazon Web Services account, a CloudFront OAI, or a CloudFront OAC.
   * - UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.
   *
   * An *Amazon Macie organization* is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.
   *
   * @public
   */
  sharedAccess?: SharedAccess | undefined;

  /**
   * The total storage size, in bytes, of the bucket.
   *
   * If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.
   *
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.
   *
   * If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.
   *
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * An array that specifies the tags (keys and values) that are associated with the bucket.
   *
   * @public
   */
  tags?: KeyValuePair[] | undefined;

  /**
   * The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics | undefined;

  /**
   * Specifies whether versioning is enabled for the bucket.
   *
   * @public
   */
  versioning?: boolean | undefined;
}

/**
 * Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account.
 *
 * @public
 */
export interface ClassificationScopeSummary {
  /**
   * The unique identifier for the classification scope.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the classification scope: automated-sensitive-data-discovery.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
 *
 * @public
 */
export interface SimpleCriterionForJob {
  /**
   * The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).
   *
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * The property to use in the condition.
   *
   * @public
   */
  key?: SimpleCriterionKeyForJob | undefined;

  /**
   * An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:
   *
   * - ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the bucket.
   * - S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the [BucketPublicAccess.effectivePermission](https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission) property of a bucket.
   * - S3_BUCKET_NAME - A string that represents the name of a bucket.
   * - S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the [BucketMetadata.sharedAccess](https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess) property of a bucket.
   *
   * Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in these values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.
 *
 * @public
 */
export interface TagCriterionPairForJob {
  /**
   * The value for the tag key to use in the condition.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value to use in the condition.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
 *
 * @public
 */
export interface TagCriterionForJob {
  /**
   * The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).
   *
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * The tag keys, tag values, or tag key and value pairs to use in the condition.
   *
   * @public
   */
  tagValues?: TagCriterionPairForJob[] | undefined;
}

/**
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
 *
 * @public
 */
export interface CriteriaForJob {
  /**
   * A property-based condition that defines a property, operator, and one or more values for including or excluding buckets from the job.
   *
   * @public
   */
  simpleCriterion?: SimpleCriterionForJob | undefined;

  /**
   * A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding buckets from the job.
   *
   * @public
   */
  tagCriterion?: TagCriterionForJob | undefined;
}

/**
 * Provides information about a custom data identifier.
 *
 * @public
 */
export interface CustomDataIdentifierSummary {
  /**
   * The Amazon Resource Name (ARN) of the custom data identifier.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The custom description of the custom data identifier.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the custom data identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the custom data identifier.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding.
 *
 * @public
 */
export interface DetectedDataDetails {
  /**
   * An occurrence of the specified type of sensitive data. Each occurrence contains 1-128 characters.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for an account. The information also specifies the custom or managed data identifier that detected the data. This information is available only if automated sensitive data discovery has been enabled for the account.
 *
 * @public
 */
export interface Detection {
  /**
   * If the sensitive data was detected by a custom data identifier, the Amazon Resource Name (ARN) of the custom data identifier that detected the data. Otherwise, this value is null.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The total number of occurrences of the sensitive data.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The unique identifier for the custom data identifier or managed data identifier that detected the sensitive data. For additional details about a specified managed data identifier, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) in the *Amazon Macie User Guide*.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the custom data identifier or managed data identifier that detected the sensitive data. For a managed data identifier, this value is the same as the unique identifier (id).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether occurrences of this type of sensitive data are excluded (true) or included (false) in the bucket's sensitivity score, if the score is calculated by Amazon Macie.
   *
   * @public
   */
  suppressed?: boolean | undefined;

  /**
   * The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.
   *
   * @public
   */
  type?: DataIdentifierType | undefined;
}

/**
 * Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
 *
 * @public
 */
export interface Cell {
  /**
   * The location of the cell, as an absolute cell reference, that contains the sensitive data, for example Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.
   *
   * @public
   */
  cellReference?: string | undefined;

  /**
   * The column number of the column that contains the sensitive data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier, for example: 1 for column A, 2 for column B, and so on.
   *
   * @public
   */
  column?: number | undefined;

  /**
   * The name of the column that contains the sensitive data, if available.
   *
   * @public
   */
  columnName?: string | undefined;

  /**
   * The row number of the row that contains the sensitive data.
   *
   * @public
   */
  row?: number | undefined;
}

/**
 * Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file.
 *
 * @public
 */
export interface Range {
  /**
   * The number of lines from the beginning of the file to the end of the sensitive data.
   *
   * @public
   */
  end?: number | undefined;

  /**
   * The number of lines from the beginning of the file to the beginning of the sensitive data.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * The number of characters, with spaces and starting from 1, from the beginning of the first line that contains the sensitive data (start) to the beginning of the sensitive data.
   *
   * @public
   */
  startColumn?: number | undefined;
}

/**
 * Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
 *
 * @public
 */
export interface Page {
  /**
   * Reserved for future use.
   *
   * @public
   */
  lineRange?: Range | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  offsetRange?: Range | undefined;

  /**
   * The page number of the page that contains the sensitive data.
   *
   * @public
   */
  pageNumber?: number | undefined;
}

/**
 * Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
 *
 * @public
 */
export interface _Record {
  /**
   * The path, as a JSONPath expression, to the sensitive data. For an Avro object container or Parquet file, this is the path to the field in the record (recordIndex) that contains the data. For a JSON or JSON Lines file, this is the path to the field or array that contains the data. If the data is a value in an array, the path also indicates which value contains the data.
   *
   * If Amazon Macie detects sensitive data in the name of any element in the path, Macie omits this field. If the name of an element exceeds 240 characters, Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.
   *
   * @public
   */
  jsonPath?: string | undefined;

  /**
   * For an Avro object container or Parquet file, the record index, starting from 0, for the record that contains the sensitive data. For a JSON Lines file, the line index, starting from 0, for the line that contains the sensitive data. This value is always 0 for JSON files.
   *
   * @public
   */
  recordIndex?: number | undefined;
}

/**
 * Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
 *
 * @public
 */
export interface Occurrences {
  /**
   * An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. This value is null for all other types of files.
   *
   * Each Cell object specifies a cell or field that contains the sensitive data.
   *
   * @public
   */
  cells?: Cell[] | undefined;

  /**
   * An array of objects, one for each occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file. Each Range object specifies a line or inclusive range of lines that contains the sensitive data, and the position of the data on the specified line or lines.
   *
   * This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the location of sensitive data in: unstructured sections of an otherwise structured file, such as a comment in a file; a malformed file that Amazon Macie analyzes as plain text; and, a CSV or TSV file that has any column names that contain sensitive data.
   *
   * @public
   */
  lineRanges?: Range[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  offsetRanges?: Range[] | undefined;

  /**
   * An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. This value is null for all other types of files.
   *
   * Each Page object specifies a page that contains the sensitive data.
   *
   * @public
   */
  pages?: Page[] | undefined;

  /**
   * An array of objects, one for each occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. This value is null for all other types of files.
   *
   * For an Avro object container or Parquet file, each Record object specifies a record index and the path to a field in a record that contains the sensitive data. For a JSON or JSON Lines file, each Record object specifies the path to a field or array that contains the sensitive data. For a JSON Lines file, it also specifies the index of the line that contains the data.
   *
   * @public
   */
  records?: _Record[] | undefined;
}

/**
 * Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
 *
 * @public
 */
export interface CustomDetection {
  /**
   * The unique identifier for the custom data identifier.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The total number of occurrences of the sensitive data that the custom data identifier detected.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The name of the custom data identifier.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.
   *
   * @public
   */
  occurrences?: Occurrences | undefined;
}

/**
 * Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
 *
 * @public
 */
export interface CustomDataIdentifiers {
  /**
   * The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.
   *
   * @public
   */
  detections?: CustomDetection[] | undefined;

  /**
   * The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.
   *
   * @public
   */
  totalCount?: number | undefined;
}

/**
 * Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
 *
 * @public
 */
export interface DefaultDetection {
  /**
   * The total number of occurrences of the type of sensitive data that was detected.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.
   *
   * @public
   */
  occurrences?: Occurrences | undefined;

  /**
   * The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
 *
 * @public
 */
export interface SensitiveDataItem {
  /**
   * The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.
   *
   * @public
   */
  category?: SensitiveDataItemCategory | undefined;

  /**
   * An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.
   *
   * @public
   */
  detections?: DefaultDetection[] | undefined;

  /**
   * The total number of occurrences of the sensitive data that was detected.
   *
   * @public
   */
  totalCount?: number | undefined;
}

/**
 * Provides information about the status of a sensitive data finding.
 *
 * @public
 */
export interface ClassificationResultStatus {
  /**
   * The status of the finding. Possible values are:
   *
   * - COMPLETE - Amazon Macie successfully completed its analysis of the S3 object that the finding applies to.
   * - PARTIAL - Macie analyzed only a subset of the data in the S3 object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.
   * - SKIPPED - Macie wasn't able to analyze the S3 object that the finding applies to. For example, the object is a file that uses an unsupported format.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A brief description of the status of the finding. This value is null if the status (code) of the finding is COMPLETE.
   *
   * Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding and the affected S3 object. Possible values are:
   *
   * - ARCHIVE_CONTAINS_UNPROCESSED_FILES - The object is an archive file and Macie extracted and analyzed only some or none of the files in the archive. To determine which files Macie analyzed, if any, refer to the corresponding sensitive data discovery result for the finding (classificationDetails.detailedResultsLocation).
   * - ARCHIVE_EXCEEDS_SIZE_LIMIT - The object is an archive file whose total storage size exceeds the size quota for this type of archive.
   * - ARCHIVE_NESTING_LEVEL_OVER_LIMIT - The object is an archive file whose nested depth exceeds the quota for the maximum number of nested levels that Macie analyzes for this type of archive.
   * - ARCHIVE_TOTAL_BYTES_EXTRACTED_OVER_LIMIT - The object is an archive file that exceeds the quota for the maximum amount of data that Macie extracts and analyzes for this type of archive.
   * - ARCHIVE_TOTAL_DOCUMENTS_PROCESSED_OVER_LIMIT - The object is an archive file that contains more than the maximum number of files that Macie extracts and analyzes for this type of archive.
   * - FILE_EXCEEDS_SIZE_LIMIT - The storage size of the object exceeds the size quota for this type of file.
   * - INVALID_ENCRYPTION - The object is encrypted using server-side encryption but Macie isn't allowed to use the key. Macie can't decrypt and analyze the object.
   * - INVALID_KMS_KEY - The object is encrypted with an KMS key that was disabled or is being deleted. Macie can't decrypt and analyze the object.
   * - INVALID_OBJECT_STATE - The object doesn't use a supported Amazon S3 storage class.
   * - JSON_NESTING_LEVEL_OVER_LIMIT - The object contains JSON data and the nested depth of the data exceeds the quota for the number of nested levels that Macie analyzes for this type of file.
   * - MALFORMED_FILE - The object is a malformed or corrupted file. An error occurred when Macie attempted to detect the file's type or extract data from the file.
   * - MALFORMED_OR_FILE_SIZE_EXCEEDS_LIMIT - The object is a Microsoft Office file that is malformed or exceeds the size quota for this type of file. If the file is malformed, an error occurred when Macie attempted to extract data from the file.
   * - NO_SUCH_BUCKET_AVAILABLE - The object was in a bucket that was deleted shortly before or when Macie attempted to analyze the object.
   * - OBJECT_VERSION_MISMATCH - The object was changed while Macie was analyzing it.
   * - OOXML_UNCOMPRESSED_RATIO_EXCEEDS_LIMIT - The object is an Office Open XML file whose compression ratio exceeds the compression quota for this type of file.
   * - OOXML_UNCOMPRESSED_SIZE_EXCEEDS_LIMIT - The object is an Office Open XML file that exceeds the size quota for this type of file.
   * - PERMISSION_DENIED - Macie isn't allowed to access the object. The object's permissions settings prevent Macie from analyzing the object.
   * - SOURCE_OBJECT_NO_LONGER_AVAILABLE - The object was deleted shortly before or when Macie attempted to analyze it.
   * - TIME_CUT_OFF_REACHED - Macie started analyzing the object but additional analysis would exceed the time quota for analyzing an object.
   * - UNABLE_TO_PARSE_FILE - The object is a file that contains structured data and an error occurred when Macie attempted to parse the data.
   * - UNSUPPORTED_FILE_TYPE_EXCEPTION - The object is a file that uses an unsupported file or storage format.
   *
   * For information about quotas, supported storage classes, and supported file and storage formats, see [Quotas](https://docs.aws.amazon.com/macie/latest/user/macie-quotas.html) and [Supported storage classes and formats](https://docs.aws.amazon.com/macie/latest/user/discovery-supported-storage.html) in the *Amazon Macie User Guide*.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
 *
 * @public
 */
export interface ClassificationResult {
  /**
   * Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data.
   *
   * This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (classificationDetails.detailedResultsLocation).
   *
   * @public
   */
  additionalOccurrences?: boolean | undefined;

  /**
   * The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.
   *
   * @public
   */
  customDataIdentifiers?: CustomDataIdentifiers | undefined;

  /**
   * The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.
   *
   * @public
   */
  mimeType?: string | undefined;

  /**
   * The category, types, and number of occurrences of the sensitive data that produced the finding.
   *
   * @public
   */
  sensitiveData?: SensitiveDataItem[] | undefined;

  /**
   * The total size, in bytes, of the data that the finding applies to.
   *
   * @public
   */
  sizeClassified?: number | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status?: ClassificationResultStatus | undefined;
}

/**
 * Provides information about a sensitive data finding and the details of the finding.
 *
 * @public
 */
export interface ClassificationDetails {
  /**
   * The path to the folder or file in Amazon S3 that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.
   *
   * @public
   */
  detailedResultsLocation?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier for the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Specifies how Amazon Macie found the sensitive data that produced the finding. Possible values are: SENSITIVE_DATA_DISCOVERY_JOB, for a classification job; and, AUTOMATED_SENSITIVE_DATA_DISCOVERY, for automated sensitive data discovery.
   *
   * @public
   */
  originType?: OriginType | undefined;

  /**
   * The status and other details of the finding.
   *
   * @public
   */
  result?: ClassificationResult | undefined;
}

/**
 * Provides information about an API operation that an entity invoked for an affected resource.
 *
 * @public
 */
export interface ApiCallDetails {
  /**
   * The name of the operation that was invoked most recently and produced the finding.
   *
   * @public
   */
  api?: string | undefined;

  /**
   * The URL of the Amazon Web Services service that provides the operation, for example: s3.amazonaws.com.
   *
   * @public
   */
  apiServiceName?: string | undefined;

  /**
   * The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.
   *
   * @public
   */
  firstSeen?: Date | undefined;

  /**
   * The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.
   *
   * @public
   */
  lastSeen?: Date | undefined;
}

/**
 * Provides information about an action that occurred for a resource and produced a policy finding.
 *
 * @public
 */
export interface FindingAction {
  /**
   * The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.
   *
   * @public
   */
  actionType?: FindingActionType | undefined;

  /**
   * The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.
   *
   * @public
   */
  apiCallDetails?: ApiCallDetails | undefined;
}

/**
 * Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
 *
 * @public
 */
export interface DomainDetails {
  /**
   * The name of the domain.
   *
   * @public
   */
  domainName?: string | undefined;
}

/**
 * Provides information about the city that an IP address originated from.
 *
 * @public
 */
export interface IpCity {
  /**
   * The name of the city.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Provides information about the country that an IP address originated from.
 *
 * @public
 */
export interface IpCountry {
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The name of the country that the IP address originated from.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Provides geographic coordinates that indicate where a specified IP address originated from.
 *
 * @public
 */
export interface IpGeoLocation {
  /**
   * The latitude coordinate of the location, rounded to four decimal places.
   *
   * @public
   */
  lat?: number | undefined;

  /**
   * The longitude coordinate of the location, rounded to four decimal places.
   *
   * @public
   */
  lon?: number | undefined;
}

/**
 * Provides information about the registered owner of an IP address.
 *
 * @public
 */
export interface IpOwner {
  /**
   * The autonomous system number (ASN) for the autonomous system that included the IP address.
   *
   * @public
   */
  asn?: string | undefined;

  /**
   * The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.
   *
   * @public
   */
  asnOrg?: string | undefined;

  /**
   * The name of the internet service provider (ISP) that owned the IP address.
   *
   * @public
   */
  isp?: string | undefined;

  /**
   * The name of the organization that owned the IP address.
   *
   * @public
   */
  org?: string | undefined;
}

/**
 * Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
 *
 * @public
 */
export interface IpAddressDetails {
  /**
   * The Internet Protocol version 4 (IPv4) address of the device.
   *
   * @public
   */
  ipAddressV4?: string | undefined;

  /**
   * The city that the IP address originated from.
   *
   * @public
   */
  ipCity?: IpCity | undefined;

  /**
   * The country that the IP address originated from.
   *
   * @public
   */
  ipCountry?: IpCountry | undefined;

  /**
   * The geographic coordinates of the location that the IP address originated from.
   *
   * @public
   */
  ipGeoLocation?: IpGeoLocation | undefined;

  /**
   * The registered owner of the IP address.
   *
   * @public
   */
  ipOwner?: IpOwner | undefined;
}

/**
 * Provides information about the context in which temporary security credentials were issued to an entity.
 *
 * @public
 */
export interface SessionContextAttributes {
  /**
   * The date and time, in UTC and ISO 8601 format, when the credentials were issued.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.
   *
   * @public
   */
  mfaAuthenticated?: boolean | undefined;
}

/**
 * Provides information about the source and type of temporary security credentials that were issued to an entity.
 *
 * @public
 */
export interface SessionIssuer {
  /**
   * The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source account, Identity and Access Management (IAM) user, or role that was used to get the credentials.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the entity that was used to get the credentials.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The source of the temporary security credentials, such as Root, IAMUser, or Role.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.
   *
   * @public
   */
  userName?: string | undefined;
}

/**
 * Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
 *
 * @public
 */
export interface SessionContext {
  /**
   * The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.
   *
   * @public
   */
  attributes?: SessionContextAttributes | undefined;

  /**
   * The source and type of credentials that were issued to the entity.
   *
   * @public
   */
  sessionIssuer?: SessionIssuer | undefined;
}

/**
 * Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.
 *
 * @public
 */
export interface AssumedRole {
  /**
   * The Amazon Web Services access key ID that identifies the credentials.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity that was used to get the credentials.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the entity that was used to get the credentials.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The details of the session that was created for the credentials, including the entity that issued the session.
   *
   * @public
   */
  sessionContext?: SessionContext | undefined;
}

/**
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.
 *
 * @public
 */
export interface AwsAccount {
  /**
   * The unique identifier for the Amazon Web Services account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The unique identifier for the entity that performed the action.
   *
   * @public
   */
  principalId?: string | undefined;
}

/**
 * Provides information about an Amazon Web Service that performed an action on an affected resource.
 *
 * @public
 */
export interface AwsService {
  /**
   * The name of the Amazon Web Service that performed the action.
   *
   * @public
   */
  invokedBy?: string | undefined;
}

/**
 * Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
 *
 * @public
 */
export interface FederatedUser {
  /**
   * The Amazon Web Services access key ID that identifies the credentials.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity that was used to get the credentials.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the entity that was used to get the credentials.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The details of the session that was created for the credentials, including the entity that issued the session.
   *
   * @public
   */
  sessionContext?: SessionContext | undefined;
}

/**
 * Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.
 *
 * @public
 */
export interface IamUser {
  /**
   * The unique identifier for the Amazon Web Services account that's associated with the IAM user who performed the action.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the IAM user who performed the action.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * The username of the IAM user who performed the action.
   *
   * @public
   */
  userName?: string | undefined;
}

/**
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.
 *
 * @public
 */
export interface UserIdentityRoot {
  /**
   * The unique identifier for the Amazon Web Services account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the entity that performed the action.
   *
   * @public
   */
  principalId?: string | undefined;
}

/**
 * Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
 *
 * @public
 */
export interface UserIdentity {
  /**
   * If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.
   *
   * @public
   */
  assumedRole?: AssumedRole | undefined;

  /**
   * If the action was performed using the credentials for another Amazon Web Services account, the details of that account.
   *
   * @public
   */
  awsAccount?: AwsAccount | undefined;

  /**
   * If the action was performed by an Amazon Web Services account that belongs to an Amazon Web Services service, the name of the service.
   *
   * @public
   */
  awsService?: AwsService | undefined;

  /**
   * If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.
   *
   * @public
   */
  federatedUser?: FederatedUser | undefined;

  /**
   * If the action was performed using the credentials for an Identity and Access Management (IAM) user, the name and other details about the user.
   *
   * @public
   */
  iamUser?: IamUser | undefined;

  /**
   * If the action was performed using the credentials for your Amazon Web Services account, the details of your account.
   *
   * @public
   */
  root?: UserIdentityRoot | undefined;

  /**
   * The type of entity that performed the action.
   *
   * @public
   */
  type?: UserIdentityType | undefined;
}

/**
 * Provides information about an entity that performed an action that produced a policy finding for a resource.
 *
 * @public
 */
export interface FindingActor {
  /**
   * The domain name of the device that the entity used to perform the action on the affected resource.
   *
   * @public
   */
  domainDetails?: DomainDetails | undefined;

  /**
   * The IP address and related details about the device that the entity used to perform the action on the affected resource. The details can include information such as the owner and geographic location of the IP address.
   *
   * @public
   */
  ipAddressDetails?: IpAddressDetails | undefined;

  /**
   * The type and other characteristics of the entity that performed the action on the affected resource. This value is null if the action was performed by an anonymous (unauthenticated) entity.
   *
   * @public
   */
  userIdentity?: UserIdentity | undefined;
}

/**
 * Provides the details of a policy finding.
 *
 * @public
 */
export interface PolicyDetails {
  /**
   * The action that produced the finding.
   *
   * @public
   */
  action?: FindingAction | undefined;

  /**
   * The entity that performed the action that produced the finding.
   *
   * @public
   */
  actor?: FindingActor | undefined;
}

/**
 * Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object.
 *
 * @public
 */
export interface ServerSideEncryption {
  /**
   * The server-side encryption algorithm that's used when storing data in the bucket or object. If default encryption settings aren't configured for the bucket or the object isn't encrypted using server-side encryption, this value is NONE.
   *
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used to encrypt data in the bucket or the object. This value is null if an KMS key isn't used to encrypt the data.
   *
   * @public
   */
  kmsMasterKeyId?: string | undefined;
}

/**
 * Provides information about the Amazon Web Services account that owns an S3 bucket.
 *
 * @public
 */
export interface S3BucketOwner {
  /**
   * The display name of the account that owns the bucket.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The canonical user ID for the account that owns the bucket.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Provides information about the S3 bucket that a finding applies to. If a quota prevented Amazon Macie from retrieving and processing all the bucket's information prior to generating the finding, the following values are UNKNOWN or null: allowsUnencryptedObjectUploads, defaultServerSideEncryption, publicAccess, and tags.
 *
 * @public
 */
export interface S3Bucket {
  /**
   * Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:
   *
   * - FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.
   * - TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.
   * - UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.
   *
   * Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.
   *
   * @public
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket, relative to when the finding was created or last updated.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The default server-side encryption settings for the bucket.
   *
   * @public
   */
  defaultServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The display name and canonical user ID for the Amazon Web Services account that owns the bucket.
   *
   * @public
   */
  owner?: S3BucketOwner | undefined;

  /**
   * The permissions settings that determine whether the bucket is publicly accessible.
   *
   * @public
   */
  publicAccess?: BucketPublicAccess | undefined;

  /**
   * The tags that are associated with the bucket.
   *
   * @public
   */
  tags?: KeyValuePair[] | undefined;
}

/**
 * Provides information about the S3 object that a finding applies to.
 *
 * @public
 */
export interface S3Object {
  /**
   * The Amazon Resource Name (ARN) of the bucket that contains the object.
   *
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.
   *
   * @public
   */
  eTag?: string | undefined;

  /**
   * The file name extension of the object. If the object doesn't have a file name extension, this value is "".
   *
   * @public
   */
  extension?: string | undefined;

  /**
   * The full name (*key*) of the object, including the object's prefix if applicable.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the object was last modified.
   *
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * The full path to the affected object, including the name of the affected bucket and the object's name (key).
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.
   *
   * @public
   */
  publicAccess?: boolean | undefined;

  /**
   * The type of server-side encryption that was used to encrypt the object.
   *
   * @public
   */
  serverSideEncryption?: ServerSideEncryption | undefined;

  /**
   * The total storage size, in bytes, of the object.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The storage class of the object.
   *
   * @public
   */
  storageClass?: StorageClass | undefined;

  /**
   * The tags that are associated with the object.
   *
   * @public
   */
  tags?: KeyValuePair[] | undefined;

  /**
   * The identifier for the affected version of the object.
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * Provides information about the resources that a finding applies to.
 *
 * @public
 */
export interface ResourcesAffected {
  /**
   * The details of the S3 bucket that the finding applies to.
   *
   * @public
   */
  s3Bucket?: S3Bucket | undefined;

  /**
   * The details of the S3 object that the finding applies to.
   *
   * @public
   */
  s3Object?: S3Object | undefined;
}

/**
 * Provides the numerical and qualitative representations of a finding's severity.
 *
 * @public
 */
export interface Severity {
  /**
   * The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).
   *
   * @public
   */
  description?: SeverityDescription | undefined;

  /**
   * The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * Provides the details of a finding.
 *
 * @public
 */
export interface Finding {
  /**
   * The unique identifier for the Amazon Web Services account that the finding applies to. This is typically the account that owns the affected resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Specifies whether the finding is archived (suppressed).
   *
   * @public
   */
  archived?: boolean | undefined;

  /**
   * The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.
   *
   * @public
   */
  category?: FindingCategory | undefined;

  /**
   * The details of a sensitive data finding. This value is null for a policy finding.
   *
   * @public
   */
  classificationDetails?: ClassificationDetails | undefined;

  /**
   * The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered unique.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie created the finding.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Web Services partition that Amazon Macie created the finding in.
   *
   * @public
   */
  partition?: string | undefined;

  /**
   * The details of a policy finding. This value is null for a sensitive data finding.
   *
   * @public
   */
  policyDetails?: PolicyDetails | undefined;

  /**
   * The Amazon Web Services Region that Amazon Macie created the finding in.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The resources that the finding applies to.
   *
   * @public
   */
  resourcesAffected?: ResourcesAffected | undefined;

  /**
   * Specifies whether the finding is a sample finding. A *sample finding* is a finding that uses example data to demonstrate what a finding might contain.
   *
   * @public
   */
  sample?: boolean | undefined;

  /**
   * The version of the schema that was used to define the data structures in the finding.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The severity level and score for the finding.
   *
   * @public
   */
  severity?: Severity | undefined;

  /**
   * The brief description of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The type of the finding.
   *
   * @public
   */
  type?: FindingType | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last updated the finding. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Provides information about a findings filter.
 *
 * @public
 */
export interface FindingsFilterListItem {
  /**
   * The action that's performed on findings that match the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
   *
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * The Amazon Resource Name (ARN) of the filter.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the filter.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Provides a group of results for a query that retrieved aggregated statistical data about findings.
 *
 * @public
 */
export interface GroupCount {
  /**
   * The total number of findings in the group of query results.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.
   *
   * @public
   */
  groupKey?: string | undefined;
}

/**
 * Provides information about an Amazon Macie membership invitation.
 *
 * @public
 */
export interface Invitation {
  /**
   * The Amazon Web Services account ID for the account that sent the invitation.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The unique identifier for the invitation.
   *
   * @public
   */
  invitationId?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.
   *
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * The status of the relationship between the account that sent the invitation and the account that received the invitation.
   *
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;
}

/**
 * Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
 *
 * @public
 */
export interface SimpleScopeTerm {
  /**
   * The operator to use in the condition. Valid values for each supported property (key) are:
   *
   * - OBJECT_EXTENSION - EQ (equals) or NE (not equals)
   * - OBJECT_KEY - STARTS_WITH
   * - OBJECT_LAST_MODIFIED_DATE - EQ (equals), GT (greater than), GTE (greater than or equals), LT (less than), LTE (less than or equals), or NE (not equals)
   * - OBJECT_SIZE - EQ (equals), GT (greater than), GTE (greater than or equals), LT (less than), LTE (less than or equals), or NE (not equals)
   *
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * The object property to use in the condition.
   *
   * @public
   */
  key?: ScopeFilterKey | undefined;

  /**
   * An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION or OBJECT_KEY, this array can specify multiple values and Amazon Macie uses OR logic to join the values. Otherwise, this array can specify only one value.
   *
   * Valid values for each supported property (key) are:
   *
   * - OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: docx or pdf
   * - OBJECT_KEY - A string that represents the key prefix (folder name or path) of an object. For example: logs or awslogs/eventlogs. This value applies a condition to objects whose keys (names) begin with the specified value.
   * - OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2023-09-24T14:31:13Z
   * - OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object.
   *
   * Macie doesn't support use of wildcard characters in these values. Also, string values are case sensitive.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.
 *
 * @public
 */
export interface TagValuePair {
  /**
   * The value for the tag key to use in the condition.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
 *
 * @public
 */
export interface TagScopeTerm {
  /**
   * The operator to use in the condition. Valid values are EQ (equals) or NE (not equals).
   *
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * The object property to use in the condition. The only valid value is TAG.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag keys or tag key and value pairs to use in the condition. To specify only tag keys in a condition, specify the keys in this array and set the value for each associated tag value to an empty string.
   *
   * @public
   */
  tagValues?: TagValuePair[] | undefined;

  /**
   * The type of object to apply the condition to.
   *
   * @public
   */
  target?: TagTarget | undefined;
}

/**
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
 *
 * @public
 */
export interface JobScopeTerm {
  /**
   * A property-based condition that defines a property, operator, and one or more values for including or excluding objects from the job.
   *
   * @public
   */
  simpleScopeTerm?: SimpleScopeTerm | undefined;

  /**
   * A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding objects from the job.
   *
   * @public
   */
  tagScopeTerm?: TagScopeTerm | undefined;
}

/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
 *
 * @public
 */
export interface CriteriaBlockForJob {
  /**
   * An array of conditions, one for each condition that determines which buckets to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.
   *
   * @public
   */
  and?: CriteriaForJob[] | undefined;
}

/**
 * Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
 *
 * @public
 */
export interface S3BucketCriteriaForJob {
  /**
   * The property- and tag-based conditions that determine which buckets to exclude from the job.
   *
   * @public
   */
  excludes?: CriteriaBlockForJob | undefined;

  /**
   * The property- and tag-based conditions that determine which buckets to include in the job.
   *
   * @public
   */
  includes?: CriteriaBlockForJob | undefined;
}

/**
 * Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
 *
 * @public
 */
export interface S3BucketDefinitionForJob {
  /**
   * The unique identifier for the Amazon Web Services account that owns the buckets.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * An array that lists the names of the buckets.
   *
   * @public
   */
  buckets: string[] | undefined;
}

/**
 * Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see [Monitoring sensitive data discovery jobs](https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface LastRunErrorStatus {
  /**
   * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are:
   *
   * - ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job.
   * - NONE - No errors occurred. Macie processed all the data specified for the job.
   *
   * @public
   */
  code?: LastRunErrorStatusCode | undefined;
}

/**
 * Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.
 *
 * @public
 */
export interface UserPausedDetails {
  /**
   * The date and time, in UTC and extended ISO 8601 format, when the job or job run will expire and be cancelled if you don't resume it first.
   *
   * @public
   */
  jobExpiresAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Health event that Amazon Macie sent to notify you of the job or job run's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.
   *
   * @public
   */
  jobImminentExpirationHealthEventArn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when you paused the job.
   *
   * @public
   */
  jobPausedAt?: Date | undefined;
}

/**
 * Provides information about a classification job, including the current status of the job.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.
   *
   * @public
   */
  bucketCriteria?: S3BucketCriteriaForJob | undefined;

  /**
   * An array of objects, one for each Amazon Web Services account that owns specific S3 buckets for the job to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.
   *
   * @public
   */
  bucketDefinitions?: S3BucketDefinitionForJob[] | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The current status of the job. Possible values are:
   *
   * - CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.
   * - COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.
   * - IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.
   * - PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.
   * - RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.
   * - USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
   *
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * The schedule for running the job. Possible values are:
   *
   * - ONE_TIME - The job runs only once.
   * - SCHEDULED - The job runs on a daily, weekly, or monthly basis.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.
   *
   * @public
   */
  lastRunErrorStatus?: LastRunErrorStatus | undefined;

  /**
   * The custom name of the job.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.
   *
   * @public
   */
  userPausedDetails?: UserPausedDetails | undefined;
}

/**
 * Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
 *
 * @public
 */
export interface ListJobsFilterTerm {
  /**
   * The operator to use to filter the results.
   *
   * @public
   */
  comparator?: JobComparator | undefined;

  /**
   * The property to use to filter the results.
   *
   * @public
   */
  key?: ListJobsFilterKey | undefined;

  /**
   * An array that lists one or more values to use to filter the results.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Provides information about a managed data identifier. For additional information, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface ManagedDataIdentifierSummary {
  /**
   * The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.
   *
   * @public
   */
  category?: SensitiveDataItemCategory | undefined;

  /**
   * The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see [How Macie monitors Amazon S3 data security](https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html) in the *Amazon Macie User Guide*.
 *
 * If an error or issue prevents Macie from retrieving and processing information about the bucket or the bucket's objects, the value for many of these properties is null. Key exceptions are accountId and bucketName. To identify the cause, refer to the errorCode and errorMessage values.
 *
 * @public
 */
export interface MatchingBucket {
  /**
   * The unique identifier for the Amazon Web Services account that owns the bucket.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Specifies whether automated sensitive data discovery is currently configured to analyze objects in the bucket. Possible values are: MONITORED, the bucket is included in analyses; and, NOT_MONITORED, the bucket is excluded from analyses. If automated sensitive data discovery is disabled for your account, this value is NOT_MONITORED.
   *
   * @public
   */
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.
   *
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * The code for an error or issue that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. Possible values are:
   *
   * - ACCESS_DENIED - Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request.
   * - BUCKET_COUNT_EXCEEDS_QUOTA - Retrieving and processing the information would exceed the quota for the number of buckets that Macie monitors for an account (10,000).
   *
   * If this value is null, Macie was able to retrieve and process the information.
   *
   * @public
   */
  errorCode?: BucketMetadataErrorCode | undefined;

  /**
   * A brief description of the error or issue (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.
   *
   * @public
   */
  jobDetails?: JobDetails | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed objects in the bucket while performing automated sensitive data discovery. This value is null if this analysis hasn't occurred.
   *
   * @public
   */
  lastAutomatedDiscoveryTime?: Date | undefined;

  /**
   * The total number of objects in the bucket.
   *
   * @public
   */
  objectCount?: number | undefined;

  /**
   * The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.
   *
   * @public
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType | undefined;

  /**
   * The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive).
   *
   * If automated sensitive data discovery has never been enabled for your account or it's been disabled for your organization or standalone account for more than 30 days, possible values are: 1, the bucket is empty; or, 50, the bucket stores objects but it's been excluded from recent analyses.
   *
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * The total storage size, in bytes, of the bucket.
   *
   * If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.
   *
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.
   *
   * If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.
   *
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics | undefined;
}

/**
 * Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account.
 *
 * @public
 */
export interface MatchingResource {
  /**
   * The details of an S3 bucket that Amazon Macie monitors and analyzes for your account.
   *
   * @public
   */
  matchingBucket?: MatchingBucket | undefined;
}

/**
 * Provides information about an account that's associated with an Amazon Macie administrator account.
 *
 * @public
 */
export interface Member {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services account ID for the administrator account.
   *
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The email address for the account. This value is null if the account is associated with the administrator account through Organizations.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.
   *
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * (Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.
   *
   * @public
   */
  masterAccountId?: string | undefined;

  /**
   * The current status of the relationship between the account and the administrator account.
   *
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an account, and the status and results of the analysis. This information is available only if automated sensitive data discovery has been enabled for the account.
 *
 * @public
 */
export interface ResourceProfileArtifact {
  /**
   * The Amazon Resource Name (ARN) of the object.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the analysis. Possible values are:
   *
   * - COMPLETE - Amazon Macie successfully completed its analysis of the object.
   * - PARTIAL - Macie analyzed only a subset of data in the object. For example, the object is an archive file that contains files in an unsupported format.
   * - SKIPPED - Macie wasn't able to analyze the object. For example, the object is a malformed file.
   *
   * @public
   */
  classificationResultStatus: string | undefined;

  /**
   * Specifies whether Amazon Macie found sensitive data in the object.
   *
   * @public
   */
  sensitive?: boolean | undefined;
}

/**
 * Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
 *
 * @public
 */
export interface SearchResourcesSimpleCriterion {
  /**
   * The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).
   *
   * @public
   */
  comparator?: SearchResourcesComparator | undefined;

  /**
   * The property to use in the condition.
   *
   * @public
   */
  key?: SearchResourcesSimpleCriterionKey | undefined;

  /**
   * An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:
   *
   * - ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the resource.
   * - AUTOMATED_DISCOVERY_MONITORING_STATUS - A string that represents an enumerated value that Macie defines for the [BucketMetadata.automatedDiscoveryMonitoringStatus](https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-automateddiscoverymonitoringstatus) property of an S3 bucket.
   * - S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the [BucketPublicAccess.effectivePermission](https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission) property of an S3 bucket.
   * - S3_BUCKET_NAME - A string that represents the name of an S3 bucket.
   * - S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the [BucketMetadata.sharedAccess](https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess) property of an S3 bucket.
   *
   * Values are case sensitive. Also, Macie doesn't support use of partial values or wildcard characters in values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.
 *
 * @public
 */
export interface SearchResourcesTagCriterionPair {
  /**
   * The value for the tag key to use in the condition.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value to use in the condition.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
 *
 * @public
 */
export interface SearchResourcesTagCriterion {
  /**
   * The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).
   *
   * @public
   */
  comparator?: SearchResourcesComparator | undefined;

  /**
   * The tag keys, tag values, or tag key and value pairs to use in the condition.
   *
   * @public
   */
  tagValues?: SearchResourcesTagCriterionPair[] | undefined;
}

/**
 * Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
 *
 * @public
 */
export interface SearchResourcesCriteria {
  /**
   * A property-based condition that defines a property, operator, and one or more values for including or excluding resources from the results.
   *
   * @public
   */
  simpleCriterion?: SearchResourcesSimpleCriterion | undefined;

  /**
   * A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding resources from the results.
   *
   * @public
   */
  tagCriterion?: SearchResourcesTagCriterion | undefined;
}

/**
 * Provides information about the sensitivity inspection template for an Amazon Macie account.
 *
 * @public
 */
export interface SensitivityInspectionTemplatesEntry {
  /**
   * The unique identifier for the sensitivity inspection template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the sensitivity inspection template: automated-sensitive-data-discovery.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to exclude from an S3 bucket's sensitivity score.
 *
 * @public
 */
export interface SuppressDataIdentifier {
  /**
   * The unique identifier for the custom data identifier or managed data identifier that detected the type of sensitive data to exclude from the score.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.
   *
   * @public
   */
  type?: DataIdentifierType | undefined;
}

/**
 * Provides information about an account-related request that hasn't been processed.
 *
 * @public
 */
export interface UnprocessedAccount {
  /**
   * The Amazon Web Services account ID for the account that the request applies to.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The source of the issue or delay in processing the request.
   *
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * The reason why the request hasn't been processed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Specifies a current quota for an Amazon Macie account.
 *
 * @public
 */
export interface ServiceLimit {
  /**
   * Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.
   *
   * @public
   */
  isServiceLimited?: boolean | undefined;

  /**
   * The unit of measurement for the value specified by the value field.
   *
   * @public
   */
  unit?: Unit | undefined;

  /**
   * The value for the metric specified by the UsageByAccount.type field in the response.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
 *
 * @public
 */
export interface UsageByAccount {
  /**
   * The type of currency that the value for the metric (estimatedCost) is reported in.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The estimated value for the metric.
   *
   * @public
   */
  estimatedCost?: string | undefined;

  /**
   * The current value for the quota that corresponds to the metric specified by the type field.
   *
   * @public
   */
  serviceLimit?: ServiceLimit | undefined;

  /**
   * The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.
   *
   * @public
   */
  type?: UsageType | undefined;
}

/**
 * Provides quota and aggregated usage data for an Amazon Macie account.
 *
 * @public
 */
export interface UsageRecord {
  /**
   * The unique identifier for the Amazon Web Services account that the data applies to.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the free trial of automated sensitive data discovery started for the account. This value is null if automated sensitive data discovery hasn't been enabled for the account.
   *
   * @public
   */
  automatedDiscoveryFreeTrialStartDate?: Date | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for the account.
   *
   * @public
   */
  freeTrialStartDate?: Date | undefined;

  /**
   * An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.
   *
   * @public
   */
  usage?: UsageByAccount[] | undefined;
}

/**
 * Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.
 *
 * @public
 */
export interface UsageStatisticsFilter {
  /**
   * The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.
   *
   * @public
   */
  comparator?: UsageStatisticsFilterComparator | undefined;

  /**
   * The field to use in the condition.
   *
   * @public
   */
  key?: UsageStatisticsFilterKey | undefined;

  /**
   * An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.
   *
   * Valid values for each supported field are:
   *
   * - accountId - The unique identifier for an Amazon Web Services account.
   * - freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for an account.
   * - serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.
   * - total - A string that represents the current estimated cost for an account.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
 *
 * @public
 */
export interface UsageTotal {
  /**
   * The type of currency that the value for the metric (estimatedCost) is reported in.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The estimated value for the metric.
   *
   * @public
   */
  estimatedCost?: string | undefined;

  /**
   * The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.
   *
   * @public
   */
  type?: UsageType | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * The Amazon Web Services account ID for the account that sent the invitation.
   *
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * The unique identifier for the invitation to accept.
   *
   * @public
   */
  invitationId: string | undefined;

  /**
   * (Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.
   *
   * @public
   */
  masterAccount?: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * Specifies the details of an account to associate with an Amazon Macie administrator account.
 *
 * @public
 */
export interface AccountDetail {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The email address for the account.
   *
   * @public
   */
  email: string | undefined;
}

/**
 * Provides information about an S3 object that lists specific text to ignore.
 *
 * @public
 */
export interface S3WordsList {
  /**
   * The full name of the S3 bucket that contains the object.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The full name (key) of the object.
   *
   * @public
   */
  objectKey: string | undefined;
}

/**
 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
 *
 * @public
 */
export interface AllowListCriteria {
  /**
   * The regular expression (*regex*) that defines the text pattern to ignore. The expression can contain as many as 512 characters.
   *
   * @public
   */
  regex?: string | undefined;

  /**
   * The location and name of the S3 object that lists specific text to ignore.
   *
   * @public
   */
  s3WordsList?: S3WordsList | undefined;
}

/**
 * Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.
 *
 * @public
 */
export interface AllowListStatus {
  /**
   * The current status of the allow list. If the list's criteria specify a regular expression (regex), this value is typically OK. Amazon Macie can compile the expression.
   *
   * If the list's criteria specify an S3 object, possible values are:
   *
   * - OK - Macie can retrieve and parse the contents of the object.
   * - S3_OBJECT_ACCESS_DENIED - Macie isn't allowed to access the object or the object is encrypted with a customer managed KMS key that Macie isn't allowed to use. Check the bucket policy and other permissions settings for the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that Macie is allowed to use.
   * - S3_OBJECT_EMPTY - Macie can retrieve the object but the object doesn't contain any content. Ensure that the object contains the correct entries. Also ensure that the list's criteria specify the correct bucket and object names.
   * - S3_OBJECT_NOT_FOUND - The object doesn't exist in Amazon S3. Ensure that the list's criteria specify the correct bucket and object names.
   * - S3_OBJECT_OVERSIZE - Macie can retrieve the object. However, the object contains too many entries or its storage size exceeds the quota for an allow list. Try breaking the list into multiple files and ensure that each file doesn't exceed any quotas. Then configure list settings in Macie for each file.
   * - S3_THROTTLED - Amazon S3 throttled the request to retrieve the object. Wait a few minutes and then try again.
   * - S3_USER_ACCESS_DENIED - Amazon S3 denied the request to retrieve the object. If the specified object exists, you're not allowed to access it or it's encrypted with an KMS key that you're not allowed to use. Work with your Amazon Web Services administrator to ensure that the list's criteria specify the correct bucket and object names, and you have read access to the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that you're allowed to use.
   * - UNKNOWN_ERROR - A transient or internal error occurred when Macie attempted to retrieve or parse the object. Wait a few minutes and then try again. A list can also have this status if it's encrypted with a key that Amazon S3 and Macie can't access or use.
   *
   * @public
   */
  code: AllowListStatusCode | undefined;

  /**
   * A brief description of the status of the allow list. Amazon Macie uses this value to provide additional information about an error that occurred when Macie tried to access and use the list's criteria.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.
   *
   * @public
   */
  ids?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * An array of objects, one for each custom data identifier that matches the criteria specified in the request.
   *
   * @public
   */
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[] | undefined;

  /**
   * An array of custom data identifier IDs, one for each custom data identifier that was specified in the request but doesn't correlate to an existing custom data identifier.
   *
   * @public
   */
  notFoundIdentifierIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomatedDiscoveryAccountsRequest {
  /**
   * An array of objects, one for each account to change the status of automated sensitive data discovery for. Each object specifies the Amazon Web Services account ID for an account and a new status for that account.
   *
   * @public
   */
  accounts?: AutomatedDiscoveryAccountUpdate[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomatedDiscoveryAccountsResponse {
  /**
   * An array of objects, one for each account whose status wasn't changed. Each object identifies the account and explains why the status of automated sensitive data discovery wasn't changed for the account. This value is null if the request succeeded for all specified accounts.
   *
   * @public
   */
  errors?: AutomatedDiscoveryAccountUpdateError[] | undefined;
}

/**
 * Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket.
 *
 * @public
 */
export interface BucketCountByEffectivePermission {
  /**
   * The total number of buckets that allow the general public to have read or write access to the bucket.
   *
   * @public
   */
  publiclyAccessible?: number | undefined;

  /**
   * The total number of buckets that allow the general public to have read access to the bucket.
   *
   * @public
   */
  publiclyReadable?: number | undefined;

  /**
   * The total number of buckets that allow the general public to have write access to the bucket.
   *
   * @public
   */
  publiclyWritable?: number | undefined;

  /**
   * The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. For example, the buckets' policies or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether the buckets are publicly accessible.
   *
   * @public
   */
  unknown?: number | undefined;
}

/**
 * Provides information about the number of S3 buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see [Setting default server-side encryption behavior for Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface BucketCountByEncryptionType {
  /**
   * The total number of buckets whose default encryption settings are configured to encrypt new objects with an KMS key, either an Amazon Web Services managed key or a customer managed key. By default, these buckets encrypt new objects automatically using DSSE-KMS or SSE-KMS encryption.
   *
   * @public
   */
  kmsManaged?: number | undefined;

  /**
   * The total number of buckets whose default encryption settings are configured to encrypt new objects with an Amazon S3 managed key. By default, these buckets encrypt new objects automatically using SSE-S3 encryption.
   *
   * @public
   */
  s3Managed?: number | undefined;

  /**
   * The total number of buckets that don't specify default server-side encryption behavior for new objects. Default encryption settings aren't configured for these buckets.
   *
   * @public
   */
  unencrypted?: number | undefined;

  /**
   * The total number of buckets that Amazon Macie doesn't have current encryption metadata for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the default encryption settings for the buckets.
   *
   * @public
   */
  unknown?: number | undefined;
}

/**
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an *Amazon Macie organization* is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.
 *
 * @public
 */
export interface BucketCountBySharedAccessType {
  /**
   * The total number of buckets that are shared with one or more of the following or any combination of the following: an Amazon CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't in the same Amazon Macie organization.
   *
   * @public
   */
  external?: number | undefined;

  /**
   * The total number of buckets that are shared with one or more Amazon Web Services accounts in the same Amazon Macie organization. These buckets aren't shared with Amazon CloudFront OAIs or OACs.
   *
   * @public
   */
  internal?: number | undefined;

  /**
   * The total number of buckets that aren't shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.
   *
   * @public
   */
  notShared?: number | undefined;

  /**
   * The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether the buckets are shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.
   *
   * @public
   */
  unknown?: number | undefined;
}

/**
 * Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.
 *
 * @public
 */
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * The total number of buckets that don't have a bucket policy or have a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, the policy doesn't require PutObject requests to include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.
   *
   * @public
   */
  allowsUnencryptedObjectUploads?: number | undefined;

  /**
   * The total number of buckets whose bucket policies require server-side encryption of new objects. PutObject requests for these buckets must include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.
   *
   * @public
   */
  deniesUnencryptedObjectUploads?: number | undefined;

  /**
   * The total number of buckets that Amazon Macie wasn't able to evaluate server-side encryption requirements for. For example, the buckets' permissions settings or a quota prevented Macie from retrieving the requisite data. Macie can't determine whether bucket policies for the buckets require server-side encryption of new objects.
   *
   * @public
   */
  unknown?: number | undefined;
}

/**
 * Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
 *
 * @public
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
   *
   * @public
   */
  eq?: string[] | undefined;

  /**
   * The value for the property is greater than the specified value.
   *
   * @public
   */
  gt?: number | undefined;

  /**
   * The value for the property is greater than or equal to the specified value.
   *
   * @public
   */
  gte?: number | undefined;

  /**
   * The value for the property is less than the specified value.
   *
   * @public
   */
  lt?: number | undefined;

  /**
   * The value for the property is less than or equal to the specified value.
   *
   * @public
   */
  lte?: number | undefined;

  /**
   * The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
   *
   * @public
   */
  neq?: string[] | undefined;

  /**
   * The name of the bucket begins with the specified value.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Specifies criteria for sorting the results of a query for information about S3 buckets.
 *
 * @public
 */
export interface BucketSortCriteria {
  /**
   * The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, sensitivityScore, or sizeInBytes.
   *
   * @public
   */
  attributeName?: string | undefined;

  /**
   * The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for most fields is 0.
 *
 * @public
 */
export interface SensitivityAggregations {
  /**
   * The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.
   *
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.
   *
   * @public
   */
  publiclyAccessibleCount?: number | undefined;

  /**
   * The total number of buckets.
   *
   * @public
   */
  totalCount?: number | undefined;

  /**
   * The total storage size, in bytes, of the buckets.
   *
   * If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.
   *
   * @public
   */
  totalSizeInBytes?: number | undefined;
}

/**
 * Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for most of these metrics is 0.
 *
 * @public
 */
export interface BucketStatisticsBySensitivity {
  /**
   * The aggregated statistical data for all buckets that have a sensitivity score of -1.
   *
   * @public
   */
  classificationError?: SensitivityAggregations | undefined;

  /**
   * The aggregated statistical data for all buckets that have a sensitivity score of 50.
   *
   * @public
   */
  notClassified?: SensitivityAggregations | undefined;

  /**
   * The aggregated statistical data for all buckets that have a sensitivity score of 1-49.
   *
   * @public
   */
  notSensitive?: SensitivityAggregations | undefined;

  /**
   * The aggregated statistical data for all buckets that have a sensitivity score of 51-100.
   *
   * @public
   */
  sensitive?: SensitivityAggregations | undefined;
}

/**
 * Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket. The bucket must be an existing general purpose bucket. It can be a bucket in your own account or a bucket that another account owns. If another account owns the bucket, you must specify both the unique identifier for the account and the name of the bucket.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The name of the bucket. This must be the name of an existing general purpose bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The unique identifier (ID) for the Amazon Web Services account that owns the bucket. This must be the ID for the account that owns the specified bucket.
   *
   * @public
   */
  expectedBucketOwner?: string | undefined;

  /**
   * The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.
   *
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key to use for encryption of the results. This must be the ARN of an existing, symmetric encryption KMS key that's enabled in the same Amazon Web Services Region as the bucket.
   *
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 general purpose bucket.
 *
 * @public
 */
export interface ClassificationExportConfiguration {
  /**
   * The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 */
export interface CreateAllowListRequest {
  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.
   *
   * @public
   */
  criteria: AllowListCriteria | undefined;

  /**
   * A custom description of the allow list. The description can contain as many as 512 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A custom name for the allow list. The name can contain as many as 128 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the allow list.
   *
   * An allow list can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAllowListResponse {
  /**
   * The Amazon Resource Name (ARN) of the allow list.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the allow list.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
 *
 * @public
 */
export interface JobScopingBlock {
  /**
   * An array of conditions, one for each property- or tag-based condition that determines which objects to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.
   *
   * @public
   */
  and?: JobScopeTerm[] | undefined;
}

/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
 *
 * @public
 */
export interface Scoping {
  /**
   * The property- and tag-based conditions that determine which objects to exclude from the analysis.
   *
   * @public
   */
  excludes?: JobScopingBlock | undefined;

  /**
   * The property- and tag-based conditions that determine which objects to include in the analysis.
   *
   * @public
   */
  includes?: JobScopingBlock | undefined;
}

/**
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
 *
 * @public
 */
export interface S3JobDefinition {
  /**
   * The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.
   *
   * @public
   */
  bucketCriteria?: S3BucketCriteriaForJob | undefined;

  /**
   * An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.
   *
   * @public
   */
  bucketDefinitions?: S3BucketDefinitionForJob[] | undefined;

  /**
   * The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.
   *
   * @public
   */
  scoping?: Scoping | undefined;
}

/**
 * Specifies that a classification job runs once a day, every day. This is an empty object.
 *
 * @public
 */
export interface DailySchedule {}

/**
 * Specifies a monthly recurrence pattern for running a classification job.
 *
 * @public
 */
export interface MonthlySchedule {
  /**
   * The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.
   *
   * If this value exceeds the number of days in a certain month, Macie doesn't run the job that month. Macie runs the job only during months that have the specified day. For example, if this value is 31 and a month has only 30 days, Macie doesn't run the job that month. To run the job every month, specify a value that's less than 29.
   *
   * @public
   */
  dayOfMonth?: number | undefined;
}

/**
 * Specifies a weekly recurrence pattern for running a classification job.
 *
 * @public
 */
export interface WeeklySchedule {
  /**
   * The day of the week when Amazon Macie runs the job.
   *
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;
}

/**
 * Specifies the recurrence pattern for running a classification job.
 *
 * @public
 */
export interface JobScheduleFrequency {
  /**
   * Specifies a daily recurrence pattern for running the job.
   *
   * @public
   */
  dailySchedule?: DailySchedule | undefined;

  /**
   * Specifies a monthly recurrence pattern for running the job.
   *
   * @public
   */
  monthlySchedule?: MonthlySchedule | undefined;

  /**
   * Specifies a weekly recurrence pattern for running the job.
   *
   * @public
   */
  weeklySchedule?: WeeklySchedule | undefined;
}

/**
 * @public
 */
export interface CreateClassificationJobRequest {
  /**
   * An array of unique identifiers, one for each allow list for the job to use when it analyzes data.
   *
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.
   *
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * A custom description of the job. The description can contain as many as 200 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.
   *
   * If you configure the job to run only once, don't specify a value for this property.
   *
   * @public
   */
  initialRun?: boolean | undefined;

  /**
   * The schedule for running the job. Valid values are:
   *
   * - ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.
   * - SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to specify the recurrence pattern for the job.
   *
   * @public
   */
  jobType: JobType | undefined;

  /**
   * An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).
   *
   * To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.
   *
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;

  /**
   * The selection type to apply when determining which managed data identifiers the job uses to analyze data. Valid values are:
   *
   * - ALL - Use all managed data identifiers. If you specify this value, don't specify any values for the managedDataIdentifierIds property.
   * - EXCLUDE - Use all managed data identifiers except the ones specified by the managedDataIdentifierIds property.
   * - INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.
   * - NONE - Don't use any managed data identifiers. If you specify this value, specify at least one value for the customDataIdentifierIds property and don't specify any values for the managedDataIdentifierIds property.
   * - RECOMMENDED (default) - Use the recommended set of managed data identifiers. If you specify this value, don't specify any values for the managedDataIdentifierIds property.
   *
   * If you don't specify a value for this property, the job uses the recommended set of managed data identifiers.
   *
   * If the job is a recurring job and you specify ALL or EXCLUDE, each job run automatically uses new managed data identifiers that are released. If you don't specify a value for this property or you specify RECOMMENDED for a recurring job, each job run automatically uses all the managed data identifiers that are in the recommended set when the run starts.
   *
   * To learn about individual managed data identifiers or determine which ones are in the recommended set, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) or [Recommended managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-mdis-recommended.html) in the *Amazon Macie User Guide*.
   *
   * @public
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | undefined;

  /**
   * A custom name for the job. The name can contain as many as 500 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The S3 buckets that contain the objects to analyze, and the scope of that analysis.
   *
   * @public
   */
  s3JobDefinition: S3JobDefinition | undefined;

  /**
   * The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
   *
   * @public
   */
  samplingPercentage?: number | undefined;

  /**
   * The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.
   *
   * @public
   */
  scheduleFrequency?: JobScheduleFrequency | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the job.
   *
   * A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateClassificationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  jobId?: string | undefined;
}

/**
 * Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that match the custom data identifier's detection criteria.
 *
 * @public
 */
export interface SeverityLevel {
  /**
   * The minimum number of occurrences of text that must match the custom data identifier's detection criteria in order to produce a finding with the specified severity (severity).
   *
   * @public
   */
  occurrencesThreshold: number | undefined;

  /**
   * The severity to assign to a finding: if the number of occurrences is greater than or equal to the specified threshold (occurrencesThreshold); and, if applicable, the number of occurrences is less than the threshold for the next consecutive severity level for the custom data identifier, moving from LOW to HIGH.
   *
   * @public
   */
  severity: DataIdentifierSeverity | undefined;
}

/**
 * @public
 */
export interface CreateCustomDataIdentifierRequest {
  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A custom description of the custom data identifier. The description can contain as many as 512 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array that lists specific character sequences (*ignore words*) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.
   *
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * An array that lists specific character sequences (*keywords*), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.
   *
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.
   *
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * A custom name for the custom data identifier. The name can contain as many as 128 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The regular expression (*regex*) that defines the pattern to match. The expression can contain as many as 512 characters.
   *
   * @public
   */
  regex: string | undefined;

  /**
   * The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that match the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.
   *
   * If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.
   *
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the custom data identifier.
   *
   * A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomDataIdentifierResponse {
  /**
   * The unique identifier for the custom data identifier that was created.
   *
   * @public
   */
  customDataIdentifierId?: string | undefined;
}

/**
 * Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see [Fundamentals of filtering findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface CriterionAdditionalProperties {
  /**
   * The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.
   *
   * @public
   */
  eq?: string[] | undefined;

  /**
   * The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.
   *
   * You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.
   *
   * @public
   */
  eqExactMatch?: string[] | undefined;

  /**
   * The value for the property is greater than the specified value.
   *
   * @public
   */
  gt?: number | undefined;

  /**
   * The value for the property is greater than or equal to the specified value.
   *
   * @public
   */
  gte?: number | undefined;

  /**
   * The value for the property is less than the specified value.
   *
   * @public
   */
  lt?: number | undefined;

  /**
   * The value for the property is less than or equal to the specified value.
   *
   * @public
   */
  lte?: number | undefined;

  /**
   * The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Macie uses OR logic to join the values.
   *
   * @public
   */
  neq?: string[] | undefined;
}

/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
 *
 * @public
 */
export interface FindingCriteria {
  /**
   * A condition that specifies the property, operator, and one or more values to use to filter the results.
   *
   * @public
   */
  criterion?: Record<string, CriterionAdditionalProperties> | undefined;
}

/**
 * @public
 */
export interface CreateFindingsFilterRequest {
  /**
   * The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
   *
   * @public
   */
  action: FindingsFilterAction | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A custom description of the filter. The description can contain as many as 512 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criteria to use to filter findings.
   *
   * @public
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
   *
   * @public
   */
  position?: number | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the filter.
   *
   * A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFindingsFilterResponse {
  /**
   * The Amazon Resource Name (ARN) of the filter that was created.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the filter that was created.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvitationsRequest {
  /**
   * An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.
   *
   * @public
   */
  disableEmailNotification?: boolean | undefined;

  /**
   * Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvitationsResponse {
  /**
   * An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.
   *
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface CreateMemberRequest {
  /**
   * The details of the account to associate with the administrator account.
   *
   * @public
   */
  account: AccountDetail | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.
   *
   * An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMemberResponse {
  /**
   * The Amazon Resource Name (ARN) of the account that was associated with the administrator account.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsRequest {
  /**
   * An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.
   *
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
   * An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.
   *
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteAllowListRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.
   *
   * When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.
   *
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
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
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
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
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
   * An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.
   *
   * @public
   */
  unprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteMemberRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
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
   * The criteria to use to filter the query results.
   *
   * @public
   */
  criteria?: Record<string, BucketCriteriaAdditionalProperties> | undefined;

  /**
   * The maximum number of items to include in each page of the response. The default value is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria to use to sort the query results.
   *
   * @public
   */
  sortCriteria?: BucketSortCriteria | undefined;
}

/**
 * @public
 */
export interface DescribeBucketsResponse {
  /**
   * An array of objects, one for each bucket that matches the filter criteria specified in the request.
   *
   * @public
   */
  buckets?: BucketMetadata[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassificationJobRequest {
  /**
   * The unique identifier for the classification job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Provides processing statistics for a classification job.
 *
 * @public
 */
export interface Statistics {
  /**
   * The approximate number of objects that the job has yet to process during its current run.
   *
   * @public
   */
  approximateNumberOfObjectsToProcess?: number | undefined;

  /**
   * The number of times that the job has run.
   *
   * @public
   */
  numberOfRuns?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClassificationJobResponse {
  /**
   * An array of unique identifiers, one for each allow list that the job is configured to use when it analyzes data.
   *
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * The token that was provided to ensure the idempotency of the request to create the job.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An array of unique identifiers, one for each custom data identifier that the job is configured to use when it analyzes data. This value is null if the job is configured to use only managed data identifiers to analyze data.
   *
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * The custom description of the job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * For a recurring job, specifies whether you configured the job to analyze all existing, eligible objects immediately after the job was created (true). If you configured the job to analyze only those objects that were created or changed after the job was created and before the job's first scheduled run, this value is false. This value is also false for a one-time job.
   *
   * @public
   */
  initialRun?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The current status of the job. Possible values are:
   *
   * - CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.
   * - COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.
   * - IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.
   * - PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.
   * - RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.
   * - USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
   *
   * @public
   */
  jobStatus?: JobStatus | undefined;

  /**
   * The schedule for running the job. Possible values are:
   *
   * - ONE_TIME - The job runs only once.
   * - SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.
   *
   * @public
   */
  lastRunErrorStatus?: LastRunErrorStatus | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started or, if the job hasn't run yet, when the job was created.
   *
   * @public
   */
  lastRunTime?: Date | undefined;

  /**
   * An array of unique identifiers, one for each managed data identifier that the job is explicitly configured to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type specified for the job (managedDataIdentifierSelector).
   *
   * This value is null if the job's managed data identifier selection type is ALL, NONE, or RECOMMENDED.
   *
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;

  /**
   * The selection type that determines which managed data identifiers the job uses when it analyzes data. Possible values are:
   *
   * - ALL - Use all managed data identifiers.
   * - EXCLUDE - Use all managed data identifiers except the ones specified by the managedDataIdentifierIds property.
   * - INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.
   * - NONE - Don't use any managed data identifiers. Use only custom data identifiers (customDataIdentifierIds).
   * - RECOMMENDED (default) - Use the recommended set of managed data identifiers.
   *
   * If this value is null, the job uses the recommended set of managed data identifiers.
   *
   * If the job is a recurring job and this value is ALL or EXCLUDE, each job run automatically uses new managed data identifiers that are released. If this value is null or RECOMMENDED for a recurring job, each job run uses all the managed data identifiers that are in the recommended set when the run starts.
   *
   * To learn about individual managed data identifiers or determine which ones are in the recommended set, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) or [Recommended managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-mdis-recommended.html) in the *Amazon Macie User Guide*.
   *
   * @public
   */
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector | undefined;

  /**
   * The custom name of the job.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The S3 buckets that contain the objects to analyze, and the scope of that analysis.
   *
   * @public
   */
  s3JobDefinition?: S3JobDefinition | undefined;

  /**
   * The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.
   *
   * @public
   */
  samplingPercentage?: number | undefined;

  /**
   * The recurrence pattern for running the job. This value is null if the job is configured to run only once.
   *
   * @public
   */
  scheduleFrequency?: JobScheduleFrequency | undefined;

  /**
   * The number of times that the job has run and processing statistics for the job's current run.
   *
   * @public
   */
  statistics?: Statistics | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.
   *
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
   * Specifies whether Amazon Macie is enabled automatically for accounts that are added to the organization.
   *
   * @public
   */
  autoEnable?: boolean | undefined;

  /**
   * Specifies whether the maximum number of Amazon Macie member accounts are part of the organization.
   *
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
   * The Amazon Web Services account ID of the delegated Amazon Macie administrator account.
   *
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
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
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
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).
   *
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * Specifies the new status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to ENABLED.
   *
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
   * The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
   *
   * @public
   */
  adminAccountId: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
 *
 * @public
 */
export interface FindingStatisticsSortCriteria {
  /**
   * The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.
   *
   * @public
   */
  attributeName?: FindingStatisticsSortAttributeName | undefined;

  /**
   * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
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
   * The Amazon Web Services account ID for the administrator account. If the accounts are associated by an Amazon Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.
   *
   * @public
   */
  administrator?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetAllowListRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAllowListResponse {
  /**
   * The Amazon Resource Name (ARN) of the allow list.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.
   *
   * @public
   */
  criteria?: AllowListCriteria | undefined;

  /**
   * The custom description of the allow list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the allow list.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the allow list.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the allow list, which indicates whether Amazon Macie can access and use the list's criteria.
   *
   * @public
   */
  status?: AllowListStatus | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the allow list.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.
   *
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
   * Specifies whether automated sensitive data discovery is enabled automatically for accounts in the organization. Possible values are: ALL, enable it for all existing accounts and new member accounts; NEW, enable it only for new member accounts; and, NONE, don't enable it for any accounts.
   *
   * @public
   */
  autoEnableOrganizationMembers?: AutoEnableMode | undefined;

  /**
   * The unique identifier for the classification scope that's used when performing automated sensitive data discovery. The classification scope specifies S3 buckets to exclude from analyses.
   *
   * @public
   */
  classificationScopeId?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently disabled. This value is null if automated sensitive data discovery is currently enabled.
   *
   * @public
   */
  disabledAt?: Date | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was initially enabled. This value is null if automated sensitive data discovery has never been enabled.
   *
   * @public
   */
  firstEnabledAt?: Date | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the configuration settings or status of automated sensitive data discovery was most recently changed.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The unique identifier for the sensitivity inspection template that's used when performing automated sensitive data discovery. The template specifies which allow lists, custom data identifiers, and managed data identifiers to use when analyzing data.
   *
   * @public
   */
  sensitivityInspectionTemplateId?: string | undefined;

  /**
   * The current status of automated sensitive data discovery for the organization or account. Possible values are: ENABLED, use the specified settings to perform automated sensitive data discovery activities; and, DISABLED, don't perform automated sensitive data discovery activities.
   *
   * @public
   */
  status?: AutomatedDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketStatisticsRequest {
  /**
   * The unique identifier for the Amazon Web Services account.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketStatisticsResponse {
  /**
   * The total number of buckets.
   *
   * @public
   */
  bucketCount?: number | undefined;

  /**
   * The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.
   *
   * @public
   */
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission | undefined;

  /**
   * The total number of buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets.
   *
   * @public
   */
  bucketCountByEncryptionType?: BucketCountByEncryptionType | undefined;

  /**
   * The total number of buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.
   *
   * @public
   */
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads | undefined;

  /**
   * The total number of buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs).
   *
   * @public
   */
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType | undefined;

  /**
   * The aggregated sensitive data discovery statistics for the buckets. If automated sensitive data discovery is currently disabled for your account, the value for most statistics is 0.
   *
   * @public
   */
  bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity | undefined;

  /**
   * The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * @public
   */
  classifiableObjectCount?: number | undefined;

  /**
   * The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.
   *
   * If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.
   *
   * @public
   */
  classifiableSizeInBytes?: number | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the buckets.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * The total number of objects in the buckets.
   *
   * @public
   */
  objectCount?: number | undefined;

  /**
   * The total storage size, in bytes, of the buckets.
   *
   * If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.
   *
   * @public
   */
  sizeInBytes?: number | undefined;

  /**
   * The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets.
   *
   * If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.
   *
   * @public
   */
  sizeInBytesCompressed?: number | undefined;

  /**
   * The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
   * @public
   */
  unclassifiableObjectCount?: ObjectLevelStatistics | undefined;

  /**
   * The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
   *
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
   * The location where data classification results are stored, and the encryption settings that are used when storing results in that location.
   *
   * @public
   */
  configuration?: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface GetClassificationScopeRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery.
 *
 * @public
 */
export interface S3ClassificationScopeExclusion {
  /**
   * An array of strings, one for each S3 bucket that is excluded. Each string is the full name of an excluded bucket.
   *
   * @public
   */
  bucketNames: string[] | undefined;
}

/**
 * Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.
 *
 * @public
 */
export interface S3ClassificationScope {
  /**
   * The S3 buckets that are excluded.
   *
   * @public
   */
  excludes: S3ClassificationScopeExclusion | undefined;
}

/**
 * @public
 */
export interface GetClassificationScopeResponse {
  /**
   * The unique identifier for the classification scope.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the classification scope: automated-sensitive-data-discovery.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The S3 buckets that are excluded from automated sensitive data discovery.
   *
   * @public
   */
  s3?: S3ClassificationScope | undefined;
}

/**
 * @public
 */
export interface GetCustomDataIdentifierRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetCustomDataIdentifierResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom data identifier.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * The custom description of the custom data identifier.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the custom data identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An array that lists specific character sequences (*ignore words*) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.
   *
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * An array that lists specific character sequences (*keywords*), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.
   *
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. Otherwise, Macie excludes the result.
   *
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * The custom name of the custom data identifier.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The regular expression (*regex*) that defines the pattern to match.
   *
   * @public
   */
  regex?: string | undefined;

  /**
   * Specifies the severity that's assigned to findings that the custom data identifier produces, based on the number of occurrences of text that match the custom data identifier's detection criteria. By default, Amazon Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.
   *
   * @public
   */
  severityLevels?: SeverityLevel[] | undefined;

  /**
   * A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Specifies criteria for sorting the results of a request for findings.
 *
 * @public
 */
export interface SortCriteria {
  /**
   * The name of the property to sort the results by. Valid values are: count, createdAt, policyDetails.action.apiCallDetails.firstSeen, policyDetails.action.apiCallDetails.lastSeen, resourcesAffected, severity.score, type, and updatedAt.
   *
   * @public
   */
  attributeName?: string | undefined;

  /**
   * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.
   *
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * The criteria for sorting the results of the request.
   *
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * An array of objects, one for each finding that matches the criteria specified in the request.
   *
   * @public
   */
  findings?: Finding[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsFilterRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsFilterResponse {
  /**
   * The action that's performed on findings that match the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
   *
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * The Amazon Resource Name (ARN) of the filter.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The custom description of the filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criteria that's used to filter findings.
   *
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * The unique identifier for the filter.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The custom name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
   *
   * @public
   */
  position?: number | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFindingsPublicationConfigurationRequest {}

/**
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see [Evaluating findings with Security Hub](https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface SecurityHubConfiguration {
  /**
   * Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.
   *
   * @public
   */
  publishClassificationFindings: boolean | undefined;

  /**
   * Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.
   *
   * @public
   */
  publishPolicyFindings: boolean | undefined;
}

/**
 * @public
 */
export interface GetFindingsPublicationConfigurationResponse {
  /**
   * The configuration settings that determine which findings are published to Security Hub.
   *
   * @public
   */
  securityHubConfiguration?: SecurityHubConfiguration | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsRequest {
  /**
   * The criteria to use to filter the query results.
   *
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * The finding property to use to group the query results. Valid values are:
   *
   * - classificationDetails.jobId - The unique identifier for the classification job that produced the finding.
   * - resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.
   * - severity.description - The severity level of the finding, such as High or Medium.
   * - type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.
   *
   * @public
   */
  groupBy: GroupBy | undefined;

  /**
   * The maximum number of items to include in each page of the response.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The criteria to use to sort the query results.
   *
   * @public
   */
  sortCriteria?: FindingStatisticsSortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsResponse {
  /**
   * An array of objects, one for each group of findings that matches the filter criteria specified in the request.
   *
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
   * The total number of invitations that were received by the account, not including the currently accepted invitation.
   *
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
   * The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).
   *
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in Amazon Web Services resources for the account.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Macie activities are enabled for the account.
   *
   * @public
   */
  status?: MacieStatus | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status or configuration settings for the Amazon Macie account.
   *
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
   * (Deprecated) The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.
   *
   * @public
   */
  master?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services account ID for the administrator account.
   *
   * @public
   */
  administratorAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The email address for the account. This value is null if the account is associated with the administrator account through Organizations.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.
   *
   * @public
   */
  invitedAt?: Date | undefined;

  /**
   * (Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.
   *
   * @public
   */
  masterAccountId?: string | undefined;

  /**
   * The current status of the relationship between the account and the administrator account.
   *
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceProfileRequest {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for an account, if automated sensitive data discovery has been enabled for the account. The data captures the results of automated sensitive data discovery activities that Macie has performed for the bucket.
 *
 * @public
 */
export interface ResourceStatistics {
  /**
   * The total amount of data, in bytes, that Amazon Macie has analyzed in the bucket.
   *
   * @public
   */
  totalBytesClassified?: number | undefined;

  /**
   * The total number of occurrences of sensitive data that Amazon Macie has found in the bucket's objects. This includes occurrences that are currently suppressed by the sensitivity scoring settings for the bucket (totalDetectionsSuppressed).
   *
   * @public
   */
  totalDetections?: number | undefined;

  /**
   * The total number of occurrences of sensitive data that are currently suppressed by the sensitivity scoring settings for the bucket. These represent occurrences of sensitive data that Amazon Macie found in the bucket's objects, but the occurrences were manually suppressed. By default, suppressed occurrences are excluded from the bucket's sensitivity score.
   *
   * @public
   */
  totalDetectionsSuppressed?: number | undefined;

  /**
   * The total number of objects that Amazon Macie has analyzed in the bucket.
   *
   * @public
   */
  totalItemsClassified?: number | undefined;

  /**
   * The total number of the bucket's objects that Amazon Macie has found sensitive data in.
   *
   * @public
   */
  totalItemsSensitive?: number | undefined;

  /**
   * The total number of objects that Amazon Macie wasn't able to analyze in the bucket due to an object-level issue or error. For example, an object is a malformed file. This value includes objects that Macie wasn't able to analyze for reasons reported by other statistics in the ResourceStatistics object.
   *
   * @public
   */
  totalItemsSkipped?: number | undefined;

  /**
   * The total number of objects that Amazon Macie wasn't able to analyze in the bucket because the objects are encrypted with a key that Macie can't access. The objects use server-side encryption with customer-provided keys (SSE-C).
   *
   * @public
   */
  totalItemsSkippedInvalidEncryption?: number | undefined;

  /**
   * The total number of objects that Amazon Macie wasn't able to analyze in the bucket because the objects are encrypted with KMS keys that were disabled, are scheduled for deletion, or were deleted.
   *
   * @public
   */
  totalItemsSkippedInvalidKms?: number | undefined;

  /**
   * The total number of objects that Amazon Macie wasn't able to analyze in the bucket due to the permissions settings for the objects or the permissions settings for the keys that were used to encrypt the objects.
   *
   * @public
   */
  totalItemsSkippedPermissionDenied?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceProfileResponse {
  /**
   * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently recalculated sensitive data discovery statistics and details for the bucket. If the bucket's sensitivity score is calculated automatically, this includes the score.
   *
   * @public
   */
  profileUpdatedAt?: Date | undefined;

  /**
   * The current sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). By default, this score is calculated automatically based on the amount of data that Amazon Macie has analyzed in the bucket and the amount of sensitive data that Macie has found in the bucket.
   *
   * @public
   */
  sensitivityScore?: number | undefined;

  /**
   * Specifies whether the bucket's current sensitivity score was set manually. If this value is true, the score was manually changed to 100. If this value is false, the score was calculated automatically by Amazon Macie.
   *
   * @public
   */
  sensitivityScoreOverridden?: boolean | undefined;

  /**
   * The sensitive data discovery statistics for the bucket. The statistics capture the results of automated sensitive data discovery activities that Amazon Macie has performed for the bucket.
   *
   * @public
   */
  statistics?: ResourceStatistics | undefined;
}

/**
 * @public
 */
export interface GetRevealConfigurationRequest {}

/**
 * Specifies the status of the Amazon Macie configuration for retrieving occurrences of sensitive data reported by findings, and the Key Management Service (KMS) key to use to encrypt sensitive data that's retrieved. When you enable the configuration for the first time, your request must specify an KMS key. Otherwise, an error occurs.
 *
 * @public
 */
export interface RevealConfiguration {
  /**
   * The Amazon Resource Name (ARN), ID, or alias of the KMS key to use to encrypt sensitive data that's retrieved. The key must be an existing, customer managed, symmetric encryption key that's enabled in the same Amazon Web Services Region as the Amazon Macie account.
   *
   * If this value specifies an alias, it must include the following prefix: alias/. If this value specifies a key that's owned by another Amazon Web Services account, it must specify the ARN of the key or the ARN of the key's alias.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The status of the configuration for the Amazon Macie account. In a response, possible values are: ENABLED, the configuration is currently enabled for the account; and, DISABLED, the configuration is currently disabled for the account. In a request, valid values are: ENABLED, enable the configuration for the account; and, DISABLED, disable the configuration for the account.
   *
   * > **Important:** If you disable the configuration, you also permanently delete current settings that specify how to access affected S3 objects. If your current access method is ASSUME_ROLE, Macie also deletes the external ID and role name currently specified for the configuration. These settings can't be recovered after they're deleted.
   *
   * @public
   */
  status: RevealStatus | undefined;
}

/**
 * Provides information about the access method and settings that are used to retrieve occurrences of sensitive data reported by findings.
 *
 * @public
 */
export interface RetrievalConfiguration {
  /**
   * The external ID to specify in the trust policy for the IAM role to assume when retrieving sensitive data from affected S3 objects (roleName). This value is null if the value for retrievalMode is CALLER_CREDENTIALS.
   *
   * This ID is a unique alphanumeric string that Amazon Macie generates automatically after you configure it to assume an IAM role. For a Macie administrator to retrieve sensitive data from an affected S3 object for a member account, the trust policy for the role in the member account must include an sts:ExternalId condition that requires this ID.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The access method that's used to retrieve sensitive data from affected S3 objects. Valid values are: ASSUME_ROLE, assume an IAM role that is in the affected Amazon Web Services account and delegates access to Amazon Macie (roleName); and, CALLER_CREDENTIALS, use the credentials of the IAM user who requests the sensitive data.
   *
   * @public
   */
  retrievalMode: RetrievalMode | undefined;

  /**
   * The name of the IAM role that is in the affected Amazon Web Services account and Amazon Macie is allowed to assume when retrieving sensitive data from affected S3 objects for the account. This value is null if the value for retrievalMode is CALLER_CREDENTIALS.
   *
   * @public
   */
  roleName?: string | undefined;
}

/**
 * @public
 */
export interface GetRevealConfigurationResponse {
  /**
   * The KMS key that's used to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.
   *
   * @public
   */
  configuration?: RevealConfiguration | undefined;

  /**
   * The access method and settings that are used to retrieve the sensitive data.
   *
   * @public
   */
  retrievalConfiguration?: RetrievalConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesRequest {
  /**
   * The unique identifier for the finding.
   *
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesResponse {
  /**
   * If an error occurred when Amazon Macie attempted to retrieve occurrences of sensitive data reported by the finding, a description of the error that occurred. This value is null if the status (status) of the request is PROCESSING or SUCCESS.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A map that specifies 1-100 types of sensitive data reported by the finding and, for each type, 1-10 occurrences of sensitive data.
   *
   * @public
   */
  sensitiveDataOccurrences?: Record<string, DetectedDataDetails[]> | undefined;

  /**
   * The status of the request to retrieve occurrences of sensitive data reported by the finding. Possible values are:
   *
   * - ERROR - An error occurred when Amazon Macie attempted to locate, retrieve, or encrypt the sensitive data. The error value indicates the nature of the error that occurred.
   * - PROCESSING - Macie is processing the request.
   * - SUCCESS - Macie successfully located, retrieved, and encrypted the sensitive data.
   *
   * @public
   */
  status?: RevealRequestStatus | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  /**
   * The unique identifier for the finding.
   *
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface GetSensitiveDataOccurrencesAvailabilityResponse {
  /**
   * Specifies whether occurrences of sensitive data can be retrieved for the finding. Possible values are: AVAILABLE, the sensitive data can be retrieved; and, UNAVAILABLE, the sensitive data can't be retrieved. If this value is UNAVAILABLE, the reasons array indicates why the data can't be retrieved.
   *
   * @public
   */
  code?: AvailabilityCode | undefined;

  /**
   * Specifies why occurrences of sensitive data can't be retrieved for the finding. Possible values are:
   *
   * - ACCOUNT_NOT_IN_ORGANIZATION - The affected account isn't currently part of your organization. Or the account is part of your organization but Macie isn't currently enabled for the account. You're not allowed to access the affected S3 object by using Macie.
   * - INVALID_CLASSIFICATION_RESULT - There isn't a corresponding sensitive data discovery result for the finding. Or the corresponding sensitive data discovery result isn't available in the current Amazon Web Services Region, is malformed or corrupted, or uses an unsupported storage format. Macie can't verify the location of the sensitive data to retrieve.
   * - INVALID_RESULT_SIGNATURE - The corresponding sensitive data discovery result is stored in an S3 object that wasn't signed by Macie. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve.
   * - MEMBER_ROLE_TOO_PERMISSIVE - The trust or permissions policy for the IAM role in the affected member account doesn't meet Macie requirements for restricting access to the role. Or the role's trust policy doesn't specify the correct external ID for your organization. Macie can't assume the role to retrieve the sensitive data.
   * - MISSING_GET_MEMBER_PERMISSION - You're not allowed to retrieve information about the association between your account and the affected account. Macie can't determine whether you’re allowed to access the affected S3 object as the delegated Macie administrator for the affected account.
   * - OBJECT_EXCEEDS_SIZE_QUOTA - The storage size of the affected S3 object exceeds the size quota for retrieving occurrences of sensitive data from this type of file.
   * - OBJECT_UNAVAILABLE - The affected S3 object isn't available. The object was renamed, moved, deleted, or changed after Macie created the finding. Or the object is encrypted with an KMS key that isn’t available. For example, the key is disabled, is scheduled for deletion, or was deleted.
   * - RESULT_NOT_SIGNED - The corresponding sensitive data discovery result is stored in an S3 object that hasn't been signed. Macie can't verify the integrity and authenticity of the sensitive data discovery result. Therefore, Macie can't verify the location of the sensitive data to retrieve.
   * - ROLE_TOO_PERMISSIVE - Your account is configured to retrieve occurrences of sensitive data by using an IAM role whose trust or permissions policy doesn't meet Macie requirements for restricting access to the role. Macie can’t assume the role to retrieve the sensitive data.
   * - UNSUPPORTED_FINDING_TYPE - The specified finding isn't a sensitive data finding.
   * - UNSUPPORTED_OBJECT_TYPE - The affected S3 object uses a file or storage format that Macie doesn't support for retrieving occurrences of sensitive data.
   *
   * This value is null if sensitive data can be retrieved for the finding.
   *
   * @public
   */
  reasons?: UnavailabilityReasonCode[] | undefined;
}

/**
 * @public
 */
export interface GetSensitivityInspectionTemplateRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery. For information about the managed data identifiers that Amazon Macie currently provides, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface SensitivityInspectionTemplateExcludes {
  /**
   * An array of unique identifiers, one for each managed data identifier to exclude. To retrieve a list of valid values, use the ListManagedDataIdentifiers operation.
   *
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;
}

/**
 * Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see [Using managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface SensitivityInspectionTemplateIncludes {
  /**
   * An array of unique identifiers, one for each allow list to include.
   *
   * @public
   */
  allowListIds?: string[] | undefined;

  /**
   * An array of unique identifiers, one for each custom data identifier to include.
   *
   * @public
   */
  customDataIdentifierIds?: string[] | undefined;

  /**
   * An array of unique identifiers, one for each managed data identifier to include.
   *
   * Amazon Macie uses these managed data identifiers in addition to managed data identifiers that are subsequently released and recommended for automated sensitive data discovery. To retrieve a list of valid values for the managed data identifiers that are currently available, use the ListManagedDataIdentifiers operation.
   *
   *  <para/>
   * @public
   */
  managedDataIdentifierIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetSensitivityInspectionTemplateResponse {
  /**
   * The custom description of the template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The managed data identifiers that are explicitly excluded (not used) when performing automated sensitive data discovery.
   *
   * @public
   */
  excludes?: SensitivityInspectionTemplateExcludes | undefined;

  /**
   * The allow lists, custom data identifiers, and managed data identifiers that are explicitly included (used) when performing automated sensitive data discovery.
   *
   * @public
   */
  includes?: SensitivityInspectionTemplateIncludes | undefined;

  /**
   * The name of the template: automated-sensitive-data-discovery.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier for the template.
   *
   * @public
   */
  sensitivityInspectionTemplateId?: string | undefined;
}

/**
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
 *
 * @public
 */
export interface UsageStatisticsSortBy {
  /**
   * The field to sort the results by.
   *
   * @public
   */
  key?: UsageStatisticsSortKey | undefined;

  /**
   * The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsRequest {
  /**
   * An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.
   *
   * @public
   */
  filterBy?: UsageStatisticsFilter[] | undefined;

  /**
   * The maximum number of items to include in each page of the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria to use to sort the query results.
   *
   * @public
   */
  sortBy?: UsageStatisticsSortBy | undefined;

  /**
   * The inclusive time period to query usage data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value, Amazon Macie provides usage data for the preceding 30 days.
   *
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsResponse {
  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that contains the results of the query. Each object contains the data for an account that matches the filter criteria specified in the request.
   *
   * @public
   */
  records?: UsageRecord[] | undefined;

  /**
   * The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.
   *
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * @public
 */
export interface GetUsageTotalsRequest {
  /**
   * The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.
   *
   * @public
   */
  timeRange?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageTotalsResponse {
  /**
   * The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.
   *
   * @public
   */
  timeRange?: TimeRange | undefined;

  /**
   * An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.
   *
   * @public
   */
  usageTotals?: UsageTotal[] | undefined;
}

/**
 * @public
 */
export interface ListAllowListsRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAllowListsResponse {
  /**
   * An array of objects, one for each allow list.
   *
   * @public
   */
  allowLists?: AllowListSummary[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedDiscoveryAccountsRequest {
  /**
   * The Amazon Web Services account ID for each account, for as many as 50 accounts. To retrieve the status for multiple accounts, append the accountIds parameter and argument for each account, separated by an ampersand (&amp;). To retrieve the status for all the accounts in an organization, omit this parameter.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedDiscoveryAccountsResponse {
  /**
   * An array of objects, one for each account specified in the request. Each object specifies the Amazon Web Services account ID for an account and the current status of automated sensitive data discovery for that account.
   *
   * @public
   */
  items?: AutomatedDiscoveryAccount[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies criteria for filtering the results of a request for information about classification jobs.
 *
 * @public
 */
export interface ListJobsFilterCriteria {
  /**
   * An array of objects, one for each condition that determines which jobs to exclude from the results.
   *
   * @public
   */
  excludes?: ListJobsFilterTerm[] | undefined;

  /**
   * An array of objects, one for each condition that determines which jobs to include in the results.
   *
   * @public
   */
  includes?: ListJobsFilterTerm[] | undefined;
}

/**
 * Specifies criteria for sorting the results of a request for information about classification jobs.
 *
 * @public
 */
export interface ListJobsSortCriteria {
  /**
   * The property to sort the results by.
   *
   * @public
   */
  attributeName?: ListJobsSortAttributeName | undefined;

  /**
   * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface ListClassificationJobsRequest {
  /**
   * The criteria to use to filter the results.
   *
   * @public
   */
  filterCriteria?: ListJobsFilterCriteria | undefined;

  /**
   * The maximum number of items to include in each page of the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria to use to sort the results.
   *
   * @public
   */
  sortCriteria?: ListJobsSortCriteria | undefined;
}

/**
 * @public
 */
export interface ListClassificationJobsResponse {
  /**
   * An array of objects, one for each job that matches the filter criteria specified in the request.
   *
   * @public
   */
  items?: JobSummary[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClassificationScopesRequest {
  /**
   * The name of the classification scope to retrieve the unique identifier for.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClassificationScopesResponse {
  /**
   * An array that specifies the unique identifier and name of the classification scope for the account.
   *
   * @public
   */
  classificationScopes?: ClassificationScopeSummary[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDataIdentifiersRequest {
  /**
   * The maximum number of items to include in each page of the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDataIdentifiersResponse {
  /**
   * An array of objects, one for each custom data identifier.
   *
   * @public
   */
  items?: CustomDataIdentifierSummary[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * The criteria to use to filter the results.
   *
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * The maximum number of items to include in each page of the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria to use to sort the results.
   *
   * @public
   */
  sortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * An array of strings, where each string is the unique identifier for a finding that matches the filter criteria specified in the request.
   *
   * @public
   */
  findingIds?: string[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsFiltersRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsFiltersResponse {
  /**
   * An array of objects, one for each filter that's associated with the account.
   *
   * @public
   */
  findingsFilterListItems?: FindingsFilterListItem[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * An array of objects, one for each invitation that was received by the account.
   *
   * @public
   */
  invitations?: Invitation[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedDataIdentifiersRequest {
  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedDataIdentifiersResponse {
  /**
   * An array of objects, one for each managed data identifier.
   *
   * @public
   */
  items?: ManagedDataIdentifierSummary[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.
   *
   * @public
   */
  onlyAssociated?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * An array of objects, one for each account that's associated with the administrator account and matches the criteria specified in the request.
   *
   * @public
   */
  members?: Member[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.
   *
   * @public
   */
  adminAccounts?: AdminAccount[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileArtifactsRequest {
  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileArtifactsResponse {
  /**
   * An array of objects, one for each of 1-100 S3 objects that Amazon Macie selected for analysis.
   *
   * If Macie has analyzed more than 100 objects in the bucket, Macie populates the array based on the value for the ResourceProfileArtifact.sensitive field for an object: true (sensitive), followed by false (not sensitive). Macie then populates any remaining items in the array with information about objects where the value for the ResourceProfileArtifact.classificationResultStatus field is SKIPPED.
   *
   * @public
   */
  artifacts?: ResourceProfileArtifact[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileDetectionsRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListResourceProfileDetectionsResponse {
  /**
   * An array of objects, one for each type of sensitive data that Amazon Macie found in the bucket. Each object reports the number of occurrences of the specified type and provides information about the custom data identifier or managed data identifier that detected the data.
   *
   * @public
   */
  detections?: Detection[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensitivityInspectionTemplatesRequest {
  /**
   * The maximum number of items to include in each page of a paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensitivityInspectionTemplatesResponse {
  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array that specifies the unique identifier and name of the sensitivity inspection template for the account.
   *
   * @public
   */
  sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of key-value pairs that specifies which tags (keys and values) are associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutClassificationExportConfigurationRequest {
  /**
   * The location to store data classification results in, and the encryption settings to use when storing results in that location.
   *
   * @public
   */
  configuration: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface PutClassificationExportConfigurationResponse {
  /**
   * The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.
   *
   * @public
   */
  configuration?: ClassificationExportConfiguration | undefined;
}

/**
 * @public
 */
export interface PutFindingsPublicationConfigurationRequest {
  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration settings that determine which findings to publish to Security Hub.
   *
   * @public
   */
  securityHubConfiguration?: SecurityHubConfiguration | undefined;
}

/**
 * @public
 */
export interface PutFindingsPublicationConfigurationResponse {}

/**
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
 *
 * @public
 */
export interface SearchResourcesCriteriaBlock {
  /**
   * An array of objects, one for each property- or tag-based condition that includes or excludes resources from the query results. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.
   *
   * @public
   */
  and?: SearchResourcesCriteria[] | undefined;
}

/**
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
 *
 * @public
 */
export interface SearchResourcesBucketCriteria {
  /**
   * The property- and tag-based conditions that determine which buckets to exclude from the results.
   *
   * @public
   */
  excludes?: SearchResourcesCriteriaBlock | undefined;

  /**
   * The property- and tag-based conditions that determine which buckets to include in the results.
   *
   * @public
   */
  includes?: SearchResourcesCriteriaBlock | undefined;
}

/**
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
 *
 * @public
 */
export interface SearchResourcesSortCriteria {
  /**
   * The property to sort the results by.
   *
   * @public
   */
  attributeName?: SearchResourcesSortAttributeName | undefined;

  /**
   * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface SearchResourcesRequest {
  /**
   * The filter conditions that determine which S3 buckets to include or exclude from the query results.
   *
   * @public
   */
  bucketCriteria?: SearchResourcesBucketCriteria | undefined;

  /**
   * The maximum number of items to include in each page of the response. The default value is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken string that specifies which page of results to return in a paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria to use to sort the results.
   *
   * @public
   */
  sortCriteria?: SearchResourcesSortCriteria | undefined;
}

/**
 * @public
 */
export interface SearchResourcesResponse {
  /**
   * An array of objects, one for each resource that matches the filter criteria specified in the request.
   *
   * @public
   */
  matchingResources?: MatchingResource[] | undefined;

  /**
   * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of key-value pairs that specifies the tags to associate with the resource.
   *
   * A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
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
   * An array that lists specific character sequences (*ignore words*) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.
   *
   * @public
   */
  ignoreWords?: string[] | undefined;

  /**
   * An array that lists specific character sequences (*keywords*), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.
   *
   * @public
   */
  keywords?: string[] | undefined;

  /**
   * The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.
   *
   * @public
   */
  maximumMatchDistance?: number | undefined;

  /**
   * The regular expression (*regex*) that defines the pattern to match. The expression can contain as many as 512 characters.
   *
   * @public
   */
  regex: string | undefined;

  /**
   * The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.
   *
   * @public
   */
  sampleText: string | undefined;
}

/**
 * @public
 */
export interface TestCustomDataIdentifierResponse {
  /**
   * The number of occurrences of sample text that matched the criteria specified by the custom data identifier.
   *
   * @public
   */
  matchCount?: number | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).
   *
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
   * The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression that defines a text pattern to ignore (regex).
   *
   * You can change a list's underlying criteria, such as the name of the S3 object or the regular expression to use. However, you can't change the type from s3WordsList to regex or the other way around.
   *
   * @public
   */
  criteria: AllowListCriteria | undefined;

  /**
   * A custom description of the allow list. The description can contain as many as 512 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A custom name for the allow list. The name can contain as many as 128 characters.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UpdateAllowListResponse {
  /**
   * The Amazon Resource Name (ARN) of the allow list.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the allow list.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedDiscoveryConfigurationRequest {
  /**
   * Specifies whether to automatically enable automated sensitive data discovery for accounts in the organization. Valid values are: ALL (default), enable it for all existing accounts and new member accounts; NEW, enable it only for new member accounts; and, NONE, don't enable it for any accounts.
   *
   * If you specify NEW or NONE, automated sensitive data discovery continues to be enabled for any existing accounts that it's currently enabled for. To enable or disable it for individual member accounts, specify NEW or NONE, and then enable or disable it for each account by using the BatchUpdateAutomatedDiscoveryAccounts operation.
   *
   * @public
   */
  autoEnableOrganizationMembers?: AutoEnableMode | undefined;

  /**
   * The new status of automated sensitive data discovery for the organization or account. Valid values are: ENABLED, start or resume all automated sensitive data discovery activities; and, DISABLED, stop performing all automated sensitive data discovery activities.
   *
   * If you specify DISABLED for an administrator account, you also disable automated sensitive data discovery for all member accounts in the organization.
   *
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
   * The unique identifier for the classification job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The new status for the job. Valid values are:
   *
   * - CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.
   *
   *   If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.
   * - RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.
   *
   *   If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.
   * - USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.
   *
   *   If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * @public
 */
export interface UpdateClassificationJobResponse {}

/**
 * Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.
 *
 * @public
 */
export interface S3ClassificationScopeExclusionUpdate {
  /**
   * Depending on the value specified for the update operation (ClassificationScopeUpdateOperation), an array of strings that: lists the names of buckets to add or remove from the list, or specifies a new set of bucket names that overwrites all existing names in the list. Each string must be the full name of an existing S3 bucket. Values are case sensitive.
   *
   * @public
   */
  bucketNames: string[] | undefined;

  /**
   * Specifies how to apply the changes to the exclusion list. Valid values are:
   *
   * - ADD - Append the specified bucket names to the current list.
   * - REMOVE - Remove the specified bucket names from the current list.
   * - REPLACE - Overwrite the current list with the specified list of bucket names. If you specify this value, Amazon Macie removes all existing names from the list and adds all the specified names to the list.
   *
   * @public
   */
  operation: ClassificationScopeUpdateOperation | undefined;
}

/**
 * Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.
 *
 * @public
 */
export interface S3ClassificationScopeUpdate {
  /**
   * The names of the S3 buckets to add or remove from the list.
   *
   * @public
   */
  excludes: S3ClassificationScopeExclusionUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateClassificationScopeRequest {
  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The S3 buckets to add or remove from the exclusion list defined by the classification scope.
   *
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
   * The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
   *
   * @public
   */
  action?: FindingsFilterAction | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A custom description of the filter. The description can contain as many as 512 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criteria to use to filter findings.
   *
   * @public
   */
  findingCriteria?: FindingCriteria | undefined;

  /**
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.
   *
   * We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
   *
   * @public
   */
  position?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFilterResponse {
  /**
   * The Amazon Resource Name (ARN) of the filter that was updated.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier for the filter that was updated.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMacieSessionRequest {
  /**
   * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).
   *
   * @public
   */
  findingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.
   *
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
   * The unique identifier for the Amazon Macie resource that the request applies to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.
   *
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
   * Specifies whether to enable Amazon Macie automatically for accounts that are added to the organization in Organizations.
   *
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
   * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the *Sensitive* label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.
   *
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
   * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of objects, one for each custom data identifier or managed data identifier that detected a type of sensitive data to exclude from the bucket's score. To include all sensitive data types in the score, don't specify any values for this array.
   *
   * @public
   */
  suppressDataIdentifiers?: SuppressDataIdentifier[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceProfileDetectionsResponse {}

/**
 * Specifies the access method and settings to use when retrieving occurrences of sensitive data reported by findings. If your request specifies an Identity and Access Management (IAM) role to assume, Amazon Macie verifies that the role exists and the attached policies are configured correctly. If there's an issue, Macie returns an error. For information about addressing the issue, see [Configuration options for retrieving sensitive data samples](https://docs.aws.amazon.com/macie/latest/user/findings-retrieve-sd-options.html) in the *Amazon Macie User Guide*.
 *
 * @public
 */
export interface UpdateRetrievalConfiguration {
  /**
   * The access method to use when retrieving sensitive data from affected S3 objects. Valid values are: ASSUME_ROLE, assume an IAM role that is in the affected Amazon Web Services account and delegates access to Amazon Macie; and, CALLER_CREDENTIALS, use the credentials of the IAM user who requests the sensitive data. If you specify ASSUME_ROLE, also specify the name of an existing IAM role for Macie to assume (roleName).
   *
   * > **Important:** If you change this value from ASSUME_ROLE to CALLER_CREDENTIALS for an existing configuration, Macie permanently deletes the external ID and role name currently specified for the configuration. These settings can't be recovered after they're deleted.
   *
   * @public
   */
  retrievalMode: RetrievalMode | undefined;

  /**
   * The name of the IAM role that is in the affected Amazon Web Services account and Amazon Macie is allowed to assume when retrieving sensitive data from affected S3 objects for the account. The trust and permissions policies for the role must meet all requirements for Macie to assume the role.
   *
   * @public
   */
  roleName?: string | undefined;
}
