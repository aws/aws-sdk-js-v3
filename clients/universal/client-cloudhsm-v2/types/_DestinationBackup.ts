/**
 * _DestinationBackup shape
 */
export interface _DestinationBackup {
  /**
   * _Timestamp shape
   */
  CreateTimestamp?: Date | string | number;

  /**
   * _Region shape
   */
  SourceRegion?: string;

  /**
   * _BackupId shape
   */
  SourceBackup?: string;

  /**
   * _ClusterId shape
   */
  SourceCluster?: string;
}

export interface _UnmarshalledDestinationBackup extends _DestinationBackup {
  /**
   * _Timestamp shape
   */
  CreateTimestamp?: Date;
}
