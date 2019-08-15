import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCampaignInput: _Structure_ = {
  type: "structure",
  required: ["campaignArn"],
  members: {
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
    }
  }
};
