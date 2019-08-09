import { _UnmarshalledModelArtifacts } from "./_ModelArtifacts";
import { _UnmarshalledAlgorithmSpecification } from "./_AlgorithmSpecification";
import { _UnmarshalledChannel } from "./_Channel";
import { _UnmarshalledOutputDataConfig } from "./_OutputDataConfig";
import { _UnmarshalledResourceConfig } from "./_ResourceConfig";
import { _UnmarshalledVpcConfig } from "./_VpcConfig";
import { _UnmarshalledStoppingCondition } from "./_StoppingCondition";
import { _UnmarshalledSecondaryStatusTransition } from "./_SecondaryStatusTransition";
import { _UnmarshalledMetricData } from "./_MetricData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTrainingJobOutput shape
 */
export interface DescribeTrainingJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts. </p>
   */
  ModelArtifacts: _UnmarshalledModelArtifacts;

  /**
   * <p>The status of the training job.</p> <p>Amazon SageMaker provides the following training job statuses:</p> <ul> <li> <p> <code>InProgress</code> - The training is in progress.</p> </li> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> <li> <p> <code>Failed</code> - The training job has failed. To see the reason for the failure, see the <code>FailureReason</code> field in the response to a <code>DescribeTrainingJobResponse</code> call.</p> </li> <li> <p> <code>Stopping</code> - The training job is stopping.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> <p>For more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p> <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of them:</p> <dl> <dt>InProgress</dt> <dd> <ul> <li> <p> <code>Starting</code> - Starting the training job.</p> </li> <li> <p> <code>Downloading</code> - An optional stage for algorithms that support <code>File</code> training input mode. It indicates that data is being downloaded to the ML storage volumes.</p> </li> <li> <p> <code>Training</code> - Training is in progress.</p> </li> <li> <p> <code>Uploading</code> - Training is complete and the model artifacts are being uploaded to the S3 location.</p> </li> </ul> </dd> <dt>Completed</dt> <dd> <ul> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> </ul> </dd> <dt>Failed</dt> <dd> <ul> <li> <p> <code>Failed</code> - The training job has failed. The reason for the failure is returned in the <code>FailureReason</code> field of <code>DescribeTrainingJobResponse</code>.</p> </li> </ul> </dd> <dt>Stopped</dt> <dd> <ul> <li> <p> <code>MaxRuntimeExceeded</code> - The job stopped because it exceeded the maximum allowed runtime.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> </dd> <dt>Stopping</dt> <dd> <ul> <li> <p> <code>Stopping</code> - Stopping the training job.</p> </li> </ul> </dd> </dl> <important> <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p> </important> <p>We no longer support the following secondary statuses:</p> <ul> <li> <p> <code>LaunchingMLInstances</code> </p> </li> <li> <p> <code>PreparingTrainingStack</code> </p> </li> <li> <p> <code>DownloadingTrainingImage</code> </p> </li> </ul>
   */
  SecondaryStatus:
    | "Starting"
    | "LaunchingMLInstances"
    | "PreparingTrainingStack"
    | "Downloading"
    | "DownloadingTrainingImage"
    | "Training"
    | "Uploading"
    | "Stopping"
    | "Stopped"
    | "MaxRuntimeExceeded"
    | "Completed"
    | "Failed"
    | string;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata. </p>
   */
  AlgorithmSpecification: _UnmarshalledAlgorithmSpecification;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel. </p>
   */
  InputDataConfig?: Array<_UnmarshalledChannel>;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are stored. Amazon SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: _UnmarshalledOutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured for model training. </p>
   */
  ResourceConfig: _UnmarshalledResourceConfig;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: _UnmarshalledStoppingCondition;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of <code>TrainingStartTime</code> and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned through.</p>
   */
  SecondaryStatusTransitions?: Array<_UnmarshalledSecondaryStatusTransition>;

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: Array<_UnmarshalledMetricData>;

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose <code>True</code>. If you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.</p> <note> <p>The Semantic Segmentation built-in algorithm does not support network isolation.</p> </note>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training, choose <code>True</code>. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithms in distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
