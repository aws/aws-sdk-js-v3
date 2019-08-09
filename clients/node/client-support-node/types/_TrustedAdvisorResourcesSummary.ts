/**
 * <p>Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. </p>
 */
export interface _TrustedAdvisorResourcesSummary {
  /**
   * <p>The number of AWS resources that were analyzed by the Trusted Advisor check.</p>
   */
  resourcesProcessed: number;

  /**
   * <p>The number of AWS resources that were flagged (listed) by the Trusted Advisor check.</p>
   */
  resourcesFlagged: number;

  /**
   * <p>The number of AWS resources ignored by Trusted Advisor because information was unavailable.</p>
   */
  resourcesIgnored: number;

  /**
   * <p>The number of AWS resources ignored by Trusted Advisor because they were marked as suppressed by the user.</p>
   */
  resourcesSuppressed: number;
}

export type _UnmarshalledTrustedAdvisorResourcesSummary = _TrustedAdvisorResourcesSummary;
