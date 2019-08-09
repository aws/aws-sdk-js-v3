/**
 * <p>Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.</p>
 */
export interface _CancelStepsInfo {
  /**
   * <p>The encrypted StepId of a step.</p>
   */
  StepId?: string;

  /**
   * <p>The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.</p>
   */
  Status?: "SUBMITTED" | "FAILED" | string;

  /**
   * <p>The reason for the failure if the CancelSteps request fails.</p>
   */
  Reason?: string;
}

export type _UnmarshalledCancelStepsInfo = _CancelStepsInfo;
