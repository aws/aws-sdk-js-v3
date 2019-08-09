/**
 * <p>Filters the results based on the account IDs and regions.</p>
 */
export interface _ConfigRuleComplianceSummaryFilters {
  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export type _UnmarshalledConfigRuleComplianceSummaryFilters = _ConfigRuleComplianceSummaryFilters;
