import {
  _ParentHyperParameterTuningJob,
  _UnmarshalledParentHyperParameterTuningJob
} from "./_ParentHyperParameterTuningJob";

/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
 */
export interface _HyperParameterTuningJobWarmStartConfig {
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new hyperparameter tuning job. For more information about warm starting a hyperparameter tuning job, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous Hyperparameter Tuning Job as a Starting Point</a>.</p> <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs:
    | Array<_ParentHyperParameterTuningJob>
    | Iterable<_ParentHyperParameterTuningJob>;

  /**
   * <p>Specifies one of the following:</p> <dl> <dt>IDENTICAL_DATA_AND_ALGORITHM</dt> <dd> <p>The new hyperparameter tuning job uses the same input data and training image as the parent tuning jobs. You can change the hyperparameter ranges to search and the maximum number of training jobs that the hyperparameter tuning job launches. You cannot use a new version of the training algorithm, unless the changes in the new version do not affect the algorithm itself. For example, changes that improve logging or adding support for a different data format are allowed. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.</p> </dd> <dt>TRANSFER_LEARNING</dt> <dd> <p>The new hyperparameter tuning job can include input data, hyperparameter ranges, maximum number of concurrent training jobs, and maximum number of training jobs that are different than those of its parent hyperparameter tuning jobs. The training image can also be a different version from the version used in the parent hyperparameter tuning job. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.</p> </dd> </dl>
   */
  WarmStartType: "IdenticalDataAndAlgorithm" | "TransferLearning" | string;
}

export interface _UnmarshalledHyperParameterTuningJobWarmStartConfig
  extends _HyperParameterTuningJobWarmStartConfig {
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new hyperparameter tuning job. For more information about warm starting a hyperparameter tuning job, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous Hyperparameter Tuning Job as a Starting Point</a>.</p> <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: Array<
    _UnmarshalledParentHyperParameterTuningJob
  >;
}
