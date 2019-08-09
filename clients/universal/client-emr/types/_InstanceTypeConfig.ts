import {
  _EbsConfiguration,
  _UnmarshalledEbsConfiguration
} from "./_EbsConfiguration";
import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";

/**
 * <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. There can be a maximum of 5 instance type configurations in a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceTypeConfig {
  /**
   * <p>An EC2 instance type, such as <code>m3.xlarge</code>. </p>
   */
  InstanceType: string;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified. </p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%. </p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%). If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>. </p>
   */
  EbsConfiguration?: _EbsConfiguration;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;
}

export interface _UnmarshalledInstanceTypeConfig extends _InstanceTypeConfig {
  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>. </p>
   */
  EbsConfiguration?: _UnmarshalledEbsConfiguration;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;
}
