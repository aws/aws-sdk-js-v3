import {
  _DatasetTrigger,
  _UnmarshalledDatasetTrigger
} from "./_DatasetTrigger";
import {
  _DatasetActionSummary,
  _UnmarshalledDatasetActionSummary
} from "./_DatasetActionSummary";

/**
 * <p>A summary of information about a data set.</p>
 */
export interface _DatasetSummary {
  /**
   * <p>The name of the data set.</p>
   */
  datasetName?: string;

  /**
   * <p>The status of the data set.</p>
   */
  status?: "CREATING" | "ACTIVE" | "DELETING" | string;

  /**
   * <p>The time the data set was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p>A list of triggers. A trigger causes data set content to be populated at a specified time interval or when another data set is populated. The list of triggers can be empty or contain up to five DataSetTrigger objects</p>
   */
  triggers?: Array<_DatasetTrigger> | Iterable<_DatasetTrigger>;

  /**
   * <p>A list of "DataActionSummary" objects.</p>
   */
  actions?: Array<_DatasetActionSummary> | Iterable<_DatasetActionSummary>;
}

export interface _UnmarshalledDatasetSummary extends _DatasetSummary {
  /**
   * <p>The time the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A list of triggers. A trigger causes data set content to be populated at a specified time interval or when another data set is populated. The list of triggers can be empty or contain up to five DataSetTrigger objects</p>
   */
  triggers?: Array<_UnmarshalledDatasetTrigger>;

  /**
   * <p>A list of "DataActionSummary" objects.</p>
   */
  actions?: Array<_UnmarshalledDatasetActionSummary>;
}
