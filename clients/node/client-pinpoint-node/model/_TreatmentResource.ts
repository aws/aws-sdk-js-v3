import { _MessageConfiguration } from "./_MessageConfiguration";
import { _Schedule } from "./_Schedule";
import { _CampaignState } from "./_CampaignState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TreatmentResource: _Structure_ = {
  type: "structure",
  required: ["Id", "SizePercent"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    MessageConfiguration: {
      shape: _MessageConfiguration
    },
    Schedule: {
      shape: _Schedule
    },
    SizePercent: {
      shape: {
        type: "integer"
      }
    },
    State: {
      shape: _CampaignState
    },
    TreatmentDescription: {
      shape: {
        type: "string"
      }
    },
    TreatmentName: {
      shape: {
        type: "string"
      }
    }
  }
};
