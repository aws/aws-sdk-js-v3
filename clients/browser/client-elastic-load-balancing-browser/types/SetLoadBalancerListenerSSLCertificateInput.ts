import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string;

  /**
   * <p>The port that uses the specified SSL certificate.</p>
   */
  LoadBalancerPort: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL certificate.</p>
   */
  SSLCertificateId: string;

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
