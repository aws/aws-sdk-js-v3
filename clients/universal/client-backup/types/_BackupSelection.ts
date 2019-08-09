import { _Condition, _UnmarshalledCondition } from "./_Condition";

/**
 * <p>Used to specify a set of resources to a backup plan.</p>
 */
export interface _BackupSelection {
  /**
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName: string;

  /**
   * <p>The ARN of the IAM role that AWS Backup uses to authenticate when restoring the target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string;

  /**
   * <p>An array of strings that either contain Amazon Resource Names (ARNs) or match patterns such as "<code>arn:aws:ec2:us-east-1:123456789012:volume/*</code>" of resources to assign to a backup plan.</p>
   */
  Resources?: Array<string> | Iterable<string>;

  /**
   * <p>An array of conditions used to specify a set of resources to assign to a backup plan; for example, <code>"StringEquals": {"ec2:ResourceTag/Department": "accounting"</code>.</p>
   */
  ListOfTags?: Array<_Condition> | Iterable<_Condition>;
}

export interface _UnmarshalledBackupSelection extends _BackupSelection {
  /**
   * <p>An array of strings that either contain Amazon Resource Names (ARNs) or match patterns such as "<code>arn:aws:ec2:us-east-1:123456789012:volume/*</code>" of resources to assign to a backup plan.</p>
   */
  Resources?: Array<string>;

  /**
   * <p>An array of conditions used to specify a set of resources to assign to a backup plan; for example, <code>"StringEquals": {"ec2:ResourceTag/Department": "accounting"</code>.</p>
   */
  ListOfTags?: Array<_UnmarshalledCondition>;
}
