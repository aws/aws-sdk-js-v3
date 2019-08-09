import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";
import {
  _EbsBlockDevice,
  _UnmarshalledEbsBlockDevice
} from "./_EbsBlockDevice";

/**
 * <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceTypeSpecification {
  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. Capacity values represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the default value is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD.</p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%).</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>.</p>
   */
  EbsBlockDevices?: Array<_EbsBlockDevice> | Iterable<_EbsBlockDevice>;

  /**
   * <p>Evaluates to <code>TRUE</code> when the specified <code>InstanceType</code> is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

export interface _UnmarshalledInstanceTypeSpecification
  extends _InstanceTypeSpecification {
  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>.</p>
   */
  EbsBlockDevices?: Array<_UnmarshalledEbsBlockDevice>;
}
