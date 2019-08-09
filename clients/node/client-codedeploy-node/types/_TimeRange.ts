/**
 * <p>Information about a time range.</p>
 */
export interface _TimeRange {
  /**
   * <p>The start time of the time range.</p> <note> <p>Specify null to leave the start time open-ended.</p> </note>
   */
  start?: Date | string | number;

  /**
   * <p>The end time of the time range.</p> <note> <p>Specify null to leave the end time open-ended.</p> </note>
   */
  end?: Date | string | number;
}

export interface _UnmarshalledTimeRange extends _TimeRange {
  /**
   * <p>The start time of the time range.</p> <note> <p>Specify null to leave the start time open-ended.</p> </note>
   */
  start?: Date;

  /**
   * <p>The end time of the time range.</p> <note> <p>Specify null to leave the end time open-ended.</p> </note>
   */
  end?: Date;
}
