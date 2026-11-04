// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  ActionCode,
  CannedACL,
  EncryptionType,
  ExpressionType,
  FileHeaderInfo,
  Permission,
  QuoteFields,
  StatusCode,
  StorageClass,
  Type,
} from "./enums";

/**
 * Provides options to abort a multipart upload identified by the upload ID.
 *
 * For information about the underlying REST API, see [Abort Multipart Upload](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html). For conceptual information, see [Working with Archives in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html).
 *
 * @public
 */
export interface AbortMultipartUploadInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The upload ID of the multipart upload to delete.
   *
   * @public
   */
  uploadId: string | undefined;
}

/**
 * The input values for `AbortVaultLock`.
 *
 * @public
 */
export interface AbortVaultLockInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains information about the grantee.
 *
 * @public
 */
export interface Grantee {
  /**
   * Type of grantee
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * Screen name of the grantee.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * URI of the grantee group.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * The canonical user ID of the grantee.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * Email address of the grantee.
   *
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * Contains information about a grant.
 *
 * @public
 */
export interface Grant {
  /**
   * The grantee.
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
 * The input values for `AddTagsToVault`.
 *
 * @public
 */
export interface AddTagsToVaultInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * For information about the underlying REST API, see [Upload Archive](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html). For conceptual information, see [Working with Archives in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html).
 *
 * @public
 */
export interface ArchiveCreationOutput {
  /**
   * The relative URI path of the newly added archive resource.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The checksum of the archive computed by Amazon Glacier.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The ID of the archive. This value is also included as part of the location.
   *
   * @public
   */
  archiveId?: string | undefined;
}

/**
 * Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource.
 *
 * @public
 */
export interface CompleteMultipartUploadInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The upload ID of the multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.
   *
   * @public
   */
  archiveSize?: string | undefined;

  /**
   * The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash of the individual parts. If the value you specify in the request does not match the SHA256 tree hash of the final assembled archive as computed by Amazon Glacier (Glacier), Glacier returns an error and the request fails.
   *
   * @public
   */
  checksum?: string | undefined;
}

/**
 * The input values for `CompleteVaultLock`.
 *
 * @public
 */
export interface CompleteVaultLockInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The `lockId` value is the lock ID obtained from a InitiateVaultLock request.
   *
   * @public
   */
  lockId: string | undefined;
}

/**
 * Provides options to create a vault.
 *
 * @public
 */
export interface CreateVaultInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface CreateVaultOutput {
  /**
   * The URI of the vault that was created.
   *
   * @public
   */
  location?: string | undefined;
}

/**
 * Contains information about the comma-separated value (CSV) file to select from.
 *
 * @public
 */
export interface CSVInput {
  /**
   * Describes the first line of input. Valid values are `None`, `Ignore`, and `Use`.
   *
   * @public
   */
  FileHeaderInfo?: FileHeaderInfo | undefined;

  /**
   * A single character used to indicate that a row should be ignored when the character is present at the start of that row.
   *
   * @public
   */
  Comments?: string | undefined;

  /**
   * A single character used for escaping the quotation-mark character inside an already escaped value.
   *
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * A value used to separate individual records from each other.
   *
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * A value used to separate individual fields from each other within a record.
   *
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * A value used as an escape character where the field delimiter is part of the value.
   *
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * Contains information about the comma-separated value (CSV) file that the job results are stored in.
 *
 * @public
 */
export interface CSVOutput {
  /**
   * A value that indicates whether all output fields should be contained within quotation marks.
   *
   * @public
   */
  QuoteFields?: QuoteFields | undefined;

  /**
   * A single character used for escaping the quotation-mark character inside an already escaped value.
   *
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * A value used to separate individual records from each other.
   *
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * A value used to separate individual fields from each other within a record.
   *
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * A value used as an escape character where the field delimiter is part of the value.
   *
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * Data retrieval policy rule.
 *
 * @public
 */
export interface DataRetrievalRule {
  /**
   * The type of data retrieval policy to set.
   *
   * Valid values: BytesPerHour|FreeTier|None
   *
   * @public
   */
  Strategy?: string | undefined;

  /**
   * The maximum number of bytes that can be retrieved in an hour.
   *
   * This field is required only if the value of the Strategy field is `BytesPerHour`. Your PUT operation will be rejected if the Strategy field is not set to `BytesPerHour` and you set this field.
   *
   * @public
   */
  BytesPerHour?: number | undefined;
}

/**
 * Data retrieval policy.
 *
 * @public
 */
export interface DataRetrievalPolicy {
  /**
   * The policy rule. Although this is a list type, currently there must be only one rule, which contains a Strategy field and optionally a BytesPerHour field.
   *
   * @public
   */
  Rules?: DataRetrievalRule[] | undefined;
}

/**
 * Provides options for deleting an archive from an Amazon Glacier vault.
 *
 * @public
 */
export interface DeleteArchiveInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The ID of the archive to delete.
   *
   * @public
   */
  archiveId: string | undefined;
}

/**
 * Provides options for deleting a vault from Amazon Glacier.
 *
 * @public
 */
export interface DeleteVaultInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * DeleteVaultAccessPolicy input.
 *
 * @public
 */
export interface DeleteVaultAccessPolicyInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Provides options for deleting a vault notification configuration from an Amazon Glacier vault.
 *
 * @public
 */
export interface DeleteVaultNotificationsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Provides options for retrieving a job description.
 *
 * @public
 */
export interface DescribeJobInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The ID of the job to describe.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Describes the options for a range inventory retrieval job.
 *
 * @public
 */
export interface InventoryRetrievalJobDescription {
  /**
   * The output format for the vault inventory list, which is set by the **InitiateJob** request when initiating a job to retrieve a vault inventory. Valid values are `CSV` and `JSON`.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The start of the date range in Universal Coordinated Time (UTC) for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example `2013-03-20T17:03:43Z`.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example `2013-03-20T17:03:43Z`.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * The maximum number of inventory items returned per vault inventory retrieval request. This limit is set when initiating the job with the a **InitiateJob** request.
   *
   * @public
   */
  Limit?: string | undefined;

  /**
   * An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new **InitiateJob** request to obtain additional inventory items. If there are no more inventory items, this value is `null`. For more information, see [Range Inventory Retrieval](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html#api-initiate-job-post-vault-inventory-list-filtering).
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains information about the encryption used to store the job results in Amazon S3.
 *
 * @public
 */
export interface Encryption {
  /**
   * The server-side encryption algorithm used when storing job results in Amazon S3, for example `AES256` or `aws:kms`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * The AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or Signature Version 4.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * Optional. If the encryption type is `aws:kms`, you can use this value to specify the encryption context for the job results.
   *
   * @public
   */
  KMSContext?: string | undefined;
}

/**
 * Contains information about the location in Amazon S3 where the select job results are stored.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket where the job results are stored.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The prefix that is prepended to the results for this request.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Contains information about the encryption used to store the job results in Amazon S3.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The canned access control list (ACL) to apply to the job results.
   *
   * @public
   */
  CannedACL?: CannedACL | undefined;

  /**
   * A list of grants that control access to the staged results.
   *
   * @public
   */
  AccessControlList?: Grant[] | undefined;

  /**
   * The tag-set that is applied to the job results.
   *
   * @public
   */
  Tagging?: Record<string, string> | undefined;

  /**
   * A map of metadata to store with the job results in Amazon S3.
   *
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * The storage class used to store the job results.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;
}

/**
 * Contains information about the location where the select job results are stored.
 *
 * @public
 */
export interface OutputLocation {
  /**
   * Describes an S3 location that will receive the results of the job request.
   *
   * @public
   */
  S3?: S3Location | undefined;
}

/**
 * Describes how the archive is serialized.
 *
 * @public
 */
export interface InputSerialization {
  /**
   * Describes the serialization of a CSV-encoded object.
   *
   * @public
   */
  csv?: CSVInput | undefined;
}

/**
 * Describes how the select output is serialized.
 *
 * @public
 */
export interface OutputSerialization {
  /**
   * Describes the serialization of CSV-encoded query results.
   *
   * @public
   */
  csv?: CSVOutput | undefined;
}

/**
 * Contains information about the parameters used for a select.
 *
 * @public
 */
export interface SelectParameters {
  /**
   * Describes the serialization format of the object.
   *
   * @public
   */
  InputSerialization?: InputSerialization | undefined;

  /**
   * The type of the provided expression, for example `SQL`.
   *
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * The expression that is used to select the object.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * Describes how the results of the select job are serialized.
   *
   * @public
   */
  OutputSerialization?: OutputSerialization | undefined;
}

/**
 * Contains the description of an Amazon S3 Glacier job.
 *
 * @public
 */
export interface GlacierJobDescription {
  /**
   * An opaque string that identifies an Amazon S3 Glacier job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The job description provided when initiating the job.
   *
   * @public
   */
  JobDescription?: string | undefined;

  /**
   * The job type. This value is either `ArchiveRetrieval`, `InventoryRetrieval`, or `Select`.
   *
   * @public
   */
  Action?: ActionCode | undefined;

  /**
   * The archive ID requested for a select job or archive retrieval. Otherwise, this field is null.
   *
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vault from which an archive retrieval was requested.
   *
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * The UTC date when the job was created. This value is a string representation of ISO 8601 date format, for example `"2012-03-20T17:03:43.221Z"`.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The job status. When a job is completed, you get the job's output using Get Job Output (GET output).
   *
   * @public
   */
  Completed?: boolean | undefined;

  /**
   * The status code can be `InProgress`, `Succeeded`, or `Failed`, and indicates the status of the job.
   *
   * @public
   */
  StatusCode?: StatusCode | undefined;

  /**
   * A friendly message that describes the job status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * For an archive retrieval job, this value is the size in bytes of the archive being requested for download. For an inventory retrieval or select job, this value is null.
   *
   * @public
   */
  ArchiveSizeInBytes?: number | undefined;

  /**
   * For an inventory retrieval job, this value is the size in bytes of the inventory requested for download. For an archive retrieval or select job, this value is null.
   *
   * @public
   */
  InventorySizeInBytes?: number | undefined;

  /**
   * An Amazon SNS topic that receives notification.
   *
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * The UTC time that the job request completed. While the job is in progress, the value is null.
   *
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * For an archive retrieval job, this value is the checksum of the archive. Otherwise, this value is null.
   *
   * The SHA256 tree hash value for the requested range of an archive. If the **InitiateJob** request for an archive specified a tree-hash aligned range, then this field returns a value.
   *
   * If the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value.
   *
   * This field is null for the following:
   *
   * - Archive retrieval jobs that specify a range that is not tree-hash aligned
   *
   * - Archival jobs that specify a range that is equal to the whole archive, when the job status is `InProgress`
   *
   * - Inventory jobs
   * - Select jobs
   *
   * @public
   */
  SHA256TreeHash?: string | undefined;

  /**
   * The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval or select jobs, this field is null.
   *
   * @public
   */
  ArchiveSHA256TreeHash?: string | undefined;

  /**
   * The retrieved byte range for archive retrieval jobs in the form *StartByteValue*-*EndByteValue*. If no range was specified in the archive retrieval, then the whole archive is retrieved. In this case, *StartByteValue* equals 0 and *EndByteValue* equals the size of the archive minus 1. For inventory retrieval or select jobs, this field is null.
   *
   * @public
   */
  RetrievalByteRange?: string | undefined;

  /**
   * The tier to use for a select or an archive retrieval. Valid values are `Expedited`, `Standard`, or `Bulk`. `Standard` is the default.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * Parameters used for range inventory retrieval.
   *
   * @public
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobDescription | undefined;

  /**
   * Contains the job output location.
   *
   * @public
   */
  JobOutputPath?: string | undefined;

  /**
   * Contains the parameters used for a select.
   *
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * Contains the location where the data from the select job is stored.
   *
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * Provides options for retrieving metadata for a specific vault in Amazon Glacier.
 *
 * @public
 */
export interface DescribeVaultInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface DescribeVaultOutput {
  /**
   * The Amazon Resource Name (ARN) of the vault.
   *
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  VaultName?: string | undefined;

  /**
   * The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example `2012-03-20T17:03:43.221Z`.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example `2012-03-20T17:03:43.221Z`.
   *
   * @public
   */
  LastInventoryDate?: string | undefined;

  /**
   * The number of archives in the vault as of the last inventory date. This field will return `null` if an inventory has not yet run on the vault, for example if you just created the vault.
   *
   * @public
   */
  NumberOfArchives?: number | undefined;

  /**
   * Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.
   *
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * Input for GetDataRetrievalPolicy.
 *
 * @public
 */
export interface GetDataRetrievalPolicyInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Contains the Amazon Glacier response to the `GetDataRetrievalPolicy` request.
 *
 * @public
 */
export interface GetDataRetrievalPolicyOutput {
  /**
   * Contains the returned data retrieval policy in JSON format.
   *
   * @public
   */
  Policy?: DataRetrievalPolicy | undefined;
}

/**
 * Provides options for downloading output of an Amazon Glacier job.
 *
 * @public
 */
export interface GetJobOutputInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The job ID whose data is downloaded.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The range of bytes to retrieve from the output. For example, if you want to download the first 1,048,576 bytes, specify the range as `bytes=0-1048575`. By default, this operation downloads the entire output.
   *
   *
   *
   * If the job output is large, then you can use a range to retrieve a portion of the output. This allows you to download the entire output in smaller chunks of bytes. For example, suppose you have 1 GB of job output you want to download and you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job Output requests. You use the following process to download the job output:
   *
   *
   *
   * 1. Download a 128 MB chunk of output by specifying the appropriate byte range. Verify that all 128 MB of data was received.
   * 2. Along with the data, the response includes a SHA256 tree hash of the payload. You compute the checksum of the payload on the client and compare it with the checksum you received in the response to ensure you received all the expected data.
   * 3. Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time specifying the appropriate byte range.
   * 4. After downloading all the parts of the job output, you have a list of eight checksum values. Compute the tree hash of these values to find the checksum of the entire output. Using the DescribeJob API, obtain job information of the job that provided you the output. The response includes the checksum of the entire archive stored in Amazon Glacier. You compare this value with the checksum you computed to ensure you have downloaded the entire archive content with no errors.
   *
   * @public
   */
  range?: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface GetJobOutputOutput {
  /**
   * The job data, either archive data or inventory data.
   *
   * @public
   */
  body?: StreamingBlobTypes | undefined;

  /**
   * The checksum of the data in the response. This header is returned only when retrieving the output for an archive retrieval job. Furthermore, this header appears only under the following conditions:
   *
   * - You get the entire range of the archive.
   * - You request a range to return of the archive that starts and ends on a multiple of 1 MB. For example, if you have an 3.1 MB archive and you specify a range to return that starts at 1 MB and ends at 2 MB, then the x-amz-sha256-tree-hash is returned as a response header.
   * - You request a range of the archive to return that starts on a multiple of 1 MB and goes to the end of the archive. For example, if you have a 3.1 MB archive and you specify a range that starts at 2 MB and ends at 3.1 MB (the end of the archive), then the x-amz-sha256-tree-hash is returned as a response header.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The HTTP response code for a job output request. The value depends on whether a range was specified in the request.
   *
   * @public
   */
  status?: number | undefined;

  /**
   * The range of bytes returned by Amazon Glacier. If only partial output is downloaded, the response provides the range of bytes Amazon Glacier returned. For example, bytes 0-1048575/8388608 returns the first 1 MB from 8 MB.
   *
   * @public
   */
  contentRange?: string | undefined;

  /**
   * Indicates the range units accepted. For more information, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   *
   * @public
   */
  acceptRanges?: string | undefined;

  /**
   * The Content-Type depends on whether the job output is an archive or a vault inventory. For archive data, the Content-Type is application/octet-stream. For vault inventory, if you requested CSV format when you initiated the job, the Content-Type is text/csv. Otherwise, by default, vault inventory is returned as JSON, and the Content-Type is application/json.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The description of an archive.
   *
   * @public
   */
  archiveDescription?: string | undefined;
}

/**
 * Input for GetVaultAccessPolicy.
 *
 * @public
 */
export interface GetVaultAccessPolicyInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains the vault access policy.
 *
 * @public
 */
export interface VaultAccessPolicy {
  /**
   * The vault access policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * Output for GetVaultAccessPolicy.
 *
 * @public
 */
export interface GetVaultAccessPolicyOutput {
  /**
   * Contains the returned vault access policy as a JSON string.
   *
   * @public
   */
  policy?: VaultAccessPolicy | undefined;
}

/**
 * The input values for `GetVaultLock`.
 *
 * @public
 */
export interface GetVaultLockInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface GetVaultLockOutput {
  /**
   * The vault lock policy as a JSON string, which uses "\" as an escape character.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The state of the vault lock. `InProgress` or `Locked`.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The UTC date and time at which the lock ID expires. This value can be `null` if the vault lock is in a `Locked` state.
   *
   * @public
   */
  ExpirationDate?: string | undefined;

  /**
   * The UTC date and time at which the vault lock was put into the `InProgress` state.
   *
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * Provides options for retrieving the notification configuration set on an Amazon Glacier vault.
 *
 * @public
 */
export interface GetVaultNotificationsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Represents a vault's notification configuration.
 *
 * @public
 */
export interface VaultNotificationConfig {
  /**
   * The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).
   *
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * A list of one or more events for which Amazon Glacier will send a notification to the specified Amazon SNS topic.
   *
   * @public
   */
  Events?: string[] | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface GetVaultNotificationsOutput {
  /**
   * Returns the notification configuration set on the vault.
   *
   * @public
   */
  vaultNotificationConfig?: VaultNotificationConfig | undefined;
}

/**
 * Provides options for specifying a range inventory retrieval job.
 *
 * @public
 */
export interface InventoryRetrievalJobInput {
  /**
   * The start of the date range in UTC for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example `2013-03-20T17:03:43Z`.
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example `2013-03-20T17:03:43Z`.
   *
   * @public
   */
  EndDate?: string | undefined;

  /**
   * Specifies the maximum number of inventory items returned per vault inventory retrieval request. Valid values are greater than or equal to 1.
   *
   * @public
   */
  Limit?: string | undefined;

  /**
   * An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new **InitiateJob** request to obtain additional inventory items. If there are no more inventory items, this value is `null`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides options for defining a job.
 *
 * @public
 */
export interface JobParameters {
  /**
   * When initiating a job to retrieve a vault inventory, you can optionally add this parameter to your request to specify the output format. If you are initiating an inventory job and do not specify a Format field, JSON is the default format. Valid values are "CSV" and "JSON".
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The job type. You can initiate a job to perform a select query on an archive, retrieve an archive, or get an inventory of a vault. Valid values are "select", "archive-retrieval" and "inventory-retrieval".
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The ID of the archive that you want to retrieve. This field is required only if `Type` is set to `select` or `archive-retrieval`code>. An error occurs if you specify this request parameter for an inventory retrieval job request.
   *
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * The optional description for the job. The description must be less than or equal to 1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically, ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon SNS topic ARN to which Amazon Glacier sends a notification when the job is completed and the output is ready for you to download. The specified topic publishes the notification to its subscribers. The SNS topic must exist.
   *
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * The byte range to retrieve for an archive retrieval. in the form "*StartByteValue*-*EndByteValue*" If not specified, the whole archive is retrieved. If specified, the byte range must be megabyte (1024*1024) aligned which means that *StartByteValue* must be divisible by 1 MB and *EndByteValue* plus 1 must be divisible by 1 MB or be the end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange is not megabyte aligned, this operation returns a 400 response.
   *
   * An error occurs if you specify this field for an inventory retrieval job request.
   *
   * @public
   */
  RetrievalByteRange?: string | undefined;

  /**
   * The tier to use for a select or an archive retrieval job. Valid values are `Expedited`, `Standard`, or `Bulk`. `Standard` is the default.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * Input parameters used for range inventory retrieval.
   *
   * @public
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobInput | undefined;

  /**
   * Contains the parameters that define a job.
   *
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * Contains information about the location where the select job results are stored.
   *
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * Provides options for initiating an Amazon Glacier job.
 *
 * @public
 */
export interface InitiateJobInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * Provides options for specifying job information.
   *
   * @public
   */
  jobParameters?: JobParameters | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface InitiateJobOutput {
  /**
   * The relative URI path of the job.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The ID of the job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The path to the location of where the select results are stored.
   *
   * @public
   */
  jobOutputPath?: string | undefined;
}

/**
 * Provides options for initiating a multipart upload to an Amazon Glacier vault.
 *
 * @public
 */
export interface InitiateMultipartUploadInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The archive description that you are uploading in parts.
   *
   * The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).
   *
   * @public
   */
  archiveDescription?: string | undefined;

  /**
   * The size of each part except the last, in bytes. The last part can be smaller than this part size.
   *
   * @public
   */
  partSize?: string | undefined;
}

/**
 * The Amazon Glacier response to your request.
 *
 * @public
 */
export interface InitiateMultipartUploadOutput {
  /**
   * The relative URI path of the multipart upload ID Amazon Glacier created.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The ID of the multipart upload. This value is also included as part of the location.
   *
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * Contains the vault lock policy.
 *
 * @public
 */
export interface VaultLockPolicy {
  /**
   * The vault lock policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * The input values for `InitiateVaultLock`.
 *
 * @public
 */
export interface InitiateVaultLockInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The vault lock policy as a JSON string, which uses "\" as an escape character.
   *
   * @public
   */
  policy?: VaultLockPolicy | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface InitiateVaultLockOutput {
  /**
   * The lock ID, which is used to complete the vault locking process.
   *
   * @public
   */
  lockId?: string | undefined;
}

/**
 * Provides options for retrieving a job list for an Amazon Glacier vault.
 *
 * @public
 */
export interface ListJobsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The type of job status to return. You can specify the following values: `InProgress`, `Succeeded`, or `Failed`.
   *
   * @public
   */
  statuscode?: string | undefined;

  /**
   * The state of the jobs to return. You can specify `true` or `false`.
   *
   * @public
   */
  completed?: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface ListJobsOutput {
  /**
   * A list of job objects. Each job object contains metadata describing the job.
   *
   * @public
   */
  JobList?: GlacierJobDescription[] | undefined;

  /**
   * An opaque string used for pagination that specifies the job at which the listing of jobs should begin. You get the `marker` value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of the results started in a previous List Jobs request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.
 *
 * @public
 */
export interface ListMultipartUploadsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 50 uploads.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.
   *
   * @public
   */
  marker?: string | undefined;
}

/**
 * A list of in-progress multipart uploads for a vault.
 *
 * @public
 */
export interface UploadListElement {
  /**
   * The ID of a multipart upload.
   *
   * @public
   */
  MultipartUploadId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vault that contains the archive.
   *
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * The description of the archive that was specified in the Initiate Multipart Upload request.
   *
   * @public
   */
  ArchiveDescription?: string | undefined;

  /**
   * The part size, in bytes, specified in the Initiate Multipart Upload request. This is the size of all the parts in the upload except the last part, which may be smaller than this size.
   *
   * @public
   */
  PartSizeInBytes?: number | undefined;

  /**
   * The UTC time at which the multipart upload was initiated.
   *
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface ListMultipartUploadsOutput {
  /**
   * A list of in-progress multipart uploads.
   *
   * @public
   */
  UploadsList?: UploadListElement[] | undefined;

  /**
   * An opaque string that represents where to continue pagination of the results. You use the marker in a new List Multipart Uploads request to obtain more uploads in the list. If there are no more uploads, this value is `null`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload.
 *
 * @public
 */
export interface ListPartsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The upload ID of the multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The maximum number of parts to be returned. The default limit is 50. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * A list of the part sizes of the multipart upload.
 *
 * @public
 */
export interface PartListElement {
  /**
   * The byte range of a part, inclusive of the upper value of the range.
   *
   * @public
   */
  RangeInBytes?: string | undefined;

  /**
   * The SHA256 tree hash value that Amazon Glacier calculated for the part. This field is never `null`.
   *
   * @public
   */
  SHA256TreeHash?: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface ListPartsOutput {
  /**
   * The ID of the upload to which the parts are associated.
   *
   * @public
   */
  MultipartUploadId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the vault to which the multipart upload was initiated.
   *
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * The description of the archive that was specified in the Initiate Multipart Upload request.
   *
   * @public
   */
  ArchiveDescription?: string | undefined;

  /**
   * The part size in bytes. This is the same value that you specified in the Initiate Multipart Upload request.
   *
   * @public
   */
  PartSizeInBytes?: number | undefined;

  /**
   * The UTC time at which the multipart upload was initiated.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * A list of the part sizes of the multipart upload. Each object in the array contains a `RangeBytes` and `sha256-tree-hash` name/value pair.
   *
   * @public
   */
  Parts?: PartListElement[] | undefined;

  /**
   * An opaque string that represents where to continue pagination of the results. You use the marker in a new List Parts request to obtain more jobs in the list. If there are no more parts, this value is `null`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedCapacityInput {
  /**
   * The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * The definition for a provisioned capacity unit.
 *
 * @public
 */
export interface ProvisionedCapacityDescription {
  /**
   * The ID that identifies the provisioned capacity unit.
   *
   * @public
   */
  CapacityId?: string | undefined;

  /**
   * The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  StartDate?: string | undefined;

  /**
   * The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ExpirationDate?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedCapacityOutput {
  /**
   * The response body contains the following JSON fields.
   *
   * @public
   */
  ProvisionedCapacityList?: ProvisionedCapacityDescription[] | undefined;
}

/**
 * The input value for `ListTagsForVaultInput`.
 *
 * @public
 */
export interface ListTagsForVaultInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface ListTagsForVaultOutput {
  /**
   * The tags attached to the vault. Each tag is composed of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault.
 *
 * @public
 */
export interface ListVaultsInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface ListVaultsOutput {
  /**
   * List of vaults.
   *
   * @public
   */
  VaultList?: DescribeVaultOutput[] | undefined;

  /**
   * The vault ARN at which to continue pagination of the results. You use the marker in another List Vaults request to obtain more vaults in the list.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityInput {
  /**
   * The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityOutput {
  /**
   * The ID that identifies the provisioned capacity unit.
   *
   * @public
   */
  capacityId?: string | undefined;
}

/**
 * The input value for `RemoveTagsFromVaultInput`.
 *
 * @public
 */
export interface RemoveTagsFromVaultInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * A list of tag keys. Each corresponding tag is removed from the vault.
   *
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * SetDataRetrievalPolicy input.
 *
 * @public
 */
export interface SetDataRetrievalPolicyInput {
  /**
   * The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The data retrieval policy in JSON format.
   *
   * @public
   */
  Policy?: DataRetrievalPolicy | undefined;
}

/**
 * SetVaultAccessPolicy input.
 *
 * @public
 */
export interface SetVaultAccessPolicyInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The vault access policy as a JSON string.
   *
   * @public
   */
  policy?: VaultAccessPolicy | undefined;
}

/**
 * Provides options to configure notifications that will be sent when specific events happen to a vault.
 *
 * @public
 */
export interface SetVaultNotificationsInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * Provides options for specifying notification configuration.
   *
   * @public
   */
  vaultNotificationConfig?: VaultNotificationConfig | undefined;
}

/**
 * Provides options to add an archive to a vault.
 *
 * @public
 */
export interface UploadArchiveInput {
  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The optional description of the archive you are uploading.
   *
   * @public
   */
  archiveDescription?: string | undefined;

  /**
   * The SHA256 tree hash of the data being uploaded.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The data to upload.
   *
   * @public
   */
  body?: StreamingBlobTypes | undefined;
}

/**
 * Provides options to upload a part of an archive in a multipart upload operation.
 *
 * @public
 */
export interface UploadMultipartPartInput {
  /**
   * The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the vault.
   *
   * @public
   */
  vaultName: string | undefined;

  /**
   * The upload ID of the multipart upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The SHA256 tree hash of the data being uploaded.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.
   *
   * @public
   */
  range?: string | undefined;

  /**
   * The data to upload.
   *
   * @public
   */
  body?: StreamingBlobTypes | undefined;
}

/**
 * Contains the Amazon Glacier response to your request.
 *
 * @public
 */
export interface UploadMultipartPartOutput {
  /**
   * The SHA256 tree hash that Amazon Glacier computed for the uploaded part.
   *
   * @public
   */
  checksum?: string | undefined;
}
