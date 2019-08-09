/**
 * <p>This data type is used in the <a>AssessmentRunFilter</a> data type.</p>
 */
export interface _TimestampRange {
  /**
   * <p>The minimum value of the timestamp range.</p>
   */
  beginDate?: Date | string | number;

  /**
   * <p>The maximum value of the timestamp range.</p>
   */
  endDate?: Date | string | number;
}

export interface _UnmarshalledTimestampRange extends _TimestampRange {
  /**
   * <p>The minimum value of the timestamp range.</p>
   */
  beginDate?: Date;

  /**
   * <p>The maximum value of the timestamp range.</p>
   */
  endDate?: Date;
}
