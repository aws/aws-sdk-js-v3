import { _LaunchTemplateSpotMarketOptions } from "./_LaunchTemplateSpotMarketOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateInstanceMarketOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MarketType: {
      shape: {
        type: "string"
      },
      locationName: "marketType"
    },
    SpotOptions: {
      shape: _LaunchTemplateSpotMarketOptions,
      locationName: "spotOptions"
    }
  }
};
