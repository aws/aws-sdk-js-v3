/**
 * <p>Information about the <code>ConnectionSettings</code> attribute.</p>
 */
export interface _ConnectionSettings {
  /**
   * <p>The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout: number;
}

export type _UnmarshalledConnectionSettings = _ConnectionSettings;
