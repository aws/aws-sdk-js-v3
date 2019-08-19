import {
  _SpotMarketOptions,
  _UnmarshalledSpotMarketOptions
} from "./_SpotMarketOptions";

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 */
export interface _InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: "spot" | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _SpotMarketOptions;
}

export interface _UnmarshalledInstanceMarketOptionsRequest
  extends _InstanceMarketOptionsRequest {
  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: _UnmarshalledSpotMarketOptions;
}
