import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";

/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
 */
export interface _CacheSubnetGroup {
  /**
   * <p>The name of the cache subnet group.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The description of the cache subnet group.</p>
   */
  CacheSubnetGroupDescription?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the cache subnet group.</p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;
}

export interface _UnmarshalledCacheSubnetGroup extends _CacheSubnetGroup {
  /**
   * <p>A list of subnets associated with the cache subnet group.</p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;
}
