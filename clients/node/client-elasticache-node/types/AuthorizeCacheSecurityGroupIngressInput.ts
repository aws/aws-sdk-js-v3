import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of an AuthorizeCacheSecurityGroupIngress operation.</p>
 */
export interface AuthorizeCacheSecurityGroupIngressInput {
  /**
   * <p>The cache security group that allows network ingress.</p>
   */
  CacheSecurityGroupName: string;

  /**
   * <p>The Amazon EC2 security group to be authorized for ingress to the cache security group.</p>
   */
  EC2SecurityGroupName: string;

  /**
   * <p>The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.</p>
   */
  EC2SecurityGroupOwnerId: string;

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
