/**
 * <p>Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.</p>
 */
export interface _RecipeSummary {
  /**
   * <p>The name of the recipe.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   */
  recipeArn?: string;

  /**
   * <p>The status of the recipe.</p>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the recipe was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledRecipeSummary extends _RecipeSummary {
  /**
   * <p>The date and time (in Unix time) that the recipe was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
