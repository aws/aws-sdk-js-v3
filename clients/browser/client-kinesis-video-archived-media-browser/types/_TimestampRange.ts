/**
 * <p>The range of timestamps for which to return fragments.</p>
 */
export interface _TimestampRange {
  /**
   * <p>The starting timestamp in the range of timestamps for which to return fragments.</p>
   */
  StartTimestamp: Date | string | number;

  /**
   * <p>The ending timestamp in the range of timestamps for which to return fragments.</p>
   */
  EndTimestamp: Date | string | number;
}

export interface _UnmarshalledTimestampRange extends _TimestampRange {
  /**
   * <p>The starting timestamp in the range of timestamps for which to return fragments.</p>
   */
  StartTimestamp: Date;

  /**
   * <p>The ending timestamp in the range of timestamps for which to return fragments.</p>
   */
  EndTimestamp: Date;
}
