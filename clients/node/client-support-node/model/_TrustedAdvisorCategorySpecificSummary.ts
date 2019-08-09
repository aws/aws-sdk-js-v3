import { _TrustedAdvisorCostOptimizingSummary } from "./_TrustedAdvisorCostOptimizingSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCategorySpecificSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    costOptimizing: {
      shape: _TrustedAdvisorCostOptimizingSummary
    }
  }
};
