/**
 * <p>Provides the name and range of a continuous hyperparameter.</p>
 */
export interface _ContinuousHyperParameterRange {
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
}

export type _UnmarshalledContinuousHyperParameterRange = _ContinuousHyperParameterRange;
