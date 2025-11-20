// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  ChecksumAlgorithm,
  CompressionType,
  ExpressionType,
  InventoryConfigurationState,
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

import {
  CSVInput,
  GlacierJobParameters,
  JSONInput,
  MetadataTableEncryptionConfiguration,
  OutputLocation,
  ParquetInput,
  RecordExpiration,
} from "./models_0";

/**
 * <p>Describes the serialization format of the object.</p>
 * @public
 */
export interface InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   * @public
   */
  CSV?: CSVInput | undefined;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.</p>
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   * @public
   */
  JSON?: JSONInput | undefined;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   * @public
   */
  Parquet?: ParquetInput | undefined;
}

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.</p>
 * @public
 */
export interface CSVOutput {
  /**
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
   * @public
   */
  QuoteFields?: QuoteFields | undefined;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped value.</p>
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the default value,
   *       you can specify an arbitrary delimiter.</p>
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *       delimiter.</p>
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For example, if
   *       the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks, as follows: <code>" a ,
   *         b "</code>.</p>
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 * @public
 */
export interface JSONOutput {
  /**
   * <p>The value used to separate individual records in the output. If no value is specified, Amazon S3 uses a
   *       newline character ('\n').</p>
   * @public
   */
  RecordDelimiter?: string | undefined;
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 * @public
 */
export interface OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   * @public
   */
  CSV?: CSVOutput | undefined;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   * @public
   */
  JSON?: JSONOutput | undefined;
}

/**
 * <important>
 *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
 *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
 *             </p>
 *          </important>
 *          <p>Describes the parameters for Select job types.</p>
 *          <p>Learn <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">How to
 *         optimize querying your data in Amazon S3</a> using <a href="https://docs.aws.amazon.com/athena/latest/ug/what-is.html">Amazon Athena</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">S3 Object Lambda</a>, or client-side
 *       filtering.</p>
 * @public
 */
export interface SelectParameters {
  /**
   * <p>Describes the serialization format of the object.</p>
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>The expression that is used to query the object.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Describes how the results of the Select job are serialized.</p>
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;
}

/**
 * <p>Container for restore job parameters.</p>
 * @public
 */
export interface RestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *         <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *       requests.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that specify
   *         <code>OutputLocation</code>.</p>
   * @public
   */
  GlacierJobParameters?: GlacierJobParameters | undefined;

  /**
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>Type of restore request.</p>
   * @public
   */
  Type?: RestoreRequestType | undefined;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * <p>The optional description for the job.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>Describes the parameters for Select job types.</p>
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * @public
 */
export interface RestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Container for restore job parameters.</p>
   * @public
   */
  RestoreRequest?: RestoreRequest | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ContinuationEvent {}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You should not
 *       assume that the request is complete until the client receives an <code>EndEvent</code>.</p>
 * @public
 */
export interface EndEvent {}

/**
 * <p>This data type contains information about progress of an operation.</p>
 * @public
 */
export interface Progress {
  /**
   * <p>The current number of object bytes scanned.</p>
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number | undefined;
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 * @public
 */
export interface ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   * @public
   */
  Details?: Progress | undefined;
}

/**
 * <p>The container for the records event.</p>
 * @public
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records. S3 Select doesn't guarantee that a record
   *       will be self-contained in one record frame. To ensure continuous streaming of data, S3 Select might
   *       split the same record across multiple record frames instead of aggregating the results in memory. Some
   *       S3 clients (for example, the SDK for Java) handle this behavior by creating a
   *         <code>ByteStream</code> out of the response by default. Other clients might not handle this behavior
   *       by default. In those cases, you must aggregate the results on the client side and parse the
   *       response.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * <p>Container for the stats details.</p>
 * @public
 */
export interface Stats {
  /**
   * <p>The total number of object bytes scanned.</p>
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number | undefined;
}

/**
 * <p>Container for the Stats Event.</p>
 * @public
 */
export interface StatsEvent {
  /**
   * <p>The Stats event details.</p>
   * @public
   */
  Details?: Stats | undefined;
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
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
   * <p>The Records Event.</p>
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
   * <p>The Stats Event.</p>
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
   * <p>The Progress Event.</p>
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
   * <p>The Continuation Event.</p>
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
   * <p>The End Event.</p>
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
   * <p>The array of results.</p>
   * @public
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream> | undefined;
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be sent.</p>
 * @public
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default
   *       value: FALSE.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed when its first
 *       byte is contained by the range. This parameter is optional, but when specified, it must not be empty.
 *       See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
 * @public
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values: non-negative
   *       integers. The default value is 0. If only <code>start</code> is supplied, it means scan from that point
   *       to the end of the file. For example,
   *         <code><scanrange><start>50</start></scanrange></code> means scan from byte 50
   *       until the end of the file.</p>
   * @public
   */
  Start?: number | undefined;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values: non-negative
   *       integers. The default value is one less than the size of the object being queried. If only the End
   *       parameter is supplied, it is interpreted to mean scan the last N bytes of the file. For example,
   *         <code><scanrange><end>50</end></scanrange></code> means scan the last 50
   *       bytes.</p>
   * @public
   */
  End?: number | undefined;
}

/**
 * <note>
 *             <p>Learn Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3
 *         Select can continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
 *             </p>
 *          </note>
 *          <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL)
 *       statement. In the request, along with the SQL expression, you must specify a data serialization format
 *       (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records
 *       that match the specified SQL expression. You must also specify the data serialization format for the
 *       response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 * @public
 */
export interface SelectObjectContentRequest {
  /**
   * <p>The S3 bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The object key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   * @public
   */
  RequestProgress?: RequestProgress | undefined;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed when its first
   *       byte is contained by the range. This parameter is optional, but when specified, it must not be empty.
   *       See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *           - process only the records starting between the bytes 50 and 100 (inclusive, counting from
   *           zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> - process only the
   *           records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> - process only the
   *           records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScanRange?: ScanRange | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>
 *       The specified updates to the S3 Metadata inventory table configuration.
 *     </p>
 * @public
 */
export interface InventoryTableConfigurationUpdates {
  /**
   * <p>
   *       The configuration state of the inventory table, indicating whether the inventory table is enabled
   *       or disabled.
   *     </p>
   * @public
   */
  ConfigurationState: InventoryConfigurationState | undefined;

  /**
   * <p>
   *       The encryption configuration for the inventory table.
   *     </p>
   * @public
   */
  EncryptionConfiguration?: MetadataTableEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataInventoryTableConfigurationRequest {
  /**
   * <p>
   *       The general purpose bucket that corresponds to the metadata configuration that you want to
   *       enable or disable an inventory table for.
   *     </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>
   *       The <code>Content-MD5</code> header for the inventory table configuration.
   *     </p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>
   *       The checksum algorithm to use with your inventory table configuration.
   *     </p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>
   *       The contents of your inventory table configuration.
   *     </p>
   * @public
   */
  InventoryTableConfiguration: InventoryTableConfigurationUpdates | undefined;

  /**
   * <p>
   *       The expected owner of the general purpose bucket that corresponds to the metadata table
   *       configuration that you want to enable or disable an inventory table for.
   *     </p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>
 *       The specified updates to the S3 Metadata journal table configuration.
 *     </p>
 * @public
 */
export interface JournalTableConfigurationUpdates {
  /**
   * <p>
   *       The journal table record expiration settings for the journal table.
   *     </p>
   * @public
   */
  RecordExpiration: RecordExpiration | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataJournalTableConfigurationRequest {
  /**
   * <p>
   *       The general purpose bucket that corresponds to the metadata configuration that you want to
   *       enable or disable journal table record expiration for.
   *     </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>
   *       The <code>Content-MD5</code> header for the journal table configuration.
   *     </p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>
   *       The checksum algorithm to use with your journal table configuration.
   *     </p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>
   *       The contents of your journal table configuration.
   *     </p>
   * @public
   */
  JournalTableConfiguration: JournalTableConfigurationUpdates | undefined;

  /**
   * <p>
   *       The expected owner of the general purpose bucket that corresponds to the metadata table
   *       configuration that you want to enable or disable journal table record expiration for.
   *     </p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UploadPartOutput {
  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>Entity tag for the uploaded object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to provide the round-trip message integrity verification of the customer-provided
   *       encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
   *       Key Management Service (KMS) keys (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface UploadPartRequest {
  /**
   * <p>Object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined
   *       automatically.</p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>The Base64 encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using
   *       the command from the CLI. This parameter is required if object lock parameters are specified.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   *          <p>This checksum algorithm must be the same for all parts and it match the checksum value supplied in
   *       the <code>CreateMultipartUpload</code> request.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 160-bit <code>SHA1</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 256-bit <code>SHA256</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and 10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example, AES256).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is
   *       used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must
   *       be appropriate for use with the algorithm specified in the
   *         <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the same encryption
   *       key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>Container for all response elements.</p>
 * @public
 */
export interface CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This checksum is present if
   *       the multipart upload request was created with the <code>CRC64NVME</code> checksum algorithm to the
   *       uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 160-bit <code>SHA1</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 256-bit <code>SHA256</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;
}

/**
 * @public
 */
export interface UploadPartCopyOutput {
  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the source
   *       bucket.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceVersionId?: string | undefined;

  /**
   * <p>Container for all response elements.</p>
   * @public
   */
  CopyPartResult?: CopyPartResult | undefined;

  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to provide the round-trip message integrity verification of the customer-provided
   *       encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
   *       Key Management Service (KMS) keys (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface UploadPartCopyRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Copying objects across different Amazon Web Services Regions isn't supported when the source or destination
   *         bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region.
   *         Otherwise, you get an HTTP <code>400 Bad Request</code> error with the error code
   *           <code>InvalidRequest</code>.</p>
   *          </note>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two formats,
   *       depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source bucket and key of the
   *           source object, separated by a slash (/). For example, to copy the object
   *             <code>reports/january.pdf</code> from the bucket <code>awsexamplebucket</code>, use
   *             <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL-encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <ul>
   *                      <li>
   *                         <p>Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.</p>
   *                      </li>
   *                      <li>
   *                         <p>Access points are not supported by directory buckets.</p>
   *                      </li>
   *                   </ul>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>If your bucket has versioning enabled, you could have multiple versions of the same object. By
   *       default, <code>x-amz-copy-source</code> identifies the current version of the source object to copy. To
   *       copy a specific version of the source object to copy, append <code>?versionId=<version-id></code> to
   *       the <code>x-amz-copy-source</code> request header (for example, <code>x-amz-copy-source:
   *         /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>). </p>
   *          <p>If the current version is a delete marker and you don't specify a versionId in the
   *         <code>x-amz-copy-source</code> request header, Amazon S3 returns a <code>404 Not Found</code> error,
   *       because the object does not exist. If you specify versionId in the <code>x-amz-copy-source</code> and
   *       the versionId is a delete marker, Amazon S3 returns an HTTP <code>400 Bad Request</code> error, because you
   *       are not allowed to specify a delete marker as a version for the <code>x-amz-copy-source</code>. </p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - S3 Versioning isn't enabled and supported for directory buckets.</p>
   *          </note>
   * @public
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-match</code> and
   *         <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as
   *       follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *       </p>
   * @public
   */
  CopySourceIfMatch?: string | undefined;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-none-match</code> and
   *         <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *       </p>
   * @public
   */
  CopySourceIfModifiedSince?: Date | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-none-match</code> and
   *         <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *       </p>
   * @public
   */
  CopySourceIfNoneMatch?: string | undefined;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-match</code> and
   *         <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as
   *       follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *       </p>
   * @public
   */
  CopySourceIfUnmodifiedSince?: Date | undefined;

  /**
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *       bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example,
   *       bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if
   *       the source object is greater than 5 MB.</p>
   * @public
   */
  CopySourceRange?: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and 10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example, AES256).</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is
   *       used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must
   *       be appropriate for use with the algorithm specified in the
   *         <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the same encryption
   *       key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *       <code>AES256</code>).</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The
   *       encryption key provided in this header must be one that was used when the source object was
   *       created.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedSourceBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface WriteGetObjectResponseRequest {
  /**
   * <p>Route prefix to the HTTP URL generated.</p>
   * @public
   */
  RequestRoute: string | undefined;

  /**
   * <p>A single use encrypted token that maps <code>WriteGetObjectResponse</code> to the end user
   *         <code>GetObject</code> request.</p>
   * @public
   */
  RequestToken: string | undefined;

  /**
   * <p>The object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * <p>The integer status code for an HTTP response of a corresponding <code>GetObject</code> request. The
   *       following is a list of status codes.</p>
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
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>A string that uniquely identifies an error condition. Returned in the <Code> tag of the error
   *       XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful
   *         <code>StatusCode</code> header or when the transformed object is provided in the body. All error codes
   *       from S3 are sentence-cased. The regular expression (regex) value is
   *       <code>"^[A-Z][a-zA-Z]+$"</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Contains a generic description of the error condition. Returned in the <Message> tag of the
   *       error XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful
   *         <code>StatusCode</code> header or when the transformed object is provided in body.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   * @public
   */
  AcceptRanges?: string | undefined;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>Specifies presentational information for the object.</p>
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms
   *       must be applied to obtain the media-type referenced by the Content-Type header field.</p>
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * <p>The language the content is in.</p>
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * <p>The size of the content body in bytes.</p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>The portion of the object returned in the response.</p>
   * @public
   */
  ContentRange?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   *          <p></p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 160-bit <code>SHA1</code> digest of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 256-bit <code>SHA256</code> digest of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>Specifies whether an object stored in Amazon S3 is (<code>true</code>) or is not (<code>false</code>) a
   *       delete marker. To learn more about delete markers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete markers</a>.</p>
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * <p>An opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *     </p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   * @public
   */
  Expires?: Date | undefined;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this
   *       header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide
   *       the object expiration information. The value of the <code>rule-id</code> is URL-encoded. </p>
   * @public
   */
  Expiration?: string | undefined;

  /**
   * <p>The date and time that the object was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Set to the number of metadata entries not returned in <code>x-amz-meta</code> headers. This can
   *       happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST
   *       API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.</p>
   * @public
   */
  MissingMeta?: number | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3
   *       Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Object
   *         Lock</a>.</p>
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has an active legal hold.</p>
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * <p>The date and time when Object Lock is configured to expire.</p>
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * <p>The count of parts this object has.</p>
   * @public
   */
  PartsCount?: number | undefined;

  /**
   * <p>Indicates if request involves bucket that is either a source or destination in a Replication rule.
   *       For more information about S3 Replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html">Replication</a>.</p>
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * <p>Provides information about object restoration operation and expiration time of the restored object
   *       copy.</p>
   * @public
   */
  Restore?: string | undefined;

  /**
   * <p> The server-side encryption algorithm used when storing requested object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>Encryption algorithm used if server-side encryption with a customer-provided encryption key was
   *       specified for object stored in Amazon S3.</p>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p> If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service
   *       (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object. </p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p> 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Protecting data using
   *         server-side encryption with customer-provided encryption keys (SSE-C)</a>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except
   *       for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * <p>The number of tags, if any, on the object.</p>
   * @public
   */
  TagCount?: number | undefined;

  /**
   * <p>An ID used to reference a specific version of the object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p> Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with
   *       Amazon Web Services KMS (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}
