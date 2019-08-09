/**
 * <p> Details on termination recommendation. </p>
 */
export interface _TerminateRecommendationDetail {
  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;
}

export type _UnmarshalledTerminateRecommendationDetail = _TerminateRecommendationDetail;
