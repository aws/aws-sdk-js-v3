/**
 * <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p>
 */
export interface _InstancesDistribution {
  /**
   * <p>Indicates how to allocate instance types to fulfill On-Demand capacity. </p> <p>The only valid value is <code>prioritized</code>, which is also the default value. This strategy uses the order of instance type overrides for the <a>LaunchTemplate</a> to define the launch priority of each instance type. The first instance type in the array is prioritized higher than the last. If all your On-Demand capacity cannot be fulfilled using your highest priority instance, then the Auto Scaling groups launches the remaining capacity using the second priority instance type, and so on. </p>
   */
  OnDemandAllocationStrategy?: string;

  /**
   * <p>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is provisioned first as your group scales.</p> <p>The default value is <code>0</code>. If you leave this parameter set to <code>0</code>, On-Demand Instances are launched as a percentage of the Auto Scaling group's desired capacity, per the <code>OnDemandPercentageAboveBaseCapacity</code> setting.</p>
   */
  OnDemandBaseCapacity?: number;

  /**
   * <p>Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond <code>OnDemandBaseCapacity</code>. The range is 0–100.</p> <p>The default value is <code>100</code>. If you leave this parameter set to <code>100</code>, the percentages are 100% for On-Demand Instances and 0% for Spot Instances. </p>
   */
  OnDemandPercentageAboveBaseCapacity?: number;

  /**
   * <p>Indicates how to allocate Spot capacity across Spot pools.</p> <p>The only valid value is <code>lowest-price</code>, which is also the default value. The Auto Scaling group selects the cheapest Spot pools and evenly allocates your Spot capacity across the number of Spot pools that you specify. </p>
   */
  SpotAllocationStrategy?: string;

  /**
   * <p>The number of Spot pools to use to allocate your Spot capacity. The Spot pools are determined from the different instance types in the Overrides array of <a>LaunchTemplate</a>. The range is 1–20.</p> <p>The default value is <code>2</code>.</p>
   */
  SpotInstancePools?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. If you leave the value of this parameter blank (which is the default), the maximum Spot price is set at the On-Demand price.</p> <p>To remove a value that you previously set, include the parameter but leave the value blank.</p>
   */
  SpotMaxPrice?: string;
}

export type _UnmarshalledInstancesDistribution = _InstancesDistribution;
