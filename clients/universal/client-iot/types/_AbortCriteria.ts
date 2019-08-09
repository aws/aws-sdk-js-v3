/**
 * <p>Details of abort criteria to define rules to abort the job.</p>
 */
export interface _AbortCriteria {
  /**
   * <p>The type of job execution failure to define a rule to initiate a job abort.</p>
   */
  failureType: "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL" | string;

  /**
   * <p>The type of abort action to initiate a job abort.</p>
   */
  action: "CANCEL" | string;

  /**
   * <p>The threshold as a percentage of the total number of executed things that will initiate a job abort.</p> <p>AWS IoT supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).</p>
   */
  thresholdPercentage: number;

  /**
   * <p>Minimum number of executed things before evaluating an abort rule.</p>
   */
  minNumberOfExecutedThings: number;
}

export type _UnmarshalledAbortCriteria = _AbortCriteria;
