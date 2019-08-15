import { _CampaignUpdateSummary } from "./_CampaignUpdateSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Campaign: _Structure_ = {
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
    solutionVersionArn: {
      shape: {
        type: "string"
      }
    },
    minProvisionedTPS: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
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
    latestCampaignUpdate: {
      shape: _CampaignUpdateSummary
    }
  }
};
