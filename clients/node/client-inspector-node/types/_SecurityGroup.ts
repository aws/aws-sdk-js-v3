/**
 * <p>Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.</p>
 */
export interface _SecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  groupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  groupId?: string;
}

export type _UnmarshalledSecurityGroup = _SecurityGroup;
