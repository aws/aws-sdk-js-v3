/**
 * <p>Contains metadata about a backup plan.</p>
 */
export interface _BackupPlansListMember {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  DeletionDate?: Date | string | number;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * <p>The display name of a saved backup plan.</p>
   */
  BackupPlanName?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The last time a job to back up resources was executed with this rule. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date | string | number;
}

export interface _UnmarshalledBackupPlansListMember
  extends _BackupPlansListMember {
  /**
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The last time a job to back up resources was executed with this rule. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;
}
