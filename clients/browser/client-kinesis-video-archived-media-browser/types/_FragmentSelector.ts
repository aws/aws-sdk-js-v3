import {
  _TimestampRange,
  _UnmarshalledTimestampRange
} from "./_TimestampRange";

/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
 */
export interface _FragmentSelector {
  /**
   * <p>The origin of the timestamps to use (Server or Producer).</p>
   */
  FragmentSelectorType: "PRODUCER_TIMESTAMP" | "SERVER_TIMESTAMP" | string;

  /**
   * <p>The range of timestamps to return.</p>
   */
  TimestampRange: _TimestampRange;
}

export interface _UnmarshalledFragmentSelector extends _FragmentSelector {
  /**
   * <p>The range of timestamps to return.</p>
   */
  TimestampRange: _UnmarshalledTimestampRange;
}
