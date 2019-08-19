import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface _Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
