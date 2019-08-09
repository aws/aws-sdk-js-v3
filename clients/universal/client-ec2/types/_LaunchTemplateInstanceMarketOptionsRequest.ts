import {
  _LaunchTemplateSpotMarketOptionsRequest,
  _UnmarshalledLaunchTemplateSpotMarketOptionsRequest
} from "./_LaunchTemplateSpotMarketOptionsRequest";

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface _LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: "spot" | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _LaunchTemplateSpotMarketOptionsRequest;
}

export interface _UnmarshalledLaunchTemplateInstanceMarketOptionsRequest
  extends _LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _UnmarshalledLaunchTemplateSpotMarketOptionsRequest;
}
