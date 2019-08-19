import {
  _InstanceCapacity,
  _UnmarshalledInstanceCapacity
} from "./_InstanceCapacity";

/**
 * <p>The capacity information for instances launched onto the Dedicated Host.</p>
 */
export interface _AvailableCapacity {
  /**
   * <p>The total number of instances supported by the Dedicated Host.</p>
   */
  AvailableInstanceCapacity?:
    | Array<_InstanceCapacity>
    | Iterable<_InstanceCapacity>;

  /**
   * <p>The number of vCPUs available on the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

export interface _UnmarshalledAvailableCapacity extends _AvailableCapacity {
  /**
   * <p>The total number of instances supported by the Dedicated Host.</p>
   */
  AvailableInstanceCapacity?: Array<_UnmarshalledInstanceCapacity>;
}
