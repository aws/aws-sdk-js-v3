import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RightsizingRecommendationSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalRecommendationCount: {
      shape: {
        type: "string"
      }
    },
    EstimatedTotalMonthlySavingsAmount: {
      shape: {
        type: "string"
      }
    },
    SavingsCurrencyCode: {
      shape: {
        type: "string"
      }
    },
    SavingsPercentage: {
      shape: {
        type: "string"
      }
    }
  }
};
