/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance.</p>
 */
export interface _DBInstanceRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see <code>DBEngineVersion</code>. </p>
   */
  FeatureName?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB instance. The Status property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - the IAM role ARN is associated with the DB instance and can be used to access other AWS services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - the IAM role ARN is being associated with the DB instance.</p> </li> <li> <p> <code>INVALID</code> - the IAM role ARN is associated with the DB instance, but the DB instance is unable to assume the IAM role in order to access other AWS services on your behalf.</p> </li> </ul>
   */
  Status?: string;
}

export type _UnmarshalledDBInstanceRole = _DBInstanceRole;
