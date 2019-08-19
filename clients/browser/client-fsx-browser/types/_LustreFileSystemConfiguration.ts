import {
  _DataRepositoryConfiguration,
  _UnmarshalledDataRepositoryConfiguration
} from "./_DataRepositoryConfiguration";

/**
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface _LustreFileSystemConfiguration {
  /**
   * <p>The UTC time that you want to begin your weekly maintenance window.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p>
   */
  DataRepositoryConfiguration?: _DataRepositoryConfiguration;
}

export interface _UnmarshalledLustreFileSystemConfiguration
  extends _LustreFileSystemConfiguration {
  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p>
   */
  DataRepositoryConfiguration?: _UnmarshalledDataRepositoryConfiguration;
}
