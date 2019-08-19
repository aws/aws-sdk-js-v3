/**
 * <p>Contains metadata about a backup vault.</p>
 */
export interface _BackupVaultListMember {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;
}

export interface _UnmarshalledBackupVaultListMember
  extends _BackupVaultListMember {
  /**
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;
}
