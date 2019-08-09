import {
  _PlacementStatistics,
  _UnmarshalledPlacementStatistics
} from "./_PlacementStatistics";

/**
 * <p>An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.</p>
 */
export interface _IspPlacement {
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>An object that contains inbox placement metrics for a specific email provider.</p>
   */
  PlacementStatistics?: _PlacementStatistics;
}

export interface _UnmarshalledIspPlacement extends _IspPlacement {
  /**
   * <p>An object that contains inbox placement metrics for a specific email provider.</p>
   */
  PlacementStatistics?: _UnmarshalledPlacementStatistics;
}
