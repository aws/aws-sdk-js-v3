/**
 * <p>The details of the step failure. The service attempts to detect the root cause for many common failures.</p>
 */
export interface _FailureDetails {
  /**
   * <p>The reason for the step failure. In the case where the service cannot successfully determine the root cause of the failure, it returns "Unknown Error" as a reason.</p>
   */
  Reason?: string;

  /**
   * <p>The descriptive message including the error the EMR service has identified as the cause of step failure. This is text from an error log that describes the root cause of the failure.</p>
   */
  Message?: string;

  /**
   * <p>The path to the log file where the step failure root cause was originally recorded.</p>
   */
  LogFile?: string;
}

export type _UnmarshalledFailureDetails = _FailureDetails;
