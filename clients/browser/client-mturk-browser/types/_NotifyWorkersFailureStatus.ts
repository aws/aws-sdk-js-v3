/**
 * <p> When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. </p>
 */
export interface _NotifyWorkersFailureStatus {
  /**
   * <p> Encoded value for the failure type. </p>
   */
  NotifyWorkersFailureCode?: "SoftFailure" | "HardFailure" | string;

  /**
   * <p> A message detailing the reason the Worker could not be notified. </p>
   */
  NotifyWorkersFailureMessage?: string;

  /**
   * <p> The ID of the Worker.</p>
   */
  WorkerId?: string;
}

export type _UnmarshalledNotifyWorkersFailureStatus = _NotifyWorkersFailureStatus;
