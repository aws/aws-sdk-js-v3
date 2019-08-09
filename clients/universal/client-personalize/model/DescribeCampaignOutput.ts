import { _Campaign } from "./_Campaign";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCampaignOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    campaign: {
      shape: _Campaign
    }
  }
};
