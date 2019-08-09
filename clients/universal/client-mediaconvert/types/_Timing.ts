/**
 * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
 */
export interface _Timing {
  /**
   * The time, in Unix epoch format, that the transcoding job finished
   */
  FinishTime?: Date | string | number;

  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   */
  StartTime?: Date | string | number;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   */
  SubmitTime?: Date | string | number;
}

export interface _UnmarshalledTiming extends _Timing {
  /**
   * The time, in Unix epoch format, that the transcoding job finished
   */
  FinishTime?: Date;

  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   */
  StartTime?: Date;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   */
  SubmitTime?: Date;
}
