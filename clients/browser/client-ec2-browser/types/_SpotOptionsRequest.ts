/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 */
export interface _SpotOptionsRequest {
  /**
   * <p>Indicates how to allocate the target capacity across the Spot pools specified by the Spot Fleet request. The default is <code>lowestPrice</code>.</p>
   */
  AllocationStrategy?:
    | "lowest-price"
    | "diversified"
    | "capacity-optimized"
    | string;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate" | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot <b>AllocationStrategy</b> is set to <code>lowest-price</code>. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export type _UnmarshalledSpotOptionsRequest = _SpotOptionsRequest;
