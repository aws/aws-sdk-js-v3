/**
 * <p>Describes a single backup. </p>
 */
export interface _Backup {
  /**
   * <p>The ARN of the backup. </p>
   */
  BackupArn?: string;

  /**
   * <p> The generated ID of the backup. Example: <code>myServerName-yyyyMMddHHmmssSSS</code> </p>
   */
  BackupId?: string;

  /**
   * <p> The backup type. Valid values are <code>automated</code> or <code>manual</code>. </p>
   */
  BackupType?: "AUTOMATED" | "MANUAL" | string;

  /**
   * <p> The time stamp when the backup was created in the database. Example: <code>2016-07-29T13:38:47.520Z</code> </p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p> A user-provided description for a manual backup. This field is empty for automated backups. </p>
   */
  Description?: string;

  /**
   * <p> The engine type that is obtained from the server when the backup is created. </p>
   */
  Engine?: string;

  /**
   * <p> The engine model that is obtained from the server when the backup is created. </p>
   */
  EngineModel?: string;

  /**
   * <p> The engine version that is obtained from the server when the backup is created. </p>
   */
  EngineVersion?: string;

  /**
   * <p> The EC2 instance profile ARN that is obtained from the server when the backup is created. Because this value is stored, you are not required to provide the InstanceProfileArn again if you restore a backup. </p>
   */
  InstanceProfileArn?: string;

  /**
   * <p> The instance type that is obtained from the server when the backup is created. </p>
   */
  InstanceType?: string;

  /**
   * <p> The key pair that is obtained from the server when the backup is created. </p>
   */
  KeyPair?: string;

  /**
   * <p> The preferred backup period that is obtained from the server when the backup is created. </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p> The preferred maintenance period that is obtained from the server when the backup is created. </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p> This field is deprecated and is no longer used. </p>
   */
  S3DataSize?: number;

  /**
   * <p> This field is deprecated and is no longer used. </p>
   */
  S3DataUrl?: string;

  /**
   * <p> The Amazon S3 URL of the backup's log file. </p>
   */
  S3LogUrl?: string;

  /**
   * <p> The security group IDs that are obtained from the server when the backup is created. </p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p> The name of the server from which the backup was made. </p>
   */
  ServerName?: string;

  /**
   * <p> The service role ARN that is obtained from the server when the backup is created. </p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The status of a backup while in progress. </p>
   */
  Status?: "IN_PROGRESS" | "OK" | "FAILED" | "DELETING" | string;

  /**
   * <p> An informational message about backup status. </p>
   */
  StatusDescription?: string;

  /**
   * <p> The subnet IDs that are obtained from the server when the backup is created. </p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p> The version of AWS OpsWorks CM-specific tools that is obtained from the server when the backup is created. </p>
   */
  ToolsVersion?: string;

  /**
   * <p> The IAM user ARN of the requester for manual backups. This field is empty for automated backups. </p>
   */
  UserArn?: string;
}

export interface _UnmarshalledBackup extends _Backup {
  /**
   * <p> The time stamp when the backup was created in the database. Example: <code>2016-07-29T13:38:47.520Z</code> </p>
   */
  CreatedAt?: Date;

  /**
   * <p> The security group IDs that are obtained from the server when the backup is created. </p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p> The subnet IDs that are obtained from the server when the backup is created. </p>
   */
  SubnetIds?: Array<string>;
}
