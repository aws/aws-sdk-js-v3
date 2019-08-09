/**
 * <p>A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase.</p>
 */
export interface _ReservationPurchaseRecommendationSummary {
  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a month.</p>
   */
  TotalEstimatedMonthlySavingsAmount?: string;

  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a month, as a percentage of your costs.</p>
   */
  TotalEstimatedMonthlySavingsPercentage?: string;

  /**
   * <p>The currency code used for this recommendation.</p>
   */
  CurrencyCode?: string;
}

export type _UnmarshalledReservationPurchaseRecommendationSummary = _ReservationPurchaseRecommendationSummary;
