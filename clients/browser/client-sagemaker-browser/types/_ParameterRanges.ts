import {
  _IntegerParameterRange,
  _UnmarshalledIntegerParameterRange
} from "./_IntegerParameterRange";
import {
  _ContinuousParameterRange,
  _UnmarshalledContinuousParameterRange
} from "./_ContinuousParameterRange";
import {
  _CategoricalParameterRange,
  _UnmarshalledCategoricalParameterRange
} from "./_CategoricalParameterRange";

/**
 * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note>
 */
export interface _ParameterRanges {
  /**
   * <p>The array of <a>IntegerParameterRange</a> objects that specify ranges of integer hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?:
    | Array<_IntegerParameterRange>
    | Iterable<_IntegerParameterRange>;

  /**
   * <p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of continuous hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?:
    | Array<_ContinuousParameterRange>
    | Iterable<_ContinuousParameterRange>;

  /**
   * <p>The array of <a>CategoricalParameterRange</a> objects that specify ranges of categorical hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?:
    | Array<_CategoricalParameterRange>
    | Iterable<_CategoricalParameterRange>;
}

export interface _UnmarshalledParameterRanges extends _ParameterRanges {
  /**
   * <p>The array of <a>IntegerParameterRange</a> objects that specify ranges of integer hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?: Array<_UnmarshalledIntegerParameterRange>;

  /**
   * <p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of continuous hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?: Array<_UnmarshalledContinuousParameterRange>;

  /**
   * <p>The array of <a>CategoricalParameterRange</a> objects that specify ranges of categorical hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?: Array<_UnmarshalledCategoricalParameterRange>;
}
