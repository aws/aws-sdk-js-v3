/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface _ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
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

export type _UnmarshalledModelPackageStatusItem = _ModelPackageStatusItem;
