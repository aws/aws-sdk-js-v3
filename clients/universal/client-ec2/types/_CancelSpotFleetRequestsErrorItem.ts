import {
  _CancelSpotFleetRequestsError,
  _UnmarshalledCancelSpotFleetRequestsError
} from "./_CancelSpotFleetRequestsError";

/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 */
export interface _CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: _CancelSpotFleetRequestsError;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export interface _UnmarshalledCancelSpotFleetRequestsErrorItem
  extends _CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: _UnmarshalledCancelSpotFleetRequestsError;
}
