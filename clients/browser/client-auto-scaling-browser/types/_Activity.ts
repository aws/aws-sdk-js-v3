/**
 * <p>Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.</p>
 */
export interface _Activity {
  /**
   * <p>The ID of the activity.</p>
   */
  ActivityId: string;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>A friendly, more verbose description of the activity.</p>
   */
  Description?: string;

  /**
   * <p>The reason the activity began.</p>
   */
  Cause: string;

  /**
   * <p>The start time of the activity.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The end time of the activity.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The current status of the activity.</p>
   */
  StatusCode:
    | "PendingSpotBidPlacement"
    | "WaitingForSpotInstanceRequestId"
    | "WaitingForSpotInstanceId"
    | "WaitingForInstanceId"
    | "PreInService"
    | "InProgress"
    | "WaitingForELBConnectionDraining"
    | "MidLifecycleAction"
    | "WaitingForInstanceWarmup"
    | "Successful"
    | "Failed"
    | "Cancelled"
    | string;

  /**
   * <p>A friendly, more verbose description of the activity status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>A value between 0 and 100 that indicates the progress of the activity.</p>
   */
  Progress?: number;

  /**
   * <p>The details about the activity.</p>
   */
  Details?: string;
}

export interface _UnmarshalledActivity extends _Activity {
  /**
   * <p>The start time of the activity.</p>
   */
  StartTime: Date;

  /**
   * <p>The end time of the activity.</p>
   */
  EndTime?: Date;
}
