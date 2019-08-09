/**
 * <p>Network details about the host where the agent/connector resides.</p>
 */
export interface _AgentNetworkInfo {
  /**
   * <p>The IP address for the host where the agent/connector resides.</p>
   */
  ipAddress?: string;

  /**
   * <p>The MAC address for the host where the agent/connector resides.</p>
   */
  macAddress?: string;
}

export type _UnmarshalledAgentNetworkInfo = _AgentNetworkInfo;
