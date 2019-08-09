import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";

/**
 * <p/>
 */
export interface _ReplicationSubnetGroup {
  /**
   * <p>The identifier of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>A description for the replication subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>The subnets that are in the subnet group.</p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;
}

export interface _UnmarshalledReplicationSubnetGroup
  extends _ReplicationSubnetGroup {
  /**
   * <p>The subnets that are in the subnet group.</p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;
}
