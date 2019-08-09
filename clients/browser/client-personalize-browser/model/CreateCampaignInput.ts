import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCampaignInput: _Structure_ = {
  type: "structure",
  required: ["name", "solutionVersionArn", "minProvisionedTPS"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
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
