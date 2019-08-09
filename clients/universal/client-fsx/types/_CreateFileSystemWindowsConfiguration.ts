import {
  _SelfManagedActiveDirectoryConfiguration,
  _UnmarshalledSelfManagedActiveDirectoryConfiguration
} from "./_SelfManagedActiveDirectoryConfiguration";

/**
 * <p>The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.</p>
 */
export interface _CreateFileSystemWindowsConfiguration {
  /**
   * <p>The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _SelfManagedActiveDirectoryConfiguration;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second, in 2 to the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).</p>
   */
  ThroughputCapacity: number;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The preferred time to take daily automatic backups, formatted HH:MM in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. The default is to retain backups for 7 days. Setting this value to 0 disables the creation of automatic backups. The maximum retention period for backups is 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups.</p>
   */
  CopyTagsToBackups?: boolean;
}

export interface _UnmarshalledCreateFileSystemWindowsConfiguration
  extends _CreateFileSystemWindowsConfiguration {
  /**
   * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _UnmarshalledSelfManagedActiveDirectoryConfiguration;
}
