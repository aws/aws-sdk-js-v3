import { _Subnet, _UnmarshalledSubnet } from "./_Subnet";

/**
 * <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
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
   * <p>Provides the VpcId of the DB subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p> Contains a list of <code>Subnet</code> elements. </p>
   */
  Subnets?: Array<_Subnet> | Iterable<_Subnet>;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;
}

export interface _UnmarshalledDBSubnetGroup extends _DBSubnetGroup {
  /**
   * <p> Contains a list of <code>Subnet</code> elements. </p>
   */
  Subnets?: Array<_UnmarshalledSubnet>;
}
