/**
 * <p>Contains details for the backup.</p>
 */
export interface _BackupSummary {
  /**
   * <p>Name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>Unique identifier for the table.</p>
   */
  TableId?: string;

  /**
   * <p>ARN associated with the table.</p>
   */
  TableArn?: string;

  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn?: string;

  /**
   * <p>Name of the specified backup.</p>
   */
  BackupName?: string;

  /**
   * <p>Time at which the backup was created.</p>
   */
  BackupCreationDateTime?: Date | string | number;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date | string | number;

  /**
   * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED.</p>
   */
  BackupStatus?: "CREATING" | "DELETED" | "AVAILABLE" | string;

  /**
   * <p>BackupType:</p> <ul> <li> <p> <code>USER</code> - On-demand backup created by you.</p> </li> <li> <p> <code>SYSTEM</code> - On-demand backup automatically created by DynamoDB.</p> </li> </ul>
   */
  BackupType?: "USER" | "SYSTEM" | string;

  /**
   * <p>Size of the backup in bytes.</p>
   */
  BackupSizeBytes?: number;
}

export interface _UnmarshalledBackupSummary extends _BackupSummary {
  /**
   * <p>Time at which the backup was created.</p>
   */
  BackupCreationDateTime?: Date;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date;
}
