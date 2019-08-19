/**
 * <p>Describes a security group and AWS account ID pair.</p>
 */
export interface _UserIdGroupPair {
  /**
   * <p>A description for the security group rule that references this user ID group pair.</p> <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group. In a request, use this parameter for a security group in EC2-Classic or a default VPC only. For a security group in a nondefault VPC, use the security group ID. </p> <p>For a referenced security group in another VPC, this value is not returned if the referenced security group is deleted.</p>
   */
  GroupName?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of an AWS account.</p> <p>For a referenced security group in another VPC, the account ID of the referenced security group is returned in the response. If the referenced security group is deleted, this value is not returned.</p> <p>[EC2-Classic] Required when adding or removing rules that reference a security group in another AWS account.</p>
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   */
  VpcPeeringConnectionId?: string;
}

export type _UnmarshalledUserIdGroupPair = _UserIdGroupPair;
