/**
 * <p>Describes the capacity status for a fleet.</p>
 */
export interface _ComputeCapacityStatus {
  /**
   * <p>The desired number of streaming instances.</p>
   */
  Desired: number;

  /**
   * <p>The total number of simultaneous streaming instances that are running.</p>
   */
  Running?: number;

  /**
   * <p>The number of instances in use for streaming.</p>
   */
  InUse?: number;

  /**
   * <p>The number of currently available instances that can be used to stream sessions.</p>
   */
  Available?: number;
}

export type _UnmarshalledComputeCapacityStatus = _ComputeCapacityStatus;
