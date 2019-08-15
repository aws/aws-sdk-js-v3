import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCostOptimizingSummary: _Structure_ = {
  type: "structure",
  required: ["estimatedMonthlySavings", "estimatedPercentMonthlySavings"],
  members: {
    estimatedMonthlySavings: {
      shape: {
        type: "float"
      }
    },
    estimatedPercentMonthlySavings: {
      shape: {
        type: "float"
      }
    }
  }
};
