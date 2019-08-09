import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p> Detailed information about a subnet. </p>
 */
export interface _Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the Availability Zone for the subnet.</p>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>Specifies the Availability Zone for the subnet.</p>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
