/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 */
export interface _CancelSpotFleetRequestsSuccessItem {
  /**
   * <p>The current state of the Spot Fleet request.</p>
   */
  CurrentSpotFleetRequestState?:
    | "submitted"
    | "active"
    | "cancelled"
    | "failed"
    | "cancelled_running"
    | "cancelled_terminating"
    | "modifying"
    | string;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   */
  PreviousSpotFleetRequestState?:
    | "submitted"
    | "active"
    | "cancelled"
    | "failed"
    | "cancelled_running"
    | "cancelled_terminating"
    | "modifying"
    | string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export type _UnmarshalledCancelSpotFleetRequestsSuccessItem = _CancelSpotFleetRequestsSuccessItem;
