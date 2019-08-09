/**
 * <p>Information about a subnet mapping.</p>
 */
export interface _SubnetMapping {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address.</p>
   */
  AllocationId?: string;
}

export type _UnmarshalledSubnetMapping = _SubnetMapping;
