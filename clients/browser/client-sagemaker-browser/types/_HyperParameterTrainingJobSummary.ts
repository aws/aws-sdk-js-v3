import {
  _FinalHyperParameterTuningJobObjectiveMetric,
  _UnmarshalledFinalHyperParameterTuningJobObjectiveMetric
} from "./_FinalHyperParameterTuningJobObjectiveMetric";

/**
 * <p>Specifies summary information about a training job.</p>
 */
export interface _HyperParameterTrainingJobSummary {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date | string | number;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date | string | number;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>A list of the hyperparameters for which you specified ranges to search.</p>
   */
  TunedHyperParameters: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The reason that the training job failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the value of the objective metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: _FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p> <ul> <li> <p>Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p> </li> </ul> <ul> <li> <p>Pending: The training job is in progress and evaluation of its final objective metric is pending.</p> </li> </ul> <ul> <li> <p>Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p> </li> </ul>
   */
  ObjectiveStatus?: "Succeeded" | "Pending" | "Failed" | string;
}

export interface _UnmarshalledHyperParameterTrainingJobSummary
  extends _HyperParameterTrainingJobSummary {
  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A list of the hyperparameters for which you specified ranges to search.</p>
   */
  TunedHyperParameters: { [key: string]: string };

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the value of the objective metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: _UnmarshalledFinalHyperParameterTuningJobObjectiveMetric;
}
