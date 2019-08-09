/**
 * _SecurityGroup shape
 */
export interface _SecurityGroup {
  /**
   * <p>EC2 instance's security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>EC2 instance's security group name.</p>
   */
  GroupName?: string;
}

export type _UnmarshalledSecurityGroup = _SecurityGroup;
