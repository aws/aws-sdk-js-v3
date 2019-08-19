import {
  _AgentNetworkInfo,
  _UnmarshalledAgentNetworkInfo
} from "./_AgentNetworkInfo";

/**
 * <p>Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.</p>
 */
export interface _AgentInfo {
  /**
   * <p>The agent or connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>The name of the host where the agent or connector resides. The host can be a server or virtual machine.</p>
   */
  hostName?: string;

  /**
   * <p>Network details about the host where the agent or connector resides.</p>
   */
  agentNetworkInfoList?: Array<_AgentNetworkInfo> | Iterable<_AgentNetworkInfo>;

  /**
   * <p>The ID of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The agent or connector version.</p>
   */
  version?: string;

  /**
   * <p>The health of the agent or connector.</p>
   */
  health?:
    | "HEALTHY"
    | "UNHEALTHY"
    | "RUNNING"
    | "UNKNOWN"
    | "BLACKLISTED"
    | "SHUTDOWN"
    | string;

  /**
   * <p>Time since agent or connector health was reported.</p>
   */
  lastHealthPingTime?: string;

  /**
   * <p>Status of the collection process for an agent or connector.</p>
   */
  collectionStatus?: string;

  /**
   * <p>Type of agent.</p>
   */
  agentType?: string;

  /**
   * <p>Agent's first registration timestamp in UTC.</p>
   */
  registeredTime?: string;
}

export interface _UnmarshalledAgentInfo extends _AgentInfo {
  /**
   * <p>Network details about the host where the agent or connector resides.</p>
   */
  agentNetworkInfoList?: Array<_UnmarshalledAgentNetworkInfo>;
}
