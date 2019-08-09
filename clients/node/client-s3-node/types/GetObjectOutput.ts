import * as _stream from "stream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectOutput shape
 */
export interface GetObjectOutput<StreamType = _stream.Readable>
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object data.</p>
   */
  Body?: StreamType;

  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p/>
   */
  AcceptRanges?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key value pairs providing object expiration information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Provides information about object restoration operation and expiration time of the restored object copy.</p>
   */
  Restore?: string;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL</p>
   */
  ETag?: string;

  /**
   * <p>This is set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>The portion of the object returned in the response.</p>
   */
  ContentRange?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).</p>
   */
  ServerSideEncryption?: "AES256" | "aws:kms" | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p/>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * <p/>
   */
  ReplicationStatus?: "COMPLETE" | "PENDING" | "FAILED" | "REPLICA" | string;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>The number of tags, if any, on the object.</p>
   */
  TagCount?: number;

  /**
   * <p>The object lock mode currently in place for this object.</p>
   */
  ObjectLockMode?: "GOVERNANCE" | "COMPLIANCE" | string;

  /**
   * <p>The date and time when this object's object lock will expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Indicates whether this object has an active legal hold. This field is only returned if you have permission to view an object's legal hold status.</p>
   */
  ObjectLockLegalHoldStatus?: "ON" | "OFF" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
