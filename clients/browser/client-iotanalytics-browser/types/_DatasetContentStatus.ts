/**
 * <p>The state of the data set contents and the reason they are in this state.</p>
 */
export interface _DatasetContentStatus {
  /**
   * <p>The state of the data set contents. Can be one of "READY", "CREATING", "SUCCEEDED" or "FAILED".</p>
   */
  state?: "CREATING" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The reason the data set contents are in this state.</p>
   */
  reason?: string;
}

export type _UnmarshalledDatasetContentStatus = _DatasetContentStatus;
