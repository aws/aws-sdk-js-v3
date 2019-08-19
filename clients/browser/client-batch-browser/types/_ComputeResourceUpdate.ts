/**
 * <p>An object representing the attributes of a compute environment that can be updated.</p>
 */
export interface _ComputeResourceUpdate {
  /**
   * <p>The minimum number of EC2 vCPUs that an environment should maintain.</p>
   */
  minvCpus?: number;

  /**
   * <p>The maximum number of EC2 vCPUs that an environment can reach.</p>
   */
  maxvCpus?: number;

  /**
   * <p>The desired number of EC2 vCPUS in the compute environment.</p>
   */
  desiredvCpus?: number;
}

export type _UnmarshalledComputeResourceUpdate = _ComputeResourceUpdate;
