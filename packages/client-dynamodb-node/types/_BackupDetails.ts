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
    BackupStatus: 'CREATING'|'DELETED'|'AVAILABLE'|string;

    /**
     * <p>BackupType:</p> <ul> <li> <p> <code>USER</code> - On-demand backup created by you.</p> </li> <li> <p> <code>SYSTEM</code> - On-demand backup automatically created by DynamoDB.</p> </li> </ul>
     */
    BackupType: 'USER'|'SYSTEM'|string;

    /**
     * <p>Time at which the backup was created. This is the request time of the backup. </p>
     */
    BackupCreationDateTime: Date|string|number;

    /**
     * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code> on-demand backup expires automatically 35 days after its creation.</p>
     */
    BackupExpiryDateTime?: Date|string|number;
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