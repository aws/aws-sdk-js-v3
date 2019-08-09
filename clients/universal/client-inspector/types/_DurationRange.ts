/**
 * <p>This data type is used in the <a>AssessmentTemplateFilter</a> data type.</p>
 */
export interface _DurationRange {
  /**
   * <p>The minimum value of the duration range. Must be greater than zero.</p>
   */
  minSeconds?: number;

  /**
   * <p>The maximum value of the duration range. Must be less than or equal to 604800 seconds (1 week).</p>
   */
  maxSeconds?: number;
}

export type _UnmarshalledDurationRange = _DurationRange;
