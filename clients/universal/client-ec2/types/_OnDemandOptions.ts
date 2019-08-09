/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface _OnDemandOptions {
  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify <code>lowest-price</code>, EC2 Fleet uses price to determine the order, launching the lowest price first. If you specify <code>prioritized</code>, EC2 Fleet uses the priority that you assigned to each launch template override, launching the highest priority first. If you do not specify a value, EC2 Fleet defaults to <code>lowest-price</code>.</p>
   */
  AllocationStrategy?: "lowest-price" | "prioritized" | string;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances.</p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export type _UnmarshalledOnDemandOptions = _OnDemandOptions;
