/**
 * <p>Describes the members of a VPC security group.</p>
 */
export interface _VpcSecurityGroupMembership {
  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export type _UnmarshalledVpcSecurityGroupMembership = _VpcSecurityGroupMembership;
