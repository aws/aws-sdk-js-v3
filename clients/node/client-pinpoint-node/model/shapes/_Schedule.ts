import { _CampaignEventFilter } from "./_CampaignEventFilter";
import { _QuietTime } from "./_QuietTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Schedule: _Structure_ = {
  type: "structure",
  required: ["StartTime"],
  members: {
    EndTime: {
      shape: {
        type: "string"
      }
    },
    EventFilter: {
      shape: _CampaignEventFilter
    },
    Frequency: {
      shape: {
        type: "string"
      }
    },
    IsLocalTime: {
      shape: {
        type: "boolean"
      }
    },
    QuietTime: {
      shape: _QuietTime
    },
    StartTime: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    }
  }
};
