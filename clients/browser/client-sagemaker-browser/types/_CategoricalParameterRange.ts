/**
 * <p>A list of categorical hyperparameters to tune.</p>
 */
export interface _CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCategoricalParameterRange
  extends _CategoricalParameterRange {
  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  Values: Array<string>;
}
