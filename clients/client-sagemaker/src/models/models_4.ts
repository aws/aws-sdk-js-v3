// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSecurityGroupManagement,
  BooleanOperator,
  Channel,
  CheckpointConfig,
  DefaultSpaceSettings,
  EdgeOutputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  StoppingCondition,
  Tag,
  UserContext,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  CrossAccountFilterOption,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentConfig,
  ExperimentConfig,
  FeatureDefinition,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InstanceMetadataServiceConfiguration,
  JobType,
  MemberDefinition,
  ModelCardStatus,
  ModelVariantConfig,
  MonitoringScheduleConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OidcConfig,
  OidcConfigFilterSensitiveLog,
  ParallelismConfiguration,
  PipelineDefinitionS3Location,
  Processor,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  RetryStrategy,
  RootAccess,
  ShadowModeConfig,
  SourceIpConfig,
  SpaceSettings,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UserSettings,
  VendorGuidance,
  WorkforceVpcConfigRequest,
} from "./models_1";
import {
  DesiredWeightAndCapacity,
  Device,
  DomainSettingsForUpdate,
  Endpoint,
  Experiment,
  FeatureGroup,
  FeatureMetadata,
  FeatureParameter,
  Filter,
  MetricData,
  ModelArtifacts,
  SecondaryStatus,
  SecondaryStatusTransition,
  SelectiveExecutionConfig,
  TrainingJobStatus,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  Workforce,
  Workteam,
} from "./models_2";
import {
  GitConfigForUpdate,
  HyperParameterTuningJobSearchEntity,
  InferenceExperimentStopDesiredState,
  ModelCard,
  ModelCardFilterSensitiveLog,
  ModelDashboardModel,
  ModelPackage,
  ModelPackageGroup,
  ModelVariantAction,
  NestedFilters,
  OnlineStoreConfigUpdate,
  Parameter,
  Parent,
  Pipeline,
  PipelineExecution,
  ProcessingJob,
  ProfilerConfigForUpdate,
  Project,
  ResourceConfigForUpdate,
  ResourceType,
  TransformJob,
} from "./models_3";

/**
 * @public
 */
export interface RetryPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface RetryPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 * @enum
 */
export const SearchSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SearchSortOrder = (typeof SearchSortOrder)[keyof typeof SearchSortOrder];

/**
 * @public
 * <p>Contains information about a training job.</p>
 */
export interface TrainingJob {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *          <p>Training job statuses are:</p>
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
   *          <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus | string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html">SecondaryStatusTransition</a>.</p>
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
  SecondaryStatus?: SecondaryStatus | string;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the
   *             training job.</p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   *          <p>Your input must be in the same Amazon Web Services region as your training job.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
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
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A short summary of a trial component.</p>
 */
export interface TrialComponentSimpleSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;
}

/**
 * @public
 * <p>The properties of a trial as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 */
export interface Trial {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The list of tags that are associated with the trial. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
   *       API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

/**
 * @public
 * <p>Detailed information about the source of a trial component. Either
 *         <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.</p>
 */
export interface TrialComponentSourceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>Information about a training job that's the source of a trial component.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>Information about a processing job that's the source of a trial component.</p>
   */
  ProcessingJob?: ProcessingJob;

  /**
   * <p>Information about a transform job that's the source of a trial component.</p>
   */
  TransformJob?: TransformJob;
}

/**
 * @public
 * <p>The properties of a trial component as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
 *       API.</p>
 */
export interface TrialComponent {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The list of tags that are associated with the component. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];

  /**
   * <p>The name of the experiment run.</p>
   */
  RunName?: string;
}

/**
 * @public
 * <p>A single resource returned as part of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API response.</p>
 */
export interface SearchRecord {
  /**
   * <p>The properties of a training job.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>The properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * <p>The properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * <p>The properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;

  /**
   * <p>A hosted endpoint for real-time inference.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>A versioned model that can be deployed for SageMaker inference.</p>
   */
  ModelPackage?: ModelPackage;

  /**
   * <p>A group of versioned models in the model registry.</p>
   */
  ModelPackageGroup?: ModelPackageGroup;

  /**
   * <p>A SageMaker Model Building Pipeline instance.</p>
   */
  Pipeline?: Pipeline;

  /**
   * <p>An execution of a pipeline.</p>
   */
  PipelineExecution?: PipelineExecution;

  /**
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
   *          Feature Group can be visualized as a table which has rows, with a unique identifier for
   *          each row where each column in the table is a feature. In principle, a Feature Group is
   *          composed of features and values per features.</p>
   */
  FeatureGroup?: FeatureGroup;

  /**
   * <p>The properties of a project.</p>
   */
  Project?: Project;

  /**
   * <p>The feature metadata used to search through the features.</p>
   */
  FeatureMetadata?: FeatureMetadata;

  /**
   * <p>The properties of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;

  /**
   * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
   */
  Model?: ModelDashboardModel;

  /**
   * <p>An Amazon SageMaker Model Card that documents details about a machine learning model.</p>
   */
  ModelCard?: ModelCard;
}

/**
 * @public
 */
export interface SearchResponse {
  /**
   * <p>A list of <code>SearchRecord</code> objects.</p>
   */
  Results?: SearchRecord[];

  /**
   * <p>If the result of the previous <code>Search</code> request was truncated, the response
   *       includes a NextToken. To retrieve the next set of results, use the token in the next
   *       request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * <p>A message describing why the step failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * <p>A list of the output parameters of the callback step.</p>
   */
  OutputParameters?: OutputParameter[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StartEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to start.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to start.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to start.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentResponse {
  /**
   * <p>The ARN of the started inference experiment to start.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>The selective execution configuration applied to the pipeline run.</p>
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}

/**
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopAutoMLJobRequest {
  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface StopCompilationJobRequest {
  /**
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to stop.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to stop.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to stop.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *            Array of key-value pairs, with names of variants mapped to actions. The possible actions are the following:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Promote</code> - Promote the shadow variant to a production variant</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Remove</code> - Delete the variant</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retain</code> - Keep the variant as it is</p>
   *             </li>
   *          </ul>
   */
  ModelVariantActions: Record<string, ModelVariantAction | string> | undefined;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant that you want to deploy
   *            after the inference experiment stops. Each <code>ModelVariantConfig</code> describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   */
  DesiredModelVariants?: ModelVariantConfig[];

  /**
   * <p>
   *            The desired state of the experiment after stopping. The possible states are the following:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The experiment completed successfully</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelled</code>: The experiment was canceled</p>
   *             </li>
   *          </ul>
   */
  DesiredState?: InferenceExperimentStopDesiredState | string;

  /**
   * <p>The reason for stopping the experiment.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface StopInferenceExperimentResponse {
  /**
   * <p>The ARN of the stopped inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job you want to stop.</p>
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface StopLabelingJobRequest {
  /**
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StopNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StopPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopProcessingJobRequest {
  /**
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingJobRequest {
  /**
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTransformJobRequest {
  /**
   * <p>The name of the batch transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionRequest {
  /**
   * <p>The name of the action to update.</p>
   */
  ActionName: string | undefined;

  /**
   * <p>The new description for the action.</p>
   */
  Description?: string;

  /**
   * <p>The new status for the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

/**
 * @public
 */
export interface UpdateAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to update.</p>
   */
  AppImageConfigName: string | undefined;

  /**
   * <p>The new KernelGateway app to run on the image.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

/**
 * @public
 */
export interface UpdateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

/**
 * @public
 */
export interface UpdateArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to update.</p>
   */
  ArtifactArn: string | undefined;

  /**
   * <p>The new name for the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   */
  GitConfig?: GitConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateContextRequest {
  /**
   * <p>The name of the context to update.</p>
   */
  ContextName: string | undefined;

  /**
   * <p>The new description for the context.</p>
   */
  Description?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

/**
 * @public
 */
export interface UpdateDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  RoleArn?: string;

  /**
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Output configuration  for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *       The name of the role alias generated will match this pattern:
   *       "SageMakerEdge-\{DeviceFleetName\}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

/**
 * @public
 */
export interface UpdateDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>List of devices to register with Edge Manager agent.</p>
   */
  Devices: Device[] | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * <p>The ID of the domain to be updated.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>A collection of <code>DomainSettings</code> configuration values to update.</p>
   */
  DomainSettingsForUpdate?: DomainSettingsForUpdate;

  /**
   * <p>The default settings used to create a space within the Domain.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided. If setting up the domain for use with RStudio, this value must be set to
   *                 <code>Service</code>.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

/**
 * @public
 * @enum
 */
export const VariantPropertyType = {
  DataCaptureConfig: "DataCaptureConfig",
  DesiredInstanceCount: "DesiredInstanceCount",
  DesiredWeight: "DesiredWeight",
} as const;

/**
 * @public
 */
export type VariantPropertyType = (typeof VariantPropertyType)[keyof typeof VariantPropertyType];

/**
 * @public
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *          <p>If you are updating an endpoint with the <code>RetainAllVariantProperties</code>
 *             option of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> set to <code>true</code>, the
 *                 <code>VariantProperty</code> objects listed in the
 *                 <code>ExcludeRetainedVariantProperties</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> override the existing variant properties of the
 *             endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <code>InitialInstanceCount</code> values in the
   *                         <code>ProductionVariants</code> of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <code>InitialVariantWeight</code> values in the
   *                         <code>ProductionVariants</code> of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointInput {
  /**
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>When updating endpoint resources, enables or disables the retention of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">variant properties</a>, such as the instance count or the variant weight. To
   *             retain the variant properties of an endpoint when updating it, set
   *                 <code>RetainAllVariantProperties</code> to <code>true</code>. To use the variant
   *             properties specified in a new <code>EndpointConfig</code> call when updating an
   *             endpoint, set <code>RetainAllVariantProperties</code> to <code>false</code>. The default
   *             is <code>false</code>.</p>
   */
  RetainAllVariantProperties?: boolean;

  /**
   * <p>When you are updating endpoint resources with <code>RetainAllVariantProperties</code>,
   *             whose value is set to <code>true</code>, <code>ExcludeRetainedVariantProperties</code>
   *             specifies the list of type <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">VariantProperty</a>
   *             to override with the values provided by <code>EndpointConfig</code>. If you don't
   *             specify a value for <code>ExcludeRetainedVariantProperties</code>, no variant properties
   *             are overridden. </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   */
  RetainDeploymentConfig?: boolean;
}

/**
 * @public
 */
export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * <p>The name of an existing SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

/**
 * @public
 */
export interface UpdateFeatureGroupRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Updates the feature group. Updating a feature group is an asynchronous operation. When
   *          you get an HTTP 200 response, you've made a valid request. It takes some time after you've
   *          made a valid request for Feature Store to update the feature group.</p>
   */
  FeatureAdditions?: FeatureDefinition[];

  /**
   * <p>Updates the feature group online store configuration.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfigUpdate;
}

/**
 * @public
 */
export interface UpdateFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureMetadataRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the feature that
   *          you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you're updating.</p>
   */
  FeatureName: string | undefined;

  /**
   * <p>A description that you can write to better describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>A list of key-value pairs that you can add to better describe the feature.</p>
   */
  ParameterAdditions?: FeatureParameter[];

  /**
   * <p>A list of parameter keys that you can specify to remove parameters that describe your
   *          feature.</p>
   */
  ParameterRemovals?: string[];
}

/**
 * @public
 */
export interface UpdateHubRequest {
  /**
   * <p>The name of the hub to update.</p>
   */
  HubName: string | undefined;

  /**
   * <p>A description of the updated hub.</p>
   */
  HubDescription?: string;

  /**
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];
}

/**
 * @public
 */
export interface UpdateHubResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated hub.</p>
   */
  HubArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageRequest {
  /**
   * <p>A list of properties to delete. Only the <code>Description</code> and
   *         <code>DisplayName</code> properties can be deleted.</p>
   */
  DeleteProperties?: string[];

  /**
   * <p>The new description for the image.</p>
   */
  Description?: string;

  /**
   * <p>The new display name for the image.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the image to update.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The new ARN for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateImageResponse {
  /**
   * <p>The ARN of the image.</p>
   */
  ImageArn?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The alias of the image version.</p>
   */
  Alias?: string;

  /**
   * <p>The version of the image.</p>
   */
  Version?: number;

  /**
   * <p>A list of aliases to add.</p>
   */
  AliasesToAdd?: string[];

  /**
   * <p>A list of aliases to delete.</p>
   */
  AliasesToDelete?: string[];

  /**
   * <p>The availability of the image version specified by the maintainer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOT_PROVIDED</code>: The maintainers did not provide a status for image version stability.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STABLE</code>: The image version is stable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TO_BE_ARCHIVED</code>: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: The image version is archived. Archived image versions are not searchable and are no longer actively supported. </p>
   *             </li>
   *          </ul>
   */
  VendorGuidance?: VendorGuidance | string;

  /**
   * <p>Indicates SageMaker job type compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TRAINING</code>: The image version is compatible with SageMaker training jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFERENCE</code>: The image version is compatible with SageMaker inference jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK_KERNEL</code>: The image version is compatible with SageMaker notebook kernels.</p>
   *             </li>
   *          </ul>
   */
  JobType?: JobType | string;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   */
  MLFramework?: string;

  /**
   * <p>The supported programming language and its version.</p>
   */
  ProgrammingLang?: string;

  /**
   * <p>Indicates CPU or GPU compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CPU</code>: The image version is compatible with CPU.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU</code>: The image version is compatible with GPU.</p>
   *             </li>
   *          </ul>
   */
  Processor?: Processor | string;

  /**
   * <p>Indicates Horovod compatibility.</p>
   */
  Horovod?: boolean;

  /**
   * <p>The maintainer description of the image version.</p>
   */
  ReleaseNotes?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionResponse {
  /**
   * <p>The ARN of the image version.</p>
   */
  ImageVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *            The duration for which the inference experiment will run. If the status of the inference experiment is
   *            <code>Created</code>, then you can update both the start and end dates. If the status of the inference
   *            experiment is <code>Running</code>, then you can update only the end date.
   *        </p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant, whose infrastructure
   *            configuration you want to update.
   *        </p>
   */
  ModelVariants?: ModelVariantConfig[];

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type. Use this field to specify a
   *            production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a
   *            percentage of the inference requests. For the shadow variant also specify the percentage of requests that
   *            Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig?: ShadowModeConfig;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentResponse {
  /**
   * <p>The ARN of the updated inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelCardRequest {
  /**
   * <p>The name of the model card to update.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The updated model card content. Content must be in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
   *          <p>When updating model card content, be sure to include the full content and not just updated content.</p>
   */
  Content?: string;

  /**
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
  ModelCardStatus?: ModelCardStatus | string;
}

/**
 * @public
 */
export interface UpdateModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated model card.</p>
   */
  ModelCardArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelPackageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The approval status of the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>A description for the approval status of the model.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>The metadata properties associated with the model package versions to remove.</p>
   */
  CustomerMetadataPropertiesToRemove?: string[];

  /**
   * <p>An array of additional Inference Specification objects to be added to the
   *     existing array additional Inference Specification. Total number of additional
   *     Inference Specifications can not exceed 15. Each additional Inference Specification
   *     specifies artifacts based on this model package that can be used on inference endpoints.
   *     Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];
}

/**
 * @public
 */
export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   */
  DatapointsToAlert: number | undefined;

  /**
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   */
  EvaluationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   */
  RoleArn?: string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in
   *             Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAdditionalCodeRepositories?: boolean;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *          <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *          </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceOutput {}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigOutput {}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>If specified, it applies to all executions of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 * <p>Details that you specify to provision a service catalog product.
 *             For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
 *         </p>
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog.
   *             The provisioning artifact ID will default to the latest provisioning artifact
   *             ID of the product, if you don't provide the provisioning artifact ID. For more
   *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
   *         </p>
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your
   *             Amazon Web Services resources in different ways, for example, by purpose, owner, or
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.
   *             In addition, the project must have tag update constraints set in order to include this
   *             parameter in the request.  For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html">Amazon Web Services Service
   *                 Catalog Tag Update Constraints</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;
}

/**
 * @public
 */
export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The training job <code>ResourceConfig</code> to update warm pool retention
   *             length.</p>
   */
  ResourceConfig?: ResourceConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialRequest {
  /**
   * <p>The name of the trial to update.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * @public
 */
export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *             name by using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html">ListWorkforces</a> operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *          <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *          <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *          <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

/**
 * @public
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * <p>The name of the SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       A cross account filter option. When the value is <code>"CrossAccount"</code> the
   *       search results will only include resources made discoverable to you from other
   *       accounts. When the value is <code>"SameAccount"</code> or <code>null</code> the
   *       search results will only include resources from your account. Default is
   *       <code>null</code>. For more information on searching for resources made
   *       discoverable to your account, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html">
   *         Search discoverable resources</a> in the SageMaker Developer Guide.
   *       The maximum number of <code>ResourceCatalog</code>s viewable is 1000.
   *     </p>
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | string;
}

/**
 * @internal
 */
export const SearchRecordFilterSensitiveLog = (obj: SearchRecord): any => ({
  ...obj,
  ...(obj.TrialComponent && { TrialComponent: obj.TrialComponent }),
  ...(obj.ModelCard && { ModelCard: ModelCardFilterSensitiveLog(obj.ModelCard) }),
});

/**
 * @internal
 */
export const SearchResponseFilterSensitiveLog = (obj: SearchResponse): any => ({
  ...obj,
  ...(obj.Results && { Results: obj.Results.map((item) => SearchRecordFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateModelCardRequestFilterSensitiveLog = (obj: UpdateModelCardRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateWorkforceRequestFilterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});
