/**
 * <p>Information about the action which automatically creates the data set's contents.</p>
 */
export interface _DatasetActionSummary {
  /**
   * <p>The name of the action which automatically creates the data set's contents.</p>
   */
  actionName?: string;

  /**
   * <p>The type of action by which the data set's contents are automatically created.</p>
   */
  actionType?: "QUERY" | "CONTAINER" | string;
}

export type _UnmarshalledDatasetActionSummary = _DatasetActionSummary;
