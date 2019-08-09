/**
 * <p>Metadata for this recommendation set.</p>
 */
export interface _RightsizingRecommendationMetadata {
  /**
   * <p> The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * <p> The time stamp for when Amazon Web Services made this recommendation.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p> How many days of previous usage that Amazon Web Services considers when making this recommendation.</p>
   */
  LookbackPeriodInDays?: "SEVEN_DAYS" | "THIRTY_DAYS" | "SIXTY_DAYS" | string;
}

export type _UnmarshalledRightsizingRecommendationMetadata = _RightsizingRecommendationMetadata;
