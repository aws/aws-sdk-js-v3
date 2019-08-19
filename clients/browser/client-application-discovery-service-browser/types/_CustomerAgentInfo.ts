/**
 * <p>Inventory data for installed discovery agents.</p>
 */
export interface _CustomerAgentInfo {
  /**
   * <p>Number of active discovery agents.</p>
   */
  activeAgents: number;

  /**
   * <p>Number of healthy discovery agents</p>
   */
  healthyAgents: number;

  /**
   * <p>Number of blacklisted discovery agents.</p>
   */
  blackListedAgents: number;

  /**
   * <p>Number of discovery agents with status SHUTDOWN.</p>
   */
  shutdownAgents: number;

  /**
   * <p>Number of unhealthy discovery agents.</p>
   */
  unhealthyAgents: number;

  /**
   * <p>Total number of discovery agents.</p>
   */
  totalAgents: number;

  /**
   * <p>Number of unknown discovery agents.</p>
   */
  unknownAgents: number;
}

export type _UnmarshalledCustomerAgentInfo = _CustomerAgentInfo;
