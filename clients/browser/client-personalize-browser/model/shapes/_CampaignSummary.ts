import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    campaignArn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
