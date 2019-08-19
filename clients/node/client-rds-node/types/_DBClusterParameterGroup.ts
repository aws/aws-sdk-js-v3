/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
 */
export interface _DBClusterParameterGroup {
  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;
}

export type _UnmarshalledDBClusterParameterGroup = _DBClusterParameterGroup;
