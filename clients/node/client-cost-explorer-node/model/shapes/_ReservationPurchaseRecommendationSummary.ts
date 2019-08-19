import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationPurchaseRecommendationSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalEstimatedMonthlySavingsAmount: {
      shape: {
        type: "string"
      }
    },
    TotalEstimatedMonthlySavingsPercentage: {
      shape: {
        type: "string"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    }
  }
};
