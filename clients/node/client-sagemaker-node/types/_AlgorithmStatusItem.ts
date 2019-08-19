/**
 * <p>Represents the overall status of an algorithm.</p>
 */
export interface _AlgorithmStatusItem {
  /**
   * <p>The name of the algorithm for which the overall status is being reported.</p>
   */
  Name: string;

  /**
   * <p>The current status.</p>
   */
  Status: "NotStarted" | "InProgress" | "Completed" | "Failed" | string;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

export type _UnmarshalledAlgorithmStatusItem = _AlgorithmStatusItem;
