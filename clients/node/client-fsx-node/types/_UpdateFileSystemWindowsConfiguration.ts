import {
  _SelfManagedActiveDirectoryConfigurationUpdates,
  _UnmarshalledSelfManagedActiveDirectoryConfigurationUpdates
} from "./_SelfManagedActiveDirectoryConfigurationUpdates";

/**
 * <p>Updates the Microsoft Windows configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx overwrites existing properties with non-null values provided in the request. If you don't specify a non-null value for a property, that property is not updated.</p>
 */
export interface _UpdateFileSystemWindowsConfiguration {
  /**
   * <p>The preferred time to perform weekly maintenance, in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _SelfManagedActiveDirectoryConfigurationUpdates;
}

export interface _UnmarshalledUpdateFileSystemWindowsConfiguration
  extends _UpdateFileSystemWindowsConfiguration {
  /**
   * <p>The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _UnmarshalledSelfManagedActiveDirectoryConfigurationUpdates;
}
