/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/>
 */
export interface _SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training job.</p> <p>Status might be one of the following secondary statuses:</p> <dl> <dt>InProgress</dt> <dd> <ul> <li> <p> <code>Starting</code> - Starting the training job.</p> </li> <li> <p> <code>Downloading</code> - An optional stage for algorithms that support <code>File</code> training input mode. It indicates that data is being downloaded to the ML storage volumes.</p> </li> <li> <p> <code>Training</code> - Training is in progress.</p> </li> <li> <p> <code>Uploading</code> - Training is complete and the model artifacts are being uploaded to the S3 location.</p> </li> </ul> </dd> <dt>Completed</dt> <dd> <ul> <li> <p> <code>Completed</code> - The training job has completed.</p> </li> </ul> </dd> <dt>Failed</dt> <dd> <ul> <li> <p> <code>Failed</code> - The training job has failed. The reason for the failure is returned in the <code>FailureReason</code> field of <code>DescribeTrainingJobResponse</code>.</p> </li> </ul> </dd> <dt>Stopped</dt> <dd> <ul> <li> <p> <code>MaxRuntimeExceeded</code> - The job stopped because it exceeded the maximum allowed runtime.</p> </li> <li> <p> <code>Stopped</code> - The training job has stopped.</p> </li> </ul> </dd> <dt>Stopping</dt> <dd> <ul> <li> <p> <code>Stopping</code> - Stopping the training job.</p> </li> </ul> </dd> </dl> <p>We no longer support the following secondary statuses:</p> <ul> <li> <p> <code>LaunchingMLInstances</code> </p> </li> <li> <p> <code>PreparingTrainingStack</code> </p> </li> <li> <p> <code>DownloadingTrainingImage</code> </p> </li> </ul>
   */
  Status:
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
   * <p>A timestamp that shows when the training job transitioned to the current secondary status state.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>A detailed description of the progress within a secondary status. </p> <p>Amazon SageMaker provides secondary statuses and status messages that apply to each of them:</p> <dl> <dt>Starting</dt> <dd> <ul> <li> <p>Starting the training job.</p> </li> <li> <p>Launching requested ML instances.</p> </li> <li> <p>Insufficient capacity error from EC2 while launching instances, retrying!</p> </li> <li> <p>Launched instance was unhealthy, replacing it!</p> </li> <li> <p>Preparing the instances for training.</p> </li> </ul> </dd> <dt>Training</dt> <dd> <ul> <li> <p>Downloading the training image.</p> </li> <li> <p>Training image download completed. Training in progress.</p> </li> </ul> </dd> </dl> <important> <p>Status messages are subject to change. Therefore, we recommend not including them in code that programmatically initiates actions. For examples, don't use status messages in if statements.</p> </important> <p>To have an overview of your training job's progress, view <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For example, at the start of a training job, you might see the following:</p> <ul> <li> <p> <code>TrainingJobStatus</code> - InProgress</p> </li> <li> <p> <code>SecondaryStatus</code> - Training</p> </li> <li> <p> <code>StatusMessage</code> - Downloading the training image</p> </li> </ul>
   */
  StatusMessage?: string;
}

export interface _UnmarshalledSecondaryStatusTransition
  extends _SecondaryStatusTransition {
  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary status state.</p>
   */
  StartTime: Date;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;
}
