// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { PersonalizeRuntimeServiceException as __BaseException } from "./PersonalizeRuntimeServiceException";

export interface GetPersonalizedRankingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for generating the personalized
   *       ranking.</p>
   */
  campaignArn: string | undefined;

  /**
   * <p>A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset,
   *       the item is appended to the end of the reranked list. The maximum is 500.</p>
   */
  inputList: string[] | undefined;

  /**
   * <p>The user for which you want the campaign to provide a personalized ranking.</p>
   */
  userId: string | undefined;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type.</p>
   */
  context?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user.
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   */
  filterArn?: string;

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
   */
  filterValues?: Record<string, string>;
}

/**
 * <p>An object that identifies an item.</p>
 *          <p>The  and  APIs return a list of
 *       <code>PredictedItem</code>s.</p>
 */
export interface PredictedItem {
  /**
   * <p>The recommended item ID.</p>
   */
  itemId?: string;

  /**
   * <p>A numeric representation of the model's certainty that the item will be the next user
   *       selection. For more information on scoring logic, see <a>how-scores-work</a>.</p>
   */
  score?: number;

  /**
   * <p>The name of the promotion that included the predicted item.</p>
   */
  promotionName?: string;
}

export interface GetPersonalizedRankingResponse {
  /**
   * <p>A list of items in order of most likely interest to the user. The maximum is 500.</p>
   */
  personalizedRanking?: PredictedItem[];

  /**
   * <p>The ID of the recommendation.</p>
   */
  recommendationId?: string;
}

/**
 * <p>Provide a valid value for the field or parameter.</p>
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
 * <p>Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.</p>
 */
export interface Promotion {
  /**
   * <p>The name of the promotion.</p>
   */
  name?: string;

  /**
   * <p>The percentage of recommended items to apply the promotion to.</p>
   */
  percentPromotedItems?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter used by the promotion. This filter defines the criteria for promoted items. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/promoting-items.html#promotion-filters">Promotion filters</a>.</p>
   */
  filterArn?: string;

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
   */
  filterValues?: Record<string, string>;
}

export interface GetRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.</p>
   */
  campaignArn?: string;

  /**
   * <p>The item ID to provide recommendations for.</p>
   *          <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
   */
  itemId?: string;

  /**
   * <p>The user ID to provide recommendations for.</p>
   *          <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
   */
  userId?: string;

  /**
   * <p>The number of results to return. The default is 25. The maximum is 500.</p>
   */
  numResults?: number;

  /**
   * <p>The contextual metadata to use when getting recommendations. Contextual metadata includes
   *       any interaction information that might be relevant when getting a user's recommendations, such
   *       as the user's current location or device type.</p>
   */
  context?: Record<string, string>;

  /**
   * <p>The ARN of the filter to apply to the returned recommendations. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
   *          <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
   */
  filterArn?: string;

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
   */
  filterValues?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to use to get recommendations. Provide a recommender ARN if you
   *     created a Domain dataset group with a recommender for a domain use case.</p>
   */
  recommenderArn?: string;

  /**
   * <p>The promotions to apply to the recommendation request.
   *       A promotion defines additional business rules that apply to a configurable subset of recommended items.</p>
   */
  promotions?: Promotion[];
}

export interface GetRecommendationsResponse {
  /**
   * <p>A list of recommendations sorted in descending order by prediction score. There can be a
   *       maximum of 500 items in the list.</p>
   */
  itemList?: PredictedItem[];

  /**
   * <p>The ID of the recommendation.</p>
   */
  recommendationId?: string;
}

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
});

/**
 * @internal
 */
export const GetPersonalizedRankingResponseFilterSensitiveLog = (obj: GetPersonalizedRankingResponse): any => ({
  ...obj,
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
});
