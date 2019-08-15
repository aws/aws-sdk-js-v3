import { _CampaignHook } from "./_CampaignHook";
import { _CampaignLimits } from "./_CampaignLimits";
import { _QuietTime } from "./_QuietTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WriteApplicationSettingsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CampaignHook: {
      shape: _CampaignHook
    },
    CloudWatchMetricsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    Limits: {
      shape: _CampaignLimits
    },
    QuietTime: {
      shape: _QuietTime
    }
  }
};
