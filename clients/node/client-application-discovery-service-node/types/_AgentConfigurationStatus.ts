/**
 * <p>Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.</p>
 */
export interface _AgentConfigurationStatus {
  /**
   * <p>The agent/connector ID.</p>
   */
  agentId?: string;

  /**
   * <p>Information about the status of the <code>StartDataCollection</code> and <code>StopDataCollection</code> operations. The system has recorded the data collection operation. The agent/connector receives this command the next time it polls for a new command. </p>
   */
  operationSucceeded?: boolean;

  /**
   * <p>A description of the operation performed.</p>
   */
  description?: string;
}

export type _UnmarshalledAgentConfigurationStatus = _AgentConfigurationStatus;
