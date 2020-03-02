import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export enum ActionCode {
  ArchiveRetrieval = "ArchiveRetrieval",
  InventoryRetrieval = "InventoryRetrieval",
  Select = "Select"
}

/**
 * <p>Contains information about the comma-separated value (CSV) file to select from.</p>
 */
export interface CSVInput {
  __type?: "CSVInput";
  /**
   * <p>A single character used to indicate that a row should be ignored when the character is
   *             present at the start of that row.</p>
   */
  Comments?: string;

  /**
   * <p>A value used to separate individual fields from each other within a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>Describes the first line of input. Valid values are <code>None</code>,
   *                 <code>Ignore</code>, and <code>Use</code>.</p>
   */
  FileHeaderInfo?: FileHeaderInfo | string;

  /**
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   */
  QuoteCharacter?: string;

  /**
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A value used to separate individual records from each other.</p>
   */
  RecordDelimiter?: string;
}

export namespace CSVInput {
  export function isa(o: any): o is CSVInput {
    return __isa(o, "CSVInput");
  }
}

/**
 * <p>Contains information about the comma-separated value (CSV) file that the job results
 *             are stored in.</p>
 */
export interface CSVOutput {
  __type?: "CSVOutput";
  /**
   * <p>A value used to separate individual fields from each other within a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   */
  QuoteCharacter?: string;

  /**
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A value that indicates whether all output fields should be contained within quotation
   *             marks.</p>
   */
  QuoteFields?: QuoteFields | string;

  /**
   * <p>A value used to separate individual records from each other.</p>
   */
  RecordDelimiter?: string;
}

export namespace CSVOutput {
  export function isa(o: any): o is CSVOutput {
    return __isa(o, "CSVOutput");
  }
}

export enum CannedACL {
  AuthenticatedRead = "authenticated-read",
  AwsExecRead = "aws-exec-read",
  BucketOwnerFullControl = "bucket-owner-full-control",
  BucketOwnerRead = "bucket-owner-read",
  Private = "private",
  PublicRead = "public-read",
  PublicReadWrite = "public-read-write"
}

/**
 * <p>Contains information about the encryption used to store the job results in Amazon S3. </p>
 */
export interface Encryption {
  __type?: "Encryption";
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3, for
   *             example <code>AES256</code> or <code>aws:kms</code>.</p>
   */
  EncryptionType?: EncryptionType | string;

  /**
   * <p>Optional. If the encryption type is <code>aws:kms</code>, you can use this value to
   *             specify the encryption context for the job results.</p>
   */
  KMSContext?: string;

  /**
   * <p>The AWS KMS key ID to use for object encryption. All GET and PUT requests for an
   *             object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or
   *             Signature Version 4. </p>
   */
  KMSKeyId?: string;
}

export namespace Encryption {
  export function isa(o: any): o is Encryption {
    return __isa(o, "Encryption");
  }
}

export enum EncryptionType {
  KMS = "aws:kms",
  S3 = "AES256"
}

export enum ExpressionType {
  SQL = "SQL"
}

export enum FileHeaderInfo {
  Ignore = "IGNORE",
  None = "NONE",
  Use = "USE"
}

/**
 * <p>Contains the description of an Amazon S3 Glacier job.</p>
 */
export interface GlacierJobDescription {
  __type?: "GlacierJobDescription";
  /**
   * <p>The job type. This value is either <code>ArchiveRetrieval</code>,
   *                 <code>InventoryRetrieval</code>, or
   *             <code>Select</code>. </p>
   */
  Action?: ActionCode | string;

  /**
   * <p>The archive ID requested for a select job or archive retrieval. Otherwise, this
   *             field is null.</p>
   */
  ArchiveId?: string;

  /**
   * <p>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory
   *             retrieval or select jobs, this field is null.</p>
   */
  ArchiveSHA256TreeHash?: string;

  /**
   * <p>For an archive retrieval job, this value is the size in bytes of the archive being
   *             requested for download. For an inventory retrieval or select job, this value is
   *             null.</p>
   */
  ArchiveSizeInBytes?: number;

  /**
   * <p>The job status. When a job is completed, you get the job's output using Get Job
   *             Output (GET output).</p>
   */
  Completed?: boolean;

  /**
   * <p>The UTC time that the job request completed. While the job is in progress, the
   *             value is null.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The UTC date when the job was created. This value is a string representation of ISO
   *             8601 date format, for example <code>"2012-03-20T17:03:43.221Z"</code>.</p>
   */
  CreationDate?: string;

  /**
   * <p>Parameters used for range inventory retrieval.</p>
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobDescription;

  /**
   * <p>For an inventory retrieval job, this value is the size in bytes of the inventory
   *             requested for download. For an archive retrieval or select job, this value is
   *             null.</p>
   */
  InventorySizeInBytes?: number;

  /**
   * <p>The job description provided when initiating the job.</p>
   */
  JobDescription?: string;

  /**
   * <p>An opaque string that identifies an Amazon S3 Glacier job.</p>
   */
  JobId?: string;

  /**
   * <p>Contains the job output location.</p>
   */
  JobOutputPath?: string;

  /**
   * <p>Contains the location where the data from the select job is stored.</p>
   */
  OutputLocation?: OutputLocation;

  /**
   * <p>The retrieved byte range for archive retrieval jobs in the form
   *                 <i>StartByteValue</i>-<i>EndByteValue</i>. If no range
   *             was specified in the archive retrieval, then the whole archive is retrieved. In this
   *             case, <i>StartByteValue</i> equals 0 and <i>EndByteValue</i>
   *             equals the size of the archive minus 1. For inventory retrieval or select jobs, this
   *             field is null. </p>
   */
  RetrievalByteRange?: string;

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
   */
  SHA256TreeHash?: string;

  /**
   * <p>An Amazon SNS topic that receives notification.</p>
   */
  SNSTopic?: string;

  /**
   * <p>Contains the parameters used for a select.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>The status code can be <code>InProgress</code>, <code>Succeeded</code>, or
   *                 <code>Failed</code>, and indicates the status of the job.</p>
   */
  StatusCode?: StatusCode | string;

  /**
   * <p>A friendly message that describes the job status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tier to use for a select or an archive retrieval. Valid values are
   *                 <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *                 <code>Standard</code> is the default.</p>
   */
  Tier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was
   *             requested.</p>
   */
  VaultARN?: string;
}

export namespace GlacierJobDescription {
  export function isa(o: any): o is GlacierJobDescription {
    return __isa(o, "GlacierJobDescription");
  }
}

/**
 * <p>Contains information about a grant.</p>
 */
export interface Grant {
  __type?: "Grant";
  /**
   * <p>The grantee.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Specifies the permission given to the grantee. </p>
   */
  Permission?: Permission | string;
}

export namespace Grant {
  export function isa(o: any): o is Grant {
    return __isa(o, "Grant");
  }
}

/**
 * <p>Contains information about the grantee.</p>
 */
export interface Grantee {
  __type?: "Grantee";
  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>Email address of the grantee.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;
}

export namespace Grantee {
  export function isa(o: any): o is Grantee {
    return __isa(o, "Grantee");
  }
}

/**
 * <p>Describes how the archive is serialized.</p>
 */
export interface InputSerialization {
  __type?: "InputSerialization";
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  csv?: CSVInput;
}

export namespace InputSerialization {
  export function isa(o: any): o is InputSerialization {
    return __isa(o, "InputSerialization");
  }
}

/**
 * <p>Describes the options for a range inventory retrieval job.</p>
 */
export interface InventoryRetrievalJobDescription {
  __type?: "InventoryRetrievalJobDescription";
  /**
   * <p>The end of the date range in UTC for vault inventory retrieval that includes
   *             archives created before this date. This value should be a string in the ISO 8601 date
   *             format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  EndDate?: string;

  /**
   * <p>The output format for the vault inventory list, which is set by the <b>InitiateJob</b> request when initiating a job to retrieve a vault
   *             inventory. Valid values are <code>CSV</code> and <code>JSON</code>.</p>
   */
  Format?: string;

  /**
   * <p>The maximum number of inventory items returned per vault inventory retrieval
   *             request. This limit is set when initiating the job with the a <b>InitiateJob</b> request. </p>
   */
  Limit?: string;

  /**
   * <p>An opaque string that represents where to continue pagination of the vault
   *             inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are
   *             no more inventory items, this value is <code>null</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html#api-initiate-job-post-vault-inventory-list-filtering"> Range Inventory Retrieval</a>.</p>
   */
  Marker?: string;

  /**
   * <p>The start of the date range in Universal Coordinated Time (UTC) for vault inventory
   *             retrieval that includes archives created on or after this date. This value should be a
   *             string in the ISO 8601 date format, for example
   *             <code>2013-03-20T17:03:43Z</code>.</p>
   */
  StartDate?: string;
}

export namespace InventoryRetrievalJobDescription {
  export function isa(o: any): o is InventoryRetrievalJobDescription {
    return __isa(o, "InventoryRetrievalJobDescription");
  }
}

/**
 * <p>Contains information about the location where the select job results are stored.</p>
 */
export interface OutputLocation {
  __type?: "OutputLocation";
  /**
   * <p>Describes an S3 location that will receive the results of the job request.</p>
   */
  S3?: S3Location;
}

export namespace OutputLocation {
  export function isa(o: any): o is OutputLocation {
    return __isa(o, "OutputLocation");
  }
}

/**
 * <p>Describes how the select output is serialized.</p>
 */
export interface OutputSerialization {
  __type?: "OutputSerialization";
  /**
   * <p>Describes the serialization of CSV-encoded query results.</p>
   */
  csv?: CSVOutput;
}

export namespace OutputSerialization {
  export function isa(o: any): o is OutputSerialization {
    return __isa(o, "OutputSerialization");
  }
}

export enum Permission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  READ_ACP = "READ_ACP",
  WRITE = "WRITE",
  WRITE_ACP = "WRITE_ACP"
}

export enum QuoteFields {
  Always = "ALWAYS",
  AsNeeded = "ASNEEDED"
}

/**
 * <p>Contains information about the location in Amazon S3 where the select job results are stored.</p>
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Array<Grant>;

  /**
   * <p>The name of the Amazon S3 bucket where the job results are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The canned access control list (ACL) to apply to the job results.</p>
   */
  CannedACL?: CannedACL | string;

  /**
   * <p>Contains information about the encryption used to store the job results in Amazon S3.</p>
   */
  Encryption?: Encryption;

  /**
   * <p>The prefix that is prepended to the results for this request.</p>
   */
  Prefix?: string;

  /**
   * <p>The storage class used to store the job results.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The tag-set that is applied to the job results.</p>
   */
  Tagging?: { [key: string]: string };

  /**
   * <p>A map of metadata to store with the job results in Amazon S3.</p>
   */
  UserMetadata?: { [key: string]: string };
}

export namespace S3Location {
  export function isa(o: any): o is S3Location {
    return __isa(o, "S3Location");
  }
}

/**
 * <p>Contains information about the parameters used for a select.</p>
 */
export interface SelectParameters {
  __type?: "SelectParameters";
  /**
   * <p>The expression that is used to select the object.</p>
   */
  Expression?: string;

  /**
   * <p>The type of the provided expression, for example <code>SQL</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization?: InputSerialization;

  /**
   * <p>Describes how the results of the select job are serialized.</p>
   */
  OutputSerialization?: OutputSerialization;
}

export namespace SelectParameters {
  export function isa(o: any): o is SelectParameters {
    return __isa(o, "SelectParameters");
  }
}

export enum StatusCode {
  Failed = "Failed",
  InProgress = "InProgress",
  Succeeded = "Succeeded"
}

export enum StorageClass {
  ReducedRedundancy = "REDUCED_REDUNDANCY",
  Standard = "STANDARD",
  StandardInfrequentAccess = "STANDARD_IA"
}

export enum Type {
  AmazonCustomerByEmail = "AmazonCustomerByEmail",
  CanonicalUser = "CanonicalUser",
  Group = "Group"
}

/**
 * <p>Provides options to abort a multipart upload identified by the upload ID.</p>
 *
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a>.</p>
 */
export interface AbortMultipartUploadInput {
  __type?: "AbortMultipartUploadInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The upload ID of the multipart upload to delete.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace AbortMultipartUploadInput {
  export function isa(o: any): o is AbortMultipartUploadInput {
    return __isa(o, "AbortMultipartUploadInput");
  }
}

/**
 * <p>The input values for <code>AbortVaultLock</code>.</p>
 */
export interface AbortVaultLockInput {
  __type?: "AbortVaultLockInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace AbortVaultLockInput {
  export function isa(o: any): o is AbortVaultLockInput {
    return __isa(o, "AbortVaultLockInput");
  }
}

/**
 * <p>The input values for <code>AddTagsToVault</code>.</p>
 */
export interface AddTagsToVaultInput {
  __type?: "AddTagsToVaultInput";
  /**
   * <p>The tags to add to the vault. Each tag is composed of a key and a value. The value
   *          can be an empty string.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace AddTagsToVaultInput {
  export function isa(o: any): o is AddTagsToVaultInput {
    return __isa(o, "AddTagsToVaultInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For
 *          conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a>.</p>
 */
export interface ArchiveCreationOutput {
  __type?: "ArchiveCreationOutput";
  /**
   * <p>The ID of the archive. This value is also included as part of the location.</p>
   */
  archiveId?: string;

  /**
   * <p>The checksum of the archive computed by Amazon S3 Glacier.</p>
   */
  checksum?: string;

  /**
   * <p>The relative URI path of the newly added archive resource.</p>
   */
  location?: string;
}

export namespace ArchiveCreationOutput {
  export function isa(o: any): o is ArchiveCreationOutput {
    return __isa(o, "ArchiveCreationOutput");
  }
}

/**
 * <p>Provides options to complete a multipart upload operation. This informs Amazon
 *          Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble
 *          the archive from the uploaded parts. After assembling and saving the archive to the vault,
 *          Glacier returns the URI path of the newly created archive resource.</p>
 */
export interface CompleteMultipartUploadInput {
  __type?: "CompleteMultipartUploadInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The total size, in bytes, of the entire archive. This value should be the sum of all
   *          the sizes of the individual parts that you uploaded.</p>
   */
  archiveSize?: string;

  /**
   * <p>The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash
   *          of the individual parts. If the value you specify in the request does not match the SHA256
   *          tree hash of the final assembled archive as computed by Amazon S3 Glacier (Glacier),
   *          Glacier returns an error and the request fails.</p>
   */
  checksum?: string;

  /**
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace CompleteMultipartUploadInput {
  export function isa(o: any): o is CompleteMultipartUploadInput {
    return __isa(o, "CompleteMultipartUploadInput");
  }
}

/**
 * <p>The input values for <code>CompleteVaultLock</code>.</p>
 */
export interface CompleteVaultLockInput {
  __type?: "CompleteVaultLockInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.</p>
   */
  lockId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace CompleteVaultLockInput {
  export function isa(o: any): o is CompleteVaultLockInput {
    return __isa(o, "CompleteVaultLockInput");
  }
}

/**
 * <p>Provides options to create a vault.</p>
 */
export interface CreateVaultInput {
  __type?: "CreateVaultInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace CreateVaultInput {
  export function isa(o: any): o is CreateVaultInput {
    return __isa(o, "CreateVaultInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface CreateVaultOutput {
  __type?: "CreateVaultOutput";
  /**
   * <p>The URI of the vault that was created.</p>
   */
  location?: string;
}

export namespace CreateVaultOutput {
  export function isa(o: any): o is CreateVaultOutput {
    return __isa(o, "CreateVaultOutput");
  }
}

/**
 * <p>Data retrieval policy.</p>
 */
export interface DataRetrievalPolicy {
  __type?: "DataRetrievalPolicy";
  /**
   * <p>The policy rule. Although this is a list type, currently there must be only one rule,
   *          which contains a Strategy field and optionally a BytesPerHour field.</p>
   */
  Rules?: Array<DataRetrievalRule>;
}

export namespace DataRetrievalPolicy {
  export function isa(o: any): o is DataRetrievalPolicy {
    return __isa(o, "DataRetrievalPolicy");
  }
}

/**
 * <p>Data retrieval policy rule.</p>
 */
export interface DataRetrievalRule {
  __type?: "DataRetrievalRule";
  /**
   * <p>The maximum number of bytes that can be retrieved in an hour.</p>
   *          <p>This field is required only if the value of the Strategy field is
   *             <code>BytesPerHour</code>. Your PUT operation will be rejected if the Strategy field is
   *          not set to <code>BytesPerHour</code> and you set this field.</p>
   */
  BytesPerHour?: number;

  /**
   * <p>The type of data retrieval policy to set.</p>
   *          <p>Valid values: BytesPerHour|FreeTier|None</p>
   */
  Strategy?: string;
}

export namespace DataRetrievalRule {
  export function isa(o: any): o is DataRetrievalRule {
    return __isa(o, "DataRetrievalRule");
  }
}

/**
 * <p>Provides options for deleting an archive from an Amazon S3 Glacier vault.</p>
 */
export interface DeleteArchiveInput {
  __type?: "DeleteArchiveInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The ID of the archive to delete.</p>
   */
  archiveId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DeleteArchiveInput {
  export function isa(o: any): o is DeleteArchiveInput {
    return __isa(o, "DeleteArchiveInput");
  }
}

/**
 * <p>DeleteVaultAccessPolicy input.</p>
 */
export interface DeleteVaultAccessPolicyInput {
  __type?: "DeleteVaultAccessPolicyInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DeleteVaultAccessPolicyInput {
  export function isa(o: any): o is DeleteVaultAccessPolicyInput {
    return __isa(o, "DeleteVaultAccessPolicyInput");
  }
}

/**
 * <p>Provides options for deleting a vault from Amazon S3 Glacier.</p>
 */
export interface DeleteVaultInput {
  __type?: "DeleteVaultInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DeleteVaultInput {
  export function isa(o: any): o is DeleteVaultInput {
    return __isa(o, "DeleteVaultInput");
  }
}

/**
 * <p>Provides options for deleting a vault notification configuration from an Amazon
 *          Glacier vault.</p>
 */
export interface DeleteVaultNotificationsInput {
  __type?: "DeleteVaultNotificationsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DeleteVaultNotificationsInput {
  export function isa(o: any): o is DeleteVaultNotificationsInput {
    return __isa(o, "DeleteVaultNotificationsInput");
  }
}

/**
 * <p>Provides options for retrieving a job description.</p>
 */
export interface DescribeJobInput {
  __type?: "DescribeJobInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The ID of the job to describe.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DescribeJobInput {
  export function isa(o: any): o is DescribeJobInput {
    return __isa(o, "DescribeJobInput");
  }
}

/**
 * <p>Provides options for retrieving metadata for a specific vault in Amazon
 *          Glacier.</p>
 */
export interface DescribeVaultInput {
  __type?: "DescribeVaultInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace DescribeVaultInput {
  export function isa(o: any): o is DescribeVaultInput {
    return __isa(o, "DescribeVaultInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface DescribeVaultOutput {
  __type?: "DescribeVaultOutput";
  /**
   * <p>The Universal Coordinated Time (UTC) date when the vault was created. This value
   *          should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  CreationDate?: string;

  /**
   * <p>The Universal Coordinated Time (UTC) date when Amazon S3 Glacier completed the last
   *          vault inventory.  This value should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  LastInventoryDate?: string;

  /**
   * <p>The number of archives in the vault as of the last inventory date. This field will
   *          return <code>null</code> if an inventory has not yet run on the vault, for example if you
   *          just created the vault.</p>
   */
  NumberOfArchives?: number;

  /**
   * <p>Total size, in bytes, of the archives in the vault as of the last inventory date.
   *          This field will return null if an inventory has not yet run on the vault, for example if
   *          you just created the vault.</p>
   */
  SizeInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault.</p>
   */
  VaultARN?: string;

  /**
   * <p>The name of the vault.</p>
   */
  VaultName?: string;
}

export namespace DescribeVaultOutput {
  export function isa(o: any): o is DescribeVaultOutput {
    return __isa(o, "DescribeVaultOutput");
  }
}

/**
 * <p>Input for GetDataRetrievalPolicy.</p>
 */
export interface GetDataRetrievalPolicyInput {
  __type?: "GetDataRetrievalPolicyInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

export namespace GetDataRetrievalPolicyInput {
  export function isa(o: any): o is GetDataRetrievalPolicyInput {
    return __isa(o, "GetDataRetrievalPolicyInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code>
 *          request.</p>
 */
export interface GetDataRetrievalPolicyOutput {
  __type?: "GetDataRetrievalPolicyOutput";
  /**
   * <p>Contains the returned data retrieval policy in JSON format.</p>
   */
  Policy?: DataRetrievalPolicy;
}

export namespace GetDataRetrievalPolicyOutput {
  export function isa(o: any): o is GetDataRetrievalPolicyOutput {
    return __isa(o, "GetDataRetrievalPolicyOutput");
  }
}

/**
 * <p>Provides options for downloading output of an Amazon S3 Glacier job.</p>
 */
export interface GetJobOutputInput {
  __type?: "GetJobOutputInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The job ID whose data is downloaded.</p>
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
   *                   entire archive stored in Amazon S3 Glacier. You compare this value with the checksum you
   *                   computed to ensure you have downloaded the entire archive content with no
   *                   errors.</p>
   *                <p></p>
   *             </li>
   *          </ol>
   */
  range?: string;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace GetJobOutputInput {
  export function isa(o: any): o is GetJobOutputInput {
    return __isa(o, "GetJobOutputInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetJobOutputOutput {
  __type?: "GetJobOutputOutput";
  /**
   * <p>Indicates the range units accepted. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html">RFC2616</a>. </p>
   */
  acceptRanges?: string;

  /**
   * <p>The description of an archive.</p>
   */
  archiveDescription?: string;

  /**
   * <p>The job data, either archive data or inventory data.</p>
   */
  body?: Readable | ReadableStream | Blob;

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
   */
  checksum?: string;

  /**
   * <p>The range of bytes returned by Amazon S3 Glacier. If only partial output is downloaded,
   *          the response provides the range of bytes Amazon S3 Glacier returned. For example, bytes
   *          0-1048575/8388608 returns the first 1 MB from 8 MB.</p>
   */
  contentRange?: string;

  /**
   * <p>The Content-Type depends on whether the job output is an archive or a vault
   *          inventory. For archive data, the Content-Type is application/octet-stream. For vault
   *          inventory, if you requested CSV format when you initiated the job, the Content-Type is
   *          text/csv. Otherwise, by default, vault inventory is returned as JSON, and the Content-Type
   *          is application/json.</p>
   */
  contentType?: string;
}

export namespace GetJobOutputOutput {
  export function isa(o: any): o is GetJobOutputOutput {
    return __isa(o, "GetJobOutputOutput");
  }
}

/**
 * <p>Input for GetVaultAccessPolicy.</p>
 */
export interface GetVaultAccessPolicyInput {
  __type?: "GetVaultAccessPolicyInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace GetVaultAccessPolicyInput {
  export function isa(o: any): o is GetVaultAccessPolicyInput {
    return __isa(o, "GetVaultAccessPolicyInput");
  }
}

/**
 * <p>Output for GetVaultAccessPolicy.</p>
 */
export interface GetVaultAccessPolicyOutput {
  __type?: "GetVaultAccessPolicyOutput";
  /**
   * <p>Contains the returned vault access policy as a JSON string.</p>
   */
  policy?: VaultAccessPolicy;
}

export namespace GetVaultAccessPolicyOutput {
  export function isa(o: any): o is GetVaultAccessPolicyOutput {
    return __isa(o, "GetVaultAccessPolicyOutput");
  }
}

/**
 * <p>The input values for <code>GetVaultLock</code>.</p>
 */
export interface GetVaultLockInput {
  __type?: "GetVaultLockInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace GetVaultLockInput {
  export function isa(o: any): o is GetVaultLockInput {
    return __isa(o, "GetVaultLockInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetVaultLockOutput {
  __type?: "GetVaultLockOutput";
  /**
   * <p>The UTC date and time at which the vault lock was put into the
   *             <code>InProgress</code> state.</p>
   */
  CreationDate?: string;

  /**
   * <p>The UTC date and time at which the lock ID expires. This value can be
   *             <code>null</code> if the vault lock is in a <code>Locked</code> state.</p>
   */
  ExpirationDate?: string;

  /**
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   */
  Policy?: string;

  /**
   * <p>The state of the vault lock. <code>InProgress</code> or
   *          <code>Locked</code>.</p>
   */
  State?: string;
}

export namespace GetVaultLockOutput {
  export function isa(o: any): o is GetVaultLockOutput {
    return __isa(o, "GetVaultLockOutput");
  }
}

/**
 * <p>Provides options for retrieving the notification configuration set on an Amazon
 *          Glacier vault.</p>
 */
export interface GetVaultNotificationsInput {
  __type?: "GetVaultNotificationsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace GetVaultNotificationsInput {
  export function isa(o: any): o is GetVaultNotificationsInput {
    return __isa(o, "GetVaultNotificationsInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetVaultNotificationsOutput {
  __type?: "GetVaultNotificationsOutput";
  /**
   * <p>Returns the notification configuration set on the vault.</p>
   */
  vaultNotificationConfig?: VaultNotificationConfig;
}

export namespace GetVaultNotificationsOutput {
  export function isa(o: any): o is GetVaultNotificationsOutput {
    return __isa(o, "GetVaultNotificationsOutput");
  }
}

/**
 * <p>Provides options for initiating an Amazon S3 Glacier job.</p>
 */
export interface InitiateJobInput {
  __type?: "InitiateJobInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>Provides options for specifying job information.</p>
   */
  jobParameters?: JobParameters;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace InitiateJobInput {
  export function isa(o: any): o is InitiateJobInput {
    return __isa(o, "InitiateJobInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateJobOutput {
  __type?: "InitiateJobOutput";
  /**
   * <p>The ID of the job.</p>
   */
  jobId?: string;

  /**
   * <p>The path to the location of where the select results are stored.</p>
   */
  jobOutputPath?: string;

  /**
   * <p>The relative URI path of the job.</p>
   */
  location?: string;
}

export namespace InitiateJobOutput {
  export function isa(o: any): o is InitiateJobOutput {
    return __isa(o, "InitiateJobOutput");
  }
}

/**
 * <p>Provides options for initiating a multipart upload to an Amazon S3 Glacier
 *          vault.</p>
 */
export interface InitiateMultipartUploadInput {
  __type?: "InitiateMultipartUploadInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The archive description that you are uploading in parts.</p>
   *          <p>The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example
   *          1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum
   *          allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).</p>
   */
  archiveDescription?: string;

  /**
   * <p>The size of each part except the last, in bytes. The last part can be smaller than
   *          this part size.</p>
   */
  partSize?: string;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace InitiateMultipartUploadInput {
  export function isa(o: any): o is InitiateMultipartUploadInput {
    return __isa(o, "InitiateMultipartUploadInput");
  }
}

/**
 * <p>The Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateMultipartUploadOutput {
  __type?: "InitiateMultipartUploadOutput";
  /**
   * <p>The relative URI path of the multipart upload ID Amazon S3 Glacier created.</p>
   */
  location?: string;

  /**
   * <p>The ID of the multipart upload. This value is also included as part of the
   *          location.</p>
   */
  uploadId?: string;
}

export namespace InitiateMultipartUploadOutput {
  export function isa(o: any): o is InitiateMultipartUploadOutput {
    return __isa(o, "InitiateMultipartUploadOutput");
  }
}

/**
 * <p>The input values for <code>InitiateVaultLock</code>.</p>
 */
export interface InitiateVaultLockInput {
  __type?: "InitiateVaultLockInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   */
  policy?: VaultLockPolicy;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace InitiateVaultLockInput {
  export function isa(o: any): o is InitiateVaultLockInput {
    return __isa(o, "InitiateVaultLockInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateVaultLockOutput {
  __type?: "InitiateVaultLockOutput";
  /**
   * <p>The lock ID, which is used to complete the vault locking process.</p>
   */
  lockId?: string;
}

export namespace InitiateVaultLockOutput {
  export function isa(o: any): o is InitiateVaultLockOutput {
    return __isa(o, "InitiateVaultLockOutput");
  }
}

/**
 * <p>Returned if there is insufficient capacity to process this expedited request. This
 *          error only applies to expedited retrievals and not to standard or bulk
 *          retrievals.</p>
 */
export interface InsufficientCapacityException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientCapacityException";
  $fault: "client";
  code?: string;
  message?: string;
  type?: string;
}

export namespace InsufficientCapacityException {
  export function isa(o: any): o is InsufficientCapacityException {
    return __isa(o, "InsufficientCapacityException");
  }
}

/**
 * <p>Returned if a parameter of the request is incorrectly specified.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * <p>Returned if a parameter of the request is incorrectly specified.</p>
   */
  message?: string;

  /**
   * <p>Client</p>
   */
  type?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return __isa(o, "InvalidParameterValueException");
  }
}

/**
 * <p>Provides options for specifying a range inventory retrieval job.</p>
 */
export interface InventoryRetrievalJobInput {
  __type?: "InventoryRetrievalJobInput";
  /**
   * <p>The end of the date range in UTC for vault inventory retrieval that includes archives
   *          created before this date. This value should be a string in the ISO 8601 date format, for
   *          example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  EndDate?: string;

  /**
   * <p>Specifies the maximum number of inventory items returned per vault inventory
   *          retrieval request. Valid values are greater than or equal to 1.</p>
   */
  Limit?: string;

  /**
   * <p>An opaque string that represents where to continue pagination of the vault inventory
   *          retrieval results. You use the marker in a new <b>InitiateJob</b>
   *          request to obtain additional inventory items. If there are no more inventory items, this
   *          value is <code>null</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The start of the date range in UTC for vault inventory retrieval that includes
   *          archives created on or after this date. This value should be a string in the ISO 8601 date
   *          format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  StartDate?: string;
}

export namespace InventoryRetrievalJobInput {
  export function isa(o: any): o is InventoryRetrievalJobInput {
    return __isa(o, "InventoryRetrievalJobInput");
  }
}

/**
 * <p>Provides options for defining a job.</p>
 */
export interface JobParameters {
  __type?: "JobParameters";
  /**
   * <p>The ID of the archive that you want to retrieve. This field is required only if
   *             <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code>.
   *          An error occurs if you specify this
   *          request parameter for an inventory retrieval job request. </p>
   */
  ArchiveId?: string;

  /**
   * <p>The optional description for the job. The description must be less than or equal to
   *          1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically,
   *          ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.</p>
   */
  Description?: string;

  /**
   * <p>When initiating a job to retrieve a vault inventory, you can optionally add this
   *          parameter to your request to specify the output format. If you are initiating an inventory
   *          job and do not specify a Format field, JSON is the default format. Valid values are "CSV"
   *          and "JSON".</p>
   */
  Format?: string;

  /**
   * <p>Input parameters used for range inventory retrieval.</p>
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobInput;

  /**
   * <p>Contains information about the location where the select job results are stored.</p>
   */
  OutputLocation?: OutputLocation;

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
   */
  RetrievalByteRange?: string;

  /**
   * <p>The Amazon SNS topic ARN to which Amazon S3 Glacier sends a notification when the job is
   *          completed and the output is ready for you to download. The specified topic publishes the
   *          notification to its subscribers. The SNS topic must exist.</p>
   */
  SNSTopic?: string;

  /**
   * <p>Contains the parameters that define a job.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>The tier to use for a select or an archive retrieval job. Valid values are
   *             <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *             <code>Standard</code> is the default.</p>
   */
  Tier?: string;

  /**
   * <p>The job type. You can initiate a job to perform a select query on an archive,
   *          retrieve an archive, or get an inventory of a vault.
   *          Valid values are "select", "archive-retrieval" and "inventory-retrieval".</p>
   */
  Type?: string;
}

export namespace JobParameters {
  export function isa(o: any): o is JobParameters {
    return __isa(o, "JobParameters");
  }
}

/**
 * <p>Returned if the request results in a vault or account limit being exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * <p>Returned if the request results in a vault limit or tags limit being exceeded.</p>
   */
  message?: string;

  /**
   * <p>Client</p>
   */
  type?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

/**
 * <p>Provides options for retrieving a job list for an Amazon S3 Glacier vault.</p>
 */
export interface ListJobsInput {
  __type?: "ListJobsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The state of the jobs to return. You can specify <code>true</code> or
   *             <code>false</code>.</p>
   */
  completed?: string;

  /**
   * <p>The maximum number of jobs to be returned. The default limit is 50. The number of
   *          jobs returned might be fewer than the specified limit, but the number of returned jobs
   *          never exceeds the limit.</p>
   */
  limit?: string;

  /**
   * <p>An opaque string used for pagination. This value specifies the job at which the
   *          listing of jobs should begin. Get the marker value from a previous List Jobs response. You
   *          only need to include the marker if you are continuing the pagination of results started in
   *          a previous List Jobs request.</p>
   */
  marker?: string;

  /**
   * <p>The type of job status to return. You can specify the following values:
   *             <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.</p>
   */
  statuscode?: string;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace ListJobsInput {
  export function isa(o: any): o is ListJobsInput {
    return __isa(o, "ListJobsInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListJobsOutput {
  __type?: "ListJobsOutput";
  /**
   * <p>A list of job objects. Each job object contains metadata describing the
   *          job.</p>
   */
  JobList?: Array<GlacierJobDescription>;

  /**
   * <p>
   *          An opaque string used for pagination that specifies the job at which the listing of jobs should begin.
   *          You get the <code>marker</code> value from a previous List Jobs response.
   *          You only need to include the marker if you are continuing the pagination of the results started in a
   *          previous List Jobs request. </p>
   */
  Marker?: string;
}

export namespace ListJobsOutput {
  export function isa(o: any): o is ListJobsOutput {
    return __isa(o, "ListJobsOutput");
  }
}

/**
 * <p>Provides options for retrieving list of in-progress multipart uploads for an Amazon
 *          Glacier vault.</p>
 */
export interface ListMultipartUploadsInput {
  __type?: "ListMultipartUploadsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>Specifies the maximum number of uploads returned in the response body. If this value
   *          is not specified, the List Uploads operation returns up to 50 uploads.</p>
   */
  limit?: string;

  /**
   * <p>An opaque string used for pagination. This value specifies the upload at which the
   *          listing of uploads should begin. Get the marker value from a previous List Uploads
   *          response. You need only include the marker if you are continuing the pagination of results
   *          started in a previous List Uploads request.</p>
   */
  marker?: string;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace ListMultipartUploadsInput {
  export function isa(o: any): o is ListMultipartUploadsInput {
    return __isa(o, "ListMultipartUploadsInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListMultipartUploadsOutput {
  __type?: "ListMultipartUploadsOutput";
  /**
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Multipart Uploads request to obtain more uploads in the list. If
   *          there are no more uploads, this value is <code>null</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of in-progress multipart uploads.</p>
   */
  UploadsList?: Array<UploadListElement>;
}

export namespace ListMultipartUploadsOutput {
  export function isa(o: any): o is ListMultipartUploadsOutput {
    return __isa(o, "ListMultipartUploadsOutput");
  }
}

/**
 * <p>Provides options for retrieving a list of parts of an archive that have been uploaded
 *          in a specific multipart upload.</p>
 */
export interface ListPartsInput {
  __type?: "ListPartsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The maximum number of parts to be returned. The default limit is 50. The number of
   *          parts returned might be fewer than the specified limit, but the number of returned parts
   *          never exceeds the limit.</p>
   */
  limit?: string;

  /**
   * <p>An opaque string used for pagination. This value specifies the part at which the
   *          listing of parts should begin. Get the marker value from the response of a previous List
   *          Parts response. You need only include the marker if you are continuing the pagination of
   *          results started in a previous List Parts request.</p>
   */
  marker?: string;

  /**
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace ListPartsInput {
  export function isa(o: any): o is ListPartsInput {
    return __isa(o, "ListPartsInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListPartsOutput {
  __type?: "ListPartsOutput";
  /**
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   */
  ArchiveDescription?: string;

  /**
   * <p>The UTC time at which the multipart upload was initiated.</p>
   */
  CreationDate?: string;

  /**
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Parts request to obtain more jobs in the list. If there are no
   *          more parts, this value is <code>null</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the upload to which the parts are associated.</p>
   */
  MultipartUploadId?: string;

  /**
   * <p>The part size in bytes. This is the same value that you specified in the Initiate
   *          Multipart Upload request.</p>
   */
  PartSizeInBytes?: number;

  /**
   * <p>A list of the part sizes of the multipart upload. Each object in the array contains a
   *          <code>RangeBytes</code> and <code>sha256-tree-hash</code> name/value
   *          pair.</p>
   */
  Parts?: Array<PartListElement>;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault to which the multipart upload was
   *          initiated.</p>
   */
  VaultARN?: string;
}

export namespace ListPartsOutput {
  export function isa(o: any): o is ListPartsOutput {
    return __isa(o, "ListPartsOutput");
  }
}

export interface ListProvisionedCapacityInput {
  __type?: "ListProvisionedCapacityInput";
  /**
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

export namespace ListProvisionedCapacityInput {
  export function isa(o: any): o is ListProvisionedCapacityInput {
    return __isa(o, "ListProvisionedCapacityInput");
  }
}

export interface ListProvisionedCapacityOutput {
  __type?: "ListProvisionedCapacityOutput";
  /**
   * <p>The response body contains the following JSON fields.</p>
   */
  ProvisionedCapacityList?: Array<ProvisionedCapacityDescription>;
}

export namespace ListProvisionedCapacityOutput {
  export function isa(o: any): o is ListProvisionedCapacityOutput {
    return __isa(o, "ListProvisionedCapacityOutput");
  }
}

/**
 * <p>The input value for <code>ListTagsForVaultInput</code>.</p>
 */
export interface ListTagsForVaultInput {
  __type?: "ListTagsForVaultInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace ListTagsForVaultInput {
  export function isa(o: any): o is ListTagsForVaultInput {
    return __isa(o, "ListTagsForVaultInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListTagsForVaultOutput {
  __type?: "ListTagsForVaultOutput";
  /**
   * <p>The tags attached to the vault. Each tag is composed of a key and a value.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForVaultOutput {
  export function isa(o: any): o is ListTagsForVaultOutput {
    return __isa(o, "ListTagsForVaultOutput");
  }
}

/**
 * <p>Provides options to retrieve the vault list owned by the calling user's account. The
 *          list provides metadata information for each vault.</p>
 */
export interface ListVaultsInput {
  __type?: "ListVaultsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The maximum number of vaults to be returned. The default limit is 10. The number of
   *          vaults returned might be fewer than the specified limit, but the number of returned vaults
   *          never exceeds the limit.</p>
   */
  limit?: string;

  /**
   * <p>A string used for pagination. The marker specifies the vault ARN after which the
   *          listing of vaults should begin.</p>
   */
  marker?: string;
}

export namespace ListVaultsInput {
  export function isa(o: any): o is ListVaultsInput {
    return __isa(o, "ListVaultsInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListVaultsOutput {
  __type?: "ListVaultsOutput";
  /**
   * <p>The vault ARN at which to continue pagination of the results. You use the marker in
   *          another List Vaults request to obtain more vaults in the list.</p>
   */
  Marker?: string;

  /**
   * <p>List of vaults.</p>
   */
  VaultList?: Array<DescribeVaultOutput>;
}

export namespace ListVaultsOutput {
  export function isa(o: any): o is ListVaultsOutput {
    return __isa(o, "ListVaultsOutput");
  }
}

/**
 * <p>Returned if a required header or parameter is missing from the request.</p>
 */
export interface MissingParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "MissingParameterValueException";
  $fault: "client";
  /**
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * <p>Returned if no authentication data is found for the request.</p>
   */
  message?: string;

  /**
   * <p>Client.</p>
   */
  type?: string;
}

export namespace MissingParameterValueException {
  export function isa(o: any): o is MissingParameterValueException {
    return __isa(o, "MissingParameterValueException");
  }
}

/**
 * <p>A list of the part sizes of the multipart upload.</p>
 */
export interface PartListElement {
  __type?: "PartListElement";
  /**
   * <p>The byte range of a part, inclusive of the upper value of the range.</p>
   */
  RangeInBytes?: string;

  /**
   * <p>The SHA256 tree hash value that Amazon S3 Glacier calculated for the part. This field is
   *          never <code>null</code>.</p>
   */
  SHA256TreeHash?: string;
}

export namespace PartListElement {
  export function isa(o: any): o is PartListElement {
    return __isa(o, "PartListElement");
  }
}

/**
 * <p>Returned if a retrieval job would exceed the current data policy's retrieval rate
 *          limit. For more information about data retrieval policies,</p>
 */
export interface PolicyEnforcedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyEnforcedException";
  $fault: "client";
  /**
   * <p>PolicyEnforcedException</p>
   */
  code?: string;

  /**
   * <p>InitiateJob request denied by current data retrieval policy.</p>
   */
  message?: string;

  /**
   * <p>Client</p>
   */
  type?: string;
}

export namespace PolicyEnforcedException {
  export function isa(o: any): o is PolicyEnforcedException {
    return __isa(o, "PolicyEnforcedException");
  }
}

/**
 * <p>The definition for a provisioned capacity unit.</p>
 */
export interface ProvisionedCapacityDescription {
  __type?: "ProvisionedCapacityDescription";
  /**
   * <p>The ID that identifies the provisioned capacity unit.</p>
   */
  CapacityId?: string;

  /**
   * <p>The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).</p>
   */
  ExpirationDate?: string;

  /**
   * <p>The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).</p>
   */
  StartDate?: string;
}

export namespace ProvisionedCapacityDescription {
  export function isa(o: any): o is ProvisionedCapacityDescription {
    return __isa(o, "ProvisionedCapacityDescription");
  }
}

export interface PurchaseProvisionedCapacityInput {
  __type?: "PurchaseProvisionedCapacityInput";
  /**
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

export namespace PurchaseProvisionedCapacityInput {
  export function isa(o: any): o is PurchaseProvisionedCapacityInput {
    return __isa(o, "PurchaseProvisionedCapacityInput");
  }
}

export interface PurchaseProvisionedCapacityOutput {
  __type?: "PurchaseProvisionedCapacityOutput";
  /**
   * <p>The ID that identifies the provisioned capacity unit.</p>
   */
  capacityId?: string;
}

export namespace PurchaseProvisionedCapacityOutput {
  export function isa(o: any): o is PurchaseProvisionedCapacityOutput {
    return __isa(o, "PurchaseProvisionedCapacityOutput");
  }
}

/**
 * <p>The input value for <code>RemoveTagsFromVaultInput</code>.</p>
 */
export interface RemoveTagsFromVaultInput {
  __type?: "RemoveTagsFromVaultInput";
  /**
   * <p>A list of tag keys. Each corresponding tag is removed from the vault.</p>
   */
  TagKeys?: Array<string>;

  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace RemoveTagsFromVaultInput {
  export function isa(o: any): o is RemoveTagsFromVaultInput {
    return __isa(o, "RemoveTagsFromVaultInput");
  }
}

/**
 * <p>Returned if, when uploading an archive, Amazon S3 Glacier times out while receiving the
 *          upload.</p>
 */
export interface RequestTimeoutException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestTimeoutException";
  $fault: "client";
  /**
   * <p>408 Request Timeout</p>
   */
  code?: string;

  /**
   * <p>Returned if, when uploading an archive, Amazon S3 Glacier times out while receiving the
   *          upload.</p>
   */
  message?: string;

  /**
   * <p>Client</p>
   */
  type?: string;
}

export namespace RequestTimeoutException {
  export function isa(o: any): o is RequestTimeoutException {
    return __isa(o, "RequestTimeoutException");
  }
}

/**
 * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>404 Not Found</p>
   */
  code?: string;

  /**
   * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
   *          exist.</p>
   */
  message?: string;

  /**
   * <p>Client</p>
   */
  type?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Returned if the service cannot complete the request.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>500 Internal Server Error</p>
   */
  code?: string;

  /**
   * <p>Returned if the service cannot complete the request.</p>
   */
  message?: string;

  /**
   * <p>Server</p>
   */
  type?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>SetDataRetrievalPolicy input.</p>
 */
export interface SetDataRetrievalPolicyInput {
  __type?: "SetDataRetrievalPolicyInput";
  /**
   * <p>The data retrieval policy in JSON format.</p>
   */
  Policy?: DataRetrievalPolicy;

  /**
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;
}

export namespace SetDataRetrievalPolicyInput {
  export function isa(o: any): o is SetDataRetrievalPolicyInput {
    return __isa(o, "SetDataRetrievalPolicyInput");
  }
}

/**
 * <p>SetVaultAccessPolicy input.</p>
 */
export interface SetVaultAccessPolicyInput {
  __type?: "SetVaultAccessPolicyInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The vault access policy as a JSON string.</p>
   */
  policy?: VaultAccessPolicy;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace SetVaultAccessPolicyInput {
  export function isa(o: any): o is SetVaultAccessPolicyInput {
    return __isa(o, "SetVaultAccessPolicyInput");
  }
}

/**
 * <p>Provides options to configure notifications that will be sent when specific events
 *          happen to a vault.</p>
 */
export interface SetVaultNotificationsInput {
  __type?: "SetVaultNotificationsInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * <p>Provides options for specifying notification configuration.</p>
   */
  vaultNotificationConfig?: VaultNotificationConfig;
}

export namespace SetVaultNotificationsInput {
  export function isa(o: any): o is SetVaultNotificationsInput {
    return __isa(o, "SetVaultNotificationsInput");
  }
}

/**
 * <p>Provides options to add an archive to a vault.</p>
 */
export interface UploadArchiveInput {
  __type?: "UploadArchiveInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The optional description of the archive you are uploading.</p>
   */
  archiveDescription?: string;

  /**
   * <p>The data to upload.</p>
   */
  body?: Readable | ReadableStream | Blob;

  /**
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   */
  checksum?: string;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace UploadArchiveInput {
  export function isa(o: any): o is UploadArchiveInput {
    return __isa(o, "UploadArchiveInput");
  }
}

/**
 * <p>A list of in-progress multipart uploads for a vault.</p>
 */
export interface UploadListElement {
  __type?: "UploadListElement";
  /**
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   */
  ArchiveDescription?: string;

  /**
   * <p>The UTC time at which the multipart upload was initiated.</p>
   */
  CreationDate?: string;

  /**
   * <p>The ID of a multipart upload.</p>
   */
  MultipartUploadId?: string;

  /**
   * <p>The part size, in bytes, specified in the Initiate Multipart Upload request. This is
   *          the size of all the parts in the upload except the last part, which may be smaller than
   *          this size.</p>
   */
  PartSizeInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault that contains the archive.</p>
   */
  VaultARN?: string;
}

export namespace UploadListElement {
  export function isa(o: any): o is UploadListElement {
    return __isa(o, "UploadListElement");
  }
}

/**
 * <p>Provides options to upload a part of an archive in a multipart upload
 *          operation.</p>
 */
export interface UploadMultipartPartInput {
  __type?: "UploadMultipartPartInput";
  /**
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * <p>The data to upload.</p>
   */
  body?: Readable | ReadableStream | Blob;

  /**
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   */
  checksum?: string;

  /**
   * <p>Identifies the range of bytes in the assembled archive that will be uploaded in this
   *          part. Amazon S3 Glacier uses this information to assemble the archive in the proper sequence.
   *          The format of this header follows RFC 2616. An example header is Content-Range:bytes
   *          0-4194303/*.</p>
   */
  range?: string;

  /**
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

export namespace UploadMultipartPartInput {
  export function isa(o: any): o is UploadMultipartPartInput {
    return __isa(o, "UploadMultipartPartInput");
  }
}

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface UploadMultipartPartOutput {
  __type?: "UploadMultipartPartOutput";
  /**
   * <p>The SHA256 tree hash that Amazon S3 Glacier computed for the uploaded part.</p>
   */
  checksum?: string;
}

export namespace UploadMultipartPartOutput {
  export function isa(o: any): o is UploadMultipartPartOutput {
    return __isa(o, "UploadMultipartPartOutput");
  }
}

/**
 * <p>Contains the vault access policy.</p>
 */
export interface VaultAccessPolicy {
  __type?: "VaultAccessPolicy";
  /**
   * <p>The vault access policy.</p>
   */
  Policy?: string;
}

export namespace VaultAccessPolicy {
  export function isa(o: any): o is VaultAccessPolicy {
    return __isa(o, "VaultAccessPolicy");
  }
}

/**
 * <p>Contains the vault lock policy.</p>
 */
export interface VaultLockPolicy {
  __type?: "VaultLockPolicy";
  /**
   * <p>The vault lock policy.</p>
   */
  Policy?: string;
}

export namespace VaultLockPolicy {
  export function isa(o: any): o is VaultLockPolicy {
    return __isa(o, "VaultLockPolicy");
  }
}

/**
 * <p>Represents a vault's notification configuration.</p>
 */
export interface VaultNotificationConfig {
  __type?: "VaultNotificationConfig";
  /**
   * <p>A list of one or more events for which Amazon S3 Glacier will send a notification to the
   *          specified Amazon SNS topic.</p>
   */
  Events?: Array<string>;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name
   *          (ARN).</p>
   */
  SNSTopic?: string;
}

export namespace VaultNotificationConfig {
  export function isa(o: any): o is VaultNotificationConfig {
    return __isa(o, "VaultNotificationConfig");
  }
}
