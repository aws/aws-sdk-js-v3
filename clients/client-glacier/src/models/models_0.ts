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
 * <p>Provides options to abort a multipart upload identified by the upload ID.</p>
 *
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon Glacier</a>.</p>
 * @public
 */
export interface AbortMultipartUploadInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The upload ID of the multipart upload to delete.</p>
   * @public
   */
  uploadId: string | undefined;
}

/**
 * <p>The input values for <code>AbortVaultLock</code>.</p>
 * @public
 */
export interface AbortVaultLockInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains information about the grantee.</p>
 * @public
 */
export interface Grantee {
  /**
   * <p>Type of grantee</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>Screen name of the grantee.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>URI of the grantee group.</p>
   * @public
   */
  URI?: string | undefined;

  /**
   * <p>The canonical user ID of the grantee.</p>
   * @public
   */
  ID?: string | undefined;

  /**
   * <p>Email address of the grantee.</p>
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * <p>Contains information about a grant.</p>
 * @public
 */
export interface Grant {
  /**
   * <p>The grantee.</p>
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * <p>Specifies the permission given to the grantee. </p>
   * @public
   */
  Permission?: Permission | undefined;
}

/**
 * <p>The input values for <code>AddTagsToVault</code>.</p>
 * @public
 */
export interface AddTagsToVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The tags to add to the vault. Each tag is composed of a key and a value. The value
   *          can be an empty string.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For
 *          conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon Glacier</a>.</p>
 * @public
 */
export interface ArchiveCreationOutput {
  /**
   * <p>The relative URI path of the newly added archive resource.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The checksum of the archive computed by Amazon Glacier.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The ID of the archive. This value is also included as part of the location.</p>
   * @public
   */
  archiveId?: string | undefined;
}

/**
 * <p>Provides options to complete a multipart upload operation. This informs Amazon
 *          Glacier that all the archive parts have been uploaded and Amazon Glacier (Glacier) can now assemble
 *          the archive from the uploaded parts. After assembling and saving the archive to the vault,
 *          Glacier returns the URI path of the newly created archive resource.</p>
 * @public
 */
export interface CompleteMultipartUploadInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The upload ID of the multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The total size, in bytes, of the entire archive. This value should be the sum of all
   *          the sizes of the individual parts that you uploaded.</p>
   * @public
   */
  archiveSize?: string | undefined;

  /**
   * <p>The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash
   *          of the individual parts. If the value you specify in the request does not match the SHA256
   *          tree hash of the final assembled archive as computed by Amazon Glacier (Glacier),
   *          Glacier returns an error and the request fails.</p>
   * @public
   */
  checksum?: string | undefined;
}

/**
 * <p>The input values for <code>CompleteVaultLock</code>.</p>
 * @public
 */
export interface CompleteVaultLockInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.</p>
   * @public
   */
  lockId: string | undefined;
}

/**
 * <p>Provides options to create a vault.</p>
 * @public
 */
export interface CreateVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface CreateVaultOutput {
  /**
   * <p>The URI of the vault that was created.</p>
   * @public
   */
  location?: string | undefined;
}

/**
 * <p>Contains information about the comma-separated value (CSV) file to select from.</p>
 * @public
 */
export interface CSVInput {
  /**
   * <p>Describes the first line of input. Valid values are <code>None</code>,
   *                 <code>Ignore</code>, and <code>Use</code>.</p>
   * @public
   */
  FileHeaderInfo?: FileHeaderInfo | undefined;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is
   *             present at the start of that row.</p>
   * @public
   */
  Comments?: string | undefined;

  /**
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * <p>A value used to separate individual records from each other.</p>
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * <p>A value used to separate individual fields from each other within a record.</p>
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * <p>Contains information about the comma-separated value (CSV) file that the job results
 *             are stored in.</p>
 * @public
 */
export interface CSVOutput {
  /**
   * <p>A value that indicates whether all output fields should be contained within quotation
   *             marks.</p>
   * @public
   */
  QuoteFields?: QuoteFields | undefined;

  /**
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * <p>A value used to separate individual records from each other.</p>
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * <p>A value used to separate individual fields from each other within a record.</p>
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * <p>Data retrieval policy rule.</p>
 * @public
 */
export interface DataRetrievalRule {
  /**
   * <p>The type of data retrieval policy to set.</p>
   *          <p>Valid values: BytesPerHour|FreeTier|None</p>
   * @public
   */
  Strategy?: string | undefined;

  /**
   * <p>The maximum number of bytes that can be retrieved in an hour.</p>
   *          <p>This field is required only if the value of the Strategy field is
   *             <code>BytesPerHour</code>. Your PUT operation will be rejected if the Strategy field is
   *          not set to <code>BytesPerHour</code> and you set this field.</p>
   * @public
   */
  BytesPerHour?: number | undefined;
}

/**
 * <p>Data retrieval policy.</p>
 * @public
 */
export interface DataRetrievalPolicy {
  /**
   * <p>The policy rule. Although this is a list type, currently there must be only one rule,
   *          which contains a Strategy field and optionally a BytesPerHour field.</p>
   * @public
   */
  Rules?: DataRetrievalRule[] | undefined;
}

/**
 * <p>Provides options for deleting an archive from an Amazon Glacier vault.</p>
 * @public
 */
export interface DeleteArchiveInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The ID of the archive to delete.</p>
   * @public
   */
  archiveId: string | undefined;
}

/**
 * <p>Provides options for deleting a vault from Amazon Glacier.</p>
 * @public
 */
export interface DeleteVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>DeleteVaultAccessPolicy input.</p>
 * @public
 */
export interface DeleteVaultAccessPolicyInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Provides options for deleting a vault notification configuration from an Amazon
 *          Glacier vault.</p>
 * @public
 */
export interface DeleteVaultNotificationsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Provides options for retrieving a job description.</p>
 * @public
 */
export interface DescribeJobInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The ID of the job to describe.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Describes the options for a range inventory retrieval job.</p>
 * @public
 */
export interface InventoryRetrievalJobDescription {
  /**
   * <p>The output format for the vault inventory list, which is set by the <b>InitiateJob</b> request when initiating a job to retrieve a vault
   *             inventory. Valid values are <code>CSV</code> and <code>JSON</code>.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The start of the date range in Universal Coordinated Time (UTC) for vault inventory
   *             retrieval that includes archives created on or after this date. This value should be a
   *             string in the ISO 8601 date format, for example
   *             <code>2013-03-20T17:03:43Z</code>.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The end of the date range in UTC for vault inventory retrieval that includes
   *             archives created before this date. This value should be a string in the ISO 8601 date
   *             format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>The maximum number of inventory items returned per vault inventory retrieval
   *             request. This limit is set when initiating the job with the a <b>InitiateJob</b> request. </p>
   * @public
   */
  Limit?: string | undefined;

  /**
   * <p>An opaque string that represents where to continue pagination of the vault
   *             inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are
   *             no more inventory items, this value is <code>null</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html#api-initiate-job-post-vault-inventory-list-filtering"> Range Inventory Retrieval</a>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains information about the encryption used to store the job results in Amazon S3. </p>
 * @public
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3, for
   *             example <code>AES256</code> or <code>aws:kms</code>.</p>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>The AWS KMS key ID to use for object encryption. All GET and PUT requests for an
   *             object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or
   *             Signature Version 4. </p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>Optional. If the encryption type is <code>aws:kms</code>, you can use this value to
   *             specify the encryption context for the job results.</p>
   * @public
   */
  KMSContext?: string | undefined;
}

/**
 * <p>Contains information about the location in Amazon S3 where the select job results are stored.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket where the job results are stored.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix that is prepended to the results for this request.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Contains information about the encryption used to store the job results in Amazon S3.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p>The canned access control list (ACL) to apply to the job results.</p>
   * @public
   */
  CannedACL?: CannedACL | undefined;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   * @public
   */
  AccessControlList?: Grant[] | undefined;

  /**
   * <p>The tag-set that is applied to the job results.</p>
   * @public
   */
  Tagging?: Record<string, string> | undefined;

  /**
   * <p>A map of metadata to store with the job results in Amazon S3.</p>
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * <p>The storage class used to store the job results.</p>
   * @public
   */
  StorageClass?: StorageClass | undefined;
}

/**
 * <p>Contains information about the location where the select job results are stored.</p>
 * @public
 */
export interface OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the job request.</p>
   * @public
   */
  S3?: S3Location | undefined;
}

/**
 * <p>Describes how the archive is serialized.</p>
 * @public
 */
export interface InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   * @public
   */
  csv?: CSVInput | undefined;
}

/**
 * <p>Describes how the select output is serialized.</p>
 * @public
 */
export interface OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded query results.</p>
   * @public
   */
  csv?: CSVOutput | undefined;
}

/**
 * <p>Contains information about the parameters used for a select.</p>
 * @public
 */
export interface SelectParameters {
  /**
   * <p>Describes the serialization format of the object.</p>
   * @public
   */
  InputSerialization?: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression, for example <code>SQL</code>.</p>
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * <p>The expression that is used to select the object.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>Describes how the results of the select job are serialized.</p>
   * @public
   */
  OutputSerialization?: OutputSerialization | undefined;
}

/**
 * <p>Contains the description of an Amazon S3 Glacier job.</p>
 * @public
 */
export interface GlacierJobDescription {
  /**
   * <p>An opaque string that identifies an Amazon S3 Glacier job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The job description provided when initiating the job.</p>
   * @public
   */
  JobDescription?: string | undefined;

  /**
   * <p>The job type. This value is either <code>ArchiveRetrieval</code>,
   *                 <code>InventoryRetrieval</code>, or
   *             <code>Select</code>. </p>
   * @public
   */
  Action?: ActionCode | undefined;

  /**
   * <p>The archive ID requested for a select job or archive retrieval. Otherwise, this
   *             field is null.</p>
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was
   *             requested.</p>
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * <p>The UTC date when the job was created. This value is a string representation of ISO
   *             8601 date format, for example <code>"2012-03-20T17:03:43.221Z"</code>.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The job status. When a job is completed, you get the job's output using Get Job
   *             Output (GET output).</p>
   * @public
   */
  Completed?: boolean | undefined;

  /**
   * <p>The status code can be <code>InProgress</code>, <code>Succeeded</code>, or
   *                 <code>Failed</code>, and indicates the status of the job.</p>
   * @public
   */
  StatusCode?: StatusCode | undefined;

  /**
   * <p>A friendly message that describes the job status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>For an archive retrieval job, this value is the size in bytes of the archive being
   *             requested for download. For an inventory retrieval or select job, this value is
   *             null.</p>
   * @public
   */
  ArchiveSizeInBytes?: number | undefined;

  /**
   * <p>For an inventory retrieval job, this value is the size in bytes of the inventory
   *             requested for download. For an archive retrieval or select job, this value is
   *             null.</p>
   * @public
   */
  InventorySizeInBytes?: number | undefined;

  /**
   * <p>An Amazon SNS topic that receives notification.</p>
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * <p>The UTC time that the job request completed. While the job is in progress, the
   *             value is null.</p>
   * @public
   */
  CompletionDate?: string | undefined;

  /**
   * <p>For an archive retrieval job, this value is the checksum of the archive. Otherwise,
   *             this value is null.</p>
   *         <p>The SHA256 tree hash value for the requested range of an archive. If the <b>InitiateJob</b> request for an archive specified a tree-hash
   *             aligned range, then this field returns a value.</p>
   *         <p>If the whole archive is retrieved, this value is the same as the
   *             ArchiveSHA256TreeHash value.</p>
   *         <p>This field is null for the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Archive retrieval jobs that specify a range that is not tree-hash
   *                     aligned</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Archival jobs that specify a range that is equal to the whole archive, when
   *                     the job status is <code>InProgress</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Inventory jobs</p>
   *             </li>
   *             <li>
   *                 <p>Select jobs</p>
   *             </li>
   *          </ul>
   * @public
   */
  SHA256TreeHash?: string | undefined;

  /**
   * <p>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory
   *             retrieval or select jobs, this field is null.</p>
   * @public
   */
  ArchiveSHA256TreeHash?: string | undefined;

  /**
   * <p>The retrieved byte range for archive retrieval jobs in the form
   *                 <i>StartByteValue</i>-<i>EndByteValue</i>. If no range
   *             was specified in the archive retrieval, then the whole archive is retrieved. In this
   *             case, <i>StartByteValue</i> equals 0 and <i>EndByteValue</i>
   *             equals the size of the archive minus 1. For inventory retrieval or select jobs, this
   *             field is null. </p>
   * @public
   */
  RetrievalByteRange?: string | undefined;

  /**
   * <p>The tier to use for a select or an archive retrieval. Valid values are
   *                 <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *                 <code>Standard</code> is the default.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p>Parameters used for range inventory retrieval.</p>
   * @public
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobDescription | undefined;

  /**
   * <p>Contains the job output location.</p>
   * @public
   */
  JobOutputPath?: string | undefined;

  /**
   * <p>Contains the parameters used for a select.</p>
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * <p>Contains the location where the data from the select job is stored.</p>
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * <p>Provides options for retrieving metadata for a specific vault in Amazon
 *          Glacier.</p>
 * @public
 */
export interface DescribeVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface DescribeVaultOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the vault.</p>
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  VaultName?: string | undefined;

  /**
   * <p>The Universal Coordinated Time (UTC) date when the vault was created. This value
   *          should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last
   *          vault inventory.  This value should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   * @public
   */
  LastInventoryDate?: string | undefined;

  /**
   * <p>The number of archives in the vault as of the last inventory date. This field will
   *          return <code>null</code> if an inventory has not yet run on the vault, for example if you
   *          just created the vault.</p>
   * @public
   */
  NumberOfArchives?: number | undefined;

  /**
   * <p>Total size, in bytes, of the archives in the vault as of the last inventory date.
   *          This field will return null if an inventory has not yet run on the vault, for example if
   *          you just created the vault.</p>
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * <p>Input for GetDataRetrievalPolicy.</p>
 * @public
 */
export interface GetDataRetrievalPolicyInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to the <code>GetDataRetrievalPolicy</code>
 *          request.</p>
 * @public
 */
export interface GetDataRetrievalPolicyOutput {
  /**
   * <p>Contains the returned data retrieval policy in JSON format.</p>
   * @public
   */
  Policy?: DataRetrievalPolicy | undefined;
}

/**
 * <p>Provides options for downloading output of an Amazon Glacier job.</p>
 * @public
 */
export interface GetJobOutputInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The job ID whose data is downloaded.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The range of bytes to retrieve from the output. For example, if you want to download
   *          the first 1,048,576 bytes, specify the range as <code>bytes=0-1048575</code>. By default, this operation
   *          downloads the entire output.</p>
   *
   *          <p>If the job output is large, then you can use a range to
   *          retrieve a portion of the output. This allows you to download the entire output in smaller
   *          chunks of bytes. For example, suppose you have 1 GB of job output you want to download and
   *          you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job
   *          Output requests. You use the following process to download the job output:</p>
   *
   *          <ol>
   *             <li>
   *                <p>Download a 128 MB chunk of output by specifying the appropriate byte range.
   *                   Verify that all 128 MB of data was received.</p>
   *             </li>
   *             <li>
   *                <p>Along with the data, the response includes a SHA256 tree hash of the payload.
   *                   You compute the checksum of the payload on the client and compare it with the
   *                   checksum you received in the response to ensure you received all the expected
   *                   data.</p>
   *             </li>
   *             <li>
   *                <p>Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time
   *                   specifying the appropriate byte range.</p>
   *             </li>
   *             <li>
   *                <p>After downloading all the parts of the job output, you have a list of eight
   *                   checksum values. Compute the tree hash of these values to find the checksum of the
   *                   entire output. Using the <a>DescribeJob</a> API, obtain job information of
   *                   the job that provided you the output. The response includes the checksum of the
   *                   entire archive stored in Amazon Glacier. You compare this value with the checksum you
   *                   computed to ensure you have downloaded the entire archive content with no
   *                   errors.</p>
   *                <p></p>
   *             </li>
   *          </ol>
   * @public
   */
  range?: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface GetJobOutputOutput {
  /**
   * <p>The job data, either archive data or inventory data.</p>
   * @public
   */
  body?: StreamingBlobTypes | undefined;

  /**
   * <p>The checksum of the data in the response. This header is returned only when
   *          retrieving the output for an archive retrieval job. Furthermore, this header appears only
   *          under the following conditions:</p>
   *          <ul>
   *             <li>
   *                 <p>You get the entire range of the archive.</p>
   *             </li>
   *             <li>
   *                <p>You request a range to return of the archive that starts and ends on a multiple
   *                of 1 MB. For example, if you have an 3.1 MB archive and you specify a range to return
   *                that starts at 1 MB and ends at 2 MB, then the x-amz-sha256-tree-hash is returned as
   *                a response header.</p>
   *             </li>
   *             <li>
   *                <p>You request a range of the archive to return that starts on a multiple of 1 MB
   *                and goes to the end of the archive. For example, if you have a 3.1 MB archive and you
   *                specify a range that starts at 2 MB and ends at 3.1 MB (the end of the archive), then
   *                the x-amz-sha256-tree-hash is returned as a response header.</p>
   *             </li>
   *          </ul>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The HTTP response code for a job output request. The value depends on whether a range
   *          was specified in the request.</p>
   * @public
   */
  status?: number | undefined;

  /**
   * <p>The range of bytes returned by Amazon Glacier. If only partial output is downloaded,
   *          the response provides the range of bytes Amazon Glacier returned. For example, bytes
   *          0-1048575/8388608 returns the first 1 MB from 8 MB.</p>
   * @public
   */
  contentRange?: string | undefined;

  /**
   * <p>Indicates the range units accepted. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html">RFC2616</a>. </p>
   * @public
   */
  acceptRanges?: string | undefined;

  /**
   * <p>The Content-Type depends on whether the job output is an archive or a vault
   *          inventory. For archive data, the Content-Type is application/octet-stream. For vault
   *          inventory, if you requested CSV format when you initiated the job, the Content-Type is
   *          text/csv. Otherwise, by default, vault inventory is returned as JSON, and the Content-Type
   *          is application/json.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The description of an archive.</p>
   * @public
   */
  archiveDescription?: string | undefined;
}

/**
 * <p>Input for GetVaultAccessPolicy.</p>
 * @public
 */
export interface GetVaultAccessPolicyInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains the vault access policy.</p>
 * @public
 */
export interface VaultAccessPolicy {
  /**
   * <p>The vault access policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>Output for GetVaultAccessPolicy.</p>
 * @public
 */
export interface GetVaultAccessPolicyOutput {
  /**
   * <p>Contains the returned vault access policy as a JSON string.</p>
   * @public
   */
  policy?: VaultAccessPolicy | undefined;
}

/**
 * <p>The input values for <code>GetVaultLock</code>.</p>
 * @public
 */
export interface GetVaultLockInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface GetVaultLockOutput {
  /**
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The state of the vault lock. <code>InProgress</code> or
   *          <code>Locked</code>.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The UTC date and time at which the lock ID expires. This value can be
   *             <code>null</code> if the vault lock is in a <code>Locked</code> state.</p>
   * @public
   */
  ExpirationDate?: string | undefined;

  /**
   * <p>The UTC date and time at which the vault lock was put into the
   *             <code>InProgress</code> state.</p>
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * <p>Provides options for retrieving the notification configuration set on an Amazon
 *          Glacier vault.</p>
 * @public
 */
export interface GetVaultNotificationsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Represents a vault's notification configuration.</p>
 * @public
 */
export interface VaultNotificationConfig {
  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name
   *          (ARN).</p>
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * <p>A list of one or more events for which Amazon Glacier will send a notification to the
   *          specified Amazon SNS topic.</p>
   * @public
   */
  Events?: string[] | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface GetVaultNotificationsOutput {
  /**
   * <p>Returns the notification configuration set on the vault.</p>
   * @public
   */
  vaultNotificationConfig?: VaultNotificationConfig | undefined;
}

/**
 * <p>Provides options for specifying a range inventory retrieval job.</p>
 * @public
 */
export interface InventoryRetrievalJobInput {
  /**
   * <p>The start of the date range in UTC for vault inventory retrieval that includes
   *          archives created on or after this date. This value should be a string in the ISO 8601 date
   *          format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The end of the date range in UTC for vault inventory retrieval that includes archives
   *          created before this date. This value should be a string in the ISO 8601 date format, for
   *          example <code>2013-03-20T17:03:43Z</code>.</p>
   * @public
   */
  EndDate?: string | undefined;

  /**
   * <p>Specifies the maximum number of inventory items returned per vault inventory
   *          retrieval request. Valid values are greater than or equal to 1.</p>
   * @public
   */
  Limit?: string | undefined;

  /**
   * <p>An opaque string that represents where to continue pagination of the vault inventory
   *          retrieval results. You use the marker in a new <b>InitiateJob</b>
   *          request to obtain additional inventory items. If there are no more inventory items, this
   *          value is <code>null</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Provides options for defining a job.</p>
 * @public
 */
export interface JobParameters {
  /**
   * <p>When initiating a job to retrieve a vault inventory, you can optionally add this
   *          parameter to your request to specify the output format. If you are initiating an inventory
   *          job and do not specify a Format field, JSON is the default format. Valid values are "CSV"
   *          and "JSON".</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The job type. You can initiate a job to perform a select query on an archive,
   *          retrieve an archive, or get an inventory of a vault.
   *          Valid values are "select", "archive-retrieval" and "inventory-retrieval".</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The ID of the archive that you want to retrieve. This field is required only if
   *             <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code>.
   *          An error occurs if you specify this
   *          request parameter for an inventory retrieval job request. </p>
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * <p>The optional description for the job. The description must be less than or equal to
   *          1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically,
   *          ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN to which Amazon Glacier sends a notification when the job is
   *          completed and the output is ready for you to download. The specified topic publishes the
   *          notification to its subscribers. The SNS topic must exist.</p>
   * @public
   */
  SNSTopic?: string | undefined;

  /**
   * <p>The byte range to retrieve for an archive retrieval. in the form
   *             "<i>StartByteValue</i>-<i>EndByteValue</i>" If not
   *          specified, the whole archive is retrieved. If specified, the byte range must be megabyte
   *          (1024*1024) aligned which means that <i>StartByteValue</i> must be divisible
   *          by 1 MB and <i>EndByteValue</i> plus 1 must be divisible by 1 MB or be the
   *          end of the archive specified as the archive byte size value minus 1. If RetrievalByteRange
   *          is not megabyte aligned, this operation returns a 400 response. </p>
   *          <p>An error occurs if you specify this field for an inventory retrieval job
   *          request.</p>
   * @public
   */
  RetrievalByteRange?: string | undefined;

  /**
   * <p>The tier to use for a select or an archive retrieval job. Valid values are
   *             <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *             <code>Standard</code> is the default.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p>Input parameters used for range inventory retrieval.</p>
   * @public
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobInput | undefined;

  /**
   * <p>Contains the parameters that define a job.</p>
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * <p>Contains information about the location where the select job results are stored.</p>
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * <p>Provides options for initiating an Amazon Glacier job.</p>
 * @public
 */
export interface InitiateJobInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>Provides options for specifying job information.</p>
   * @public
   */
  jobParameters?: JobParameters | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface InitiateJobOutput {
  /**
   * <p>The relative URI path of the job.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The path to the location of where the select results are stored.</p>
   * @public
   */
  jobOutputPath?: string | undefined;
}

/**
 * <p>Provides options for initiating a multipart upload to an Amazon Glacier
 *          vault.</p>
 * @public
 */
export interface InitiateMultipartUploadInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The archive description that you are uploading in parts.</p>
   *          <p>The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example
   *          1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum
   *          allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).</p>
   * @public
   */
  archiveDescription?: string | undefined;

  /**
   * <p>The size of each part except the last, in bytes. The last part can be smaller than
   *          this part size.</p>
   * @public
   */
  partSize?: string | undefined;
}

/**
 * <p>The Amazon Glacier response to your request.</p>
 * @public
 */
export interface InitiateMultipartUploadOutput {
  /**
   * <p>The relative URI path of the multipart upload ID Amazon Glacier created.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The ID of the multipart upload. This value is also included as part of the
   *          location.</p>
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * <p>Contains the vault lock policy.</p>
 * @public
 */
export interface VaultLockPolicy {
  /**
   * <p>The vault lock policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>The input values for <code>InitiateVaultLock</code>.</p>
 * @public
 */
export interface InitiateVaultLockInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   * @public
   */
  policy?: VaultLockPolicy | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface InitiateVaultLockOutput {
  /**
   * <p>The lock ID, which is used to complete the vault locking process.</p>
   * @public
   */
  lockId?: string | undefined;
}

/**
 * <p>Provides options for retrieving a job list for an Amazon Glacier vault.</p>
 * @public
 */
export interface ListJobsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The maximum number of jobs to be returned. The default limit is 50. The number of
   *          jobs returned might be fewer than the specified limit, but the number of returned jobs
   *          never exceeds the limit.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>An opaque string used for pagination. This value specifies the job at which the
   *          listing of jobs should begin. Get the marker value from a previous List Jobs response. You
   *          only need to include the marker if you are continuing the pagination of results started in
   *          a previous List Jobs request.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>The type of job status to return. You can specify the following values:
   *             <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.</p>
   * @public
   */
  statuscode?: string | undefined;

  /**
   * <p>The state of the jobs to return. You can specify <code>true</code> or
   *             <code>false</code>.</p>
   * @public
   */
  completed?: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface ListJobsOutput {
  /**
   * <p>A list of job objects. Each job object contains metadata describing the
   *          job.</p>
   * @public
   */
  JobList?: GlacierJobDescription[] | undefined;

  /**
   * <p>
   *          An opaque string used for pagination that specifies the job at which the listing of jobs should begin.
   *          You get the <code>marker</code> value from a previous List Jobs response.
   *          You only need to include the marker if you are continuing the pagination of the results started in a
   *          previous List Jobs request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Provides options for retrieving list of in-progress multipart uploads for an Amazon
 *          Glacier vault.</p>
 * @public
 */
export interface ListMultipartUploadsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>Specifies the maximum number of uploads returned in the response body. If this value
   *          is not specified, the List Uploads operation returns up to 50 uploads.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>An opaque string used for pagination. This value specifies the upload at which the
   *          listing of uploads should begin. Get the marker value from a previous List Uploads
   *          response. You need only include the marker if you are continuing the pagination of results
   *          started in a previous List Uploads request.</p>
   * @public
   */
  marker?: string | undefined;
}

/**
 * <p>A list of in-progress multipart uploads for a vault.</p>
 * @public
 */
export interface UploadListElement {
  /**
   * <p>The ID of a multipart upload.</p>
   * @public
   */
  MultipartUploadId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault that contains the archive.</p>
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   * @public
   */
  ArchiveDescription?: string | undefined;

  /**
   * <p>The part size, in bytes, specified in the Initiate Multipart Upload request. This is
   *          the size of all the parts in the upload except the last part, which may be smaller than
   *          this size.</p>
   * @public
   */
  PartSizeInBytes?: number | undefined;

  /**
   * <p>The UTC time at which the multipart upload was initiated.</p>
   * @public
   */
  CreationDate?: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface ListMultipartUploadsOutput {
  /**
   * <p>A list of in-progress multipart uploads.</p>
   * @public
   */
  UploadsList?: UploadListElement[] | undefined;

  /**
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Multipart Uploads request to obtain more uploads in the list. If
   *          there are no more uploads, this value is <code>null</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Provides options for retrieving a list of parts of an archive that have been uploaded
 *          in a specific multipart upload.</p>
 * @public
 */
export interface ListPartsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The upload ID of the multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>An opaque string used for pagination. This value specifies the part at which the
   *          listing of parts should begin. Get the marker value from the response of a previous List
   *          Parts response. You need only include the marker if you are continuing the pagination of
   *          results started in a previous List Parts request.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>The maximum number of parts to be returned. The default limit is 50. The number of
   *          parts returned might be fewer than the specified limit, but the number of returned parts
   *          never exceeds the limit.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>A list of the part sizes of the multipart upload.</p>
 * @public
 */
export interface PartListElement {
  /**
   * <p>The byte range of a part, inclusive of the upper value of the range.</p>
   * @public
   */
  RangeInBytes?: string | undefined;

  /**
   * <p>The SHA256 tree hash value that Amazon Glacier calculated for the part. This field is
   *          never <code>null</code>.</p>
   * @public
   */
  SHA256TreeHash?: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface ListPartsOutput {
  /**
   * <p>The ID of the upload to which the parts are associated.</p>
   * @public
   */
  MultipartUploadId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault to which the multipart upload was
   *          initiated.</p>
   * @public
   */
  VaultARN?: string | undefined;

  /**
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   * @public
   */
  ArchiveDescription?: string | undefined;

  /**
   * <p>The part size in bytes. This is the same value that you specified in the Initiate
   *          Multipart Upload request.</p>
   * @public
   */
  PartSizeInBytes?: number | undefined;

  /**
   * <p>The UTC time at which the multipart upload was initiated.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>A list of the part sizes of the multipart upload. Each object in the array contains a
   *          <code>RangeBytes</code> and <code>sha256-tree-hash</code> name/value
   *          pair.</p>
   * @public
   */
  Parts?: PartListElement[] | undefined;

  /**
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Parts request to obtain more jobs in the list. If there are no
   *          more parts, this value is <code>null</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedCapacityInput {
  /**
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>The definition for a provisioned capacity unit.</p>
 * @public
 */
export interface ProvisionedCapacityDescription {
  /**
   * <p>The ID that identifies the provisioned capacity unit.</p>
   * @public
   */
  CapacityId?: string | undefined;

  /**
   * <p>The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  StartDate?: string | undefined;

  /**
   * <p>The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  ExpirationDate?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedCapacityOutput {
  /**
   * <p>The response body contains the following JSON fields.</p>
   * @public
   */
  ProvisionedCapacityList?: ProvisionedCapacityDescription[] | undefined;
}

/**
 * <p>The input value for <code>ListTagsForVaultInput</code>.</p>
 * @public
 */
export interface ListTagsForVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface ListTagsForVaultOutput {
  /**
   * <p>The tags attached to the vault. Each tag is composed of a key and a value.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Provides options to retrieve the vault list owned by the calling user's account. The
 *          list provides metadata information for each vault.</p>
 * @public
 */
export interface ListVaultsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>A string used for pagination. The marker specifies the vault ARN after which the
   *          listing of vaults should begin.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>The maximum number of vaults to be returned. The default limit is 10. The number of
   *          vaults returned might be fewer than the specified limit, but the number of returned vaults
   *          never exceeds the limit.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface ListVaultsOutput {
  /**
   * <p>List of vaults.</p>
   * @public
   */
  VaultList?: DescribeVaultOutput[] | undefined;

  /**
   * <p>The vault ARN at which to continue pagination of the results. You use the marker in
   *          another List Vaults request to obtain more vaults in the list.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityInput {
  /**
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityOutput {
  /**
   * <p>The ID that identifies the provisioned capacity unit.</p>
   * @public
   */
  capacityId?: string | undefined;
}

/**
 * <p>The input value for <code>RemoveTagsFromVaultInput</code>.</p>
 * @public
 */
export interface RemoveTagsFromVaultInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>A list of tag keys. Each corresponding tag is removed from the vault.</p>
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * <p>SetDataRetrievalPolicy input.</p>
 * @public
 */
export interface SetDataRetrievalPolicyInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The data retrieval policy in JSON format.</p>
   * @public
   */
  Policy?: DataRetrievalPolicy | undefined;
}

/**
 * <p>SetVaultAccessPolicy input.</p>
 * @public
 */
export interface SetVaultAccessPolicyInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The vault access policy as a JSON string.</p>
   * @public
   */
  policy?: VaultAccessPolicy | undefined;
}

/**
 * <p>Provides options to configure notifications that will be sent when specific events
 *          happen to a vault.</p>
 * @public
 */
export interface SetVaultNotificationsInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>Provides options for specifying notification configuration.</p>
   * @public
   */
  vaultNotificationConfig?: VaultNotificationConfig | undefined;
}

/**
 * <p>Provides options to add an archive to a vault.</p>
 * @public
 */
export interface UploadArchiveInput {
  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The optional description of the archive you are uploading.</p>
   * @public
   */
  archiveDescription?: string | undefined;

  /**
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The data to upload.</p>
   * @public
   */
  body?: StreamingBlobTypes | undefined;
}

/**
 * <p>Provides options to upload a part of an archive in a multipart upload
 *          operation.</p>
 * @public
 */
export interface UploadMultipartPartInput {
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   * @public
   */
  vaultName: string | undefined;

  /**
   * <p>The upload ID of the multipart upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Identifies the range of bytes in the assembled archive that will be uploaded in this
   *          part. Amazon Glacier uses this information to assemble the archive in the proper sequence.
   *          The format of this header follows RFC 2616. An example header is Content-Range:bytes
   *          0-4194303/*.</p>
   * @public
   */
  range?: string | undefined;

  /**
   * <p>The data to upload.</p>
   * @public
   */
  body?: StreamingBlobTypes | undefined;
}

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 * @public
 */
export interface UploadMultipartPartOutput {
  /**
   * <p>The SHA256 tree hash that Amazon Glacier computed for the uploaded part.</p>
   * @public
   */
  checksum?: string | undefined;
}
