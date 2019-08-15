import { _LaunchTemplateSpotMarketOptionsRequest } from "./_LaunchTemplateSpotMarketOptionsRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateInstanceMarketOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MarketType: {
      shape: {
        type: "string"
      }
    },
    SpotOptions: {
      shape: _LaunchTemplateSpotMarketOptionsRequest
    }
  }
};
