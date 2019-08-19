import {
  _ResourceDataSyncS3Destination,
  _UnmarshalledResourceDataSyncS3Destination
} from "./_ResourceDataSyncS3Destination";

/**
 * <p>Information about a Resource Data Sync configuration, including its current status and last successful sync.</p>
 */
export interface _ResourceDataSyncItem {
  /**
   * <p>The name of the Resource Data Sync.</p>
   */
  SyncName?: string;

  /**
   * <p>Configuration information for the target Amazon S3 bucket.</p>
   */
  S3Destination?: _ResourceDataSyncS3Destination;

  /**
   * <p>The last time the configuration attempted to sync (UTC).</p>
   */
  LastSyncTime?: Date | string | number;

  /**
   * <p>The last time the sync operations returned a status of <code>SUCCESSFUL</code> (UTC).</p>
   */
  LastSuccessfulSyncTime?: Date | string | number;

  /**
   * <p>The status reported by the last sync.</p>
   */
  LastStatus?: "Successful" | "Failed" | "InProgress" | string;

  /**
   * <p>The date and time the configuration was created (UTC).</p>
   */
  SyncCreatedTime?: Date | string | number;

  /**
   * <p>The status message details reported by the last sync.</p>
   */
  LastSyncStatusMessage?: string;
}

export interface _UnmarshalledResourceDataSyncItem
  extends _ResourceDataSyncItem {
  /**
   * <p>Configuration information for the target Amazon S3 bucket.</p>
   */
  S3Destination?: _UnmarshalledResourceDataSyncS3Destination;

  /**
   * <p>The last time the configuration attempted to sync (UTC).</p>
   */
  LastSyncTime?: Date;

  /**
   * <p>The last time the sync operations returned a status of <code>SUCCESSFUL</code> (UTC).</p>
   */
  LastSuccessfulSyncTime?: Date;

  /**
   * <p>The date and time the configuration was created (UTC).</p>
   */
  SyncCreatedTime?: Date;
}
