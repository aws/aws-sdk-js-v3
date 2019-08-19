import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as _stream from "stream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutObjectInput shape
 */
export interface PutObjectInput<StreamType = _stream.Readable> {
  /**
   * <p>The canned ACL to apply to the object.</p>
   */
  ACL?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "authenticated-read"
    | "aws-exec-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | string;

  /**
   * <p>Object data.</p>
   */
  Body?: ArrayBuffer | ArrayBufferView | string | StreamType;

  /**
   * <p>Name of the bucket to which the PUT operation was initiated.</p>
   */
  Bucket: string;

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
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameted is required if object lock parameters are specified.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date | string | number;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its metadata.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable object.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the PUT operation was initiated.</p>
   */
  Key: string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).</p>
   */
  ServerSideEncryption?: "AES256" | "aws:kms" | string;

  /**
   * <p>The type of storage to use for the object. Defaults to 'STANDARD'.</p>
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
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (e.g., AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. Documentation on configuring any of the officially supported AWS SDKs and CLI can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html</p>
   */
  RequestPayer?: "requester" | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * <p>The object lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: "GOVERNANCE" | "COMPLIANCE" | string;

  /**
   * <p>The date and time when you want this object's object lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date | string | number;

  /**
   * <p>The Legal Hold status that you want to apply to the specified object.</p>
   */
  ObjectLockLegalHoldStatus?: "ON" | "OFF" | string;

  /**
   * Whether to use the bucket name as the endpoint for this request. The bucket
   * name must be a domain name with a CNAME record alias to an appropriate virtual
   * hosted-style S3 hostname, e.g. a bucket of `images.johnsmith.net` and a DNS
   * record of:
   *
   * ```
   * images.johnsmith.net CNAME 			images.johnsmith.net.s3.amazonaws.com.
   * ```
   *
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs
   */
  $bucketEndpoint?: string;

  /**
   * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
   */
  $forcePathStyle?: boolean;

  /**
   * Whether to use the S3 Transfer Acceleration endpoint by default
   */
  $useAccelerateEndpoint?: boolean;

  /**
   * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
   */
  $useDualstackEndpoint?: boolean;

  /**
   * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `SSECustomerAlgorithm` parameter
   */
  $serverSideEncryptionKey?: __aws_sdk_types.SourceData;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
