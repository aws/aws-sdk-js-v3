import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComponentConfigurationRecommendationInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName", "ComponentName", "Tier"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    ComponentName: {
      shape: {
        type: "string"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    }
  }
};
