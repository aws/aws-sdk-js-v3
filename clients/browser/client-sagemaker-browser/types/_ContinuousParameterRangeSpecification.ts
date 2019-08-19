/**
 * <p>Defines the possible values for a continuous hyperparameter.</p>
 */
export interface _ContinuousParameterRangeSpecification {
  /**
   * <p>The minimum floating-point value allowed.</p>
   */
  MinValue: string;

  /**
   * <p>The maximum floating-point value allowed.</p>
   */
  MaxValue: string;
}

export type _UnmarshalledContinuousParameterRangeSpecification = _ContinuousParameterRangeSpecification;
