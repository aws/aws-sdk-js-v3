import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteLoadBalancerTlsCertificateInput shape
 */
export interface DeleteLoadBalancerTlsCertificateInput {
  /**
   * <p>The load balancer name.</p>
   */
  loadBalancerName: string;

  /**
   * <p>The SSL/TLS certificate name.</p>
   */
  certificateName: string;

  /**
   * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p> <p>There can be two certificates associated with a Lightsail load balancer: the primary and the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate is in use by an instance attached to the load balancer.</p>
   */
  force?: boolean;

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
