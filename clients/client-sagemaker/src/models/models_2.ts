// smithy-typescript generated code
import {
  ActionSummary,
  AdditionalInferenceSpecificationDefinition,
  AgentVersion,
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmSummary,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppSortKey,
  AppSpecification,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchStrategy,
  CandidateSortBy,
  CandidateStatus,
  Channel,
  CheckpointConfig,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CognitoConfig,
  CompilationJobStatus,
  CompilationJobSummary,
  ContainerDefinition,
  ContextSummary,
  EdgeOutputConfig,
  FeatureDefinition,
  FeatureType,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStrategyType,
  InferenceSpecification,
  MetadataProperties,
  ModelApprovalStatus,
  ModelPackageStatus,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  ObjectiveStatus,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputDataConfig,
  OutputParameter,
  ProductionVariantInstanceType,
  ResourceConfig,
  ResourceLimits,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DirectInternetAccess,
  DomainStatus,
  DriftCheckBaselines,
  EdgePackagingJobStatus,
  EndpointStatus,
  ExperimentConfig,
  ExperimentSource,
  FeatureGroupStatus,
  FeatureParameter,
  FlowDefinitionStatus,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExecutionConfig,
  InstanceMetadataServiceConfiguration,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  LastUpdateStatus,
  MemberDefinition,
  ModelArtifacts,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelClientConfig,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelMetrics,
  ModelPackageValidationSpecification,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OfflineStoreStatus,
  OfflineStoreStatusValue,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariantSummary,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RecommendationJobType,
  RetryStrategy,
  RootAccess,
  RuleEvaluationStatus,
  ServiceCatalogProvisioningDetails,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
} from "./models_1";

export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace DescribeHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinalHyperParameterTuningJobObjectiveMetric): any => ({
    ...obj,
  });
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>The container for the summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *         <ul>
   *             <li>
   *                 <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus | string;
}

export namespace HyperParameterTrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobSummary): any => ({
    ...obj,
  });
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

export namespace ObjectiveStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
    ...obj,
  });
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export namespace TrainingJobStatusCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace DescribeHyperParameterTuningJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   */
  ImageName: string | undefined;
}

export namespace DescribeImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageRequest): any => ({
    ...obj,
  });
}

export enum ImageStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The name of the image.</p>
   */
  ImageName?: string;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus?: ImageStatus | string;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace DescribeImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageVersionRequest): any => ({
    ...obj,
  });
}

export enum ImageVersionStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   */
  BaseImage?: string;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   */
  ContainerImage?: string;

  /**
   * <p>When the version was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn?: string;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn?: string;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus?: ImageVersionStatus | string;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The version number.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;
}

export namespace DescribeInferenceRecommendationsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInferenceRecommendationsJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;
}

export namespace EndpointOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointOutputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The metrics of recommendations.</p>
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   */
  CostPerHour: number | undefined;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   */
  CostPerInference: number | undefined;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   */
  ModelLatency: number | undefined;
}

export namespace RecommendationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 */
export interface EnvironmentParameter {
  /**
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  ValueType: string | undefined;

  /**
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Value: string | undefined;
}

export namespace EnvironmentParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 */
export interface ModelConfiguration {
  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   */
  EnvironmentParameters?: EnvironmentParameter[];
}

export namespace ModelConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 */
export interface InferenceRecommendation {
  /**
   * <p>The metrics used to decide what recommendation to make.</p>
   */
  Metrics: RecommendationMetrics | undefined;

  /**
   * <p>Defines the endpoint configuration parameters.</p>
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;
}

export namespace InferenceRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceRecommendation): any => ({
    ...obj,
  });
}

export enum RecommendationJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The job description that you provided when you initiated the job.</p>
   */
  JobDescription?: string;

  /**
   * <p>The job type that you provided when you initiated the job.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  JobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services
   *            Identity and Access Management (IAM) role you provided when you initiated the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations you provided when you initiated the job.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>The stopping conditions that you provided when you initiated the job.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * <p>The recommendations made by Inference Recommender.</p>
   */
  InferenceRecommendations?: InferenceRecommendation[];
}

export namespace DescribeInferenceRecommendationsJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInferenceRecommendationsJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeLabelingJobRequest {
  /**
   * <p>The name of the labeling job to return information for.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace DescribeLabelingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLabelingJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

export namespace LabelCounters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelCounters): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

export namespace LabelingJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobOutput): any => ({
    ...obj,
  });
}

export enum LabelingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeLabelingJobResponse {
  /**
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the job's output data and the Amazon Web Services Key Management Service key ID for the key used to
   *             encrypt the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data
   *             objects. Please note the following label-category limits:</p>
   *         <ul>
   *             <li>
   *                 <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p>
   *             </li>
   *             <li>
   *                 <p>Box bounding labeling jobs (all): 10 labels</p>
   *             </li>
   *          </ul>
   *         <p>The file is a JSON structure in the following format:</p>
   *         <p>
   *             <code>{</code>
   *         </p>
   *         <p>
   *             <code> "document-version": "2018-11-28"</code>
   *         </p>
   *         <p>
   *             <code> "labels": [</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> ...</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label n</i>"</code>
   *         </p>
   *         <p>
   *             <code> }</code>
   *         </p>
   *         <p>
   *             <code> ]</code>
   *         </p>
   *         <p>
   *             <code>}</code>
   *         </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;
}

export namespace DescribeLabelingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLabelingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeLineageGroupRequest {
  /**
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

export namespace DescribeLineageGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLineageGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeLineageGroupResponse {
  /**
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The display name of the lineage group.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the lineage group.</p>
   */
  Description?: string;

  /**
   * <p>The creation time of lineage group.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The last modified time of the lineage group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace DescribeLineageGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLineageGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelInput {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;
}

export namespace DescribeModelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelInput): any => ({
    ...obj,
  });
}

export interface DescribeModelOutput {
  /**
   * <p>Name of the SageMaker model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export namespace DescribeModelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelOutput): any => ({
    ...obj,
  });
}

export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition. The name must be unique within an Amazon Web Services Region
   *          in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DescribeModelBiasJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelBiasJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model bias job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export namespace DescribeModelBiasJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelBiasJobDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition. The name must be unique within an
   *          Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelExplainabilityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the explainability job definition. The name must be unique within an Amazon Web Services
   *          Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model explainability job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * <p>Configures the model explainability job to run a specified Docker container
   *          image.</p>
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export namespace DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelExplainabilityJobDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to describe.</p>
   *         <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DescribeModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelPackageInput): any => ({
    ...obj,
  });
}

export enum DetailedModelPackageStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted",
}

/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

export namespace ModelPackageStatusItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageStatusItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

export namespace ModelPackageStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageStatusDetails): any => ({
    ...obj,
  });
}

export interface DescribeModelPackageOutput {
  /**
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model is a versioned model, the name of the model group that the versioned
   *             model belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version of the model package.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Whether the model package is certified for listing on Amazon Web Services Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The approval status of the model package.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time that the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided for the model approval.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>The machine learning domain of the model package you specified. Common machine
   *     learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task you specified that your model package accomplishes.
   *      Common machine learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single
   *     gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *     Inference Specification specifies artifacts based on this model package that can
   *     be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
}

export namespace DescribeModelPackageOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelPackageOutput): any => ({
    ...obj,
  });
}

export interface DescribeModelPackageGroupInput {
  /**
   * <p>The name of gthe model group to describe.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export namespace DescribeModelPackageGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelPackageGroupInput): any => ({
    ...obj,
  });
}

export enum ModelPackageGroupStatus {
  COMPLETED = "Completed",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

export interface DescribeModelPackageGroupOutput {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | string | undefined;
}

export namespace DescribeModelPackageGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelPackageGroupOutput): any => ({
    ...obj,
  });
}

export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality job. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export namespace DescribeModelQualityJobDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelQualityJobDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the quality job definition. The name must be unique within an Amazon Web Services Region in
   *          the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model quality job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model quality job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * <p>Configures the model quality job to run a specified Docker container image.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>Inputs for the model quality job.</p>
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model quality job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export namespace DescribeModelQualityJobDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelQualityJobDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeMonitoringScheduleRequest {
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DescribeMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export enum ExecutionStatus {
  COMPLETED = "Completed",
  COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringExecutionSummary): any => ({
    ...obj,
  });
}

export enum ScheduleStatus {
  FAILED = "Failed",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  STOPPED = "Stopped",
}

export interface DescribeMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The type of the monitoring job that this schedule runs. This is one of the following
   *          values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DATA_QUALITY</code> - The schedule is for a data quality monitoring
   *                job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_QUALITY</code> - The schedule is for a model quality monitoring
   *                job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_BIAS</code> - The schedule is for a bias monitoring job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_EXPLAINABILITY</code> - The schedule is for an explainability
   *                monitoring job.</p>
   *             </li>
   *          </ul>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}

export namespace DescribeMonitoringScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DescribeNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceInput): any => ({
    ...obj,
  });
}

export enum NotebookInstanceStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Updating = "Updating",
}

export interface DescribeNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>The name of the SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Web Services KMS key ID SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The network interface IDs that SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *         </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>Describes whether SageMaker provides internet access to the notebook instance. If this
   *             value is set to <i>Disabled</i>, the notebook instance does not have
   *             internet access, and cannot connect to SageMaker training and endpoint services.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   */
  PlatformIdentifier?: string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export namespace DescribeNotebookInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceOutput): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

export interface DescribePipelineRequest {
  /**
   * <p>The name of the pipeline to describe.</p>
   */
  PipelineName: string | undefined;
}

export namespace DescribePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineRequest): any => ({
    ...obj,
  });
}

export enum PipelineStatus {
  ACTIVE = "Active",
}

export interface DescribePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineStatus?: PipelineStatus | string;

  /**
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Lists the parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace DescribePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineResponse): any => ({
    ...obj,
  });
}

export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

export namespace DescribePipelineDefinitionForExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineDefinitionForExecutionRequest): any => ({
    ...obj,
  });
}

export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribePipelineDefinitionForExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineDefinitionForExecutionResponse): any => ({
    ...obj,
  });
}

export interface DescribePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

export namespace DescribePipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineExecutionRequest): any => ({
    ...obj,
  });
}

export enum PipelineExecutionStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

/**
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 */
export interface PipelineExperimentConfig {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace PipelineExperimentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExperimentConfig): any => ({
    ...obj,
  });
}

export interface DescribePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time when the pipeline execution was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the pipeline execution was modified last.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace DescribePipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface DescribeProcessingJobRequest {
  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace DescribeProcessingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProcessingJobRequest): any => ({
    ...obj,
  });
}

export enum ProcessingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeProcessingJobResponse {
  /**
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;
}

export namespace DescribeProcessingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProcessingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeProjectInput {
  /**
   * <p>The name of the project to describe.</p>
   */
  ProjectName: string | undefined;
}

export namespace DescribeProjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectInput): any => ({
    ...obj,
  });
}

export enum ProjectStatus {
  CREATE_COMPLETED = "CreateCompleted",
  CREATE_FAILED = "CreateFailed",
  CREATE_IN_PROGRESS = "CreateInProgress",
  DELETE_COMPLETED = "DeleteCompleted",
  DELETE_FAILED = "DeleteFailed",
  DELETE_IN_PROGRESS = "DeleteInProgress",
  PENDING = "Pending",
  UPDATE_COMPLETED = "UpdateCompleted",
  UPDATE_FAILED = "UpdateFailed",
  UPDATE_IN_PROGRESS = "UpdateInProgress",
}

/**
 * <p>Details of a provisioned service catalog product. For information about service catalog,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * <p>The ID of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The current status of the product.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *          </ul>
   */
  ProvisionedProductStatusMessage?: string;
}

export namespace ServiceCatalogProvisionedProductDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisionedProductDetails): any => ({
    ...obj,
  });
}

export interface DescribeProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>Information used to provision a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *             Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>Information about a provisioned service catalog product.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | string | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The time when the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp when project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace DescribeProjectOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectOutput): any => ({
    ...obj,
  });
}

export interface DescribeStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

export namespace DescribeStudioLifecycleConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStudioLifecycleConfigRequest): any => ({
    ...obj,
  });
}

export interface DescribeStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of the Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * <p>The name of the Studio Lifecycle Configuration that is described.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The content of your Studio Lifecycle Configuration script.</p>
   */
  StudioLifecycleConfigContent?: string;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | string;
}

export namespace DescribeStudioLifecycleConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStudioLifecycleConfigResponse): any => ({
    ...obj,
  });
}

export interface DescribeSubscribedWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace DescribeSubscribedWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSubscribedWorkteamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;
}

export namespace SubscribedWorkteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscribedWorkteam): any => ({
    ...obj,
  });
}

export interface DescribeSubscribedWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

export namespace DescribeSubscribedWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSubscribedWorkteamResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrainingJobRequest {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace DescribeTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrainingJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}

export namespace MetricData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricData): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ProfilerRuleEvaluationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerRuleEvaluationStatus): any => ({
    ...obj,
  });
}

export enum ProfilingStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum SecondaryStatus {
  COMPLETED = "Completed",
  DOWNLOADING = "Downloading",
  DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage",
  FAILED = "Failed",
  INTERRUPTED = "Interrupted",
  LAUNCHING_ML_INSTANCES = "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded",
  PREPARING_TRAINING_STACK = "PreparingTrainingStack",
  RESTARTING = "Restarting",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  TRAINING = "Training",
  UPDATING = "Updating",
  UPLOADING = "Uploading",
}

/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides
 *             additional details about a status that the training job has transitioned through. A
 *             training job can be in one of several states, for example, starting, downloading,
 *             training, or uploading. Within each state, there are a number of intermediate states.
 *             For example, within the starting state, SageMaker could be starting the training job or
 *             launching the ML instances. These transitional states are referred to as the job's
 *             secondary
 *             status.
 *             </p>
 *         <p></p>
 */
export interface SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *         <p>Status might be one of the following secondary statuses:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Status: SecondaryStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *         <p>SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>Launching requested ML
   *                                 instances.</p>
   *                         </li>
   *                   <li>
   *                             <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                         </li>
   *                   <li>
   *                             <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                         </li>
   *                   <li>
   *                             <p>Preparing the instances for training.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Downloading the training image.</p>
   *                         </li>
   *                   <li>
   *                             <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *         </important>
   *         <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For
   *             example, at the start of a training job, you might see the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

export namespace SecondaryStatusTransition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
    ...obj,
  });
}

export interface DescribeTrainingJobResponse {
  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The status of the training job.</p>
   *         <p>SageMaker provides the following training job statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *         <p>For more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a>SecondaryStatusTransition</a>.</p>
   *         <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Interrupted</code> - The job stopped because the managed
   *                                 spot training instances were interrupted. </p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>MaxWaitTimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed wait time.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *
   *         <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *         </important>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTraining</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus: SecondaryStatus | string | undefined;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
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
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
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
   * <p>The billable time in seconds. Billable time refers to the absolute wall-clock
   *             time.</p>
   *         <p>Multiply <code>BillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run distributed training. The formula is as follows:
   *                 <code>BillableTimeInSeconds * InstanceCount</code> .</p>
   *         <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
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
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Configuration information for Debugger rules for debugging output tensors.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Evaluation status of Debugger rules for debugging on a training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>Evaluation status of Debugger rules for profiling on a training job.</p>
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[];

  /**
   * <p>Profiling status of a training job.</p>
   */
  ProfilingStatus?: ProfilingStatus | string;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;
}

export namespace DescribeTrainingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrainingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTransformJobRequest {
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   */
  TransformJobName: string | undefined;
}

export namespace DescribeTransformJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTransformJobRequest): any => ({
    ...obj,
  });
}

export enum TransformJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeTransformJobResponse {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
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
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request.
   *             A <i>record</i>
   *             <i></i> is a single unit of input data that inference
   *             can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set <code>SplitType</code>
   *             to
   *                 <code>Line</code>, <code>RecordIO</code>, or
   *             <code>TFRecord</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
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
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export namespace DescribeTransformJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTransformJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrialRequest {
  /**
   * <p>The name of the trial to describe.</p>
   */
  TrialName: string | undefined;
}

export namespace DescribeTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrialRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialSource): any => ({
    ...obj,
  });
}

export interface DescribeTrialResponse {
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
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
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
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;
}

export namespace DescribeTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrialResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrialComponentRequest {
  /**
   * <p>The name of the trial component to describe.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DescribeTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrialComponentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;
}

export namespace TrialComponentMetricSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentMetricSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 */
export interface TrialComponentSource {
  /**
   * <p>The source ARN.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialComponentSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSource): any => ({
    ...obj,
  });
}

export interface DescribeTrialComponentResponse {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialComponentSource;

  /**
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
   * <p>Who last modified the component.</p>
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
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export namespace DescribeTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrialComponentResponse): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface DescribeUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DescribeUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
    ...obj,
  });
}

export enum UserProfileStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeUserProfileResponse {
  /**
   * <p>The ID of the domain that contains the profile.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System (EFS) volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The SSO user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The SSO user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace DescribeUserProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserProfileResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorkforceRequest {
  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

export namespace DescribeWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkforceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId?: string;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer?: string;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;
}

export namespace OidcConfigForResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OidcConfigForResponse): any => ({
    ...obj,
  });
}

export enum WorkforceStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  UPDATING = "Updating",
}

/**
 * <p>A VpcConfig object that specifies the VPC that you want your workforce to connect to.</p>
 */
export interface WorkforceVpcConfigResponse {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.</p>
   */
  VpcEndpointId?: string;
}

export namespace WorkforceVpcConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkforceVpcConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   */
  SubDomain?: string;

  /**
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The configuration of a VPC workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse;

  /**
   * <p>The status of your workforce.</p>
   */
  Status?: WorkforceStatus | string;

  /**
   * <p>The reason your workforce failed.</p>
   */
  FailureReason?: string;
}

export namespace Workforce {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workforce): any => ({
    ...obj,
  });
}

export interface DescribeWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace DescribeWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkforceResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorkteamRequest {
  /**
   * <p>The name of the work team to return a description of.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DescribeWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkteamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace Workteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workteam): any => ({
    ...obj,
  });
}

export interface DescribeWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   */
  Workteam: Workteam | undefined;
}

export namespace DescribeWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  /**
   * <p>The name of the variant to update.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;
}

export namespace DesiredWeightAndCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Information of a particular device.</p>
 */
export interface Device {
  /**
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Description of the device.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Web Services Internet of Things (IoT) object name.</p>
   */
  IotThingName?: string;
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

export enum DeviceDeploymentStatus {
  Deployed = "DEPLOYED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  ReadyToDeploy = "READYTODEPLOY",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

/**
 * <p>Contains information summarizing device details and deployment status.</p>
 */
export interface DeviceDeploymentSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage in the edge deployment plan.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The name of the deployed stage.</p>
   */
  DeployedStageName?: string;

  /**
   * <p>The name of the fleet to which the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The ARN of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>The deployment status of the device.</p>
   */
  DeviceDeploymentStatus?: DeviceDeploymentStatus | string;

  /**
   * <p>The detailed error message for the deployoment status result.</p>
   */
  DeviceDeploymentStatusMessage?: string;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The time when the deployment on the device started.</p>
   */
  DeploymentStartTime?: Date;
}

export namespace DeviceDeploymentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceDeploymentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of the device fleet.</p>
 */
export interface DeviceFleetSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the device fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>Name of the device fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace DeviceFleetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceFleetSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Status of devices.</p>
 */
export interface DeviceStats {
  /**
   * <p>The number of devices connected with a heartbeat.</p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of registered devices.</p>
   */
  RegisteredDeviceCount: number | undefined;
}

export namespace DeviceStats {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceStats): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of model on edge device.</p>
 */
export interface EdgeModelSummary {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The version model.</p>
   */
  ModelVersion: string | undefined;
}

export namespace EdgeModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModelSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime?: Date;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModelSummary[];

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export namespace DeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
}

export enum Direction {
  ASCENDANTS = "Ascendants",
  BOTH = "Both",
  DESCENDANTS = "Descendants",
}

export interface DisableSagemakerServicecatalogPortfolioInput {}

export namespace DisableSagemakerServicecatalogPortfolioInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSagemakerServicecatalogPortfolioInput): any => ({
    ...obj,
  });
}

export interface DisableSagemakerServicecatalogPortfolioOutput {}

export namespace DisableSagemakerServicecatalogPortfolioOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSagemakerServicecatalogPortfolioOutput): any => ({
    ...obj,
  });
}

export interface DisassociateTrialComponentRequest {
  /**
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;
}

export namespace DisassociateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTrialComponentResponse {
  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace DisassociateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrialComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

export namespace DomainDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of settings that update the current configuration for the <code>RStudioServerPro</code> Domain-level app.</p>
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * <p>The execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace RStudioServerProDomainSettingsForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RStudioServerProDomainSettingsForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of <code>Domain</code> configuration settings to update.</p>
 */
export interface DomainSettingsForUpdate {
  /**
   * <p>A collection of <code>RStudioServerPro</code> Domain-level app settings to update.</p>
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;
}

export namespace DomainSettingsForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainSettingsForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A directed edge connecting two lineage entities.</p>
 */
export interface Edge {
  /**
   * <p>The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The type of the Association(Edge) between the source and destination. For example <code>ContributedTo</code>,
   *          <code>Produced</code>, or <code>DerivedFrom</code>.</p>
   */
  AssociationType?: AssociationEdgeType | string;
}

export namespace Edge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information summarizing an edge deployment plan.</p>
 */
export interface EdgeDeploymentPlanSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the device fleet used for the deployment. </p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment, or in progress.</p>
   */
  EdgeDeploymentPending: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed: number | undefined;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace EdgeDeploymentPlanSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeDeploymentPlanSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Status of edge devices with this model.</p>
 */
export interface EdgeModelStat {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The number of devices that have this model version and do not have a heart beat.</p>
   */
  OfflineDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version and have a heart beat. </p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version, a heart beat, and are currently running.</p>
   */
  ActiveDeviceCount: number | undefined;

  /**
   * <p>The number of devices with this model version and are producing sample data.</p>
   */
  SamplingDeviceCount: number | undefined;
}

export namespace EdgeModelStat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeModelStat): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of edge packaging job.</p>
 */
export interface EdgePackagingJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The status of the edge packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The timestamp of when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the edge packaging job was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace EdgePackagingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgePackagingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
 */
export interface EMRStepMetadata {
  /**
   * <p>The identifier of the EMR cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The identifier of the EMR cluster step.</p>
   */
  StepId?: string;

  /**
   * <p>The name of the EMR cluster step.</p>
   */
  StepName?: string;

  /**
   * <p>The path to the log file where the cluster step's failure root cause
   *             is recorded.</p>
   */
  LogFilePath?: string;
}

export namespace EMRStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EMRStepMetadata): any => ({
    ...obj,
  });
}

export interface EnableSagemakerServicecatalogPortfolioInput {}

export namespace EnableSagemakerServicecatalogPortfolioInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSagemakerServicecatalogPortfolioInput): any => ({
    ...obj,
  });
}

export interface EnableSagemakerServicecatalogPortfolioOutput {}

export namespace EnableSagemakerServicecatalogPortfolioOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSagemakerServicecatalogPortfolioOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A schedule for a model monitoring job. For information about model monitor, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model
 *                 Monitor</a>.</p>
 */
export interface MonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The status of the monitoring schedule. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The schedule is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The schedule failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SCHEDULED</code> - The schedule was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STOPPED</code> - The schedule was stopped.</p>
   *             </li>
   *          </ul>
   */
  MonitoringScheduleStatus?: ScheduleStatus | string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>If the monitoring schedule failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time the monitoring schedule was changed.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * <p>The endpoint that hosts the model being monitored.</p>
   */
  EndpointName?: string;

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>A list of the tags associated with the monitoring schedlue. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace MonitoringSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>A hosted endpoint for real-time inference.</p>
 */
export interface Endpoint {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The endpoint configuration associated with the endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>A list of the production variants hosted on the endpoint. Each production variant is a
   *             model.</p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the endpoint failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A list of monitoring schedules for the endpoint. For information about model
   *             monitoring, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
   */
  MonitoringSchedules?: MonitoringSchedule[];

  /**
   * <p>A list of the tags associated with the endpoint. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

export enum EndpointConfigSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace EndpointConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointConfigSummary): any => ({
    ...obj,
  });
}

export enum EndpointSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   *         <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;
}

export namespace EndpointSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of an experiment as returned by the <a>Search</a> API.</p>
 */
export interface Experiment {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The list of tags that are associated with the experiment. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace Experiment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a>DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ExperimentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the metadata for Fail step.</p>
 */
export interface FailStepMetadata {
  /**
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   */
  ErrorMessage?: string;
}

export namespace FailStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
 *          A Feature Group can be visualized as a table which has rows,
 *          with a unique identifier for each row where each column in the table is a feature.
 *          In principle, a Feature Group is composed of features and values per features.</p>
 */
export interface FeatureGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn?: string;

  /**
   * <p>The name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName?: string;

  /**
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *       <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   */
  RecordIdentifierFeatureName?: string;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event
   *          occurs that corresponds to the creation or update of a <code>Record</code> in
   *          <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          must have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName?: string;

  /**
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
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating the last time you updated the feature group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly; the default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key
   *          Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *          <code>S3StorageConfig</code>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A <code>FeatureGroup</code> status.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of <code>OfflineStore</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value that indicates whether the feature group was updated successfully.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to
   *          be replicated in the <code>OfflineStore</code>. This is
   *          failure may be due to a failure to create a <code>FeatureGroup</code> in
   *          or delete a <code>FeatureGroup</code> from the <code>OfflineStore</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

export namespace FeatureGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureGroup): any => ({
    ...obj,
  });
}

export enum FeatureGroupSortBy {
  CREATION_TIME = "CreationTime",
  FEATURE_GROUP_STATUS = "FeatureGroupStatus",
  NAME = "Name",
  OFFLINE_STORE_STATUS = "OfflineStoreStatus",
}

export enum FeatureGroupSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
 * <p>The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 */
export interface FeatureGroupSummary {
  /**
   * <p>The name of <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>A timestamp indicating the time of creation time of the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;
}

export namespace FeatureGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureGroupSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata for a feature. It can either be metadata that you specify, or metadata that is updated automatically.</p>
 */
export interface FeatureMetadata {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group.</p>
   */
  FeatureGroupArn?: string;

  /**
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName?: string;

  /**
   * <p>The name of feature.</p>
   */
  FeatureName?: string;

  /**
   * <p>The data type of the feature.</p>
   */
  FeatureType?: FeatureType | string;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when the feature was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>An optional description that you specify to better describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>Optional key-value pairs that you specify to better describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

export namespace FeatureMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureMetadata): any => ({
    ...obj,
  });
}

export enum Operator {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo",
  IN = "In",
  LESS_THAN = "LessThan",
  LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo",
  NOT_EQUALS = "NotEquals",
  NOT_EXISTS = "NotExists",
}

/**
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a>Search</a> API.</p>
 *
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the
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
 *                   <code>{</code>
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
 *                   <code>}</code>
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
 *                   <code> {</code>
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
 *                   <code> }</code>
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
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a>SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
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
  Operator?: Operator | string;

  /**
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

export namespace FlowDefinitionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinitionSummary): any => ({
    ...obj,
  });
}

export interface GetDeviceFleetReportRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace GetDeviceFleetReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceFleetReportRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceFleetReportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp of when the report was generated.</p>
   */
  ReportGenerated?: Date;

  /**
   * <p>Status of devices.</p>
   */
  DeviceStats?: DeviceStats;

  /**
   * <p>The versions of Edge Manager agent deployed on the fleet.</p>
   */
  AgentVersions?: AgentVersion[];

  /**
   * <p>Status of model on device.</p>
   */
  ModelStats?: EdgeModelStat[];
}

export namespace GetDeviceFleetReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceFleetReportResponse): any => ({
    ...obj,
  });
}

export interface GetLineageGroupPolicyRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

export namespace GetLineageGroupPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLineageGroupPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetLineageGroupPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The resource policy that gives access to the lineage group in another account.</p>
   */
  ResourcePolicy?: string;
}

export namespace GetLineageGroupPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLineageGroupPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to get the resource policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export namespace GetModelPackageGroupPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelPackageGroupPolicyInput): any => ({
    ...obj,
  });
}

export interface GetModelPackageGroupPolicyOutput {
  /**
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

export namespace GetModelPackageGroupPolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelPackageGroupPolicyOutput): any => ({
    ...obj,
  });
}

export interface GetSagemakerServicecatalogPortfolioStatusInput {}

export namespace GetSagemakerServicecatalogPortfolioStatusInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSagemakerServicecatalogPortfolioStatusInput): any => ({
    ...obj,
  });
}

export enum SagemakerServicecatalogStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * <p>Whether Service Catalog is enabled or disabled in SageMaker.</p>
   */
  Status?: SagemakerServicecatalogStatus | string;
}

export namespace GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSagemakerServicecatalogPortfolioStatusOutput): any => ({
    ...obj,
  });
}

export enum ResourceType {
  ENDPOINT = "Endpoint",
  EXPERIMENT = "Experiment",
  EXPERIMENT_TRIAL = "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent",
  FEATURE_GROUP = "FeatureGroup",
  FEATURE_METADATA = "FeatureMetadata",
  MODEL_PACKAGE = "ModelPackage",
  MODEL_PACKAGE_GROUP = "ModelPackageGroup",
  PIPELINE = "Pipeline",
  PIPELINE_EXECUTION = "PipelineExecution",
  PROJECT = "Project",
  TRAINING_JOB = "TrainingJob",
}

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

export namespace PropertyNameQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyNameQuery): any => ({
    ...obj,
  });
}

/**
 * <p>Specified in the <a>GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

export namespace SuggestionQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuggestionQuery): any => ({
    ...obj,
  });
}

export interface GetSearchSuggestionsRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

export namespace GetSearchSuggestionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSearchSuggestionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the Amazon SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

export namespace PropertyNameSuggestion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyNameSuggestion): any => ({
    ...obj,
  });
}

export interface GetSearchSuggestionsResponse {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

export namespace GetSearchSuggestionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSearchSuggestionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;
}

export namespace GitConfigForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GitConfigForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

export namespace HumanTaskUiSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HumanTaskUiSummary): any => ({
    ...obj,
  });
}

export enum HyperParameterTuningJobSortByOptions {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             use
   *             for each iteration. Currently, the only valid value is
   *             Bayesian.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

export namespace HyperParameterTuningJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | string | undefined;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export enum ImageSortBy {
  CREATION_TIME = "CREATION_TIME",
  IMAGE_NAME = "IMAGE_NAME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
}

export enum ImageSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | string | undefined;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

export namespace ImageVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageVersion): any => ({
    ...obj,
  });
}

export enum ImageVersionSortBy {
  CREATION_TIME = "CREATION_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  VERSION = "VERSION",
}

export enum ImageVersionSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>A structure that contains a list of recommendation jobs.</p>
 */
export interface InferenceRecommendationsJob {
  /**
   * <p>The name of the job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The job description.</p>
   */
  JobDescription: string | undefined;

  /**
   * <p>The recommendation job type.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;
}

export namespace InferenceRecommendationsJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceRecommendationsJob): any => ({
    ...obj,
  });
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

export namespace LabelCountersForWorkteam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelCountersForWorkteam): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account used to start the labeling job.</p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

export namespace LabelingJobForWorkteamSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobForWorkteamSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

export namespace LabelingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a Lambda step.</p>
 */
export interface LambdaStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   */
  Arn?: string;

  /**
   * <p>A list of the output parameters of the Lambda step.</p>
   */
  OutputParameters?: OutputParameter[];
}

export namespace LambdaStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 */
export interface LineageGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * <p>The display name of the lineage group summary.</p>
   */
  DisplayName?: string;

  /**
   * <p>The creation time of the lineage group summary.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time of the lineage group summary.</p>
   */
  LastModifiedTime?: Date;
}

export namespace LineageGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineageGroupSummary): any => ({
    ...obj,
  });
}

export enum LineageType {
  ACTION = "Action",
  ARTIFACT = "Artifact",
  CONTEXT = "Context",
  TRIAL_COMPONENT = "TrialComponent",
}

export enum SortActionsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListActionsRequest {
  /**
   * <p>A filter that returns only actions with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only actions of the specified type.</p>
   */
  ActionType?: string;

  /**
   * <p>A filter that returns only actions created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only actions created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortActionsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions,
   *         the call returns a token for getting the next set of actions.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of actions to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListActionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActionsRequest): any => ({
    ...obj,
  });
}

export interface ListActionsResponse {
  /**
   * <p>A list of actions and their properties.</p>
   */
  ActionSummaries?: ActionSummary[];

  /**
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListActionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActionsResponse): any => ({
    ...obj,
  });
}

export interface ListAlgorithmsInput {
  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListAlgorithmsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlgorithmsInput): any => ({
    ...obj,
  });
}

export interface ListAlgorithmsOutput {
  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListAlgorithmsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlgorithmsOutput): any => ({
    ...obj,
  });
}

export interface ListAppImageConfigsRequest {
  /**
   * <p>The maximum number of AppImageConfigs to return in the response. The default value is
   *         10. </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *         AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: AppImageConfigSortKey | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListAppImageConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppImageConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListAppImageConfigsResponse {
  /**
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of AppImageConfigs and their properties.</p>
   */
  AppImageConfigs?: AppImageConfigDetails[];
}

export namespace ListAppImageConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppImageConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListAppsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: AppSortKey | string;

  /**
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter to search by user profile name.</p>
   */
  UserProfileNameEquals?: string;
}

export namespace ListAppsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj,
  });
}

export interface ListAppsResponse {
  /**
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAppsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppsResponse): any => ({
    ...obj,
  });
}

export enum SortArtifactsBy {
  CREATION_TIME = "CreationTime",
}

export interface ListArtifactsRequest {
  /**
   * <p>A filter that returns only artifacts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only artifacts of the specified type.</p>
   */
  ArtifactType?: string;

  /**
   * <p>A filter that returns only artifacts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only artifacts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortArtifactsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts,
   *         the call returns a token for getting the next set of artifacts.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of artifacts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListArtifactsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListArtifactsRequest): any => ({
    ...obj,
  });
}

export interface ListArtifactsResponse {
  /**
   * <p>A list of artifacts and their properties.</p>
   */
  ArtifactSummaries?: ArtifactSummary[];

  /**
   * <p>A token for getting the next set of artifacts, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListArtifactsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListArtifactsResponse): any => ({
    ...obj,
  });
}

export enum SortAssociationsBy {
  CREATION_TIME = "CreationTime",
  DESTINATION_ARN = "DestinationArn",
  DESTINATION_TYPE = "DestinationType",
  SOURCE_ARN = "SourceArn",
  SOURCE_TYPE = "SourceType",
}

export interface ListAssociationsRequest {
  /**
   * <p>A filter that returns only associations with the specified source ARN.</p>
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only associations with the specified destination Amazon Resource Name (ARN).</p>
   */
  DestinationArn?: string;

  /**
   * <p>A filter that returns only associations with the specified source type.</p>
   */
  SourceType?: string;

  /**
   * <p>A filter that returns only associations with the specified destination type.</p>
   */
  DestinationType?: string;

  /**
   * <p>A filter that returns only associations of the specified type.</p>
   */
  AssociationType?: AssociationEdgeType | string;

  /**
   * <p>A filter that returns only associations created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only associations created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortAssociationsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations,
   *         the call returns a token for getting the next set of associations.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of associations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationsRequest): any => ({
    ...obj,
  });
}

export interface ListAssociationsResponse {
  /**
   * <p>A list of associations and their properties.</p>
   */
  AssociationSummaries?: AssociationSummary[];

  /**
   * <p>A token for getting the next set of associations, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociationsResponse): any => ({
    ...obj,
  });
}

export interface ListAutoMLJobsRequest {
  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus | string;

  /**
   * <p>The sort order for the results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is <code>Name</code>.</p>
   */
  SortBy?: AutoMLSortBy | string;

  /**
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAutoMLJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAutoMLJobsRequest): any => ({
    ...obj,
  });
}

export interface ListAutoMLJobsResponse {
  /**
   * <p>Returns a summary list of jobs.</p>
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAutoMLJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAutoMLJobsResponse): any => ({
    ...obj,
  });
}

export interface ListCandidatesForAutoMLJobRequest {
  /**
   * <p>List the candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>List the candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus | string;

  /**
   * <p>List the candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>Descending</code>.</p>
   */
  SortBy?: CandidateSortBy | string;

  /**
   * <p>List the job's candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListCandidatesForAutoMLJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCandidatesForAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface ListCandidatesForAutoMLJobResponse {
  /**
   * <p>Summaries about the <code>AutoMLCandidates</code>.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListCandidatesForAutoMLJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCandidatesForAutoMLJobResponse): any => ({
    ...obj,
  });
}

export interface ListCodeRepositoriesInput {
  /**
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder | string;
}

export namespace ListCodeRepositoriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCodeRepositoriesInput): any => ({
    ...obj,
  });
}

export interface ListCodeRepositoriesOutput {
  /**
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *         <ul>
   *             <li>
   *                 <p>Name</p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                 <p>Creation time</p>
   *             </li>
   *             <li>
   *                 <p>Last modified time</p>
   *             </li>
   *             <li>
   *                 <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used
   *                     to access the repository.</p>
   *             </li>
   *          </ul>
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCodeRepositoriesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCodeRepositoriesOutput): any => ({
    ...obj,
  });
}

export enum ListCompilationJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListCompilationJobsRequest {
  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <a>DescribeCompilationJobResponse$CompilationJobStatus</a> status.</p>
   */
  StatusEquals?: CompilationJobStatus | string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListCompilationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCompilationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListCompilationJobsResponse {
  /**
   * <p>An array of <a>CompilationJobSummary</a> objects, each describing a model
   *             compilation job. </p>
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCompilationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCompilationJobsResponse): any => ({
    ...obj,
  });
}

export enum SortContextsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListContextsRequest {
  /**
   * <p>A filter that returns only contexts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only contexts of the specified type.</p>
   */
  ContextType?: string;

  /**
   * <p>A filter that returns only contexts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only contexts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortContextsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts,
   *         the call returns a token for getting the next set of contexts.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of contexts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export namespace ListContextsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContextsRequest): any => ({
    ...obj,
  });
}

export interface ListContextsResponse {
  /**
   * <p>A list of contexts and their properties.</p>
   */
  ContextSummaries?: ContextSummary[];

  /**
   * <p>A token for getting the next set of contexts, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListContextsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContextsResponse): any => ({
    ...obj,
  });
}

export enum MonitoringJobDefinitionSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListDataQualityJobDefinitionsRequest {
  /**
   * <p>A filter that lists the data quality job definitions associated with the specified
   *          endpoint.</p>
   */
  EndpointName?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          transform jobs, use the token in the next request.></p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of data quality monitoring job definitions to return in the
   *          response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the data quality monitoring job definition name. This filter returns only
   *          data quality monitoring job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListDataQualityJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataQualityJobDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a monitoring job.</p>
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * <p>The time that the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint that the job monitors.</p>
   */
  EndpointName: string | undefined;
}

export namespace MonitoringJobDefinitionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringJobDefinitionSummary): any => ({
    ...obj,
  });
}

export interface ListDataQualityJobDefinitionsResponse {
  /**
   * <p>A list of data quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data
   *          quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDataQualityJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataQualityJobDefinitionsResponse): any => ({
    ...obj,
  });
}

export enum ListDeviceFleetsSortBy {
  CreationTime = "CREATION_TIME",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  Name = "NAME",
}

export interface ListDeviceFleetsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter fleets where packaging job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter fleets where the edge packaging job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Select fleets where the job was updated after X</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Select fleets where the job was updated before X</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Filter for fleets containing this name in their fleet device name.</p>
   */
  NameContains?: string;

  /**
   * <p>The column to sort by.</p>
   */
  SortBy?: ListDeviceFleetsSortBy | string;

  /**
   * <p>What direction to sort in.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListDeviceFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceFleetsRequest): any => ({
    ...obj,
  });
}

export interface ListDeviceFleetsResponse {
  /**
   * <p>Summary of the device fleet.</p>
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

export namespace ListDeviceFleetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceFleetsResponse): any => ({
    ...obj,
  });
}

export interface ListDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Select fleets where the job was updated after X</p>
   */
  LatestHeartbeatAfter?: Date;

  /**
   * <p>A filter that searches devices that contains this name in any of their models.</p>
   */
  ModelName?: string;

  /**
   * <p>Filter for fleets containing this name in their device fleet name.</p>
   */
  DeviceFleetName?: string;
}

export namespace ListDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
  });
}

export interface ListDevicesResponse {
  /**
   * <p>Summary of devices.</p>
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

export namespace ListDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
}

export interface ListDomainsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;
}

export namespace ListDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
}

export interface ListDomainsResponse {
  /**
   * <p>The list of domains.</p>
   */
  Domains?: DomainDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
}

export enum ListEdgeDeploymentPlansSortBy {
  CreationTime = "CREATION_TIME",
  DeviceFleetName = "DEVICE_FLEET_NAME",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  Name = "NAME",
}

export interface ListEdgeDeploymentPlansRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;

  /**
   * <p>Selects edge deployment plans created after this time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Selects edge deployment plans created before this time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Selects edge deployment plans that were last updated after this time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Selects edge deployment plans that were last updated before this time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Selects edge deployment plans with names containing this name.</p>
   */
  NameContains?: string;

  /**
   * <p>Selects edge deployment plans with a device fleet name containing this name.</p>
   */
  DeviceFleetNameContains?: string;

  /**
   * <p>The column by which to sort the edge deployment plans. Can be one of <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>, <code>LASTMODIFIEDTIME</code>.</p>
   */
  SortBy?: ListEdgeDeploymentPlansSortBy | string;

  /**
   * <p>The direction of the sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListEdgeDeploymentPlansRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEdgeDeploymentPlansRequest): any => ({
    ...obj,
  });
}

export interface ListEdgeDeploymentPlansResponse {
  /**
   * <p>List of summaries of edge deployment plans.</p>
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEdgeDeploymentPlansResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEdgeDeploymentPlansResponse): any => ({
    ...obj,
  });
}

export enum ListEdgePackagingJobsSortBy {
  CreationTime = "CREATION_TIME",
  EdgePackagingJobStatus = "STATUS",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  ModelName = "MODEL_NAME",
  Name = "NAME",
}

export interface ListEdgePackagingJobsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Select jobs where the job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Select jobs where the job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Select jobs where the job was updated after specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Select jobs where the job was updated before specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Filter for jobs containing this name in their packaging job name.</p>
   */
  NameContains?: string;

  /**
   * <p>Filter for jobs where the model name contains this string.</p>
   */
  ModelNameContains?: string;

  /**
   * <p>The job status to filter for.</p>
   */
  StatusEquals?: EdgePackagingJobStatus | string;

  /**
   * <p>Use to specify what column to sort by.</p>
   */
  SortBy?: ListEdgePackagingJobsSortBy | string;

  /**
   * <p>What direction to sort by.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListEdgePackagingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEdgePackagingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListEdgePackagingJobsResponse {
  /**
   * <p>Summaries of edge packaging jobs.</p>
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * <p>Token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEdgePackagingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEdgePackagingJobsResponse): any => ({
    ...obj,
  });
}

export enum OrderKey {
  Ascending = "Ascending",
  Descending = "Descending",
}

export interface ListEndpointConfigsInput {
  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListEndpointConfigsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointConfigsInput): any => ({
    ...obj,
  });
}

export interface ListEndpointConfigsOutput {
  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
}

export namespace ListEndpointConfigsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointConfigsOutput): any => ({
    ...obj,
  });
}

export interface ListEndpointsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus | string;
}

export namespace ListEndpointsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsInput): any => ({
    ...obj,
  });
}

export interface ListEndpointsOutput {
  /**
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListEndpointsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsOutput): any => ({
    ...obj,
  });
}

export enum SortExperimentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListExperimentsRequest {
  /**
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of experiments to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;
}

export namespace ListExperimentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsRequest): any => ({
    ...obj,
  });
}

export interface ListExperimentsResponse {
  /**
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];

  /**
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListExperimentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj,
  });
}

export interface ListFeatureGroupsRequest {
  /**
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters
   *             <code>FeatureGroup</code>s by name. </p>
   */
  NameContains?: string;

  /**
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus | string;

  /**
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status. </p>
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue | string;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific
   *          date and time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific
   *          date and time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The order in which feature groups are listed.</p>
   */
  SortOrder?: FeatureGroupSortOrder | string;

  /**
   * <p>The value on which the feature group list is sorted.</p>
   */
  SortBy?: FeatureGroupSortBy | string;

  /**
   * <p>The maximum number of results returned by <code>ListFeatureGroups</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken?: string;
}

export namespace ListFeatureGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFeatureGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListFeatureGroupsResponse {
  /**
   * <p>A summary of feature groups.</p>
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken: string | undefined;
}

export namespace ListFeatureGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFeatureGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsRequest {
  /**
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

export namespace ListFlowDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsResponse {
  /**
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListFlowDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListHumanTaskUisRequest {
  /**
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

export namespace ListHumanTaskUisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHumanTaskUisRequest): any => ({
    ...obj,
  });
}

export interface ListHumanTaskUisResponse {
  /**
   * <p>An array of objects describing the human task user interfaces.</p>
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListHumanTaskUisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHumanTaskUisResponse): any => ({
    ...obj,
  });
}

export interface ListHyperParameterTuningJobsRequest {
  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus | string;
}

export namespace ListHyperParameterTuningJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsRequest): any => ({
    ...obj,
  });
}

export interface ListHyperParameterTuningJobsResponse {
  /**
   * <p>A list of <a>HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListHyperParameterTuningJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsResponse): any => ({
    ...obj,
  });
}

export interface ListImagesRequest {
  /**
   * <p>A filter that returns only images created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only images created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only images modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only images modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of images to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only images whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images,
   *         the call returns a token for getting the next set of images.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageSortBy | string;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageSortOrder | string;
}

export namespace ListImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj,
  });
}

export interface ListImagesResponse {
  /**
   * <p>A list of images and their properties.</p>
   */
  Images?: Image[];

  /**
   * <p>A token for getting the next set of images, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListImagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj,
  });
}

export interface ListImageVersionsRequest {
  /**
   * <p>A filter that returns only versions created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only versions created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The name of the image to list the versions of.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>A filter that returns only versions modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only versions modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of versions to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of
   *         versions, the call returns a token for getting the next set of versions.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageVersionSortBy | string;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageVersionSortOrder | string;
}

export namespace ListImageVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListImageVersionsResponse {
  /**
   * <p>A list of versions and their properties.</p>
   */
  ImageVersions?: ImageVersion[];

  /**
   * <p>A token for getting the next set of versions, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListImageVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageVersionsResponse): any => ({
    ...obj,
  });
}

export enum ListInferenceRecommendationsJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListInferenceRecommendationsJobsRequest {
  /**
   * <p>A filter that returns only jobs created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs that were last modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs that were last modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the job name. This filter returns only recommendations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only inference recommendations jobs with a specific status.</p>
   */
  StatusEquals?: RecommendationJobStatus | string;

  /**
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy | string;

  /**
   * <p>The sort order for the results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request
   *          was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *          of recommendations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of recommendations to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListInferenceRecommendationsJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceRecommendationsJobsRequest): any => ({
    ...obj,
  });
}

export interface ListInferenceRecommendationsJobsResponse {
  /**
   * <p>The recommendations created from the Amazon SageMaker Inference Recommender job.</p>
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListInferenceRecommendationsJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceRecommendationsJobsResponse): any => ({
    ...obj,
  });
}

export enum SortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListLabelingJobsRequest {
  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   */
  StatusEquals?: LabelingJobStatus | string;
}

export namespace ListLabelingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLabelingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListLabelingJobsResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLabelingJobsResponse): any => ({
    ...obj,
  });
}

export enum ListLabelingJobsForWorkteamSortByOptions {
  CREATION_TIME = "CreationTime",
}

export interface ListLabelingJobsForWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListLabelingJobsForWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLabelingJobsForWorkteamRequest): any => ({
    ...obj,
  });
}

export interface ListLabelingJobsForWorkteamResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsForWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLabelingJobsForWorkteamResponse): any => ({
    ...obj,
  });
}

export enum SortLineageGroupsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListLineageGroupsRequest {
  /**
   * <p>A timestamp to filter against lineage groups created after a certain point in time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A timestamp to filter against lineage groups created before a certain point in time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>CreationTime</code>.</p>
   */
  SortBy?: SortLineageGroupsBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *          10.</p>
   */
  MaxResults?: number;
}

export namespace ListLineageGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLineageGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListLineageGroupsResponse {
  /**
   * <p>A list of lineage groups and their properties.</p>
   */
  LineageGroupSummaries?: LineageGroupSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLineageGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLineageGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListModelBiasJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model bias.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The
   *          default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model bias jobs to return in the response. The default value is
   *          10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListModelBiasJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelBiasJobDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListModelBiasJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelBiasJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelBiasJobDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model explainability.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The
   *          default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model explainability jobs created before a specified
   *          time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model explainability jobs created after a specified
   *          time.</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListModelExplainabilityJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelExplainabilityJobDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelExplainabilityJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelExplainabilityJobDefinitionsResponse): any => ({
    ...obj,
  });
}

export enum ModelMetadataFilterType {
  DOMAIN = "Domain",
  FRAMEWORK = "Framework",
  FRAMEWORKVERSION = "FrameworkVersion",
  TASK = "Task",
}

/**
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 */
export interface ModelMetadataFilter {
  /**
   * <p>The name of the of the model to filter by.</p>
   */
  Name: ModelMetadataFilterType | string | undefined;

  /**
   * <p>The value to filter the model metadata.</p>
   */
  Value: string | undefined;
}

export namespace ModelMetadataFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataFilter): any => ({
    ...obj,
  });
}

/**
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 */
export interface ModelMetadataSearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: ModelMetadataFilter[];
}

export namespace ModelMetadataSearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataSearchExpression): any => ({
    ...obj,
  });
}

export interface ListModelMetadataRequest {
  /**
   * <p>One or more filters that searches for the specified resource or resources
   *           in a search. All resource objects that satisfy the expression's condition are
   *           included in the search results. Specify the  Framework, FrameworkVersion, Domain
   *           or Task to filter supported. Filter names and values are case-sensitive.</p>
   */
  SearchExpression?: ModelMetadataSearchExpression;

  /**
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated,
   *            the response includes a NextToken. To retrieve the next set of model metadata,
   *            use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListModelMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelMetadataRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the model metadata.</p>
 */
export interface ModelMetadataSummary {
  /**
   * <p>The machine learning domain of the model.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The machine learning framework of the model.</p>
   */
  Framework: string | undefined;

  /**
   * <p>The machine learning task of the model.</p>
   */
  Task: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  Model: string | undefined;

  /**
   * <p>The framework version of the model.</p>
   */
  FrameworkVersion: string | undefined;
}

export namespace ModelMetadataSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelMetadataSummary): any => ({
    ...obj,
  });
}

export interface ListModelMetadataResponse {
  /**
   * <p>A structure that holds model metadata.</p>
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListModelMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelMetadataResponse): any => ({
    ...obj,
  });
}

export enum ModelPackageGroupSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListModelPackageGroupsInput {
  /**
   * <p>A filter that returns only model groups created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model groups created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model group name. This filter returns only model groups whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             model groups, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageGroupSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListModelPackageGroupsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelPackageGroupsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a model group.</p>
 */
export interface ModelPackageGroupSummary {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | string | undefined;
}

export namespace ModelPackageGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageGroupSummary): any => ({
    ...obj,
  });
}

export interface ListModelPackageGroupsOutput {
  /**
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set
   *             of model groups, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelPackageGroupsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelPackageGroupsOutput): any => ({
    ...obj,
  });
}

export enum ModelPackageType {
  BOTH = "Both",
  UNVERSIONED = "Unversioned",
  VERSIONED = "Versioned",
}

export enum ModelPackageSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListModelPackagesInput {
  /**
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only the model packages with the specified approval
   *             status.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>A filter that returns only the model packages of the specified type. This can be one
   *             of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>UNVERSIONED</code> - List only unversioined models.
   *                     This is the default value if no <code>ModelPackageType</code> is specified.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VERSIONED</code> - List only versioned models.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOTH</code> - List both versioned and unversioned models.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageType?: ModelPackageType | string;

  /**
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListModelPackagesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelPackagesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>If the model package is a versioned model, the version of the model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>The approval status of the model. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;
}

export namespace ModelPackageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageSummary): any => ({
    ...obj,
  });
}

export interface ListModelPackagesOutput {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelPackagesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelPackagesOutput): any => ({
    ...obj,
  });
}

export interface ListModelQualityJobDefinitionsRequest {
  /**
   * <p>A filter that returns only model quality monitoring job definitions that are associated
   *          with the specified endpoint.</p>
   */
  EndpointName?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a call to
   *             <code>ListModelQualityJobDefinitions</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the transform job name. This filter returns only model quality monitoring
   *          job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListModelQualityJobDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelQualityJobDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListModelQualityJobDefinitionsResponse {
  /**
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of model
   *          quality monitoring job definitions, use it in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListModelQualityJobDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelQualityJobDefinitionsResponse): any => ({
    ...obj,
  });
}

export enum ModelSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

export interface ListModelsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model name. This filter returns only models whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListModelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace ModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj,
  });
}

export interface ListModelsOutput {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListModelsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelsOutput): any => ({
    ...obj,
  });
}

export enum MonitoringExecutionSortKey {
  CREATION_TIME = "CreationTime",
  SCHEDULED_TIME = "ScheduledTime",
  STATUS = "Status",
}

export interface ListMonitoringExecutionsRequest {
  /**
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus | string;

  /**
   * <p>Gets a list of the monitoring job runs of the specified monitoring job
   *          definitions.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring job runs of the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType | string;
}

export namespace ListMonitoringExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMonitoringExecutionsRequest): any => ({
    ...obj,
  });
}

export interface ListMonitoringExecutionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent reques</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMonitoringExecutionsResponse): any => ({
    ...obj,
  });
}

export enum MonitoringScheduleSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListMonitoringSchedulesRequest {
  /**
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringScheduleSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus | string;

  /**
   * <p>Gets a list of the monitoring schedules for the specified monitoring job
   *          definition.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring schedules for the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType | string;
}

export namespace ListMonitoringSchedulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMonitoringSchedulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export namespace MonitoringScheduleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoringScheduleSummary): any => ({
    ...obj,
  });
}

export interface ListMonitoringSchedulesResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringSchedulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMonitoringSchedulesResponse): any => ({
    ...obj,
  });
}

export enum NotebookInstanceLifecycleConfigSortKey {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name",
}

export enum NotebookInstanceLifecycleConfigSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | string;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;
}

export namespace ListNotebookInstanceLifecycleConfigsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotebookInstanceLifecycleConfigsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace NotebookInstanceLifecycleConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleConfigSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>If the response is truncated, SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}

export namespace ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotebookInstanceLifecycleConfigsOutput): any => ({
    ...obj,
  });
}

export enum NotebookInstanceSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum NotebookInstanceSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListNotebookInstancesInput {
  /**
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *         <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *         </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey | string;

  /**
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder | string;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus | string;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;
}

export namespace ListNotebookInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotebookInstancesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

export namespace NotebookInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotebookInstanceSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookInstancesOutput {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

export namespace ListNotebookInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotebookInstancesOutput): any => ({
    ...obj,
  });
}

export enum SortPipelineExecutionsBy {
  CREATION_TIME = "CreationTime",
  PIPELINE_EXECUTION_ARN = "PipelineExecutionArn",
}

export interface ListPipelineExecutionsRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>A filter that returns the pipeline executions that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipeline executions that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelineExecutionsBy | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline executions to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListPipelineExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A pipeline execution summary.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The start time of the pipeline execution.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   */
  PipelineExecutionFailureReason?: string;
}

export namespace PipelineExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionSummary): any => ({
    ...obj,
  });
}

export interface ListPipelineExecutionsResponse {
  /**
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified
   *          filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date,
   *          and the status. This list can be empty. </p>
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelineExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionsResponse): any => ({
    ...obj,
  });
}
