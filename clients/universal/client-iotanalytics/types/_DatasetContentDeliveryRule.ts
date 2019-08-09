import {
  _DatasetContentDeliveryDestination,
  _UnmarshalledDatasetContentDeliveryDestination
} from "./_DatasetContentDeliveryDestination";

/**
 * <p>When data set contents are created they are delivered to destination specified here.</p>
 */
export interface _DatasetContentDeliveryRule {
  /**
   * <p>The name of the data set content delivery rules entry.</p>
   */
  entryName?: string;

  /**
   * <p>The destination to which data set contents are delivered.</p>
   */
  destination: _DatasetContentDeliveryDestination;
}

export interface _UnmarshalledDatasetContentDeliveryRule
  extends _DatasetContentDeliveryRule {
  /**
   * <p>The destination to which data set contents are delivered.</p>
   */
  destination: _UnmarshalledDatasetContentDeliveryDestination;
}
