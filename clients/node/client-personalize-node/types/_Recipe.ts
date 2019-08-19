/**
 * <p>Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. </p>
 */
export interface _Recipe {
  /**
   * <p>The name of the recipe.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   */
  recipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train the model.</p>
   */
  algorithmArn?: string;

  /**
   * <p>The ARN of the FeatureTransformation object.</p>
   */
  featureTransformationArn?: string;

  /**
   * <p>The status of the recipe.</p>
   */
  status?: string;

  /**
   * <p>The description of the recipe.</p>
   */
  description?: string;

  /**
   * <p>The date and time (in Unix format) that the recipe was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>One of the following values:</p> <ul> <li> <p>PERSONALIZED_RANKING</p> </li> <li> <p>RELATED_ITEMS</p> </li> <li> <p>USER_PERSONALIZATION</p> </li> </ul>
   */
  recipeType?: string;

  /**
   * <p>The date and time (in Unix format) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledRecipe extends _Recipe {
  /**
   * <p>The date and time (in Unix format) that the recipe was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix format) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
