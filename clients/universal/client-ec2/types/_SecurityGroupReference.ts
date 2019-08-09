/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface _SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export type _UnmarshalledSecurityGroupReference = _SecurityGroupReference;
