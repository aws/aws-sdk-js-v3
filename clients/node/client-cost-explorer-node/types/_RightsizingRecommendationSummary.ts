/**
 * <p> Summary of rightsizing recommendations </p>
 */
export interface _RightsizingRecommendationSummary {
  /**
   * <p> Total number of instance recommendations.</p>
   */
  TotalRecommendationCount?: string;

  /**
   * <p> Estimated total savings resulting from modifications, on a monthly basis.</p>
   */
  EstimatedTotalMonthlySavingsAmount?: string;

  /**
   * <p> The currency code that Amazon Web Services used to calculate the savings.</p>
   */
  SavingsCurrencyCode?: string;

  /**
   * <p> Savings percentage based on the recommended modifications, relative to the total On Demand costs associated with these instances.</p>
   */
  SavingsPercentage?: string;
}

export type _UnmarshalledRightsizingRecommendationSummary = _RightsizingRecommendationSummary;
