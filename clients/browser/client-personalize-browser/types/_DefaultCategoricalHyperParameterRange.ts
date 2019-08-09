/**
 * <p>Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface _DefaultCategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: Array<string> | Iterable<string>;

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   */
  isTunable?: boolean;
}

export interface _UnmarshalledDefaultCategoricalHyperParameterRange
  extends _DefaultCategoricalHyperParameterRange {
  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: Array<string>;
}
