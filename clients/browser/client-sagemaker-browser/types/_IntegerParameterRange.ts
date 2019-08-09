/**
 * <p>For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.</p>
 */
export interface _IntegerParameterRange {
  /**
   * <p>The name of the hyperparameter to search.</p>
   */
  Name: string;

  /**
   * <p>The minimum value of the hyperparameter to search.</p>
   */
  MinValue: string;

  /**
   * <p>The maximum value of the hyperparameter to search.</p>
   */
  MaxValue: string;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see <a href="http://docs.aws.amazon.com//sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p> <dl> <dt>Auto</dt> <dd> <p>Amazon SageMaker hyperparameter tuning chooses the best scale for the hyperparameter.</p> </dd> <dt>Linear</dt> <dd> <p>Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.</p> </dd> <dt>Logarithmic</dt> <dd> <p>Hyperparemeter tuning searches the values in the hyperparameter range by using a logarithmic scale.</p> <p>Logarithmic scaling works only for ranges that have only values greater than 0.</p> </dd> </dl>
   */
  ScalingType?:
    | "Auto"
    | "Linear"
    | "Logarithmic"
    | "ReverseLogarithmic"
    | string;
}

export type _UnmarshalledIntegerParameterRange = _IntegerParameterRange;
