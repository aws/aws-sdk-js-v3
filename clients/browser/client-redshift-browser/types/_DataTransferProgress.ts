/**
 * <p>Describes the status of a cluster while it is in the process of resizing with an incremental resize.</p>
 */
export interface _DataTransferProgress {
  /**
   * <p>Describes the status of the cluster. While the transfer is in progress the status is <code>transferringdata</code>.</p>
   */
  Status?: string;

  /**
   * <p>Describes the data transfer rate in MB's per second.</p>
   */
  CurrentRateInMegaBytesPerSecond?: number;

  /**
   * <p>Describes the total amount of data to be transfered in megabytes.</p>
   */
  TotalDataInMegaBytes?: number;

  /**
   * <p>Describes the total amount of data that has been transfered in MB's.</p>
   */
  DataTransferredInMegaBytes?: number;

  /**
   * <p>Describes the estimated number of seconds remaining to complete the transfer.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>Describes the number of seconds that have elapsed during the data transfer.</p>
   */
  ElapsedTimeInSeconds?: number;
}

export type _UnmarshalledDataTransferProgress = _DataTransferProgress;
