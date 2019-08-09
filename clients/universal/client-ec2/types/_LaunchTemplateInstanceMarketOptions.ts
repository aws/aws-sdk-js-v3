import {
  _LaunchTemplateSpotMarketOptions,
  _UnmarshalledLaunchTemplateSpotMarketOptions
} from "./_LaunchTemplateSpotMarketOptions";

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface _LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   */
  MarketType?: "spot" | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _LaunchTemplateSpotMarketOptions;
}

export interface _UnmarshalledLaunchTemplateInstanceMarketOptions
  extends _LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _UnmarshalledLaunchTemplateSpotMarketOptions;
}
