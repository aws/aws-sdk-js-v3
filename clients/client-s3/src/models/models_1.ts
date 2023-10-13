// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import {
  ChecksumAlgorithm,
  Grant,
  ObjectCannedACL,
  ObjectLockConfiguration,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  PublicAccessBlockConfiguration,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  ServerSideEncryption,
  StorageClass,
  Tagging,
} from "./models_0";
import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 */
export interface PutObjectLockConfigurationOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationRequest {
  /**
   * @public
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;

  /**
   * @public
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * @public
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectRetentionOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectRetentionRequest {
  /**
   * @public
   * <p>The bucket name that contains the object you want to apply this Object Retention
   *          configuration to. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key name for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The container element for the Object Retention configuration.</p>
   */
  Retention?: ObjectLockRetention;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;

  /**
   * @public
   * <p>The version ID for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * @public
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectTaggingOutput {
  /**
   * @public
   * <p>The versionId of the object the tag-set was added to.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface PutObjectTaggingRequest {
  /**
   * @public
   * <p>The bucket name containing the object. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The versionId of the object that the tag-set will be added to.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   */
  Tagging: Tagging | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          bucket. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>This action is not allowed against this storage tier.</p>
 */
export class ObjectAlreadyInActiveTierError extends __BaseException {
  readonly name: "ObjectAlreadyInActiveTierError" = "ObjectAlreadyInActiveTierError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectAlreadyInActiveTierError, __BaseException>) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
  }
}

/**
 * @public
 */
export interface RestoreObjectOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;

  /**
   * @public
   * <p>Indicates the path in the provided S3 output location where Select results will be
   *          restored to.</p>
   */
  RestoreOutputPath?: string;
}

/**
 * @public
 * @enum
 */
export const Tier = {
  Bulk: "Bulk",
  Expedited: "Expedited",
  Standard: "Standard",
} as const;

/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * @public
 * <p>Container for S3 Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  /**
   * @public
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | undefined;
}

/**
 * @public
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  /**
   * @public
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, <code>aws:kms</code>).</p>
   */
  EncryptionType: ServerSideEncryption | undefined;

  /**
   * @public
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of
   *          the symmetric encryption customer managed key to use for encryption of job results. Amazon S3 only
   *          supports symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in KMS</a> in the <i>Amazon Web Services Key Management Service
   *             Developer Guide</i>.</p>
   */
  KMSKeyId?: string;

  /**
   * @public
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to
   *          specify the encryption context for the restore results.</p>
   */
  KMSContext?: string;
}

/**
 * @public
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface MetadataEntry {
  /**
   * @public
   * <p>Name of the object.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Value of the object.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The name of the bucket where the restore results will be placed.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>The prefix that is prepended to the restore results for this request.</p>
   */
  Prefix: string | undefined;

  /**
   * @public
   * <p>Contains the type of server-side encryption used.</p>
   */
  Encryption?: Encryption;

  /**
   * @public
   * <p>The canned ACL to apply to the restore results.</p>
   */
  CannedACL?: ObjectCannedACL;

  /**
   * @public
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Grant[];

  /**
   * @public
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: Tagging;

  /**
   * @public
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: MetadataEntry[];

  /**
   * @public
   * <p>The class of storage used to store the restore results.</p>
   */
  StorageClass?: StorageClass;
}

/**
 * @public
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface OutputLocation {
  /**
   * @public
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
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
 * @enum
 */
export const CompressionType = {
  BZIP2: "BZIP2",
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const FileHeaderInfo = {
  IGNORE: "IGNORE",
  NONE: "NONE",
  USE: "USE",
} as const;

/**
 * @public
 */
export type FileHeaderInfo = (typeof FileHeaderInfo)[keyof typeof FileHeaderInfo];

/**
 * @public
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is
 *          formatted.</p>
 */
export interface CSVInput {
  /**
   * @public
   * <p>Describes the first line of input. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: First line is not a header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values
   *                to indicate the column in an expression. You can use column position (such as _1, _2,
   *                …) to indicate the column (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to
   *                identify a column in an expression (<code>SELECT "name" FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   */
  FileHeaderInfo?: FileHeaderInfo;

  /**
   * @public
   * <p>A single character used to indicate that a row should be ignored when the character is
   *          present at the start of that row. You can specify any character to indicate a comment line.
   *          The default character is <code>#</code>.</p>
   *          <p>Default: <code>#</code>
   *          </p>
   */
  Comments?: string;

  /**
   * @public
   * <p>A single character used for escaping the quotation mark character inside an already
   *          escaped value. For example, the value <code>""" a , b """</code> is parsed as <code>" a , b
   *             "</code>.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * @public
   * <p>A single character used to separate individual records in the input. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * @public
   * <p>A single character used to separate individual fields in a record. You can specify an
   *          arbitrary delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * @public
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   */
  QuoteCharacter?: string;

  /**
   * @public
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records
   *          should be allowed. Default value is FALSE. Setting this value to TRUE may lower
   *          performance.</p>
   */
  AllowQuotedRecordDelimiter?: boolean;
}

/**
 * @public
 * @enum
 */
export const JSONType = {
  DOCUMENT: "DOCUMENT",
  LINES: "LINES",
} as const;

/**
 * @public
 */
export type JSONType = (typeof JSONType)[keyof typeof JSONType];

/**
 * @public
 * <p>Specifies JSON as object's input serialization format.</p>
 */
export interface JSONInput {
  /**
   * @public
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   */
  Type?: JSONType;
}

/**
 * @public
 * <p>Container for Parquet.</p>
 */
export interface ParquetInput {}

/**
 * @public
 * <p>Describes the serialization format of the object.</p>
 */
export interface InputSerialization {
  /**
   * @public
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: CSVInput;

  /**
   * @public
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value:
   *          NONE.</p>
   */
  CompressionType?: CompressionType;

  /**
   * @public
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: JSONInput;

  /**
   * @public
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: ParquetInput;
}

/**
 * @public
 * @enum
 */
export const QuoteFields = {
  ALWAYS: "ALWAYS",
  ASNEEDED: "ASNEEDED",
} as const;

/**
 * @public
 */
export type QuoteFields = (typeof QuoteFields)[keyof typeof QuoteFields];

/**
 * @public
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are
 *          formatted.</p>
 */
export interface CSVOutput {
  /**
   * @public
   * <p>Indicates whether to use quotation marks around output fields. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALWAYS</code>: Always use quotation marks for output fields.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASNEEDED</code>: Use quotation marks for output fields when needed.</p>
   *             </li>
   *          </ul>
   */
  QuoteFields?: QuoteFields;

  /**
   * @public
   * <p>The single character used for escaping the quote character inside an already escaped
   *          value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * @public
   * <p>A single character used to separate individual records in the output. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * @public
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *          delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * @public
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   */
  QuoteCharacter?: string;
}

/**
 * @public
 * <p>Specifies JSON as request's output serialization format.</p>
 */
export interface JSONOutput {
  /**
   * @public
   * <p>The value used to separate individual records in the output. If no value is specified,
   *          Amazon S3 uses a newline character ('\n').</p>
   */
  RecordDelimiter?: string;
}

/**
 * @public
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface OutputSerialization {
  /**
   * @public
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: CSVOutput;

  /**
   * @public
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: JSONOutput;
}

/**
 * @public
 * <p>Describes the parameters for Select job types.</p>
 */
export interface SelectParameters {
  /**
   * @public
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * @public
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * @public
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>Describes how the results of the Select job are serialized.</p>
   */
  OutputSerialization: OutputSerialization | undefined;
}

/**
 * @public
 * @enum
 */
export const RestoreRequestType = {
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type RestoreRequestType = (typeof RestoreRequestType)[keyof typeof RestoreRequestType];

/**
 * @public
 * <p>Container for restore job parameters.</p>
 */
export interface RestoreRequest {
  /**
   * @public
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that
   *          specify <code>OutputLocation</code>.</p>
   */
  GlacierJobParameters?: GlacierJobParameters;

  /**
   * @public
   * <p>Type of restore request.</p>
   */
  Type?: RestoreRequestType;

  /**
   * @public
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>The optional description for the job.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * @public
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: OutputLocation;
}

/**
 * @public
 */
export interface RestoreObjectRequest {
  /**
   * @public
   * <p>The bucket name containing the object to restore. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Object key for which the action was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Container for restore job parameters.</p>
   */
  RestoreRequest?: RestoreRequest;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ContinuationEvent {}

/**
 * @public
 * <p>A message that indicates the request is complete and no more messages will be sent. You
 *          should not assume that the request is complete until the client receives an
 *             <code>EndEvent</code>.</p>
 */
export interface EndEvent {}

/**
 * @public
 * <p>This data type contains information about progress of an operation.</p>
 */
export interface Progress {
  /**
   * @public
   * <p>The current number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * @public
   * <p>The current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * @public
   * <p>The current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

/**
 * @public
 * <p>This data type contains information about the progress event of an operation.</p>
 */
export interface ProgressEvent {
  /**
   * @public
   * <p>The Progress event details.</p>
   */
  Details?: Progress;
}

/**
 * @public
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  /**
   * @public
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}

/**
 * @public
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  /**
   * @public
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * @public
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * @public
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

/**
 * @public
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  /**
   * @public
   * <p>The Stats event details.</p>
   */
  Details?: Stats;
}

/**
 * @public
 * <p>The container for selecting objects from a content event stream.</p>
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

/**
 * @public
 */
export namespace SelectObjectContentEventStream {
  /**
   * @public
   * <p>The Records Event.</p>
   */
  export interface RecordsMember {
    Records: RecordsEvent;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Stats Event.</p>
   */
  export interface StatsMember {
    Records?: never;
    Stats: StatsEvent;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Progress Event.</p>
   */
  export interface ProgressMember {
    Records?: never;
    Stats?: never;
    Progress: ProgressEvent;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Continuation Event.</p>
   */
  export interface ContMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont: ContinuationEvent;
    End?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The End Event.</p>
   */
  export interface EndMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End: EndEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    if (value.End !== undefined) return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SelectObjectContentOutput {
  /**
   * @public
   * <p>The array of results.</p>
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

/**
 * @public
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 */
export interface RequestProgress {
  /**
   * @public
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE,
   *          FALSE. Default value: FALSE.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Specifies the byte range of the object to get the records from. A record is processed
 *          when its first byte is contained by the range. This parameter is optional, but when
 *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
 *          start and end of the range.</p>
 */
export interface ScanRange {
  /**
   * @public
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is 0. If only <code>start</code> is supplied, it
   *          means scan from that point to the end of the file. For example,
   *             <code><scanrange><start>50</start></scanrange></code> means scan
   *          from byte 50 until the end of the file.</p>
   */
  Start?: number;

  /**
   * @public
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is one less than the size of the object being
   *          queried. If only the End parameter is supplied, it is interpreted to mean scan the last N
   *          bytes of the file. For example,
   *             <code><scanrange><end>50</end></scanrange></code> means scan the
   *          last 50 bytes.</p>
   */
  End?: number;
}

/**
 * @public
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *          Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *          data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data
 *          into records. It returns only records that match the specified SQL expression. You must
 *          also specify the data serialization format for the response. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  /**
   * @public
   * <p>The S3 bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * @public
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: RequestProgress;

  /**
   * @public
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * @public
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * @public
   * <p>Specifies the byte range of the object to get the records from. A record is processed
   *          when its first byte is contained by the range. This parameter is optional, but when
   *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
   *          start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *                - process only the records starting between the bytes 50 and 100 (inclusive, counting
   *                from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> -
   *                process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> -
   *                process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   */
  ScanRange?: ScanRange;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface UploadPartOutput {
  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * @public
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface UploadPartRequest {
  /**
   * @public
   * <p>Object data.</p>
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated
   *          when using the command from the CLI. This parameter is required if object lock parameters
   *          are specified.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   *          <p>This checksum algorithm must be the same for all parts and it match the checksum value
   *          supplied in the <code>CreateMultipartUpload</code> request.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Part number of part being uploaded. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * @public
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   */
  UploadId: string | undefined;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  /**
   * @public
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 */
export interface UploadPartCopyOutput {
  /**
   * @public
   * <p>The version of the source object that was copied, if you have enabled versioning on the
   *          source bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * @public
   * <p>Container for all response elements.</p>
   */
  CopyPartResult?: CopyPartResult;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface UploadPartCopyRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source bucket
   *                and key of the source object, separated by a slash (/). For example, to copy the
   *                object <code>reports/january.pdf</code> from the bucket
   *                <code>awsexamplebucket</code>, use <code>awsexamplebucket/reports/january.pdf</code>.
   *                The value must be URL-encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.</p>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>To copy a specific version of an object, append <code>?versionId=<version-id></code>
   *          to the value (for example,
   *             <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          If you don't specify a version ID, Amazon S3 copies the latest version of the source
   *          object.</p>
   */
  CopySource: string | undefined;

  /**
   * @public
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * @public
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * @public
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * @public
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * @public
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   */
  CopySourceRange?: string;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Part number of part being copied. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * @public
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   */
  UploadId: string | undefined;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer;

  /**
   * @public
   * <p>The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedSourceBucketOwner?: string;
}

/**
 * @public
 */
export interface WriteGetObjectResponseRequest {
  /**
   * @public
   * <p>Route prefix to the HTTP URL generated.</p>
   */
  RequestRoute: string | undefined;

  /**
   * @public
   * <p>A single use encrypted token that maps <code>WriteGetObjectResponse</code> to the end
   *          user <code>GetObject</code> request.</p>
   */
  RequestToken: string | undefined;

  /**
   * @public
   * <p>The object data.</p>
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * <p>The integer status code for an HTTP response of a corresponding <code>GetObject</code>
   *          request. The following is a list of status codes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>200 - OK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>206 - Partial Content</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>304 - Not Modified</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>400 - Bad Request</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>401 - Unauthorized</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>403 - Forbidden</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>404 - Not Found</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>405 - Method Not Allowed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>409 - Conflict</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>411 - Length Required</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>412 - Precondition Failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>416 - Range Not Satisfiable</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>500 - Internal Server Error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>503 - Service Unavailable</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StatusCode?: number;

  /**
   * @public
   * <p>A string that uniquely identifies an error condition. Returned in the <Code> tag
   *          of the error XML response for a corresponding <code>GetObject</code> call. Cannot be used
   *          with a successful <code>StatusCode</code> header or when the transformed object is provided
   *          in the body. All error codes from S3 are sentence-cased. The regular expression (regex)
   *          value is <code>"^[A-Z][a-zA-Z]+$"</code>.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>Contains a generic description of the error condition. Returned in the <Message>
   *          tag of the error XML response for a corresponding <code>GetObject</code> call. Cannot be
   *          used with a successful <code>StatusCode</code> header or when the transformed object is
   *          provided in body.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * @public
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>The size of the content body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p>The portion of the object returned in the response.</p>
   */
  ContentRange?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32
   *          checksum of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   *          <p></p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32C
   *          checksum of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 160-bit SHA-1
   *          digest of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 256-bit SHA-256
   *          digest of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>Specifies whether an object stored in Amazon S3 is (<code>true</code>) or is not
   *             (<code>false</code>) a delete marker. </p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>An opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL. </p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value
   *          pairs that provide the object expiration information. The value of the <code>rule-id</code>
   *          is URL-encoded. </p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>The date and time that the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Set to the number of metadata entries not returned in <code>x-amz-meta</code> headers.
   *          This can happen if you create metadata using an API like SOAP that supports more flexible
   *          metadata than the REST API. For example, using SOAP, you can create metadata whose values
   *          are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockMode?: ObjectLockMode;

  /**
   * @public
   * <p>Indicates whether an object stored in Amazon S3 has an active legal hold.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;

  /**
   * @public
   * <p>The date and time when Object Lock is configured to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * @public
   * <p>Indicates if request involves bucket that is either a source or destination in a
   *          Replication rule. For more information about S3 Replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html">Replication</a>.</p>
   */
  ReplicationStatus?: ReplicationStatus;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged;

  /**
   * @public
   * <p>Provides information about object restoration operation and expiration time of the
   *          restored object copy.</p>
   */
  Restore?: string;

  /**
   * @public
   * <p> The server-side encryption algorithm used when storing requested object in Amazon S3 (for
   *          example, AES256, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * @public
   * <p>Encryption algorithm used if server-side encryption with a customer-provided encryption
   *          key was specified for object stored in Amazon S3.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p> If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric
   *          encryption customer managed key that was used for stored in Amazon S3 object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p> 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data
   *          stored in S3. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Protecting data
   *             using server-side encryption with customer-provided encryption keys
   *          (SSE-C)</a>.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   */
  StorageClass?: StorageClass;

  /**
   * @public
   * <p>The number of tags, if any, on the object.</p>
   */
  TagCount?: number;

  /**
   * @public
   * <p>An ID used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p> Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side
   *          encryption with Amazon Web Services KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;
}

/**
 * @internal
 */
export const EncryptionFilterSensitiveLog = (obj: Encryption): any => ({
  ...obj,
  ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
  ...(obj.Encryption && { Encryption: EncryptionFilterSensitiveLog(obj.Encryption) }),
});

/**
 * @internal
 */
export const OutputLocationFilterSensitiveLog = (obj: OutputLocation): any => ({
  ...obj,
  ...(obj.S3 && { S3: S3LocationFilterSensitiveLog(obj.S3) }),
});

/**
 * @internal
 */
export const RestoreRequestFilterSensitiveLog = (obj: RestoreRequest): any => ({
  ...obj,
  ...(obj.OutputLocation && { OutputLocation: OutputLocationFilterSensitiveLog(obj.OutputLocation) }),
});

/**
 * @internal
 */
export const RestoreObjectRequestFilterSensitiveLog = (obj: RestoreObjectRequest): any => ({
  ...obj,
  ...(obj.RestoreRequest && { RestoreRequest: RestoreRequestFilterSensitiveLog(obj.RestoreRequest) }),
});

/**
 * @internal
 */
export const SelectObjectContentEventStreamFilterSensitiveLog = (obj: SelectObjectContentEventStream): any => {
  if (obj.Records !== undefined) return { Records: obj.Records };
  if (obj.Stats !== undefined) return { Stats: obj.Stats };
  if (obj.Progress !== undefined) return { Progress: obj.Progress };
  if (obj.Cont !== undefined) return { Cont: obj.Cont };
  if (obj.End !== undefined) return { End: obj.End };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SelectObjectContentOutputFilterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
  ...obj,
  ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const SelectObjectContentRequestFilterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartOutputFilterSensitiveLog = (obj: UploadPartOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartRequestFilterSensitiveLog = (obj: UploadPartRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartCopyOutputFilterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartCopyRequestFilterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WriteGetObjectResponseRequestFilterSensitiveLog = (obj: WriteGetObjectResponseRequest): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
