// smithy-typescript generated code
import type { ActionType, Feature, FilterName, MatchOption, Severity } from "./enums";

/**
 * Describes a filter that returns a more specific list of recommended actions.
 *
 * @public
 */
export interface ActionFilter {
  /**
   * The category to filter on. Valid values are `FEATURE` for feature type, `SEVERITY` for severity level, and `TYPE` for recommendation type.
   *
   * @public
   */
  key: FilterName | undefined;

  /**
   * Specifies how to apply the filter. Use `EQUALS` to include matching results or `NOT_EQUALS` to exclude matching results.
   *
   * @public
   */
  matchOption: MatchOption | undefined;

  /**
   * One or more values to match against the specified key.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Enables filtering of results based on specified action criteria. You can define multiple action filters to refine results using combinations of feature type, severity level, and recommendation type.
 *
 * @public
 */
export interface RequestFilter {
  /**
   * A list of action filters that define criteria for filtering results. Each filter specifies a key, match option, and corresponding values to filter on.
   *
   * @public
   */
  actions?: ActionFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsRequest {
  /**
   * The criteria that you want all returned recommended actions to match.
   *
   * @public
   */
  filter?: RequestFilter | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a specific recommended action.
 *
 * @public
 */
export interface RecommendedAction {
  /**
   * The ID for the recommended action.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of action you can take by adopting the recommended action.
   *
   * @public
   */
  type?: ActionType | undefined;

  /**
   * The account that the recommended action is for.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The severity associated with the recommended action.
   *
   * @public
   */
  severity?: Severity | undefined;

  /**
   * The feature associated with the recommended action.
   *
   * @public
   */
  feature?: Feature | undefined;

  /**
   * Context that applies to the recommended action.
   *
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * The possible next steps to execute the recommended action.
   *
   * @public
   */
  nextSteps?: string[] | undefined;

  /**
   * The time when the recommended action status was last updated.
   *
   * @public
   */
  lastUpdatedTimeStamp?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsResponse {
  /**
   * The list of recommended actions that satisfy the filter criteria.
   *
   * @public
   */
  recommendedActions: RecommendedAction[] | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides specific details about why a particular field failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Provides the name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provides a message explaining why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}
