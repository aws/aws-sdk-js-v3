import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p> This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
 */
export interface _Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
