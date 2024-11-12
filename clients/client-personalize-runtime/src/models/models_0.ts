// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PersonalizeRuntimeServiceException as __BaseException } from "./PersonalizeRuntimeServiceException";

/**
 * <p>An object that identifies an action.</p>
 *          <p>The  API returns a list of
 *       <code>PredictedAction</code>s.</p>
 * @public
 */
export interface PredictedAction {
  /**
   * <p>The ID of the recommended action.</p>
   * @public
   */
  actionId?: string | undefined;

  /**
   * <p>The score of the recommended action. For information about action scores, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/how-action-recommendation-scoring-works.html">How action recommendation scoring works</a>.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * @public
 */
export interface GetActionRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for getting action recommendations. This campaign must deploy a solution version trained with a PERSONALIZED_ACTIONS recipe.</p>
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * <p>The user ID of the user to provide action recommendations for.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The number of results to return. The default is 5. The maximum is 100.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The ARN of the filter to apply to the returned recommendations. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   *          <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case)
   *       as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *     </p>
   *          <p>For filter expressions that use an <code>INCLUDE</code> element to include actions,
   *     you must provide values for all parameters that are defined in the expression. For
   *     filters with expressions that use an <code>EXCLUDE</code> element to exclude actions, you
   *       can omit the <code>filter-values</code>. In this case, Amazon Personalize doesn't use that portion of
   *     the expression to filter recommendations.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>
   * @public
   */
  filterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetActionRecommendationsResponse {
  /**
   * <p>A list of action recommendations sorted in descending order by prediction score. There can be a maximum of 100 actions
   *       in the list. For information about action scores, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/how-action-recommendation-scoring-works.html">How action recommendation scoring
   *       works</a>.</p>
   * @public
   */
  actionList?: PredictedAction[] | undefined;

  /**
   * <p>The ID of the recommendation.</p>
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * <p>Provide a valid value for the field or parameter.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetPersonalizedRankingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for generating the personalized
   *       ranking.</p>
   * @public
   */
  campaignArn: string | undefined;

  /**
   * <p>A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset,
   *       the item is appended to the end of the reranked list. If you are including
   *       metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500.</p>
   * @public
   */
  inputList: string[] | undefined;

  /**
   * <p>The user for which you want the campaign to provide a personalized ranking.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type.</p>
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case)
   *       as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *     </p>
   *          <p>For filter expressions that use an <code>INCLUDE</code> element to include items,
   *       you must provide values for all parameters that are defined in the expression. For
   *       filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you
   *       can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of
   *       the expression to filter recommendations.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   * @public
   */
  filterValues?: Record<string, string> | undefined;

  /**
   * <p>If you enabled metadata in recommendations when you created or updated the campaign, specify metadata columns from your Items dataset to include
   *       in the personalized ranking.
   *       The map key is <code>ITEMS</code> and the value is a list of column names from your Items dataset.
   *       The maximum number of columns you can provide is 10.</p>
   *          <p>
   *       For information about enabling metadata for a campaign, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata">Enabling metadata in recommendations for a campaign</a>.
   *     </p>
   * @public
   */
  metadataColumns?: Record<string, string[]> | undefined;
}

/**
 * <p>An object that identifies an item.</p>
 *          <p>The  and  APIs return a list of
 *       <code>PredictedItem</code>s.</p>
 * @public
 */
export interface PredictedItem {
  /**
   * <p>The recommended item ID.</p>
   * @public
   */
  itemId?: string | undefined;

  /**
   * <p>A numeric representation of the model's certainty that the item will be the next user
   *       selection. For more information on scoring logic, see <a>how-scores-work</a>.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>The name of the promotion that included the predicted item.</p>
   * @public
   */
  promotionName?: string | undefined;

  /**
   * <p>Metadata about the item from your Items dataset.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>If you use User-Personalization-v2, a list of reasons for why the item was included in recommendations. Possible reasons include the following:</p>
   *          <ul>
   *             <li>
   *                <p>Promoted item - Indicates the item was included as part of a promotion that you applied in your recommendation request.</p>
   *             </li>
   *             <li>
   *                <p>Exploration - Indicates the item was included with exploration.
   *           With exploration, recommendations include items with less interactions data or relevance for the user.
   *           For more information about exploration, see
   *           <a href="https://docs.aws.amazon.com/personalize/latest/dg/use-case-recipe-features.html#about-exploration">Exploration</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Popular item - Indicates the item was included as a placeholder popular item.
   *           If you use a filter, depending on how many recommendations the filter removes,
   *            Amazon Personalize might add placeholder items to meet the <code>numResults</code> for your
   *           recommendation request. These items are popular items, based on interactions data, that satisfy your filter criteria.
   *           They don't have a relevance score for the user.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  reason?: string[] | undefined;
}

/**
 * @public
 */
export interface GetPersonalizedRankingResponse {
  /**
   * <p>A list of items in order of most likely interest to the user. The maximum is 500.</p>
   * @public
   */
  personalizedRanking?: PredictedItem[] | undefined;

  /**
   * <p>The ID of the recommendation.</p>
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * <p>Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.</p>
 * @public
 */
export interface Promotion {
  /**
   * <p>The name of the promotion.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The percentage of recommended items to apply the promotion to.</p>
   * @public
   */
  percentPromotedItems?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter used by the promotion. This filter defines the criteria for promoted items. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/promoting-items.html#promotion-filters">Promotion filters</a>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The values to use when promoting items.
   *       For each placeholder parameter in your promotion's filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *     </p>
   *          <p>For filter expressions that use an <code>INCLUDE</code> element to include items,
   *       you must provide values for all parameters that are defined in the expression. For
   *       filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you
   *       can omit the <code>filter-values</code>. In this case, Amazon Personalize doesn't use that portion of
   *       the expression to filter recommendations.</p>
   *          <p>For more information on creating filters, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>
   * @public
   */
  filterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.</p>
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * <p>The item ID to provide recommendations for.</p>
   *          <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
   * @public
   */
  itemId?: string | undefined;

  /**
   * <p>The user ID to provide recommendations for.</p>
   *          <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The number of results to return. The default is 25. If you are including
   *       metadata in recommendations, the maximum is 50. Otherwise, the maximum is 500.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type.</p>
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the filter to apply to the returned recommendations. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   *          <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case)
   *       as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma.
   *     </p>
   *          <p>For filter expressions that use an <code>INCLUDE</code> element to include items,
   *     you must provide values for all parameters that are defined in the expression. For
   *     filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you
   *       can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of
   *     the expression to filter recommendations.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>
   * @public
   */
  filterValues?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you
   *     created a Domain dataset group with a recommender for a domain use case.</p>
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * <p>The promotions to apply to the recommendation request.
   *       A promotion defines additional business rules that apply to a configurable subset of recommended items.</p>
   * @public
   */
  promotions?: Promotion[] | undefined;

  /**
   * <p>If you enabled metadata in recommendations when you created or updated the campaign or recommender, specify the metadata columns from your Items dataset to include in item recommendations.
   *       The map key is <code>ITEMS</code> and the value is a list of column names from your Items dataset.
   *     The maximum number of columns you can provide is 10.</p>
   *          <p>
   *       For information about enabling metadata for a campaign, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata">Enabling metadata in recommendations for a campaign</a>.
   *       For information about enabling metadata for a recommender, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-recommenders.html#create-recommender-return-metadata">Enabling metadata in recommendations for a recommender</a>.
   *     </p>
   * @public
   */
  metadataColumns?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * <p>A list of recommendations sorted in descending order by prediction score. There can be a
   *       maximum of 500 items in the list.</p>
   * @public
   */
  itemList?: PredictedItem[] | undefined;

  /**
   * <p>The ID of the recommendation.</p>
   * @public
   */
  recommendationId?: string | undefined;
}

/**
 * @internal
 */
export const GetActionRecommendationsRequestFilterSensitiveLog = (obj: GetActionRecommendationsRequest): any => ({
  ...obj,
  ...(obj.filterValues && { filterValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPersonalizedRankingRequestFilterSensitiveLog = (obj: GetPersonalizedRankingRequest): any => ({
  ...obj,
  ...(obj.context && { context: SENSITIVE_STRING }),
  ...(obj.filterValues && { filterValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PredictedItemFilterSensitiveLog = (obj: PredictedItem): any => ({
  ...obj,
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPersonalizedRankingResponseFilterSensitiveLog = (obj: GetPersonalizedRankingResponse): any => ({
  ...obj,
  ...(obj.personalizedRanking && {
    personalizedRanking: obj.personalizedRanking.map((item) => PredictedItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PromotionFilterSensitiveLog = (obj: Promotion): any => ({
  ...obj,
  ...(obj.filterValues && { filterValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRecommendationsRequestFilterSensitiveLog = (obj: GetRecommendationsRequest): any => ({
  ...obj,
  ...(obj.context && { context: SENSITIVE_STRING }),
  ...(obj.filterValues && { filterValues: SENSITIVE_STRING }),
  ...(obj.promotions && { promotions: obj.promotions.map((item) => PromotionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetRecommendationsResponseFilterSensitiveLog = (obj: GetRecommendationsResponse): any => ({
  ...obj,
  ...(obj.itemList && { itemList: obj.itemList.map((item) => PredictedItemFilterSensitiveLog(item)) }),
});
