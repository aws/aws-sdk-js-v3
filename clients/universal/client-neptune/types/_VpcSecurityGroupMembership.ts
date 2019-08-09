/**
 * <p>This data type is used as a response element for queries on VPC security group membership.</p>
 */
export interface _VpcSecurityGroupMembership {
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export type _UnmarshalledVpcSecurityGroupMembership = _VpcSecurityGroupMembership;
