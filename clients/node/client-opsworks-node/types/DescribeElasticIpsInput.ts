import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeElasticIpsInput shape
 */
export interface DescribeElasticIpsInput {
  /**
   * <p>The instance ID. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the Elastic IP addresses associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A stack ID. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the Elastic IP addresses that are registered with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>An array of Elastic IP addresses to be described. If you include this parameter, <code>DescribeElasticIps</code> returns a description of the specified Elastic IP addresses. Otherwise, it returns a description of every Elastic IP address.</p>
   */
  Ips?: Array<string> | Iterable<string>;

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
