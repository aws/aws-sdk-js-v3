// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { GlacierServiceException as __BaseException } from "./GlacierServiceException";

/**
 * @public
 * <p>Provides options to abort a multipart upload identified by the upload ID.</p>
 *
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a>.</p>
 */
export interface AbortMultipartUploadInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The upload ID of the multipart upload to delete.</p>
   */
  uploadId: string | undefined;
}

/**
 * @public
 * <p>Returned if a parameter of the request is incorrectly specified.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client</p>
   */
  type?: string;

  /**
   * @public
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Returned if a required header or parameter is missing from the request.</p>
 */
export class MissingParameterValueException extends __BaseException {
  readonly name: "MissingParameterValueException" = "MissingParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client.</p>
   */
  type?: string;

  /**
   * @public
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client</p>
   */
  type?: string;

  /**
   * @public
   * <p>404 Not Found</p>
   */
  code?: string;

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
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Returned if the service cannot complete the request.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>Server</p>
   */
  type?: string;

  /**
   * @public
   * <p>500 Internal Server Error</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>The input values for <code>AbortVaultLock</code>.</p>
 */
export interface AbortVaultLockInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  AmazonCustomerByEmail: "AmazonCustomerByEmail",
  CanonicalUser: "CanonicalUser",
  Group: "Group",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * <p>Contains information about the grantee.</p>
 */
export interface Grantee {
  /**
   * @public
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;

  /**
   * @public
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>URI of the grantee group.</p>
   */
  URI?: string;

  /**
   * @public
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>Email address of the grantee.</p>
   */
  EmailAddress?: string;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * <p>Contains information about a grant.</p>
 */
export interface Grant {
  /**
   * @public
   * <p>The grantee.</p>
   */
  Grantee?: Grantee;

  /**
   * @public
   * <p>Specifies the permission given to the grantee. </p>
   */
  Permission?: Permission | string;
}

/**
 * @public
 * @enum
 */
export const ActionCode = {
  ArchiveRetrieval: "ArchiveRetrieval",
  InventoryRetrieval: "InventoryRetrieval",
  Select: "Select",
} as const;

/**
 * @public
 */
export type ActionCode = (typeof ActionCode)[keyof typeof ActionCode];

/**
 * @public
 * <p>The input values for <code>AddTagsToVault</code>.</p>
 */
export interface AddTagsToVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The tags to add to the vault. Each tag is composed of a key and a value. The value
   *          can be an empty string.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Returned if the request results in a vault or account limit being exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client</p>
   */
  type?: string;

  /**
   * @public
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 *          <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For
 *          conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a>.</p>
 */
export interface ArchiveCreationOutput {
  /**
   * @public
   * <p>The relative URI path of the newly added archive resource.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The checksum of the archive computed by Amazon S3 Glacier.</p>
   */
  checksum?: string;

  /**
   * @public
   * <p>The ID of the archive. This value is also included as part of the location.</p>
   */
  archiveId?: string;
}

/**
 * @public
 * @enum
 */
export const CannedACL = {
  AuthenticatedRead: "authenticated-read",
  AwsExecRead: "aws-exec-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
  BucketOwnerRead: "bucket-owner-read",
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
} as const;

/**
 * @public
 */
export type CannedACL = (typeof CannedACL)[keyof typeof CannedACL];

/**
 * @public
 * <p>Provides options to complete a multipart upload operation. This informs Amazon
 *          Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble
 *          the archive from the uploaded parts. After assembling and saving the archive to the vault,
 *          Glacier returns the URI path of the newly created archive resource.</p>
 */
export interface CompleteMultipartUploadInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The total size, in bytes, of the entire archive. This value should be the sum of all
   *          the sizes of the individual parts that you uploaded.</p>
   */
  archiveSize?: string;

  /**
   * @public
   * <p>The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash
   *          of the individual parts. If the value you specify in the request does not match the SHA256
   *          tree hash of the final assembled archive as computed by Amazon S3 Glacier (Glacier),
   *          Glacier returns an error and the request fails.</p>
   */
  checksum?: string;
}

/**
 * @public
 * <p>The input values for <code>CompleteVaultLock</code>.</p>
 */
export interface CompleteVaultLockInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.</p>
   */
  lockId: string | undefined;
}

/**
 * @public
 * <p>Provides options to create a vault.</p>
 */
export interface CreateVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface CreateVaultOutput {
  /**
   * @public
   * <p>The URI of the vault that was created.</p>
   */
  location?: string;
}

/**
 * @public
 * @enum
 */
export const FileHeaderInfo = {
  Ignore: "IGNORE",
  None: "NONE",
  Use: "USE",
} as const;

/**
 * @public
 */
export type FileHeaderInfo = (typeof FileHeaderInfo)[keyof typeof FileHeaderInfo];

/**
 * @public
 * <p>Contains information about the comma-separated value (CSV) file to select from.</p>
 */
export interface CSVInput {
  /**
   * @public
   * <p>Describes the first line of input. Valid values are <code>None</code>,
   *                 <code>Ignore</code>, and <code>Use</code>.</p>
   */
  FileHeaderInfo?: FileHeaderInfo | string;

  /**
   * @public
   * <p>A single character used to indicate that a row should be ignored when the character is
   *             present at the start of that row.</p>
   */
  Comments?: string;

  /**
   * @public
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * @public
   * <p>A value used to separate individual records from each other.</p>
   */
  RecordDelimiter?: string;

  /**
   * @public
   * <p>A value used to separate individual fields from each other within a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * @public
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   */
  QuoteCharacter?: string;
}

/**
 * @public
 * @enum
 */
export const QuoteFields = {
  Always: "ALWAYS",
  AsNeeded: "ASNEEDED",
} as const;

/**
 * @public
 */
export type QuoteFields = (typeof QuoteFields)[keyof typeof QuoteFields];

/**
 * @public
 * <p>Contains information about the comma-separated value (CSV) file that the job results
 *             are stored in.</p>
 */
export interface CSVOutput {
  /**
   * @public
   * <p>A value that indicates whether all output fields should be contained within quotation
   *             marks.</p>
   */
  QuoteFields?: QuoteFields | string;

  /**
   * @public
   * <p>A single character used for escaping the quotation-mark character inside an already
   *             escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * @public
   * <p>A value used to separate individual records from each other.</p>
   */
  RecordDelimiter?: string;

  /**
   * @public
   * <p>A value used to separate individual fields from each other within a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * @public
   * <p>A value used as an escape character where the field delimiter is part of the
   *             value.</p>
   */
  QuoteCharacter?: string;
}

/**
 * @public
 * <p>Data retrieval policy rule.</p>
 */
export interface DataRetrievalRule {
  /**
   * @public
   * <p>The type of data retrieval policy to set.</p>
   *          <p>Valid values: BytesPerHour|FreeTier|None</p>
   */
  Strategy?: string;

  /**
   * @public
   * <p>The maximum number of bytes that can be retrieved in an hour.</p>
   *          <p>This field is required only if the value of the Strategy field is
   *             <code>BytesPerHour</code>. Your PUT operation will be rejected if the Strategy field is
   *          not set to <code>BytesPerHour</code> and you set this field.</p>
   */
  BytesPerHour?: number;
}

/**
 * @public
 * <p>Data retrieval policy.</p>
 */
export interface DataRetrievalPolicy {
  /**
   * @public
   * <p>The policy rule. Although this is a list type, currently there must be only one rule,
   *          which contains a Strategy field and optionally a BytesPerHour field.</p>
   */
  Rules?: DataRetrievalRule[];
}

/**
 * @public
 * <p>Provides options for deleting an archive from an Amazon S3 Glacier vault.</p>
 */
export interface DeleteArchiveInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The ID of the archive to delete.</p>
   */
  archiveId: string | undefined;
}

/**
 * @public
 * <p>Provides options for deleting a vault from Amazon S3 Glacier.</p>
 */
export interface DeleteVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>DeleteVaultAccessPolicy input.</p>
 */
export interface DeleteVaultAccessPolicyInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Provides options for deleting a vault notification configuration from an Amazon
 *          Glacier vault.</p>
 */
export interface DeleteVaultNotificationsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Provides options for retrieving a job description.</p>
 */
export interface DescribeJobInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The ID of the job to describe.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Describes the options for a range inventory retrieval job.</p>
 */
export interface InventoryRetrievalJobDescription {
  /**
   * @public
   * <p>The output format for the vault inventory list, which is set by the <b>InitiateJob</b> request when initiating a job to retrieve a vault
   *             inventory. Valid values are <code>CSV</code> and <code>JSON</code>.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The start of the date range in Universal Coordinated Time (UTC) for vault inventory
   *             retrieval that includes archives created on or after this date. This value should be a
   *             string in the ISO 8601 date format, for example
   *             <code>2013-03-20T17:03:43Z</code>.</p>
   */
  StartDate?: string;

  /**
   * @public
   * <p>The end of the date range in UTC for vault inventory retrieval that includes
   *             archives created before this date. This value should be a string in the ISO 8601 date
   *             format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  EndDate?: string;

  /**
   * @public
   * <p>The maximum number of inventory items returned per vault inventory retrieval
   *             request. This limit is set when initiating the job with the a <b>InitiateJob</b> request. </p>
   */
  Limit?: string;

  /**
   * @public
   * <p>An opaque string that represents where to continue pagination of the vault
   *             inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are
   *             no more inventory items, this value is <code>null</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html#api-initiate-job-post-vault-inventory-list-filtering"> Range Inventory Retrieval</a>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "aws:kms",
  S3: "AES256",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * <p>Contains information about the encryption used to store the job results in Amazon S3. </p>
 */
export interface Encryption {
  /**
   * @public
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3, for
   *             example <code>AES256</code> or <code>aws:kms</code>.</p>
   */
  EncryptionType?: EncryptionType | string;

  /**
   * @public
   * <p>The AWS KMS key ID to use for object encryption. All GET and PUT requests for an
   *             object protected by AWS KMS fail if not made by using Secure Sockets Layer (SSL) or
   *             Signature Version 4. </p>
   */
  KMSKeyId?: string;

  /**
   * @public
   * <p>Optional. If the encryption type is <code>aws:kms</code>, you can use this value to
   *             specify the encryption context for the job results.</p>
   */
  KMSContext?: string;
}

/**
 * @public
 * @enum
 */
export const StorageClass = {
  ReducedRedundancy: "REDUCED_REDUNDANCY",
  Standard: "STANDARD",
  StandardInfrequentAccess: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * <p>Contains information about the location in Amazon S3 where the select job results are stored.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket where the job results are stored.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The prefix that is prepended to the results for this request.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Contains information about the encryption used to store the job results in Amazon S3.</p>
   */
  Encryption?: Encryption;

  /**
   * @public
   * <p>The canned access control list (ACL) to apply to the job results.</p>
   */
  CannedACL?: CannedACL | string;

  /**
   * @public
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Grant[];

  /**
   * @public
   * <p>The tag-set that is applied to the job results.</p>
   */
  Tagging?: Record<string, string>;

  /**
   * @public
   * <p>A map of metadata to store with the job results in Amazon S3.</p>
   */
  UserMetadata?: Record<string, string>;

  /**
   * @public
   * <p>The storage class used to store the job results.</p>
   */
  StorageClass?: StorageClass | string;
}

/**
 * @public
 * <p>Contains information about the location where the select job results are stored.</p>
 */
export interface OutputLocation {
  /**
   * @public
   * <p>Describes an S3 location that will receive the results of the job request.</p>
   */
  S3?: S3Location;
}

/**
 * @public
 * @enum
 */
export const ExpressionType = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type ExpressionType = (typeof ExpressionType)[keyof typeof ExpressionType];

/**
 * @public
 * <p>Describes how the archive is serialized.</p>
 */
export interface InputSerialization {
  /**
   * @public
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  csv?: CSVInput;
}

/**
 * @public
 * <p>Describes how the select output is serialized.</p>
 */
export interface OutputSerialization {
  /**
   * @public
   * <p>Describes the serialization of CSV-encoded query results.</p>
   */
  csv?: CSVOutput;
}

/**
 * @public
 * <p>Contains information about the parameters used for a select.</p>
 */
export interface SelectParameters {
  /**
   * @public
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization?: InputSerialization;

  /**
   * @public
   * <p>The type of the provided expression, for example <code>SQL</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * @public
   * <p>The expression that is used to select the object.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>Describes how the results of the select job are serialized.</p>
   */
  OutputSerialization?: OutputSerialization;
}

/**
 * @public
 * @enum
 */
export const StatusCode = {
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode];

/**
 * @public
 * <p>Contains the description of an Amazon S3 Glacier job.</p>
 */
export interface GlacierJobDescription {
  /**
   * @public
   * <p>An opaque string that identifies an Amazon S3 Glacier job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The job description provided when initiating the job.</p>
   */
  JobDescription?: string;

  /**
   * @public
   * <p>The job type. This value is either <code>ArchiveRetrieval</code>,
   *                 <code>InventoryRetrieval</code>, or
   *             <code>Select</code>. </p>
   */
  Action?: ActionCode | string;

  /**
   * @public
   * <p>The archive ID requested for a select job or archive retrieval. Otherwise, this
   *             field is null.</p>
   */
  ArchiveId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was
   *             requested.</p>
   */
  VaultARN?: string;

  /**
   * @public
   * <p>The UTC date when the job was created. This value is a string representation of ISO
   *             8601 date format, for example <code>"2012-03-20T17:03:43.221Z"</code>.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The job status. When a job is completed, you get the job's output using Get Job
   *             Output (GET output).</p>
   */
  Completed?: boolean;

  /**
   * @public
   * <p>The status code can be <code>InProgress</code>, <code>Succeeded</code>, or
   *                 <code>Failed</code>, and indicates the status of the job.</p>
   */
  StatusCode?: StatusCode | string;

  /**
   * @public
   * <p>A friendly message that describes the job status.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>For an archive retrieval job, this value is the size in bytes of the archive being
   *             requested for download. For an inventory retrieval or select job, this value is
   *             null.</p>
   */
  ArchiveSizeInBytes?: number;

  /**
   * @public
   * <p>For an inventory retrieval job, this value is the size in bytes of the inventory
   *             requested for download. For an archive retrieval or select job, this value is
   *             null.</p>
   */
  InventorySizeInBytes?: number;

  /**
   * @public
   * <p>An Amazon SNS topic that receives notification.</p>
   */
  SNSTopic?: string;

  /**
   * @public
   * <p>The UTC time that the job request completed. While the job is in progress, the
   *             value is null.</p>
   */
  CompletionDate?: string;

  /**
   * @public
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
   * @public
   * <p>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory
   *             retrieval or select jobs, this field is null.</p>
   */
  ArchiveSHA256TreeHash?: string;

  /**
   * @public
   * <p>The retrieved byte range for archive retrieval jobs in the form
   *                 <i>StartByteValue</i>-<i>EndByteValue</i>. If no range
   *             was specified in the archive retrieval, then the whole archive is retrieved. In this
   *             case, <i>StartByteValue</i> equals 0 and <i>EndByteValue</i>
   *             equals the size of the archive minus 1. For inventory retrieval or select jobs, this
   *             field is null. </p>
   */
  RetrievalByteRange?: string;

  /**
   * @public
   * <p>The tier to use for a select or an archive retrieval. Valid values are
   *                 <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *                 <code>Standard</code> is the default.</p>
   */
  Tier?: string;

  /**
   * @public
   * <p>Parameters used for range inventory retrieval.</p>
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobDescription;

  /**
   * @public
   * <p>Contains the job output location.</p>
   */
  JobOutputPath?: string;

  /**
   * @public
   * <p>Contains the parameters used for a select.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * @public
   * <p>Contains the location where the data from the select job is stored.</p>
   */
  OutputLocation?: OutputLocation;
}

/**
 * @public
 * <p>Provides options for retrieving metadata for a specific vault in Amazon
 *          Glacier.</p>
 */
export interface DescribeVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface DescribeVaultOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vault.</p>
   */
  VaultARN?: string;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  VaultName?: string;

  /**
   * @public
   * <p>The Universal Coordinated Time (UTC) date when the vault was created. This value
   *          should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The Universal Coordinated Time (UTC) date when Amazon S3 Glacier completed the last
   *          vault inventory.  This value should be a string in the ISO 8601 date format, for example
   *             <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  LastInventoryDate?: string;

  /**
   * @public
   * <p>The number of archives in the vault as of the last inventory date. This field will
   *          return <code>null</code> if an inventory has not yet run on the vault, for example if you
   *          just created the vault.</p>
   */
  NumberOfArchives?: number;

  /**
   * @public
   * <p>Total size, in bytes, of the archives in the vault as of the last inventory date.
   *          This field will return null if an inventory has not yet run on the vault, for example if
   *          you just created the vault.</p>
   */
  SizeInBytes?: number;
}

/**
 * @public
 * <p>Input for GetDataRetrievalPolicy.</p>
 */
export interface GetDataRetrievalPolicyInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code>
 *          request.</p>
 */
export interface GetDataRetrievalPolicyOutput {
  /**
   * @public
   * <p>Contains the returned data retrieval policy in JSON format.</p>
   */
  Policy?: DataRetrievalPolicy;
}

/**
 * @public
 * <p>Provides options for downloading output of an Amazon S3 Glacier job.</p>
 */
export interface GetJobOutputInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The job ID whose data is downloaded.</p>
   */
  jobId: string | undefined;

  /**
   * @public
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
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetJobOutputOutput {
  /**
   * @public
   * <p>The job data, either archive data or inventory data.</p>
   */
  body?: StreamingBlobTypes;

  /**
   * @public
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
   * @public
   * <p>The HTTP response code for a job output request. The value depends on whether a range
   *          was specified in the request.</p>
   */
  status?: number;

  /**
   * @public
   * <p>The range of bytes returned by Amazon S3 Glacier. If only partial output is downloaded,
   *          the response provides the range of bytes Amazon S3 Glacier returned. For example, bytes
   *          0-1048575/8388608 returns the first 1 MB from 8 MB.</p>
   */
  contentRange?: string;

  /**
   * @public
   * <p>Indicates the range units accepted. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html">RFC2616</a>. </p>
   */
  acceptRanges?: string;

  /**
   * @public
   * <p>The Content-Type depends on whether the job output is an archive or a vault
   *          inventory. For archive data, the Content-Type is application/octet-stream. For vault
   *          inventory, if you requested CSV format when you initiated the job, the Content-Type is
   *          text/csv. Otherwise, by default, vault inventory is returned as JSON, and the Content-Type
   *          is application/json.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The description of an archive.</p>
   */
  archiveDescription?: string;
}

/**
 * @public
 * <p>Input for GetVaultAccessPolicy.</p>
 */
export interface GetVaultAccessPolicyInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Contains the vault access policy.</p>
 */
export interface VaultAccessPolicy {
  /**
   * @public
   * <p>The vault access policy.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>Output for GetVaultAccessPolicy.</p>
 */
export interface GetVaultAccessPolicyOutput {
  /**
   * @public
   * <p>Contains the returned vault access policy as a JSON string.</p>
   */
  policy?: VaultAccessPolicy;
}

/**
 * @public
 * <p>The input values for <code>GetVaultLock</code>.</p>
 */
export interface GetVaultLockInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetVaultLockOutput {
  /**
   * @public
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   */
  Policy?: string;

  /**
   * @public
   * <p>The state of the vault lock. <code>InProgress</code> or
   *          <code>Locked</code>.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The UTC date and time at which the lock ID expires. This value can be
   *             <code>null</code> if the vault lock is in a <code>Locked</code> state.</p>
   */
  ExpirationDate?: string;

  /**
   * @public
   * <p>The UTC date and time at which the vault lock was put into the
   *             <code>InProgress</code> state.</p>
   */
  CreationDate?: string;
}

/**
 * @public
 * <p>Provides options for retrieving the notification configuration set on an Amazon
 *          Glacier vault.</p>
 */
export interface GetVaultNotificationsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Represents a vault's notification configuration.</p>
 */
export interface VaultNotificationConfig {
  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name
   *          (ARN).</p>
   */
  SNSTopic?: string;

  /**
   * @public
   * <p>A list of one or more events for which Amazon S3 Glacier will send a notification to the
   *          specified Amazon SNS topic.</p>
   */
  Events?: string[];
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface GetVaultNotificationsOutput {
  /**
   * @public
   * <p>Returns the notification configuration set on the vault.</p>
   */
  vaultNotificationConfig?: VaultNotificationConfig;
}

/**
 * @public
 * <p>Provides options for specifying a range inventory retrieval job.</p>
 */
export interface InventoryRetrievalJobInput {
  /**
   * @public
   * <p>The start of the date range in UTC for vault inventory retrieval that includes
   *          archives created on or after this date. This value should be a string in the ISO 8601 date
   *          format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  StartDate?: string;

  /**
   * @public
   * <p>The end of the date range in UTC for vault inventory retrieval that includes archives
   *          created before this date. This value should be a string in the ISO 8601 date format, for
   *          example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  EndDate?: string;

  /**
   * @public
   * <p>Specifies the maximum number of inventory items returned per vault inventory
   *          retrieval request. Valid values are greater than or equal to 1.</p>
   */
  Limit?: string;

  /**
   * @public
   * <p>An opaque string that represents where to continue pagination of the vault inventory
   *          retrieval results. You use the marker in a new <b>InitiateJob</b>
   *          request to obtain additional inventory items. If there are no more inventory items, this
   *          value is <code>null</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Provides options for defining a job.</p>
 */
export interface JobParameters {
  /**
   * @public
   * <p>When initiating a job to retrieve a vault inventory, you can optionally add this
   *          parameter to your request to specify the output format. If you are initiating an inventory
   *          job and do not specify a Format field, JSON is the default format. Valid values are "CSV"
   *          and "JSON".</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The job type. You can initiate a job to perform a select query on an archive,
   *          retrieve an archive, or get an inventory of a vault.
   *          Valid values are "select", "archive-retrieval" and "inventory-retrieval".</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The ID of the archive that you want to retrieve. This field is required only if
   *             <code>Type</code> is set to <code>select</code> or <code>archive-retrieval</code>code>.
   *          An error occurs if you specify this
   *          request parameter for an inventory retrieval job request. </p>
   */
  ArchiveId?: string;

  /**
   * @public
   * <p>The optional description for the job. The description must be less than or equal to
   *          1,024 bytes. The allowable characters are 7-bit ASCII without control codes-specifically,
   *          ASCII values 32-126 decimal or 0x20-0x7E hexadecimal.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon SNS topic ARN to which Amazon S3 Glacier sends a notification when the job is
   *          completed and the output is ready for you to download. The specified topic publishes the
   *          notification to its subscribers. The SNS topic must exist.</p>
   */
  SNSTopic?: string;

  /**
   * @public
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
   * @public
   * <p>The tier to use for a select or an archive retrieval job. Valid values are
   *             <code>Expedited</code>, <code>Standard</code>, or <code>Bulk</code>.
   *             <code>Standard</code> is the default.</p>
   */
  Tier?: string;

  /**
   * @public
   * <p>Input parameters used for range inventory retrieval.</p>
   */
  InventoryRetrievalParameters?: InventoryRetrievalJobInput;

  /**
   * @public
   * <p>Contains the parameters that define a job.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * @public
   * <p>Contains information about the location where the select job results are stored.</p>
   */
  OutputLocation?: OutputLocation;
}

/**
 * @public
 * <p>Provides options for initiating an Amazon S3 Glacier job.</p>
 */
export interface InitiateJobInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>Provides options for specifying job information.</p>
   */
  jobParameters?: JobParameters;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateJobOutput {
  /**
   * @public
   * <p>The relative URI path of the job.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The path to the location of where the select results are stored.</p>
   */
  jobOutputPath?: string;
}

/**
 * @public
 * <p>Returned if there is insufficient capacity to process this expedited request. This
 *          error only applies to expedited retrievals and not to standard or bulk
 *          retrievals.</p>
 */
export class InsufficientCapacityException extends __BaseException {
  readonly name: "InsufficientCapacityException" = "InsufficientCapacityException";
  readonly $fault: "client" = "client";
  type?: string;
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Returned if a retrieval job would exceed the current data policy's retrieval rate
 *          limit. For more information about data retrieval policies,</p>
 */
export class PolicyEnforcedException extends __BaseException {
  readonly name: "PolicyEnforcedException" = "PolicyEnforcedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client</p>
   */
  type?: string;

  /**
   * @public
   * <p>PolicyEnforcedException</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyEnforcedException, __BaseException>) {
    super({
      name: "PolicyEnforcedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyEnforcedException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Provides options for initiating a multipart upload to an Amazon S3 Glacier
 *          vault.</p>
 */
export interface InitiateMultipartUploadInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The archive description that you are uploading in parts.</p>
   *          <p>The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example
   *          1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum
   *          allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).</p>
   */
  archiveDescription?: string;

  /**
   * @public
   * <p>The size of each part except the last, in bytes. The last part can be smaller than
   *          this part size.</p>
   */
  partSize?: string;
}

/**
 * @public
 * <p>The Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateMultipartUploadOutput {
  /**
   * @public
   * <p>The relative URI path of the multipart upload ID Amazon S3 Glacier created.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The ID of the multipart upload. This value is also included as part of the
   *          location.</p>
   */
  uploadId?: string;
}

/**
 * @public
 * <p>Contains the vault lock policy.</p>
 */
export interface VaultLockPolicy {
  /**
   * @public
   * <p>The vault lock policy.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>The input values for <code>InitiateVaultLock</code>.</p>
 */
export interface InitiateVaultLockInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The vault lock policy as a JSON string, which uses "\" as an escape
   *          character.</p>
   */
  policy?: VaultLockPolicy;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateVaultLockOutput {
  /**
   * @public
   * <p>The lock ID, which is used to complete the vault locking process.</p>
   */
  lockId?: string;
}

/**
 * @public
 * <p>Provides options for retrieving a job list for an Amazon S3 Glacier vault.</p>
 */
export interface ListJobsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The maximum number of jobs to be returned. The default limit is 50. The number of
   *          jobs returned might be fewer than the specified limit, but the number of returned jobs
   *          never exceeds the limit.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>An opaque string used for pagination. This value specifies the job at which the
   *          listing of jobs should begin. Get the marker value from a previous List Jobs response. You
   *          only need to include the marker if you are continuing the pagination of results started in
   *          a previous List Jobs request.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The type of job status to return. You can specify the following values:
   *             <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.</p>
   */
  statuscode?: string;

  /**
   * @public
   * <p>The state of the jobs to return. You can specify <code>true</code> or
   *             <code>false</code>.</p>
   */
  completed?: string;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListJobsOutput {
  /**
   * @public
   * <p>A list of job objects. Each job object contains metadata describing the
   *          job.</p>
   */
  JobList?: GlacierJobDescription[];

  /**
   * @public
   * <p>
   *          An opaque string used for pagination that specifies the job at which the listing of jobs should begin.
   *          You get the <code>marker</code> value from a previous List Jobs response.
   *          You only need to include the marker if you are continuing the pagination of the results started in a
   *          previous List Jobs request. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Provides options for retrieving list of in-progress multipart uploads for an Amazon
 *          Glacier vault.</p>
 */
export interface ListMultipartUploadsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>Specifies the maximum number of uploads returned in the response body. If this value
   *          is not specified, the List Uploads operation returns up to 50 uploads.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>An opaque string used for pagination. This value specifies the upload at which the
   *          listing of uploads should begin. Get the marker value from a previous List Uploads
   *          response. You need only include the marker if you are continuing the pagination of results
   *          started in a previous List Uploads request.</p>
   */
  marker?: string;
}

/**
 * @public
 * <p>A list of in-progress multipart uploads for a vault.</p>
 */
export interface UploadListElement {
  /**
   * @public
   * <p>The ID of a multipart upload.</p>
   */
  MultipartUploadId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vault that contains the archive.</p>
   */
  VaultARN?: string;

  /**
   * @public
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   */
  ArchiveDescription?: string;

  /**
   * @public
   * <p>The part size, in bytes, specified in the Initiate Multipart Upload request. This is
   *          the size of all the parts in the upload except the last part, which may be smaller than
   *          this size.</p>
   */
  PartSizeInBytes?: number;

  /**
   * @public
   * <p>The UTC time at which the multipart upload was initiated.</p>
   */
  CreationDate?: string;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListMultipartUploadsOutput {
  /**
   * @public
   * <p>A list of in-progress multipart uploads.</p>
   */
  UploadsList?: UploadListElement[];

  /**
   * @public
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Multipart Uploads request to obtain more uploads in the list. If
   *          there are no more uploads, this value is <code>null</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Provides options for retrieving a list of parts of an archive that have been uploaded
 *          in a specific multipart upload.</p>
 */
export interface ListPartsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>An opaque string used for pagination. This value specifies the part at which the
   *          listing of parts should begin. Get the marker value from the response of a previous List
   *          Parts response. You need only include the marker if you are continuing the pagination of
   *          results started in a previous List Parts request.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The maximum number of parts to be returned. The default limit is 50. The number of
   *          parts returned might be fewer than the specified limit, but the number of returned parts
   *          never exceeds the limit.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>A list of the part sizes of the multipart upload.</p>
 */
export interface PartListElement {
  /**
   * @public
   * <p>The byte range of a part, inclusive of the upper value of the range.</p>
   */
  RangeInBytes?: string;

  /**
   * @public
   * <p>The SHA256 tree hash value that Amazon S3 Glacier calculated for the part. This field is
   *          never <code>null</code>.</p>
   */
  SHA256TreeHash?: string;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListPartsOutput {
  /**
   * @public
   * <p>The ID of the upload to which the parts are associated.</p>
   */
  MultipartUploadId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vault to which the multipart upload was
   *          initiated.</p>
   */
  VaultARN?: string;

  /**
   * @public
   * <p>The description of the archive that was specified in the Initiate Multipart Upload
   *          request.</p>
   */
  ArchiveDescription?: string;

  /**
   * @public
   * <p>The part size in bytes. This is the same value that you specified in the Initiate
   *          Multipart Upload request.</p>
   */
  PartSizeInBytes?: number;

  /**
   * @public
   * <p>The UTC time at which the multipart upload was initiated.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>A list of the part sizes of the multipart upload. Each object in the array contains a
   *          <code>RangeBytes</code> and <code>sha256-tree-hash</code> name/value
   *          pair.</p>
   */
  Parts?: PartListElement[];

  /**
   * @public
   * <p>An opaque string that represents where to continue pagination of the results. You use
   *          the marker in a new List Parts request to obtain more jobs in the list. If there are no
   *          more parts, this value is <code>null</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListProvisionedCapacityInput {
  /**
   * @public
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * <p>The definition for a provisioned capacity unit.</p>
 */
export interface ProvisionedCapacityDescription {
  /**
   * @public
   * <p>The ID that identifies the provisioned capacity unit.</p>
   */
  CapacityId?: string;

  /**
   * @public
   * <p>The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).</p>
   */
  StartDate?: string;

  /**
   * @public
   * <p>The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).</p>
   */
  ExpirationDate?: string;
}

/**
 * @public
 */
export interface ListProvisionedCapacityOutput {
  /**
   * @public
   * <p>The response body contains the following JSON fields.</p>
   */
  ProvisionedCapacityList?: ProvisionedCapacityDescription[];
}

/**
 * @public
 * <p>The input value for <code>ListTagsForVaultInput</code>.</p>
 */
export interface ListTagsForVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListTagsForVaultOutput {
  /**
   * @public
   * <p>The tags attached to the vault. Each tag is composed of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Provides options to retrieve the vault list owned by the calling user's account. The
 *          list provides metadata information for each vault.</p>
 */
export interface ListVaultsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>A string used for pagination. The marker specifies the vault ARN after which the
   *          listing of vaults should begin.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The maximum number of vaults to be returned. The default limit is 10. The number of
   *          vaults returned might be fewer than the specified limit, but the number of returned vaults
   *          never exceeds the limit.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListVaultsOutput {
  /**
   * @public
   * <p>List of vaults.</p>
   */
  VaultList?: DescribeVaultOutput[];

  /**
   * @public
   * <p>The vault ARN at which to continue pagination of the results. You use the marker in
   *          another List Vaults request to obtain more vaults in the list.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityInput {
  /**
   * @public
   * <p>The AWS account ID of the account that owns the vault. You can either specify an AWS
   *          account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS
   *          account ID associated with the credentials used to sign the request. If you use an account
   *          ID, don't include any hyphens ('-') in the ID. </p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface PurchaseProvisionedCapacityOutput {
  /**
   * @public
   * <p>The ID that identifies the provisioned capacity unit.</p>
   */
  capacityId?: string;
}

/**
 * @public
 * <p>The input value for <code>RemoveTagsFromVaultInput</code>.</p>
 */
export interface RemoveTagsFromVaultInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>A list of tag keys. Each corresponding tag is removed from the vault.</p>
   */
  TagKeys?: string[];
}

/**
 * @public
 * <p>SetDataRetrievalPolicy input.</p>
 */
export interface SetDataRetrievalPolicyInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS
   *          account ID associated with the credentials used to sign the request. You can either specify
   *          an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon
   *          Glacier uses the AWS account ID associated with the credentials used to sign the request.
   *          If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The data retrieval policy in JSON format.</p>
   */
  Policy?: DataRetrievalPolicy;
}

/**
 * @public
 * <p>SetVaultAccessPolicy input.</p>
 */
export interface SetVaultAccessPolicyInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The vault access policy as a JSON string.</p>
   */
  policy?: VaultAccessPolicy;
}

/**
 * @public
 * <p>Provides options to configure notifications that will be sent when specific events
 *          happen to a vault.</p>
 */
export interface SetVaultNotificationsInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>Provides options for specifying notification configuration.</p>
   */
  vaultNotificationConfig?: VaultNotificationConfig;
}

/**
 * @public
 * <p>Returned if, when uploading an archive, Amazon S3 Glacier times out while receiving the
 *          upload.</p>
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Client</p>
   */
  type?: string;

  /**
   * @public
   * <p>408 Request Timeout</p>
   */
  code?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>Provides options to add an archive to a vault.</p>
 */
export interface UploadArchiveInput {
  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The optional description of the archive you are uploading.</p>
   */
  archiveDescription?: string;

  /**
   * @public
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   */
  checksum?: string;

  /**
   * @public
   * <p>The data to upload.</p>
   */
  body?: StreamingBlobTypes;
}

/**
 * @public
 * <p>Provides options to upload a part of an archive in a multipart upload
 *          operation.</p>
 */
export interface UploadMultipartPartInput {
  /**
   * @public
   * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the
   *          vault. You can either specify an AWS account ID or optionally a single '<code>-</code>'
   *          (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the
   *          credentials used to sign the request. If you use an account ID, do not include any hyphens
   *          ('-') in the ID. </p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The name of the vault.</p>
   */
  vaultName: string | undefined;

  /**
   * @public
   * <p>The upload ID of the multipart upload.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The SHA256 tree hash of the data being uploaded.</p>
   */
  checksum?: string;

  /**
   * @public
   * <p>Identifies the range of bytes in the assembled archive that will be uploaded in this
   *          part. Amazon S3 Glacier uses this information to assemble the archive in the proper sequence.
   *          The format of this header follows RFC 2616. An example header is Content-Range:bytes
   *          0-4194303/*.</p>
   */
  range?: string;

  /**
   * @public
   * <p>The data to upload.</p>
   */
  body?: StreamingBlobTypes;
}

/**
 * @public
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface UploadMultipartPartOutput {
  /**
   * @public
   * <p>The SHA256 tree hash that Amazon S3 Glacier computed for the uploaded part.</p>
   */
  checksum?: string;
}

/**
 * @internal
 */
export const GetJobOutputOutputFilterSensitiveLog = (obj: GetJobOutputOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadArchiveInputFilterSensitiveLog = (obj: UploadArchiveInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadMultipartPartInputFilterSensitiveLog = (obj: UploadMultipartPartInput): any => ({
  ...obj,
});
