import {
  _SelfManagedActiveDirectoryAttributes,
  _UnmarshalledSelfManagedActiveDirectoryAttributes
} from "./_SelfManagedActiveDirectoryAttributes";

/**
 * <p>The configuration for this Microsoft Windows file system.</p>
 */
export interface _WindowsFileSystemConfiguration {
  /**
   * <p>The ID for an existing Microsoft Active Directory instance that the file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _SelfManagedActiveDirectoryAttributes;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?:
    | Array<"PATCHING" | "BACKING_UP" | string>
    | Iterable<"PATCHING" | "BACKING_UP" | string>;

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
   * <p>A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups.</p>
   */
  CopyTagsToBackups?: boolean;
}

export interface _UnmarshalledWindowsFileSystemConfiguration
  extends _WindowsFileSystemConfiguration {
  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: _UnmarshalledSelfManagedActiveDirectoryAttributes;

  /**
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?: Array<"PATCHING" | "BACKING_UP" | string>;
}
