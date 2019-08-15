import { List as _List_ } from "@aws-sdk/types";
import { _CampaignSummary } from "./_CampaignSummary";

export const _Campaigns: _List_ = {
  type: "list",
  member: {
    shape: _CampaignSummary
  }
};
