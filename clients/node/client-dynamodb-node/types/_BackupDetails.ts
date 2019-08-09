/**
 * <p>Contains the details of the backup created for the table.</p>
 */
export interface _BackupDetails {
  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn: string;

  /**
   * <p>Name of the requested backup.</p>
   */
  BackupName: string;

  /**
   * <p>Size of the backup in bytes.</p>
   */
  BackupSizeBytes?: number;

  /**
   * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED. </p>
   */
  BackupStatus: "CREATING" | "DELETED" | "AVAILABLE" | string;

  /**
   * <p>BackupType:</p> <ul> <li> <p> <code>USER</code> - You create and manage these using the on-demand backup feature.</p> </li> <li> <p> <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled, a <code>SYSTEM</code> backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion. </p> </li> <li> <p> <code>AWS_BACKUP</code> - On-demand backup created by you from AWS Backup service.</p> </li> </ul>
   */
  BackupType: "USER" | "SYSTEM" | "AWS_BACKUP" | string;

  /**
   * <p>Time at which the backup was created. This is the request time of the backup. </p>
   */
  BackupCreationDateTime: Date | string | number;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date | string | number;
}

export interface _UnmarshalledBackupDetails extends _BackupDetails {
  /**
   * <p>Time at which the backup was created. This is the request time of the backup. </p>
   */
  BackupCreationDateTime: Date;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date;
}
