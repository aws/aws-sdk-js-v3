/**
 * <p>Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a>ListAgents</a> operation is called.</p>
 */
export interface _AgentListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   */
  AgentArn?: string;

  /**
   * <p>The name of the agent.</p>
   */
  Name?: string;

  /**
   * <p>The status of the agent.</p>
   */
  Status?: "ONLINE" | "OFFLINE" | string;
}

export type _UnmarshalledAgentListEntry = _AgentListEntry;
