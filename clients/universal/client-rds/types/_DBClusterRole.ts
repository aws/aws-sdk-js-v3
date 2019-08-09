/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 */
export interface _DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to access other AWS services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p> </li> <li> <p> <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable to assume the IAM role in order to access other AWS services on your behalf.</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see <a>DBEngineVersion</a>. </p>
   */
  FeatureName?: string;
}

export type _UnmarshalledDBClusterRole = _DBClusterRole;
