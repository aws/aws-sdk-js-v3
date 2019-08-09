import {
  _IntegerParameterRangeSpecification,
  _UnmarshalledIntegerParameterRangeSpecification
} from "./_IntegerParameterRangeSpecification";
import {
  _ContinuousParameterRangeSpecification,
  _UnmarshalledContinuousParameterRangeSpecification
} from "./_ContinuousParameterRangeSpecification";
import {
  _CategoricalParameterRangeSpecification,
  _UnmarshalledCategoricalParameterRangeSpecification
} from "./_CategoricalParameterRangeSpecification";

/**
 * <p>Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.</p>
 */
export interface _ParameterRange {
  /**
   * <p>A <code>IntegerParameterRangeSpecification</code> object that defines the possible values for an integer hyperparameter.</p>
   */
  IntegerParameterRangeSpecification?: _IntegerParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible values for a continuous hyperparameter.</p>
   */
  ContinuousParameterRangeSpecification?: _ContinuousParameterRangeSpecification;

  /**
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible values for a categorical hyperparameter.</p>
   */
  CategoricalParameterRangeSpecification?: _CategoricalParameterRangeSpecification;
}

export interface _UnmarshalledParameterRange extends _ParameterRange {
  /**
   * <p>A <code>IntegerParameterRangeSpecification</code> object that defines the possible values for an integer hyperparameter.</p>
   */
  IntegerParameterRangeSpecification?: _UnmarshalledIntegerParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible values for a continuous hyperparameter.</p>
   */
  ContinuousParameterRangeSpecification?: _UnmarshalledContinuousParameterRangeSpecification;

  /**
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible values for a categorical hyperparameter.</p>
   */
  CategoricalParameterRangeSpecification?: _UnmarshalledCategoricalParameterRangeSpecification;
}
