import {
  _TrustedAdvisorCostOptimizingSummary,
  _UnmarshalledTrustedAdvisorCostOptimizingSummary
} from "./_TrustedAdvisorCostOptimizingSummary";

/**
 * <p>The container for summary information that relates to the category of the Trusted Advisor check.</p>
 */
export interface _TrustedAdvisorCategorySpecificSummary {
  /**
   * <p>The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.</p>
   */
  costOptimizing?: _TrustedAdvisorCostOptimizingSummary;
}

export interface _UnmarshalledTrustedAdvisorCategorySpecificSummary
  extends _TrustedAdvisorCategorySpecificSummary {
  /**
   * <p>The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.</p>
   */
  costOptimizing?: _UnmarshalledTrustedAdvisorCostOptimizingSummary;
}
