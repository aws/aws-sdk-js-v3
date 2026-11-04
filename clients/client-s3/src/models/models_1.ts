// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  AnnotationConfigurationState,
  ChecksumAlgorithm,
  CompressionType,
  ExpressionType,
  FileHeaderInfo,
  InventoryConfigurationState,
  JSONType,
  ObjectCannedACL,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  QuoteFields,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  RestoreRequestType,
  ServerSideEncryption,
  StorageClass,
  Tier,
} from "./enums";
import type {
  Grant,
  MetadataTableEncryptionConfiguration,
  PublicAccessBlockConfiguration,
  RecordExpiration,
  Tagging,
} from "./models_0";

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * The name of the Amazon S3 bucket whose `PublicAccessBlock` configuration you want to set.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The MD5 hash of the `PutPublicAccessBlock` request body.
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
   * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

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
export interface RenameObjectOutput {}

/**
 * @public
 */
export interface RenameObjectRequest {
  /**
   * The bucket name of the directory bucket containing the object.
   *
   * You must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Availability Zone. Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Key name of the object to rename.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Specifies the source for the rename operation. The value must be URL encoded.
   *
   * @public
   */
  RenameSource: string | undefined;

  /**
   * Renames the object only if the ETag (entity tag) value provided during the operation matches the ETag of the object in S3. The `If-Match` header field makes the request method conditional on ETags. If the ETag values do not match, the operation returns a `412 Precondition Failed` error.
   *
   * Expects the ETag value as a string.
   *
   * @public
   */
  DestinationIfMatch?: string | undefined;

  /**
   * Renames the object only if the destination does not already exist in the specified directory bucket. If the object does exist when you send a request with `If-None-Match:*`, the S3 API will return a `412 Precondition Failed` error, preventing an overwrite. The `If-None-Match` header prevents overwrites of existing data by validating that there's not an object with the same key name already in your directory bucket.
   *
   * Expects the `*` character (asterisk).
   *
   * @public
   */
  DestinationIfNoneMatch?: string | undefined;

  /**
   * Renames the object if the destination exists and if it has been modified since the specified time.
   *
   * @public
   */
  DestinationIfModifiedSince?: Date | undefined;

  /**
   * Renames the object if it hasn't been modified since the specified time.
   *
   * @public
   */
  DestinationIfUnmodifiedSince?: Date | undefined;

  /**
   * Renames the object if the source exists and if its entity tag (ETag) matches the specified ETag.
   *
   * @public
   */
  SourceIfMatch?: string | undefined;

  /**
   * Renames the object if the source exists and if its entity tag (ETag) is different than the specified ETag. If an asterisk (`*`) character is provided, the operation will fail and return a `412 Precondition Failed` error.
   *
   * @public
   */
  SourceIfNoneMatch?: string | undefined;

  /**
   * Renames the object if the source exists and if it has been modified since the specified time.
   *
   * @public
   */
  SourceIfModifiedSince?: Date | undefined;

  /**
   * Renames the object if the source exists and hasn't been modified since the specified time.
   *
   * @public
   */
  SourceIfUnmodifiedSince?: Date | undefined;

  /**
   * A unique string with a max of 64 ASCII characters in the ASCII range of 33 - 126.
   *
   * > **Note:** `RenameObject` supports idempotency using a client token. To make an idempotent API request using `RenameObject`, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails and an `IdempotentParameterMismatch` error is returned.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RestoreObjectOutput {
  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * Indicates the path in the provided S3 output location where Select results will be restored to.
   *
   * @public
   */
  RestoreOutputPath?: string | undefined;
}

/**
 * Container for S3 Glacier job parameters.
 *
 * @public
 */
export interface GlacierJobParameters {
  /**
   * Retrieval tier at which the restore will be processed.
   *
   * @public
   */
  Tier: Tier | undefined;
}

/**
 * Contains the type of server-side encryption used.
 *
 * @public
 */
export interface Encryption {
  /**
   * The server-side encryption algorithm used when storing job results in Amazon S3 (for example, AES256, `aws:kms`).
   *
   * @public
   */
  EncryptionType: ServerSideEncryption | undefined;

  /**
   * If the encryption type is `aws:kms`, this optional value specifies the ID of the symmetric encryption customer managed key to use for encryption of job results. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * If the encryption type is `aws:kms`, this optional value can be used to specify the encryption context for the restore results.
   *
   * @public
   */
  KMSContext?: string | undefined;
}

/**
 * A metadata key-value pair to store with an object.
 *
 * @public
 */
export interface MetadataEntry {
  /**
   * Name of the object.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Value of the object.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an Amazon S3 location that will receive the results of the restore request.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the bucket where the restore results will be placed.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The prefix that is prepended to the restore results for this request.
   *
   * @public
   */
  Prefix: string | undefined;

  /**
   * Contains the type of server-side encryption used.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The canned ACL to apply to the restore results.
   *
   * @public
   */
  CannedACL?: ObjectCannedACL | undefined;

  /**
   * A list of grants that control access to the staged results.
   *
   * @public
   */
  AccessControlList?: Grant[] | undefined;

  /**
   * The tag-set that is applied to the restore results.
   *
   * @public
   */
  Tagging?: Tagging | undefined;

  /**
   * A list of metadata to store with the restore results in S3.
   *
   * @public
   */
  UserMetadata?: MetadataEntry[] | undefined;

  /**
   * The class of storage used to store the restore results.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;
}

/**
 * Describes the location where the restore job's output is stored.
 *
 * @public
 */
export interface OutputLocation {
  /**
   * Describes an S3 location that will receive the results of the restore request.
   *
   * @public
   */
  S3?: S3Location | undefined;
}

/**
 * Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted.
 *
 * @public
 */
export interface CSVInput {
  /**
   * Describes the first line of input. Valid values are:
   *
   * - `NONE`: First line is not a header.
   * - `IGNORE`: First line is a header, but you can't use the header values to indicate the column in an expression. You can use column position (such as _1, _2, …) to indicate the column (`SELECT s._1 FROM OBJECT s`).
   * - `Use`: First line is a header, and you can use the header value to identify a column in an expression (`SELECT "name" FROM OBJECT`).
   *
   * @public
   */
  FileHeaderInfo?: FileHeaderInfo | undefined;

  /**
   * A single character used to indicate that a row should be ignored when the character is present at the start of that row. You can specify any character to indicate a comment line. The default character is `#`.
   *
   * Default: `#`
   *
   * @public
   */
  Comments?: string | undefined;

  /**
   * A single character used for escaping the quotation mark character inside an already escaped value. For example, the value `""" a , b """` is parsed as `" a , b "`.
   *
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * A single character used to separate individual records in the input. Instead of the default value, you can specify an arbitrary delimiter.
   *
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * A single character used to separate individual fields in a record. You can specify an arbitrary delimiter.
   *
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is `a, b`, Amazon S3 wraps this field value in quotation marks, as follows: `" a , b "`.
   *
   * Type: String
   *
   * Default: `"`
   *
   * Ancestors: `CSV`
   *
   * @public
   */
  QuoteCharacter?: string | undefined;

  /**
   * Specifies that CSV field values may contain quoted record delimiters and such records should be allowed. Default value is FALSE. Setting this value to TRUE may lower performance.
   *
   * @public
   */
  AllowQuotedRecordDelimiter?: boolean | undefined;
}

/**
 * Specifies JSON as object's input serialization format.
 *
 * @public
 */
export interface JSONInput {
  /**
   * The type of JSON. Valid values: Document, Lines.
   *
   * @public
   */
  Type?: JSONType | undefined;
}

/**
 * Container for Parquet.
 *
 * @public
 */
export interface ParquetInput {}

/**
 * Describes the serialization format of the object.
 *
 * @public
 */
export interface InputSerialization {
  /**
   * Describes the serialization of a CSV-encoded object.
   *
   * @public
   */
  CSV?: CSVInput | undefined;

  /**
   * Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.
   *
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * Specifies JSON as object's input serialization format.
   *
   * @public
   */
  JSON?: JSONInput | undefined;

  /**
   * Specifies Parquet as object's input serialization format.
   *
   * @public
   */
  Parquet?: ParquetInput | undefined;
}

/**
 * Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.
 *
 * @public
 */
export interface CSVOutput {
  /**
   * Indicates whether to use quotation marks around output fields.
   *
   * - `ALWAYS`: Always use quotation marks for output fields.
   * - `ASNEEDED`: Use quotation marks for output fields when needed.
   *
   * @public
   */
  QuoteFields?: QuoteFields | undefined;

  /**
   * The single character used for escaping the quote character inside an already escaped value.
   *
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * A single character used to separate individual records in the output. Instead of the default value, you can specify an arbitrary delimiter.
   *
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * The value used to separate individual fields in a record. You can specify an arbitrary delimiter.
   *
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * A single character used for escaping when the field delimiter is part of the value. For example, if the value is `a, b`, Amazon S3 wraps this field value in quotation marks, as follows: `" a , b "`.
   *
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * Specifies JSON as request's output serialization format.
 *
 * @public
 */
export interface JSONOutput {
  /**
   * The value used to separate individual records in the output. If no value is specified, Amazon S3 uses a newline character ('\n').
   *
   * @public
   */
  RecordDelimiter?: string | undefined;
}

/**
 * Describes how results of the Select job are serialized.
 *
 * @public
 */
export interface OutputSerialization {
  /**
   * Describes the serialization of CSV-encoded Select results.
   *
   * @public
   */
  CSV?: CSVOutput | undefined;

  /**
   * Specifies JSON as request's output serialization format.
   *
   * @public
   */
  JSON?: JSONOutput | undefined;
}

/**
 * > **Important:** Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can continue to use the feature as usual. [Learn more](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/)
 *
 * Describes the parameters for Select job types.
 *
 * Learn [How to optimize querying your data in Amazon S3](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/) using [Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html), [S3 Object Lambda](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html), or client-side filtering.
 *
 * @public
 */
export interface SelectParameters {
  /**
   * Describes the serialization format of the object.
   *
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * The type of the provided expression (for example, SQL).
   *
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * > **Important:** Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can continue to use the feature as usual. [Learn more](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/)
   *
   * The expression that is used to query the object.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * Describes how the results of the Select job are serialized.
   *
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;
}

/**
 * Container for restore job parameters.
 *
 * @public
 */
export interface RestoreRequest {
  /**
   * Lifetime of the active copy in days. Do not use with restores that specify `OutputLocation`.
   *
   * The Days element is required for regular restores, and must not be provided for select requests.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * S3 Glacier related parameters pertaining to this job. Do not use with restores that specify `OutputLocation`.
   *
   * @public
   */
  GlacierJobParameters?: GlacierJobParameters | undefined;

  /**
   * > **Important:** Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can continue to use the feature as usual. [Learn more](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/)
   *
   * Type of restore request.
   *
   * @public
   */
  Type?: RestoreRequestType | undefined;

  /**
   * Retrieval tier at which the restore will be processed.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * The optional description for the job.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * > **Important:** Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can continue to use the feature as usual. [Learn more](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/)
   *
   * Describes the parameters for Select job types.
   *
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * Describes the location where the restore job's output is stored.
   *
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * @public
 */
export interface RestoreObjectRequest {
  /**
   * The bucket name containing the object to restore.
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
   * Object key for which the action was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * VersionId used to reference a specific version of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Container for restore job parameters.
   *
   * @public
   */
  RestoreRequest?: RestoreRequest | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

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
export interface ContinuationEvent {}

/**
 * A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an `EndEvent`.
 *
 * @public
 */
export interface EndEvent {}

/**
 * This data type contains information about progress of an operation.
 *
 * @public
 */
export interface Progress {
  /**
   * The current number of object bytes scanned.
   *
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * The current number of uncompressed object bytes processed.
   *
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * The current number of bytes of records payload data returned.
   *
   * @public
   */
  BytesReturned?: number | undefined;
}

/**
 * This data type contains information about the progress event of an operation.
 *
 * @public
 */
export interface ProgressEvent {
  /**
   * The Progress event details.
   *
   * @public
   */
  Details?: Progress | undefined;
}

/**
 * The container for the records event.
 *
 * @public
 */
export interface RecordsEvent {
  /**
   * The byte array of partial, one or more result records. S3 Select doesn't guarantee that a record will be self-contained in one record frame. To ensure continuous streaming of data, S3 Select might split the same record across multiple record frames instead of aggregating the results in memory. Some S3 clients (for example, the SDK for Java) handle this behavior by creating a `ByteStream` out of the response by default. Other clients might not handle this behavior by default. In those cases, you must aggregate the results on the client side and parse the response.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * Container for the stats details.
 *
 * @public
 */
export interface Stats {
  /**
   * The total number of object bytes scanned.
   *
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * The total number of uncompressed object bytes processed.
   *
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * The total number of bytes of records payload data returned.
   *
   * @public
   */
  BytesReturned?: number | undefined;
}

/**
 * Container for the Stats Event.
 *
 * @public
 */
export interface StatsEvent {
  /**
   * The Stats event details.
   *
   * @public
   */
  Details?: Stats | undefined;
}

/**
 * The container for selecting objects from a content event stream.
 *
 * @public
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
   * The Records Event.
   *
   * @public
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
   * The Stats Event.
   *
   * @public
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
   * The Progress Event.
   *
   * @public
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
   * The Continuation Event.
   *
   * @public
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
   * The End Event.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SelectObjectContentOutput {
  /**
   * The array of results.
   *
   * @public
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream> | undefined;
}

/**
 * Container for specifying if periodic `QueryProgress` messages should be sent.
 *
 * @public
 */
export interface RequestProgress {
  /**
   * Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default value: FALSE.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.
 *
 * @public
 */
export interface ScanRange {
  /**
   * Specifies the start of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is 0. If only `start` is supplied, it means scan from that point to the end of the file. For example, `<scanrange><start>50</start></scanrange>` means scan from byte 50 until the end of the file.
   *
   * @public
   */
  Start?: number | undefined;

  /**
   * Specifies the end of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is one less than the size of the object being queried. If only the End parameter is supplied, it is interpreted to mean scan the last N bytes of the file. For example, `<scanrange><end>50</end></scanrange>` means scan the last 50 bytes.
   *
   * @public
   */
  End?: number | undefined;
}

/**
 * > **Note:** Learn Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can continue to use the feature as usual. [Learn more](http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/)
 *
 * Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see [S3Select API Documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html).
 *
 * @public
 */
export interface SelectObjectContentRequest {
  /**
   * The S3 bucket.
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
   * The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see [Protecting data using SSE-C keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * The expression that is used to query the object.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The type of the provided expression (for example, SQL).
   *
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * Specifies if periodic request progress information should be enabled.
   *
   * @public
   */
  RequestProgress?: RequestProgress | undefined;

  /**
   * Describes the format of the data in the object that is being queried.
   *
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * Describes the format of the data that you want Amazon S3 to return in response.
   *
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.
   *
   * `ScanRange`may be used in the following ways:
   *
   * - `<scanrange><start>50</start><end>100</end></scanrange>` - process only the records starting between the bytes 50 and 100 (inclusive, counting from zero)
   * - `<scanrange><start>50</start></scanrange>` - process only the records starting after the byte 50
   * - `<scanrange><end>50</end></scanrange>` - process only the records within the last 50 bytes of the file.
   *
   * @public
   */
  ScanRange?: ScanRange | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Specifies updates to apply to the annotation table configuration. Used as the request body for `UpdateBucketMetadataAnnotationTableConfiguration`.
 *
 * @public
 */
export interface AnnotationTableConfigurationUpdates {
  /**
   * The new configuration state to apply.
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
   * The new IAM role ARN to apply.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataAnnotationTableConfigurationRequest {
  /**
   * The name of the bucket whose annotation table configuration to update.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Base64-encoded MD5 digest of the message body.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Checksum algorithm for the request payload.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The annotation table configuration updates to apply.
   *
   * @public
   */
  AnnotationTableConfiguration: AnnotationTableConfigurationUpdates | undefined;

  /**
   * The account ID of the expected bucket owner.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The specified updates to the S3 Metadata inventory table configuration.
 *
 * @public
 */
export interface InventoryTableConfigurationUpdates {
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
 * @public
 */
export interface UpdateBucketMetadataInventoryTableConfigurationRequest {
  /**
   * The general purpose bucket that corresponds to the metadata configuration that you want to enable or disable an inventory table for.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `Content-MD5` header for the inventory table configuration.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * The checksum algorithm to use with your inventory table configuration.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The contents of your inventory table configuration.
   *
   * @public
   */
  InventoryTableConfiguration: InventoryTableConfigurationUpdates | undefined;

  /**
   * The expected owner of the general purpose bucket that corresponds to the metadata table configuration that you want to enable or disable an inventory table for.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * The specified updates to the S3 Metadata journal table configuration.
 *
 * @public
 */
export interface JournalTableConfigurationUpdates {
  /**
   * The journal table record expiration settings for the journal table.
   *
   * @public
   */
  RecordExpiration: RecordExpiration | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataJournalTableConfigurationRequest {
  /**
   * The general purpose bucket that corresponds to the metadata configuration that you want to enable or disable journal table record expiration for.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The `Content-MD5` header for the journal table configuration.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * The checksum algorithm to use with your journal table configuration.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The contents of your journal table configuration.
   *
   * @public
   */
  JournalTableConfiguration: JournalTableConfigurationUpdates | undefined;

  /**
   * The expected owner of the general purpose bucket that corresponds to the metadata table configuration that you want to enable or disable journal table record expiration for.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * If `SSEKMS` is specified for `ObjectEncryption`, this data type specifies the Amazon Web Services KMS key Amazon Resource Name (ARN) to use and whether to use an S3 Bucket Key for server-side encryption using Key Management Service (KMS) keys (SSE-KMS).
 *
 * @public
 */
export interface SSEKMSEncryption {
  /**
   * Specifies the Amazon Web Services KMS key Amazon Resource Name (ARN) to use for the updated server-side encryption type. Required if `ObjectEncryption` specifies `SSEKMS`.
   *
   * > **Note:** You must specify the full Amazon Web Services KMS key ARN. The KMS key ID and KMS key alias aren't supported.
   *
   * Pattern: (`arn:aws[-a-z0-9]*:kms:[-a-z0-9]*:[0-9]\{12\}:key/.+`)
   *
   * @public
   */
  KMSKeyArn: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If this value isn't specified, it defaults to `false`. Setting this value to `true` causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. For more information, see [Using Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html) in the *Amazon S3 User Guide*.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}

/**
 * The updated server-side encryption type for this object. The `UpdateObjectEncryption` operation supports the SSE-S3 and SSE-KMS encryption types.
 *
 * Valid Values: `SSES3` | `SSEKMS`
 *
 * @public
 */
export type ObjectEncryption =
  | ObjectEncryption.SSEKMSMember
  | ObjectEncryption.$UnknownMember;

/**
 * @public
 */
export namespace ObjectEncryption {
  /**
   * Specifies to update the object encryption type to server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  export interface SSEKMSMember {
    SSEKMS: SSEKMSEncryption;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SSEKMS?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SSEKMS: (value: SSEKMSEncryption) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateObjectEncryptionRequest {
  /**
   * The name of the general purpose bucket that contains the specified object key name.
   *
   * When you use this operation with an access point attached to a general purpose bucket, you must either provide the alias of the access point in place of the bucket name or you must specify the access point Amazon Resource Name (ARN). When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form `AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com`. When using this operation with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see [Referencing access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-naming.html) in the *Amazon S3 User Guide*.
   *
   * Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies. For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key name of the object that you want to update the server-side encryption type for.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The version ID of the object that you want to update the server-side encryption type for.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The updated server-side encryption type for this object. The `UpdateObjectEncryption` operation supports the SSE-S3 and SSE-KMS encryption types.
   *
   * Valid Values: `SSES3` | `SSEKMS`
   *
   * @public
   */
  ObjectEncryption: ObjectEncryption | undefined;

  /**
   * Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for the corresponding charges. For information about downloading objects from Requester Pays buckets, see [Downloading Objects in Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * The account ID of the expected bucket owner. If the account ID that you provide doesn't match the actual owner of the bucket, the request fails with the HTTP status code `403 Forbidden` (access denied).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use an Amazon Web Services SDK. This header doesn't provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
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
export interface UpdateObjectEncryptionResponse {
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
export interface UploadPartOutput {
  /**
   * The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * Entity tag for the uploaded object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * The Base64 encoded, 32-bit `CRC32C` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `CRC64NVME` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * The Base64 encoded, 160-bit `SHA1` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * The Base64 encoded, 512-bit `SHA512` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `MD5` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH64` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * The Base64 encoded, 64-bit `XXHASH3` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * The Base64 encoded, 128-bit `XXHASH128` checksum of the part. This will only be present if the checksum was provided in the request. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

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
 * @public
 */
export interface UploadPartRequest {
  /**
   * Object data.
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

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
   * Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The Base64 encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding `x-amz-checksum` or `x-amz-trailer` header sent. Otherwise, Amazon S3 fails the request with the HTTP status code `400 Bad Request`. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * If you provide an individual checksum, Amazon S3 ignores any provided `ChecksumAlgorithm` parameter.
   *
   * This checksum algorithm must be the same for all parts and it match the checksum value supplied in the `CreateMultipartUpload` request.
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
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `CRC64NVME` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
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
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit `SHA512` digest of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `MD5` digest of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH64` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH3` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `XXHASH128` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Part number of part being uploaded. This is a positive integer between 1 and 10,000.
   *
   * @public
   */
  PartNumber: number | undefined;

  /**
   * Upload ID identifying the multipart upload whose part is being uploaded.
   *
   * @public
   */
  UploadId: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, AES256).
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm header`. This must be the same encryption key specified in the initiate multipart upload request.
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
}

/**
 * Container for all response elements.
 *
 * @public
 */
export interface CopyPartResult {
  /**
   * Entity tag of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Date and time at which the object was uploaded.
   *
   * @public
   */
  LastModified?: Date | undefined;

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
   * The Base64 encoded, 160-bit `SHA1` digest of the part. This checksum is present if the multipart upload request was created with the `SHA1` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * The Base64 encoded, 256-bit `SHA256` digest of the part. This checksum is present if the multipart upload request was created with the `SHA256` checksum algorithm. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
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
export interface UploadPartCopyOutput {
  /**
   * The version of the source object that was copied, if you have enabled versioning on the source bucket.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceVersionId?: string | undefined;

  /**
   * Container for all response elements.
   *
   * @public
   */
  CopyPartResult?: CopyPartResult | undefined;

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
 * @public
 */
export interface UploadPartCopyRequest {
  /**
   * The bucket name.
   *
   * **Directory buckets** - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format `Bucket-name.s3express-zone-id.region-code.amazonaws.com`. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format `bucket-base-name--zone-id--x-s3` (for example, `amzn-s3-demo-bucket--usw2-az1--x-s3`). For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP `400 Bad Request` error with the error code `InvalidRequest`.
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
   * Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an [access point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html):
   *
   * - For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object `reports/january.pdf` from the bucket `awsexamplebucket`, use `awsexamplebucket/reports/january.pdf`. The value must be URL-encoded.
   * - For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, to copy the object `reports/january.pdf` through access point `my-access-point` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf`. The value must be URL encoded.
   *
   *   > **Note:**
   *   >
   *   > - Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.
   *   > - Access points are not supported by directory buckets.
   *
   *   Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>`. For example, to copy the object `reports/january.pdf` through outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf`. The value must be URL-encoded.
   *
   * If your bucket has versioning enabled, you could have multiple versions of the same object. By default, `x-amz-copy-source` identifies the current version of the source object to copy. To copy a specific version of the source object to copy, append `?versionId=<version-id>` to the `x-amz-copy-source` request header (for example, `x-amz-copy-source: /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893`).
   *
   * If the current version is a delete marker and you don't specify a versionId in the `x-amz-copy-source` request header, Amazon S3 returns a `404 Not Found` error, because the object does not exist. If you specify versionId in the `x-amz-copy-source` and the versionId is a delete marker, Amazon S3 returns an HTTP `400 Bad Request` error, because you are not allowed to specify a delete marker as a version for the `x-amz-copy-source`.
   *
   * > **Note:** **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets.
   *
   * @public
   */
  CopySource: string | undefined;

  /**
   * Copies the object if its entity tag (ETag) matches the specified tag.
   *
   * If both of the `x-amz-copy-source-if-match` and `x-amz-copy-source-if-unmodified-since` headers are present in the request as follows:
   *
   * `x-amz-copy-source-if-match` condition evaluates to `true`, and;
   *
   * `x-amz-copy-source-if-unmodified-since` condition evaluates to `false`;
   *
   * Amazon S3 returns `200 OK` and copies the data.
   *
   * @public
   */
  CopySourceIfMatch?: string | undefined;

  /**
   * Copies the object if it has been modified since the specified time.
   *
   * If both of the `x-amz-copy-source-if-none-match` and `x-amz-copy-source-if-modified-since` headers are present in the request as follows:
   *
   * `x-amz-copy-source-if-none-match` condition evaluates to `false`, and;
   *
   * `x-amz-copy-source-if-modified-since` condition evaluates to `true`;
   *
   * Amazon S3 returns `412 Precondition Failed` response code.
   *
   * @public
   */
  CopySourceIfModifiedSince?: Date | undefined;

  /**
   * Copies the object if its entity tag (ETag) is different than the specified ETag.
   *
   * If both of the `x-amz-copy-source-if-none-match` and `x-amz-copy-source-if-modified-since` headers are present in the request as follows:
   *
   * `x-amz-copy-source-if-none-match` condition evaluates to `false`, and;
   *
   * `x-amz-copy-source-if-modified-since` condition evaluates to `true`;
   *
   * Amazon S3 returns `412 Precondition Failed` response code.
   *
   * @public
   */
  CopySourceIfNoneMatch?: string | undefined;

  /**
   * Copies the object if it hasn't been modified since the specified time.
   *
   * If both of the `x-amz-copy-source-if-match` and `x-amz-copy-source-if-unmodified-since` headers are present in the request as follows:
   *
   * `x-amz-copy-source-if-match` condition evaluates to `true`, and;
   *
   * `x-amz-copy-source-if-unmodified-since` condition evaluates to `false`;
   *
   * Amazon S3 returns `200 OK` and copies the data.
   *
   * @public
   */
  CopySourceIfUnmodifiedSince?: Date | undefined;

  /**
   * The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB.
   *
   * @public
   */
  CopySourceRange?: string | undefined;

  /**
   * Object key for which the multipart upload was initiated.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Part number of part being copied. This is a positive integer between 1 and 10,000.
   *
   * @public
   */
  PartNumber: number | undefined;

  /**
   * Upload ID identifying the multipart upload whose part is being copied.
   *
   * @public
   */
  UploadId: string | undefined;

  /**
   * Specifies the algorithm to use when encrypting the object (for example, AES256).
   *
   * > **Note:** This functionality is not supported when the destination bucket is a directory bucket.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `x-amz-server-side-encryption-customer-algorithm` header. This must be the same encryption key specified in the initiate multipart upload request.
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
   * Specifies the algorithm to use when decrypting the source object (for example, `AES256`).
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceSSECustomerAlgorithm?: string | undefined;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
   *
   * > **Note:** This functionality is not supported when the source object is in a directory bucket.
   *
   * @public
   */
  CopySourceSSECustomerKey?: string | undefined;

  /**
   * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
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
export interface WriteGetObjectResponseRequest {
  /**
   * Route prefix to the HTTP URL generated.
   *
   * @public
   */
  RequestRoute: string | undefined;

  /**
   * A single use encrypted token that maps `WriteGetObjectResponse` to the end user `GetObject` request.
   *
   * @public
   */
  RequestToken: string | undefined;

  /**
   * The object data.
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * The integer status code for an HTTP response of a corresponding `GetObject` request. The following is a list of status codes.
   *
   * - `200 - OK`
   * - `206 - Partial Content`
   * - `304 - Not Modified`
   * - `400 - Bad Request`
   * - `401 - Unauthorized`
   * - `403 - Forbidden`
   * - `404 - Not Found`
   * - `405 - Method Not Allowed`
   * - `409 - Conflict`
   * - `411 - Length Required`
   * - `412 - Precondition Failed`
   * - `416 - Range Not Satisfiable`
   * - `500 - Internal Server Error`
   * - `503 - Service Unavailable`
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * A string that uniquely identifies an error condition. Returned in the `tag of the error XML response for a corresponding GetObject` call. Cannot be used with a successful `StatusCode` header or when the transformed object is provided in the body. All error codes from S3 are sentence-cased. The regular expression (regex) value is `"^[A-Z][a-zA-Z]+$"`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Contains a generic description of the error condition. Returned in the <Message> tag of the error XML response for a corresponding `GetObject` call. Cannot be used with a successful `StatusCode` header or when the transformed object is provided in body.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Indicates that a range of bytes was specified.
   *
   * @public
   */
  AcceptRanges?: string | undefined;

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
   * The size of the content body in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

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
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 32-bit `CRC32` checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original `GetObject` request required checksum validation. For more information about checksums, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.
   *
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 32-bit `CRC32C` checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original `GetObject` request required checksum validation. For more information about checksums, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.
   *
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `CRC64NVME` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 160-bit `SHA1` digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original `GetObject` request required checksum validation. For more information about checksums, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.
   *
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the Base64 encoded, 256-bit `SHA256` digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original `GetObject` request required checksum validation. For more information about checksums, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.
   *
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 512-bit `SHA512` digest of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumSHA512?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `MD5` digest of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumMD5?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH64` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH64?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 64-bit `XXHASH3` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH3?: string | undefined;

  /**
   * This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the Base64 encoded, 128-bit `XXHASH128` checksum of the part. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumXXHASH128?: string | undefined;

  /**
   * Specifies whether an object stored in Amazon S3 is (`true`) or is not (`false`) a delete marker. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * An opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The date and time at which the object is no longer cacheable.
   *
   * @public
   */
  Expires?: Date | undefined;

  /**
   * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the `expiry-date` and `rule-id` key-value pairs that provide the object expiration information. The value of the `rule-id` is URL-encoded.
   *
   * @public
   */
  Expiration?: string | undefined;

  /**
   * The date and time that the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Set to the number of metadata entries not returned in `x-amz-meta` headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   *
   * @public
   */
  MissingMeta?: number | undefined;

  /**
   * A map of metadata to store with the object in S3.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3 Object Lock, see [Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).
   *
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * Indicates whether an object stored in Amazon S3 has an active legal hold.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * The date and time when Object Lock is configured to expire.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * The count of parts this object has.
   *
   * @public
   */
  PartsCount?: number | undefined;

  /**
   * Indicates if request involves bucket that is either a source or destination in a Replication rule. For more information about S3 Replication, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html).
   *
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * If present, indicates that the requester was successfully charged for the request. For more information, see [Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service user guide*.
   *
   * > **Note:** This functionality is not supported for directory buckets.
   *
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * Provides information about object restoration operation and expiration time of the restored object copy.
   *
   * @public
   */
  Restore?: string | undefined;

  /**
   * The server-side encryption algorithm used when storing requested object in Amazon S3 or Amazon FSx.
   *
   * > **Note:** When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is `aws:fsx`.
   *
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * Encryption algorithm used if server-side encryption with a customer-provided encryption key was specified for object stored in Amazon S3.
   *
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object.
   *
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3. For more information, see [Protecting data using server-side encryption with customer-provided encryption keys (SSE-C)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html).
   *
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   *
   * For more information, see [Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html).
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * The number of tags, if any, on the object.
   *
   * @public
   */
  TagCount?: number | undefined;

  /**
   * An ID used to reference a specific version of the object.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with Amazon Web Services KMS (SSE-KMS).
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}
