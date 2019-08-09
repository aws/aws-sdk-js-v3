import {
  _EstimatedResourceSize,
  _UnmarshalledEstimatedResourceSize
} from "./_EstimatedResourceSize";

/**
 * <p>Statistical information about the data store.</p>
 */
export interface _DatastoreStatistics {
  /**
   * <p>The estimated size of the data store.</p>
   */
  size?: _EstimatedResourceSize;
}

export interface _UnmarshalledDatastoreStatistics extends _DatastoreStatistics {
  /**
   * <p>The estimated size of the data store.</p>
   */
  size?: _UnmarshalledEstimatedResourceSize;
}
