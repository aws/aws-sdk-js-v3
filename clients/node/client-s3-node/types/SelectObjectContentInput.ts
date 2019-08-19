import { _RequestProgress } from "./_RequestProgress";
import { _InputSerialization } from "./_InputSerialization";
import { _OutputSerialization } from "./_OutputSerialization";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 */
export interface SelectObjectContentInput {
  /**
   * <p>The S3 bucket.</p>
   */
  Bucket: string;

  /**
   * <p>The object key.</p>
   */
  Key: string;

  /**
   * <p>The SSE Algorithm used to encrypt the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html"> Server-Side Encryption (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string;

  /**
   * <p>The type of the provided expression (for example., SQL).</p>
   */
  ExpressionType: "SQL" | string;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: _RequestProgress;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: _InputSerialization;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: _OutputSerialization;

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
