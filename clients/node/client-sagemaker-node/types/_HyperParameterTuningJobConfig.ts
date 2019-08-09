import {
  _HyperParameterTuningJobObjective,
  _UnmarshalledHyperParameterTuningJobObjective
} from "./_HyperParameterTuningJobObjective";
import {
  _ResourceLimits,
  _UnmarshalledResourceLimits
} from "./_ResourceLimits";
import {
  _ParameterRanges,
  _UnmarshalledParameterRanges
} from "./_ParameterRanges";

/**
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface _HyperParameterTuningJobConfig {
  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training job it launches. To use the Bayesian search stategy, set this to <code>Bayesian</code>. To randomly search, set it to <code>Random</code>. For information about search strategies, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: "Bayesian" | "Random" | string;

  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the objective metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: _HyperParameterTuningJobObjective;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs for this tuning job.</p>
   */
  ResourceLimits: _ResourceLimits;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of hyperparameters that this tuning job searches.</p>
   */
  ParameterRanges?: _ParameterRanges;

  /**
   * <p>Specifies whether to use early stopping for training jobs launched by the hyperparameter tuning job. This can be one of the following values (the default value is <code>OFF</code>):</p> <dl> <dt>OFF</dt> <dd> <p>Training jobs launched by the hyperparameter tuning job do not use early stopping.</p> </dd> <dt>AUTO</dt> <dd> <p>Amazon SageMaker stops training jobs launched by the hyperparameter tuning job when they are unlikely to perform better than previously completed training jobs. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p> </dd> </dl>
   */
  TrainingJobEarlyStoppingType?: "Off" | "Auto" | string;
}

export interface _UnmarshalledHyperParameterTuningJobConfig
  extends _HyperParameterTuningJobConfig {
  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the objective metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: _UnmarshalledHyperParameterTuningJobObjective;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs for this tuning job.</p>
   */
  ResourceLimits: _UnmarshalledResourceLimits;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of hyperparameters that this tuning job searches.</p>
   */
  ParameterRanges?: _UnmarshalledParameterRanges;
}
