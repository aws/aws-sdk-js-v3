/**
 * <p>Information about the instance type that the Dedicated Host supports.</p>
 */
export interface _InstanceCapacity {
  /**
   * <p>The number of instances that can still be launched onto the Dedicated Host.</p>
   */
  AvailableCapacity?: number;

  /**
   * <p>The instance type size supported by the Dedicated Host.</p>
   */
  InstanceType?: string;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host.</p>
   */
  TotalCapacity?: number;
}

export type _UnmarshalledInstanceCapacity = _InstanceCapacity;
