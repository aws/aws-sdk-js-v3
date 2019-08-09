import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateLoadBalancerAttributeInput shape
 */
export interface UpdateLoadBalancerAttributeInput {
  /**
   * <p>The name of the load balancer that you want to modify (e.g., <code>my-load-balancer</code>.</p>
   */
  loadBalancerName: string;

  /**
   * <p>The name of the attribute you want to update. Valid values are below.</p>
   */
  attributeName:
    | "HealthCheckPath"
    | "SessionStickinessEnabled"
    | "SessionStickiness_LB_CookieDurationSeconds"
    | string;

  /**
   * <p>The value that you want to specify for the attribute name.</p>
   */
  attributeValue: string;

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
