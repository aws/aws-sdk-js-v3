/**
 * <p>A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.</p>
 */
export interface _OnPremConfig {
  /**
   * <p>ARNs)of the agents to use for an NFS location.</p>
   */
  AgentArns: Array<string> | Iterable<string>;
}

export interface _UnmarshalledOnPremConfig extends _OnPremConfig {
  /**
   * <p>ARNs)of the agents to use for an NFS location.</p>
   */
  AgentArns: Array<string>;
}
