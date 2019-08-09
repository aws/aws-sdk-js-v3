import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";

/**
 * <p>Detailed information about a DB subnet group. </p>
 */
export interface _DBSubnetGroup {
  /**
   * <p>The name of the DB subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Provides the description of the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>Provides the virtual private cloud (VPC) ID of the DB subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>Detailed information about one or more subnets within a DB subnet group.</p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;

  /**
   * <p>The Amazon Resource Identifier (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;
}

export interface _UnmarshalledDBSubnetGroup extends _DBSubnetGroup {
  /**
   * <p>Detailed information about one or more subnets within a DB subnet group.</p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;
}
