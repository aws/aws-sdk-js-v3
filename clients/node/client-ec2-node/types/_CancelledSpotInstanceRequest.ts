/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 */
export interface _CancelledSpotInstanceRequest {
  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The state of the Spot Instance request.</p>
   */
  State?: "active" | "open" | "closed" | "cancelled" | "completed" | string;
}

export type _UnmarshalledCancelledSpotInstanceRequest = _CancelledSpotInstanceRequest;
