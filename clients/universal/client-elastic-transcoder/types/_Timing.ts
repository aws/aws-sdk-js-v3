/**
 * <p>Details about the timing of a job.</p>
 */
export interface _Timing {
  /**
   * <p>The time the job was submitted to Elastic Transcoder, in epoch milliseconds.</p>
   */
  SubmitTimeMillis?: number;

  /**
   * <p>The time the job began transcoding, in epoch milliseconds.</p>
   */
  StartTimeMillis?: number;

  /**
   * <p>The time the job finished transcoding, in epoch milliseconds.</p>
   */
  FinishTimeMillis?: number;
}

export type _UnmarshalledTiming = _Timing;
