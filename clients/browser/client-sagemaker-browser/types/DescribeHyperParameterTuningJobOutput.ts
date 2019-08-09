import { _UnmarshalledHyperParameterTuningJobConfig } from "./_HyperParameterTuningJobConfig";
import { _UnmarshalledHyperParameterTrainingJobDefinition } from "./_HyperParameterTrainingJobDefinition";
import { _UnmarshalledTrainingJobStatusCounters } from "./_TrainingJobStatusCounters";
import { _UnmarshalledObjectiveStatusCounters } from "./_ObjectiveStatusCounters";
import { _UnmarshalledHyperParameterTrainingJobSummary } from "./_HyperParameterTrainingJobSummary";
import { _UnmarshalledHyperParameterTuningJobWarmStartConfig } from "./_HyperParameterTuningJobWarmStartConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeHyperParameterTuningJobOutput shape
 */
export interface DescribeHyperParameterTuningJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: _UnmarshalledHyperParameterTuningJobConfig;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: _UnmarshalledHyperParameterTrainingJobDefinition;

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or Stopped.</p>
   */
  HyperParameterTuningJobStatus:
    | "Completed"
    | "InProgress"
    | "Failed"
    | "Stopped"
    | "Stopping"
    | string;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: _UnmarshalledTrainingJobStatusCounters;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.</p>
   */
  ObjectiveStatusCounters: _UnmarshalledObjectiveStatusCounters;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: _UnmarshalledHyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the <a>TrainingJobSummary</a> for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: _UnmarshalledHyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p>
   */
  WarmStartConfig?: _UnmarshalledHyperParameterTuningJobWarmStartConfig;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
