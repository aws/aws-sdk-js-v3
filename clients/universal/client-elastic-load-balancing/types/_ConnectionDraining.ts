/**
 * <p>Information about the <code>ConnectionDraining</code> attribute.</p>
 */
export interface _ConnectionDraining {
  /**
   * <p>Specifies whether connection draining is enabled for the load balancer.</p>
   */
  Enabled: boolean;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering the instances.</p>
   */
  Timeout?: number;
}

export type _UnmarshalledConnectionDraining = _ConnectionDraining;
