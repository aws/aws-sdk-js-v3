import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminateRecommendationDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EstimatedMonthlySavings: {
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
