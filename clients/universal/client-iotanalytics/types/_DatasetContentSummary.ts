import {
  _DatasetContentStatus,
  _UnmarshalledDatasetContentStatus
} from "./_DatasetContentStatus";

/**
 * <p>Summary information about data set contents.</p>
 */
export interface _DatasetContentSummary {
  /**
   * <p>The version of the data set contents.</p>
   */
  version?: string;

  /**
   * <p>The status of the data set contents.</p>
   */
  status?: _DatasetContentStatus;

  /**
   * <p>The actual time the creation of the data set contents was started.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time the creation of the data set contents was scheduled to start.</p>
   */
  scheduleTime?: Date | string | number;
}

export interface _UnmarshalledDatasetContentSummary
  extends _DatasetContentSummary {
  /**
   * <p>The status of the data set contents.</p>
   */
  status?: _UnmarshalledDatasetContentStatus;

  /**
   * <p>The actual time the creation of the data set contents was started.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the creation of the data set contents was scheduled to start.</p>
   */
  scheduleTime?: Date;
}
