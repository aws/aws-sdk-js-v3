/**
 * <p>Represents a cluster's status within a particular cache security group.</p>
 */
export interface _CacheSecurityGroupMembership {
  /**
   * <p>The name of the cache security group.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

export type _UnmarshalledCacheSecurityGroupMembership = _CacheSecurityGroupMembership;
