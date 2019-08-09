/**
 * <p>Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface _DefaultContinuousHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   */
  maxValue?: number;

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   */
  isTunable?: boolean;
}

export type _UnmarshalledDefaultContinuousHyperParameterRange = _DefaultContinuousHyperParameterRange;
