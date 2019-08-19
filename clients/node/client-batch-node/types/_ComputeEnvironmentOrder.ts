/**
 * <p>The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.</p>
 */
export interface _ComputeEnvironmentOrder {
  /**
   * <p>The order of the compute environment.</p>
   */
  order: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment.</p>
   */
  computeEnvironment: string;
}

export type _UnmarshalledComputeEnvironmentOrder = _ComputeEnvironmentOrder;
