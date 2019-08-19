import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecommendationsInput: _Structure_ = {
  type: "structure",
  required: ["campaignArn"],
  members: {
    campaignArn: {
      shape: {
        type: "string"
      }
    },
    itemId: {
      shape: {
        type: "string"
      }
    },
    userId: {
      shape: {
        type: "string"
      }
    },
    numResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
