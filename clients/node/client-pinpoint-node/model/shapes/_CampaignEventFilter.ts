import { _EventDimensions } from "./_EventDimensions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignEventFilter: _Structure_ = {
  type: "structure",
  required: ["FilterType", "Dimensions"],
  members: {
    Dimensions: {
      shape: _EventDimensions
    },
    FilterType: {
      shape: {
        type: "string"
      }
    }
  }
};
