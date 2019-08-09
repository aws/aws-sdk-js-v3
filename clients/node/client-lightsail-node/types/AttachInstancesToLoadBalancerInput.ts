import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachInstancesToLoadBalancerInput shape
 */
export interface AttachInstancesToLoadBalancerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string;

  /**
   * <p>An array of strings representing the instance name(s) you want to attach to your load balancer.</p> <p>An instance must be <code>running</code> before you can attach it to your load balancer.</p> <p>There are no additional limits on the number of instances you can attach to your load balancer, aside from the limit of Lightsail instances you can create in your account (20).</p>
   */
  instanceNames: Array<string> | Iterable<string>;

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
