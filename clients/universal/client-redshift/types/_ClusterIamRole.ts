/**
 * <p>An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services.</p>
 */
export interface _ClusterIamRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role, for example, <code>arn:aws:iam::123456789012:role/RedshiftCopyUnload</code>. </p>
   */
  IamRoleArn?: string;

  /**
   * <p>A value that describes the status of the IAM role's association with an Amazon Redshift cluster.</p> <p>The following are possible statuses and descriptions.</p> <ul> <li> <p> <code>in-sync</code>: The role is available for use by the cluster.</p> </li> <li> <p> <code>adding</code>: The role is in the process of being associated with the cluster.</p> </li> <li> <p> <code>removing</code>: The role is in the process of being disassociated with the cluster.</p> </li> </ul>
   */
  ApplyStatus?: string;
}

export type _UnmarshalledClusterIamRole = _ClusterIamRole;
