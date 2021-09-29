import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AdminStatus {
  DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.</p>
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The current status of the account as the delegated administrator of Amazon Macie for the organization.</p>
   */
  status?: AdminStatus | string;
}

export namespace AdminAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdminAccount): any => ({
    ...obj,
  });
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

export namespace BatchGetCustomDataIdentifierSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifierSummary): any => ({
    ...obj,
  });
}

export enum AllowsUnencryptedObjectUploads {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
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
   * <p>Specifies whether any one-time or recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more jobs and at least one of those jobs has a status other than CANCELLED. Or the bucket matched the bucket criteria (S3BucketCriteriaForJob) for at least one job that previously ran.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any jobs, all the jobs that explicitly include the bucket in their bucket definitions have a status of CANCELLED, or the bucket didn't match the bucket criteria (S3BucketCriteriaForJob) for any jobs that previously ran.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul> <p></p>
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

export namespace JobDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.</p>
 */
export interface ObjectCountByEncryptionType {
  /**
   * <p>The total number of objects that are encrypted with a customer-managed key. The objects use customer-provided server-side encryption (SSE-C).</p>
   */
  customerManaged?: number;

  /**
   * <p>The total number of objects that are encrypted with an Key Management Service (KMS) customer master key (CMK). The objects use Amazon Web Services managed KMS encryption (AWS-KMS) or customer managed KMS encryption (SSE-KMS).</p>
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

export namespace ObjectCountByEncryptionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectCountByEncryptionType): any => ({
    ...obj,
  });
}

export enum EffectivePermission {
  NOT_PUBLIC = "NOT_PUBLIC",
  PUBLIC = "PUBLIC",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
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

export namespace BlockPublicAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlockPublicAccess): any => ({
    ...obj,
  });
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

export namespace AccountLevelPermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountLevelPermissions): any => ({
    ...obj,
  });
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

export namespace AccessControlList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessControlList): any => ({
    ...obj,
  });
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

export namespace BucketPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketPolicy): any => ({
    ...obj,
  });
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

export namespace BucketLevelPermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketLevelPermissions): any => ({
    ...obj,
  });
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

export namespace BucketPermissionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketPermissionConfiguration): any => ({
    ...obj,
  });
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

export namespace BucketPublicAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketPublicAccess): any => ({
    ...obj,
  });
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

export namespace ReplicationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationDetails): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the Key Management Service (KMS) customer master key (CMK) that's used by default to encrypt objects that are added to the bucket. This value is null if the bucket uses an Amazon S3 managed key to encrypt new objects or the bucket doesn't encrypt new objects by default.</p>
   */
  kmsMasterKeyId?: string;

  /**
   * <p>The type of server-side encryption that's used by default when storing new objects in the bucket. Possible values are:</p> <ul><li><p>AES256 - New objects are encrypted with an Amazon S3 managed key and use Amazon S3 managed encryption (SSE-S3).</p></li> <li><p>aws:kms - New objects are encrypted with an KMS CMK, specified by the kmsMasterKeyId property, and use Amazon Web Services managed KMS encryption (AWS-KMS) or customer managed KMS encryption (SSE-KMS).</p></li> <li><p>NONE - New objects aren't encrypted by default. Default encryption is disabled for the bucket.</p></li></ul>
   */
  type?: Type | string;
}

export namespace BucketServerSideEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketServerSideEncryption): any => ({
    ...obj,
  });
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

export namespace KeyValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, total storage size values are based on the size of the latest version of each applicable object in the bucket.</p>
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

export namespace ObjectLevelStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectLevelStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an S3 bucket that Amazon Macie monitors and analyzes.</p>
 */
export interface BucketMetadata {
  /**
   * <p>The unique identifier for the Amazon Web Services account that owns the bucket.</p>
   */
  accountId?: string;

  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are uploaded to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include the x-amz-server-side-encryption header and the value for that header must be AES256 or aws:kms.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include the x-amz-server-side-encryption header and it doesn't require the value for that header to be AES256 or aws:kms.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul>
   */
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  bucketArn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
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
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze data in the bucket, and, if so, the details of the job that ran most recently.</p>
   */
  jobDetails?: JobDetails;

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
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
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

export namespace BucketMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketMetadata): any => ({
    ...obj,
  });
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

export namespace SimpleCriterionForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleCriterionForJob): any => ({
    ...obj,
  });
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

export namespace TagCriterionPairForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCriterionPairForJob): any => ({
    ...obj,
  });
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

export namespace TagCriterionForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCriterionForJob): any => ({
    ...obj,
  });
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

export namespace CriteriaForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CriteriaForJob): any => ({
    ...obj,
  });
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

export namespace CustomDataIdentifierSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifierSummary): any => ({
    ...obj,
  });
}

export enum FindingCategory {
  CLASSIFICATION = "CLASSIFICATION",
  POLICY = "POLICY",
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

export namespace Cell {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
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

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
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

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
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

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.</p>
 */
export interface Occurrences {
  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. This value is null for all other types of files.</p><p>Each Cell object specifies a cell or field that contains the sensitive data.</p>
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
   * <p>An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. This value is null for all other types of files.</p><p>Each Page object specifies a page that contains the sensitive data.</p>
   */
  pages?: Page[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. This value is null for all other types of files.</p> <p>For an Avro object container or Parquet file, each Record object specifies a record index and the path to a field in a record that contains the sensitive data. For a JSON or JSON Lines file, each Record object specifies the path to a field or array that contains the sensitive data. For a JSON Lines file, it also specifies the index of the line that contains the data.</p>
   */
  records?: _Record[];
}

export namespace Occurrences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
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

export namespace CustomDetection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDetection): any => ({
    ...obj,
  });
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

export namespace CustomDataIdentifiers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiers): any => ({
    ...obj,
  });
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

export namespace DefaultDetection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.</p>
 */
export interface SensitiveDataItem {
  /**
   * <p>The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
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

export namespace SensitiveDataItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataItem): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status of a sensitive data finding.</p>
 */
export interface ClassificationResultStatus {
  /**
   * <p>The status of the finding. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the S3 object that the finding applies to.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of the data in the S3 object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the S3 object that the finding applies to. For example, the object is a file in an unsupported format.</p></li></ul>
   */
  code?: string;

  /**
   * <p>A brief description of the status of the finding. Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding.</p>
   */
  reason?: string;
}

export namespace ClassificationResultStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResultStatus): any => ({
    ...obj,
  });
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

export namespace ClassificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a sensitive data finding, including the classification job that produced the finding.</p>
 */
export interface ClassificationDetails {
  /**
   * <p>The path to the folder or file (in Amazon S3) that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.</p>
   */
  detailedResultsLocation?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the classification job that produced the finding.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the classification job that produced the finding.</p>
   */
  jobId?: string;

  /**
   * <p>The status and other details of the finding.</p>
   */
  result?: ClassificationResult;
}

export namespace ClassificationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationDetails): any => ({
    ...obj,
  });
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

export namespace ApiCallDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiCallDetails): any => ({
    ...obj,
  });
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

export namespace FindingAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingAction): any => ({
    ...obj,
  });
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

export namespace DomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
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

export namespace IpCity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpCity): any => ({
    ...obj,
  });
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

export namespace IpCountry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpCountry): any => ({
    ...obj,
  });
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

export namespace IpGeoLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpGeoLocation): any => ({
    ...obj,
  });
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

export namespace IpOwner {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpOwner): any => ({
    ...obj,
  });
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

export namespace IpAddressDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpAddressDetails): any => ({
    ...obj,
  });
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

export namespace SessionContextAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionContextAttributes): any => ({
    ...obj,
  });
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

export namespace SessionIssuer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionIssuer): any => ({
    ...obj,
  });
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

export namespace SessionContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionContext): any => ({
    ...obj,
  });
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

export namespace AssumedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssumedRole): any => ({
    ...obj,
  });
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

export namespace AwsAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsAccount): any => ({
    ...obj,
  });
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

export namespace AwsService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsService): any => ({
    ...obj,
  });
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

export namespace FederatedUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FederatedUser): any => ({
    ...obj,
  });
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

export namespace IamUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamUser): any => ({
    ...obj,
  });
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

export namespace UserIdentityRoot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserIdentityRoot): any => ({
    ...obj,
  });
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

export namespace UserIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserIdentity): any => ({
    ...obj,
  });
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

export namespace FindingActor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingActor): any => ({
    ...obj,
  });
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

export namespace PolicyDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyDetails): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) or unique identifier (key ID) for the Key Management Service (KMS) customer master key (CMK) that's used to encrypt data in the bucket or the object. If an KMS CMK isn't used, this value is null.</p>
   */
  kmsMasterKeyId?: string;
}

export namespace ServerSideEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerSideEncryption): any => ({
    ...obj,
  });
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

export namespace S3BucketOwner {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketOwner): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the S3 bucket that a finding applies to.</p>
 */
export interface S3Bucket {
  /**
   * <p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are uploaded to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include the x-amz-server-side-encryption header and the value for that header must be AES256 or aws:kms.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include the x-amz-server-side-encryption header and it doesn't require the value for that header to be AES256 or aws:kms.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of objects.</p></li></ul>
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

export namespace S3Bucket {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Bucket): any => ({
    ...obj,
  });
}

export enum StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
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

export namespace S3Object {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
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

export namespace ResourcesAffected {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourcesAffected): any => ({
    ...obj,
  });
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

export namespace Severity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
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
   * <p>The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.</p>
   */
  count?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was created.</p>
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was last updated. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.</p>
   */
  updatedAt?: Date;
}

export namespace Finding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
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
   * <p>The action that's performed on findings that meet the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
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
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.</p>
   */
  tags?: { [key: string]: string };
}

export namespace FindingsFilterListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingsFilterListItem): any => ({
    ...obj,
  });
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

export namespace GroupCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupCount): any => ({
    ...obj,
  });
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
 * <p>Provides information about an Amazon Macie membership invitation that was received by an account.</p>
 */
export interface Invitation {
  /**
   * <p>The Amazon Web Services account ID for the account that sent the invitation.</p>
   */
  accountId?: string;

  /**
   * <p>The unique identifier for the invitation. Amazon Macie uses this identifier to validate the inviter account with the invitee account.</p>
   */
  invitationId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The status of the relationship between the account that sent the invitation (<i>inviter account</i>) and the account that received the invitation (<i>invitee account</i>).</p>
   */
  relationshipStatus?: RelationshipStatus | string;
}

export namespace Invitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
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

export namespace SimpleScopeTerm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScopeTerm): any => ({
    ...obj,
  });
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

export namespace TagValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagValuePair): any => ({
    ...obj,
  });
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

export namespace TagScopeTerm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagScopeTerm): any => ({
    ...obj,
  });
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

export namespace JobScopeTerm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobScopeTerm): any => ({
    ...obj,
  });
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

export namespace CriteriaBlockForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CriteriaBlockForJob): any => ({
    ...obj,
  });
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

export namespace S3BucketCriteriaForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketCriteriaForJob): any => ({
    ...obj,
  });
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

export namespace S3BucketDefinitionForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketDefinitionForJob): any => ({
    ...obj,
  });
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

export namespace LastRunErrorStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastRunErrorStatus): any => ({
    ...obj,
  });
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

export namespace UserPausedDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPausedDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a classification job, including the current status of the job.</p>
 */
export interface JobSummary {
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

  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   */
  bucketCriteria?: S3BucketCriteriaForJob;
}

export namespace JobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
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

export namespace ListJobsFilterTerm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsFilterTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.</p>
 */
export interface ManagedDataIdentifierSummary {
  /**
   * <p>The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.</p>
   */
  category?: SensitiveDataItemCategory | string;

  /**
   * <p>The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.</p>
   */
  id?: string;
}

export namespace ManagedDataIdentifierSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedDataIdentifierSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.</p>
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
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.</p>
   */
  jobDetails?: JobDetails;

  /**
   * <p>The total number of objects in the bucket.</p>
   */
  objectCount?: number;

  /**
   * <p>The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>
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

export namespace MatchingBucket {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchingBucket): any => ({
    ...obj,
  });
}

/**
 * <p>Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.</p>
 */
export interface MatchingResource {
  /**
   * <p>The details of an S3 bucket that Amazon Macie monitors and analyzes.</p>
   */
  matchingBucket?: MatchingBucket;
}

export namespace MatchingResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchingResource): any => ({
    ...obj,
  });
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
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
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   */
  updatedAt?: Date;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
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

export namespace SearchResourcesSimpleCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesSimpleCriterion): any => ({
    ...obj,
  });
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

export namespace SearchResourcesTagCriterionPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesTagCriterionPair): any => ({
    ...obj,
  });
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

export namespace SearchResourcesTagCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesTagCriterion): any => ({
    ...obj,
  });
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

export namespace SearchResourcesCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesCriteria): any => ({
    ...obj,
  });
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

export namespace UnprocessedAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessedAccount): any => ({
    ...obj,
  });
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

export namespace ServiceLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceLimit): any => ({
    ...obj,
  });
}

export enum UsageType {
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
   * <p>The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing S3 objects to detect sensitive data.</p>
   */
  type?: UsageType | string;
}

export namespace UsageByAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageByAccount): any => ({
    ...obj,
  });
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when the free trial started for the account.</p>
   */
  freeTrialStartDate?: Date;

  /**
   * <p>An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.</p>
   */
  usage?: UsageByAccount[];
}

export namespace UsageRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageRecord): any => ({
    ...obj,
  });
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
   * <p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an Amazon Web Services account.</p></li> <li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the free trial started for an account.</p></li> <li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li> <li><p>total - A string that represents the current estimated cost for an account.</p></li></ul>
   */
  values?: string[];
}

export namespace UsageStatisticsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageStatisticsFilter): any => ({
    ...obj,
  });
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
   * <p>The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing S3 objects to detect sensitive data.</p>
   */
  type?: UsageType | string;
}

export namespace UsageTotal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageTotal): any => ({
    ...obj,
  });
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

export namespace AcceptInvitationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
}

export interface AcceptInvitationResponse {}

export namespace AcceptInvitationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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

export namespace AccountDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountDetail): any => ({
    ...obj,
  });
}

export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.</p>
   */
  ids?: string[];
}

export namespace BatchGetCustomDataIdentifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifiersRequest): any => ({
    ...obj,
  });
}

export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier that meets the criteria specified in the request.</p>
   */
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  /**
   * <p>An array of custom data identifier IDs, one for each custom data identifier that was specified in the request but doesn't correlate to an existing custom data identifier.</p>
   */
  notFoundIdentifierIds?: string[];
}

export namespace BatchGetCustomDataIdentifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifiersResponse): any => ({
    ...obj,
  });
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

export namespace BucketCountByEffectivePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketCountByEffectivePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface BucketCountByEncryptionType {
  /**
   * <p>The total number of buckets that use an Key Management Service (KMS) customer master key (CMK) to encrypt new objects by default. These buckets use Amazon Web Services managed KMS encryption (AWS-KMS) or customer managed KMS encryption (SSE-KMS) by default.</p>
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

export namespace BucketCountByEncryptionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketCountByEncryptionType): any => ({
    ...obj,
  });
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

export namespace BucketCountBySharedAccessType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketCountBySharedAccessType): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.</p>
 */
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * <p>The total number of buckets that don't have a bucket policy or have a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, the policy doesn't require PutObject requests to include the x-amz-server-side-encryption header and it doesn't require the value for that header to be AES256 or aws:kms.</p>
   */
  allowsUnencryptedObjectUploads?: number;

  /**
   * <p>The total number of buckets whose bucket policies require server-side encryption of new objects. PutObject requests for these buckets must include the x-amz-server-side-encryption header and the value for that header must be AES256 or aws:kms.</p>
   */
  deniesUnencryptedObjectUploads?: number;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate server-side encryption requirements for. Macie can't determine whether the bucket policies for these buckets require server-side encryption of new objects.</p>
   */
  unknown?: number;
}

export namespace BucketCountPolicyAllowsUnencryptedObjectUploads {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketCountPolicyAllowsUnencryptedObjectUploads): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.</p>
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * <p>The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.</p>
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

export namespace BucketCriteriaAdditionalProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketCriteriaAdditionalProperties): any => ({
    ...obj,
  });
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
   * <p>The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, or sizeInBytes.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace BucketSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketSortCriteria): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) customer master key (CMK) to use for encryption of the results. This must be the ARN of an existing CMK that's in the same Amazon Web Services Region as the bucket.</p>
   */
  kmsKeyArn: string | undefined;
}

export namespace S3Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.</p>
 */
export interface ClassificationExportConfiguration {
  /**
   * <p>The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ClassificationExportConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationExportConfiguration): any => ({
    ...obj,
  });
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

export namespace JobScopingBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobScopingBlock): any => ({
    ...obj,
  });
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

export namespace Scoping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scoping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.</p>
 */
export interface S3JobDefinition {
  /**
   * <p>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * <p>The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.</p>
   */
  scoping?: Scoping;

  /**
   * <p>The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</p>
   */
  bucketCriteria?: S3BucketCriteriaForJob;
}

export namespace S3JobDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3JobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that a classification job runs once a day, every day. This is an empty object.</p>
 */
export interface DailySchedule {}

export namespace DailySchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DailySchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a monthly recurrence pattern for running a classification job.</p>
 */
export interface MonthlySchedule {
  /**
   * <p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.</p> <p>If this value exceeds the number of days in a certain month, Macie doesn't run the job that month. Macie runs the job only during months that have the specified day. For example, if this value is 31 and a month has only 30 days, Macie doesn't run the job that month. To run the job every month, specify a value that's less than 29.</p>
   */
  dayOfMonth?: number;
}

export namespace MonthlySchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonthlySchedule): any => ({
    ...obj,
  });
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

export namespace WeeklySchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WeeklySchedule): any => ({
    ...obj,
  });
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

export namespace JobScheduleFrequency {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobScheduleFrequency): any => ({
    ...obj,
  });
}

export interface CreateClassificationJobRequest {
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
   * <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p><p>If you configure the job to run only once, don't specify a value for this property.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.</p></li></ul>
   */
  jobType: JobType | string | undefined;

  /**
   * <p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p><p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>
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
  tags?: { [key: string]: string };
}

export namespace CreateClassificationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClassificationJobRequest): any => ({
    ...obj,
  });
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

export namespace CreateClassificationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface CreateCustomDataIdentifierRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Amazon Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1-300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex?: string;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateCustomDataIdentifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomDataIdentifierResponse {
  /**
   * <p>The unique identifier for the custom data identifier that was created.</p>
   */
  customDataIdentifierId?: string;
}

export namespace CreateCustomDataIdentifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomDataIdentifierResponse): any => ({
    ...obj,
  });
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

export namespace CriterionAdditionalProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CriterionAdditionalProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.</p>
 */
export interface FindingCriteria {
  /**
   * <p>A condition that specifies the property, operator, and one or more values to use to filter the results.</p>
   */
  criterion?: { [key: string]: CriterionAdditionalProperties };
}

export namespace FindingCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingCriteria): any => ({
    ...obj,
  });
}

export interface CreateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action: FindingsFilterAction | string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFindingsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingsFilterRequest): any => ({
    ...obj,
  });
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

export namespace CreateFindingsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface CreateInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.</p>
   */
  accountIds: string[] | undefined;

  /**
   * <p>Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true.</p>
   */
  disableEmailNotification?: boolean;

  /**
   * <p>A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.</p>
   */
  message?: string;
}

export namespace CreateInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInvitationsRequest): any => ({
    ...obj,
  });
}

export interface CreateInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace CreateInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInvitationsResponse): any => ({
    ...obj,
  });
}

export interface CreateMemberRequest {
  /**
   * <p>The details of the account to associate with the administrator account.</p>
   */
  account: AccountDetail | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMemberRequest): any => ({
    ...obj,
  });
}

export interface CreateMemberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that was associated with the administrator account.</p>
   */
  arn?: string;
}

export namespace CreateMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMemberResponse): any => ({
    ...obj,
  });
}

export interface CreateSampleFindingsRequest {
  /**
   * <p>An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled.</p>
   */
  findingTypes?: (FindingType | string)[];
}

export namespace CreateSampleFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSampleFindingsRequest): any => ({
    ...obj,
  });
}

export interface CreateSampleFindingsResponse {}

export namespace CreateSampleFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSampleFindingsResponse): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.</p>
   */
  accountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace DeclineInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteCustomDataIdentifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomDataIdentifierResponse {}

export namespace DeleteCustomDataIdentifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteFindingsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteFindingsFilterResponse {}

export namespace DeleteFindingsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsRequest {
  /**
   * <p>An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.</p>
   */
  accountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace DeleteInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMemberRequest): any => ({
    ...obj,
  });
}

export interface DeleteMemberResponse {}

export namespace DeleteMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMemberResponse): any => ({
    ...obj,
  });
}

export interface DescribeBucketsRequest {
  /**
   * <p>The criteria to use to filter the query results.</p>
   */
  criteria?: { [key: string]: BucketCriteriaAdditionalProperties };

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

export namespace DescribeBucketsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBucketsRequest): any => ({
    ...obj,
  });
}

export interface DescribeBucketsResponse {
  /**
   * <p>An array of objects, one for each bucket that meets the filter criteria specified in the request.</p>
   */
  buckets?: BucketMetadata[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace DescribeBucketsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBucketsResponse): any => ({
    ...obj,
  });
}

export interface DescribeClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeClassificationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClassificationJobRequest): any => ({
    ...obj,
  });
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

export namespace Statistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj,
  });
}

export interface DescribeClassificationJobResponse {
  /**
   * <p>The token that was provided to ensure the idempotency of the request to create the job.</p>
   */
  clientToken?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An array of unique identifiers, one for each custom data identifier that the job uses to analyze data. This value is null if the job uses only managed data identifiers to analyze data.</p>
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started.</p>
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
  tags?: { [key: string]: string };

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   */
  userPausedDetails?: UserPausedDetails;
}

export namespace DescribeClassificationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Specifies whether Amazon Macie is enabled automatically for accounts that are added to the Amazon Web Services organization.</p>
   */
  autoEnable?: boolean;

  /**
   * <p>Specifies whether the maximum number of Amazon Macie member accounts are part of the Amazon Web Services organization.</p>
   */
  maxAccountLimitReached?: boolean;
}

export namespace DescribeOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DisableMacieRequest {}

export namespace DisableMacieRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableMacieRequest): any => ({
    ...obj,
  });
}

export interface DisableMacieResponse {}

export namespace DisableMacieResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableMacieResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the delegated Amazon Macie administrator account.</p>
   */
  adminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountRequest {}

export namespace DisassociateFromAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountResponse {}

export namespace DisassociateFromAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DisassociateMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMemberResponse {}

export namespace DisassociateMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberResponse): any => ({
    ...obj,
  });
}

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
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies the new status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to ENABLED.</p>
   */
  status?: MacieStatus | string;
}

export namespace EnableMacieRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableMacieRequest): any => ({
    ...obj,
  });
}

export interface EnableMacieResponse {}

export namespace EnableMacieResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableMacieResponse): any => ({
    ...obj,
  });
}

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

export namespace EnableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

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

export namespace FindingStatisticsSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingStatisticsSortCriteria): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountRequest {}

export namespace GetAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   */
  administrator?: Invitation;
}

export namespace GetAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface GetBucketStatisticsRequest {
  /**
   * <p>The unique identifier for the Amazon Web Services account.</p>
   */
  accountId?: string;
}

export namespace GetBucketStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketStatisticsRequest): any => ({
    ...obj,
  });
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
   * <p>The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, Macie calculates this value based on the size of the latest version of each applicable object in those buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>
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
   * <p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, Macie calculates this value based on the size of the latest version of each object in those buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets.</p> <p>If versioning is enabled for any of the buckets, Macie calculates this value based on the size of the latest version of each applicable object in those buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.</p>
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

export namespace GetBucketStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetClassificationExportConfigurationRequest {}

export namespace GetClassificationExportConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassificationExportConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetClassificationExportConfigurationResponse {
  /**
   * <p>The location where data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export namespace GetClassificationExportConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassificationExportConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetCustomDataIdentifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomDataIdentifierRequest): any => ({
    ...obj,
  });
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
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Amazon Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern.</p>
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
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetCustomDataIdentifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomDataIdentifierResponse): any => ({
    ...obj,
  });
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

export namespace SortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
}

export interface GetFindingsRequest {
  /**
   * <p>An array of strings that lists the unique identifiers for the findings to retrieve.</p>
   */
  findingIds: string[] | undefined;

  /**
   * <p>The criteria for sorting the results of the request.</p>
   */
  sortCriteria?: SortCriteria;
}

export namespace GetFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsResponse {
  /**
   * <p>An array of objects, one for each finding that meets the criteria specified in the request.</p>
   */
  findings?: Finding[];
}

export namespace GetFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetFindingsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsFilterResponse {
  /**
   * <p>The action that's performed on findings that meet the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
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
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetFindingsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface GetFindingsPublicationConfigurationRequest {}

export namespace GetFindingsPublicationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsPublicationConfigurationRequest): any => ({
    ...obj,
  });
}

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

export namespace SecurityHubConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityHubConfiguration): any => ({
    ...obj,
  });
}

export interface GetFindingsPublicationConfigurationResponse {
  /**
   * <p>The configuration settings that determine which findings are published to Security Hub.</p>
   */
  securityHubConfiguration?: SecurityHubConfiguration;
}

export namespace GetFindingsPublicationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsPublicationConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace GetFindingStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingStatisticsResponse {
  /**
   * <p>An array of objects, one for each group of findings that meet the filter criteria specified in the request.</p>
   */
  countsByGroup?: GroupCount[];
}

export namespace GetFindingStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The total number of invitations that were received by the account, not including the currently accepted invitation.</p>
   */
  invitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMacieSessionRequest {}

export namespace GetMacieSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMacieSessionRequest): any => ({
    ...obj,
  });
}

export interface GetMacieSessionResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The frequency with which Macie publishes updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that allows Macie to monitor and analyze data in Amazon Web Services resources for the account.</p>
   */
  serviceRole?: string;

  /**
   * <p>The current status of the Macie account. Possible values are: PAUSED, the account is enabled but all Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Macie activities are enabled for the account.</p>
   */
  status?: MacieStatus | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Macie account.</p>
   */
  updatedAt?: Date;
}

export namespace GetMacieSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMacieSessionResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>(Deprecated) The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.</p>
   */
  master?: Invitation;
}

export namespace GetMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMemberRequest): any => ({
    ...obj,
  });
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
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
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the member account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</p>
   */
  updatedAt?: Date;
}

export namespace GetMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMemberResponse): any => ({
    ...obj,
  });
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

export namespace UsageStatisticsSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageStatisticsSortBy): any => ({
    ...obj,
  });
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

export namespace GetUsageStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsageStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetUsageStatisticsResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for an account that meets the filter criteria specified in the request.</p>
   */
  records?: UsageRecord[];

  /**
   * <p>The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.</p>
   */
  timeRange?: TimeRange | string;
}

export namespace GetUsageStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsageStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetUsageTotalsRequest {
  /**
   * <p>The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.</p>
   */
  timeRange?: string;
}

export namespace GetUsageTotalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsageTotalsRequest): any => ({
    ...obj,
  });
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

export namespace GetUsageTotalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUsageTotalsResponse): any => ({
    ...obj,
  });
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

export namespace ListJobsFilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsFilterCriteria): any => ({
    ...obj,
  });
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

export namespace ListJobsSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsSortCriteria): any => ({
    ...obj,
  });
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

export namespace ListClassificationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClassificationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListClassificationJobsResponse {
  /**
   * <p>An array of objects, one for each job that meets the filter criteria specified in the request.</p>
   */
  items?: JobSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListClassificationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClassificationJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListCustomDataIdentifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomDataIdentifiersRequest): any => ({
    ...obj,
  });
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

export namespace ListCustomDataIdentifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomDataIdentifiersResponse): any => ({
    ...obj,
  });
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

export namespace ListFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
}

export interface ListFindingsResponse {
  /**
   * <p>An array of strings, where each string is the unique identifier for a finding that meets the filter criteria specified in the request.</p>
   */
  findingIds?: string[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
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

export namespace ListFindingsFiltersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsFiltersRequest): any => ({
    ...obj,
  });
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

export namespace ListFindingsFiltersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsFiltersResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
}

export interface ListInvitationsResponse {
  /**
   * <p>An array of objects, one for each invitation that was received by the account.</p>
   */
  invitations?: Invitation[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListManagedDataIdentifiersRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListManagedDataIdentifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedDataIdentifiersRequest): any => ({
    ...obj,
  });
}

export interface ListManagedDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each managed data identifier.</p>
   */
  items?: ManagedDataIdentifierSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListManagedDataIdentifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedDataIdentifiersResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.</p>
   */
  onlyAssociated?: string;
}

export namespace ListMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

export interface ListMembersResponse {
  /**
   * <p>An array of objects, one for each account that's associated with the administrator account and meets the criteria specified by the onlyAssociated request parameter.</p>
   */
  members?: Member[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListOrganizationAdminAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.</p>
   */
  adminAccounts?: AdminAccount[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListOrganizationAdminAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutClassificationExportConfigurationRequest {
  /**
   * <p>The location to store data classification results in, and the encryption settings to use when storing results in that location.</p>
   */
  configuration: ClassificationExportConfiguration | undefined;
}

export namespace PutClassificationExportConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutClassificationExportConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutClassificationExportConfigurationResponse {
  /**
   * <p>The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export namespace PutClassificationExportConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutClassificationExportConfigurationResponse): any => ({
    ...obj,
  });
}

export interface PutFindingsPublicationConfigurationRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration settings that determine which findings to publish to Security Hub.</p>
   */
  securityHubConfiguration?: SecurityHubConfiguration;
}

export namespace PutFindingsPublicationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFindingsPublicationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutFindingsPublicationConfigurationResponse {}

export namespace PutFindingsPublicationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFindingsPublicationConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.</p>
 */
export interface SearchResourcesCriteriaBlock {
  /**
   * <p>An array of objects, one for each property- or tag-based condition that includes or excludes resources from the query results. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   */
  and?: SearchResourcesCriteria[];
}

export namespace SearchResourcesCriteriaBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesCriteriaBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.</p>
 */
export interface SearchResourcesBucketCriteria {
  /**
   * <p>The property- and tag-based conditions that determine which buckets to exclude from the results.</p>
   */
  excludes?: SearchResourcesCriteriaBlock;

  /**
   * <p>The property- and tag-based conditions that determine which buckets to include in the results.</p>
   */
  includes?: SearchResourcesCriteriaBlock;
}

export namespace SearchResourcesBucketCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesBucketCriteria): any => ({
    ...obj,
  });
}

export enum SearchResourcesSortAttributeName {
  ACCOUNT_ID = "ACCOUNT_ID",
  RESOURCE_NAME = "RESOURCE_NAME",
  S3_CLASSIFIABLE_OBJECT_COUNT = "S3_CLASSIFIABLE_OBJECT_COUNT",
  S3_CLASSIFIABLE_SIZE_IN_BYTES = "S3_CLASSIFIABLE_SIZE_IN_BYTES",
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.</p>
 */
export interface SearchResourcesSortCriteria {
  /**
   * <p>The property to sort the results by.</p>
   */
  attributeName?: SearchResourcesSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace SearchResourcesSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesSortCriteria): any => ({
    ...obj,
  });
}

export interface SearchResourcesRequest {
  /**
   * <p>The filter conditions that determine which S3 buckets to include or exclude from the query results.</p>
   */
  bucketCriteria?: SearchResourcesBucketCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: SearchResourcesSortCriteria;
}

export namespace SearchResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesRequest): any => ({
    ...obj,
  });
}

export interface SearchResourcesResponse {
  /**
   * <p>An array of objects, one for each resource that meets the filter criteria specified in the request.</p>
   */
  matchingResources?: MatchingResource[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace SearchResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResourcesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface TestCustomDataIdentifierRequest {
  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Amazon Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1-300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex: string | undefined;

  /**
   * <p>The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.</p>
   */
  sampleText: string | undefined;
}

export namespace TestCustomDataIdentifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface TestCustomDataIdentifierResponse {
  /**
   * <p>The number of instances of sample text that matched the detection criteria specified in the custom data identifier.</p>
   */
  matchCount?: number;
}

export namespace TestCustomDataIdentifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p> <p>If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.</p> <p>If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus: JobStatus | string | undefined;
}

export namespace UpdateClassificationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassificationJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassificationJobResponse {}

export namespace UpdateClassificationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace UpdateFindingsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was updated.</p>
   */
  id?: string;
}

export namespace UpdateFindingsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface UpdateMacieSessionRequest {
  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status?: MacieStatus | string;
}

export namespace UpdateMacieSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMacieSessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMacieSessionResponse {}

export namespace UpdateMacieSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMacieSessionResponse): any => ({
    ...obj,
  });
}

export interface UpdateMemberSessionRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status: MacieStatus | string | undefined;
}

export namespace UpdateMemberSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMemberSessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMemberSessionResponse {}

export namespace UpdateMemberSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMemberSessionResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Specifies whether to enable Amazon Macie automatically for each account, when the account is added to the Amazon Web Services organization.</p>
   */
  autoEnable: boolean | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}
