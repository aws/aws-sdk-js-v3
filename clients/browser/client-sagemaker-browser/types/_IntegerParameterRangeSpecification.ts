/**
 * <p>Defines the possible values for an integer hyperparameter.</p>
 */
export interface _IntegerParameterRangeSpecification {
  /**
   * <p>The minimum integer value allowed.</p>
   */
  MinValue: string;

  /**
   * <p>The maximum integer value allowed.</p>
   */
  MaxValue: string;
}

export type _UnmarshalledIntegerParameterRangeSpecification = _IntegerParameterRangeSpecification;
