/**
 * <p>Information about this specific recommendation, such as the time stamp for when AWS made a specific recommendation.</p>
 */
export interface _ReservationPurchaseRecommendationMetadata {
  /**
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * <p>The time stamp for when AWS made this recommendation.</p>
   */
  GenerationTimestamp?: string;
}

export type _UnmarshalledReservationPurchaseRecommendationMetadata = _ReservationPurchaseRecommendationMetadata;
