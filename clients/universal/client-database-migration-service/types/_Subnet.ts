import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p/>
 */
export interface _Subnet {
  /**
   * <p>The subnet identifier.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
