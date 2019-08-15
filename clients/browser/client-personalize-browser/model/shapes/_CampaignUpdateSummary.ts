import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignUpdateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    }
  }
};
