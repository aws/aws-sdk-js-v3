import {
  _EC2SecurityGroup,
  _UnmarshalledEC2SecurityGroup
} from "./_EC2SecurityGroup";

/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
 */
export interface _CacheSecurityGroup {
  /**
   * <p>The AWS account ID of the cache security group owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The name of the cache security group.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The description of the cache security group.</p>
   */
  Description?: string;

  /**
   * <p>A list of Amazon EC2 security groups that are associated with this cache security group.</p>
   */
  EC2SecurityGroups?: Array<_EC2SecurityGroup> | Iterable<_EC2SecurityGroup>;
}

export interface _UnmarshalledCacheSecurityGroup extends _CacheSecurityGroup {
  /**
   * <p>A list of Amazon EC2 security groups that are associated with this cache security group.</p>
   */
  EC2SecurityGroups?: Array<_UnmarshalledEC2SecurityGroup>;
}
