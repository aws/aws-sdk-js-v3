import {
  _TrustedAdvisorResourcesSummary,
  _UnmarshalledTrustedAdvisorResourcesSummary
} from "./_TrustedAdvisorResourcesSummary";
import {
  _TrustedAdvisorCategorySpecificSummary,
  _UnmarshalledTrustedAdvisorCategorySpecificSummary
} from "./_TrustedAdvisorCategorySpecificSummary";
import {
  _TrustedAdvisorResourceDetail,
  _UnmarshalledTrustedAdvisorResourceDetail
} from "./_TrustedAdvisorResourceDetail";

/**
 * <p>The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.</p>
 */
export interface _TrustedAdvisorCheckResult {
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
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. </p>
   */
  resourcesSummary: _TrustedAdvisorResourcesSummary;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.</p>
   */
  categorySpecificSummary: _TrustedAdvisorCategorySpecificSummary;

  /**
   * <p>The details about each resource listed in the check result.</p>
   */
  flaggedResources:
    | Array<_TrustedAdvisorResourceDetail>
    | Iterable<_TrustedAdvisorResourceDetail>;
}

export interface _UnmarshalledTrustedAdvisorCheckResult
  extends _TrustedAdvisorCheckResult {
  /**
   * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. </p>
   */
  resourcesSummary: _UnmarshalledTrustedAdvisorResourcesSummary;

  /**
   * <p>Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.</p>
   */
  categorySpecificSummary: _UnmarshalledTrustedAdvisorCategorySpecificSummary;

  /**
   * <p>The details about each resource listed in the check result.</p>
   */
  flaggedResources: Array<_UnmarshalledTrustedAdvisorResourceDetail>;
}
