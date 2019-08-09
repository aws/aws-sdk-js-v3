/**
 * <p>Provides the name and range of an integer-valued hyperparameter.</p>
 */
export interface _IntegerHyperParameterRange {
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

export type _UnmarshalledIntegerHyperParameterRange = _IntegerHyperParameterRange;
