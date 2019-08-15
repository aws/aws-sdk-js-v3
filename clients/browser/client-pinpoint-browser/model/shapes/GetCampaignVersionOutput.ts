import { _CampaignResponse } from "./_CampaignResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignVersionOutput: _Structure_ = {
  type: "structure",
  required: ["CampaignResponse"],
  members: {
    CampaignResponse: {
      shape: _CampaignResponse
    }
  },
  payload: "CampaignResponse"
};
