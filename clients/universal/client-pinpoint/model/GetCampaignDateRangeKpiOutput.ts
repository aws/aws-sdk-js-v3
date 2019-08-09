import { _CampaignDateRangeKpiResponse } from "./_CampaignDateRangeKpiResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignDateRangeKpiOutput: _Structure_ = {
  type: "structure",
  required: ["CampaignDateRangeKpiResponse"],
  members: {
    CampaignDateRangeKpiResponse: {
      shape: _CampaignDateRangeKpiResponse
    }
  },
  payload: "CampaignDateRangeKpiResponse"
};
