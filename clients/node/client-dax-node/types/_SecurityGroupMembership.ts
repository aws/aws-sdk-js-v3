/**
 * <p>An individual VPC security group and its status.</p>
 */
export interface _SecurityGroupMembership {
  /**
   * <p>The unique ID for this security group.</p>
   */
  SecurityGroupIdentifier?: string;

  /**
   * <p>The status of this security group.</p>
   */
  Status?: string;
}

export type _UnmarshalledSecurityGroupMembership = _SecurityGroupMembership;
