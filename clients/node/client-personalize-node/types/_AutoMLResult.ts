/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.</p>
 */
export interface _AutoMLResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the best recipe.</p>
   */
  bestRecipeArn?: string;
}

export type _UnmarshalledAutoMLResult = _AutoMLResult;
