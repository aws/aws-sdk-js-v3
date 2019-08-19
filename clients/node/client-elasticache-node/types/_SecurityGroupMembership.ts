/**
 * <p>Represents a single cache security group and its status.</p>
 */
export interface _SecurityGroupMembership {
  /**
   * <p>The identifier of the cache security group.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

export type _UnmarshalledSecurityGroupMembership = _SecurityGroupMembership;
