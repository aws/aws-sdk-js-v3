import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * HeadObjectInput shape
 */
export interface HeadObjectInput {
  /**
   * <p/>
   */
  Bucket: string;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date | string | number;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date | string | number;

  /**
   * <p/>
   */
  Key: string;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP Range header, go to http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.</p>
   */
  Range?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (e.g., AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html</p>
   */
  RequestPayer?: "requester" | string;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.</p>
   */
  PartNumber?: number;

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
