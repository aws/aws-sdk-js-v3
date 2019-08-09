/**
 * <p>Represents a log group.</p>
 */
export interface _LogGroup {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.</p>
   */
  retentionInDays?: number;

  /**
   * <p>The number of metric filters.</p>
   */
  metricFilterCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the log group.</p>
   */
  arn?: string;

  /**
   * <p>The number of bytes stored.</p>
   */
  storedBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.</p>
   */
  kmsKeyId?: string;
}

export type _UnmarshalledLogGroup = _LogGroup;
