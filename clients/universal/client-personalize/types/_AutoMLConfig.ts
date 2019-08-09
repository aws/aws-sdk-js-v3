/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.</p>
 */
export interface _AutoMLConfig {
  /**
   * <p>The metric to optimize.</p>
   */
  metricName?: string;

  /**
   * <p>The list of candidate recipes.</p>
   */
  recipeList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAutoMLConfig extends _AutoMLConfig {
  /**
   * <p>The list of candidate recipes.</p>
   */
  recipeList?: Array<string>;
}
