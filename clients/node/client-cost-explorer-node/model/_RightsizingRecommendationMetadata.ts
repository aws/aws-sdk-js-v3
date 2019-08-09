import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RightsizingRecommendationMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecommendationId: {
      shape: {
        type: "string"
      }
    },
    GenerationTimestamp: {
      shape: {
        type: "string"
      }
    },
    LookbackPeriodInDays: {
      shape: {
        type: "string"
      }
    }
  }
};
