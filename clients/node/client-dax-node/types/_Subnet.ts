/**
 * <p>Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.</p>
 */
export interface _Subnet {
  /**
   * <p>The system-assigned identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The Availability Zone (AZ) for subnet subnet.</p>
   */
  SubnetAvailabilityZone?: string;
}

export type _UnmarshalledSubnet = _Subnet;
