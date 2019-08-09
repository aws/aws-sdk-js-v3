import {
  _TrustedAdvisorResourcesSummary,
  _UnmarshalledTrustedAdvisorResourcesSummary
} from "./_TrustedAdvisorResourcesSummary";
import {
  _TrustedAdvisorCategorySpecificSummary,
  _UnmarshalledTrustedAdvisorCategorySpecificSummary
} from "./_TrustedAdvisorCategorySpecificSummary";

/**
 * <p>A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.</p>
 */
export interface _TrustedAdvisorCheckSummary {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string;

  /**
   * <p>The time of the last refresh of the check.</p>
   */
  timestamp: string;

  /**
   * <p>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".</p>
   */
  status: string;

  /**
   * <p>Specifies whether the Trusted Advisor check has flagged resources.</p>
   */
  hasFlaggedResources?: boolean;

  /**
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. </p>
   */
  resourcesSummary: _TrustedAdvisorResourcesSummary;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.</p>
   */
  categorySpecificSummary: _TrustedAdvisorCategorySpecificSummary;
}

export interface _UnmarshalledTrustedAdvisorCheckSummary
  extends _TrustedAdvisorCheckSummary {
  /**
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. </p>
   */
  resourcesSummary: _UnmarshalledTrustedAdvisorResourcesSummary;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.</p>
   */
  categorySpecificSummary: _UnmarshalledTrustedAdvisorCategorySpecificSummary;
}
