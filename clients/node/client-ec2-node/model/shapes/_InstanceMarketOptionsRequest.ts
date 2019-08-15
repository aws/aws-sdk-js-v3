import { _SpotMarketOptions } from "./_SpotMarketOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceMarketOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MarketType: {
      shape: {
        type: "string"
      }
    },
    SpotOptions: {
      shape: _SpotMarketOptions
    }
  }
};
