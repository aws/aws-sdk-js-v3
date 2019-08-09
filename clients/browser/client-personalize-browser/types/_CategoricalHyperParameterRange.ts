/**
 * <p>Provides the name and range of a categorical hyperparameter.</p>
 */
export interface _CategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCategoricalHyperParameterRange
  extends _CategoricalHyperParameterRange {
  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: Array<string>;
}
