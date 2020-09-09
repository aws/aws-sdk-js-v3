import {
  ContinuationEvent,
  EndEvent,
  ExpressionType,
  InputSerialization,
  OutputSerialization,
  ProgressEvent,
  RequestCharged,
  RequestPayer,
  ServerSideEncryption,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

/**
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}

export namespace RecordsEvent {
  export const filterSensitiveLog = (obj: RecordsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  /**
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;

  /**
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;
}

export namespace Stats {
  export const filterSensitiveLog = (obj: Stats): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  /**
   * <p>The Stats event details.</p>
   */
  Details?: Stats;
}

export namespace StatsEvent {
  export const filterSensitiveLog = (obj: StatsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

export namespace SelectObjectContentEventStream {
  /**
   * <p>The Stats Event.</p>
   */
  export interface StatsMember {
    Stats: StatsEvent;
    End?: never;
    Progress?: never;
    Records?: never;
    Cont?: never;
    $unknown?: never;
  }

  /**
   * <p>The End Event.</p>
   */
  export interface EndMember {
    Stats?: never;
    End: EndEvent;
    Progress?: never;
    Records?: never;
    Cont?: never;
    $unknown?: never;
  }

  /**
   * <p>The Progress Event.</p>
   */
  export interface ProgressMember {
    Stats?: never;
    End?: never;
    Progress: ProgressEvent;
    Records?: never;
    Cont?: never;
    $unknown?: never;
  }

  /**
   * <p>The Records Event.</p>
   */
  export interface RecordsMember {
    Stats?: never;
    End?: never;
    Progress?: never;
    Records: RecordsEvent;
    Cont?: never;
    $unknown?: never;
  }

  /**
   * <p>The Continuation Event.</p>
   */
  export interface ContMember {
    Stats?: never;
    End?: never;
    Progress?: never;
    Records?: never;
    Cont: ContinuationEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Stats?: never;
    End?: never;
    Progress?: never;
    Records?: never;
    Cont?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Stats: (value: StatsEvent) => T;
    End: (value: EndEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Records: (value: RecordsEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.End !== undefined) return visitor.End(value.End);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: SelectObjectContentEventStream): any => {
    if (obj.Stats !== undefined) return { Stats: StatsEvent.filterSensitiveLog(obj.Stats) };
    if (obj.End !== undefined) return { End: EndEvent.filterSensitiveLog(obj.End) };
    if (obj.Progress !== undefined) return { Progress: ProgressEvent.filterSensitiveLog(obj.Progress) };
    if (obj.Records !== undefined) return { Records: RecordsEvent.filterSensitiveLog(obj.Records) };
    if (obj.Cont !== undefined) return { Cont: ContinuationEvent.filterSensitiveLog(obj.Cont) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface SelectObjectContentOutput {
  /**
   * <p>The array of results.</p>
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

export namespace SelectObjectContentOutput {
  export const filterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
  });
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default value: FALSE.</p>
   */
  Enabled?: boolean;
}

export namespace RequestProgress {
  export const filterSensitiveLog = (obj: RequestProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional,
 *          but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is 0.
   *       If only start is supplied, it means scan from that point to the end of the file.For example; <code><scanrange><start>50</start></scanrange></code> means scan from byte 50 until the end of the file.</p>
   */
  Start?: number;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values: non-negative
   *          integers. The default value is one less than the size of the object being queried. If only
   *          the End parameter is supplied, it is interpreted to mean scan the last N bytes of the file.
   *          For example, <code><scanrange><end>50</end></scanrange></code>
   *          means scan the last 50 bytes.</p>
   */
  End?: number;
}

export namespace ScanRange {
  export const filterSensitiveLog = (obj: ScanRange): any => ({
    ...obj,
  });
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *       Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *       data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object
 *       data into records. It returns only records that match the specified SQL expression. You must
 *       also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API
 *         Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: RequestProgress;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>The SSE Customer Key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKey?: string;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional,
   *       but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code> - process only the records starting between the bytes 50 and 100 (inclusive, counting from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> - process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> - process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   */
  ScanRange?: ScanRange;

  /**
   * <p>The SSE Customer Key MD5. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>The S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The SSE Algorithm used to encrypt the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerAlgorithm?: string;
}

export namespace SelectObjectContentRequest {
  export const filterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

export interface UploadPartOutput {
  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;
}

export namespace UploadPartOutput {
  export const filterSensitiveLog = (obj: UploadPartOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartRequest {
  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when
   *          using the command from the CLI. This parameter is required if object lock parameters are
   *          specified.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;
}

export namespace UploadPartRequest {
  export const filterSensitiveLog = (obj: UploadPartRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;
}

export namespace CopyPartResult {
  export const filterSensitiveLog = (obj: CopyPartResult): any => ({
    ...obj,
  });
}

export interface UploadPartCopyOutput {
  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Container for all response elements.</p>
   */
  CopyPartResult?: CopyPartResult;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the source bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;
}

export namespace UploadPartCopyOutput {
  export const filterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartCopyRequest {
  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example, AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   */
  CopySourceRange?: string;

  /**
   * <p>The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.</p>
   */
  CopySource: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;
}

export namespace UploadPartCopyRequest {
  export const filterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
    ...obj,
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}
