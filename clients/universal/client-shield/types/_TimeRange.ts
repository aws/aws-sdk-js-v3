/**
 * <p>The time range.</p>
 */
export interface _TimeRange {
  /**
   * <p>The start time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  FromInclusive?: Date | string | number;

  /**
   * <p>The end time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  ToExclusive?: Date | string | number;
}

export interface _UnmarshalledTimeRange extends _TimeRange {
  /**
   * <p>The start time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  FromInclusive?: Date;

  /**
   * <p>The end time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  ToExclusive?: Date;
}
