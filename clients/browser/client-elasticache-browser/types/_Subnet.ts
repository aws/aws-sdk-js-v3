import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.</p>
 */
export interface _Subnet {
  /**
   * <p>The unique identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The Availability Zone associated with the subnet.</p>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>The Availability Zone associated with the subnet.</p>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
