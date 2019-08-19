/**
 * <p>An object representing the health check policy for a virtual node's listener.</p>
 */
export interface _HealthCheckPolicy {
  /**
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   */
  healthyThreshold: number;

  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number;

  /**
   * <p>The destination path for the health check request. This is required only if the
   *          specified protocol is HTTP. If the protocol is TCP, this parameter is ignored.</p>
   */
  path?: string;

  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;

  /**
   * <p>The protocol for the health check request.</p>
   */
  protocol: "http" | "tcp" | string;

  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number;

  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   */
  unhealthyThreshold: number;
}

export type _UnmarshalledHealthCheckPolicy = _HealthCheckPolicy;
