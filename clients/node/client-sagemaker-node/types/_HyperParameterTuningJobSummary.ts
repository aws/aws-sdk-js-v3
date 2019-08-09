import {
  _TrainingJobStatusCounters,
  _UnmarshalledTrainingJobStatusCounters
} from "./_TrainingJobStatusCounters";
import {
  _ObjectiveStatusCounters,
  _UnmarshalledObjectiveStatusCounters
} from "./_ObjectiveStatusCounters";
import {
  _ResourceLimits,
  _UnmarshalledResourceLimits
} from "./_ResourceLimits";

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface _HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string;

  /**
   * <p>The status of the tuning job.</p>
   */
  HyperParameterTuningJobStatus:
    | "Completed"
    | "InProgress"
    | "Failed"
    | "Stopped"
    | "Stopping"
    | string;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to use for each iteration. Currently, the only valid value is Bayesian.</p>
   */
  Strategy: "Bayesian" | "Random" | string;

  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date | string | number;

  /**
   * <p>The date and time that the tuning job was modified.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: _TrainingJobStatusCounters;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.</p>
   */
  ObjectiveStatusCounters: _ObjectiveStatusCounters;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: _ResourceLimits;
}

export interface _UnmarshalledHyperParameterTuningJobSummary
  extends _HyperParameterTuningJobSummary {
  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the tuning job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: _UnmarshalledTrainingJobStatusCounters;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.</p>
   */
  ObjectiveStatusCounters: _UnmarshalledObjectiveStatusCounters;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: _UnmarshalledResourceLimits;
}
