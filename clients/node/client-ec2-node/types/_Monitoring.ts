/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface _Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.</p>
   */
  State?: "disabled" | "disabling" | "enabled" | "pending" | string;
}

export type _UnmarshalledMonitoring = _Monitoring;
