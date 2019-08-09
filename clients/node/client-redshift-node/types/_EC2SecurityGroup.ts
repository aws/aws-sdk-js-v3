import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an Amazon EC2 security group.</p>
 */
export interface _EC2SecurityGroup {
  /**
   * <p>The status of the EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the EC2 Security Group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS ID of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> field. </p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>The list of tags for the EC2 security group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledEC2SecurityGroup extends _EC2SecurityGroup {
  /**
   * <p>The list of tags for the EC2 security group.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
