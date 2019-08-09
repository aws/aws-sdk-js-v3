import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Describes a subnet.</p>
 */
export interface _Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p/>
   */
  SubnetAvailabilityZone?: _AvailabilityZone;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p/>
   */
  SubnetAvailabilityZone?: _UnmarshalledAvailabilityZone;
}
