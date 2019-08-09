/**
 * <p>Defines the possible values for a categorical hyperparameter.</p>
 */
export interface _CategoricalParameterRangeSpecification {
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCategoricalParameterRangeSpecification
  extends _CategoricalParameterRangeSpecification {
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   */
  Values: Array<string>;
}
