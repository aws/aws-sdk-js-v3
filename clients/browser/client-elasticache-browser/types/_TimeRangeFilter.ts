/**
 * <p>Filters update actions from the service updates that are in available status during the time range.</p>
 */
export interface _TimeRangeFilter {
  /**
   * <p>The start time of the time range filter</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end time of the time range filter</p>
   */
  EndTime?: Date | string | number;
}

export interface _UnmarshalledTimeRangeFilter extends _TimeRangeFilter {
  /**
   * <p>The start time of the time range filter</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the time range filter</p>
   */
  EndTime?: Date;
}
