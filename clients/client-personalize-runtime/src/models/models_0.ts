// smithy-typescript generated code
/**
 * An object that identifies an action.
 *
 * The API returns a list of `PredictedAction`s.
 *
 * @public
 */
export interface PredictedAction {
  /**
   * The ID of the recommended action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * The score of the recommended action. For information about action scores, see [How action recommendation scoring works](https://docs.aws.amazon.com/personalize/latest/dg/how-action-recommendation-scoring-works.html).
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * @public
 */
export interface GetActionRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign to use for getting action recommendations. This campaign must deploy a solution version trained with a PERSONALIZED_ACTIONS recipe.
   *
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * The user ID of the user to provide action recommendations for.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The number of results to return. The default is 5. The maximum is 100.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The ARN of the filter to apply to the returned recommendations. For more information, see [Filtering Recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * When using this parameter, be sure the filter resource is `ACTIVE`.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * For filter expressions that use an `INCLUDE` element to include actions, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an `EXCLUDE` element to exclude actions, you can omit the `filter-values`. In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.
   *
   * For more information, see [Filtering recommendations and user segments](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * @public
   */
  filterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetActionRecommendationsResponse {
  /**
   * A list of action recommendations sorted in descending order by prediction score. There can be a maximum of 100 actions in the list. For information about action scores, see [How action recommendation scoring works](https://docs.aws.amazon.com/personalize/latest/dg/how-action-recommendation-scoring-works.html).
   *
   * @public
   */
  actionList?: PredictedAction[] | undefined;

  /**
   * The ID of the recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * @public
 */
export interface GetPersonalizedRankingRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
   *
   * @public
   */
  campaignArn: string | undefined;

  /**
   * A list of items (by `itemId`) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. If you are including metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500.
   *
   * @public
   */
  inputList: string[] | undefined;

  /**
   * The user for which you want the campaign to provide a personalized ranking.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
   *
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see [Filtering Recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * For filter expressions that use an `INCLUDE` element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an `EXCLUDE` element to exclude items, you can omit the `filter-values`.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.
   *
   * For more information, see [Filtering Recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * @public
   */
  filterValues?: Record<string, string> | undefined;

  /**
   * If you enabled metadata in recommendations when you created or updated the campaign, specify metadata columns from your Items dataset to include in the personalized ranking. The map key is `ITEMS` and the value is a list of column names from your Items dataset. The maximum number of columns you can provide is 10.
   *
   * For information about enabling metadata for a campaign, see [Enabling metadata in recommendations for a campaign](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata).
   *
   * @public
   */
  metadataColumns?: Record<string, string[]> | undefined;
}

/**
 * An object that identifies an item.
 *
 * The and APIs return a list of `PredictedItem`s.
 *
 * @public
 */
export interface PredictedItem {
  /**
   * The recommended item ID.
   *
   * @public
   */
  itemId?: string | undefined;

  /**
   * A numeric representation of the model's certainty that the item will be the next user selection. For more information on scoring logic, see how-scores-work.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * The name of the promotion that included the predicted item.
   *
   * @public
   */
  promotionName?: string | undefined;

  /**
   * Metadata about the item from your Items dataset.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * If you use User-Personalization-v2, a list of reasons for why the item was included in recommendations. Possible reasons include the following:
   *
   * - Promoted item - Indicates the item was included as part of a promotion that you applied in your recommendation request.
   * - Exploration - Indicates the item was included with exploration. With exploration, recommendations include items with less interactions data or relevance for the user. For more information about exploration, see [Exploration](https://docs.aws.amazon.com/personalize/latest/dg/use-case-recipe-features.html#about-exploration).
   * - Popular item - Indicates the item was included as a placeholder popular item. If you use a filter, depending on how many recommendations the filter removes, Amazon Personalize might add placeholder items to meet the `numResults` for your recommendation request. These items are popular items, based on interactions data, that satisfy your filter criteria. They don't have a relevance score for the user.
   *
   * @public
   */
  reason?: string[] | undefined;
}

/**
 * @public
 */
export interface GetPersonalizedRankingResponse {
  /**
   * A list of items in order of most likely interest to the user. The maximum is 500.
   *
   * @public
   */
  personalizedRanking?: PredictedItem[] | undefined;

  /**
   * The ID of the recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.
 *
 * @public
 */
export interface Promotion {
  /**
   * The name of the promotion.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The percentage of recommended items to apply the promotion to.
   *
   * @public
   */
  percentPromotedItems?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the filter used by the promotion. This filter defines the criteria for promoted items. For more information, see [Promotion filters](https://docs.aws.amazon.com/personalize/latest/dg/promoting-items.html#promotion-filters).
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The values to use when promoting items. For each placeholder parameter in your promotion's filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * For filter expressions that use an `INCLUDE` element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an `EXCLUDE` element to exclude items, you can omit the `filter-values`. In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.
   *
   * For more information on creating filters, see [Filtering recommendations and user segments](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * @public
   */
  filterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
   *
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * The item ID to provide recommendations for.
   *
   * Required for `RELATED_ITEMS` recipe type.
   *
   * @public
   */
  itemId?: string | undefined;

  /**
   * The user ID to provide recommendations for.
   *
   * Required for `USER_PERSONALIZATION` recipe type.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The number of results to return. The default is 25. If you are including metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
   *
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * The ARN of the filter to apply to the returned recommendations. For more information, see [Filtering Recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * When using this parameter, be sure the filter resource is `ACTIVE`.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *
   * For filter expressions that use an `INCLUDE` element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an `EXCLUDE` element to exclude items, you can omit the `filter-values`.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.
   *
   * For more information, see [Filtering recommendations and user segments](https://docs.aws.amazon.com/personalize/latest/dg/filter.html).
   *
   * @public
   */
  filterValues?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you created a Domain dataset group with a recommender for a domain use case.
   *
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * The promotions to apply to the recommendation request. A promotion defines additional business rules that apply to a configurable subset of recommended items.
   *
   * @public
   */
  promotions?: Promotion[] | undefined;

  /**
   * If you enabled metadata in recommendations when you created or updated the campaign or recommender, specify the metadata columns from your Items dataset to include in item recommendations. The map key is `ITEMS` and the value is a list of column names from your Items dataset. The maximum number of columns you can provide is 10.
   *
   * For information about enabling metadata for a campaign, see [Enabling metadata in recommendations for a campaign](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata). For information about enabling metadata for a recommender, see [Enabling metadata in recommendations for a recommender](https://docs.aws.amazon.com/personalize/latest/dg/creating-recommenders.html#create-recommender-return-metadata).
   *
   * @public
   */
  metadataColumns?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * A list of recommendations sorted in descending order by prediction score. There can be a maximum of 500 items in the list.
   *
   * @public
   */
  itemList?: PredictedItem[] | undefined;

  /**
   * The ID of the recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;
}
