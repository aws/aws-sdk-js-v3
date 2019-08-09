import {
  _SpotFleetRequestConfigData,
  _UnmarshalledSpotFleetRequestConfigData
} from "./_SpotFleetRequestConfigData";

/**
 * <p>Describes a Spot Fleet request.</p>
 */
export interface _SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request. If there is an error, the status is <code>error</code>. After all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>. If the size of the fleet is decreased, the status is <code>pending_termination</code> while Spot Instances are terminating.</p>
   */
  ActivityStatus?:
    | "error"
    | "pending_fulfillment"
    | "pending_termination"
    | "fulfilled"
    | string;

  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: _SpotFleetRequestConfigData;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?:
    | "submitted"
    | "active"
    | "cancelled"
    | "failed"
    | "cancelled_running"
    | "cancelled_terminating"
    | "modifying"
    | string;
}

export interface _UnmarshalledSpotFleetRequestConfig
  extends _SpotFleetRequestConfig {
  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: _UnmarshalledSpotFleetRequestConfigData;
}
