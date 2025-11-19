// smithy-typescript generated code
import { ActionType, Feature, FilterName, MatchOption, Severity } from "./enums";

/**
 * <p>Describes a filter that returns a more specific list of recommended actions.</p>
 * @public
 */
export interface ActionFilter {
  /**
   * <p>The category to filter on. Valid values are <code>FEATURE</code> for feature type, <code>SEVERITY</code> for severity level, and <code>TYPE</code> for recommendation type.</p>
   * @public
   */
  key: FilterName | undefined;

  /**
   * <p>Specifies how to apply the filter. Use <code>EQUALS</code> to include matching results or <code>NOT_EQUALS</code> to exclude matching results.</p>
   * @public
   */
  matchOption: MatchOption | undefined;

  /**
   * <p>One or more values to match against the specified key.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Enables filtering of results based on specified action criteria. You can define multiple action filters to refine results using combinations of feature type, severity level, and recommendation type.</p>
 * @public
 */
export interface RequestFilter {
  /**
   * <p>A list of action filters that define criteria for filtering results. Each filter specifies a key, match option, and corresponding values to filter on.</p>
   * @public
   */
  actions?: ActionFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsRequest {
  /**
   * <p>The criteria that you want all returned recommended actions to match.</p>
   * @public
   */
  filter?: RequestFilter | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes a specific recommended action.</p>
 * @public
 */
export interface RecommendedAction {
  /**
   * <p>The ID for the recommended action.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of action you can take by adopting the recommended action.</p>
   * @public
   */
  type?: ActionType | undefined;

  /**
   * <p>The account that the recommended action is for.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The severity associated with the recommended action.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>The feature associated with the recommended action.</p>
   * @public
   */
  feature?: Feature | undefined;

  /**
   * <p>Context that applies to the recommended action.</p>
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * <p>The possible next steps to execute the recommended action.</p>
   * @public
   */
  nextSteps?: string[] | undefined;

  /**
   * <p>The time when the recommended action status was last updated.</p>
   * @public
   */
  lastUpdatedTimeStamp?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsResponse {
  /**
   * <p>The list of recommended actions that satisfy the filter criteria.</p>
   * @public
   */
  recommendedActions: RecommendedAction[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Provides specific details about why a particular field failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Provides the name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Provides a message explaining why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}
