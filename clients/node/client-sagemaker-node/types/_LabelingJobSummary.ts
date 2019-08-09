import { _LabelCounters, _UnmarshalledLabelCounters } from "./_LabelCounters";
import {
  _LabelingJobOutput,
  _UnmarshalledLabelingJobOutput
} from "./_LabelingJobOutput";
import {
  _LabelingJobInputConfig,
  _UnmarshalledLabelingJobInputConfig
} from "./_LabelingJobInputConfig";

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface _LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was created.</p>
   */
  LabelingJobArn: string;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: _LabelCounters;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the annotations from individual workers into a label for a data object. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: _LabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: _LabelingJobInputConfig;
}

export interface _UnmarshalledLabelingJobSummary extends _LabelingJobSummary {
  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: _UnmarshalledLabelCounters;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: _UnmarshalledLabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: _UnmarshalledLabelingJobInputConfig;
}
