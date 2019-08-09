/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 */
export interface _DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The <code>Status</code> property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The IAM role ARN is associated with the DB cluster and can be used to access other AWS services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - The IAM role ARN is being associated with the DB cluster.</p> </li> <li> <p> <code>INVALID</code> - The IAM role ARN is associated with the DB cluster, but the DB cluster cannot assume the IAM role to access other AWS services on your behalf.</p> </li> </ul>
   */
  Status?: string;
}

export type _UnmarshalledDBClusterRole = _DBClusterRole;
