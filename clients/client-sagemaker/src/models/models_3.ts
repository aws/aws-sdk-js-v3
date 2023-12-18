// smithy-typescript generated code
import {
  ActionSummary,
  AgentVersion,
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmSummary,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppSortKey,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobStepMetadata,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchDataCaptureConfig,
  BatchStrategy,
  CallbackStepMetadata,
  CandidateSortBy,
  CandidateStatus,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  ClusterNodeSummary,
  ClusterSortBy,
  ClusterSummary,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CognitoConfig,
  CompilationJobStatus,
  CompilationJobSummary,
  ConditionStepMetadata,
  ContextSummary,
  MetadataProperties,
  ModelApprovalStatus,
  ModelPackageStatus,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";

import {
  _InstanceType,
  DebugHookConfig,
  DebugRuleConfiguration,
  EdgeOutputConfig,
  ExecutionRoleIdentityConfig,
  ExperimentConfig,
  FeatureDefinition,
  FeatureType,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  InfraCheckConfig,
  LabelingJobInputConfig,
  ModelCardStatus,
  MonitoringScheduleConfig,
  MonitoringType,
  OfflineStoreConfig,
  OnlineStoreConfig,
  ProfilerConfig,
  RecommendationJobType,
  ResourceLimits,
  RetryStrategy,
  UserSettings,
} from "./models_1";

import {
  CustomizedMetricSpecification,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugRuleEvaluationStatus,
  DomainStatus,
  EdgePackagingJobStatus,
  EndpointOutputConfiguration,
  EndpointStatus,
  ExecutionStatus,
  ExperimentSource,
  FeatureGroupStatus,
  FeatureParameter,
  FlowDefinitionStatus,
  HubContentStatus,
  HubContentType,
  HubStatus,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobCompletionDetails,
  HyperParameterTuningJobConsumedResources,
  HyperParameterTuningJobStatus,
  ImageStatus,
  ImageVersionStatus,
  InferenceComponentStatus,
  InferenceExperimentStatus,
  InferenceMetrics,
  LabelCounters,
  LabelingJobOutput,
  LabelingJobStatus,
  LastUpdateStatus,
  MemberDefinition,
  MetricData,
  ModelArtifacts,
  ModelCardExportJobStatus,
  ModelClientConfig,
  ModelConfiguration,
  ModelPackageGroupStatus,
  MonitoringExecutionSummary,
  NotebookInstanceStatus,
  NotificationConfiguration,
  ObjectiveStatusCounters,
  OfflineStoreStatus,
  OfflineStoreStatusValue,
  PipelineExecutionStatus,
  ProductionVariantSummary,
  ProfilerRuleConfiguration,
  RecommendationJobStatus,
  RecommendationMetrics,
  RuleEvaluationStatus,
  ScheduleStatus,
  SourceIpConfig,
  TensorBoardOutputConfig,
  TrainingJobStatus,
  TrainingJobStatusCounters,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
} from "./models_2";

/**
 * @public
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * @public
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * @public
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus;

  /**
   * @public
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * @public
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ProfilingStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type ProfilingStatus = (typeof ProfilingStatus)[keyof typeof ProfilingStatus];

/**
 * @public
 * @enum
 */
export const SecondaryStatus = {
  COMPLETED: "Completed",
  DOWNLOADING: "Downloading",
  DOWNLOADING_TRAINING_IMAGE: "DownloadingTrainingImage",
  FAILED: "Failed",
  INTERRUPTED: "Interrupted",
  LAUNCHING_ML_INSTANCES: "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED: "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED: "MaxWaitTimeExceeded",
  PENDING: "Pending",
  PREPARING_TRAINING_STACK: "PreparingTrainingStack",
  RESTARTING: "Restarting",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  TRAINING: "Training",
  UPDATING: "Updating",
  UPLOADING: "Uploading",
} as const;

/**
 * @public
 */
export type SecondaryStatus = (typeof SecondaryStatus)[keyof typeof SecondaryStatus];

/**
 * @public
 * <p>An array element of <code>SecondaryStatusTransitions</code> for <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>. It provides additional details about a status that the
 *             training job has transitioned through. A training job can be in one of several states,
 *             for example, starting, downloading, training, or uploading. Within each state, there are
 *             a number of intermediate states. For example, within the starting state, SageMaker could be
 *             starting the training job or launching the ML instances. These transitional states are
 *             referred to as the job's secondary
 *             status.
 *             </p>
 *          <p></p>
 */
export interface SecondaryStatusTransition {
  /**
   * @public
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *          <p>Status might be one of the following secondary statuses:</p>
   *          <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <p>We no longer support the following secondary statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LaunchingMLInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreparingTrainingStack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DownloadingTrainingImage</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status: SecondaryStatus | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *          <p>SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *          <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>Launching requested ML
   *                                 instances.</p>
   *                   </li>
   *                   <li>
   *                      <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                   </li>
   *                   <li>
   *                      <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                   </li>
   *                   <li>
   *                      <p>Preparing the instances for training.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>Downloading the training image.</p>
   *                   </li>
   *                   <li>
   *                      <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *          </important>
   *          <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For example,
   *             at the start of a training job, you might see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const WarmPoolResourceStatus = {
  AVAILABLE: "Available",
  INUSE: "InUse",
  REUSED: "Reused",
  TERMINATED: "Terminated",
} as const;

/**
 * @public
 */
export type WarmPoolResourceStatus = (typeof WarmPoolResourceStatus)[keyof typeof WarmPoolResourceStatus];

/**
 * @public
 * <p>Status and billing information about the warm pool.</p>
 */
export interface WarmPoolStatus {
  /**
   * @public
   * <p>The status of the warm pool.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InUse</code>: The warm pool is in use for the training job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Available</code>: The warm pool is available to reuse for a matching
   *                     training job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Reused</code>: The warm pool moved to a matching training job for
   *                     reuse.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminated</code>: The warm pool is no longer available. Warm pools are
   *                     unavailable if they are terminated by a user, terminated for a patch update, or
   *                     terminated for exceeding the specified
   *                     <code>KeepAlivePeriodInSeconds</code>.</p>
   *             </li>
   *          </ul>
   */
  Status: WarmPoolResourceStatus | undefined;

  /**
   * @public
   * <p>The billable time in seconds used by the warm pool. Billable time refers to the
   *             absolute wall-clock time.</p>
   *          <p>Multiply <code>ResourceRetainedBillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run warm pool training. The formula is as follows:
   *                 <code>ResourceRetainedBillableTimeInSeconds * InstanceCount</code>.</p>
   */
  ResourceRetainedBillableTimeInSeconds?: number;

  /**
   * @public
   * <p>The name of the matching training job that reused the warm pool.</p>
   */
  ReusedByJob?: string;
}

/**
 * @public
 */
export interface DescribeTrainingJobResponse {
  /**
   * @public
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * @public
   * <p>The status of the training job.</p>
   *          <p>SageMaker provides the following training job statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *          <p>For more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * @public
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html">SecondaryStatusTransition</a>.</p>
   *          <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *          <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Interrupted</code> - The job stopped because the managed
   *                                 spot training instances were interrupted. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>MaxWaitTimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed wait time.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *          </important>
   *          <p>We no longer support the following secondary statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LaunchingMLInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreparingTraining</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DownloadingTrainingImage</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus: SecondaryStatus | undefined;

  /**
   * @public
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for
   *             the training job. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * @public
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * @public
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * @public
   * <p>The status of the warm pool associated with the training job.</p>
   */
  WarmPoolStatus?: WarmPoolStatus;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * @public
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * @public
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * @public
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * @public
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * @public
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * @public
   * <p>The billable time in seconds. Billable time refers to the absolute wall-clock
   *             time.</p>
   *          <p>Multiply <code>BillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run distributed training. The formula is as follows:
   *                 <code>BillableTimeInSeconds * InstanceCount</code> .</p>
   *          <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * @public
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * @public
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * @public
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * @public
   * <p>Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * @public
   * <p>Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.</p>
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[];

  /**
   * @public
   * <p>Profiling status of a training job.</p>
   */
  ProfilingStatus?: ProfilingStatus;

  /**
   * @public
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * @public
   * <p>Contains information about the infrastructure health check configuration for the training job.</p>
   */
  InfraCheckConfig?: InfraCheckConfig;
}

/**
 * @public
 */
export interface DescribeTransformJobRequest {
  /**
   * @public
   * <p>The name of the transform job that you want to view details of.</p>
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransformJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TransformJobStatus = (typeof TransformJobStatus)[keyof typeof TransformJobStatus];

/**
 * @public
 */
export interface DescribeTransformJobResponse {
  /**
   * @public
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * @public
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * @public
   * <p>If the transform job failed, <code>FailureReason</code> describes
   *             why
   *             it failed. A transform job creates a log file, which includes error
   *             messages, and stores it
   *             as
   *             an Amazon S3 object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with
   *                 Amazon CloudWatch</a>.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * @public
   * <p>The timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * @public
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * @public
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request.
   *             A <i>record</i>
   *             <i></i> is a single unit of input data that inference
   *             can be made on. For example, a single line in a CSV file is a record. </p>
   *          <p>To enable the batch strategy, you must set <code>SplitType</code>
   *             to
   *                 <code>Line</code>, <code>RecordIO</code>, or
   *             <code>TFRecord</code>.</p>
   */
  BatchStrategy?: BatchStrategy;

  /**
   * @public
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * @public
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * @public
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * @public
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * @public
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

/**
 * @public
 */
export interface DescribeTrialRequest {
  /**
   * @public
   * <p>The name of the trial to describe.</p>
   */
  TrialName: string | undefined;
}

/**
 * @public
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

/**
 * @public
 */
export interface DescribeTrialResponse {
  /**
   * @public
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * @public
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialSource;

  /**
   * @public
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;
}

/**
 * @public
 */
export interface DescribeTrialComponentRequest {
  /**
   * @public
   * <p>The name of the trial component to describe.</p>
   */
  TrialComponentName: string | undefined;
}

/**
 * @public
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * @public
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * @public
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * @public
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * @public
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;
}

/**
 * @public
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 */
export interface TrialComponentSource {
  /**
   * @public
   * <p>The source Amazon Resource Name (ARN).</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

/**
 * @public
 */
export interface DescribeTrialComponentResponse {
  /**
   * @public
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * @public
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialComponentSource;

  /**
   * @public
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * @public
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * @public
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>A list of ARNs and, if applicable, job types for multiple sources of an experiment
   *       run.</p>
   */
  Sources?: TrialComponentSource[];
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The user profile name. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
  Delete_Failed: "Delete_Failed",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Update_Failed: "Update_Failed",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 */
export interface DescribeUserProfileResponse {
  /**
   * @public
   * <p>The ID of the domain that contains the profile.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * @public
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * @public
   * <p>The ID of the user's profile in the Amazon Elastic File System (EFS) volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: UserProfileStatus;

  /**
   * @public
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The IAM Identity Center user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * @public
   * <p>The IAM Identity Center user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * @public
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface DescribeWorkforceRequest {
  /**
   * @public
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

/**
 * @public
 * <p>Your OIDC IdP workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * @public
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer?: string;

  /**
   * @public
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * @public
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * @public
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * @public
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * @public
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;
}

/**
 * @public
 * @enum
 */
export const WorkforceStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type WorkforceStatus = (typeof WorkforceStatus)[keyof typeof WorkforceStatus];

/**
 * @public
 * <p>A VpcConfig object that specifies the VPC that you want your workforce to connect to.</p>
 */
export interface WorkforceVpcConfigResponse {
  /**
   * @public
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.</p>
   */
  VpcEndpointId?: string;
}

/**
 * @public
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  /**
   * @public
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * @public
   * <p>The most recent date that <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateWorkforce.html">UpdateWorkforce</a> was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * @public
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * @public
   * <p>The subdomain for your OIDC Identity Provider.</p>
   */
  SubDomain?: string;

  /**
   * @public
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * @public
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * @public
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The configuration of a VPC workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse;

  /**
   * @public
   * <p>The status of your workforce.</p>
   */
  Status?: WorkforceStatus;

  /**
   * @public
   * <p>The reason your workforce failed.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface DescribeWorkforceResponse {
  /**
   * @public
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface DescribeWorkteamRequest {
  /**
   * @public
   * <p>The name of the work team to return a description of.</p>
   */
  WorkteamName: string | undefined;
}

/**
 * @public
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  /**
   * @public
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * @public
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * @public
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * @public
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * @public
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * @public
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

/**
 * @public
 */
export interface DescribeWorkteamResponse {
  /**
   * @public
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   */
  Workteam: Workteam | undefined;
}

/**
 * @public
 * <p>Specifies the serverless update concurrency configuration for an endpoint variant.</p>
 */
export interface ProductionVariantServerlessUpdateConfig {
  /**
   * @public
   * <p>The updated maximum number of concurrent invocations your serverless endpoint can process.</p>
   */
  MaxConcurrency?: number;

  /**
   * @public
   * <p>The updated amount of provisioned concurrency to allocate for the serverless endpoint.
   *    Should be less than or equal to <code>MaxConcurrency</code>.</p>
   */
  ProvisionedConcurrency?: number;
}

/**
 * @public
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  /**
   * @public
   * <p>The name of the variant to update.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * @public
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * @public
   * <p>Specifies the serverless update concurrency configuration for an endpoint variant.</p>
   */
  ServerlessUpdateConfig?: ProductionVariantServerlessUpdateConfig;
}

/**
 * @public
 * <p>Information of a particular device.</p>
 */
export interface Device {
  /**
   * @public
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>Description of the device.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Amazon Web Services Internet of Things (IoT) object name.</p>
   */
  IotThingName?: string;
}

/**
 * @public
 * @enum
 */
export const DeviceDeploymentStatus = {
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type DeviceDeploymentStatus = (typeof DeviceDeploymentStatus)[keyof typeof DeviceDeploymentStatus];

/**
 * @public
 * <p>Contains information summarizing device details and deployment status.</p>
 */
export interface DeviceDeploymentSummary {
  /**
   * @public
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * @public
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>The name of the stage in the edge deployment plan.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>The name of the deployed stage.</p>
   */
  DeployedStageName?: string;

  /**
   * @public
   * <p>The name of the fleet to which the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * @public
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>The ARN of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * @public
   * <p>The deployment status of the device.</p>
   */
  DeviceDeploymentStatus?: DeviceDeploymentStatus;

  /**
   * @public
   * <p>The detailed error message for the deployoment status result.</p>
   */
  DeviceDeploymentStatusMessage?: string;

  /**
   * @public
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time when the deployment on the device started.</p>
   */
  DeploymentStartTime?: Date;
}

/**
 * @public
 * <p>Summary of the device fleet.</p>
 */
export interface DeviceFleetSummary {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the device fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * @public
   * <p>Name of the device fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>Status of devices.</p>
 */
export interface DeviceStats {
  /**
   * @public
   * <p>The number of devices connected with a heartbeat.</p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * @public
   * <p>The number of registered devices.</p>
   */
  RegisteredDeviceCount: number | undefined;
}

/**
 * @public
 * <p>Summary of model on edge device.</p>
 */
export interface EdgeModelSummary {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The version model.</p>
   */
  ModelVersion: string | undefined;
}

/**
 * @public
 * <p>Summary of the device.</p>
 */
export interface DeviceSummary {
  /**
   * @public
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * @public
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * @public
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..</p>
   */
  IotThingName?: string;

  /**
   * @public
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime?: Date;

  /**
   * @public
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * @public
   * <p>Models on the device.</p>
   */
  Models?: EdgeModelSummary[];

  /**
   * @public
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

/**
 * @public
 * @enum
 */
export const Direction = {
  ASCENDANTS: "Ascendants",
  BOTH: "Both",
  DESCENDANTS: "Descendants",
} as const;

/**
 * @public
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

/**
 * @public
 */
export interface DisableSagemakerServicecatalogPortfolioInput {}

/**
 * @public
 */
export interface DisableSagemakerServicecatalogPortfolioOutput {}

/**
 * @public
 */
export interface DisassociateTrialComponentRequest {
  /**
   * @public
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * @public
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrialComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * @public
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  /**
   * @public
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: DomainStatus;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>A collection of settings that update the current configuration for the
 *                 <code>RStudioServerPro</code> Domain-level app.</p>
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * @public
   * <p>The execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * @public
   * <p>A URL pointing to an RStudio Connect server.</p>
   */
  RStudioConnectUrl?: string;

  /**
   * @public
   * <p>A URL pointing to an RStudio Package Manager server.</p>
   */
  RStudioPackageManagerUrl?: string;
}

/**
 * @public
 * <p>A collection of <code>Domain</code> configuration settings to update.</p>
 */
export interface DomainSettingsForUpdate {
  /**
   * @public
   * <p>A collection of <code>RStudioServerPro</code> Domain-level app settings to update. A
   *             single <code>RStudioServerPro</code> application is created for a domain.</p>
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;

  /**
   * @public
   * <p>The configuration for attaching a SageMaker user profile name to the execution role as a
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">sts:SourceIdentity key</a>. This configuration can only be modified if there
   *             are no apps in the <code>InService</code> or <code>Pending</code> state.</p>
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig;

  /**
   * @public
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for
   *             communication between Domain-level apps and user apps.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>A specification for a predefined metric.</p>
 */
export interface PredefinedMetricSpecification {
  /**
   * @public
   * <p>The metric type. You can only apply SageMaker metric types to SageMaker endpoints.</p>
   */
  PredefinedMetricType?: string;
}

/**
 * @public
 * <p>An object containing information about a metric.</p>
 */
export type MetricSpecification =
  | MetricSpecification.CustomizedMember
  | MetricSpecification.PredefinedMember
  | MetricSpecification.$UnknownMember;

/**
 * @public
 */
export namespace MetricSpecification {
  /**
   * @public
   * <p>Information about a predefined metric.</p>
   */
  export interface PredefinedMember {
    Predefined: PredefinedMetricSpecification;
    Customized?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a customized metric.</p>
   */
  export interface CustomizedMember {
    Predefined?: never;
    Customized: CustomizedMetricSpecification;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Predefined?: never;
    Customized?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Predefined: (value: PredefinedMetricSpecification) => T;
    Customized: (value: CustomizedMetricSpecification) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetricSpecification, visitor: Visitor<T>): T => {
    if (value.Predefined !== undefined) return visitor.Predefined(value.Predefined);
    if (value.Customized !== undefined) return visitor.Customized(value.Customized);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p>
 *          <p>When using the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html">PutScalingPolicy</a> API,
 *          this parameter is required when you are creating a policy with the policy type <code>TargetTrackingScaling</code>.</p>
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * @public
   * <p>An object containing information about a metric.</p>
   */
  MetricSpecification?: MetricSpecification;

  /**
   * @public
   * <p>The recommended target value to specify for the metric when creating a scaling policy.</p>
   */
  TargetValue?: number;
}

/**
 * @public
 * <p>An object containing a recommended scaling policy.</p>
 */
export type ScalingPolicy = ScalingPolicy.TargetTrackingMember | ScalingPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ScalingPolicy {
  /**
   * @public
   * <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p>
   */
  export interface TargetTrackingMember {
    TargetTracking: TargetTrackingScalingPolicyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TargetTracking?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TargetTracking: (value: TargetTrackingScalingPolicyConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ScalingPolicy, visitor: Visitor<T>): T => {
    if (value.TargetTracking !== undefined) return visitor.TargetTracking(value.TargetTracking);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>An object with the recommended values for you to specify when creating an autoscaling policy.</p>
 */
export interface DynamicScalingConfiguration {
  /**
   * @public
   * <p>The recommended minimum capacity to specify for your autoscaling policy.</p>
   */
  MinCapacity?: number;

  /**
   * @public
   * <p>The recommended maximum capacity to specify for your autoscaling policy.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The recommended scale in cooldown time for your autoscaling policy.</p>
   */
  ScaleInCooldown?: number;

  /**
   * @public
   * <p>The recommended scale out cooldown time for your autoscaling policy.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * @public
   * <p>An object of the scaling policies for each metric.</p>
   */
  ScalingPolicies?: ScalingPolicy[];
}

/**
 * @public
 * <p>A directed edge connecting two lineage entities.</p>
 */
export interface Edge {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>The type of the Association(Edge) between the source and destination. For example <code>ContributedTo</code>,
   *          <code>Produced</code>, or <code>DerivedFrom</code>.</p>
   */
  AssociationType?: AssociationEdgeType;
}

/**
 * @public
 * <p>Contains information summarizing an edge deployment plan.</p>
 */
export interface EdgeDeploymentPlanSummary {
  /**
   * @public
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * @public
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>The name of the device fleet used for the deployment. </p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess: number | undefined;

  /**
   * @public
   * <p>The number of edge devices yet to pick up the deployment, or in progress.</p>
   */
  EdgeDeploymentPending: number | undefined;

  /**
   * @public
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed: number | undefined;

  /**
   * @public
   * <p>The time when the edge deployment plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the edge deployment plan was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>Status of edge devices with this model.</p>
 */
export interface EdgeModelStat {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * @public
   * <p>The number of devices that have this model version and do not have a heart beat.</p>
   */
  OfflineDeviceCount: number | undefined;

  /**
   * @public
   * <p>The number of devices that have this model version and have a heart beat. </p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * @public
   * <p>The number of devices that have this model version, a heart beat, and are currently running.</p>
   */
  ActiveDeviceCount: number | undefined;

  /**
   * @public
   * <p>The number of devices with this model version and are producing sample data.</p>
   */
  SamplingDeviceCount: number | undefined;
}

/**
 * @public
 * <p>Summary of edge packaging job.</p>
 */
export interface EdgePackagingJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * @public
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * @public
   * <p>The status of the edge packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * @public
   * <p>The name of the SageMaker Neo compilation job.</p>
   */
  CompilationJobName?: string;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * @public
   * <p>The timestamp of when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp of when the edge packaging job was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
 */
export interface EMRStepMetadata {
  /**
   * @public
   * <p>The identifier of the EMR cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The identifier of the EMR cluster step.</p>
   */
  StepId?: string;

  /**
   * @public
   * <p>The name of the EMR cluster step.</p>
   */
  StepName?: string;

  /**
   * @public
   * <p>The path to the log file where the cluster step's failure root cause
   *             is recorded.</p>
   */
  LogFilePath?: string;
}

/**
 * @public
 */
export interface EnableSagemakerServicecatalogPortfolioInput {}

/**
 * @public
 */
export interface EnableSagemakerServicecatalogPortfolioOutput {}

/**
 * @public
 * <p>A schedule for a model monitoring job. For information about model monitor, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model
 *                 Monitor</a>.</p>
 */
export interface MonitoringSchedule {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * @public
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>The status of the monitoring schedule. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The schedule is pending being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The schedule failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED</code> - The schedule was successfully created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> - The schedule was stopped.</p>
   *             </li>
   *          </ul>
   */
  MonitoringScheduleStatus?: ScheduleStatus;

  /**
   * @public
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType;

  /**
   * @public
   * <p>If the monitoring schedule failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time that the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last time the monitoring schedule was changed.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * @public
   * <p>The endpoint that hosts the model being monitored.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * @public
   * <p>A list of the tags associated with the monitoring schedlue. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A hosted endpoint for real-time inference.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The endpoint configuration associated with the endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>A list of the production variants hosted on the endpoint. Each production variant is a
   *             model.</p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * @public
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * @public
   * <p>The status of the endpoint.</p>
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * @public
   * <p>If the endpoint failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time that the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>A list of monitoring schedules for the endpoint. For information about model
   *             monitoring, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
   */
  MonitoringSchedules?: MonitoringSchedule[];

  /**
   * @public
   * <p>A list of the tags associated with the endpoint. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General
   *                 Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A list of the shadow variants hosted on the endpoint. Each shadow variant is a model
   *             in shadow mode with production traffic replicated from the production variant.</p>
   */
  ShadowProductionVariants?: ProductionVariantSummary[];
}

/**
 * @public
 * @enum
 */
export const EndpointConfigSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type EndpointConfigSortKey = (typeof EndpointConfigSortKey)[keyof typeof EndpointConfigSortKey];

/**
 * @public
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * @public
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type EndpointSortKey = (typeof EndpointSortKey)[keyof typeof EndpointSortKey];

/**
 * @public
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Creating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> call or when the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <code>DescribeEndpointOutput$FailureReason</code> for information about the
   *                     failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a
   *                     failed endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>To get a list of endpoints with a specified status, use the <code>StatusEquals</code>
   *             filter with a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListEndpoints.html">ListEndpoints</a>.</p>
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * @public
 * <p>The properties of an experiment as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 */
export interface Experiment {
  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * @public
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * @public
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The list of tags that are associated with the experiment. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * @public
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The container for the metadata for Fail step.</p>
 */
export interface FailStepMetadata {
  /**
   * @public
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
 *          Feature Group can be visualized as a table which has rows, with a unique identifier for
 *          each row where each column in the table is a feature. In principle, a Feature Group is
 *          composed of features and values per features.</p>
 */
export interface FeatureGroup {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn?: string;

  /**
   * @public
   * <p>The name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName?: string;

  /**
   * @public
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *             <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   */
  RecordIdentifierFeatureName?: string;

  /**
   * @public
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *             <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event occurs that corresponds to
   *          the creation or update of a <code>Record</code> in <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> must have a corresponding
   *             <code>EventTime</code>.</p>
   */
  EventTimeFeatureName?: string;

  /**
   * @public
   * <p>A list of <code>Feature</code>s. Each <code>Feature</code> must include a
   *             <code>FeatureName</code> and a <code>FeatureType</code>. </p>
   *          <p>Valid <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and
   *             <code>String</code>. </p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>.</p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions?: FeatureDefinition[];

  /**
   * @public
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating the last time you updated the feature group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly.</p>
   *          <p>The default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * @public
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *             <code>S3StorageConfig</code>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A <code>FeatureGroup</code> status.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * @public
   * <p>The status of <code>OfflineStore</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * @public
   * <p>A value that indicates whether the feature group was updated successfully.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * @public
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure may be due to a failure to create a
   *             <code>FeatureGroup</code> in or delete a <code>FeatureGroup</code> from the
   *             <code>OfflineStore</code>.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const FeatureGroupSortBy = {
  CREATION_TIME: "CreationTime",
  FEATURE_GROUP_STATUS: "FeatureGroupStatus",
  NAME: "Name",
  OFFLINE_STORE_STATUS: "OfflineStoreStatus",
} as const;

/**
 * @public
 */
export type FeatureGroupSortBy = (typeof FeatureGroupSortBy)[keyof typeof FeatureGroupSortBy];

/**
 * @public
 * @enum
 */
export const FeatureGroupSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type FeatureGroupSortOrder = (typeof FeatureGroupSortOrder)[keyof typeof FeatureGroupSortOrder];

/**
 * @public
 * <p>The name, ARN, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 */
export interface FeatureGroupSummary {
  /**
   * @public
   * <p>The name of <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * @public
   * <p>A timestamp indicating the time of creation time of the
   *          <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * @public
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;
}

/**
 * @public
 * <p>The metadata for a feature. It can either be metadata that you specify, or metadata that
 *          is updated automatically.</p>
 */
export interface FeatureMetadata {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the feature group.</p>
   */
  FeatureGroupArn?: string;

  /**
   * @public
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName?: string;

  /**
   * @public
   * <p>The name of feature.</p>
   */
  FeatureName?: string;

  /**
   * @public
   * <p>The data type of the feature.</p>
   */
  FeatureType?: FeatureType;

  /**
   * @public
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating when the feature was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>An optional description that you specify to better describe the feature.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Optional key-value pairs that you specify to better describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

/**
 * @public
 * @enum
 */
export const Operator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  IN: "In",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
  NOT_EQUALS: "NotEquals",
  NOT_EXISTS: "NotExists",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, SageMaker uses the
 *       equals operator.</p>
 *          <p>In search, there are several property types:</p>
 *          <dl>
 *             <dt>Metrics</dt>
 *             <dd>
 *                <p>To define a metric filter, enter a value using the form
 *             <code>"Metrics.<name>"</code>, where <code><name></code> is
 *             a metric name. For example, the following filter searches for training jobs
 *             with an <code>"accuracy"</code> metric greater than
 *             <code>"0.9"</code>:</p>
 *                <p>
 *                   <code>\{</code>
 *                </p>
 *                <p>
 *                   <code>"Name": "Metrics.accuracy",</code>
 *                </p>
 *                <p>
 *                   <code>"Operator": "GreaterThan",</code>
 *                </p>
 *                <p>
 *                   <code>"Value": "0.9"</code>
 *                </p>
 *                <p>
 *                   <code>\}</code>
 *                </p>
 *             </dd>
 *             <dt>HyperParameters</dt>
 *             <dd>
 *                <p>To define a hyperparameter filter, enter a value with the form
 *             <code>"HyperParameters.<name>"</code>. Decimal hyperparameter
 *             values are treated as a decimal in a comparison if the specified
 *             <code>Value</code> is also a decimal value. If the specified
 *             <code>Value</code> is an integer, the decimal hyperparameter values are
 *             treated as integers. For example, the following filter is satisfied by
 *             training jobs with a <code>"learning_rate"</code> hyperparameter that is
 *             less than <code>"0.5"</code>:</p>
 *                <p>
 *                   <code> \{</code>
 *                </p>
 *                <p>
 *                   <code> "Name": "HyperParameters.learning_rate",</code>
 *                </p>
 *                <p>
 *                   <code> "Operator": "LessThan",</code>
 *                </p>
 *                <p>
 *                   <code> "Value": "0.5"</code>
 *                </p>
 *                <p>
 *                   <code> \}</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>Tags.<key></code>.</p>
 *             </dd>
 *          </dl>
 */
export interface Filter {
  /**
   * @public
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A Boolean binary operator that is used to evaluate the filter. The operator field
   *       contains one of the following values:</p>
   *          <dl>
   *             <dt>Equals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> equals <code>Value</code>.</p>
   *             </dd>
   *             <dt>NotEquals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> doesn't equal <code>Value</code>.</p>
   *             </dd>
   *             <dt>Exists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property exists.</p>
   *             </dd>
   *             <dt>NotExists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property does not exist.</p>
   *             </dd>
   *             <dt>GreaterThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>GreaterThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>In</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is one of the comma delimited strings in
   *             <code>Value</code>. Only supported for text properties.</p>
   *             </dd>
   *             <dt>Contains</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> contains the string <code>Value</code>.
   *             Only supported for text properties.</p>
   *                <p>A <code>SearchExpression</code> can include the <code>Contains</code> operator
   *             multiple times when the value of <code>Name</code> is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.ExperimentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.TrialName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.TrialComponentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.InputArtifacts</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.OutputArtifacts</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>A <code>SearchExpression</code> can include only one <code>Contains</code> operator
   *             for all other values of <code>Name</code>. In these cases, if you include multiple
   *             <code>Contains</code> operators in the <code>SearchExpression</code>, the result is
   *             the following error message: "<code>'CONTAINS' operator usage limit of 1
   *             exceeded.</code>"</p>
   *             </dd>
   *          </dl>
   */
  Operator?: Operator;

  /**
   * @public
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * @public
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * @public
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface GetDeviceFleetReportRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceFleetReportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * @public
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Timestamp of when the report was generated.</p>
   */
  ReportGenerated?: Date;

  /**
   * @public
   * <p>Status of devices.</p>
   */
  DeviceStats?: DeviceStats;

  /**
   * @public
   * <p>The versions of Edge Manager agent deployed on the fleet.</p>
   */
  AgentVersions?: AgentVersion[];

  /**
   * @public
   * <p>Status of model on device.</p>
   */
  ModelStats?: EdgeModelStat[];
}

/**
 * @public
 */
export interface GetLineageGroupPolicyRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The resource policy that gives access to the lineage group in another account.</p>
   */
  ResourcePolicy?: string;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyInput {
  /**
   * @public
   * <p>The name of the model group for which to get the resource policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyOutput {
  /**
   * @public
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusInput {}

/**
 * @public
 * @enum
 */
export const SagemakerServicecatalogStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type SagemakerServicecatalogStatus =
  (typeof SagemakerServicecatalogStatus)[keyof typeof SagemakerServicecatalogStatus];

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * @public
   * <p>Whether Service Catalog is enabled or disabled in SageMaker.</p>
   */
  Status?: SagemakerServicecatalogStatus;
}

/**
 * @public
 * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
 */
export interface ScalingPolicyObjective {
  /**
   * @public
   * <p>The minimum number of expected requests to your endpoint per minute.</p>
   */
  MinInvocationsPerMinute?: number;

  /**
   * @public
   * <p>The maximum number of expected requests to your endpoint per minute.</p>
   */
  MaxInvocationsPerMinute?: number;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationRequest {
  /**
   * @public
   * <p>The name of a previously completed Inference Recommender job.</p>
   */
  InferenceRecommendationsJobName: string | undefined;

  /**
   * @public
   * <p>The recommendation ID of a previously completed inference recommendation. This ID should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>EndpointName</code> field.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The name of an endpoint benchmarked during a previously completed inference recommendation job. This name should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>RecommendationId</code> field.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The percentage of how much utilization you want an instance to use before autoscaling. The default value is 50%.</p>
   */
  TargetCpuUtilizationPerCore?: number;

  /**
   * @public
   * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
   */
  ScalingPolicyObjective?: ScalingPolicyObjective;
}

/**
 * @public
 * <p>The metric for a scaling policy.</p>
 */
export interface ScalingPolicyMetric {
  /**
   * @public
   * <p>The number of invocations sent to a model, normalized by <code>InstanceCount</code>
   *          in each ProductionVariant. <code>1/numberOfInstances</code> is sent as the value on each
   *          request, where <code>numberOfInstances</code> is the number of active instances for the
   *          ProductionVariant behind the endpoint at the time of the request.</p>
   */
  InvocationsPerInstance?: number;

  /**
   * @public
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *          This interval includes the local communication times taken to send the request
   *          and to fetch the response from the container of a model and the time taken to
   *          complete the inference in the container.</p>
   */
  ModelLatency?: number;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationResponse {
  /**
   * @public
   * <p>The name of a previously completed Inference Recommender job.</p>
   */
  InferenceRecommendationsJobName?: string;

  /**
   * @public
   * <p>The recommendation ID of a previously completed inference recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The name of an endpoint benchmarked during a previously completed Inference Recommender job.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The percentage of how much utilization you want an instance to use before autoscaling, which you specified in the request. The default value is 50%.</p>
   */
  TargetCpuUtilizationPerCore?: number;

  /**
   * @public
   * <p>An object representing the anticipated traffic pattern for an endpoint that you specified in the request.</p>
   */
  ScalingPolicyObjective?: ScalingPolicyObjective;

  /**
   * @public
   * <p>An object with a list of metrics that were benchmarked during the previously completed Inference Recommender job.</p>
   */
  Metric?: ScalingPolicyMetric;

  /**
   * @public
   * <p>An object with the recommended values for you to specify when creating an autoscaling policy.</p>
   */
  DynamicScalingConfiguration?: DynamicScalingConfiguration;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ENDPOINT: "Endpoint",
  EXPERIMENT: "Experiment",
  EXPERIMENT_TRIAL: "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT: "ExperimentTrialComponent",
  FEATURE_GROUP: "FeatureGroup",
  FEATURE_METADATA: "FeatureMetadata",
  HYPER_PARAMETER_TUNING_JOB: "HyperParameterTuningJob",
  IMAGE: "Image",
  IMAGE_VERSION: "ImageVersion",
  MODEL: "Model",
  MODEL_CARD: "ModelCard",
  MODEL_PACKAGE: "ModelPackage",
  MODEL_PACKAGE_GROUP: "ModelPackageGroup",
  PIPELINE: "Pipeline",
  PIPELINE_EXECUTION: "PipelineExecution",
  PROJECT: "Project",
  TRAINING_JOB: "TrainingJob",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * @public
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

/**
 * @public
 * <p>Specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_GetSearchSuggestions.html">GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * @public
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

/**
 * @public
 */
export interface GetSearchSuggestionsRequest {
  /**
   * @public
   * <p>The name of the SageMaker resource to search for.</p>
   */
  Resource: ResourceType | undefined;

  /**
   * @public
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

/**
 * @public
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * @public
   * <p>A suggested property name based on what you entered in the search textbox in the SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

/**
 * @public
 */
export interface GetSearchSuggestionsResponse {
  /**
   * @public
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

/**
 * @public
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   */
  SecretArn?: string;
}

/**
 * @public
 * <p>Information about hub content.</p>
 */
export interface HubContentInfo {
  /**
   * @public
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   */
  HubContentArn: string | undefined;

  /**
   * @public
   * <p>The version of the hub content.</p>
   */
  HubContentVersion: string | undefined;

  /**
   * @public
   * <p>The type of hub content.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The version of the hub content document schema.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * @public
   * <p>The display name of the hub content.</p>
   */
  HubContentDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub content.</p>
   */
  HubContentDescription?: string;

  /**
   * @public
   * <p>The searchable keywords for the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * @public
   * <p>The status of the hub content.</p>
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * @public
   * <p>The date and time that the hub content was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const HubContentSortBy = {
  CREATION_TIME: "CreationTime",
  HUB_CONTENT_NAME: "HubContentName",
  HUB_CONTENT_STATUS: "HubContentStatus",
} as const;

/**
 * @public
 */
export type HubContentSortBy = (typeof HubContentSortBy)[keyof typeof HubContentSortBy];

/**
 * @public
 * <p>Information about a hub.</p>
 */
export interface HubInfo {
  /**
   * @public
   * <p>The name of the hub.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   */
  HubArn: string | undefined;

  /**
   * @public
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub.</p>
   */
  HubDescription?: string;

  /**
   * @public
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];

  /**
   * @public
   * <p>The status of the hub.</p>
   */
  HubStatus: HubStatus | undefined;

  /**
   * @public
   * <p>The date and time that the hub was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the hub was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const HubSortBy = {
  ACCOUNT_ID_OWNER: "AccountIdOwner",
  CREATION_TIME: "CreationTime",
  HUB_NAME: "HubName",
  HUB_STATUS: "HubStatus",
} as const;

/**
 * @public
 */
export type HubSortBy = (typeof HubSortBy)[keyof typeof HubSortBy];

/**
 * @public
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * @public
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * @public
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * <p>An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API
 *             containing the properties of a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSearchEntity {
  /**
   * @public
   * <p>The name of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobArn?: string;

  /**
   * @public
   * <p>Configures a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig;

  /**
   * @public
   * <p>Defines
   *             the training jobs launched by a hyperparameter tuning job.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * @public
   * <p>The job definitions included in a hyperparameter tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * @public
   * <p>The status of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
   *             status.</p>
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters;

  /**
   * @public
   * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
   *             categorized by the status of their objective metric. The objective metric status shows
   *             whether the
   *             final
   *             objective metric for the training job has been evaluated by the
   *             tuning job and used in the hyperparameter tuning process.</p>
   */
  ObjectiveStatusCounters?: ObjectiveStatusCounters;

  /**
   * @public
   * <p>The container for the summary information about a training job.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>The container for the summary information about a training job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
   *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
   *             jobs are used to inform which combinations of hyperparameters to search over in the new
   *             tuning job.</p>
   *          <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric, and the training job that performs the best is compared to the
   *             best training jobs from the parent tuning jobs. From these, the training job that
   *             performs the best as measured by the objective metric is returned as the overall best
   *             training job.</p>
   *          <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *          </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @public
   * <p>The error that was created when a hyperparameter tuning job failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Information about either a current or completed hyperparameter tuning job.</p>
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;

  /**
   * @public
   * <p>The total amount of resources consumed by a hyperparameter tuning job.</p>
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources;

  /**
   * @public
   * <p>The tags associated with a hyperparameter tuning job. For more information see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobSortByOptions = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobSortByOptions =
  (typeof HyperParameterTuningJobSortByOptions)[keyof typeof HyperParameterTuningJobSortByOptions];

/**
 * @public
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * @public
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * @public
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * @public
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * @public
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             evaluate
   *             at each iteration.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * @public
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the numbers of training
   *             jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the numbers of training jobs,
   *             categorized by objective metric status, that this tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>
   *             object that specifies the maximum number of training jobs and parallel training jobs
   *             allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

/**
 * @public
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * @public
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | undefined;

  /**
   * @public
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageSortBy = {
  CREATION_TIME: "CREATION_TIME",
  IMAGE_NAME: "IMAGE_NAME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
} as const;

/**
 * @public
 */
export type ImageSortBy = (typeof ImageSortBy)[keyof typeof ImageSortBy];

/**
 * @public
 * @enum
 */
export const ImageSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageSortOrder = (typeof ImageSortOrder)[keyof typeof ImageSortOrder];

/**
 * @public
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * @public
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * @public
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | undefined;

  /**
   * @public
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageVersionSortBy = {
  CREATION_TIME: "CREATION_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ImageVersionSortBy = (typeof ImageVersionSortBy)[keyof typeof ImageVersionSortBy];

/**
 * @public
 * @enum
 */
export const ImageVersionSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageVersionSortOrder = (typeof ImageVersionSortOrder)[keyof typeof ImageVersionSortOrder];

/**
 * @public
 */
export interface ImportHubContentRequest {
  /**
   * @public
   * <p>The name of the hub content to import.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The version of the hub content to import.</p>
   */
  HubContentVersion?: string;

  /**
   * @public
   * <p>The type of hub content to import.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The version of the hub content schema to import.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * @public
   * <p>The name of the hub to import content into.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The display name of the hub content to import.</p>
   */
  HubContentDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub content to import.</p>
   */
  HubContentDescription?: string;

  /**
   * @public
   * <p>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</p>
   */
  HubContentMarkdown?: string;

  /**
   * @public
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   */
  HubContentDocument: string | undefined;

  /**
   * @public
   * <p>The searchable keywords of the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * @public
   * <p>Any tags associated with the hub content.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportHubContentResponse {
  /**
   * @public
   * <p>The ARN of the hub that the content was imported into.</p>
   */
  HubArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the hub content that was imported.</p>
   */
  HubContentArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceComponentSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type InferenceComponentSortKey = (typeof InferenceComponentSortKey)[keyof typeof InferenceComponentSortKey];

/**
 * @public
 * <p>A summary of the properties of an inference component.</p>
 */
export interface InferenceComponentSummary {
  /**
   * @public
   * <p>The time when the inference component was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   */
  InferenceComponentArn: string | undefined;

  /**
   * @public
   * <p>The name of the inference component.</p>
   */
  InferenceComponentName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The name of the endpoint that hosts the inference component.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The name of the production variant that hosts the inference component.</p>
   */
  VariantName: string | undefined;

  /**
   * @public
   * <p>The status of the inference component.</p>
   */
  InferenceComponentStatus?: InferenceComponentStatus;

  /**
   * @public
   * <p>The time when the inference component was last updated.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * <p>Lists a summary of properties of an inference experiment.</p>
 */
export interface InferenceExperimentSummary {
  /**
   * @public
   * <p>The name of the inference experiment.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the inference experiment.</p>
   */
  Type: InferenceExperimentType | undefined;

  /**
   * @public
   * <p>The duration for which the inference experiment ran or will run.</p>
   *          <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * @public
   * <p>The status of the inference experiment.</p>
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * @public
   * <p>The error message for the inference experiment status result.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp at which the inference experiment was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp at which the inference experiment was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The timestamp when you last modified the inference experiment.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentStopDesiredState = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
} as const;

/**
 * @public
 */
export type InferenceExperimentStopDesiredState =
  (typeof InferenceExperimentStopDesiredState)[keyof typeof InferenceExperimentStopDesiredState];

/**
 * @public
 * <p>A structure that contains a list of recommendation jobs.</p>
 */
export interface InferenceRecommendationsJob {
  /**
   * @public
   * <p>The name of the job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The job description.</p>
   */
  JobDescription: string | undefined;

  /**
   * @public
   * <p>The recommendation job type.</p>
   */
  JobType: RecommendationJobType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;

  /**
   * @public
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The name of the created model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored.
   *          This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn?: string;
}

/**
 * @public
 * <p>The details for a specific benchmark from an Inference Recommender job.</p>
 */
export interface RecommendationJobInferenceBenchmark {
  /**
   * @public
   * <p>The metrics of recommendations.</p>
   */
  Metrics?: RecommendationMetrics;

  /**
   * @public
   * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
   */
  EndpointMetrics?: InferenceMetrics;

  /**
   * @public
   * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
   */
  EndpointConfiguration?: EndpointOutputConfiguration;

  /**
   * @public
   * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * @public
   * <p>The reason why a benchmark failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A timestamp that shows when the benchmark completed.</p>
   */
  InvocationEndTime?: Date;

  /**
   * @public
   * <p>A timestamp that shows when the benchmark started.</p>
   */
  InvocationStartTime?: Date;
}

/**
 * @public
 * @enum
 */
export const RecommendationStepType = {
  BENCHMARK: "BENCHMARK",
} as const;

/**
 * @public
 */
export type RecommendationStepType = (typeof RecommendationStepType)[keyof typeof RecommendationStepType];

/**
 * @public
 * <p>A returned array object for the <code>Steps</code> response field in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html">ListInferenceRecommendationsJobSteps</a> API command.</p>
 */
export interface InferenceRecommendationsJobStep {
  /**
   * @public
   * <p>The type of the subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType: RecommendationStepType | undefined;

  /**
   * @public
   * <p>The name of the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The current status of the benchmark.</p>
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * @public
   * <p>The details for a specific benchmark.</p>
   */
  InferenceBenchmark?: RecommendationJobInferenceBenchmark;
}

/**
 * @public
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * @public
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * @public
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * @public
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

/**
 * @public
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * @public
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * @public
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account used to start the labeling
   *             job.</p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * @public
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * @public
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

/**
 * @public
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * @public
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * @public
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * @public
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * @public
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

/**
 * @public
 * <p>Metadata for a Lambda step.</p>
 */
export interface LambdaStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of the output parameters of the Lambda step.</p>
   */
  OutputParameters?: OutputParameter[];
}

/**
 * @public
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 */
export interface LineageGroupSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * @public
   * <p>The display name of the lineage group summary.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The creation time of the lineage group summary.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last modified time of the lineage group summary.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const LineageType = {
  ACTION: "Action",
  ARTIFACT: "Artifact",
  CONTEXT: "Context",
  TRIAL_COMPONENT: "TrialComponent",
} as const;

/**
 * @public
 */
export type LineageType = (typeof LineageType)[keyof typeof LineageType];

/**
 * @public
 * @enum
 */
export const SortActionsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortActionsBy = (typeof SortActionsBy)[keyof typeof SortActionsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * @public
   * <p>A filter that returns only actions with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only actions of the specified type.</p>
   */
  ActionType?: string;

  /**
   * @public
   * <p>A filter that returns only actions created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only actions created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortActionsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions,
   *         the call returns a token for getting the next set of actions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of actions to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * @public
   * <p>A list of actions and their properties.</p>
   */
  ActionSummaries?: ActionSummary[];

  /**
   * @public
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAlgorithmsInput {
  /**
   * @public
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListAlgorithmsOutput {
  /**
   * @public
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The alias of the image version.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The version of the image. If image version is not specified, the aliases of all versions of the image are listed.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The maximum number of aliases to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListAliases</code> didn't return the full set of
   *          aliases, the call returns a token for retrieving the next set of aliases.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * @public
   * <p>A list of SageMaker image version aliases.</p>
   */
  SageMakerImageVersionAliases?: string[];

  /**
   * @public
   * <p>A token for getting the next set of aliases, if more aliases exist.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppImageConfigsRequest {
  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *          number of items available is more than the value specified, a <code>NextToken</code>
   *          is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *          value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *         AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: AppImageConfigSortKey;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListAppImageConfigsResponse {
  /**
   * @public
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of AppImageConfigs and their properties.</p>
   */
  AppImageConfigs?: AppImageConfigDetails[];
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *           number of items available is more than the value specified, a <code>NextToken</code>
   *           is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *           value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: AppSortKey;

  /**
   * @public
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * @public
   * <p>A parameter to search by user profile name. If <code>SpaceNameEquals</code> is set, then this value cannot be set.</p>
   */
  UserProfileNameEquals?: string;

  /**
   * @public
   * <p>A parameter to search by space name. If <code>UserProfileNameEquals</code> is set,
   *             then this value cannot be set.</p>
   */
  SpaceNameEquals?: string;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * @public
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortArtifactsBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortArtifactsBy = (typeof SortArtifactsBy)[keyof typeof SortArtifactsBy];

/**
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * @public
   * <p>A filter that returns only artifacts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only artifacts of the specified type.</p>
   */
  ArtifactType?: string;

  /**
   * @public
   * <p>A filter that returns only artifacts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only artifacts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortArtifactsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts,
   *         the call returns a token for getting the next set of artifacts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of artifacts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListArtifactsResponse {
  /**
   * @public
   * <p>A list of artifacts and their properties.</p>
   */
  ArtifactSummaries?: ArtifactSummary[];

  /**
   * @public
   * <p>A token for getting the next set of artifacts, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortAssociationsBy = {
  CREATION_TIME: "CreationTime",
  DESTINATION_ARN: "DestinationArn",
  DESTINATION_TYPE: "DestinationType",
  SOURCE_ARN: "SourceArn",
  SOURCE_TYPE: "SourceType",
} as const;

/**
 * @public
 */
export type SortAssociationsBy = (typeof SortAssociationsBy)[keyof typeof SortAssociationsBy];

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * @public
   * <p>A filter that returns only associations with the specified source ARN.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified destination Amazon Resource Name (ARN).</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified source type.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified destination type.</p>
   */
  DestinationType?: string;

  /**
   * @public
   * <p>A filter that returns only associations of the specified type.</p>
   */
  AssociationType?: AssociationEdgeType;

  /**
   * @public
   * <p>A filter that returns only associations created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only associations created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortAssociationsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations,
   *         the call returns a token for getting the next set of associations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of associations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAssociationsResponse {
  /**
   * @public
   * <p>A list of associations and their properties.</p>
   */
  AssociationSummaries?: AssociationSummary[];

  /**
   * @public
   * <p>A token for getting the next set of associations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAutoMLJobsRequest {
  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is <code>Name</code>.</p>
   */
  SortBy?: AutoMLSortBy;

  /**
   * @public
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAutoMLJobsResponse {
  /**
   * @public
   * <p>Returns a summary list of jobs.</p>
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobRequest {
  /**
   * @public
   * <p>List the candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * @public
   * <p>List the candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus;

  /**
   * @public
   * <p>List the candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *          <code>Descending</code>.</p>
   */
  SortBy?: CandidateSortBy;

  /**
   * @public
   * <p>List the job's candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobResponse {
  /**
   * @public
   * <p>Summaries about the <code>AutoMLCandidates</code>.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterNodesRequest {
  /**
   * @public
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which you want to retrieve the list of nodes.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created after the specified time. Timestamps are
   *          formatted according to the ISO 8601 standard. </p>
   *          <p>Acceptable formats include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example,
   *                   <code>2014-10-01T20:30:00.000Z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example,
   *                   <code>2014-10-01T12:30:00.000-08:00</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred to as Unix
   *                Epoch time and represents the number of seconds since midnight, January 1, 1970
   *                UTC.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The
   *          acceptable formats are the same as the timestamp formats for
   *          <code>CreationTimeAfter</code>. For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns the instance groups whose name contain a specified string.</p>
   */
  InstanceGroupNameContains?: string;

  /**
   * @public
   * <p>The maximum number of nodes to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous <code>ListClusterNodes</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of cluster nodes, use
   *          the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field by which to sort results. The default value is
   *          <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ClusterSortBy;

  /**
   * @public
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListClusterNodesResponse {
  /**
   * @public
   * <p>The next token specified for listing instances in a SageMaker HyperPod cluster.</p>
   */
  NextToken: string | undefined;

  /**
   * @public
   * <p>The summaries of listed instances in a SageMaker HyperPod cluster</p>
   */
  ClusterNodeSummaries: ClusterNodeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * @public
   * <p>Set a start time for the time range during which you want to list SageMaker HyperPod clusters.
   *          Timestamps are formatted according to the ISO 8601 standard. </p>
   *          <p>Acceptable formats include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example,
   *                   <code>2014-10-01T20:30:00.000Z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example,
   *                   <code>2014-10-01T12:30:00.000-08:00</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred
   *                to as Unix Epoch time and represents the number of seconds since midnight, January 1,
   *                1970 UTC.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Set an end time for the time range during which you want to list SageMaker HyperPod clusters. A
   *          filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable
   *          formats are the same as the timestamp formats for <code>CreationTimeAfter</code>. For more
   *          information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Set the maximum number of SageMaker HyperPod clusters to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Set the maximum number of instances to print in the list.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Set the next token to retrieve the list of SageMaker HyperPod clusters.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field by which to sort results. The default value is
   *          <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ClusterSortBy;

  /**
   * @public
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * @public
   * <p>If the result of the previous <code>ListClusters</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of clusters, use the
   *          token in the next request.</p>
   */
  NextToken: string | undefined;

  /**
   * @public
   * <p>The summaries of listed SageMaker HyperPod clusters.</p>
   */
  ClusterSummaries: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesInput {
  /**
   * @public
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder;
}

/**
 * @public
 */
export interface ListCodeRepositoriesOutput {
  /**
   * @public
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *          <ul>
   *             <li>
   *                <p>Name</p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Creation time</p>
   *             </li>
   *             <li>
   *                <p>Last modified time</p>
   *             </li>
   *             <li>
   *                <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the Amazon Web Services Secrets Manager secret that contains the
   *                     credentials used to access the repository.</p>
   *             </li>
   *          </ul>
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * @public
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListCompilationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListCompilationJobsSortBy = (typeof ListCompilationJobsSortBy)[keyof typeof ListCompilationJobsSortBy];

/**
 * @public
 */
export interface ListCompilationJobsRequest {
  /**
   * @public
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves model compilation jobs with a specific
   *                 <code>CompilationJobStatus</code> status.</p>
   */
  StatusEquals?: CompilationJobStatus;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListCompilationJobsResponse {
  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html">CompilationJobSummary</a> objects, each describing a model compilation job.
   *         </p>
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortContextsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortContextsBy = (typeof SortContextsBy)[keyof typeof SortContextsBy];

/**
 * @public
 */
export interface ListContextsRequest {
  /**
   * @public
   * <p>A filter that returns only contexts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only contexts of the specified type.</p>
   */
  ContextType?: string;

  /**
   * @public
   * <p>A filter that returns only contexts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only contexts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortContextsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts,
   *         the call returns a token for getting the next set of contexts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of contexts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListContextsResponse {
  /**
   * @public
   * <p>A list of contexts and their properties.</p>
   */
  ContextSummaries?: ContextSummary[];

  /**
   * @public
   * <p>A token for getting the next set of contexts, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringJobDefinitionSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type MonitoringJobDefinitionSortKey =
  (typeof MonitoringJobDefinitionSortKey)[keyof typeof MonitoringJobDefinitionSortKey];

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsRequest {
  /**
   * @public
   * <p>A filter that lists the data quality job definitions associated with the specified
   *          endpoint.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          transform jobs, use the token in the next request.></p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of data quality monitoring job definitions to return in the
   *          response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the data quality monitoring job definition name. This filter returns only
   *          data quality monitoring job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only data quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only data quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 * <p>Summary information about a monitoring job.</p>
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * @public
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The time that the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The name of the endpoint that the job monitors.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsResponse {
  /**
   * @public
   * <p>A list of data quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data
   *          quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListDeviceFleetsSortBy = {
  CreationTime: "CREATION_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListDeviceFleetsSortBy = (typeof ListDeviceFleetsSortBy)[keyof typeof ListDeviceFleetsSortBy];

/**
 * @public
 */
export interface ListDeviceFleetsRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter fleets where packaging job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Filter fleets where the edge packaging job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Select fleets where the job was updated after X</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Select fleets where the job was updated before X</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for fleets containing this name in their fleet device name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>The column to sort by.</p>
   */
  SortBy?: ListDeviceFleetsSortBy;

  /**
   * @public
   * <p>What direction to sort in.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListDeviceFleetsResponse {
  /**
   * @public
   * <p>Summary of the device fleet.</p>
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Select fleets where the job was updated after X</p>
   */
  LatestHeartbeatAfter?: Date;

  /**
   * @public
   * <p>A filter that searches devices that contains this name in any of their models.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>Filter for fleets containing this name in their device fleet name.</p>
   */
  DeviceFleetName?: string;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * @public
   * <p>Summary of devices.</p>
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *           number of items available is more than the value specified, a <code>NextToken</code>
   *           is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *           value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * @public
   * <p>The list of domains.</p>
   */
  Domains?: DomainDetails[];

  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListEdgeDeploymentPlansSortBy = {
  CreationTime: "CREATION_TIME",
  DeviceFleetName: "DEVICE_FLEET_NAME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgeDeploymentPlansSortBy =
  (typeof ListEdgeDeploymentPlansSortBy)[keyof typeof ListEdgeDeploymentPlansSortBy];

/**
 * @public
 */
export interface ListEdgeDeploymentPlansRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need
   *             tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Selects edge deployment plans created after this time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans created before this time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans that were last updated after this time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans that were last updated before this time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans with names containing this name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Selects edge deployment plans with a device fleet name containing this name.</p>
   */
  DeviceFleetNameContains?: string;

  /**
   * @public
   * <p>The column by which to sort the edge deployment plans. Can be one of
   *             <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>,
   *                 <code>LASTMODIFIEDTIME</code>.</p>
   */
  SortBy?: ListEdgeDeploymentPlansSortBy;

  /**
   * @public
   * <p>The direction of the sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListEdgeDeploymentPlansResponse {
  /**
   * @public
   * <p>List of summaries of edge deployment plans.</p>
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

  /**
   * @public
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListEdgePackagingJobsSortBy = {
  CreationTime: "CREATION_TIME",
  EdgePackagingJobStatus: "STATUS",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  ModelName: "MODEL_NAME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgePackagingJobsSortBy =
  (typeof ListEdgePackagingJobsSortBy)[keyof typeof ListEdgePackagingJobsSortBy];

/**
 * @public
 */
export interface ListEdgePackagingJobsRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Select jobs where the job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Select jobs where the job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Select jobs where the job was updated after specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Select jobs where the job was updated before specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for jobs containing this name in their packaging job name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Filter for jobs where the model name contains this string.</p>
   */
  ModelNameContains?: string;

  /**
   * @public
   * <p>The job status to filter for.</p>
   */
  StatusEquals?: EdgePackagingJobStatus;

  /**
   * @public
   * <p>Use to specify what column to sort by.</p>
   */
  SortBy?: ListEdgePackagingJobsSortBy;

  /**
   * @public
   * <p>What direction to sort by.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListEdgePackagingJobsResponse {
  /**
   * @public
   * <p>Summaries of edge packaging jobs.</p>
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * @public
   * <p>Token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OrderKey = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type OrderKey = (typeof OrderKey)[keyof typeof OrderKey];

/**
 * @public
 */
export interface ListEndpointConfigsInput {
  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEndpointConfigsOutput {
  /**
   * @public
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEndpointsInput {
  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus;
}

/**
 * @public
 */
export interface ListEndpointsOutput {
  /**
   * @public
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortExperimentsBy = (typeof SortExperimentsBy)[keyof typeof SortExperimentsBy];

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * @public
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of experiments to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * @public
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];

  /**
   * @public
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFeatureGroupsRequest {
  /**
   * @public
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters
   *             <code>FeatureGroup</code>s by name. </p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus;

  /**
   * @public
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status.
   *       </p>
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue;

  /**
   * @public
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific
   *          date and time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific
   *          date and time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The order in which feature groups are listed.</p>
   */
  SortOrder?: FeatureGroupSortOrder;

  /**
   * @public
   * <p>The value on which the feature group list is sorted.</p>
   */
  SortBy?: FeatureGroupSortBy;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListFeatureGroups</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFeatureGroupsResponse {
  /**
   * @public
   * <p>A summary of feature groups.</p>
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFlowDefinitionsRequest {
  /**
   * @public
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFlowDefinitionsResponse {
  /**
   * @public
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentsRequest {
  /**
   * @public
   * <p>The name of the hub to list the contents of.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of hub content to list.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>Only list hub content if the name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>The upper bound of the hub content schema verion.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * @public
   * <p>Only list hub content that was created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hub content that was created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy;

  /**
   * @public
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum amount of hub content to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubContents</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentsResponse {
  /**
   * @public
   * <p>The summaries of the listed hub content.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentVersionsRequest {
  /**
   * @public
   * <p>The name of the hub to list the content versions of.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of hub content to list versions of.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The lower bound of the hub content versions to list.</p>
   */
  MinVersion?: string;

  /**
   * @public
   * <p>The upper bound of the hub content schema version.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * @public
   * <p>Only list hub content versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hub content versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy;

  /**
   * @public
   * <p>Sort hub content versions by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of hub content versions to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubContentVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content versions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentVersionsResponse {
  /**
   * @public
   * <p>The summaries of the listed hub content versions.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubsRequest {
  /**
   * @public
   * <p>Only list hubs with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Only list hubs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hubs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list hubs that were last modified before the time specified.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hubs that were last modified after the time specified.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hubs by either name or creation time.</p>
   */
  SortBy?: HubSortBy;

  /**
   * @public
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of hubs to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hubs, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubsResponse {
  /**
   * @public
   * <p>The summaries of the listed hubs.</p>
   */
  HubSummaries: HubInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHumanTaskUisRequest {
  /**
   * @public
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListHumanTaskUisResponse {
  /**
   * @public
   * <p>An array of objects describing the human task user interfaces.</p>
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsRequest {
  /**
   * @public
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsResponse {
  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * @public
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * @public
   * <p>A filter that returns only images created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only images created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only images modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only images modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of images to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only images whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images,
   *         the call returns a token for getting the next set of images.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageSortBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageSortOrder;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * @public
   * <p>A list of images and their properties.</p>
   */
  Images?: Image[];

  /**
   * @public
   * <p>A token for getting the next set of images, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImageVersionsRequest {
  /**
   * @public
   * <p>A filter that returns only versions created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only versions created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The name of the image to list the versions of.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>A filter that returns only versions modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only versions modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of versions to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of
   *         versions, the call returns a token for getting the next set of versions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageVersionSortBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageVersionSortOrder;
}

/**
 * @public
 */
export interface ListImageVersionsResponse {
  /**
   * @public
   * <p>A list of versions and their properties.</p>
   */
  ImageVersions?: ImageVersion[];

  /**
   * @public
   * <p>A token for getting the next set of versions, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInferenceComponentsInput {
  /**
   * @public
   * <p>The field by which to sort the inference components in the response. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: InferenceComponentSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>A token that you use to get the next set of results following a truncated response. If
   *          the response to the previous request was truncated, that response provides the value for
   *          this token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of inference components to return in the response. This value
   *          defaults to 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the results to only those inference components with a name that contains the
   *          specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Filters the results to only those inference components that were created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Filters the results to only those inference components that were created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Filters the results to only those inference components that were updated before the
   *          specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Filters the results to only those inference components that were updated after the
   *          specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Filters the results to only those inference components with the specified status.</p>
   */
  StatusEquals?: InferenceComponentStatus;

  /**
   * @public
   * <p>An endpoint name to filter the listed inference components. The response includes only
   *          those inference components that are hosted at the specified endpoint.</p>
   */
  EndpointNameEquals?: string;

  /**
   * @public
   * <p>A production variant name to filter the listed inference components. The response
   *          includes only those inference components that are hosted at the specified variant.</p>
   */
  VariantNameEquals?: string;
}

/**
 * @public
 */
export interface ListInferenceComponentsOutput {
  /**
   * @public
   * <p>A list of inference components and their properties that matches any of the filters you
   *          specified in the request.</p>
   */
  InferenceComponents: InferenceComponentSummary[] | undefined;

  /**
   * @public
   * <p>The token to use in a subsequent request to get the next set of results following a
   *          truncated response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortInferenceExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortInferenceExperimentsBy = (typeof SortInferenceExperimentsBy)[keyof typeof SortInferenceExperimentsBy];

/**
 * @public
 */
export interface ListInferenceExperimentsRequest {
  /**
   * @public
   * <p>Selects inference experiments whose names contain this name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>
   *            Selects inference experiments of this type. For the possible types of inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>.
   *        </p>
   */
  Type?: InferenceExperimentType;

  /**
   * @public
   * <p>
   *            Selects inference experiments which are in this status. For the possible statuses, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>.
   *        </p>
   */
  StatusEquals?: InferenceExperimentStatus;

  /**
   * @public
   * <p>Selects inference experiments which were created after this timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were created before this timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were last modified after this timestamp.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were last modified before this timestamp.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The column by which to sort the listed inference experiments.</p>
   */
  SortBy?: SortInferenceExperimentsBy;

  /**
   * @public
   * <p>The direction of sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>
   *            The response from the last list when returning a list large enough to need tokening.
   *        </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInferenceExperimentsResponse {
  /**
   * @public
   * <p>List of inference experiments.</p>
   */
  InferenceExperiments?: InferenceExperimentSummary[];

  /**
   * @public
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListInferenceRecommendationsJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListInferenceRecommendationsJobsSortBy =
  (typeof ListInferenceRecommendationsJobsSortBy)[keyof typeof ListInferenceRecommendationsJobsSortBy];

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsRequest {
  /**
   * @public
   * <p>A filter that returns only jobs created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs that were last modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs that were last modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A string in the job name. This filter returns only recommendations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves only inference recommendations jobs with a specific status.</p>
   */
  StatusEquals?: RecommendationJobStatus;

  /**
   * @public
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy;

  /**
   * @public
   * <p>The sort order for the results.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request
   *          was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *          of recommendations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of recommendations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only jobs that were created for this model.</p>
   */
  ModelNameEquals?: string;

  /**
   * @public
   * <p>A filter that returns only jobs that were created for this versioned model package.</p>
   */
  ModelPackageVersionArnEquals?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsResponse {
  /**
   * @public
   * <p>The recommendations created from the Amazon SageMaker Inference Recommender job.</p>
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * @public
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsRequest {
  /**
   * @public
   * <p>The name for the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned.</p>
   */
  Status?: RecommendationJobStatus;

  /**
   * @public
   * <p>A filter to return details about the specified type of subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType?: RecommendationStepType;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsResponse {
  /**
   * @public
   * <p>A list of all subtask details in Inference Recommender.</p>
   */
  Steps?: InferenceRecommendationsJobStep[];

  /**
   * @public
   * <p>A token that you can specify in your next request to return more results from the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 */
export interface ListLabelingJobsRequest {
  /**
   * @public
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   */
  StatusEquals?: LabelingJobStatus;
}

/**
 * @public
 */
export interface ListLabelingJobsResponse {
  /**
   * @public
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListLabelingJobsForWorkteamSortByOptions = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type ListLabelingJobsForWorkteamSortByOptions =
  (typeof ListLabelingJobsForWorkteamSortByOptions)[keyof typeof ListLabelingJobsForWorkteamSortByOptions];

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamResponse {
  /**
   * @public
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortLineageGroupsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortLineageGroupsBy = (typeof SortLineageGroupsBy)[keyof typeof SortLineageGroupsBy];

/**
 * @public
 */
export interface ListLineageGroupsRequest {
  /**
   * @public
   * <p>A timestamp to filter against lineage groups created after a certain point in time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A timestamp to filter against lineage groups created before a certain point in time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *          <code>CreationTime</code>.</p>
   */
  SortBy?: SortLineageGroupsBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *          10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLineageGroupsResponse {
  /**
   * @public
   * <p>A list of lineage groups and their properties.</p>
   */
  LineageGroupSummaries?: LineageGroupSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsRequest {
  /**
   * @public
   * <p>Name of the endpoint to monitor for model bias.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model bias jobs to return in the response. The default value is
   *          10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortBy = (typeof ModelCardExportJobSortBy)[keyof typeof ModelCardExportJobSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortOrder =
  (typeof ModelCardExportJobSortOrder)[keyof typeof ModelCardExportJobSortOrder];

/**
 * @public
 */
export interface ListModelCardExportJobsRequest {
  /**
   * @public
   * <p>List export jobs for the model card with the specified name.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>List export jobs for the model card with the specified version.</p>
   */
  ModelCardVersion?: number;

  /**
   * @public
   * <p>Only list model card export jobs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model card export jobs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list model card export jobs with names that contain the specified string.</p>
   */
  ModelCardExportJobNameContains?: string;

  /**
   * @public
   * <p>Only list model card export jobs with the specified status.</p>
   */
  StatusEquals?: ModelCardExportJobStatus;

  /**
   * @public
   * <p>Sort model card export jobs by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardExportJobSortBy;

  /**
   * @public
   * <p>Sort model card export jobs by ascending or descending order.</p>
   */
  SortOrder?: ModelCardExportJobSortOrder;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCardExportJobs</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model card export jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model card export jobs to list.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the Amazon SageMaker Model Card export job.</p>
 */
export interface ModelCardExportJobSummary {
  /**
   * @public
   * <p>The name of the model card export job.</p>
   */
  ModelCardExportJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * @public
   * <p>The completion status of the model card export job.</p>
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * @public
   * <p>The name of the model card that the export job exports.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card that the export job exports.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The date and time that the model card export job was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the model card export job was last modified..</p>
   */
  LastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsResponse {
  /**
   * @public
   * <p>The summaries of the listed model card export jobs.</p>
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card export jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelCardSortBy = (typeof ModelCardSortBy)[keyof typeof ModelCardSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardSortOrder = (typeof ModelCardSortOrder)[keyof typeof ModelCardSortOrder];

/**
 * @public
 */
export interface ListModelCardsRequest {
  /**
   * @public
   * <p>Only list model cards that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model cards that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model cards to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Only list model cards with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Only list model cards with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCards</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of model cards, use
   *          the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Sort model cards by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardSortBy;

  /**
   * @public
   * <p>Sort model cards by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * @public
 * <p>A summary of the model card.</p>
 */
export interface ModelCardSummary {
  /**
   * @public
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

  /**
   * @public
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draft</code>: The model card is a work in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingReview</code>: The model card is pending review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approved</code>: The model card is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>: The model card is archived. No more updates should be made to the model
   *                card, but it can still be exported.</p>
   *             </li>
   *          </ul>
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * @public
   * <p>The date and time that the model card was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the model card was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardsResponse {
  /**
   * @public
   * <p>The summaries of the listed model cards.</p>
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          cards, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardVersionSortBy = {
  VERSION: "Version",
} as const;

/**
 * @public
 */
export type ModelCardVersionSortBy = (typeof ModelCardVersionSortBy)[keyof typeof ModelCardVersionSortBy];

/**
 * @public
 */
export interface ListModelCardVersionsRequest {
  /**
   * @public
   * <p>Only list model card versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model card versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model card versions to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>List model card versions for the model card with the specified name or Amazon Resource Name (ARN).</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>Only list model card versions with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCardVersions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of model card
   *          versions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Sort listed model card versions by version. Sorts by version by default.</p>
   */
  SortBy?: ModelCardVersionSortBy;

  /**
   * @public
   * <p>Sort model card versions by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * @public
 * <p>A summary of a specific version of the model card.</p>
 */
export interface ModelCardVersionSummary {
  /**
   * @public
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

  /**
   * @public
   * <p>The approval status of the model card version within your organization. Different organizations might have different criteria for model card review and approval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draft</code>: The model card is a work in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingReview</code>: The model card is pending review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approved</code>: The model card is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>: The model card is archived. No more updates should be made to the model
   *                card, but it can still be exported.</p>
   *             </li>
   *          </ul>
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * @public
   * <p>A version of the model card.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The date and time that the model card version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time date and time that the model card version was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardVersionsResponse {
  /**
   * @public
   * <p>The summaries of the listed versions of the model card.</p>
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * @public
   * <p>Name of the endpoint to monitor for model explainability.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model explainability jobs created before a specified
   *          time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model explainability jobs created after a specified
   *          time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelMetadataFilterType = {
  DOMAIN: "Domain",
  FRAMEWORK: "Framework",
  FRAMEWORKVERSION: "FrameworkVersion",
  TASK: "Task",
} as const;

/**
 * @public
 */
export type ModelMetadataFilterType = (typeof ModelMetadataFilterType)[keyof typeof ModelMetadataFilterType];

/**
 * @public
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 */
export interface ModelMetadataFilter {
  /**
   * @public
   * <p>The name of the of the model to filter by.</p>
   */
  Name: ModelMetadataFilterType | undefined;

  /**
   * @public
   * <p>The value to filter the model metadata.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 */
export interface ModelMetadataSearchExpression {
  /**
   * @public
   * <p>A list of filter objects.</p>
   */
  Filters?: ModelMetadataFilter[];
}

/**
 * @public
 */
export interface ListModelMetadataRequest {
  /**
   * @public
   * <p>One or more filters that searches for the specified resource or resources
   *           in a search. All resource objects that satisfy the expression's condition are
   *           included in the search results. Specify the  Framework, FrameworkVersion, Domain
   *           or Task to filter supported. Filter names and values are case-sensitive.</p>
   */
  SearchExpression?: ModelMetadataSearchExpression;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated,
   *            the response includes a NextToken. To retrieve the next set of model metadata,
   *            use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of the model metadata.</p>
 */
export interface ModelMetadataSummary {
  /**
   * @public
   * <p>The machine learning domain of the model.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The machine learning framework of the model.</p>
   */
  Framework: string | undefined;

  /**
   * @public
   * <p>The machine learning task of the model.</p>
   */
  Task: string | undefined;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  Model: string | undefined;

  /**
   * @public
   * <p>The framework version of the model.</p>
   */
  FrameworkVersion: string | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataResponse {
  /**
   * @public
   * <p>A structure that holds model metadata.</p>
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * @public
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelPackageGroupSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageGroupSortBy = (typeof ModelPackageGroupSortBy)[keyof typeof ModelPackageGroupSortBy];

/**
 * @public
 */
export interface ListModelPackageGroupsInput {
  /**
   * @public
   * <p>A filter that returns only model groups created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only model groups created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model group name. This filter returns only model groups whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             model groups, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageGroupSortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Summary information about a model group.</p>
 */
export interface ModelPackageGroupSummary {
  /**
   * @public
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * @public
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * @public
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListModelPackageGroupsOutput {
  /**
   * @public
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set
   *             of model groups, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelPackageType = {
  BOTH: "Both",
  UNVERSIONED: "Unversioned",
  VERSIONED: "Versioned",
} as const;

/**
 * @public
 */
export type ModelPackageType = (typeof ModelPackageType)[keyof typeof ModelPackageType];

/**
 * @public
 * @enum
 */
export const ModelPackageSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageSortBy = (typeof ModelPackageSortBy)[keyof typeof ModelPackageSortBy];

/**
 * @public
 */
export interface ListModelPackagesInput {
  /**
   * @public
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only the model packages with the specified approval
   *             status.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>A filter that returns only the model packages of the specified type. This can be one
   *             of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNVERSIONED</code> - List only unversioined models.
   *                     This is the default value if no <code>ModelPackageType</code> is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERSIONED</code> - List only versioned models.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOTH</code> - List both versioned and unversioned models.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageType?: ModelPackageType;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * @public
   * <p>The name of the model package.</p>
   */
  ModelPackageName?: string;

  /**
   * @public
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>If the model package is a versioned model, the version of the model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * @public
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * @public
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * @public
   * <p>The approval status of the model. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus;
}

/**
 * @public
 */
export interface ListModelPackagesOutput {
  /**
   * @public
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsRequest {
  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions that are associated
   *          with the specified endpoint.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a call to
   *             <code>ListModelQualityJobDefinitions</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the transform job name. This filter returns only model quality monitoring
   *          job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsResponse {
  /**
   * @public
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the
   *          next set of model quality monitoring job definitions, use it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type ModelSortKey = (typeof ModelSortKey)[keyof typeof ModelSortKey];

/**
 * @public
 */
export interface ListModelsInput {
  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model name. This filter returns only models whose name contains the
   *             specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  /**
   * @public
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsOutput {
  /**
   * @public
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringAlertHistorySortKey = {
  CreationTime: "CreationTime",
  Status: "Status",
} as const;

/**
 * @public
 */
export type MonitoringAlertHistorySortKey =
  (typeof MonitoringAlertHistorySortKey)[keyof typeof MonitoringAlertHistorySortKey];

/**
 * @public
 * @enum
 */
export const MonitoringAlertStatus = {
  IN_ALERT: "InAlert",
  OK: "OK",
} as const;

/**
 * @public
 */
export type MonitoringAlertStatus = (typeof MonitoringAlertStatus)[keyof typeof MonitoringAlertStatus];

/**
 * @public
 */
export interface ListMonitoringAlertHistoryRequest {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;

  /**
   * @public
   * <p>The field used to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringAlertHistorySortKey;

  /**
   * @public
   * <p>The sort order, whether <code>Ascending</code> or <code>Descending</code>, of the alert
   *          history. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListMonitoringAlertHistory</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          alerts in the history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only alerts created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only alerts created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that retrieves only alerts with a specific status.</p>
   */
  StatusEquals?: MonitoringAlertStatus;
}

/**
 * @public
 * <p>Provides summary information of an alert's history.</p>
 */
export interface MonitoringAlertHistorySummary {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when the first alert transition occurred in an alert history.
   *       An alert transition can be from status <code>InAlert</code> to <code>OK</code>,
   *       or from <code>OK</code> to <code>InAlert</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The current alert status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryResponse {
  /**
   * @public
   * <p>An alert history for a model monitoring schedule.</p>
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMonitoringAlertsRequest {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListMonitoringAlerts</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the
   *          history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into
 *             <code>InAlert</code> status.</p>
 */
export interface ModelDashboardIndicatorAction {
  /**
   * @public
   * <p>Indicates whether the alert action is turned on.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>A list of alert actions taken in response to an alert going into
 *             <code>InAlert</code> status.</p>
 */
export interface MonitoringAlertActions {
  /**
   * @public
   * <p>An alert action taken to light up an icon on the Model Dashboard when an alert goes into
   *          <code>InAlert</code> status.</p>
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction;
}

/**
 * @public
 * <p>Provides summary information about a monitor alert.</p>
 */
export interface MonitoringAlertSummary {
  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when a monitor alert was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when a monitor alert was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The current status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | undefined;

  /**
   * @public
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   */
  DatapointsToAlert: number | undefined;

  /**
   * @public
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   */
  EvaluationPeriod: number | undefined;

  /**
   * @public
   * <p>A list of alert actions taken in response to an alert going into
   *             <code>InAlert</code> status.</p>
   */
  Actions: MonitoringAlertActions | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsResponse {
  /**
   * @public
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringExecutionSortKey = {
  CREATION_TIME: "CreationTime",
  SCHEDULED_TIME: "ScheduledTime",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringExecutionSortKey = (typeof MonitoringExecutionSortKey)[keyof typeof MonitoringExecutionSortKey];

/**
 * @public
 */
export interface ListMonitoringExecutionsRequest {
  /**
   * @public
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus;

  /**
   * @public
   * <p>Gets a list of the monitoring job runs of the specified monitoring job
   *          definitions.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>A filter that returns only the monitoring job runs of the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringScheduleSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringScheduleSortKey = (typeof MonitoringScheduleSortKey)[keyof typeof MonitoringScheduleSortKey];

/**
 * @public
 */
export interface ListMonitoringSchedulesRequest {
  /**
   * @public
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringScheduleSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus;

  /**
   * @public
   * <p>Gets a list of the monitoring schedules for the specified monitoring job
   *          definition.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>A filter that returns only the monitoring schedules for the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * @public
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  /**
   * @public
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * @public
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * @public
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringType?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortKey = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortKey =
  (typeof NotebookInstanceLifecycleConfigSortKey)[keyof typeof NotebookInstanceLifecycleConfigSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortOrder =
  (typeof NotebookInstanceLifecycleConfigSortOrder)[keyof typeof NotebookInstanceLifecycleConfigSortOrder];

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * @public
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey;

  /**
   * @public
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder;

  /**
   * @public
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;
}

/**
 * @public
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * @public
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortKey = (typeof NotebookInstanceSortKey)[keyof typeof NotebookInstanceSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortOrder = (typeof NotebookInstanceSortOrder)[keyof typeof NotebookInstanceSortOrder];

/**
 * @public
 */
export interface ListNotebookInstancesInput {
  /**
   * @public
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *          <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *          </note>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey;

  /**
   * @public
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder;

  /**
   * @public
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus;

  /**
   * @public
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * @public
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * @public
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;
}

/**
 * @public
 * <p>Provides summary information for an SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  /**
   * @public
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * @public
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus;

  /**
   * @public
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
   */
  Url?: string;

  /**
   * @public
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * @public
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * @public
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

/**
 * @public
 */
export interface ListNotebookInstancesOutput {
  /**
   * @public
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

/**
 * @public
 * @enum
 */
export const SortPipelineExecutionsBy = {
  CREATION_TIME: "CreationTime",
  PIPELINE_EXECUTION_ARN: "PipelineExecutionArn",
} as const;

/**
 * @public
 */
export type SortPipelineExecutionsBy = (typeof SortPipelineExecutionsBy)[keyof typeof SortPipelineExecutionsBy];

/**
 * @public
 */
export interface ListPipelineExecutionsRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>A filter that returns the pipeline executions that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the pipeline executions that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelineExecutionsBy;

  /**
   * @public
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipeline executions to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A pipeline execution summary.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>The start time of the pipeline execution.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus;

  /**
   * @public
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * @public
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * @public
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   */
  PipelineExecutionFailureReason?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * @public
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified
   *          filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date,
   *          and the status. This list can be empty. </p>
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a processing job step.</p>
 */
export interface ProcessingJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Container for the metadata for a Quality check step. For more information, see
 *          the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *       </p>
 */
export interface QualityCheckStepMetadata {
  /**
   * @public
   * <p>The type of the Quality check step.</p>
   */
  CheckType?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckStatistics?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   */
  CalculatedBaselineStatistics?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   */
  CalculatedBaselineConstraints?: string;

  /**
   * @public
   * <p>The model package group name.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   */
  ViolationReport?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   */
  CheckJobArn?: string;

  /**
   * @public
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   */
  SkipCheck?: boolean;

  /**
   * @public
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *          <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *          These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code>
   *             BaselineUsedForDriftCheckStatistics</code> properties. </p>
   */
  RegisterNewBaseline?: boolean;
}

/**
 * @public
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a training job step.</p>
 */
export interface TrainingJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a tuning step.</p>
 */
export interface TuningJobStepMetaData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a step execution.</p>
 */
export interface PipelineExecutionStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   */
  Model?: ModelStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.</p>
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * @public
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   */
  Condition?: ConditionStepMetadata;

  /**
   * @public
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   */
  Callback?: CallbackStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   */
  Lambda?: LambdaStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The Boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  QualityCheck?: QualityCheckStepMetadata;

  /**
   * @public
   * <p>Container for the metadata for a Clarify check step. The configurations
   *          and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted,</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  ClarifyCheck?: ClarifyCheckStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of a Fail step execution.</p>
   */
  Fail?: FailStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AutoML job that was run by this step.</p>
   */
  AutoMLJob?: AutoMLJobStepMetadata;
}
