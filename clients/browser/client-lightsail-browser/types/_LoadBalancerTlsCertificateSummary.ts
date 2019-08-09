/**
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 */
export interface _LoadBalancerTlsCertificateSummary {
  /**
   * <p>The name of the SSL/TLS certificate.</p>
   */
  name?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.</p>
   */
  isAttached?: boolean;
}

export type _UnmarshalledLoadBalancerTlsCertificateSummary = _LoadBalancerTlsCertificateSummary;
