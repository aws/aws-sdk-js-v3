import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";
import {
  _TriggeringDataset,
  _UnmarshalledTriggeringDataset
} from "./_TriggeringDataset";

/**
 * <p>The "DatasetTrigger" that specifies when the data set is automatically updated.</p>
 */
export interface _DatasetTrigger {
  /**
   * <p>The "Schedule" when the trigger is initiated.</p>
   */
  schedule?: _Schedule;

  /**
   * <p>The data set whose content creation triggers the creation of this data set's contents.</p>
   */
  dataset?: _TriggeringDataset;
}

export interface _UnmarshalledDatasetTrigger extends _DatasetTrigger {
  /**
   * <p>The "Schedule" when the trigger is initiated.</p>
   */
  schedule?: _UnmarshalledSchedule;

  /**
   * <p>The data set whose content creation triggers the creation of this data set's contents.</p>
   */
  dataset?: _UnmarshalledTriggeringDataset;
}
